import React from 'react'

import Data from './Data'
import './Playlist.css'
export default function Playlist({playlist}){
    const [picToVid, showPicToVid] = React.useState("");
    const [popVideoPlaylist, setPopVideoPlaylist] = React.useState(false);
    console.log(playlist)

    const imgShowCaseVertical = Data.filter(item=>item.playlist === playlist && item.format === "vertical").map(item=>{
        return(
            <div className='image-container'>
                <img className='playlist-image' 
                    src={item.img} 
                    alt={item.name} 
                    onClick={()=>showPicToVid(item.name)}/>
                <h3>{item.name}</h3>
            </div>
        )
    })
    const imgShowCaseHorizontal = Data.filter(item=>item.playlist === playlist && item.format === "horizontal").map(item=>{
        return(
            <div className='image-container'>
                <img className='playlist-image' 
                    src={item.img} alt={item.name} 
                    onClick={()=>showPicToVid(item.name)}/>
                <h3>{item.name}</h3>
            </div>
        )
    })
    const videos = Data.filter(item=>item.name===picToVid).map(item=>{
        return(
            <iframe key={item.link}
                className='iframe'
                src={item.link}
                title="YouTube video player"  
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            ></iframe>
        )
    })
    return(
        <section className="Playlist">
            <div className='playlist-videos'>
                <div className="img-playlist" onClick={()=>setPopVideoPlaylist(val=>!val)}>
                    {imgShowCaseHorizontal}
                    {imgShowCaseVertical}
                </div>
                <div className={popVideoPlaylist ? "play-video-playlist" : "play-video-playlist-hide"} onClick={()=>setPopVideoPlaylist(val=>!val)}>
                    {videos}
                </div>
            </div>
        </section>
    )
}

