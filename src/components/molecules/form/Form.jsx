import React from 'react';
import { useState } from 'react';
import { Label, TextInput, Textarea } from 'flowbite-react';
import GeneralButton from '../../atoms/generalButton/GeneralButton';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [quoteText, setQuoteText] = useState('');
  const [author, setAuthor] = useState('');
  const [book, setBook] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState(0);
  const [authorProfession, setAuthorProfession] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();

  const formData = new FormData();
  formData.append('text', quoteText);
  formData.append('author_name', author);
  formData.append('genre_name', genre);
  formData.append('book_name', book);
  formData.append('book_year', year);
  formData.append('author_profession', authorProfession);
  console.log(formData)

    const response = await fetch('http://127.0.0.1:8000/api/quote', {
        method: 'POST',
        body: formData,
    });

      if (response.ok) {
        setShowModal(true);
        setQuoteText('');
        setAuthor('');
        setBook('');
        setGenre('');
        setYear(0);
        setAuthorProfession('');
      } else {
        console.error('Failed to register quote');
      }
  }

  const handleButtonClick = (event) => {
    event.preventDefault();
    handleSubmit(event);
    navigate("/collection");
  };
  
  return (
    <form className='bg-mustard rounded-md p-5 lg:w-1/2'>
      <div id="textarea">
        <div className="mb-6 block">
        <Label style={{fontSize : '2.5rem', fontFamily: 'Open Sans', color: 'navy', fontWeight: 'bold'}}
          htmlFor="comment"
          value="Add quote"
        />
      </div>
      <Textarea className='mb-6 bg-maingreen'
        id="quote-text"
        placeholder="Type your quote"
        required={true}
        rows={4}
        onChange={(e) => setQuoteText(e.target.value)}
      />
      </div>
      <div>
        <h2 className='flex justify-start mb-3 text-navy font-bold'>
          Author
        </h2>
        <TextInput style={{backgroundColor: '#70a9a1'}} id='quote-author' onChange={(e) => setAuthor(e.target.value)}/>
      </div>
      <div>
        <h2 className='flex justify-start mb-3 mt-3 text-navy font-bold'>
          Book
        </h2>
        <TextInput style={{backgroundColor: '#70a9a1'}} id='quote-book' onChange={(e) => setBook(e.target.value)}/>
      </div>
      <div>
        <h2 className='flex justify-start mb-3 mt-3 text-navy font-bold'>
          Genre
        </h2>
        <TextInput style={{backgroundColor: '#70a9a1'}} id='quote-genre' onChange={(e) => setGenre(e.target.value)}/>
      </div>
      <div>
        <h2 className='flex justify-start mb-3 mt-3 text-navy font-bold'>
          Publication Year
        </h2>
        <TextInput style={{backgroundColor: '#70a9a1'}} id='quote-year' onChange={(e) => setYear(e.target.value)}/>
      </div>
      <div>
        <h2 className='flex justify-start mb-3 mt-3 text-navy font-bold'>
          Author's profession
        </h2>
        <TextInput style={{backgroundColor: '#70a9a1'}} id='quote-profession' onChange={(e) => setAuthorProfession(e.target.value)}/>
      </div>
      <div className='flex justify-center mt-5'>
      <GeneralButton buttonType={'primary'} text={'Add quote'} onClick={handleButtonClick} />
      </div>
    </form>
  )
}

export default Form