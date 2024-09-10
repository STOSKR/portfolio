import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

import { navLinks } from '../constants'

export const NavbarButton = () => {
    return (
        <div className="grid place-content-center bg-gradient-to-br">
            <AnimatedHamburgerButton />
        </div>
    );
};

const AnimatedHamburgerButton = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false)
    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <motion.button
                initial={false}
                animate={active ? "open" : "closed"}
                onClick={() => setActive((active) => !active)}
                className="relative h-[28px] w-[28px] cursor-pointer"
            >
                <motion.span
                    variants={VARIANTS.top}
                    className="absolute h-[2px] w-[20px] bg-white"
                    style={{ y: "-50%", left: "50%", x: "-50%", top: "30%" }}
                />
                <motion.span
                    variants={VARIANTS.middle}
                    className="absolute h-[2px] w-[20px] bg-white"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                    variants={VARIANTS.bottom}
                    className="absolute h-[2px] w-[14px] bg-white"
                    style={{
                        x: "-50%",
                        y: "50%",
                        bottom: "30%",
                        left: "calc(50% + 5px)",
                    }}
                />
            </motion.button>
        </MotionConfig>
    );
};

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
