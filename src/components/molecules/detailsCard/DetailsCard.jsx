import React from 'react';
import { useEffect } from 'react';
import GeneralButton from '../../atoms/generalButton/GeneralButton';
import { useNavigate, useParams } from 'react-router-dom';

function DetailsCard({author, quote, book, genre, year, uploaded}) {
  const navigate = useNavigate();
  const { id } = useParams();
  
  function showUpdate() {
    navigate(`/edit/${id}`);
}

function showDelete() {
  navigate(`/delete/${id}`);
}

  return (
    <div className='bg-mustard lg:w-1/2 rounded-md  p-5 text-start'>
      <h2 className='text-4xl font-bold text-darkGreen mb-8'>{author}</h2>
      <p>{quote}</p>
      <h3 className='text-2xl mt-5  text-darkGreen'>Book</h3>
      <p>{book}</p>
      <h3 className='text-2xl mt-5  text-darkGreen'>Genre</h3>
      <p>{genre}</p>
      <h3 className='text-2xl mt-5  text-darkGreen'>Year</h3>
      <p>{year}</p>
      <h3 className='text-2xl mt-5  text-darkGreen'>Uploaded</h3>
      <p>{uploaded}</p>
      <div className='mt-10 flex gap-4 justify-end'>
        <GeneralButton buttonType={"primary"} text={"Update"} onClick={showUpdate}/>
        <GeneralButton buttonType={"secundary"} text={"Delete"} onClick={showDelete}/>
      </div>
    </div>
  )
}

export default DetailsCard