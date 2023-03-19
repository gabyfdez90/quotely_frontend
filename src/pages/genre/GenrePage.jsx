import React from 'react';
import { useState, useEffect } from 'react';
import genreImg from '../../assets/img/genre.svg';
import SearchCategory from '../../components/atoms/searchCategory/SearchCategory';
import SmallCard from '../../components/molecules/smallCard/SmallCard'

function GenrePage() {
  const [searchResult, setSearchResults] = useState([]);
  const [searchGenres, setSearchGenres] = useState("");
  const apiUrl = `http://127.0.0.1:8000/api/quotes`

  const handleSearch = (genreId) => {
    fetch(apiUrl).then((response) => response.json()).then((data)=>{
        const filteredQuotes = data.filter((quote) => quote.genre_ID === genreId);
        setSearchResults(filteredQuotes);
    })
    .catch((error) =>{console.error('Error fetching quotes', error);
    });
    };
  
    return (
    <div className='flex'>
        <div className="flex flex-col gap-4 align-center">
            <SearchCategory text={"Type a genre ID number"} onSearch={handleSearch} />
            <img className='w-1/2' src={genreImg} alt="Genre Graphic" />
        </div>
        <div className='flex flex-col gap-5'>
        {searchResult.map((quote) => (
                   <SmallCard
                   key={quote.id}
                   title = {quote.title}
                   text = {quote.text}
               />
      ))}
 
        </div>
    </div>
  )
}

export default GenrePage