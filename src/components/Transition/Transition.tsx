import React from "react"
import {CSSTransition} from "react-transition-group"
import {CSSTransitionProps} from "react-transition-group/CSSTransition"

type AnimationName = {
  animation?: 'zoom-in-top' | 'zoom-in-bottom' | 'zoom-in-left' | 'zoom-in-right',
  wrapper?: boolean
} & CSSTransitionProps

// interface TransitionProps extends CSSTransitionClassNames {
//   animation?: AnimationName;
//   classNames?: string | CSSTransitionClassNames;
// }

const Transition :React.FC<AnimationName> = (props) => {
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
