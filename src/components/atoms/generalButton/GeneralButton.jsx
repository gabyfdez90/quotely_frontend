import { Button } from 'flowbite-react';
import React from 'react';
import classNames from 'classnames';


function GeneralButton({buttonType, text}) {
  const bgColor = buttonType === 'primary' ? 'bg-darkGreen' : 'bg-brown';
  const combinedClasses = classNames('px-4 py-2 rounded white', bgColor)
  
    return (
    <Button className={combinedClasses}>{text}
    </Button>
  )
}

export default GeneralButton

GeneralButton.defaultProps = {
  buttonType: 'primary'
};