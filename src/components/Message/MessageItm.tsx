import React, {useEffect, useMemo, useState} from "react";
import { unmountComponentAtNode } from "react-dom"
import classNames from "classnames";
export enum MessageType {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning"
}
export interface MessageProps {
  type?: MessageType;
  content: string;
  duration?: number,
}
export type MessagePropsBefore = {
	rootDom: HTMLElement; //这个用来干掉parentDom 这个可以常驻
	parentDom: Element | DocumentFragment; //这个是挂载点 要unmount卸载 完毕后卸载挂载点 注意！一共2步卸载，别漏了
};
type messageProps = MessagePropsBefore & MessageProps
const Message: React.FC<messageProps> = (props) => {
	const { rootDom, parentDom, content, duration, type } = props;
	const [timer, setTimer] = useState<any>(null)
	const classes = classNames("setsail-message-context", {
		[`message-${type}`]: type
	})
	const unmount = useMemo(() => {
		if(timer) {
			clearTimeout(timer)
			setTimer(null)
		}
		return () => {
			if (parentDom && rootDom && rootDom.contains(parentDom)) {
				unmountComponentAtNode(parentDom);
				rootDom.removeChild(parentDom);
			}
		};
	}, [parentDom, rootDom]);
	useEffect(() => {
		setTimer(
			setTimeout(() => {
				unmount();
			}, duration)
		)
	}, [unmount, duration]);
	return <div className={classes} >
		<div className={classNames("message-context")}>{content}</div>
		<div className={classNames("message-close")} style={{zIndex: 102, cursor: "pointer"}} onClick={() => {unmount()}}>X</div>
	</div>;
}
Message.defaultProps = {
  type: MessageType.Success,
  duration: 1500
}

export default Message