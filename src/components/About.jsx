import myImg from "../assets/my-img (4).jpg"
import DownloadIcon from '@mui/icons-material/Download';
import ContactsIcon from '@mui/icons-material/Contacts';

const About = () => {
   return (
      <div className='mt-32 pb-16' id="about">
         <h1 className='text-white text-4xl font-bold text-center my-8'>About Me</h1>
         <div className="flex items-center flex-col md:flex-row-reverse gap-12 md:gap-8 mt-16">
            <div className="w-full md:w-1/2">
               <p className="text-slate-300">Hello! I am Saiful Islam, a passionate frontend developer. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. What sets me apart is not only my technical prowess but also my commitment to understanding user behavior and incorporating feedback to continually enhance the user experience. I am excited about the prospect of leveraging my skills to contribute to innovative projects and help organizations achieve their digital objectives. I am available for any kind of job opportunity that suits my interests.</p>
               <div className="mt-6 flex gap-3">
                  <a href="/saiful-resume.pdf" download>
                     <button className="btn bg-lime-500 border-0 bg-opacity-85 text-black">Get Resume <DownloadIcon /></button>
                  </a>
                  <a href="#contact"><button className="btn btn-outline border-lime-400 text-white border-2">Contact Me<ContactsIcon /></button></a>
               </div>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
               <img src={myImg} alt="myImg" className="h-96 object-cover w-full rounded-xl border-r-8 border-t-8 border-lime-500 hover:scale-110 duration-1000" />
            </div>
         </div>
      </div>
   );
};

export default About;