import React, {FC, useRef, ChangeEvent, useState} from "react"
import axios from "axios"
import Button from "../Button/Button"

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

interface UploadProps {
  action: string;
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err:any, file: File) => void;
  onChange?: (file: File) => void;
}

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange
  } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>([])


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
    setFileList([_file, ...fileList])
    const formData = new FormData()
    formData.append(file.name, file)
    axios.post(action, formData, {
      headers: {
        "content-Type": "multipart/form-data"
      },
      onUploadProgress: (e) => {
        let percentage = Math.round((e.loaded * 100) / e.total) || 0
        // console.log(e);
        // console.log(percentage);
        if(percentage < 100) {
          uploadFileList(_file, {percent: percentage, status: "uploading"})
          
          if(onProgress) {
            onProgress(percentage, file)
          }
        }
      }
    }).then(resp => {
      console.log("success",resp);
      uploadFileList(_file, {percent: 100, status: "success", response: resp.data})
      if(onSuccess) {
        onSuccess(resp.data, file)
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
      <Button
        btnType="primary"
        onClick={handleClick}
      >
      upload File
      </Button>
      <input
        className="setsail-file-input"
        type="file"
        ref={fileInput}
        style={{display: "none"}}
        onChange={handleFileChange}
      />
    </div>
  )
}

export default Upload;