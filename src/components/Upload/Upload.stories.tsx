import React, {useState} from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Upload, {UploadFile} from './Upload';
const checkFileSize = (file: File) => {
  if(Math.round(file.size / 1024) > 50) {
    alert("文件过大")
    return false;
  }
  return true;
}
const filePromise = (file: File) => {
  console.log("filePromise", file);
  
  const newFile = new File([file], "new_name.zip", {type: file.type})
  return Promise.resolve(newFile)
}
const defaultFileList: UploadFile[] = [
  { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
  { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
  { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
]

export const UploadComponent = () => {
  const [ show, setShow] = useState(true)
  return (
    <div>
      <h5>上传组件</h5>
      <Upload
      defaultFileList={defaultFileList}
        action="https://run.mocky.io/v3/85f48aca-decd-40df-b6f9-23c5698d1897"
        // onProgress={() => {console.log("onProgress")}}
        // onSuccess={() => {console.log("onSuccess")}}
        // onError={() => {console.log("onError")}}
        // onChange={() => {console.log("onChange")}}
        // beforeUpload={filePromise}
        data={{"key": "value"}}
        name="fileNameSet"
        headers={{'X-Powered-By': "setsail"}}
        accept=".zip"
        multiple
        drag
      >
        <p style={{backgroundColor: "#20c997"}}>自定义children</p>
      </Upload>
    </div>
  )
}

storiesOf('上传 组件', module)
  .add('Upload', UploadComponent)