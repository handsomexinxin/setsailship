import React, {FC} from "react"
import {UploadFile} from "./Upload"
import Icon from "../Icon/Icon"
import Progress from "../Progress/Progress"

interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = (props) => {
  const {
    fileList,
    onRemove
  } = props
  return (
    <ul className="setsail-upload-list">
      {
        fileList.map(item => {
          return (
            <li className="setsail-upload-list-item" key={item.uid} >
              <span className={`file-name file-name-${item.status}`}>
                <Icon icon="file-alt" theme="secondary" />
                {item.name}
              </span>
              <span className="file-status">
                {item.status === "uploading" && <Icon icon="spinner" theme="primary" spin />}
                {item.status === "success" && <Icon icon="check-circle" theme="success" />}
                {item.status === "error" && <Icon icon="times-circle" theme="danger" />}
              </span>
              <span className="file-actions">
                <Icon icon="times" onClick={() => {onRemove(item)}} />
              </span>
              {item.status === "uploading" && 
                <Progress percent={item.percent || 0} />
              }
            </li>
          )
        })
      }
    </ul>
  )
}

export default UploadList;
