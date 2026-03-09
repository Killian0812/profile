import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaPlus, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImProfile } from "react-icons/im";

const SocialLinks = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      id: 1,
      icon: <FaGithub size={20} />,
      label: "GitHub",
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Killian0812",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/cuong-nguyen-881209259",
    },
    {
      id: 3,
      icon: <HiOutlineMail size={20} />,
      label: "Mail",
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ngcuong0812@gmail.com",
    },
    {
      id: 4,
      icon: <ImProfile size={20} />,
      label: "CV",
      child: (
        <>
          CV <ImProfile size={30} />
        </>
      ),
      href: "/profile/Nguyen-Manh-Cuong-CV(en).pdf",
      style: "rounded-br-md",
    },
  ];

  return (
    <>
      {/* Desktop: slide-in from left */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 bg-gray-800" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile/tablet: FAB bottom-right */}
      <div className="lg:hidden fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
        {/* Expanded links */}
        {open && (
          <div className="flex flex-col items-end gap-2">
            {links.map(({ id, icon, label, href, download }) => (
              <a
                key={id}
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 duration-200"
                onClick={() => setOpen(false)}
              >
                <span className="text-sm">{label}</span>
                {icon}
              </a>
            ))}
          </div>
        )}

        {/* FAB toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-700 duration-200"
          aria-label="Toggle social links"
        >
          {open ? <FaTimes size={20} /> : <FaPlus size={20} />}
        </button>
      </div>
    </>
  );
};

export default SocialLinks;
