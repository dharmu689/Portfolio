import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const phoneNumber = '916204064843'
  const message = encodeURIComponent('Hi Dharmu, I visited your portfolio and wanted to connect!')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-[#0A0F1E]"
    >
      {/* Subtle pulsing ring behind the button */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

      {/* WhatsApp Icon */}
      <FaWhatsapp className="text-2xl sm:text-3xl relative z-10" />

      {/* Desktop Tooltip */}
      <div className="absolute right-full mr-3 hidden sm:flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[#0A0F1E] text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-md border border-[#1E90FF]/30 whitespace-nowrap relative">
          Chat on WhatsApp
          {/* Caret */}
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-[#0A0F1E]" />
        </div>
      </div>
    </a>
  )
}

export default WhatsAppButton
