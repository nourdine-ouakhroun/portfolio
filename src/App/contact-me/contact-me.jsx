import Contacts from "../About-me/contactes/contacts";
import Category from "../category/category";
import data from '/src/data.json'

import React, { useState } from 'react';


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000); // Reset form after 2 seconds
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="h-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[30rem] text-light-gray grid gap-5"
      >
        <label className="block mb-4 grid gap-2">
          <span className="block text-xl mb-1">_name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full h-[4rem] px-4 py-2 bg-dark-blue border border-custom-gray rounded-xl focus:outline-none focus:border-primary"
            required
          />
        </label>

        <label className="block mb-4 grid gap-2">
          <span className="block text-xl mb-1">_email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full h-[4rem] px-4 py-2 bg-dark-blue border border-custom-gray rounded-xl focus:outline-none focus:border-primary"
            required
          />
        </label>

        <label className="block mb-6 grid gap-2">
          <span className="block text-xl mb-1">_message:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 bg-dark-blue border border-custom-gray rounded-xl focus:outline-none focus:border-primary resize-none [&::-webkit-scrollbar]:hidden"
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className={`px-6 py-2 w-[14rem] h-[3rem] bg-custom-gray text-white rounded-xl transition-transform duration-300 hover:bg-[#3C9DD0] ${
            isSubmitted ? 'animate-pulse' : ''
          }`}
        >
          {isSubmitted ? 'Message Sent' : 'submit-message'}
        </button>
      </form>
    </div>
  );
};

function Content(){
    return(
          <div className='w-full h-full flex flex-col border-r-[1px] border-r-custom-gray'>
                  <div className='w-full h-[4rem] border-b-[1px] border-b-custom-gray'>
                      <div className='flex justify-center items-center h-full w-[19rem] border-r-[1px] border-r-custom-gray'>
                          <div className='flex justify-between items-center w-[90%]'>
                                  <span className='text-2xl text-light-gray'>{
                                  }</span>
                              <img src="/assets/x.svg" alt=""/>
                          </div>
                      </div>
                  </div>
                  {
                      <div className='flex justify-center items-center w-full h-full'>
                        <ContactForm/>
                      </div>
                  }
          </div>
    )
}

function SocialMedia() {
    return (
        <div className="mt-5 w-[90%] h-full flex flex-col justify-center items-start gap-5">
            {
                Array.from(data.contact.socials).map((link, index) => (
                    <a key={index} href={link.link} className="flex items-center gap-5">
                        <img src="/assets/to.svg" alt="" className="w-[25px] h-[25px]"/>
                        <div className="flex items-center gap-2">
                            <img src={link.icon} alt="" className="w-[40px] h-[40px]"/>
                            <span className="text-2xl text-light-gray">{link.platform}</span>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

function ContactMe() {
  return (
    <div className="w-full h-full about-me flex md:grid grid-cols-[1fr_4fr]  justify-start items-center flex-col">
        <div className='flex w-full h-full md:border-r-[1px] border-r-custom-gray'>
            <div className='w-full h-full md:border-r-[1px] border-r-custom-gray'>
                <Category name="contacts" component={<Contacts/>}/>
                <Category name="Find-me-on" component={<SocialMedia/>}/>
            </div>
        </div>
        <div className="w-full h-full  scrollbar-none scrollbar-hide  no-scrollbar">
            <Content/>
        </div>
    </div>
  );
}


export default ContactMe;