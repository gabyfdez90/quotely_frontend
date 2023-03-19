import React from 'react';
import { useEffect, useState } from "react";
import GeneralButton from '../../components/atoms/generalButton/GeneralButton';
import SearchBar from '../../components/atoms/searchBar/searchBar';
import { Table } from 'flowbite-react';
import { TableRow } from 'flowbite-react/lib/esm/components/Table/TableRow';
import { TableBody } from 'flowbite-react/lib/esm/components/Table/TableBody';

function CollectionPage() {
    const [ quotes, setQuotes ] = useState([]);
    const apiURL = 'http://127.0.0.1:8000/api/quotes';
    console.log(apiURL)

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(apiURL);
            const data = await response.json();

            //use only 5 quotes
            setQuotes (data.slice(0, 5))
        }
        fetchData();
    }, []);

  return (
    <div className='flex flex-col gap-5'>
        <div className='flex justify-between'>
            <h2 style={{fontSize: '2rem'}}>Your quotes</h2>
            <div className='flex justify-end gap-5'>
                <GeneralButton buttonType={'primary'} text={'Add quote'} />
                <SearchBar />
            </div>
        </div>
        <Table>
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
                        Updated
                    </Table.HeadCell>
                </Table.Head>
                <TableBody>
                {
                    quotes.map( (quote,key) =>
                        <TableRow key={key}>
                            <Table.Cell>{quote.text}</Table.Cell>
                            <Table.Cell>{quote.author}</Table.Cell>
                            <Table.Cell>{quote.book ? quote.book.name : ""}</Table.Cell>
                            <Table.Cell>{quote.genre ? quote.genre.name : ""}</Table.Cell>
                            <Table.Cell>{quote.updated_at}</Table.Cell>
                        </TableRow>
                    )
                }
                </TableBody>
        </Table>
    </div>
  )
}

export default CollectionPage