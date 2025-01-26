import Clients from "../clients/Clients";
import ContactForm from "../contact/Contact";
import Header from "../header/header";
import Tech from "../tecnologies/Tech";
import Us from "../us/Us";
function Body() {

    return (
        <>
            <Header/>
            <Us/>
            <Tech/>
            <Clients/>
            <ContactForm/>
        </>
    );
}

export default Body;
