import React from 'react';
import { useEffect, useState } from "react";
import GeneralButton from '../../components/atoms/generalButton/GeneralButton';
import { Table } from 'flowbite-react';
import { TableRow } from 'flowbite-react/lib/esm/components/Table/TableRow';
import { TableBody } from 'flowbite-react/lib/esm/components/Table/TableBody';
import SearchCollection from '../../components/atoms/searchCollection/SearchCollection';
import {useNavigate} from 'react-router-dom';


function CollectionPage() {
    
    const [ quotes, setQuotes ] = useState();
    const apiURL = 'http://127.0.0.1:8000/api/quotes';
    
    const navigate = useNavigate();
        
    function showDetails(id) {
        navigate(`song-details/${id}`);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiURL).then(res => res.json());
            console.log(response)
            setQuotes(response)
        } 
        fetchData();
        console.log({quotes});
    }, []);


  return (
    <div className='flex flex-col gap-5'>
        <div className='flex justify-between overflow-hidden'>
            <h2 style={{fontSize: '2rem'}}>Your quotes</h2>
            <div className='flex justify-end gap-5'>
                <GeneralButton buttonType={'primary'} text={'Add quote'} />
                <SearchCollection />
            </div>
        </div>
            <Table >
                <Table.Head>
                    <Table.HeadCell>
                        Quote
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Author
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Book
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Genre
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Details
                    </Table.HeadCell>
                </Table.Head>
                <TableBody>
                {
                    quotes && quotes.map(quote =>
                        <TableRow key={quote.id}>
                            <Table.Cell>{quote.text}</Table.Cell>
                            <Table.Cell>{quote.author?.name}</Table.Cell>
                            <Table.Cell>{quote.book?.name}</Table.Cell>
                            <Table.Cell>{quote.genre?.name}</Table.Cell>
                            <Table.Cell>
                                <GeneralButton buttonType={'primary'} text={'Details'} onClick={() => showDetails(quote.id)}
                                />
                            </Table.Cell>
                        </TableRow>
                    )
                }
                </TableBody>
            </Table>
    </div>

  )
}

export default CollectionPage