
const Education = () => {
   return (
      <div className="mt-32 pb-16">
         <h1 className="text-white text-4xl font-bold text-center my-12">Education</h1>
         <ul className="timeline timeline-vertical">
            <li>
               <div className="timeline-start timeline-box bg-lime-500 border-0">
                  <h2>BBA</h2>
                  <p>Khagracharri Govt. College</p>
                  <p>2021-2025</p>
               </div>
               <hr />
            </li>
            <li>
               <hr />
               <div className="timeline-end timeline-box bg-lime-500 border-0">
                  <h2>HSC</h2>
                  <p>Guimara Govt. College</p>
                  <p>2019-2021</p>
               </div>
               <hr />
            </li>
            <li>
               <hr />
               <div className="timeline-start timeline-box bg-lime-500 border-0">
                  <h2>SSC</h2>
                  <p>Ramgarh Govt. High School</p>
                  <p>2019</p>
               </div>
               <hr />
            </li>
         </ul>
      </div>
   );
};

export default Education;