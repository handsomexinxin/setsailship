import React, {FC} from "react"
import { ThemeProps } from "../Icon/Icon"

export interface ProgressProps {
  /**进度条进度 */
  percent: number;
  /**进度条高度 */
  strokeHeight?: number;
  /**是否展示进度条文字 */
  showText?: boolean;
  /**进度条样式 */
  styles?: React.CSSProperties;
  /**进度条颜色 */
  theme?: ThemeProps
}
/**
 * Progress 进度条
 * ~~~js
 * // 这样引用
 * import { Progress } from 'setsailship'
 * ~~~
 */
export const Progress:FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight,
    showText,
    styles,
    theme
  } = props
  return (
    <div className="setsail-progress-bar" style={styles}>
      <div className="setsail-progress-bar-outer" style={{height: `${strokeHeight}px`}}>
        <div className={`setsail-progress-bar-inner color-${theme}`} style={{width: `${percent}%`}}>
          {showText && <span className="inner-text" >{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "primary"
}

export default Progress;
