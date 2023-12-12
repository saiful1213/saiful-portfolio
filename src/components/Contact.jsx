import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';

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