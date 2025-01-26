import "./Clients.css";
import scotia from "../../assets/images/skotiabank.webp";
import ford from "../../assets/images/ford.png";
import cracks from "../../assets/images/cracks.png";

function Clients() {
    return (
        <section className="flex flex-col xl:flex-row justify-end items-center gap-11 my-24 lg:mx-44">
            <div className=" lg:w-6/12">
                <h2 className="text-white text-center pt-16 text-4xl sm:text-5xl font-semibold">
                    Nuestros clientes
                </h2>
            </div>
            <div className="wraped flex flex-col items-center lg:w-6/12">
                <div className="show-info flex flex-col items-center">
                    <img
                        src={ford}
                        alt="Scotiabank"
                        className="w-44 md:w-52 lg:w-64 hover:lg:w-80"
                    />
                    <p className="text-white text-lg mt-4 mx-8 text-justify">
                        Fuimos parte de un proyecto integral que incluyó la creación, gestión y mantenimiento de servicios web personalizados, junto con la migración de sus sistemas a plataformas en la nube como Google Cloud Platform (GCP) y Amazon Web Services (AWS). Además, llevamos a cabo la migración de sus bases de datos, garantizando la integridad, seguridad y disponibilidad de la información durante todo el proceso. Este trabajo permitió al cliente optimizar su infraestructura tecnológica, mejorar la eficiencia operativa y prepararse para futuros desafíos en un entorno digital en constante evolución.
                    </p>
                    
                </div>
                <div className="show-info flex flex-col items-center">
                    <img
                        src={scotia}
                        alt="Scotiabank"
                        className="w-52 md:w-60 lg:w-72 hover:lg:w-80"
                    />
                    <p className="text-white text-lg mt-7 mx-8  text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque laborum perferendis possimus libero sunt nostrum
                        nisi voluptates quos sequi? Quod molestias vel sit omnis
                        quia ut rem ea totam vitae!
                    </p>
                </div>
                <div className="show-info flex flex-col items-center">
                    <img
                        src={cracks}
                        alt="Scotiabank"
                        className="w-28 md:w-38 lg:w-44 hover:lg:w-52"
                    />
                    <p className="text-white text-lg mt-5 mx-8 text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Minima, praesentium iste voluptate ullam
                        cupiditate quasi dolore quisquam, fugiat non natus alias
                        quidem, sit incidunt perferendis explicabo. Laboriosam
                        numquam eos consectetur.!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Clients;
