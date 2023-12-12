import myImg from "../assets/my-img (6).JPG";
import DownloadIcon from '@mui/icons-material/Download';
import ArticleIcon from '@mui/icons-material/Article';

const Banner = () => {

   return (
      <div className="flex flex-col md:flex-row items-center mt-0 md:mt-8 lg:mt-0 gap-8 md:gap-0 py-4 lg:h-[90vh]">

         <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <p className="text-2xl text-white mb-4">Hi, I am <span className="text-lime-500">-</span></p>
            <h1 className="text-6xl md:text-7xl font-bold text-white">Saiful Islam</h1>
            <p className="text-2xl font-medium mt-4 text-white">Frontend Developer</p>
            <p className="text-slate-400 mt-4 pr-8">I am Passionate to crafting seamless user experiences. Proficient in Tailwind, JavaScript and React. Committed to innovation, clean code, and transforming ideas into engaging web solutions.</p>

            <div className="mt-6 flex gap-3">
               <a href="/saiful-resume.pdf" download>
                  <button className="btn bg-lime-500 border-0 bg-opacity-85 text-black">Download Resume <DownloadIcon /></button>
               </a>
               <a href="#projects"><button className="btn btn-outline border-lime-400 text-white border-2">My Projects <ArticleIcon /></button></a>
            </div>

         </div>

         <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
            <img src={myImg} alt="saiful image" className="h-96 object-cover w-full rounded-xl border-r-8 border-t-8 border-lime-500 hover:scale-110 duration-1000" />
         </div>

      </div>
   );
};

export default Banner;