import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_z7xbfqq', 'template_pi3ps3g', form.current, 'Uhaehfq9ck6ptq6CX')
         .then((result) => {
            console.log(result.text);
            toast.success('you succesfully send a message!!')
            form.current.reset();
         }, (error) => {
            console.log(error.text);
         });
   };


   return (
      <div className='mt-32 pb-16' id='contact'>
         <h1 className='text-white text-4xl font-bold text-center my-8'>Get In Touch</h1>
         <div className='flex flex-col md:flex-row gap-8 md:gap-2 lg:gap-0 justify-between mt-16 mb-12'>
            <div className='bg-slate-700 p-8 text-slate-100 rounded-lg'>
               <p className='font-semibold mb-2'>Phone <AddIcCallIcon /></p>
               <p>(+88) 01571287088</p>
            </div>
            <div className='bg-slate-700 p-8 text-slate-100 rounded-lg'>
               <p className='font-semibold mb-2'>Email <EmailIcon /></p>
               <p>saifulislamptcbd@gmail.com</p>
            </div>
            <div className='bg-slate-700 p-8 text-slate-100 rounded-lg'>
               <p className='font-semibold mb-2'>Location <LocationOnIcon /></p>
               <p>Khagracharri, Bangladesh</p>
            </div>
         </div>
         <form ref={form} onSubmit={sendEmail} className='w-full'>
            <div className='my-5'>
               <input type="text" name="user_name" className='w-full focus:outline-0 text-white px-3 py-2 rounded-md bg-slate-600 placeholder:text-white' required placeholder='Name' />
            </div>
            <div className='my-5'>
               <input type="email" name="user_email" className='w-full focus:outline-0 text-white px-3 py-2 rounded-md bg-slate-600 placeholder:text-white' required placeholder='Email' />
            </div>
            <div className=''>
               <textarea name="message" className='w-full focus:outline-0 text-white px-3 py-2 rounded-md h-24 bg-slate-600 placeholder:text-white' required placeholder='Your Message' />
            </div>
            <input type="submit" value="Send Mail" className='btn mt-2 focus:outline-0 bg-slate-500 text-slate-200 border-0 w-36' />
         </form>
      </div>
   );
};

export default Contact;