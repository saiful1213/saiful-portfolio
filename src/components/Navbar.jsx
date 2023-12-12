import { Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

   const navItems = <>
      <li className="ml-5 text-lg text-white hover:underline underline-offset-8 decoration-lime-500 decoration-2 hover:duration-150 hover:ease-in-out"><a href="#about">About</a></li>
      <li className="ml-5 text-lg text-white hover:underline underline-offset-8 decoration-lime-500 decoration-2 hover:duration-150 hover:ease-in-out"><a href="#skills">Skills</a></li>
      <li className="ml-5 text-lg text-white hover:underline underline-offset-8 decoration-lime-500 decoration-2 hover:duration-150 hover:ease-in-out"><a href="#projects">Projects</a></li>
      <li className="ml-5 text-lg text-white hover:underline underline-offset-8 decoration-lime-500 decoration-2 hover:duration-150 hover:ease-in-out"><a href="#contact">Contact</a></li>
   </>

   //  When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
   let prevScrollpos = window.scrollY;
   window.onscroll = function () {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
         document.getElementById("navbar").style.top = "0";
      } else {
         document.getElementById("navbar").style.top = "-90px";
      }
      prevScrollpos = currentScrollPos;
   }

   return (
      <div className="bg-[#20314d] fixed z-10 mx-auto top-0 w-full" id="navbar" style={{ transition: 'top 0.5s' }}>
         <Container>
            <div className="navbar">
               <div className="navbar-start">
                  <div className="dropdown">
                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <MenuIcon />
                     </div>
                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#20314d] rounded-box w-52">
                        {navItems}
                     </ul>
                  </div>
                  <a href="#home"><button className="btn btn-ghost text-2xl p-0 text-white"><span className="text-lime-500">_</span> sA<span className="text-lime-500">i</span>uL <span className="text-lime-500">_</span></button></a>
               </div>
               <div className="navbar-end hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                     {navItems}
                     <a href="/saiful-resume.pdf" download>
                        <button className="btn btn-outline hover:text-lime-500 border-lime-500 border-2 text-white ml-5 md:hidden xl:block">Resume</button>
                     </a>
                  </ul>
               </div>
            </div>
         </Container >
      </div>
   );
};

export default Navbar;