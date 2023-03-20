import React from 'react';
import DetailsCard from '../../components/molecules/detailsCard/DetailsCard'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import detailsImg from '../../assets/img/quoteDetails.svg'

function SongDetailsPage() {
    const { id } = useParams();

    const [ quote, setQuote ] = useState(null);
    const apiURL = `http://127.0.0.1:8000/api/quote/${id}`;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiURL).then(res => res.json());
            setQuote(response);
        } 
        fetchData();
    }, []);

    function showUpdate() {
        navigate(`edit/`);
    }

    function showDelete() {
        navigate(`delete/`);
    }
    
    if (!quote) {
        return <div>Loading...</div>;
      }
    
    return (
        <div className='flex gap-10'>
            <img  className="w-1/3" src={detailsImg} alt="Reading quotes online" />
            <DetailsCard 
                author={quote.author.name}
                quote={quote.text}
                book={quote.book.name}
                genre={quote.genre.name}
                year={quote.book.year}
                uploaded={quote.created_at}
            />
        </div>
    );
    
}

export default SongDetailsPage