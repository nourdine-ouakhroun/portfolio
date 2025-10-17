import Contacts from "../About-me/contactes/contacts";
import Category from "../category/category";
import data from '/src/data.json'

import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { responsiveSizes } from '../../utils/responsive.js';

// Custom Contacts component for Contact Me page with wider width for email
function ContactMeContacts() {
	return (
		<div className="flex flex-col justify-center items-start gap-0 sm:gap-0.5">
			<a 
				href={`mailto:${data.contact.email}`}
				className="group flex items-center gap-2 p-2 rounded-lg hover:bg-custom-gray/20 transition-all duration-300 w-full hover:scale-[1.02]"
			>
				{/* Link indicator */}
				<div className="w-1 h-6 bg-light-green/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				
				{/* Contact info */}
				<div className="flex items-center gap-3 flex-1">
					<div className="w-6 h-6 bg-custom-gray/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-light-green/20 group-hover:border-light-green/50 group-hover:bg-light-green/10 transition-all duration-300">
						<img src="/assets/mail-icon.svg" alt="" className={`${responsiveSizes.icons.xs} group-hover:scale-110 transition-transform duration-300`} />
					</div>
					<span className="text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-light-gray whitespace-nowrap group-hover:text-light-green transition-colors duration-300">
						{data.contact.email}
					</span>
				</div>
				
				{/* External link icon */}
				<svg className="w-4 h-4 text-light-gray/60 group-hover:text-light-green group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
				</svg>
			</a>
			<a 
				href={`tel:${data.contact.phone2}`}
				className="group flex items-center gap-2 p-2 rounded-lg hover:bg-custom-gray/20 transition-all duration-300 w-full hover:scale-[1.02]"
			>
				{/* Link indicator */}
				<div className="w-1 h-6 bg-light-green/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				
				{/* Contact info */}
				<div className="flex items-center gap-3 flex-1">
					<div className="w-6 h-6 bg-custom-gray/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-light-green/20 group-hover:border-light-green/50 group-hover:bg-light-green/10 transition-all duration-300">
						<img src="/assets/phone-icon.svg" alt="" className={`${responsiveSizes.icons.xs} group-hover:scale-110 transition-transform duration-300`} />
					</div>
					<span className="text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-light-gray whitespace-nowrap group-hover:text-light-green transition-colors duration-300">
						{data.contact.phone2}
					</span>
				</div>
				
				{/* External link icon */}
				<svg className="w-4 h-4 text-light-gray/60 group-hover:text-light-green group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
				</svg>
			</a>
		</div>
	);
}



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
	<div className="h-full flex items-center justify-center p-4 relative">
		{/* Success Modal with modern design */}
		{isSubmitted && (
			<div className="absolute z-50 inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center">
				<div className="bg-gradient-to-br from-dark-blue/90 to-custom-gray/90 backdrop-blur-md rounded-xl border border-light-green/30 p-8 shadow-2xl shadow-light-green/20">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 bg-light-green/20 rounded-full flex items-center justify-center">
							<svg className="w-5 h-5 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<span className="text-lg text-light-gray font-medium">Message Sent Successfully!</span>
					</div>
				</div>
			</div>
		)}

		{/* Modern glassmorphism contact form */}
		<div className="w-full max-w-6xl relative">
			{/* Background effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-light-green/10 via-transparent to-purple/10 rounded-2xl blur-xl"></div>
			
			<div className="relative backdrop-blur-sm bg-gradient-to-br from-dark-blue/40 via-custom-gray/20 to-dark-blue/60 border border-custom-gray/50 rounded-xl p-6 md:p-8 shadow-2xl">
				{/* Header */}
				<div className="mb-8">
					<h2 className="text-2xl md:text-3xl font-semibold text-light-purple mb-3">Get In Touch</h2>
					<p className="text-light-gray text-base md:text-lg">Let's discuss your next project</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Name Field */}
					<div className="space-y-2">
						<label className="block text-sm font-medium text-light-gray">
							<span className="text-light-green">_</span>name
						</label>
						<div className="relative group">
							<input
								type="text"
								name="from_name"
								value={formData.from_name}
								onChange={handleChange}
								placeholder="Your Name"
								className="w-full h-11 px-4 py-2.5 bg-dark-blue/60 backdrop-blur-sm border border-custom-gray/50 rounded-lg focus:outline-none focus:border-light-green/60 focus:bg-dark-blue/80 transition-all duration-300 text-base text-white placeholder-light-gray/50 group-hover:border-light-green/30"
								required
							/>
							<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-light-green/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						</div>
					</div>

					{/* Email Field */}
					<div className="space-y-2">
						<label className="block text-sm font-medium text-light-gray">
							<span className="text-light-green">_</span>email
						</label>
						<div className="relative group">
							<input
								type="email"
								name="email_id"
								value={formData.email_id}
								onChange={handleChange}
								placeholder="your.email@example.com"
								className="w-full h-11 px-4 py-2.5 bg-dark-blue/60 backdrop-blur-sm border border-custom-gray/50 rounded-lg focus:outline-none focus:border-light-green/60 focus:bg-dark-blue/80 transition-all duration-300 text-base text-white placeholder-light-gray/50 group-hover:border-light-green/30"
								required
							/>
							<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-light-green/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						</div>
					</div>

					{/* Message Field */}
					<div className="space-y-2">
						<label className="block text-sm font-medium text-light-gray">
							<span className="text-light-green">_</span>message
						</label>
						<div className="relative group">
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Tell me about your project..."
								rows="3"
								className="w-full px-4 py-2.5 bg-dark-blue/60 backdrop-blur-sm border border-custom-gray/50 rounded-lg focus:outline-none focus:border-light-green/60 focus:bg-dark-blue/80 transition-all duration-300 text-base text-white placeholder-light-gray/50 resize-none group-hover:border-light-green/30"
								required
							></textarea>
							<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-light-green/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						</div>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						disabled={isSubmitted}
						className="w-full h-11 bg-gradient-to-r from-light-green/20 to-purple/20 hover:from-light-green/30 hover:to-purple/30 text-white rounded-lg transition-all duration-300 hover:scale-[1.02] text-base font-medium backdrop-blur-sm border border-light-green/30 hover:border-light-green/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
					>
						{isSubmitted ? (
							<>
								<div className="w-4 h-4 border-2 border-light-green/30 border-t-light-green rounded-full animate-spin"></div>
								Sending...
							</>
						) : (
							<>
								<span>Send Message</span>
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
								</svg>
							</>
						)}
					</button>
				</form>
			</div>
		</div>
	</div>
);
};


import { motion } from "framer-motion";

const pageVariants = {
	initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 50 },
};

function Content(){
	return(
		<div className='w-full h-full flex flex-col border-r-[1px] border-r-custom-gray'>
				<div className='hidden md:flex w-full h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] lg:h-[2.75rem] xl:h-[3rem] border-b-[1px] border-b-custom-gray bg-custom-gray/10'>
					<div className='flex justify-center items-center h-full w-[8rem] sm:w-[9rem] md:w-[10rem] lg:w-[11rem] xl:w-[12rem] border-r-[1px] border-r-custom-gray bg-dark-blue/20 hover:bg-custom-gray/20 transition-colors duration-200'>
						<div className='flex justify-between items-center w-[85%] gap-1'>
								<span className='text-[9px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs text-light-gray truncate'>_contact-me</span>
							<img src="/assets/x.svg" alt="" className="w-2 h-2 opacity-40 hover:opacity-80 cursor-pointer flex-shrink-0"/>
						</div>
					</div>
				</div>
				{
					<motion.div
						initial="initial"
						animate="animate"
						exit="exit"
						variants={pageVariants}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="flex justify-center items-center w-full h-full"
					>
						<ContactForm/>
					</motion.div>
				}
		</div>
	)
}

function SocialMedia() {
	return (
		<div className="mt-4 w-[90%] h-full flex flex-col justify-center items-start space-y-3">
			{
				Array.from(data.contact.socials).map((link, index) => (
					<a 
						key={index} 
						href={link.link} 
						className="group flex items-center gap-2 p-2 rounded-lg hover:bg-custom-gray/20 transition-all duration-300 w-full hover:scale-[1.02]" 
						target="_blank" 
						rel="noreferrer"
					>
						{/* Link indicator */}
						<div className="w-1 h-6 bg-light-green/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						
						{/* Social platform info */}
						<div className="flex items-center gap-3 flex-1">
							<div className="w-6 h-6 bg-custom-gray/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-light-green/20 group-hover:border-light-green/50 group-hover:bg-light-green/10 transition-all duration-300">
								<img src={link.icon} alt={link.platform} className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"/>
							</div>
							<span className="text-sm font-medium text-light-gray group-hover:text-light-green transition-colors duration-300">
								{link.platform}
							</span>
						</div>
						
						{/* External link icon */}
						<svg className="w-4 h-4 text-light-gray/60 group-hover:text-light-green group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</a>
				))
			}
		</div>
	)
}

function ContactMe() {
return (
	<div className="w-full h-full about-me flex md:grid md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr] justify-start items-start flex-col overflow-y-auto relative">
		{/* Background gradient effects */}
		<div className="absolute inset-0 bg-gradient-to-br from-light-green/5 via-transparent to-purple/5 pointer-events-none"></div>
		<div className="absolute top-1/4 right-1/4 w-32 h-32 bg-light-green/10 rounded-full blur-3xl pointer-events-none"></div>
		<div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple/10 rounded-full blur-2xl pointer-events-none"></div>
		
		<div className='flex w-full md:border-r-[1px] border-r-custom-gray bg-gradient-to-b from-dark-blue/20 to-transparent relative z-10'>
			<div className='w-full md:border-r-[1px] border-r-custom-gray'>
				<Category name="contacts" component={<ContactMeContacts/>}/>
				<Category name="find-me-also" component={<SocialMedia/>}/>
			</div>
		</div>
		<div className="w-full h-full scrollbar-none scrollbar-hide no-scrollbar border-l-[1px] border-custom-gray relative z-10">
			<Content/>
		</div>
	</div>
);
}


export default ContactMe;