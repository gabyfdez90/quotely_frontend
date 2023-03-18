import React from 'react';
import { Card } from 'flowbite-react';
import GeneralButton from '../../atoms/generalButton/GeneralButton';

function SmallCard({ title, text }) {
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
                    <GeneralButton buttonType={"primary"} text={"Details"}>
                        <svg
                            className="ml-2 -mr-1 h-4 w-4"
                            fill="darkGreen"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </GeneralButton>
                </div>
            </Card>
        </div>
    )
}

export default SmallCard