export default function _500() {
 return (
  <>
   <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
    <div className="fixed top-0 w-full h-full -z-10">
     <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
     <div className="flex items-center justify-center w-full h-full px-8">
      <span className="text-2xl font-light">500 | Internal Server Error</span>
     </div>
    </div>
   </div>
  </>
 )
}

