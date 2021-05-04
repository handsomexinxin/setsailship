import React, { FC } from "react";
import { ThemeProps } from "../Icon/Icon";
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
    theme?: ThemeProps;
}
/**
 * Progress 进度条
 * ~~~js
 * // 这样引用
 * import { Progress } from 'setsailship'
 * ~~~
 */
export declare const Progress: FC<ProgressProps>;
export default Progress;
