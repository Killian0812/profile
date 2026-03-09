import nodejs from '../assets/techs/nodejs.png'
import nestjs from '../assets/techs/nestjs.png'
import springboot from '../assets/techs/springboot.png'
import react from '../assets/techs/react.png'
import reactNative from '../assets/techs/reactnative.png'
import flutter from '../assets/techs/flutter.svg'
import tailwind from '../assets/techs/tailwind.png'
import mongodb from '../assets/techs/mongodb.png'
import postgresql from '../assets/techs/postgresql.svg'
import mysql from '../assets/techs/mysql.png'
import redis from '../assets/techs/redis.png'
import firebase from '../assets/techs/firebase.png'
import aws from '../assets/techs/aws.webp'
import gcp from '../assets/techs/gcp.png'
import docker from '../assets/techs/docker.webp'
import kubernetes from '../assets/techs/kubernetes.webp'
import git from '../assets/techs/git.png'
import { motion } from "framer-motion";

const categories = [
  {
    label: "Backend",
    accent: "border-green-500",
    labelColor: "text-green-400",
    techs: [
      { src: nodejs,     title: "Node.js",     shadow: "shadow-green-500"  },
      { src: nestjs,     title: "NestJS",       shadow: "shadow-red-600"    },
      { src: springboot, title: "Spring Boot",  shadow: "shadow-green-500"  },
      { src: firebase,   title: "Firebase",     shadow: "shadow-yellow-500" },
    ],
  },
  {
    label: "Frontend & Mobile",
    accent: "border-cyan-500",
    labelColor: "text-cyan-400",
    techs: [
      { src: react,       title: "React",        shadow: "shadow-blue-500" },
      { src: reactNative, title: "React Native",  shadow: "shadow-cyan-500" },
      { src: flutter,     title: "Flutter",       shadow: "shadow-blue-500" },
      { src: tailwind,    title: "Tailwind CSS",  shadow: "shadow-sky-400"  },
    ],
  },
  {
    label: "Databases",
    accent: "border-yellow-500",
    labelColor: "text-yellow-400",
    techs: [
      { src: mongodb,    title: "MongoDB",    shadow: "shadow-green-500"  },
      { src: postgresql, title: "PostgreSQL", shadow: "shadow-blue-500"   },
      { src: mysql,      title: "MySQL",      shadow: "shadow-orange-400" },
      { src: redis,      title: "Redis",      shadow: "shadow-red-500"    },
    ],
  },
  {
    label: "Cloud & DevOps",
    accent: "border-purple-500",
    labelColor: "text-purple-400",
    techs: [
      { src: aws,        title: "AWS",        shadow: "shadow-yellow-500" },
      { src: gcp,        title: "Google Cloud", shadow: "shadow-blue-400" },
      { src: docker,     title: "Docker",     shadow: "shadow-blue-400"   },
      { src: kubernetes, title: "Kubernetes", shadow: "shadow-blue-600"   },
      { src: git,        title: "Git",        shadow: "shadow-red-500"    },
    ],
  },
];

const Skill = () => {
  return (
    <div
      name="skill"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-20 flex flex-col w-full text-white">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6 text-gray-400">Technologies I've worked with</p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className={`flex items-center gap-3 mb-6`}>
                <span className={`text-sm font-semibold uppercase tracking-widest ${cat.labelColor}`}>
                  {cat.label}
                </span>
                <div className={`flex-1 h-px bg-gradient-to-r from-current to-transparent opacity-30 ${cat.labelColor}`} />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {cat.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.title}
                    className={`shadow-md hover:scale-105 hover:-translate-y-1 hover:brightness-125 duration-300 py-5 rounded-xl flex flex-col items-center justify-center gap-3 bg-gray-900/60 border border-gray-700/40 ${tech.shadow}`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: catIndex * 0.1 + techIndex * 0.05 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img src={tech.src} alt={tech.title} className="w-12 h-12 object-contain" />
                    <p className="text-xs text-gray-300 font-medium text-center leading-tight px-1">{tech.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
