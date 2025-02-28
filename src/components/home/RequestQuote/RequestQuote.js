import React, { useEffect, useState } from 'react';
import './RequestQuote.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import EmailJS

function RequestQuote() {
    const [budget, setBudget] = useState(5000); // Initial value
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        contactNumber: '',
        preferredTime: '09:00',
        projectDescription: '',
        services: [],
    });
    const [message, setMessage] = useState(''); // State for feedback message
    const [errors, setErrors] = useState({}); // State for error messages

    const handleSliderChange = (e) => {
        const value = e.target.value;
        setBudget(value);
        // Update the slider's background fill
        const percent = ((value - 0) / (10000 - 0)) * 100;
        e.target.style.setProperty('--value', `${percent}%`);
    };

    const handleServiceChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            const services = checked
                ? [...prevData.services, value]
                : prevData.services.filter((service) => service !== value);
            return { ...prevData, services };
        });
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate first name
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required.';
        }

        // Validate last name
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required.';
        }

        // Validate company name
        if (!formData.company.trim()) {
            newErrors.company = 'Company name is required.';
        }

        // Validate email
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
        }

        // Validate contact number (optional)
        if (formData.contactNumber && !/^\+?\d{1,4}?\s?\d{1,15}$/.test(formData.contactNumber)) {
            newErrors.contactNumber = 'Contact number is invalid.';
        }

        // Validate project description
        if (!formData.projectDescription.trim()) {
            newErrors.projectDescription = 'Project description is required.';
        }

        // Check if there are any selected services
        if (formData.services.length === 0) {
            newErrors.services = 'At least one service must be selected.';
        }
        // Validate preferred time
        if (!formData.preferredTime) {
            newErrors.preferredTime = "Preferred Callback Time is required.";
        }

        // Validate project description
        if (!formData.projectDescription) {
            newErrors.projectDescription = "Project Description is required.";
        }

        // Validate budget (example: ensure budget is not less than 1000)
        if (budget < 1000) {
            newErrors.budget = "Budget must be at least $1000.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Stop submission if validation fails
        }

        const emailData = {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            needs: formData.services.join(', '),
            message: formData.projectDescription,
            budget: budget,
            contactNumber: formData.contactNumber,
            preferredTime: formData.preferredTime,
        };

        console.log('Submitting email data:', emailData); // Debug log

        emailjs.send('service_72p82xa', 'template_0lhg1wg', emailData, 'V6_Y2Xol7nf8kG8Q1')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessage('Your request has been sent successfully!');
                setFormData({ firstName: '', lastName: '', company: '', email: '', contactNumber: '', preferredTime: '09:00', projectDescription: '', services: [] });
                setErrors({}); // Clear errors
                setTimeout(() => {
                    setMessage(""); // Clear message to remove alert div
                }, 3000);
            }, (err) => {
                console.error('FAILED...', err);
                setMessage('Failed to send your request. Please try again later.');
            });
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <React.Fragment>
            <div className="requestQuote">
                <div className="container" data-aos="fade-up" data-aos-duration="1000">
                    <div className="title">
                        <h2>Request a <span>Quote</span></h2>
                    </div>
                    <div className="innerBlock">
                        <div className="row">
                            <div className="col-lg-5">
                                <h5>Select a Service</h5>
                                <div className="selectService" data-aos="fade-up" data-aos-duration="1000">
                                    {['Branding', 'Design', 'Software Development', 'Digital Marketing', 'Artificial Intelligence', 'Immigration Consulting'].map((service, index) => (
                                        <div key={index} className="form-check checkBoxes">
                                            <input
                                                type="checkbox"
                                                name="service"
                                                value={service}
                                                id={`service-${index}`}
                                                className="form-check-input"
                                                onChange={handleServiceChange}
                                            />
                                            <label htmlFor={`service-${index}`} className="form-check-label">
                                                {service}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                {errors.services && <div className="error">{errors.services}</div>} {/* Display service error */}
                                <p className='or' data-aos="fade-up" data-aos-duration="1000">OR</p>
                                <p className='schedule' data-aos="fade-up" data-aos-duration="1000">
                                    <Link href="/">Let's Schedule a call with Us</Link>
                                </p>
                            </div>

                            <div className="col-lg-7 borderLeft">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="firstName">First Name</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} // Add error class
                                                    id="firstName"
                                                    placeholder="John"
                                                    value={formData.firstName}
                                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                />
                                                {errors.firstName && <div className="error">{errors.firstName}</div>} {/* Display first name error */}
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="lastName">Last Name</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} // Add error class
                                                    id="lastName"
                                                    placeholder="Doe"
                                                    value={formData.lastName}
                                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                />
                                                {errors.lastName && <div className="error">{errors.lastName}</div>} {/* Display last name error */}
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="company">Company <span style={{ color: '#d00014' }}>*</span></label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.company ? 'is-invalid' : ''}`} // Add error class
                                                    id="company"
                                                    placeholder="Software Company"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                />
                                                {errors.company && <div className="error">{errors.company}</div>} {/* Display company error */}
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="email">Email Address <span style={{ color: '#d00014' }}>*</span></label>
                                                <input
                                                    type="email"
                                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`} // Add error class
                                                    id="email"
                                                    placeholder="johndoe@gmail.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                                {errors.email && <div className="error">{errors.email}</div>} {/* Display email error */}
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="contactNumber">Contact Number (Optional)</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="contactNumber"
                                                    placeholder="+123456789"
                                                    value={formData.contactNumber}
                                                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                                                />
                                                {errors.contactNumber && <div className="error">{errors.contactNumber}</div>} {/* Display contact number error */}
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="preferredTime">Preferred Callback Time</label>
                                                <div className="preferred-time">
                                                    <input
                                                        type="time"
                                                        className={`form-control ${errors.preferredTime ? 'is-invalid' : ''}`} // Add error class
                                                        value={formData.preferredTime}
                                                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                                                    />
                                                    <div className="am-pm-buttons">
                                                        <button className="active" type="button">AM</button>
                                                        <button type="button">PM</button>
                                                    </div>
                                                    {errors.preferredTime && <div className="error">{errors.preferredTime}</div>} {/* Display preferred time error */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="budget">Your Budget</label>
                                                <div className="budget-slider">
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="10000"
                                                        value={budget}
                                                        onChange={handleSliderChange}
                                                        style={{
                                                            background: `linear-gradient(to right, #000 ${((budget - 1000) / (10000 - 1000)) * 100}%, #dca629 ${((budget - 1000) / (10000 - 1000)) * 100}%)`
                                                        }}
                                                    />
                                                    {errors.budget && <div className="error">{errors.budget}</div>} {/* Display budget error */}
                                                </div>
                                                <div className="budget-value">Budget: ${budget}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="projectDescription">Project Description <span style={{ color: '#d00014' }}>*</span></label>
                                                <textarea
                                                    className={`form-control ${errors.projectDescription ? 'is-invalid' : ''}`} // Add error class
                                                    id="projectDescription"
                                                    rows="4"
                                                    placeholder="Describe your project..."
                                                    value={formData.projectDescription}
                                                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                                                />
                                                {errors.projectDescription && <div className="error">{errors.projectDescription}</div>} {/* Display project description error */}
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-custom mt-3">Send Request</button>

                                    {message && (
                                        <div className="alert mb-0 mt-3" role="alert">
                                            {message}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RequestQuote;
