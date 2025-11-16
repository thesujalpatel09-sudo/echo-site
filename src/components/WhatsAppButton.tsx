const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919892126510"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110 animate-bounce hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/85/WhatsApp_Business_icon.png"
            alt="WhatsApp Business"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full"
            width="56"
            height="56"
            loading="lazy"
            decoding="async"
          />
    </a>
  );
};

export default WhatsAppButton;
