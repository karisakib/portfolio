import { HERO_CONTENT, HERO_TITLE } from "../constants/index"
import profilePic from "../assets/kevinRushProfile.png"
import { motion } from "framer-motion"

const Hero = () => {
 return (
  <div className="pb-4 border-b border-neutral-900 lg:mb-36">
   <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2">
     <div className="flex flex-col items-center lg:items-start">
      <motion.h1
       initial={{ x: -100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0 }}
       className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Kari Sakib</motion.h1>
      <motion.span
       initial={{ x: -100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
       className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
        {HERO_TITLE}
       </motion.span>
      <motion.p
       initial={{ x: -100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 1 }}
       className="max-w-xl py-6 my-2 font-light tracking-tighter">
       {HERO_CONTENT}
      </motion.p>
     </div>
    </div>
    <div className="w-full lg:w-1/2 lg:p-8">
     <div className="flex justify-center">
      <motion.img
       initial={{ x: 100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 1, delay: 1.2 }}
       src={profilePic} alt="Kari Sakib" />
     </div>
    </div>
   </div>
  </div>
 )
}

export default Hero