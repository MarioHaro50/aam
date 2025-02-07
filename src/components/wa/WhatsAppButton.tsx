import React from "react";
import './WhatsAppButton.component.css';
import WhatsAppIcon from "./WhatsAppIcon";

interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber,
    message,
}) => {
    // Función para construir la URL de WhatsApp
    const createWhatsAppLink = () => {
        const url = new URL("https://wa.me/" + phoneNumber);
        if (message) {
            url.searchParams.append("text", encodeURIComponent(message));
        }
        return url.toString();
    };

    return (
        <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
        >
            <WhatsAppIcon width={"64"} height={"64"}/> 
        </a>
    );
};

export default WhatsAppButton;
