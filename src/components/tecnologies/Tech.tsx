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
        <section className='my-32 mx-24 bg-slate-800 rounded-3xl'>
            <h2 className='text-white text-center pt-16 text-5xl font-semibold'>Tecnologías que usamos</h2>
            <div className='flex flex-wrap gap-48 gap-y-14 justify-center mt-6 p-14'>
                <img className="w-auto h-20" src={javascript} alt="javascript" />
                <img className="w-auto h-20" src={react} alt="React" />
                <img className="w-auto h-20" src={angular} alt="Angular" />
                <img className="w-auto h-20" src={java} alt="java" />
                <img className="w-auto h-20" src={spring} alt="spring" />
                <img className="w-auto h-20" src={mysql} alt="mysql" />
                <img className="w-auto h-20" src={postrge} alt="postrge" />
                <img className="w-auto h-20" src={gcp} alt="GCP" />
                <img className="w-auto h-20" src={aws} alt="AWS" />
            </div>
        </section>
    );
}

export default Tech;
