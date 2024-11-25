import Contacts from "../About-me/contactes/contacts";
import Category from "../category/category";
import data from '/src/data.json'

import React, { useState } from 'react';
import emailjs from "@emailjs/browser";



const ContactForm = () => {
const [formData, setFormData] = useState({ from_name: "", email_id: "", message: "" });
const [isSubmitted, setIsSubmitted] = useState(false);

const handleChange = (e) => {
	const { name, value } = e.target;
	setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
	e.preventDefault();
	emailjs
	.send(
		"service_bl88nm5", 
		"template_28p7pab", 
		formData,
		"i071RQdRWVu9KKjlB" 
	)
	.then(
		(result) => {
		console.log("Email sent successfully:", result.text);
		setIsSubmitted(true);
		setTimeout(() => setIsSubmitted(false), 2000);
		setFormData({ from_name: "", email_id: "", message: "" });
		},
		(error) => {
		console.error("Error sending email:", error.text);
		}
	);
};

return (
	<div className="h-full flex items-center justify-center">
		{
			isSubmitted ? (
				<div className="absolute z-50 top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
					<div className="w-[30rem] h-[15rem] bg-dark-blue flex items-center justify-center flex-col gap-5">
						{/* <img src="/assets/check.svg" alt="" className="w-[50px] h-[50px]"/> */}
						<span className="2xl:text-xl 3xl:text-2xl  text-light-gray">Message Sent Successfully</span>
					</div>
				</div>
			) : null
		}
	<form
		onSubmit={handleSubmit}
		className="w-[20rem] md:w-[30rem] text-light-gray grid gap-5"
	>
		<label className="block mb-4 grid gap-2">
		<span className="block md:text-xl mb-1">_name:</span>
		<input
			type="text"
			name="from_name"
			value={formData.from_name}
			onChange={handleChange}
			placeholder="Your Name"
			className="w-full h-[4rem] px-4 py-2 bg-dark-blue border border-custom-gray rounded-xl focus:outline-none focus:border-primary"
			required
		/>
		</label>
		<label className="block mb-4 grid gap-2">
		<span className="block md:text-xl mb-1">_email:</span>
		<input
			type="email_id"
			name="email_id"
			value={formData.email_id}
			onChange={handleChange}
			placeholder="Your Email"
			className="w-full h-[4rem] px-4 py-2 bg-dark-blue border border-custom-gray rounded-xl focus:outline-none focus:border-primary"
			required
		/>
		</label>
		<label className="block mb-6 grid gap-2">
		<span className="block md:text-xl mb-1">_message:</span>
		<textarea
			name="message"
			value={formData.message}
			onChange={handleChange}
			placeholder="Your Message"
			rows="4"
			className="w-full px-4 py-2 bg-dark-blue border border-custom-gray rounded-xl focus:outline-none focus:border-primary resize-none"
			required
		></textarea>
		</label>
		<button
		type="submit"
		className={`px-6 py-2 w-[14rem] h-[3rem] bg-custom-gray text-white rounded-xl ${
			isSubmitted ? "animate-pulse" : ""
		}`}
		>
		{isSubmitted ? "Message Sent" : "submit-message"}
		</button>
	</form>
	</div>
);
};



function Content(){
	return(
		<div className='w-full h-full flex flex-col border-r-[1px] border-r-custom-gray'>
				<div className='hidden md:flex w-full h-[4rem] border-b-[1px] border-b-custom-gray'>
					<div className='flex justify-center items-center h-full w-[19rem] border-r-[1px] border-r-custom-gray'>
						<div className='flex justify-between items-center w-[90%]'>
								<span className='2xl:text-xl 3xl:text-2xl  text-light-gray'>{ '_contact-me'
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
						<img src="/assets/to.svg" alt="" className="w-[20px] h-[20px] 2xl:w-auto 2xl:h-auto"/>
						<div className="flex items-center gap-2">
							<img src={link.icon} alt="" className="w-[30px] h-[30px] 2xl:w-auto 2xl:h-auto"/>
							<span className="2xl:text-xl 3xl:text-2xl  text-light-gray">{link.platform}</span>
						</div>
					</a>
				))
			}
		</div>
	)
}

function ContactMe() {
return (
	<div className="w-full h-full about-me flex md:grid grid-cols-[1fr_4fr]  justify-start items-start flex-col overflow-y-auto">
		<div className='flex w-full  md:border-r-[1px] border-r-custom-gray'>
			<div className='w-full  md:border-r-[1px] border-r-custom-gray'>
				<Category name="contacts" component={<Contacts/>}/>
				<Category name="Find-me-on" component={<SocialMedia/>}/>
			</div>
		</div>
		<div className="w-full h-full scrollbar-none scrollbar-hide no-scrollbar border-l-[1px] border-custom-gray">
			<Content/>
		</div>
	</div>
);
}


export default ContactMe;