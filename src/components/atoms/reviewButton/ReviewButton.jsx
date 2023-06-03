import React from 'react';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';


function ReviewButton({book}) {
    const [ review, setReview ] = useState(null);
    const apiKey = import.meta.env.VITE_NYT_API_KEY;
    const titleLower = book.toLowerCase()
    const titleFormatted = titleLower.replace(/ /g , '%20')
    const apiURL = `https://api.nytimes.com/svc/books/v3/reviews.json?api-key=${apiKey}&title=${titleFormatted}`;


   
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiURL).then(res => res.json());
            setReview(response);
        }
        fetchData();
    }, []);


    if (!review || review.num_results === 0) {
        return null;
      }


      console.log(review.results[0].url)


    return (
    <Button className='px-4 py-2 my-8 rounded text-black bg-maingreen hover:text-white hover:bg-darkerGreen'><a href={review.results[0].url} target="_blank">Read <strong>The New York Times</strong> review</a></Button>
  )
}


export default ReviewButton
