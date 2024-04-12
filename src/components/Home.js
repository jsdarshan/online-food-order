import React from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { Routes, Route, NavLink ,Navigate} from 'react-router-dom';
import Myorders from './Myorders';
import Foods from './Foods';
import Contactus from './Contactus'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Home(){
    
    return(
     <div>
         
         <div className='text-center container mt-5'>
            
            {/* <img src={} className='w-25' alt="" /> */}
            <div  className="w-75 mx-auto mt-5">
            <Carousel>
  <Carousel.Item className='w-100'>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
      
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>  */}
  </Carousel.Item>
  <Carousel.Item className='w-100'>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item className="w-100">
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
</div>
<p style={{color:"darkgoldenrod"}} className="display-5"> <b><i>Welcome To eatfit</i></b></p>

<div>

            <p className="lead fs-6 w-100 p-3 card shadow" style={{backgroundColor:"lightpink"}}>
            <b>test</b> <br></br>
      
test </p>
<p className="lead fs-6 p-3 card shadow" style={{backgroundColor:"blanchedalmond"}}>
<br/><b>CURRENT MENU </b><br/>

test
            </p>
            </div>
        </div>

   </div>

    );
}

export default Home;