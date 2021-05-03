import React from "react"
import {CSSTransition} from "react-transition-group"
import {CSSTransitionProps} from "react-transition-group/CSSTransition"

type AnimationName = {
  /** 动画方向 */
  animation?: 'zoom-in-top' | 'zoom-in-bottom' | 'zoom-in-left' | 'zoom-in-right',
  /** 是否需要空的块级元素包括来保证transition */
  wrapper?: boolean,
} & CSSTransitionProps

// interface TransitionProps extends CSSTransitionClassNames {
//   animation?: AnimationName;
//   classNames?: string | CSSTransitionClassNames;
// }
/**
 * 
 * ~~~js
 * 引入
 * import Transition from './Transition';
 * ~~~
 * 
 */
export const Transition :React.FC<AnimationName> = (props) => {
  const { children, classNames, animation, wrapper, ...restProps } = props

  return (
    <CSSTransition
      {...restProps}
      classNames={classNames? classNames: animation}
    >
      {wrapper? <div>{children}</div> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
  animation: "zoom-in-top"
}
export default Transition;
