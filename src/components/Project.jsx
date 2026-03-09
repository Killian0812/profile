import tastetube from "../assets/projects/tastetube.png";
import klock from "../assets/projects/klock.png";
import chatk from "../assets/projects/chatk.png";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: tastetube,
      title: "TasteTube",
      content:
        "A cross-platform social video-sharing and e-commerce platform for the F&B community. TasteTube lets users explore food content, while restaurants can showcase dishes, manage orders, and engage with customers.",
      techstack:
        "Flutter, Google Transcoder API, Google Maps API, NodeJS, Firebase",
    },
    {
      id: 2,
      src: klock,
      title: "KLock",
      content:
        "A smart-lock managing app integrated with face-recognition device on every front door. You can see who enters the room along with the date and time. KLock mobile app allows you to open door for your guest remotely.",
      techstack: "React, React-Native, Expo, NodeJS, Firebase",
    },
    {
      id: 3,
      src: chatk,
      title: "ChatK",
      content:
        "A real-time chat and video call application designed to enhance user experience. Users can participate in group calls, FaceTime, and other interactive features for seamless communication.",
      techstack: "React, GetStream API, NodeJS, MongoDB",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-start pt-20 w-full h-full">
        <motion.div
          className="pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 items-stretch">
          {projects.map((project, index) => {
            const { id, src, title, content, techstack } = project;
            const tags = techstack.split(", ");
            return (
              <motion.div
                key={id}
                className="flex flex-col bg-gray-900 border border-gray-700/50 rounded-xl overflow-hidden shadow-lg shadow-black/40 hover:scale-105 hover:border-gray-500/70 duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-48 object-cover hover:brightness-110 duration-300"
                  />
                </div>
                <div className="flex flex-col flex-1 p-4 gap-3">
                  <motion.h3
                    className="text-base font-bold tracking-wide"
                    whileHover={{ color: "#e2e8f0" }}
                    transition={{ duration: 0.2 }}
                  >
                    {title}
                  </motion.h3>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{content}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-700/60">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-gray-700/60 text-gray-300 border border-gray-600/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
