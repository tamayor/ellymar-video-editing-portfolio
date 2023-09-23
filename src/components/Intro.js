import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css';


export default function Intro() {


  return (
    <section className='Intro'>
        <div className='title'>
            <h1 className='ellymarportfolio'>ELLY MAR PORTFOLIO</h1>
        </div>
        <Link to='/home'>
            <button className='link-home'>Give me more!</button>
        </Link>
        <div className='facts'>
            <p className='facts-welcome-message'>
            <strong>Hello and welcome! </strong>
            I'm thrilled to have you here. I'm Elly Mar, a passionate video editor, and I can't wait to take you on a journey through my creative work. Let's dive into my portfolio together and explore the world of visual storytelling. Feel free to ask any questions along the way. <strong>Enjoy</strong>!
            </p>
        </div>
    </section>
  );
}
