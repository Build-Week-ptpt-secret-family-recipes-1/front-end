import React from 'react';
import homepageImg from '../images/homepage-img.jpeg';
import './HomePage.css';
import NavBar from './NavBar';
import SearchByType from './forms/searchByType';
import RecipeSidebar from './recipe components/RecipeSidebar';

export default function HomePage () {
    return (
        <div classname = 'App'>
            <div className='header'>
                <NavBar />
            </div>
            <div className='body'>
                <img src={homepageImg} alt="collection of dishes" />
                <h1>Secret Family Recipes</h1>
                <SearchByType />
                <RecipeSidebar />
            </div>
        </div>
    )
}