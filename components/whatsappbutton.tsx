import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999"; // Coloque o seu número com DDI e DDD

  return (
  <a
  href="https://wa.me/+559481067623?text=Olá! Vim pelo site e gostaria de mais informações!"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 md:w-[60px] md:h-[60px] flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 "
  aria-label="Fale conosco no WhatsApp"
>
  {/* Ícone responsivo */}
  <FaWhatsapp className="text-[28px] md:text-[40px]" />

  {/* Badge de notificação */}
  <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] md:text-[13px] font-bold px-1 rounded-full transform translate-x-1/3 -translate-y-1/3 shadow-md">
    1
  </span>
</a>
  );
};

export default WhatsAppButton;