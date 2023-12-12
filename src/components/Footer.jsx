import githubicon from "../assets/github (2).png";
import linkedinicon from "../assets/linkedin-logo-48.png";
import facebookicon from "../assets/facebook.png";

const Footer = () => {
   return (
      <div className="mt-28">
         <footer className="footer footer-center p-10 rounded text-white">
            <nav>
               <div className="grid grid-flow-col gap-4">
                  <a href="https://www.linkedin.com/in/saiful-islam-ptc" rel="noreferrer" target="_blank"><img src={linkedinicon} alt="linkedinicon" /></a>
                  <a href="https://github.com/saiful1213" rel="noreferrer" target="_blank"><img src={githubicon} alt="githubicon" /></a>
                  <a href="https://web.facebook.com/saifulislamptc1213" rel="noreferrer" target="_blank"><img src={facebookicon} alt="facebookicon" /></a>
               </div>
            </nav>
            <aside>
               <p>Copyright © 2023 - All right reserved by Saiful Islam</p>
            </aside>
         </footer>
      </div>
   );
};

export default Footer;