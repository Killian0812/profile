import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-start pt-20 max-w-screen-lg mx-auto h-full">
        <motion.div
          className="pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">You can contact me using information below:</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="py-1">LinkedIn: <motion.a href="https://www.linkedin.com/in/cuong-nguyen-881209259"
            target="_blank" rel="noreferrer" className="underline text-blue-500"
            whileHover={{ color: "#93c5fd" }} transition={{ duration: 0.2 }}>Cuong Nguyen</motion.a></p>
          <p className="py-1">Email: ngcuong0812@gmail.com</p>
          <p className="py-1">Phone: (+84) 888 264 006</p>
          <p className="py-1">CV: <motion.a href="/profile/Nguyen-Manh-Cuong-CV(en).pdf"
            target="_blank" rel="noreferrer" className="underline text-blue-500"
            whileHover={{ color: "#93c5fd" }} transition={{ duration: 0.2 }}>View</motion.a></p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
