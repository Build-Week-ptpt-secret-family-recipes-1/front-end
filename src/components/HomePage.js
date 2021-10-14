import React from 'react'
import homepageImg from '../images/homepage-img.jpeg';

import './HomePage.css'

export default function HomePage () {
    return (
        <div>
            <img src={homepageImg} alt="collection of dishes" />
            <h1>Secret Family Recipes</h1>
        </div>
    )
}