import React from 'react';
import { Card } from 'flowbite-react';
import GeneralButton from '../../atoms/generalButton/GeneralButton';
import { Link } from 'react-router-dom';

function SmallCard({ title, text, url }) {
    return (
        <div>
            <Card style={{backgroundColor:'#ffc482', borderRadius: '120'}}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {text}
                </p>
                <div className='w-10 mx-10 px-10'>
                    <Link to={url}>
                        <GeneralButton buttonType={"primary"} text="Details" /> 
                    </Link>
                </div>
            </Card>
        </div>
    )
}

export default SmallCard