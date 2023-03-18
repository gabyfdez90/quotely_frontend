import React from 'react'
import { useState } from 'react';

function SearchBar() {
    const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const handleSearchButtonClick = () => {
    const table = document.getElementById('songs-table');
    const rows = table.getElementsByTagName('tr');

    let foundSong = false;

    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');

      for (let j = 0; j < cells.length; j++) {
        const cellValue = cells[j].textContent.toLowerCase();
        if (cellValue.indexOf(searchText) > -1) {
          foundSong = true;
          cells[j].style.display = '';
        } else {
          cells[j].style.display = 'none';
        }
      }

      if (!foundSong) {
        rows[i].style.display = 'none';
      }
    }
  };
  
    return (
    <form className='w-80'>   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" id="search-input" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-darkGreen focus:border-darkGreen dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-darkGreen dark:focus:border-darkGreen" placeholder="Type a word in your quote" value={searchText} onChange={handleSearchTextChange} required />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-darkGreen hover:bg-darkerGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-darkGreen dark:hover:bgdarkerGreen dark:focus:bg-darkerGreen" id="search-button" onClick={handleSearchButtonClick}>Search</button>
    </div>
</form>
  )
}

export default SearchBar