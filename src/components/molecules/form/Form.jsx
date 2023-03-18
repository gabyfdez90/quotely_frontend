import React from 'react';
import { Label, TextInput, Textarea } from 'flowbite-react';
import GeneralButton from '../../atoms/generalButton/GeneralButton';

function Form() {
  return (
    <form className='bg-mustard rounded-md p-5 lg:w-1/2'>
      <div id="textarea">
        <div className="mb-6 block">
        <Label style={{fontSize : '2.5rem', fontFamily: 'Open Sans', color: 'navy', fontWeight: 'bold'}}
          htmlFor="comment"
          value="New Quote"
        />
      </div>
      <Textarea className='mb-6 bg-maingreen'
        id="quote-text"
        placeholder="Type your quote"
        required={true}
        rows={4}
      />
      </div>
      <div>
        <h2 className='flex justify-start mb-3 text-navy font-bold'>
          Author
        </h2>
        <TextInput style={{backgroundColor: '#70a9a1'}} id='quote-author'/>
      </div>
      <div>
        <h2 className='flex justify-start mb-3 mt-3 text-navy font-bold'>
          Book
        </h2>
        <TextInput style={{backgroundColor: '#70a9a1'}} id='quote-book'/>
      </div>
      <div>
        <h2 className='flex justify-start mb-3 mt-3 text-navy font-bold'>
          Genre
        </h2>
        <TextInput style={{backgroundColor: '#70a9a1'}} id='quote-genre'/>
      </div>
      <div>
        <h2 className='flex justify-start mb-3 mt-3 text-navy font-bold'>
          Publication Year
        </h2>
        <TextInput style={{backgroundColor: '#70a9a1'}} id='quote-year'/>
      </div>
      <div>
        <h2 className='flex justify-start mb-3 mt-3 text-navy font-bold'>
          Author's profession
        </h2>
        <TextInput style={{backgroundColor: '#70a9a1'}} id='quote-profession'/>
      </div>
      <div className='flex justify-center mt-5'>
      <GeneralButton buttonType={'primary'} text={'Add quote'}  />
      </div>
    </form>
  )
}

export default Form