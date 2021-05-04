import React, {FC, useState, DragEvent} from "react"
import classNames from 'classnames';
import message from "../Message/Message"
interface DraggerProps {
  onFile: (files: FileList) => void;
  accept?: string;
}

export const Dragger: FC<DraggerProps> = (props) => {
  const {
    onFile,
    children,
    accept
  } = props

  const [dragOver, setDragOver] = useState(false)
  const classes = classNames('setsail-uploader-dragger', {
    'is-dragover': dragOver
  })
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragOver(false)
    if(accept) {
      const suffix = accept.substring(1)
      console.log(e.dataTransfer.files[0].type.includes(suffix));
      let newFiles:FileList = e.dataTransfer.files
      let flag = true
      Array.prototype.forEach.call(newFiles, file => {
        if(!file.type.includes(suffix)) {
          message({content: `${file.name}不符合类型要求, 请重新选择`, type: "warning"})
          flag = false
        }
      })
      if(flag) {
        onFile(newFiles)
      }
      
    }else {
      onFile(e.dataTransfer.files)
    }
  }
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }
  return (
    <div
    className={classes}
    onDragOver={e => {handleDrag(e, true)}}
    onDragLeave={e => {handleDrag(e, false)}}
    onDrop={handleDrop}
    >
      {children}
    </div>
  )
}

export default Dragger;

