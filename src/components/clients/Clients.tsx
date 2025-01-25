import './Clients.css';
import scotia from '../../assets/images/skotiabank.webp';
import ford from '../../assets/images/ford.png';
import cracks from '../../assets/images/cracks.png';

function Clients() {

    return (
        <section className='flex flex-col lg:flex-row justify-end items-center gap-11 my-24 lg:mx-44'>
            <div className=' lg:w-6/12'>
                <h2 className='text-white text-center pt-16 text-4xl sm:text-5xl font-semibold'>Our clients</h2>
            </div>
            <div className='wraped flex flex-col items-center lg:w-6/12 '>
                <div className='show-info flex flex-col items-center'>
                    <img src={scotia} alt="Scotiabank" className='w-52 md:w-60 lg:w-72 hover:lg:w-80'/>
                    <p className='text-white text-lg mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum perferendis possimus libero sunt nostrum nisi voluptates quos sequi? Quod molestias vel sit omnis quia ut rem ea totam vitae!</p>
                </div>
                <div className='show-info flex flex-col items-center'>
                    <img src={ford} alt="Scotiabank" className='w-44 md:w-52 lg:w-64 hover:lg:w-80'/>
                    <p className='text-white text-lg mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi omnis in nam architecto reiciendis eum, fugit recusandae harum quisquam cupiditate hic veritatis deserunt doloribus voluptates eius earum eveniet laboriosam.</p>
                </div>
                <div className='show-info flex flex-col items-center'>
                    <img src={cracks} alt="Scotiabank" className='w-28 md:w-38 lg:w-44 hover:lg:w-52'/>
                    <p className='text-white text-lg mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum perferendis possimus libero sunt nostrum nisi voluptates quos sequi? Quod molestias vel sit omnis quia ut rem ea totam vitae!</p>
                </div>
            </div>
        </section>
    );
}

export default Clients;
