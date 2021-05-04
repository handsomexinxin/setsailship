export declare type MessageType = "success" | "error" | "info" | "warning";
export interface createMessageProps {
    type?: MessageType;
    content: string;
    key?: string;
    duration?: number;
}
/**
 * message 全局轻提示
 * ~~~js
 * // 这样引用
 * import { message } from 'setsailship'
 * ~~~
 */
export declare const message: (props: createMessageProps) => any;
declare const _default: (props: createMessageProps) => any;
export default _default;
