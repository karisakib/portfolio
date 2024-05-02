import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiFlask } from "react-icons/si";

import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiCypress } from "react-icons/si";

import { SiSelenium } from "react-icons/si";
import { SiCucumber } from "react-icons/si";
import { SiPlaywright } from "react-icons/si";
import { SiPostman } from "react-icons/si";

import { motion } from "framer-motion"

const iconVariants = (duration) => ({
 intial: { y: -10 },
 animate: {
  y: [10, -10],
  transition: {
   duration: duration,
   ease: "linear",
   repeat: Infinity,
   repeatType: "reverse"
  }
 }
})

const Technologies = () => {
 return (
  <div className="pb-24 border-b border-neutral-900">
   <motion.h1
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1.5 }}
    className="my-20 text-4xl text-center">
    Technologies
   </motion.h1>

   <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    transition={{ duration: 1.5 }}
    className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
     variants={iconVariants(2.4)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <SiJavascript className="text-yellow-300 text-7xl" />
    </motion.div>
    <motion.div
     variants={iconVariants(2.4)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <SiFastapi className="text-emerald-400 text-7xl" />
    </motion.div>
    <motion.div
     variants={iconVariants(2.4)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <SiTypescript className="text-blue-600 text-7xl" />
    </motion.div>
    <motion.div
     variants={iconVariants(2.4)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <RiReactjsLine className="text-7xl text-cyan-400" />
    </motion.div>
    <motion.div
     variants={iconVariants(3)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <TbBrandNextjs className="text-7xl" />
    </motion.div>
    <motion.div
     variants={iconVariants(5)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <SiMongodb className="text-green-500 text-7xl" />
    </motion.div>
    <motion.div
     variants={iconVariants(2)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <FaPython className="text-yellow-300 text-7xl" />
    </motion.div>
    <motion.div
     variants={iconVariants(2)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <SiFlask className="text-7xl" />
    </motion.div>
    <motion.div
     variants={iconVariants(6)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <FaNodeJs className="text-green-500 text-7xl" />
    </motion.div>
    <motion.div
     variants={iconVariants(4)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <BiLogoPostgresql className="text-7xl text-sky-700" />
    </motion.div>
    <motion.div
     variants={iconVariants(3.6)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <SiCypress className="text-green-400 text-7xl" />
    </motion.div>
    <motion.div
     variants={iconVariants(3.6)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <SiSelenium className="text-green-400 text-7xl" />
    </motion.div>
    <motion.div
     variants={iconVariants(3.6)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <SiCucumber className="text-green-400 text-7xl" />
    </motion.div>
    <motion.div
     variants={iconVariants(3.6)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <SiPlaywright className="text-green-400 text-7xl" />
    </motion.div>
    <motion.div
     variants={iconVariants(3.6)}
     initial="initial"
     animate="animate"
     className="p-4 border-4 rounded-2xl border-neutral-800">
     <SiPostman className="text-orange-500 text-7xl" />
    </motion.div>
   </motion.div>
  </div>
 )
}

export default Technologies