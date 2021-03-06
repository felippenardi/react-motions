import React from 'react'
import styles from './styles'

function withFlash(Component) {
  const style = {
    WebkitAnimationName: "flash",
    animationName: "flash",
    WebkitAnimationDuration: "1s",
    animationDuration: "1s",
    WebkitAnimationFillMode: "both",
    animationFillMode: "both"
  }

  return (
    <div style={style}>
      {Component}
    </div>
  )
}

export default withFlash
