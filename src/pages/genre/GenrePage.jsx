import React from 'react';
import genreImg from '../../assets/img/genre.svg'
import SearchBar from '../../components/atoms/searchCollection/SearchCollection';

function GenrePage() {
  return (
    <div className='flex'>
        <div className="flex flex-col gap-4 align-center">
            
            <img className='w-1/2' src={genreImg} alt="Genre Graphic" />
        </div>
        <div className=''></div>
    </div>
  )
}

export default GenrePage