import './Tech.css';
import react from '../../assets/images/React.webp'
import angular from '../../assets/images/Angular.png'
import aws from '../../assets/images/aws.png'
import gcp from '../../assets/images/gcp.png'
import spring from '../../assets/images/spring.png'
import mysql from '../../assets/images/mysql.png'
import postrge from '../../assets/images/postgre.png'
import java from '../../assets/images/java.png'
import javascript from '../../assets/images/JavaScript.png'


const Tech = () => {
    return (
        <section className='my-32 mx-5 sm:mx-20 md:mx-32 lg:mx-48 xl:mx-72'>
            <h2 className='text-white text-center pt-16 text-5xl lg:text-6xl font-semibold ff-i'>Tech Stack</h2>
            <div className='flex flex-wrap justify-around gap-y-20 gap-x-14 sm:gap-x-16 md:gap-x-16 lg:gap-x-20 xl:gap-x-20 mt-6 p-14 wraped-tech'>
                <img className="w-auto h-20 md:h-24 lg:h-30" src={javascript} alt="javascript" />
                <img className="w-auto h-20 md:h-24 lg:h-30" src={react} alt="React" />
                <img className="w-auto h-20 md:h-24 lg:h-30" src={angular} alt="Angular" />
                <img className="w-auto h-20 md:h-24 lg:h-30" src={java} alt="java" />
                <img className="w-auto h-20 md:h-24 lg:h-30" src={spring} alt="spring" />
                <img className="w-auto h-20 md:h-24 lg:h-30" src={mysql} alt="mysql" />
                <img className="w-auto h-20 md:h-24 lg:h-30" src={postrge} alt="postrge" />
                <img className="w-auto h-20 md:h-24 lg:h-30" src={gcp} alt="GCP" />
                <img className="w-auto h-20 md:h-24 lg:h-30" src={aws} alt="AWS" />
            </div>
        </section>
    );
}

export default Tech;
