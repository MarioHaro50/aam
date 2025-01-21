import './header.css'
import mainVideo from '../../assets/videos/video-header.mp4';

function Header() {
    return (
        <div className="h-screen flex flex-col justify-center video-header">
            <video autoPlay muted loop className="absolute w-full h-full object-cover background-video">
                <source src={mainVideo} type="video/mp4" />
            </video>
            <h1 className="text-9xl text-center text-shadow font-semibold text-white relative z-10 drop-shadow-2xl ff-montserrat">Name</h1>
            <p className="read-the-docs text-5xl text-shadow text-center font-light text-white relative z-10">Slogan</p>
        </div> 
    );
};

export default Header;