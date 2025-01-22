import './Clients.css';
import scotia from '../../assets/images/skotiabank.webp';
import ford from '../../assets/images/ford.png';

function Clients() {

    return (
        <section className='flex flex-col lg:flex-row justify-evenly items-center gap-11 my-24'>
            <div className=' lg:w-6/12'>
                <h2 className='text-white text-center pt-16 text-4xl sm:text-5xl font-semibold'>Our clients</h2>
            </div>
            <div className='wraped flex flex-col items-center lg:w-6/12 '>
                <div className='show-info flex flex-col items-center'>
                    <img src={scotia} alt="Scotiabank" className='w-44 md:w-52 lg:w-64 hover:lg:w-72'/>
                    <p className='text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum perferendis possimus libero sunt nostrum nisi voluptates quos sequi? Quod molestias vel sit omnis quia ut rem ea totam vitae!</p>
                </div>
                <div className='show-info flex flex-col items-center'>
                    <img src={ford} alt="Scotiabank" className='w-44 md:w-52 lg:w-64 hover:lg:w-72'/>
                    <p className='text-white text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi omnis in nam architecto reiciendis eum, fugit recusandae harum quisquam cupiditate hic veritatis deserunt doloribus voluptates eius earum eveniet laboriosam.</p>
                </div>
                <div className='show-info flex flex-col items-center'>
                    <img src={scotia} alt="Scotiabank" className='w-44 md:w-52 lg:w-64 hover:lg:w-72'/>
                    <p className='text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum perferendis possimus libero sunt nostrum nisi voluptates quos sequi? Quod molestias vel sit omnis quia ut rem ea totam vitae!</p>
                </div>
                <div className='show-info flex flex-col items-center'>
                    <img src={ford} alt="Scotiabank" className='w-44 md:w-52 lg:w-64 hover:lg:w-72'/>
                    <p className='text-white text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi omnis in nam architecto reiciendis eum, fugit recusandae harum quisquam cupiditate hic veritatis deserunt doloribus voluptates eius earum eveniet laboriosam.</p>
                </div>
            </div>
        </section>
    );
}

export default Clients;
