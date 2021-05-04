import React from "react";
export declare type MessageType = "success" | "error" | "info" | "warning";
export interface MessageProps {
    type?: MessageType;
    content: string;
    duration?: number;
}
export declare type MessagePropsBefore = {
    rootDom: HTMLElement;
    parentDom: Element | DocumentFragment;
};
declare type messageProps = MessagePropsBefore & MessageProps;
declare const Message: React.FC<messageProps>;
export default Message;
