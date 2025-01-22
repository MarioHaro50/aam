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


function Tech() {
    return (
        <section className='my-32 mx-0 sm:mx-12 md:mx-16 lg:mx-28 bg-slate-800 sm:rounded-3xl'>
            <h2 className='text-white text-center pt-16 text-4xl sm:text-5xl font-semibold'>Tech Stack</h2>
            <div className='flex flex-wrap gap-28 gap-y-16 justify-center mt-6 p-14 wraped'>
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
