import React from 'react'
import { Button } from 'flowbite-react'
import homeImg from "../../assets/img/homePage.svg"
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className='flex flex-col p-10 lg:flex-row gap-5'>
      <div className='flex flex-col justify-center  text-left text-2xl text-navy'>
        <h2 className='mb-10'>Don't trust your mind. <br />
          Store quotes:<br /> 
          they are lighter than books.</h2>
          <Link to="./collection">
            <Button style={{backgroundColor:'#ffc482', color:"black", fontWeight:"bold", fontFamily:'Average Sans', fontSize: 20 }} > Start quoting</Button>
          </Link> 
      </div>
      <div className='flex justify-center align-middle'>
        <img src={homeImg} alt="Quote management app" style={{width:'80%'}}></img>
      </div>
    </div>
  )
}

export default HomePage

