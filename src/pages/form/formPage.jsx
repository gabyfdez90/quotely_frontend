import React from 'react';
import { useState } from 'react';
import Form from '../../components/molecules/form/Form';
import formImg from '../../assets/img/addQuote.svg'

function FormPage() {
    return (
    <div className='flex'>
        <Form />
        <img className='w-1/3' src={formImg} alt="Manage book quotes in the cloud" />
    </div>
  )
}

export default FormPage