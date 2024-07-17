import { Link } from "react-router-dom"

const Logo = () => {
 return (
   <div className="flex items-center flex-shrink-0">
    <Link to={'/'} className="w-10 mx-2 text-3xl font-medium text-white">Ks</Link>
   </div>
 )
}

export default Logo