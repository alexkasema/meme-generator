
import React from 'react'

import face from "../images/Troll-Face.png"

export default function Header(){
    return (
        <nav className='nav--items'>
            <img className='nav--image' src={face} alt='Troll face'/>
            <h3 className='nav--header'>Meme Generator</h3>
            <p className='nav--text'>React Course - Project 3</p>
        </nav>
    )
}