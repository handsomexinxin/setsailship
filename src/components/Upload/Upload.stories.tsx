import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Upload, {UploadFile} from './Upload';
// const checkFileSize = (file: File) => {
//   if(Math.round(file.size / 1024) > 50) {
//     alert("文件过大")
//     return false;
//   }
//   return true;
// }
const filePromise = (file: File) => {
  console.log("filePromise", file);
  
  const newFile = new File([file], `${file.name}new_name.zip`, {type: file.type})
  return Promise.resolve(newFile)
}
const defaultFileList: UploadFile[] = [
  { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
  { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
  { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
]

export const UploadComponent = () => {
  // const [ show, setShow] = useState(true)
  return (
    <div>
      <h5>上传组件</h5>
      <Upload
      defaultFileList={defaultFileList}
        action="https://run.mocky.io/v3/64220d5a-080d-49c0-a704-679a5a63f7ee"
        onProgress={action("onProgress")}
        onSuccess={action("onSuccess")}
        onError={action("onError")}
        onChange={action("onChange")}
        beforeUpload={filePromise}
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

storiesOf('Upload 组件', module)
  .add('Upload', UploadComponent)