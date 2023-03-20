import React from 'react'
import { useState } from 'react'
import deleteImg from '../../assets/img/delete.svg';
import { Modal, Button } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';


function DeletePage() {
  const [deleteIntention, setDeleteIntention] = useState(false);
  const { id }  = useParams();
  const navigate = useNavigate();

  const handleYesClick = () => {
    const requestOptions = {
        method: 'DELETE',
    };

    fetch(`http://127.0.0.1:8000/api/quote/${id}`, requestOptions)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to delete quote');
        }
    })

    .then(() => {
        navigate("/collection"); // navigate to collection after successful delete
    })
    .catch((error) => {
        console.log(error);
    });

    console.log('Yes clicked');
    };

  const handleNoClick = () => {
    navigate("/collection");
    console.log('No clicked');
  };
  
    return (
    <div>
        <img src={deleteImg} alt="Are you sure of deleting?" />
        <div>
        <Modal
            show={true}
            size="md"
            popup={true}
        >
        <Modal.Header />
        <Modal.Body>
            <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
                </h3>
            <div className="flex justify-center gap-4">
            <Button
                color="failure"
                onClick={handleYesClick}
            >
                Yes, I'm sure
            </Button>
            <Button
                color="gray"
                onClick={handleNoClick}
            >
                No, cancel
            </Button>
            </div>
        </div>
        </Modal.Body>
    </Modal>
    </div>
</div>
  )
}

export default DeletePage