import React from 'react';
import { useState } from 'react';
import genreImg from '../../assets/img/genre.svg';
import SearchCategory from '../../components/atoms/searchCategory/SearchCategory';
import SmallCard from '../../components/molecules/smallCard/SmallCard';
import { Label } from 'flowbite-react';

function GenrePage() {
  const [quotes, setQuotes] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (data) => {
    setQuotes(data);
    setSearched(true);
  };
  
    return (
    <div className='flex'>
        <div className="flex flex-col gap-10 object-fill">
          <SearchCategory text={"Type a genre name"} onSearch={handleSearch} category={"genres"}/>
          <img className='w-1/2 ' src={genreImg} alt="Genre Graphic" />
          <Label style={{fontSize : '3.5rem', fontFamily: 'Open Sans', color: 'navy', fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: '15%'}}
              value="Genre"
            />
        </div>
        <div className='flex flex-col gap-5'>
        {searched && quotes.length === 0 ? (
          <h2>Sorry, there are no quotes available for this genre. <br/> Try another</h2>
        ) : (
          quotes.map((quote) => (
            <SmallCard
              key={quote.id}
              title={quote.title}
              text={quote.text}
              url={`/collection/song-details/${quote.id}`}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default GenrePage