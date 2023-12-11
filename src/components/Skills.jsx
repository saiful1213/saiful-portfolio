import htmlImg from "../assets/html.webp";
import cssImg from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.png";
import expressImg from "../assets/express.png";
import nodeImg from "../assets/node.png";
import mongodbImg from "../assets/mongodb.png";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {

   useEffect(() => {
      AOS.init();
   }, [])

   return (
      <div className="mt-28" id="skills">
         <h1 className="text-4xl text-white text-center font-bold">Skills</h1>

         <div data-aos="zoom-in" data-aos-duration="1000" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-10 mt-16">
            <div className="flex items-center gap-4 border rounded-xl px-4 py-2 border-lime-500 hover:bg-lime-500 hover:bg-opacity-30 duration-1000">
               <img src={htmlImg} alt="htmlImg" className="h-12" />
               <h2 className="text-white font-semibold">HTML</h2>
            </div>
            <div className="flex items-center gap-4 border rounded-xl px-4 py-2 border-lime-500 hover:bg-lime-500 hover:bg-opacity-30 duration-1000">
               <img src={cssImg} alt="cssImg" className="h-12" />
               <h2 className="text-white font-semibold">CSS</h2>
            </div>
            <div className="flex items-center gap-4 border rounded-xl px-4 py-2 border-lime-500 hover:bg-lime-500 hover:bg-opacity-30 duration-1000">
               <img src={tailwind} alt="tailwind" className="h-12" />
               <h2 className="text-white font-semibold">TAILWIND</h2>
            </div>
            <div className="flex items-center gap-4 border rounded-xl px-4 py-2 border-lime-500 hover:bg-lime-500 hover:bg-opacity-30 duration-1000">
               <img src={jsImg} alt="jsImg" className="h-12" />
               <h2 className="text-white font-semibold">JAVASCRIPT</h2>
            </div>
            <div className="flex items-center gap-4 border rounded-xl px-4 py-2 border-lime-500 hover:bg-lime-500 hover:bg-opacity-30 duration-1000">
               <img src={reactImg} alt="reactImg" className="h-12" />
               <h2 className="text-white font-semibold">REACT</h2>
            </div>
            <div className="flex items-center gap-4 border rounded-xl px-4 py-2 border-lime-500 hover:bg-lime-500 hover:bg-opacity-30 duration-1000">
               <img src={nodeImg} alt="nodeImg" className="h-12" />
            </div>
            <div className="flex items-center gap-4 border rounded-xl px-4 py-2 border-lime-500 hover:bg-lime-500 hover:bg-opacity-30 duration-1000">
               <img src={expressImg} alt="expressImg" className="h-12" />
               <h2 className="text-white font-semibold">EXPRESS JS</h2>
            </div>
            <div className="flex items-center gap-4 border rounded-xl px-4 py-2 border-lime-500 hover:bg-lime-500 hover:bg-opacity-30 duration-1000">
               <img src={mongodbImg} alt="mongodbImg" className="h-12" />
               <h2 className="text-white font-semibold">MONGODB</h2>
            </div>
         </div>
      </div>
   );
};

export default Skills;