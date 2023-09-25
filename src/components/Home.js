import React from 'react';
import Marquee from "react-fast-marquee";

import Header from './Header';
import Playlist from './Playlist';
import Data from './Data';
import './Home.css'
import './HomePlaylistDisplay.css'


export default function Home(){
    const[iframePop, setIframePop] = React.useState(false);
    const [showNav, setShowNav] = React.useState("");
    const [showNavClose, setShowNavClose] = React.useState(false);
    const [playlist, setPlaylist] = React.useState("clients");
    
    const filteredIframes = Data.filter(item => item.latest).map(item => {
        return(
            <div key={item.link} className='iframe'>
                <iframe
                src={item.link}
                title="YouTube video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" 
                allowFullScreen={true}
                ></iframe>
                <p>pause the video before closing</p>
            </div>
        )
    });
    const latestImg = Data.filter(item=>item.latest).map(item=>{
        return(
            <div
            key={item.link} 
            className="img-container" onClick={()=>{setIframePop(true);}}
            >
                <img src={item.img} alt="latest video" className='latest-img'/>
            </div>    
        )
    });

    function renderPlaylist (playlistType){

        const playlists = Data.filter(item=>item.playlist === playlistType).map(item=>{
            return(
                <div key={item.index}>
                    <img  src={item.img} alt='client video' className='data-img'/>
                </div>
            )
        })
        return(
            <div className='playlist-container' 
                onClick={()=>{
                    setPlaylist(playlistType); 
                }}>
                <h2>{playlistType.toUpperCase()}</h2> 
                <Marquee  play={true} speed={10} className='marquee'
                >
                    {playlists}
                </Marquee>
            </div>
        )
    }
    const all = Data.map(item=>{
        return(
            <div key={item.link}>
                <img src={item.img} alt="latest video" className='latest-img'/>
            </div>
            
        )
    })

    return(
        <main className="Main" >
            <div className={iframePop ? "iframe-container" : "iframe-container-hide"}
                onClick={()=>{
                    setIframePop(val=>!val); 

                }}
            >
                {filteredIframes}
            </div>
            <section className="Main-content">
                <div>
                    <h3 className='latest-sign'>LATEST</h3>
                    {latestImg}
                </div>
                <div>
                    <Header
                        showNav = {showNav}
                        setShowNav = {setShowNav}
                        showNavClose={showNavClose}
                        setShowNavClose={setShowNavClose}
                        all = {all}
                    />    
                </div>   
                <div className='rendered-playlist'>
                    <div>
                    {renderPlaylist("clients")}
                    </div>
                    <div>
                    {renderPlaylist("films")}
                    </div>
                    <div>
                    {renderPlaylist("vlogs")}
                    </div>
                </div>
            </section>
            <Playlist playlist={playlist} />
        </main>
    )
}