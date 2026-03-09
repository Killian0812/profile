import React from "react";
import ProfileImage from "../assets/profile.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center md:w-[70%]"
        >
          <span className="text-4xl sm:text-7xl text-white">
            Killian
          </span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-300 py-4 max-w-md"
          >
            I was born in December 2003. I graduated from Hanoi University of
            Science and Technology (HUST) with a B.Sc. in Computer Engineering,
            and currently work as a Software Engineer at MMenu Co., Ltd.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.img
            src={ProfileImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full shadow-lg shadow-gray-800"
            whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
