import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import RESOURCES from "../../content/resources.json"
import RESOURCES_V2 from "../../content/resources-v2.json"


// export default function Resources() {
//  return (
//   <>
//    <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
//     <div className="fixed top-0 w-full h-full -z-10">
//      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
//     </div>
//     <div className="container px-8 mx-auto">
//      <Navbar />
//      <div className="flex flex-col items-center justify-center w-full h-full text-white fle">
//       {RESOURCES[0].sections.map((section, index) => (
//        <div id="resource-container" key={index} className="flex flex-col w-full">
//         <div id="resource-header" className="my-3">
//          <h4 className="text-2xl text-white">{section.section}</h4>
//          <div className="mt-2 border-b border-purple-900"></div>
//         </div>
//         <div id="resource-links" className="flex flex-wrap gap-3 my-3">
//          {section.resources.map((resource, index) => (
//           <a key={index} href={resource} className="px-3 py-3 text-white border rounded border-neutral-900 bg-black/40 hover:bg-black/20">{resource}</a>
//          ))}
//         </div>
//         <div id="resource-books" className="flex flex-wrap gap-3 my-3">
//          {section.books.map((resource, index) => (
//           <a key={index} href={resource} className="px-3 py-3 text-white border rounded border-neutral-900 bg-black/40 hover:bg-black/20">{resource}</a>
//          ))}
//         </div>
//        </div>
//       ))}
//      </div>
//     </div>
//    </div>
//   </>
//  )
// }

function ResourceNavigation() {
 return (
  <>
   <motion.div className="flex flex-wrap w-full h-full gap-2 text-white">
    {
     RESOURCES_V2[0].sections.map((sections, index) => (
      <div key={index} className="px-2 py-1 text-sm text-purple-400 bg-black rounded-lg">
       {sections.section}
      </div>
     ))
    }
   </motion.div>
  </>
 )
}

export default function Resources() {
 return (
  <>
   <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
    <div className="fixed top-0 w-full h-full -z-10">
     <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    <div className="container px-8 mx-auto">
     <Navbar />
     <ResourceNavigation />
     <div className="flex flex-col items-center justify-center w-full h-full text-white">
      {RESOURCES_V2[0].sections.map((section, index) => (
       <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        id="resource-container" key={index} className="flex flex-col w-full">
        <div id="resource-header" className="my-3">
         <h4 className="text-2xl text-white">{section.section}</h4>
         <div className="mt-2 border-b border-purple-900"></div>
        </div>
        <div id="resource-links" className="flex flex-wrap gap-3 my-3">
         {section.resources.map((resource, index) => (
          <div key={index} className="flex flex-col px-3 py-3 text-white border rounded border-neutral-900 bg-black/40 hover:bg-black/20">
           <a key={index} href={resource.url} className="text-white">{resource.title}</a>
           <span key={index} className="text-sm text-white">{resource.description}</span>
          </div>
         ))}
        </div>
        <div id="resource-books" className="flex flex-wrap gap-3 my-3">
         {section.books.map((resource, index) => (
          <div key={index} className="flex flex-col px-3 py-3 text-white border rounded border-neutral-900 bg-black/40 hover:bg-black/20">
           <a key={index} href={resource.url} className="text-white">{resource.title}</a>
           <span key={index} className="text-sm text-white">{resource.description}</span>
          </div>
         ))}
        </div>
       </motion.div>
      ))}
     </div>
    </div>
   </div>
  </>
 )
}

// const ResourcesB = () => {
//  return (
//   <div className="pb-4 border-b border-neutral-900">
//    <motion.h1
//     whileInView={{ opacity: 1, y: 0 }}
//     initial={{ opacity: 0, y: -100 }}
//     transition={{ duration: 1 }}
//     className="my-20 text-4xl text-center">
//     Resources
//    </motion.h1>
//    <div>
//     {RESOURCES.map((project, index) => (
//      <div key={index}
//       className="flex flex-wrap mb-8 lg:justify-center">
//       <motion.div
//        whileInView={{ opacity: 1, x: 0 }}
//        initial={{ opacity: 0, x: -100 }}
//        transition={{ duration: 1 }}
//        className="w-full lg:w-1/4">
//        <img
//         src={project.image}
//         alt={project.title}
//         width={150}
//         height={150}
//         className="mb-6 rounded"
//        />
//       </motion.div>
//       <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 1 }}
//       className="w-full max-w-xl lg:w-3/4">
//        <h6 className="mb-2 font-semibold">{project.title}</h6>
//        <p className="mb-4 text-neutral-400">{project.description}</p>
//        {project.technologies.map((tech, index) => (
//         <span key={index} className="px-2 py-1 mr-2 text-sm font-medium text-purple-900 rounded bg-neutral-900">{tech}</span>
//        ))}
//       </motion.div>
//      </div>
//     ))}
//    </div>

//   </div>
//  )
// }