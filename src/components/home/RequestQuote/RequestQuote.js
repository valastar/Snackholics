import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    contactNumber: '',
    faxNumber: '',
    budget: '',
    services: '',
    projectDescription: ''
  });
  
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Project description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const emailData = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      company: formData.company,
      phone: formData.contactNumber,
      fax: formData.faxNumber,
      budget: formData.budget,
      services: formData.services,
      message: formData.projectDescription
    };

    emailjs.send('service_72p82xa', 'template_0lhg1wg', emailData, 'V6_Y2Xol7nf8kG8Q1')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMessage('Your message has been sent successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            contactNumber: '',
            faxNumber: '',
            budget: '',
            services: '',
            projectDescription: ''
          });
          setErrors({});
          setTimeout(() => {
            setMessage('');
          }, 3000);
        },
        (err) => {
          console.error('FAILED...', err);
          setMessage('Failed to send your message. Please try again later.');
        }
      );
  };

  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-12 lg:px-20">
      {/* Background texture effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black opacity-70 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="text-yellow-500 text-sm uppercase tracking-wider mb-4">
            CONTACT US
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            LET'S BUILD SOMETHING EXTRAORDINARY
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            TOGETHER
          </h3>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm uppercase tracking-wider text-white/80 mb-3">
                FIRST NAME
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="FIRST NAME"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-4 rounded-full bg-transparent border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500 ${
                  errors.firstName ? 'border-red-500' : ''
                }`}
              />
              {errors.firstName && (
                <p className="mt-2 text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm uppercase tracking-wider text-white/80 mb-3">
                LAST NAME
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="LAST NAME"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-4 rounded-full bg-transparent border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500 ${
                  errors.lastName ? 'border-red-500' : ''
                }`}
              />
              {errors.lastName && (
                <p className="mt-2 text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm uppercase tracking-wider text-white/80 mb-3">
                COMPANY
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="COMPANY"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-4 rounded-full bg-transparent border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-wider text-white/80 mb-3">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-4 rounded-full bg-transparent border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500 ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="mt-2 text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Contact Number */}
            <div>
              <label htmlFor="contactNumber" className="block text-sm uppercase tracking-wider text-white/80 mb-3">
                CONTACT NUMBER
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                placeholder="CONTACT NUMBER"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full p-4 rounded-full bg-transparent border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500"
              />
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm uppercase tracking-wider text-white/80 mb-3">
                YOUR BUDGET
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                placeholder="BUDGET"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-4 rounded-full bg-transparent border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500"
              />
            </div>

            {/* Services */}
            <div>
              <label htmlFor="services" className="block text-sm uppercase tracking-wider text-white/80 mb-3">
                SERVICES
              </label>
              <input
                type="text"
                id="services"
                name="services"
                placeholder="SERVICES"
                value={formData.services}
                onChange={handleChange}
                className="w-full p-4 rounded-full bg-transparent border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500"
              />
            </div>
          </div>

          {/* Project Description */}
          <div className="mt-6">
            <label htmlFor="projectDescription" className="block text-sm uppercase tracking-wider text-white/80 mb-3">
              PROJECT DESCRIPTION
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              placeholder="PROJECT DESCRIPTION"
              rows="6"
              value={formData.projectDescription}
              onChange={handleChange}
              className={`w-full p-4 rounded-3xl bg-transparent border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500 ${
                errors.projectDescription ? 'border-red-500' : ''
              }`}
            />
            {errors.projectDescription && (
              <p className="mt-2 text-red-500 text-sm">{errors.projectDescription}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="py-4 px-12 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition-colors duration-300 text-lg"
            >
              SEND REQUEST
            </button>
          </div>

          {/* Success/Error Message */}
          {message && (
            <div className={`mt-6 p-4 rounded-lg text-center ${
              message.includes('success') 
                ? 'bg-green-900/30 text-green-400' 
                : 'bg-red-900/30 text-red-400'
            }`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactUs;