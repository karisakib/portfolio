import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Books from "./pages/Books";
import Resources from "./pages/Resources";
import _404 from "./pages/_404";
import _500 from "./pages/_500";
import BlogCollection from "./partials/BlogCollection";
import Post from "./layouts/Post";





export default function App() {
 return (
  <>
   <BrowserRouter>
    <Routes>
     <Route index element={<Home />} />
     <Route path="blog" element={<Blog />} >
      <Route index element={<BlogCollection />} />
      <Route path=":slug" element={<Post />} />
     </Route>
     <Route path="books" element={<Books />} />
     <Route path="resources" element={<Resources />} />
     <Route path="contact" element={<Contact />} />
     <Route path="500" element={<_500 />} />
     <Route path="*" element={<_404 />} />
    </Routes>
   </BrowserRouter>
  </>
 )
}

