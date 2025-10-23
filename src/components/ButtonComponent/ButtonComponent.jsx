import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({size, styleButton, styleTextButton,textButton,disabled,bordered, ...rests}) => {
  return (
    <Button
        style={{
          ...styleButton, 
          background: disabled ? '#ccc' : styleButton?.background,
          cursor: disabled ? 'not-allowed' : 'pointer',
          border: bordered === false ? 'none' : undefined,
        }}
        size={size}
        {...rests}
        ><span style={styleTextButton}>{textButton}</span>
    </Button>
  )
}

export default ButtonComponent