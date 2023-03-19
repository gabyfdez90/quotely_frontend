import { Button } from 'flowbite-react';
import React from 'react';
import classNames from 'classnames';


function GeneralButton({buttonType, text, onClick}) {
  const bgColor = buttonType === 'primary' ? 'bg-darkGreen' : 'bg-brown';
  const hover = buttonType === 'primary' ? 'hover:bg-darkerGreen' : 'hover:bg-darkBrown'
  const combinedClasses = classNames('px-4 py-2 rounded white', bgColor, hover)
  
    return (
    <Button className={combinedClasses} onClick={onClick}>{text}
    </Button>
  )
}

export default GeneralButton

GeneralButton.defaultProps = {
  buttonType: 'primary'
};