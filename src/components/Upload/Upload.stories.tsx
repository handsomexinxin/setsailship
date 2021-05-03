import React, {useState} from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Upload from './Upload';
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
export const UploadComponent = () => {
  const [ show, setShow] = useState(true)
  return (
    <div>
      <h5>上传组件</h5>
      <Upload
        action="http://jsonplaceholder.typicode.com/posts"
        // onProgress={() => {console.log("onProgress")}}
        // onSuccess={() => {console.log("onSuccess")}}
        // onError={() => {console.log("onError")}}
        // onChange={() => {console.log("onChange")}}
        // beforeUpload={filePromise}
      ></Upload>
    </div>
  )
}

storiesOf('上传 组件', module)
  .add('Upload', UploadComponent)