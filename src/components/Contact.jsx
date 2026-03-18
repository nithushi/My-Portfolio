// components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  // --- ඔයාගේ විස්තර මෙතන update කරන්න ---
  const whatsappNumber = "+94770348510"; // '+' ලකුණ සහ රටේ කේතය (94) සමග
  const emailAddress = "nithushishavindi0@email.com";
  // -----------------------------------------

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600 blur-[150px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-400 font-mono text-sm uppercase tracking-widest">What's Next?</span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-6">Let's Connect</h2>
          
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12">
            I'm currently looking for new opportunities and collaborations. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          {/* Email Button */}
          <motion.a
            href={`mailto:${emailAddress}`}
            whileHover={{ y: -5 }}
            className="flex items-center gap-3 px-8 py-4 bg-gray-900 border border-gray-800 rounded-2xl text-white font-semibold hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <FaEnvelope className="text-blue-400 text-xl" />
            Send an Email
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="flex items-center gap-3 px-8 py-4 bg-gray-900 border border-gray-800 rounded-2xl text-white font-semibold hover:border-green-500 hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <FaWhatsapp className="text-green-500 text-2xl" />
            Chat on WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;