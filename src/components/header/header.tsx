import './header.css'
import mainVideo from '../../assets/videos/video-header.mp4';

const Header = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center video-header">
            <video autoPlay muted loop className="absolute w-full h-full object-cover background-video">
                <source src={mainVideo} type="video/mp4" />
            </video>
            <h1 className="text-8xl md:text-9xl lg:text-10xl text-center text-shadow font-semibold text-white relative z-10 drop-shadow-2xl ff-montserrat typing">AAMM</h1>
            <p className="read-the-docs text-5xl text-shadow text-center font-light text-white relative z-10 ff-i">Tech & Solutions</p>
        </section> 
    );
};

export default Header;