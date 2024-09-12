import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import gsap from 'gsap';

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { EarthCanvas } from "./canvas"
import { slideIn } from "../utils/motion"
import "./AnimatedButton.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_v12kpjj",
        "template_65uz7bh",
        {
          from_name: form.name,
          to_name: "Shiyi",
          from_email: form.email,
          to_email: "shiyicheng13@gmail.com",
          message: form.message,
        },
        "HRIQzjzYU-MV_5KvP"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  const isFormValid = form.name.trim() !== "" && form.email.trim() !== "" && form.message.trim() !== "";

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.heroSubText}>Get in touch</p>
        <h2 className={styles.heroHeadText}>Contact.</h2>

        <form ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              required
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Message</span>
            <textarea
              rows='7'
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <AnimatedButton disabled={!isFormValid} />

        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")

const AnimatedButton = ({ isFormValid }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const getVar = (variable) => getComputedStyle(button).getPropertyValue(variable);

    const handleClick = () => {
      if (!isFormValid)
        return;
      if (!button.classList.contains('active')) {
        button.classList.add('active');

        gsap.to(button, {
          keyframes: [{
            '--left-wing-first-x': 50,
            '--left-wing-first-y': 100,
            '--right-wing-second-x': 50,
            '--right-wing-second-y': 100,
            duration: .2,
            onComplete() {
              gsap.set(button, {
                '--left-wing-first-y': 0,
                '--left-wing-second-x': 40,
                '--left-wing-second-y': 100,
                '--left-wing-third-x': 0,
                '--left-wing-third-y': 100,
                '--left-body-third-x': 40,
                '--right-wing-first-x': 50,
                '--right-wing-first-y': 0,
                '--right-wing-second-x': 60,
                '--right-wing-second-y': 100,
                '--right-wing-third-x': 100,
                '--right-wing-third-y': 100,
                '--right-body-third-x': 60
              });
            }
          }, {
            '--left-wing-third-x': 20,
            '--left-wing-third-y': 90,
            '--left-wing-second-y': 90,
            '--left-body-third-y': 90,
            '--right-wing-third-x': 80,
            '--right-wing-third-y': 90,
            '--right-body-third-y': 90,
            '--right-wing-second-y': 90,
            duration: .2
          }, {
            '--rotate': 50,
            '--left-wing-third-y': 95,
            '--left-wing-third-x': 27,
            '--right-body-third-x': 45,
            '--right-wing-second-x': 45,
            '--right-wing-third-x': 60,
            '--right-wing-third-y': 83,
            duration: .25
          }, {
            '--rotate': 55,
            '--plane-x': -8,
            '--plane-y': 24,
            duration: .2
          }, {
            '--rotate': 40,
            '--plane-x': 45,
            '--plane-y': -180,
            '--plane-opacity': 0,
            duration: .3,
            onComplete() {
              setTimeout(() => {
                button.removeAttribute('style');
                gsap.fromTo(button, {
                  opacity: 0,
                  y: -8
                }, {
                  opacity: 1,
                  y: 0,
                  clearProps: true,
                  duration: .3,
                  onComplete() {
                    button.classList.remove('active');
                  }
                });
              }, 2000);
            }
          }]
        });

        gsap.to(button, {
          keyframes: [{
            '--text-opacity': 0,
            '--border-radius': 0,
            '--left-wing-background': getVar('--primary-darkest'),
            '--right-wing-background': getVar('--primary-darkest'),
            duration: .1
          }, {
            '--left-wing-background': getVar('--primary'),
            '--right-wing-background': getVar('--primary'),
            duration: .1
          }, {
            '--left-body-background': getVar('--primary-dark'),
            '--right-body-background': getVar('--primary-darkest'),
            duration: .4
          }, {
            '--success-opacity': 1,
            '--success-scale': 1,
            duration: .25,
            delay: .25
          }]
        });
      }
    };

    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <button className="animated-button" type='submit' ref={buttonRef}>
      <span className="default">Send</span>
      <span className="success">Sending...</span>
      <div className="left"></div>
      <div className="right"></div>
    </button>
  );
};