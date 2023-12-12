import { useEffect, useState } from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Aos from "aos";

const Projects = () => {
   const [projects, setProjects] = useState([]);
   useEffect(() => {
      fetch('project.json')
         .then(res => res.json())
         .then(data => setProjects(data))
   }, [])

   useEffect(() => {
      Aos.init();
   }, [])

   return (
      <div className="mt-32" id="projects">
         <h1 className="text-4xl text-white text-center font-bold">Projects</h1>
         <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-16">
            {
               projects.map(project => {
                  const { id, img, title, desc, live_link, github_link, Built_with } = project;
                  return (
                     <div className="rounded-xl bg-slate-800 hover:ease-linear px-2 pt-2 pb-4 w-full overflow-hidden" key={id}>
                        <img src={img} alt="project img" className="h-96 object-cover w-full hover:scale-105 duration-1000" />
                        <h1 className="text-white font-bold text-4xl my-4">{title}</h1>
                        <p className="text-slate-400">{desc}</p>
                        <div className="flex gap-3 mt-4">
                           <button className="btn btn-outline btn-success btn-sm" onClick={() => window.open(live_link, "_blank")}>
                              Live Link
                              <ArrowOutwardIcon />
                           </button>
                           <button className="btn btn-outline btn-success btn-sm" onClick={() => window.open(github_link, "_blank")}>
                              github Link
                              <ArrowOutwardIcon />
                           </button>
                        </div>
                        <p className="text-slate-300 mt-3">Build with: {Built_with}</p>
                     </div>
                  )
               })
            }
         </div>
      </div>
   );
};

export default Projects;