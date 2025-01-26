import React from "react";
import Swal from "sweetalert2";

// Definir tipos para el estado
interface ContactFormState {
    name: string;
    email: string;
    phone: string;
    message: string;
}

// Si tienes propiedades, define su tipo. Si no tienes, usa un objeto vacío.
interface ContactFormProps {}

class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
    constructor(props: ContactFormProps) {
        super(props);

        // Estado inicial
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
        };

        // Enlazar métodos
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target; // Obtener el nombre del campo y su valor
        this.setState({ [name]: value } as Pick<
            ContactFormState,
            keyof ContactFormState
        >);
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        Swal.fire({
            title: 'Información enviada',
            // text: `${JSON.stringify(this.state, null, 2)}`,
            text: `${JSON.stringify(this.state, null, 2)}`,
            icon: 'success',
            confirmButtonText: 'Cerrar'
        });
    }

    sendInfo() {
        // Aquí podrías enviar la información al servidor
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state)
        // })
        //.then(response => response.json())
        //.then(data => console.log(data))
        //.catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="my-10 mx-5 sm:mx-20 md:mx-32 lg:mx-48 xl:mx-96 py-32 px-20 sm:px-24 md:px-32 lg:px-40 bg-rose-900 flex flex-col items-center justify-center rounded-xl"
            >
                <label className="text-white text-xl flex flex-col w-full mb-5">
                    Nombre:
                    <input
                        className="text-slate-950"
                        type="text"
                        name="name" // Asegúrate de agregar este atributo
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="text-white text-xl flex flex-col w-full mb-5">
                    Email:
                    <input
                        className="text-slate-950"
                        type="email"
                        name="email" // Asegúrate de agregar este atributo
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="text-white text-xl flex flex-col w-full mb-5">
                    Teléfono:
                    <input
                        className="text-slate-950"
                        type="text"
                        name="phone" // Asegúrate de agregar este atributo
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="text-white text-xl flex flex-col w-full mb-5">
                    Mensaje:
                    <textarea
                        className="text-slate-950"
                        name="message" // Asegúrate de agregar este atributo
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                </label>
                <input
                    className="w-1/3 self-end rounded-sm py-1 px-5 cursor-pointer border-2 border-red-950 font-semibold text-red-950 bg-transparent hover:text-white hover:bg-red-950 duration-300 ease"
                    type="submit"
                    value="Submit"
                />
            </form>
        );
    }
}

export default ContactForm;
