import Clients from "../clients/Clients";
// import ContactForm from "../contact/Contact";
import Header from "../header/header";
import Tech from "../tecnologies/Tech";
import Us from "../us/Us";
import WhatsAppButton from "../wa/WhatsAppButton";
function Body() {

    return (
        <>
            <Header/>
            <Us/>
            <Tech/>
            <Clients/>
            {/* <ContactForm/> */}
            <WhatsAppButton phoneNumber="+525650576133" message="Hola, quiero más información" />
        </>
    );
}

export default Body;
