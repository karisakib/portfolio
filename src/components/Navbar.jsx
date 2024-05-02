import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SOCIAL } from "../constants"

const Navbar = () => {
 return (
  <nav className="flex items-center justify-between py-6 mb-20">
   <div className="flex items-center flex-shrink-0">
    <span className="w-10 mx-2 text-3xl font-medium text-white">Ks</span>
   </div>
   <div className="flex items-center justify-center gap-4 m-8 text-2xl">
    <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
    </a>
    <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
    <FaGithub />
    </a>
   </div>
  </nav>
 )
}

export default Navbar