import React, {FC, useRef, ChangeEvent, useState} from "react"
import axios from "axios"
import Button from "../Button/Button"
import  UploadList from './UploadList';
import Dragger from './Dragger';

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  /** 文件上传地址 */
  action: string;
  defaultFileList?: UploadFile[];
  /** 上传文件之前回调，修改文件属性或者返回boolean是否上传文件。 */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /**上传文件进度 */
  onProgress?: (percentage: number, file: UploadFile) => void;
  /**上传文件成功回调 */
  onSuccess?: (data: any, file: File) => void;
  /**上传文件失败回调 */
  onError?: (err:any, file: File) => void;
  /**file修改回调 */
  onChange?: (file: File) => void;
  /**删除回调 */
  onRemove?: (file: UploadFile) => void;
  /**添加自定义header */
  headers?: {[key: string]: any};
  /** 上传文件名 */
  name?: string;
  /**添加自定义post fromData */
  data?: {[key: string]: any};
  /** 是否携带cookie */
  withCredentials?: boolean;
  /**添加文件类型约束 */
  accept?: string;
  /**文件多选 */
  multiple?: boolean;
  /**是否开启拖动上传 */
  drag?: boolean
}

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange,
    onRemove,
    name,
    data,
    headers,
    withCredentials,
    accept,
    multiple,
    children,
    drag
  } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])


  const uploadFileList = (uploadFile: UploadFile, upDataObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if(file.uid === uploadFile.uid) {
          return {
            ...file, ...upDataObj
          }
        }else {
          return file
        }
      })
    })
  }

  const handleClick = () => {
    if(fileInput.current){
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if(!files) {
      return
    }
    uploadFiles(files)
    if(fileInput.current) {
      fileInput.current.value = ""
    }
  }
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter(item => {
        return item.uid !== file.uid
      })
    })
    if(onRemove) {
      onRemove(file)
    }
  }
  const   uploadFiles = (files: FileList) => {
    
    let postFiles = Array.from(files)
    postFiles.forEach(file => {
      if(!beforeUpload) {
        post(file);
      }else {
        const result = beforeUpload(file)
        if(result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile)
          })
        }else if(result !== false) {
          post(file)
        }
      }
    })
  }
  const post = (file: File) => {
    const _file: UploadFile = {
      uid: Date.now() + "upload-file",
      status: "ready",
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    setFileList(prevList => {
      return [_file, ...prevList]
    })
    const formData = new FormData()
    formData.append(name || "file-name", file)
    if(data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        "content-Type": "multipart/form-data"
      },
      withCredentials,
      onUploadProgress: (e) => {
        let percentage = Math.round((e.loaded * 100) / e.total) || 0
        // console.log(e);
        // console.log(percentage);
        if(percentage < 100) {
          uploadFileList(_file, {percent: percentage, status: "uploading"})
          
          if(onProgress) {
            onProgress(percentage, _file)
          }
        }
      }
    }).then(resp => {
      console.log("success",resp);
      uploadFileList(_file, {percent: 100, status: "success", response: resp.data})
      if(onSuccess) {
        onSuccess(resp.data, file)
      }
      if(onProgress) {
        onProgress(100, _file)
      }
      if(onChange) {
        onChange(file)
      }
    }).catch(err => {
      uploadFileList(_file, {status: "error", error: err})
      console.log("error", err);
      if(onError) {
        onError(err, file)
      }
      if(onChange) {
        onChange(file)
      }
    })
  }
  console.log("fileList", fileList)
  return (
    <div className="setsail-upload-component">
      {/* <Button
        btnType="primary"
        onClick={handleClick}
      >
      upload File
      </Button> */}
      <div
        className="setsail-upload-input"
        onClick={handleClick}
        style={{display: "inline-block"}}
        >
          {/* {children} */}
          {drag? <Dragger accept={accept} onFile={(files) => {uploadFiles(files)}}>children</Dragger> : children }
      <input
        className="setsail-file-input"
        type="file"
        ref={fileInput}
        style={{display: "none"}}
        onChange={handleFileChange}
        accept={accept}
        multiple={multiple}
        />
        </div>
      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
      />
    </div>
  )
}

Upload.defaultProps = {
  name: "file-name",
  withCredentials: false,
  drag: false
}

export default Upload;