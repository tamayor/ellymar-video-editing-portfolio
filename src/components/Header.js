
import './Header.css'
export default function Header({showNav,setShowNav, showNavClose, setShowNavClose, all}){
    return(
        <header>
            <div className={showNav === "about" && showNavClose ? "about-show" : "about"}  
                onClick={()=>{setShowNav("about"); setShowNavClose(val=>!val);}}>
                <h2>About</h2>
                <h3>
                    Elly Mar<br/>
                    Video Editor
                </h3>
                <p>
                    Hey there! 🎥 I'm a video editing enthusiast who's all about the details and telling stories through visuals. I've been in the editing game for a more than 2 years now, and it's been a blast working on everything from snappy short films, to those client gigs.
                </p>
                <p>
                    My editing journey kicked off during pandemic, turning raw footage into captivating stories is like magic, right? Over the years, I've become quite the wizard with Adobe Premiere Pro. My goal? Delivering top-notch results for my awesome clients.
                </p>
                <p>
                    Whether I'm putting the final touches on a cinematic masterpiece or whipping up some killer content for social media, you can bet I'm all in, ready to exceed expectations and breathe life into creative visions. Let's make some editing magic together! 🎬✨
                </p>
            </div>

            <div className={showNav === "achievements" && showNavClose  ? "about-show" : "about"} 
                onClick={()=>{setShowNav("achievements"); setShowNavClose(val=>!val);}}>
                <h2>Achievements</h2>
                <p>Edited 300+ Videos</p>
                <p>More than 10 Clients</p>
                <p>{all.length} available videos to watch</p>
            </div>
            <div className={showNav === "socialmedia" && showNavClose  ? "about-show" : "about"} 
                onClick={()=>{setShowNav("socialmedia"); setShowNavClose(val=>!val);}}>
                <h2>Contact Details</h2>
                <p><a href='https://www.facebook.com/ellymarpage/' target='_blank' rel='noreferrer noopener'>Facebook</a></p>
                <p><a href="https://wa.me/+639684299892" target='_blank' rel='noreferrer noopener'>Whatsapp</a></p>
            </div>      
        </header>
    
       
    )
}