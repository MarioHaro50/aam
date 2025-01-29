import "./Clients.css";
import scotia from "../../assets/images/skotiabank.webp";
import ford from "../../assets/images/ford.png";
import cracks from "../../assets/images/cracks.png";

function Clients() {
    return (
        <section className="flex flex-col xl:flex-row justify-end items-center gap-11 mt-48 lg:mb-72 mx-5 sm:mx-20 md:mx-32 xl:mx-48">
            <div className="w-full xl:w-5/12">
                <h2 className="text-white text-center pt-16 text-4xl sm:text-5xl font-semibold">
                    Nuestros clientes
                </h2>
            </div>
            <div className="wraped flex flex-col w-full items-center xl:w-7/12 mt-10 xl:mt-48 mb-72 px-5 lg:px-48 xl:px-20">
                <div className="show-info flex flex-col items-center">
                    <img
                        src={ford}
                        alt="Scotiabank"
                        className="w-44 md:w-52 lg:w-64 hover:lg:w-80"
                    />
                    <p className="text-white text-lg my-5 mx-8 text-justify">
                        Fuimos parte de un proyecto integral que incluyó la creación, gestión y mantenimiento de servicios web personalizados, junto con la migración de sus sistemas a plataformas en la nube como Google Cloud Platform (GCP) y Amazon Web Services (AWS). Además, llevamos a cabo la migración de sus bases de datos, garantizando la integridad, seguridad y disponibilidad de la información durante todo el proceso. Este trabajo permitió al cliente optimizar su infraestructura tecnológica, mejorar la eficiencia operativa y prepararse para futuros desafíos en un entorno digital en constante evolución.
                    </p>
                    
                </div>
                <div className="show-info flex flex-col items-center">
                    <img
                        src={scotia}
                        alt="Scotiabank"
                        className="w-52 md:w-60 lg:w-72 hover:lg:w-80"
                    />
                    <p className="text-white text-lg my-7 mx-8  text-justify">
                        Se desarrollaron aplicaciones web diseñadas específicamente para automatizar procesos previamente gestionados en archivos Excel, permitiendo la comparación eficiente de datos entre ellos. Además, se implementó una gestión integral de la base de datos, garantizando la preservación, integridad y disponibilidad de la información almacenada, optimizando así la operatividad y confiabilidad del sistema.
                    </p>
                </div>
                <div className="show-info flex flex-col items-center">
                    <img
                        src={cracks}
                        alt="Scotiabank"
                        className="w-28 md:w-38 lg:w-44 hover:lg:w-52"
                    />
                    <p className="text-white text-lg my-5 mx-8 text-justify">
                        Se desarrolló una aplicación tipo red social enfocada en visorias de fútbol en México, diseñada específicamente para dispositivos Android utilizando la plataforma Android Studio. La aplicación permite la interacción entre usuarios y ofrece herramientas para facilitar el descubrimiento y la gestión de talentos deportivos en el ámbito futbolístico.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Clients;
