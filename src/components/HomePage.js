import React from 'react';
import homepageImg from '../images/homepage-img.jpeg';
import './HomePage.css';
// import NavBar from './NavBar';
import SearchByType from './forms/searchByType';


export default function HomePage () {
    return (
        // <div classname = 'App'>
        //     <div className='header'>
        //         <NavBar />
        //     </div>
            <div className='body'>
                <img src={homepageImg} alt="collection of dishes" />
                <SearchByType />
               
            </div>
        // </div>
    )
}