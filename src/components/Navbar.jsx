import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SOCIAL } from "../constants"
import { Link } from "react-router-dom"
import Logo from "./Logo"

const Navbar = () => {
 return (
  <nav className="flex items-center justify-between py-6 mb-20">
   <Logo />
   <div className="flex items-center justify-center gap-4 m-8">
    <Link to={"/books"} className="text-md">Books</Link>
    <Link to={"/blog"} className="text-md">Blog</Link>
    <Link to={"/resources"} className="text-md">Resources</Link>
    <div className="flex items-center justify-center gap-4 m-8 text-xl">
     <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
     </a>
     <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
      <FaGithub />
     </a>
    </div>
   </div>
  </nav>
 )
}

export default Navbar