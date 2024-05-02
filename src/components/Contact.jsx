import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
 return (
  <div className="pb-20 border-b border-neutral-900">
   <motion.h1
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1 }}
    className="my-10 text-4xl text-center">Get In Touch</motion.h1>
   <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1 }}
    className="tracking-tighter text-center">
    <a href="#" className="border-b">{CONTACT.email}</a>
   </motion.div>
  </div>
 )
}

export default Contact