import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MotionConfig, motion } from "framer-motion";

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="./"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 rounded-full object-cover" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'> Shiyi &nbsp; <span className='sm:block'>Cheng</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <MotionConfig transition={{ duration: 0.2, ease: "easeInOut" }}>
            <motion.button
              initial={false}
              animate={toggle ? "open" : "closed"}
              onClick={() => setToggle(!toggle)}
              className="relative h-[28px] w-[28px] cursor-pointer"
            >
              <motion.span
                variants={VARIANTS.top}
                className="absolute h-[2px] w-[25px] bg-white"
                style={{ y: "-50%", left: "50%", x: "-50%", top: "30%" }}
              />
              <motion.span
                variants={VARIANTS.middle}
                className="absolute h-[2px] w-[25px] bg-white"
                style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
              />
              <motion.span
                variants={VARIANTS.bottom}
                className="absolute h-[2px] w-[17px] bg-white"
                style={{
                  x: "-50%",
                  y: "50%",
                  bottom: "30%",
                  left: "calc(50% + 5px)",
                }}
              />
            </motion.button>
          </MotionConfig>
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} fonts-poppins fonts-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(false) // Cerrar el menú después de seleccionar
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["30%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "30%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["30%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "30%"],
      left: "calc(50% + 5px)",
    },
  },
};
