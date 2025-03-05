import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillCategories = [
  {
    title: 'STRATEGY',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M10 16.5l6-4.5-6-4.5z" />
      </svg>
    ),
    skills: [
      'Innovation',
      'Digital Transformation',
      'Business Process Reengineering',
      'Customer Experience Management',
      'Project Management'
    ]
  },
  {
    title: 'DESIGN',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
      </svg>
    ),
    skills: [
      'Design Sprint',
      'UI/UX Design',
      'Experience Design',
      'Creative Production',
      'Illustration and Motion'
    ]
  },
  {
    title: 'TECHNOLOGY',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm6 10c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm-3-3v-3h6v3H9zm6-4H9V8h6v1z" />
      </svg>
    ),
    skills: [
      'Web and Mobile Apps',
      'e-Commerce',
      'Custom Software Development',
      'Digital Marketing',
      'Artificial Intelligence'
    ]
  },
  {
    title: 'GROWTH',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.036-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.036-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
      </svg>
    ),
    skills: [
      'User Acquisition Strategy',
      'Analytics and Optimization',
      'Workflow Automation',
      'New Features Definition',
      'Tracking KPIs'
    ]
  }
];

function OurSkills() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center text-black mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2 text-neutral-400">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center before:content-['•'] before:text-yellow-500 before:mr-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurSkills;
