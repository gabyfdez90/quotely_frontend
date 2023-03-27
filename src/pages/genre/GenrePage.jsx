import React from 'react';
import { useState } from 'react';
import genreImg from '../../assets/img/genre.svg';
import SearchCategory from '../../components/atoms/searchCategory/SearchCategory';
import SmallCard from '../../components/molecules/smallCard/SmallCard'

function GenrePage() {
  const [quotes, setQuotes] = useState([]);

  const handleSearch = (data) => {
    setQuotes(data);
  };
  
    return (
    <div className='flex'>
        <div className="flex flex-col gap-4 align-center">
        <SearchCategory text={"Type a genre name"} onSearch={handleSearch} />
            <img className='w-1/2' src={genreImg} alt="Genre Graphic" />
            <h1>Genre</h1>
        </div>
        <div className='flex flex-col gap-5'>
        {quotes.map((quote) => (
                   <SmallCard
                   key={quote.id}
                   title={quote.title}
                   text={quote.text}
                   url={`/collection/song-details/${quote.id}`}
               />
      ))}
 
        </div>
    </div>
  )
}

export default GenrePage