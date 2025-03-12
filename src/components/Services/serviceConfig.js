const serviceConfig = {
    // Web Services
    "website-Design-Development": {
        title: 'Website Design & Development',
        titleSpan: 'Services',
        description: 'Custom website design and development services to help your business shine online.',
        bannerImage: '/images/services/webDesign.svg',
        category: 'web',
        categoryName: 'Web Services',
        name: 'Website Design & Development',
        showCTA: true,
        intro: {
            title: 'Professional Website',
            titleSpan: 'Design & Development',
            description: `Quick Growth Marketing is a Calgary website design company specializing in custom website design and development across Canada. Our ability to understand your business model, target market, and processes transforms websites from placeholders to dynamic marketing forces.`,
            paragraph2: `We create intuitive, beautifully functional, custom website designs that effectively communicate your marketing message. Our processes have been tried and tested over a span of 25+ years.`,
            image: '/images/services/designedAndDeveloped.svg'
        },
        features: {
            title: 'What Makes Our Website Design',
            titleSpan: 'Services Different',
            description: 'We focus on creating websites that not only look great but also deliver results.',
            list: [
                { title: 'Custom Design', description: 'Every website is uniquely designed to match your brand identity and business goals.', icon: '/images/services/feature1.svg' },
                { title: 'Mobile Responsive', description: 'Fully optimized for all devices.', icon: '/images/services/feature2.svg' },
                { title: 'SEO Optimized', description: 'Built with search engines in mind to improve visibility.', icon: '/images/services/feature3.svg' },
                { title: 'Fast Loading', description: 'Optimized for speed to enhance user experience and conversions.', icon: '/images/services/feature4.svg' },
                { title: 'User-Friendly CMS', description: 'Easily manage your content with an intuitive CMS.', icon: '/images/services/feature5.svg' },
                { title: 'Ongoing Support', description: 'We provide continued support and maintenance.', icon: '/images/services/feature6.svg' }
            ]
        },
        process: {
            title: 'Our Website Development',
            titleSpan: 'Process',
            steps: [
                { title: 'Discovery', description: 'Understanding your business goals, target audience, and requirements.' },
                { title: 'Design', description: 'Creating visually stunning and user-friendly layouts.' },
                { title: 'Development', description: 'Building a fully functional, high-performing website.' },
                { title: 'Testing', description: 'Ensuring seamless performance across devices and browsers.' },
                { title: 'Launch', description: 'Deploying your website with a smooth transition and minimal downtime.' },
                { title: 'Maintenance', description: 'Providing ongoing updates, security monitoring, and improvements.' }
            ]
        },
        showcase: {
            title: 'Websites We’ve Designed',
            titleSpan: 'and Developed',
            items: [
                { title: 'TechCorp', subtitle: 'Corporate Website', image: '/images/services/work1.svg', link: '/portfolio/techcorp' },
                { title: 'EcoFriendly', subtitle: 'E-commerce Platform', image: '/images/services/work2.svg', link: '/portfolio/ecofriendly' },
                { title: 'HealthPlus', subtitle: 'Healthcare Portal', image: '/images/services/work3.svg', link: '/portfolio/healthplus' }
            ]
        },
        testimonials: true,
        faqs: [
            { question: 'How long does it take to build a website?', answer: 'Timelines vary from 4-12 weeks depending on complexity.' },
            { question: 'Do you provide website hosting services?', answer: 'Yes, we offer secure hosting with 99.9% uptime.' },
            { question: 'Will my website be mobile-friendly?', answer: 'Yes, all our websites are fully responsive.' },
            { question: 'Can I update the website myself?', answer: 'Yes, we use user-friendly CMS platforms for easy management.' },
            { question: 'Do you offer maintenance services?', answer: 'Yes, we provide ongoing maintenance for optimal performance.' }
        ]
    },
    

// eCommerce Development Services
'ecommerce-development': {
    title: 'eCommerce Development',
    titleSpan: 'Responsive, Tailored, and Scalable eCommerce Websites',
    description: 'QuickGrowth builds high-performance eCommerce websites designed to drive sales, enhance user experience, and maximize ROI. Whether launching a new store or upgrading an existing one, we create scalable solutions to grow your business.',
    bannerImage: '/images/services/ecommerce-banner.svg',
    category: 'ecommerce-development',
    categoryName: 'eCommerce Solutions',
    name: 'eCommerce Development',
    showCTA: true,
    introTitle: 'Expand Your Retail Reach at Scale',
    introTitleSpan: 'High-Performance eCommerce Solutions',
    introDescription: 'From strategy to launch, we craft feature-rich online stores that convert visitors into loyal customers.',
    introImage: '/images/services/EcommerceBanner.svg',
    featuresTitle: 'Why Invest in a High-Performance eCommerce Website?',
    featuresTitleSpan: 'Key Benefits',
    featuresDescription: 'We design and develop eCommerce websites optimized for user experience, conversions, and scalability.',
    features: [
        { title: 'Easy to Manage', description: 'Effortless product management and user-friendly dashboards.', icon: '/images/services/product-management.svg' },
        { title: 'High-Performance & Speed Optimized', description: 'Fast load times and mobile-optimized experiences.', icon: '/images/services/perform-1.svg' },
        { title: 'Fully Customizable Design', description: 'Tailored storefronts that align with your brand and goals.', icon: '/images/services/custom-design.svg' },
        { title: 'Seamless Shopping Experience', description: 'Cross-device compatibility for better customer engagement.', icon: '/images/services/responsive-design.svg' },
        { title: 'Scalable & Secure', description: 'Enterprise-level security and scalability for business growth.', icon: '/images/services/security.svg' }
    ],
    servicesTitle: 'Our eCommerce Development Process',
    servicesDescription: 'We follow a structured approach to building high-converting online stores.',
    services: [
        { title: 'Strategy & Planning', description: 'Understanding business goals and customer journey.', icon: '/images/services/planning.svg' },
        { title: 'Design & UX Optimization', description: 'Creating intuitive and visually appealing storefronts.', icon: '/images/services/design.svg' },
        { title: 'Custom Development', description: 'Building scalable and feature-rich online stores.', icon: '/images/services/development.svg' },
        { title: 'Integration & Testing', description: 'Payment gateways, security, and performance testing.', icon: '/images/services/integration.svg' },
        { title: 'Launch & Ongoing Support', description: 'Continuous updates, maintenance, and growth strategies.', icon: '/images/services/support.svg' }
    ],
    caseStudiesTitle: 'Success Stories: Real eCommerce Growth with QuickGrowth',
    caseStudies: [
        {
            title: 'Scaling an E-Commerce Fashion Store',
            client: 'Fashion Retailer',
            results: [
                '25% increase in online sales after migrating to Shopify.',
                'Enhanced mobile experience, reducing bounce rates by 40%.',
                'AI-powered product recommendations boosted revenue per customer.'
            ],
            cta: 'Boost Sales with a Custom eCommerce Store!'
        },
        {
            title: 'Subscription-Based eCommerce Platform',
            client: 'Beauty Subscription Box',
            results: [
                '300% increase in subscription sign-ups.',
                'Automated recurring payments & CRM integration.',
                'Streamlined fulfillment & order tracking.'
            ],
            cta: 'Launch a Profitable Subscription Business with Our Help!'
        },
        {
            title: 'B2B Wholesale Marketplace Development',
            client: 'Industrial Equipment Distributor',
            results: [
                'Custom B2B ordering system with tiered pricing.',
                'Bulk order management & automated invoicing.',
                'Reduced manual processing time by 50%, increasing efficiency.'
            ],
            cta: 'Grow Your B2B Business with a Scalable eCommerce Solution!'
        }
    ],
    technologiesTitle: 'eCommerce Platforms We Work With',
    technologies: {
        platforms: ['Magento', 'Shopify', 'WooCommerce', 'nopCommerce'],
        integrations: ['Payment Gateways', 'CRM & ERP Systems', 'Marketing Automation'],
        performanceTools: ['Google Analytics', 'SEMrush', 'PageSpeed Insights']
    },
    ctaTitle: 'Get Started with QuickGrowth’s eCommerce Web Development',
    ctaDescription: 'Whether you need a new store, optimization, or migration, we provide solutions tailored to your business needs.',
    ctaButton: 'Contact Us Today!'
},


    
    // Website Maintenance
    "website-maintenance": {
        title: 'Website Maintenance',
        titleSpan: 'Services',
        description: 'Keep your website secure, up-to-date, and performing at its best with our professional maintenance services.',
        bannerImage: '/images/services/maintainenceBanner.svg',
        category: 'web',
        categoryName: 'Web Services',
        name: 'Website Maintenance',
        showCTA: true,
        introTitle: 'Professional Website',
        introTitleSpan: 'Maintenance Services',
        introDescription: 'Regular website maintenance is crucial for ensuring your online presence remains secure, functional, and effective. At Quick Growth Marketing, we provide comprehensive website maintenance services to keep your site running smoothly.',
        introParagraph2: 'Our team of experts handles everything from security updates and performance optimization to content updates and technical support, allowing you to focus on your core business activities without worrying about your website.',
        introImage: '/images/services/maintainenceBanner.svg',
        featuresTitle: 'Benefits of Our Website',
        featuresTitleSpan: 'Maintenance Services',
        featuresDescription: 'Our maintenance services are designed to provide peace of mind and ensure your website continues to deliver results for your business.',
        features: [
            { title: 'Enhanced Security', description: 'Regular security updates and monitoring to protect your website from threats and vulnerabilities.', icon: '/images/services/security.svg' },
            { title: 'Improved Performance', description: 'Optimization techniques to ensure your website loads quickly and performs efficiently.', icon: '/images/services/performance.svg' },
            { title: 'Regular Backups', description: 'Scheduled backups to ensure your website data is safe and can be restored if needed.', icon: '/images/services/backup.svg' },
            { title: 'Technical Support', description: 'Expert assistance available when you encounter issues or need help with your website.', icon: '/images/services/support.svg' },
            { title: 'Content Updates', description: 'Professional help with updating and managing your website content to keep it fresh and relevant.', icon: '/images/services/updates.svg' },
            { title: 'SEO Monitoring', description: 'Ongoing monitoring and adjustments to maintain and improve your search engine rankings.', icon: '/images/services/seo.svg' }
        ],
        processTitle: 'Our Website Maintenance',
        processTitleSpan: 'Process',
        processes: [
            { title: 'Initial Assessment', description: 'We conduct a thorough assessment of your website to identify areas that need attention and create a customized maintenance plan.' },
            { title: 'Regular Monitoring', description: 'We continuously monitor your website’s performance, security, and functionality to detect and address issues promptly.' },
            { title: 'Scheduled Maintenance', description: 'We perform routine maintenance tasks according to a predetermined schedule to keep your website in optimal condition.' },
            { title: 'Security Updates', description: 'We implement the latest security patches and updates to protect your website from potential threats.' },
            { title: 'Performance Optimization', description: 'We regularly optimize your website to ensure fast loading times and smooth functionality across all devices.' },
            { title: 'Reporting & Recommendations', description: 'We provide detailed reports on maintenance activities and offer recommendations for further improvements.' }
        ],
        showcaseTitle: 'Websites We’ve',
        showcaseTitleSpan: 'Maintained',
        showcaseItems: [
            { title: 'CorporateHub', subtitle: 'Business Portal', image: '/images/portfolio/project2.svg', link: '/portfolio/corporatehub' },
            { title: 'RetailPlus', subtitle: 'E-commerce Platform', image: '/images/portfolio/project3.svg', link: '/portfolio/retailplus' },
            { title: 'ServicePro', subtitle: 'Service Provider Website', image: '/images/portfolio/project4.svg', link: '/portfolio/servicepro' }
        ],
        showTestimonials: true,
        faqs: [
            { question: 'How often should my website be maintained?', answer: 'Websites should be maintained regularly, with basic maintenance tasks performed monthly and more comprehensive checks quarterly. However, the exact frequency depends on your website’s complexity, traffic volume, and update frequency.' },
            { question: 'What’s included in your website maintenance services?', answer: 'Our maintenance services include security updates, performance optimization, regular backups, content updates, technical support, and monitoring of your website’s health and performance. We offer different maintenance packages to suit various needs and budgets.' },
            { question: 'Can you help with emergency website issues?', answer: 'Yes, we provide emergency support for critical website issues. Our team is available to quickly address and resolve problems that affect your website’s functionality or security.' },
            { question: 'Do you maintain websites that you didn’t build?', answer: 'Absolutely! We can take over the maintenance of any website, regardless of who built it. We’ll first conduct a thorough assessment to understand its structure and identify any areas that need immediate attention.' },
            { question: 'How do you handle website backups?', answer: 'We implement automated backup systems that regularly save copies of your website files and database. These backups are stored securely and can be used to restore your website in case of data loss or other issues.' }
        ]
    },
    

    // Web Application Development
'web-applications': {
    title: 'Web Application Development',
    titleSpan: 'Services',
    description: 'Custom web applications tailored to meet your business needs, driving growth and innovation.',
    bannerImage: '/images/services/webAppBanner.svg',
    category: 'web',
    categoryName: 'Web Services',
    name: 'Web Application Development',
    showCTA: true,
    introTitle: 'Dynamic Web',
    introTitleSpan: 'Application Development',
    introDescription: 'In today’s fast-paced digital world, your business needs a web app that is secure, scalable, and built to perform. At QuickGrowth, we create custom web apps that deliver exceptional user experiences and drive business success.',
    introParagraph2: 'Our expert team uses cutting-edge technologies to develop web applications tailored to your specific needs, whether you’re looking to create an e-commerce platform, CRM, ERP, or a data-driven web portal.',
    introImage: '/images/services/WebAppDevelopmentBannerPic.svg',
    featuresTitle: 'Features of Our Web',
    featuresTitleSpan: 'Application Development',
    featuresDescription: 'Our web application development services provide you with powerful, scalable, and efficient solutions to help your business thrive.',
    features: [
        {
            title: 'Custom Solutions',
            description: 'Web apps designed to meet your unique business needs, built with flexibility and scalability in mind.',
            icon: '/images/services/custom.svg'
        },
        {
            title: 'User-Centric Design',
            description: 'Intuitive, attractive interfaces to ensure an engaging user experience across all devices.',
            icon: '/images/services/design.svg'
        },
        {
            title: 'High-Performance Apps',
            description: 'Optimized web apps for fast load times, smooth interactions, and high availability.',
            icon: '/images/services/performance.svg'
        },
        {
            title: 'Security & Compliance',
            description: 'Robust security measures, including encryption and compliance with GDPR, HIPAA, and other regulations.',
            icon: '/images/services/security.svg'
        },
        {
            title: 'Scalability',
            description: 'Solutions designed to grow with your business, handling increasing traffic and data seamlessly.',
            icon: '/images/services/scalability.svg'
        },
        {
            title: 'Cloud Integration',
            description: 'Integration with cloud services like AWS, Google Cloud, and Azure for better performance and scalability.',
            icon: '/images/services/cloud.svg'
        }
    ],
    processTitle: 'Our Web Application',
    processTitleSpan: 'Development Process',
    processes: [
        {
            title: 'Discovery & Consultation',
            description: 'We begin by understanding your business, target audience, and objectives to develop a clear roadmap for your project.'
        },
        {
            title: 'Design & Prototyping',
            description: 'Creating user-friendly, visually engaging designs that align with your brand and user needs.'
        },
        {
            title: 'Development & Coding',
            description: 'Building robust web applications with the latest technologies, ensuring high performance and functionality.'
        },
        {
            title: 'Testing & Optimization',
            description: 'Rigorous testing to ensure your app works flawlessly across all devices and browsers, optimizing for speed and usability.'
        },
        {
            title: 'Launch & Support',
            description: 'Deploying your web application, followed by continuous support and maintenance to ensure long-term success.'
        }
    ],
    showcaseTitle: 'Web Apps We\'ve',
    showcaseTitleSpan: 'Built',
    showcaseItems: [
        {
            title: 'HealthTrack',
            subtitle: 'Healthcare Portal',
            image: '/images/portfolio/project6.svg',
            link: '/portfolio/healthtrack'
        },
        {
            title: 'RetailMaster',
            subtitle: 'E-commerce Platform',
            image: '/images/portfolio/project4.svg',
            link: '/portfolio/retailmaster'
        },
        {
            title: 'ProjectHub',
            subtitle: 'Project Management Tool',
            image: '/images/portfolio/project5.svg',
            link: '/portfolio/projecthub'
        }
    ],
    showTestimonials: true,
    faqs: [
        {
            question: 'What kind of web applications do you build?',
            answer: 'We build a wide range of web applications, from eCommerce platforms to CRMs, ERPs, and custom business portals, all tailored to your specific needs.'
        },
        {
            question: 'How long does it take to develop a web app?',
            answer: 'The development timeline varies depending on the complexity of the project, but we work closely with you to ensure timely delivery.'
        },
        {
            question: 'Can you integrate my existing systems with the new web app?',
            answer: 'Yes, we offer seamless integration with your existing systems to ensure smooth data flow and better performance.'
        },
        {
            question: 'Is ongoing support available after launch?',
            answer: 'Absolutely! We provide continuous support and maintenance to ensure your web application stays secure, up-to-date, and running smoothly.'
        }
    ]
},

// Website Design & Development Services
'website-design-development': {
    title: 'Website Design & Development',
    titleSpan: 'Custom, High-Performance Websites Designed for Growth',
    description: 'At QuickGrowth, we don’t just design websites—we build powerful digital experiences that drive engagement, increase conversions, and strengthen your brand. Whether you need a custom website, eCommerce store, or business platform, our expert team delivers stunning, high-performing websites tailored to your business needs.',
    bannerImage: '/images/services/web-design-banner.svg',
    category: 'web-design-development',
    categoryName: 'Web Development',
    name: 'Website Design & Development',
    showCTA: true,
    introTitle: 'Take Your Online Presence to the Next Level',
    introTitleSpan: 'Professional Web Design & Development',
    introDescription: 'QuickGrowth specializes in crafting user-friendly, SEO-optimized, and visually stunning websites that enhance your brand and drive conversions.',
    introImage: '/images/services/webdesign.svg',
    featuresTitle: 'Why Choose QuickGrowth for Web Design & Development?',
    featuresTitleSpan: 'What Sets Us Apart?',
    featuresDescription: 'Our expert team ensures your website is fast, secure, responsive, and built for success.',
    features: [
        { title: 'Custom Website Solutions', description: 'No templates—tailored designs that match your brand identity.', icon: '/images/services/Benefit-4.svg' },
        { title: 'SEO & Performance Optimized', description: 'Higher rankings, faster load speeds, and increased conversions.', icon: '/images/services/seo-1.svg' },
        { title: 'Mobile-Friendly & Responsive', description: 'Seamless user experience across all devices.', icon: '/images/services/Benefit-3.svg' },
        { title: 'User-Centric Design', description: 'Engaging and intuitive designs that boost user interaction.', icon: '/images/services/Benefit-6.svg' },
        { title: 'Scalable & Future-Proof', description: 'Built to grow with your business using the latest technologies.', icon: '/images/services/Benefit-5.svg' }
    ],
    servicesTitle: 'Our Website Design & Development Process',
    servicesDescription: 'We follow a structured approach to ensure your website is functional, attractive, and optimized for success.',
    services: [
        { title: 'Discovery & Planning', description: 'Understanding your business goals, audience, and competition.', icon: '/images/services/planning.svg' },
        { title: 'Design & UX/UI', description: 'Creating visually appealing and user-friendly layouts.', icon: '/images/services/design.svg' },
        { title: 'Development & Coding', description: 'Building fast, secure, and scalable websites with modern tech.', icon: '/images/services/development.svg' },
        { title: 'Content Optimization', description: 'Crafting SEO-optimized, engaging content for higher conversions.', icon: '/images/services/content-optimization.svg' },
        { title: 'Testing & Quality Assurance', description: 'Ensuring flawless performance across all devices and browsers.', icon: '/images/services/quality-assurance.svg' },
        { title: 'Launch & Ongoing Support', description: 'Smooth deployment with continuous updates and maintenance.', icon: '/images/services/support.svg' }
    ],
    caseStudiesTitle: 'Success Stories: Real Results from Our Web Solutions',
    caseStudies: [
        {
            title: 'E-Commerce Website Redesign for a Retail Brand',
            client: 'Fashion Retailer',
            results: [
                '35% increase in online sales.',
                '50% boost in organic traffic.',
                'AI-driven product recommendations for higher conversions.'
            ],
            cta: 'Boost Your Online Sales with a Custom E-Commerce Website!'
        },
        {
            title: 'Business Website for a Corporate Consultancy',
            client: 'Consulting Firm',
            results: [
                '40% increase in client inquiries.',
                '60% faster website load times.',
                'Higher search rankings through SEO optimization.'
            ],
            cta: 'Generate More Leads with a High-Performing Business Website!'
        },
        {
            title: 'Portfolio Website for a Creative Agency',
            client: 'Multimedia Studio',
            results: [
                '45% improvement in project inquiries.',
                'Enhanced client engagement with interactive features.',
                'Optimized for speed and cross-device compatibility.'
            ],
            cta: 'Make a Bold Impression with a Custom Portfolio Website!'
        }
    ],
    technologiesTitle: 'Technologies & Platforms We Use',
    technologies: {
        frontEnd: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vue.js', 'Angular'],
        backEnd: ['Node.js', 'Python', 'PHP', 'Django', 'Laravel'],
        cmsEcommerce: ['WordPress', 'Shopify', 'WooCommerce', 'Magento'],
        seoPerformance: ['Google Analytics', 'Ahrefs', 'SEMrush', 'Yoast SEO']
    },
    ctaTitle: 'Get Started with QuickGrowth’s Website Development Services',
    ctaDescription: 'Whether you need a new website, a redesign, or a high-converting eCommerce store, we bring your vision to life.',
    ctaButton: 'Contact Us Today!'
},


// AI PoC & MVP Development
'ai-poc-ai-mvp': {
    title: 'AI PoC & MVP Development',
    titleSpan: 'AI Proof of Concept & MVP Solutions',
    description: 'QuickGrowth turns your visionary AI concepts into proven solutions. We specialize in AI Proof of Concept (PoC) and Minimum Viable Product (MVP) development to ensure technical feasibility, business impact, and scalability for your AI initiatives.',
    bannerImage: '/images/services/ai-poc-mvp-banner.svg',
    category: 'ai',
    categoryName: 'AI PoC & MVP Development',
    name: 'AI PoC & MVP',
    showCTA: true,
    introTitle: 'Transform AI Concepts into Real-World Solutions',
    introTitleSpan: 'Validate, Build & Scale with Confidence',
    introDescription: 'At QuickGrowth, we help businesses validate AI solutions through Proof of Concept (PoC) and MVP development. Our approach minimizes risks and ensures your AI solution is both feasible and impactful before full-scale deployment.',
    introParagraph2: 'We guide you from ideation to prototype, focusing on maximizing business results with robust AI models and innovative designs.',
    introImage: '/images/services/aipocmvpbanner.svg',
    featuresTitle: 'Why Choose QuickGrowth for AI PoC & MVP Development?',
    featuresTitleSpan: 'Here’s Why',
    featuresDescription: 'QuickGrowth specializes in delivering high-quality AI models and solutions that empower businesses to realize their AI potential. Our PoC & MVP offerings include technical validation, prototype development, and business impact assessments.',
    features: [
        {
            title: 'Feasibility Testing & Validation',
            description: 'We validate the technical feasibility and business impact of AI ideas, ensuring that your concept is viable and aligns with market demands.',
            icon: '/images/services/ai-feasibility.svg'
        },
        {
            title: 'Tailored AI Solutions',
            description: 'We provide custom AI models and algorithms designed to address your unique business challenges and objectives.',
            icon: '/images/services/ai-tailored.svg'
        },
        {
            title: 'Scalable AI MVPs',
            description: 'Our AI MVPs are built to scale, ensuring seamless transitions from prototype to fully operational AI solutions.',
            icon: '/images/services/ai-scalable.svg'
        },
        {
            title: 'Business-Oriented Results',
            description: 'We focus on AI’s direct impact on business operations, ensuring that your AI solution delivers measurable outcomes.',
            icon: '/images/services/ai-business-impact.svg'
        },
        {
            title: 'Continuous Support & Optimization',
            description: 'From initial concept to post-launch, we offer continuous support to refine and optimize your AI solution.',
            icon: '/images/services/ai-support.svg'
        }
    ],
    servicesTitle: 'Our AI PoC & MVP Development Services',
    servicesTitleSpan: 'We Offer',
    servicesDescription: 'QuickGrowth offers end-to-end AI PoC & MVP development services, including AI research, feasibility testing, prototype building, and integration support to help you scale your AI-driven innovations.',
    services: [
        {
            title: 'AI PoC Development',
            description: 'Validate your AI concepts with a custom-built Proof of Concept that demonstrates technical feasibility and business value.',
            icon: '/images/services/ai-poc.svg'
        },
        {
            title: 'AI MVP Development',
            description: 'Build a Minimum Viable Product to test your AI solution in the market, gather user feedback, and refine your model.',
            icon: '/images/services/ai-mvp.svg'
        },
        {
            title: 'AI Model & Algorithm Design',
            description: 'Develop custom AI models and algorithms tailored to your business challenges, leveraging cutting-edge technologies.',
            icon: '/images/services/ai-model.svg'
        },
        {
            title: 'AI Integration & Deployment',
            description: 'Seamlessly integrate AI solutions into your existing infrastructure, ensuring smooth operation and scalability.',
            icon: '/images/services/ai-integration.svg'
        },
        {
            title: 'AI Testing & Optimization',
            description: 'Test AI solutions for accuracy, scalability, and performance, ensuring high-quality results and robust performance.',
            icon: '/images/services/ai-testing.svg'
        }
    ],
    industriesTitle: 'Industries We Serve with AI PoC & MVP Development',
    industriesDescription: 'Our AI PoC & MVP solutions cater to a variety of industries, helping businesses harness the power of AI to innovate and drive growth.',
    industries: [
        {
            title: 'Healthcare',
            description: 'AI-powered diagnostics, medical imaging, and patient data analysis to improve healthcare outcomes.',
            icon: '/images/services/ai-healthcare.svg'
        },
        {
            title: 'Finance',
            description: 'Fraud detection, risk management, and predictive analytics to optimize financial decision-making.',
            icon: '/images/services/ai-finance.svg'
        },
        {
            title: 'Retail & E-Commerce',
            description: 'AI-driven recommendations, personalized shopping experiences, and inventory management solutions.',
            icon: '/images/services/ai-retail.svg'
        },
        {
            title: 'Manufacturing',
            description: 'Predictive maintenance, supply chain optimization, and automated production lines powered by AI.',
            icon: '/images/services/ai-manufacturing.svg'
        },
        {
            title: 'Education',
            description: 'AI-enhanced learning tools, personalized education experiences, and automated grading systems.',
            icon: '/images/services/ai-education.svg'
        },
        {
            title: 'Automotive',
            description: 'AI-powered autonomous driving, predictive maintenance, and traffic management solutions.',
            icon: '/images/services/ai-automotive.svg'
        }
    ],
    coreBenefitsTitle: 'Core Benefits of AI PoC & MVP Development',
    coreBenefitsDescription: 'Our AI PoC & MVP services offer numerous benefits, helping you validate, optimize, and scale your AI solutions effectively.',
    coreBenefits: [
        'Risk Mitigation – Test feasibility before full-scale investment.',
        'Faster Time-to-Market – Quickly build and validate AI models.',
        'Cost Efficiency – Reduce development costs by validating AI concepts early.',
        'Scalability – Develop AI solutions that grow with your business.',
        'Business-Centric AI – Ensure AI solutions deliver measurable business results.',
        'Real-Time Feedback – Gather valuable insights for optimization and refinement.'
    ],
    processTitle: 'AI PoC & MVP Development Process',
    processDescription: 'Our proven development process ensures that your AI solution is built with precision, scalability, and business impact in mind.',
    process: [
        {
            title: 'Discovery & Research',
            description: 'We work with you to understand your business goals, AI opportunities, and market requirements.'
        },
        {
            title: 'Feasibility Testing & PoC Creation',
            description: 'We validate the feasibility of your AI concept with a Proof of Concept, demonstrating technical and business viability.'
        },
        {
            title: 'Prototype Development & MVP Creation',
            description: 'We build a Minimum Viable Product to test your AI solution in real-world scenarios, gathering user feedback for further refinement.'
        },
        {
            title: 'AI Integration & Deployment',
            description: 'We ensure seamless integration of your AI solution into your infrastructure and deploy it for production use.'
        },
        {
            title: 'Optimization & Scaling',
            description: 'We continuously optimize and scale your AI solution based on real-world data, ensuring it remains effective as your business grows.'
        }
    ],
    technologyStackTitle: 'AI Technologies We Use',
    technologyStackDescription: 'We use a wide range of cutting-edge AI technologies to deliver high-performance solutions that meet your business needs.',
    technologyStack: [
        { category: 'AI Frameworks', items: ['TensorFlow', 'PyTorch', 'Keras', 'OpenAI'] },
        { category: 'Data Science & Analytics', items: ['Python', 'R', 'SQL', 'Jupyter'] },
        { category: 'Cloud Platforms', items: ['AWS', 'Google Cloud', 'Azure'] },
        { category: 'Machine Learning', items: ['Scikit-learn', 'XGBoost', 'LightGBM'] },
        { category: 'Data Engineering', items: ['Apache Spark', 'Kafka', 'Hadoop'] }
    ],
    caseStudiesTitle: 'Recent AI PoC & MVP Projects',
    caseStudiesDescription: 'We’ve helped clients across industries develop AI PoCs & MVPs that demonstrate business value and scalability.',
    caseStudies: [
        {
            title: 'AI Fraud Detection for Banking',
            client: 'A leading bank',
            results: [
                'Developed AI-powered fraud detection system that flagged 98% of fraudulent transactions.',
                'Enhanced security and reduced financial losses for the client.'
            ],
            technologies: ['TensorFlow', 'Python', 'AWS'],
            cta: 'Implement AI Fraud Detection in Your Business Today!'
        },
        {
            title: 'AI-Powered Customer Support Chatbot',
            client: 'An eCommerce giant',
            results: [
                'Built an AI chatbot that automated 75% of customer inquiries.',
                'Improved customer satisfaction and reduced support costs.'
            ],
            technologies: ['OpenAI', 'Node.js', 'AWS'],
            cta: 'Enhance Customer Engagement with AI Chatbots!'
        },
        {
            title: 'Predictive Maintenance for Manufacturing',
            client: 'A global manufacturer',
            results: [
                'Developed AI solution to predict equipment failures before they occurred.',
                'Reduced downtime by 40%, improving operational efficiency.'
            ],
            technologies: ['PyTorch', 'AWS', 'Python'],
            cta: 'Optimize Maintenance with AI Predictive Analytics!'
        }
    ],
    faqs: [
        // Add relevant FAQs here
    ]
},

// SEO Services
'seo': {
    title: 'SEO Services',
    titleSpan: 'Boost Your Online Visibility & Drive Organic Traffic',
    description: 'In today’s competitive digital landscape, appearing at the top of search results is essential for business success. At QuickGrowth, we specialize in strategic SEO solutions that help businesses increase organic traffic, improve search rankings, and generate high-quality leads in the Canadian market.',
    bannerImage: '/images/services/seo-banner.svg',
    category: 'seo',
    categoryName: 'SEO Services',
    name: 'SEO',
    showCTA: true,
    introTitle: 'Boost Your Search Rankings & Attract More Traffic',
    introTitleSpan: 'SEO Solutions for Better Visibility & Growth',
    introDescription: 'QuickGrowth’s SEO services help businesses get noticed on search engines like Google and Bing. We focus on optimizing websites to drive organic traffic, increase conversions, and enhance brand visibility in competitive markets.',
    introParagraph2: 'Our expert team uses data-driven strategies to improve your search rankings and generate measurable growth.',
    introImage: '/images/services/seo-banner.svg',
    featuresTitle: 'Why Choose QuickGrowth for SEO?',
    featuresTitleSpan: 'Here’s Why',
    featuresDescription: 'QuickGrowth offers comprehensive SEO services to ensure your business stands out in the search results. We use proven strategies that maximize your ROI and deliver consistent results.',
    features: [
        {
            title: 'Higher Search Rankings',
            description: 'Get noticed on Google, Bing & other search engines with optimized on-page and off-page strategies.',
            icon: '/images/services/seo-search-rankings.svg'
        },
        {
            title: 'Increased Website Traffic',
            description: 'Attract qualified organic visitors who are actively searching for your products or services.',
            icon: '/images/services/seo-traffic.svg'
        },
        {
            title: 'More Conversions',
            description: 'Optimize landing pages for higher ROI and improved user experience.',
            icon: '/images/services/seo-conversions.svg'
        },
        {
            title: 'Better Brand Visibility',
            description: 'Dominate local and national search results to improve brand recognition.',
            icon: '/images/services/seo-brand-visibility.svg'
        },
        {
            title: 'Measurable Growth',
            description: 'Track SEO performance with data-driven insights and detailed reports.',
            icon: '/images/services/seo-measurable-growth.svg'
        }
    ],
    servicesTitle: 'Our SEO Services',
    servicesTitleSpan: 'We Offer',
    servicesDescription: 'QuickGrowth provides a wide range of SEO services to help you rank higher, drive traffic, and convert visitors into customers.',
    services: [
        {
            title: 'On-Page & Technical SEO',
            description: 'Optimize meta tags, headers, and structured data to improve site speed, mobile-friendliness, and fix crawlability issues.',
            icon: '/images/services/seo-on-page.svg'
        },
        {
            title: 'Keyword Research & Competitive Analysis',
            description: 'Identify high-performing keywords and analyze competitor strategies to develop a targeted optimization plan.',
            icon: '/images/services/seo-keyword-research.svg'
        },
        {
            title: 'Local SEO & Google My Business Optimization',
            description: 'Optimize your Google My Business listing and local citations for better visibility in geo-targeted searches.',
            icon: '/images/services/seo-local-seo.svg'
        },
        {
            title: 'Content Marketing & SEO Copywriting',
            description: 'Create SEO-optimized blogs, articles, and landing pages to boost engagement and social shares.',
            icon: '/images/services/seo-content-marketing.svg'
        },
        {
            title: 'Link Building & Off-Page SEO',
            description: 'Earn high-quality backlinks, improve domain authority, and enhance search rankings.',
            icon: '/images/services/seo-link-building.svg'
        },
        {
            title: 'Conversion Rate Optimization (CRO)',
            description: 'A/B testing, user behavior analysis, and landing page optimization to increase conversions.',
            icon: '/images/services/seo-cro.svg'
        }
    ],
    benefitsTitle: 'Key Benefits of SEO for Your Business',
    benefitsDescription: 'SEO offers numerous benefits for businesses looking to grow their online presence and increase revenue.',
    benefits: [
        'Better Brand Recognition – Rank higher in search results & gain audience trust.',
        'Increased Conversion Rates – Drive consistent organic traffic and maximize ROI.',
        'Specific Targeting – Reach the right audience based on search intent.',
        'Full Campaign Control – Adjust strategies based on data & trends.',
        'Measurable Growth – Track rankings, traffic & conversions with detailed reports.'
    ],
    toolsTitle: 'SEO Platforms & Tools We Use',
    toolsDescription: 'We use industry-leading SEO tools to deliver measurable results for your business.',
    tools: [
        { category: 'Google Tools', items: ['Google Search Console', 'Google Analytics', 'Google My Business'] },
        { category: 'SEO Research & Optimization', items: ['SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog', 'Yoast SEO'] },
        { category: 'Content Optimization & Link Building', items: ['Surfer SEO', 'BuzzSumo', 'HARO', 'Majestic SEO'] }
    ],
    whyQuickGrowthTitle: 'Why Choose QuickGrowth for SEO?',
    whyQuickGrowthDescription: 'At QuickGrowth, we provide comprehensive SEO services with a focus on data-driven strategies, measurable results, and long-term growth.',
    whyQuickGrowth: [
        'Data-Driven SEO Strategy – We use real-time analytics & insights to improve rankings & ROI.',
        'Full-Service SEO Solutions – We handle on-page SEO, link building, content marketing, and more.',
        'Custom SEO Plans for Every Business – Tailored strategies based on your industry & competition.',
        'Transparent Reporting & Regular Updates – Keep track of SEO performance with detailed reports.'
    ],
    caseStudiesTitle: 'Recent SEO Success Stories',
    caseStudiesDescription: 'Here are some examples of our successful SEO campaigns that have helped businesses grow.',
    caseStudies: [
        {
            title: 'Local Business SEO for a Real Estate Agency',
            client: 'Real Estate Agency',
            results: [
                'Achieved #1 Google ranking for high-value real estate keywords.',
                'Increased organic traffic by 150%.',
                'Boosted lead generation by 40%.'
            ],
            technologies: ['Google Search Console', 'SEMrush', 'Moz'],
            cta: 'Get More Local Leads with Expert SEO!'
        },
        {
            title: 'E-Commerce SEO for a Fashion Brand',
            client: 'Fashion Brand',
            results: [
                'Optimized website for a 60% increase in organic sales.',
                'Improved product page rankings for competitive keywords.',
                'Enhanced mobile user experience.'
            ],
            technologies: ['Ahrefs', 'Google Analytics', 'Yoast SEO'],
            cta: 'Maximize Your Online Store’s Visibility & Sales!'
        },
        {
            title: 'National SEO Campaign for a SaaS Company',
            client: 'SaaS Company',
            results: [
                'Ranked on Page 1 for 50+ high-volume keywords.',
                'Increased organic traffic by 200% in 6 months.',
                'Improved conversion rate by 30%.'
            ],
            technologies: ['Google Search Console', 'SEMrush', 'Yoast SEO'],
            cta: 'Scale Your Business with Long-Term SEO Growth!'
        }
    ]
},

// Social Media Marketing (SMM)
'smm': {
    title: 'Social Media Marketing',
    titleSpan: 'Expand Your Reach, Engage Your Audience & Grow Your Brand',
    description: 'Social media is more than just a platform for connection—it’s a powerful marketing tool that can increase brand awareness, drive traffic, and generate conversions. At QuickGrowth, we craft data-driven, engaging, and conversion-focused social media strategies to help businesses stand out in the digital landscape.',
    bannerImage: '/images/services/smm-banner.svg',
    category: 'smm',
    categoryName: 'Social Media Marketing',
    name: 'SMM',
    showCTA: true,
    introTitle: 'Elevate Your Social Media Presence',
    introTitleSpan: 'Social Media Strategies for Real Growth',
    introDescription: 'QuickGrowth’s Social Media Marketing services are designed to increase your brand’s visibility, engagement, and conversions. We create data-driven strategies to help you reach your target audience and grow your online presence.',
    introParagraph2: 'Our team leverages social media platforms to craft custom strategies, generate leads, and drive measurable results for your business.',
    introImage: '/images/services/smm-banner.svg',
    featuresTitle: 'Why Social Media Marketing Matters',
    featuresTitleSpan: 'Here’s Why',
    featuresDescription: 'Social media marketing is essential to driving organic growth, boosting brand recognition, and engaging your audience. Here’s why it’s important for your business.',
    features: [
        {
            title: 'Better Brand Recognition',
            description: 'Increase brand awareness and credibility through strategic social media campaigns.',
            icon: '/images/services/smm-brand-recognition.svg'
        },
        {
            title: 'Higher Search Rankings',
            description: 'Social signals drive organic traffic, improving search rankings and brand visibility.',
            icon: '/images/services/smm-search-rankings.svg'
        },
        {
            title: 'Precise Audience Targeting',
            description: 'Reach the right customers with data-driven strategies that maximize engagement.',
            icon: '/images/services/smm-audience-targeting.svg'
        },
        {
            title: 'More Engagement & Conversions',
            description: 'Turn followers into loyal customers with strategic social media campaigns.',
            icon: '/images/services/smm-engagement-conversions.svg'
        },
        {
            title: 'Affordable & Measurable Growth',
            description: 'Track your results with measurable ROI through detailed social media analytics.',
            icon: '/images/services/smm-measurable-growth.svg'
        }
    ],
    servicesTitle: 'Our Social Media Marketing Services',
    servicesTitleSpan: 'We Offer',
    servicesDescription: 'QuickGrowth offers a comprehensive suite of social media marketing services to help your business thrive across various platforms.',
    services: [
        {
            title: 'Social Media Strategy & Management',
            description: 'Custom content calendars, posting schedules, community management, and real-time engagement.',
            icon: '/images/services/smm-strategy-management.svg'
        },
        {
            title: 'Paid Social Media Advertising',
            description: 'Targeted ads on Facebook, Instagram, LinkedIn, and more to drive leads and conversions.',
            icon: '/images/services/smm-paid-ads.svg'
        },
        {
            title: 'Social Media Content Creation',
            description: 'High-quality graphics, videos, and posts designed to engage and resonate with your audience.',
            icon: '/images/services/smm-content-creation.svg'
        },
        {
            title: 'Influencer Marketing & Brand Partnerships',
            description: 'Partner with influencers and brand ambassadors to amplify your brand’s reach and credibility.',
            icon: '/images/services/smm-influencer-marketing.svg'
        },
        {
            title: 'Social Media Analytics & Reporting',
            description: 'Monthly performance reports, audience behavior analysis, and campaign optimization.',
            icon: '/images/services/smm-analytics-reporting.svg'
        }
    ],
    platformsTitle: 'Social Media Platforms We Specialize In',
    platformsDescription: 'We manage campaigns across all major social platforms to increase engagement and drive results.',
    platforms: [
        { platform: 'Facebook', description: 'Targeted ads, community building, and brand storytelling.' },
        { platform: 'Twitter', description: 'Data-driven tweet strategies and viral content creation.' },
        { platform: 'Instagram', description: 'Reels, Stories, and influencer marketing to boost engagement.' },
        { platform: 'LinkedIn', description: 'B2B networking, lead generation, and company page management.' },
        { platform: 'YouTube', description: 'Video SEO, high-quality content production, and YouTube Ads.' },
        { platform: 'Pinterest & Snapchat', description: 'Optimized Pins, story ads, and user engagement strategies.' },
        { platform: 'TikTok', description: 'Viral content, brand challenges, and paid TikTok advertising.' }
    ],
    whyQuickGrowthTitle: 'Why Choose QuickGrowth for Social Media Marketing?',
    whyQuickGrowthDescription: 'QuickGrowth provides data-driven social media strategies designed to increase brand awareness, engagement, and conversions.',
    whyQuickGrowth: [
        'Dedicated Account Managers – Get personalized campaign management from expert strategists.',
        'Custom Social Media Strategies – Tailored to fit your brand’s goals and audience.',
        'Comprehensive Campaign Reports – Track key performance metrics and ROI.',
        'Paid & Organic Growth Experts – Maximize both organic reach and paid ads for greater impact.',
        'Diverse Industry Experience – We’ve worked with businesses across various industries to deliver results.'
    ],
    caseStudiesTitle: 'Recent Social Media Marketing Success Stories',
    caseStudiesDescription: 'Take a look at how QuickGrowth has helped businesses grow their social media presence and achieve remarkable results.',
    caseStudies: [
        {
            title: 'E-Commerce Brand Instagram Growth',
            client: 'E-Commerce Brand',
            results: [
                'Increased followers by 300% in 6 months.',
                'Doubled engagement rates with Instagram Reels & Stories.',
                'Boosted sales by 45% through influencer partnerships.'
            ],
            cta: 'Transform Your Instagram with Our Expertise!'
        },
        {
            title: 'B2B LinkedIn Lead Generation',
            client: 'B2B Company',
            results: [
                'Generated 500+ high-quality leads in 3 months.',
                'Optimized LinkedIn Ads with a 4x return on ad spend.',
                'Established industry authority through thought leadership content.'
            ],
            cta: 'Get More Leads with a Strong LinkedIn Strategy!'
        },
        {
            title: 'Facebook & TikTok Ad Campaign for Fitness Brand',
            client: 'Fitness Brand',
            results: [
                'Reduced CPC by 50% through A/B testing.',
                'Increased video views by 200% on TikTok.',
                'Achieved a 30% revenue boost through Facebook retargeting.'
            ],
            cta: 'Reach New Audiences with Viral Social Media Campaigns!'
        }
    ]
},

// Google Ads & PPC Marketing Services
'ppc': {
    title: 'Google Ads & PPC Marketing Services',
    titleSpan: 'Drive Instant Traffic, Generate More Leads & Maximize Your ROI',
    description: 'Want to get your business in front of the right audience—instantly? Google Ads & Pay-Per-Click (PPC) marketing offer a fast, effective, and measurable way to increase visibility, attract high-intent customers, and boost conversions. At QuickGrowth, we specialize in data-driven PPC campaigns that maximize your ad spend and deliver real results.',
    bannerImage: '/images/services/pcc-banner.svg',
    category: 'pcc',
    categoryName: 'PPC Marketing',
    name: 'PCC',
    showCTA: true,
    introTitle: 'Launch High-Performing PPC Campaigns',
    introTitleSpan: 'Drive Instant Results with Data-Driven PPC Strategies',
    introDescription: 'QuickGrowth specializes in Google Ads & PPC marketing that drive measurable traffic, generate leads, and boost ROI. Our expert team designs PPC campaigns that work for your business, delivering fast results and high returns on ad spend.',
    introParagraph2: 'We manage campaigns across all Google Ads formats to ensure your business reaches the right customers at the right time, maximizing your ROI.',
    introImage: '/images/services/how-to-market.svg',
    featuresTitle: 'Why Invest in Google Ads & PPC Marketing?',
    featuresTitleSpan: 'Here’s Why',
    featuresDescription: 'Google Ads & PPC marketing provide fast, measurable, and highly targeted advertising that delivers instant results and more conversions.',
    features: [
        {
            title: 'Instant Search Visibility',
            description: 'Appear at the top of Google results immediately when customers are searching for products/services like yours.',
            icon: '/images/services/pcc-search-visibility.svg'
        },
        {
            title: 'Highly Targeted Advertising',
            description: 'Reach the right audience at the right time with data-driven targeting strategies.',
            icon: '/images/services/pcc-targeted-ads.svg'
        },
        {
            title: 'Pay Only for Clicks',
            description: 'With PPC, you only pay when users engage with your ad, maximizing budget efficiency.',
            icon: '/images/services/pcc-pay-per-click.svg'
        },
        {
            title: 'Faster ROI Compared to SEO',
            description: 'Start driving traffic and conversions right away with Google Ads.',
            icon: '/images/services/pcc-faster-roi.svg'
        },
        {
            title: 'Full Control & Measurable Growth',
            description: 'Adjust budgets, track real-time performance, and optimize campaigns for better results.',
            icon: '/images/services/pcc-control-measurable.svg'
        }
    ],
    servicesTitle: 'Our Google Ads & PPC Services',
    servicesTitleSpan: 'We Offer',
    servicesDescription: 'QuickGrowth’s Google Ads & PPC services deliver instant traffic and measurable results. We offer a wide range of PPC solutions to help you achieve your business goals.',
    services: [
        {
            title: 'Google Search Ads',
            description: 'Appear at the top of search results when customers are actively looking for your products/services.',
            icon: '/images/services/pcc-search-ads.svg'
        },
        {
            title: 'Google Display Ads',
            description: 'Reach potential customers across millions of websites & apps with visual banner ads.',
            icon: '/images/services/pcc-display-ads.svg'
        },
        {
            title: 'Google Shopping Ads (For eCommerce)',
            description: 'Showcase your products directly in search results to attract ready-to-buy customers.',
            icon: '/images/services/pcc-shopping-ads.svg'
        },
        {
            title: 'Remarketing & Retargeting Ads',
            description: 'Re-engage visitors who previously visited your website to convert them into customers.',
            icon: '/images/services/pcc-remarketing.svg'
        },
        {
            title: 'YouTube Video Ads',
            description: 'Use engaging video ads to boost brand awareness and drive conversions.',
            icon: '/images/services/pcc-youtube-ads.svg'
        },
        {
            title: 'PPC Campaign Management & Optimization',
            description: 'Expert campaign management, from keyword research to performance tracking and A/B testing.',
            icon: '/images/services/pcc-campaign-management.svg'
        }
    ],
    benefitsTitle: 'Key Benefits of Google Ads & PPC Marketing',
    benefitsDescription: 'Google Ads & PPC marketing offer highly effective ways to drive traffic, generate leads, and improve your ROI.',
    benefits: [
        'Targeted Advertising – Reach people actively searching for your services.',
        'Faster Results Than SEO – Appear at the top of Google instantly.',
        'Budget Control – Set daily limits & only pay for actual clicks.',
        'Real-Time Performance Tracking – Adjust campaigns based on live data & analytics.',
        'Increased Conversions & Sales – Optimized landing pages & ad creatives boost ROI.'
    ],
    whyQuickGrowthTitle: 'Why Choose QuickGrowth for PPC Marketing?',
    whyQuickGrowthDescription: 'QuickGrowth provides data-driven, high-ROI Google Ads & PPC campaigns that are tailored to your business goals.',
    whyQuickGrowth: [
        'Google Ads Certified Experts – Our team has years of experience running high-ROI campaigns.',
        'Data-Driven Campaign Strategies – We use advanced analytics & AI-powered optimization.',
        'Transparent Reporting & ROI Tracking – Always know how your ads are performing.',
        'Full-Service PPC Management – From keyword research to bid adjustments & A/B testing, we handle it all.'
    ],
    caseStudiesTitle: 'Recent PPC Success Stories',
    caseStudiesDescription: 'Explore how QuickGrowth helped businesses achieve remarkable results with PPC marketing.',
    caseStudies: [
        {
            title: 'Local Business PPC for a Real Estate Agency',
            client: 'Real Estate Agency',
            results: [
                'Generated 200+ qualified leads in 3 months.',
                'Achieved 25% lower cost per lead (CPL).',
                'Increased website traffic by 150%.'
            ],
            cta: 'Get More Local Leads with Google Ads!'
        },
        {
            title: 'eCommerce Google Shopping Ads',
            client: 'eCommerce Brand',
            results: [
                'Optimized Shopping Ads increased sales by 60%.',
                'Reduced cost-per-click (CPC) by 35%.',
                'Improved return on ad spend (ROAS) to 5x.'
            ],
            cta: 'Sell More Online with Google Shopping Ads!'
        },
        {
            title: 'SaaS Lead Generation with Google Ads',
            client: 'SaaS Company',
            results: [
                'Achieved 400% increase in trial signups.',
                'Lowered cost-per-acquisition (CPA) by 40%.',
                'Improved ad relevance score & click-through rates.'
            ],
            cta: 'Scale Your Business with High-Performance PPC!'
        }
    ]
},

// Online Reputation Management (ORM) Services
'reputation': {
    title: 'Online Reputation Management (ORM) Services',
    titleSpan: 'Protect, Enhance & Manage Your Brand’s Online Image',
    description: 'In today’s digital world, your online reputation is everything. A single negative review, misleading article, or false accusation can harm your credibility and impact business growth. At QuickGrowth, we provide strategic Online Reputation Management (ORM) solutions to repair, protect, and improve your brand image—helping you build trust and maintain a positive online presence.',
    bannerImage: '/images/services/orm-banner.svg',
    category: 'orm',
    categoryName: 'Reputation Management',
    name: 'ORM',
    showCTA: true,
    introTitle: 'Take Control of Your Online Reputation',
    introTitleSpan: 'Protect, Repair & Enhance Your Brand Image',
    introDescription: 'QuickGrowth specializes in Online Reputation Management services that protect your brand, mitigate negative content, and enhance your online presence. Our expert ORM team works strategically to repair and promote your brand’s reputation, ensuring positive online interactions.',
    introParagraph2: 'With our ORM services, you can control your online narrative and build lasting trust with your audience.',
    introImage: '/images/services/hoistingbanner.svg',
    featuresTitle: 'Why Online Reputation Management is Essential',
    featuresTitleSpan: 'Here’s Why ORM Matters',
    featuresDescription: 'ORM helps protect your business from online threats and ensure your brand maintains a positive image.',
    features: [
        {
            title: 'Build Brand Trust & Credibility',
            description: 'Customers trust businesses with a strong online presence and positive reputation.',
            icon: '/images/services/orm-trust-credibility.svg'
        },
        {
            title: 'Mitigate Negative Content',
            description: 'Reduce the impact of bad reviews, negative press & misleading information.',
            icon: '/images/services/orm-mitigate-content.svg'
        },
        {
            title: 'Improve Search Visibility',
            description: 'Ensure positive content ranks higher in search results to boost credibility.',
            icon: '/images/services/orm-search-visibility.svg'
        },
        {
            title: 'Boost Customer Engagement',
            description: 'Manage reviews, social mentions, & brand conversations effectively.',
            icon: '/images/services/orm-customer-engagement.svg'
        },
        {
            title: 'Increase Sales & Conversions',
            description: '90% of customers read reviews before making a purchase—your reputation matters!',
            icon: '/images/services/orm-increase-sales.svg'
        }
    ],
    servicesTitle: 'Our Online Reputation Management Services',
    servicesTitleSpan: 'We Offer',
    servicesDescription: 'QuickGrowth offers comprehensive ORM services designed to repair, protect, and enhance your online reputation.',
    services: [
        {
            title: 'Brand Monitoring & Reputation Analysis',
            description: 'Track brand mentions, social media conversations & customer sentiment, and respond effectively.',
            icon: '/images/services/orm-monitoring-analysis.svg'
        },
        {
            title: 'Online Review Management',
            description: 'Respond to negative reviews strategically and encourage positive reviews from satisfied customers.',
            icon: '/images/services/orm-review-management.svg'
        },
        {
            title: 'Search Engine Reputation Management (SERM)',
            description: 'Suppress negative search results with SEO-optimized positive content and improve brand image.',
            icon: '/images/services/orm-serm.svg'
        },
        {
            title: 'Social Media Reputation Management',
            description: 'Monitor social media platforms for mentions, build loyalty, and manage PR crises.',
            icon: '/images/services/orm-social-media.svg'
        },
        {
            title: 'Crisis Management & Damage Control',
            description: 'Implement crisis response plans to handle PR emergencies and protect your reputation.',
            icon: '/images/services/orm-crisis-management.svg'
        },
        {
            title: 'Personal Reputation Management',
            description: 'Manage personal reputations for executives and public figures, improving public profiles and news articles.',
            icon: '/images/services/orm-personal-reputation.svg'
        }
    ],
    benefitsTitle: 'Key Benefits of ORM for Businesses & Individuals',
    benefitsDescription: 'ORM helps businesses and individuals build trust, enhance visibility, and protect their brand from online threats.',
    benefits: [
        'Stronger Brand Image – Enhance trust & credibility in your industry.',
        'Higher Search Rankings – Push positive content to the top of search results.',
        'Increased Sales & Leads – A better reputation converts more prospects into paying customers.',
        'Protection from Online Attacks – Reduce the impact of bad reviews, fake complaints & misleading claims.',
        'Improved Customer Relations – Engage with customers and show you care.'
    ],
    whyQuickGrowthTitle: 'Why Choose QuickGrowth for Reputation Management?',
    whyQuickGrowthDescription: 'We provide proactive, personalized ORM strategies that protect and enhance your brand’s online presence.',
    whyQuickGrowth: [
        'Proactive Reputation Protection – We monitor and manage your brand image 24/7.',
        'SEO-Optimized Content Strategies – Push positive content to rank higher & suppress negativity.',
        'Experienced Crisis Management Team – Fast, strategic responses to reputation crises.',
        'Personalized Approach – Custom ORM plans tailored to your business or personal needs.',
        'Transparent Reporting & Insights – Receive regular updates & detailed performance reports.'
    ],
    caseStudiesTitle: 'Recent ORM Success Stories',
    caseStudiesDescription: 'See how QuickGrowth has helped businesses and individuals rebuild their reputation and grow stronger online.',
    caseStudies: [
        {
            title: 'Reputation Repair for a Corporate Brand',
            client: 'Corporate Brand',
            results: [
                'Removed misleading press articles from search results.',
                'Increased positive media coverage & online sentiment.',
                'Rebuilt trust among customers & stakeholders.'
            ],
            cta: 'Overcome Negative PR with a Strong ORM Strategy!'
        },
        {
            title: 'Online Review Management for an E-Commerce Business',
            client: 'E-Commerce Business',
            results: [
                'Boosted Google review rating from 3.2 to 4.8 stars in 6 months.',
                'Increased customer trust & website conversion rates.',
                'Implemented automated review request system.'
            ],
            cta: 'Turn Customer Feedback into a Competitive Advantage!'
        },
        {
            title: 'Crisis Management for a Public Figure',
            client: 'Public Figure',
            results: [
                'Suppressed negative search results within 90 days.',
                'Published positive PR articles & media mentions.',
                'Strengthened personal brand authority & credibility.'
            ],
            cta: 'Protect & Restore Your Online Reputation Effectively!'
        }
    ]
},








// Mobile Application Development
    'mobile-applications': {
    title: 'Mobile Application',
    titleSpan: 'Development',
    description: 'Build high-performance, scalable mobile applications with the latest technologies.',
    bannerImage: '/images/services/mobileAppBanner.svg',
    category: 'mobile',
    categoryName: 'Mobile Services',
    name: 'Mobile Application Development',
    showCTA: true,
    introTitle: 'Mobile App',
    introTitleSpan: 'Development Excellence',
    introDescription: 'At QuickGrowth, we specialize in custom mobile application development using cutting-edge technologies and frameworks. Our expertise spans iOS, Android, and cross-platform solutions, ensuring seamless performance, security, and scalability.',
    introParagraph2: 'Whether you’re looking to build a native iOS app, an Android app, or a cross-platform solution, we use the latest tools to ensure your app is fast, secure, and built to scale.',
    introImage: '/images/services/mobileApp-bg.svg',
    featuresTitle: 'Our Mobile App',
    featuresTitleSpan: 'Development Features',
    featuresDescription: 'We leverage the best technologies to create high-performing mobile applications tailored to your business needs.',
    features: [
        {
            title: 'Native iOS Development',
            description: 'We build iOS apps using Swift, Apple’s preferred language for high-performance applications.',
            icon: '/images/services/ios.svg'
        },
        {
            title: 'Native Android Development',
            description: 'We create Android apps using Kotlin, the modern and efficient language for Android development.',
            icon: '/images/services/android.svg'
        },
        {
            title: 'Cross-Platform Development',
            description: 'We develop apps that work seamlessly on both iOS and Android using Flutter, React Native, and more.',
            icon: '/images/services/cross-platform.svg'
        },
        {
            title: 'Backend Integration',
            description: 'We integrate reliable back-end systems to support real-time data synchronization and secure communication.',
            icon: '/images/services/backend.svg'
        },
        {
            title: 'UI/UX Design',
            description: 'We focus on creating intuitive and beautiful designs to ensure a smooth and engaging user experience.',
            icon: '/images/services/design.svg'
        },
        {
            title: 'App Maintenance & Support',
            description: 'We offer ongoing support and maintenance to keep your app secure, up-to-date, and running smoothly.',
            icon: '/images/services/support.svg'
        }
    ],
    processTitle: 'Our Mobile Application',
    processTitleSpan: 'Development Process',
    processes: [
        {
            title: 'Tech Stack Selection',
            description: 'We help you choose the best technologies for your mobile app based on your business needs and goals.'
        },
        {
            title: 'Design & Prototyping',
            description: 'We create user-friendly, intuitive designs and prototypes to ensure a seamless user experience.'
        },
        {
            title: 'Development & Coding',
            description: 'Our team builds efficient, secure, and scalable apps with clean code, following the best practices in mobile development.'
        },
        {
            title: 'Testing & QA',
            description: 'We thoroughly test your app to ensure it performs well across devices and platforms, delivering a bug-free experience.'
        },
        {
            title: 'Launch & Deployment',
            description: 'We deploy your app to the app stores (iOS and Android), ensuring smooth installation and launch processes.'
        },
        {
            title: 'Post-Launch Support',
            description: 'We offer ongoing support and maintenance to ensure your app stays up-to-date and performs optimally.'
        }
    ],
    showcaseTitle: 'Our Mobile',
    showcaseTitleSpan: 'App Projects',
    showcaseItems: [
        {
            title: 'True Cloud Storage App',
            subtitle: 'Cross-Platform Storage Solution',
            image: '/images/portfolio/port-1.svg',
            link: '/case-studies/true-cloud-storage'
        },
        {
            title: 'Airbnb-Style App',
            subtitle: 'Property Listing & Booking',
            image: '/images/portfolio/port-3.svg',
            link: '/case-studies/airbnb-style-app'
        },
        {
            title: 'Graphic Design App',
            subtitle: 'Platform for Digital Creators',
            image: '/images/portfolio/port-2.svg',
            link: '/case-studies/graphic-design-app'
        }
    ],
    showTestimonials: true,
    faqs: [
        {
            question: 'What technologies do you use for mobile app development?',
            answer: 'We use a variety of cutting-edge technologies including Swift, Kotlin, Flutter, React Native, Firebase, Node.js, and many others, depending on the project requirements.'
        },
        {
            question: 'Can you develop cross-platform apps?',
            answer: 'Yes, we specialize in building cross-platform mobile applications using frameworks like Flutter and React Native that work on both iOS and Android.'
        },
        {
            question: 'Do you offer app maintenance after launch?',
            answer: 'Yes, we offer ongoing app maintenance and support to ensure your app stays updated and functional.'
        },
        {
            question: 'How long does it take to develop a mobile app?',
            answer: 'The timeline varies based on the complexity of the app, but we work closely with you to ensure timely delivery without compromising quality.'
        },
        {
            question: 'Can you integrate third-party services into my app?',
            answer: 'Yes, we can integrate various third-party services like payment gateways, geolocation, and social media into your mobile app.'
        }
    ]
},

// API System Integration
    'api-integration': {
    title: 'API System',
    titleSpan: 'Integration',
    description: 'Seamless API integration to enhance business efficiency and streamline workflows.',
    bannerImage: '/images/services/apiIntegrationBanner.svg',
    category: 'integration',
    categoryName: 'Integration Services',
    name: 'API System Integration',
    showCTA: true,
    introTitle: 'API Integration',
    introTitleSpan: 'For Business Efficiency',
    introDescription: 'At QuickGrowth, we specialize in seamless API system integration to connect your applications, platforms, and third-party services. Our solutions help optimize workflows, automate processes, and enhance user experiences—saving you time and reducing errors.',
    introParagraph2: 'Whether you need third-party API integration, custom API development, or cloud API integration, our experts provide the best solution for your business.',
    introImage: '/images/services/awesome-1.svg',
    featuresTitle: 'Our API Integration',
    featuresTitleSpan: 'Services',
    featuresDescription: 'We offer a wide range of API integration services to help you automate workflows and enhance connectivity.',
    features: [
        {
            title: 'Third-Party API Integration',
            description: 'We connect your systems with payment gateways, CRMs, ERPs, and other services to automate workflows and enhance data synchronization.',
            icon: '/images/services/third-party-api.svg'
        },
        {
            title: 'Custom API Development',
            description: 'We build secure and scalable APIs tailored to your specific business needs, including RESTful and GraphQL APIs for efficient data transfer.',
            icon: '/images/services/custom-api.svg'
        },
        {
            title: 'Cloud API Integration',
            description: 'We integrate your web and mobile apps with cloud platforms like AWS, Google Cloud, and Azure for real-time data processing and storage.',
            icon: '/images/services/cloud-api.svg'
        },
        {
            title: 'Payment Gateway API Integration',
            description: 'We seamlessly integrate payment systems like Stripe, PayPal, and Square, offering secure transactions and multi-currency solutions.',
            icon: '/images/services/payment-api.svg'
        },
        {
            title: 'Communication API Integration',
            description: 'We enable real-time messaging and automated notifications using APIs like Twilio, WhatsApp, and SMS, enhancing customer engagement.',
            icon: '/images/services/communication-api.svg'
        },
        {
            title: 'Data & Analytics API Integration',
            description: 'We connect to powerful data analytics tools such as Google Analytics, Tableau, and Power BI, providing you with real-time insights for data-driven decision-making.',
            icon: '/images/services/data-analytics-api.svg'
        }
    ],
    processTitle: 'Our API Integration',
    processTitleSpan: 'Process',
    processes: [
        {
            title: 'Analysis & Planning',
            description: 'We analyze your business needs and workflows to recommend the most efficient API integration solutions.'
        },
        {
            title: 'Integration & Development',
            description: 'We seamlessly integrate APIs with your existing systems and develop custom solutions where necessary for smooth communication.'
        },
        {
            title: 'Testing & Quality Assurance',
            description: 'We rigorously test the integrated systems to ensure they work flawlessly and securely across platforms.'
        },
        {
            title: 'Deployment & Optimization',
            description: 'We deploy the integrated system, monitor its performance, and optimize it for maximum efficiency and scalability.'
        },
        {
            title: 'Maintenance & Support',
            description: 'We provide continuous monitoring and support to ensure your APIs remain functional and secure as your business grows.'
        }
    ],
    showcaseTitle: 'Our API',
    showcaseTitleSpan: 'Integration Projects',
    showcaseItems: [
        {
            title: 'Payment API Integration for Subscription Platform',
            subtitle: 'Seamless Recurring Payments',
            image: '/images/portfolio/port-5.svg',
            link: '/case-studies/payment-api-integration'
        },
        {
            title: 'Twilio API for Customer Support Chatbots',
            subtitle: 'AI Chatbot with Real-Time SMS & Voice Support',
            image: '/images/portfolio/port-6.svg',
            link: '/case-studies/twilio-api-chatbots'
        },
        {
            title: 'Google Analytics API for BI Dashboard',
            subtitle: 'Real-Time Data Insights',
            image: '/images/portfolio/port-7.svg',
            link: '/case-studies/google-analytics-api'
        }
    ],
    showTestimonials: true,
    faqs: [
        {
            question: 'What is API integration?',
            answer: 'API integration connects different software applications to share data and functionalities, improving efficiency and automation.'
        },
        {
            question: 'What are the benefits of API system integration?',
            answer: 'API integration helps automate workflows, enhance connectivity, reduce operational costs, and improve user experience.'
        },
        {
            question: 'Do you offer custom API development?',
            answer: 'Yes, we build custom APIs tailored to your business needs, including RESTful and GraphQL APIs for secure and efficient data transfer.'
        },
        {
            question: 'Can you integrate with third-party services?',
            answer: 'Yes, we can integrate your systems with a wide range of third-party services, including payment gateways, CRMs, ERPs, and more.'
        },
        {
            question: 'What cloud platforms do you support for API integration?',
            answer: 'We support integration with major cloud platforms such as AWS, Google Cloud, and Azure for real-time data processing and storage.'
        }
    ]
},

// SaaS Solutions
    'saas-solutions': {
    title: 'Scalable, Secure, and High-Performance SaaS Development',
    titleSpan: 'SaaS Solutions',
    description: 'QuickGrowth specializes in custom SaaS development, delivering secure, scalable, and cost-effective cloud solutions tailored for your business.',
    bannerImage: '/images/services/saasSolutionsBanner.svg',
    category: 'saas',
    categoryName: 'SaaS Development',
    name: 'SaaS Solutions',
    showCTA: true,
    introTitle: 'Scalable, Secure SaaS Development',
    introTitleSpan: 'For Your Business Growth',
    introDescription: 'At QuickGrowth, we specialize in building custom SaaS platforms designed to scale with your business. Our cloud-based solutions offer flexibility, security, and performance while meeting Canadian data protection regulations.',
    introParagraph2: 'Our SaaS solutions provide everything from MVP development to full-fledged platforms. We help businesses migrate to the cloud and create secure, user-centric applications that deliver outstanding experiences.',
    introImage: '/images/services/saasSolBanner.svg',
    featuresTitle: 'Our SaaS Development',
    featuresTitleSpan: 'Services',
    featuresDescription: 'We offer comprehensive SaaS development services to help you build, scale, and optimize your SaaS platforms.',
    features: [
        {
            title: 'SaaS Startup Workshop',
            description: 'Transform ideas into a validated SaaS concept with product roadmaps, technical feasibility, and early-stage estimates.',
            icon: '/images/services/saas-startup-workshop.svg'
        },
        {
            title: 'SaaS Migrations',
            description: 'Migrate legacy systems to cloud-based SaaS platforms with zero downtime, ensuring performance and scalability.',
            icon: '/images/services/saas-migration.svg'
        },
        {
            title: 'SaaS Growth Hacking',
            description: 'Develop custom growth strategies to scale your SaaS business, optimize user retention, and integrate AI-driven analytics.',
            icon: '/images/services/saas-growth-hacking.svg'
        },
        {
            title: 'SaaS MVP Development',
            description: 'Rapidly prototype and develop MVPs for market testing, using real user feedback to iterate and improve your product.',
            icon: '/images/services/saas-mvp.svg'
        },
        {
            title: 'SaaS QA & Testing',
            description: 'End-to-end testing for security, functionality, and performance with automated/manual testing and compliance with Canadian regulations.',
            icon: '/images/services/saas-qa-testing.svg'
        },
        {
            title: 'SaaS API Development & Integration',
            description: 'Create secure, custom APIs for third-party integrations, enhancing connectivity with payment gateways, CRMs, and analytics tools.',
            icon: '/images/services/saas-api-integration.svg'
        }
    ],
    processTitle: 'Our SaaS Development',
    processTitleSpan: 'Process',
    processes: [
        {
            title: 'Discovery & Research',
            description: 'We define your business goals, conduct market research, and create a product roadmap that aligns with your SaaS model.'
        },
        {
            title: 'UX/UI Design & Prototyping',
            description: 'We design intuitive interfaces and ensure a user-friendly experience with interactive mockups and UX testing.'
        },
        {
            title: 'Development & Coding',
            description: 'We follow an agile approach to develop secure and scalable SaaS platforms with modern front-end and back-end technologies.'
        },
        {
            title: 'Testing & Quality Assurance',
            description: 'We conduct rigorous testing to ensure your platform’s functionality, security, and performance meet the highest standards.'
        },
        {
            title: 'Deployment & Launch',
            description: 'We deploy your SaaS platform to cloud-based servers, analyze user feedback, and optimize it for continuous improvement.'
        }
    ],
    showcaseTitle: 'Recent SaaS Projects',
    showcaseTitleSpan: 'Solutions',
    showcaseItems: [
        {
            title: 'Cloud-Based Storage SaaS Solution',
            subtitle: 'Secure File Management Platform',
            image: '/images/services/awesome-3.svg',
            link: '/case-studies/cloud-storage-saas'
        },
        {
            title: 'SaaS Business Analytics Dashboard',
            subtitle: 'Real-Time Data Analysis with AI',
            image: '/images/services/awesome-4.svg',
            link: '/case-studies/saas-business-analytics'
        },
        {
            title: 'Healthcare SaaS for Telemedicine',
            subtitle: 'HIPAA-Compliant Patient Communication Platform',
            image: '/images/services/awesome-5.svg',
            link: '/case-studies/saas-healthcare-telemedicine'
        }
    ],
    showTestimonials: true,
    faqs: [
        {
            question: 'What is SaaS development?',
            answer: 'SaaS development is the creation of cloud-based software solutions delivered to users via a subscription model. It offers scalability, cost-effectiveness, and accessibility.'
        },
        {
            question: 'What makes QuickGrowth different in SaaS development?',
            answer: 'QuickGrowth specializes in secure, scalable, and user-centric SaaS platforms. We provide end-to-end services, from MVP development to full-scale SaaS solutions tailored to your business needs.'
        },
        {
            question: 'Can QuickGrowth help with SaaS migrations?',
            answer: 'Yes, we can help you migrate legacy systems to cloud-based SaaS platforms, ensuring zero downtime and optimized performance.'
        },
        {
            question: 'How do you ensure security in SaaS development?',
            answer: 'We implement robust security measures, including compliance with Canadian data protection standards, encryption, and secure coding practices to protect your SaaS platform.'
        },
        {
            question: 'What is a SaaS MVP?',
            answer: 'A SaaS MVP (Minimum Viable Product) is a simplified version of your product that allows you to test your concept, gather user feedback, and iterate before scaling.'
        }
    ]
},

// MVP Solutions
    'mvp-solutions': {
    title: 'MVP Development Solutions',
    titleSpan: 'MVP Solutions',
    description: 'QuickGrowth helps startups and businesses in Canada build Minimum Viable Products (MVP) to validate ideas, attract investors, and accelerate market entry.',
    bannerImage: '/images/services/mvpSolutionsBanner.svg',
    category: 'mvp',
    categoryName: 'MVP Development',
    name: 'MVP Solutions',
    showCTA: true,
    introTitle: 'Turn Your Idea into a Market-Ready Product',
    introTitleSpan: 'With MVP Development',
    introDescription: 'A Minimum Viable Product (MVP) is the first step to building a successful product. It helps you validate your idea, gather user feedback, and scale efficiently. At QuickGrowth, we offer a comprehensive, cost-effective approach to MVP development, helping startups in Canada launch quickly and successfully.',
    introParagraph2: 'Our MVP services ensure that your product resonates with early users, attracts investors, and accelerates your market entry, while avoiding costly mistakes and focusing on what truly matters.',
    introImage: '/images/services/mvp-Banner.svg',
    featuresTitle: 'MVP Development Services',
    featuresTitleSpan: 'We Offer',
    featuresDescription: 'From building a functional MVP to refining it based on feedback, our services cover everything you need to turn your idea into a market-ready product.',
    features: [
        {
            title: 'MVP Development',
            description: 'We build functional MVPs that focus on essential features and usability, laying the foundation for future growth.',
            icon: '/images/services/mvp-development.svg'
        },
        {
            title: 'MVP Improvement',
            description: 'Refine your MVP based on real user feedback. We help you add new features, enhance UI/UX, and ensure scalability.',
            icon: '/images/services/mvp-improvement.svg'
        },
        {
            title: 'Market Analysis & Feasibility Testing',
            description: 'We conduct thorough market research to validate your idea, identify user needs, and assess competition.',
            icon: '/images/services/mvp-market-analysis.svg'
        },
        {
            title: 'MVP Consulting',
            description: 'We provide expert guidance on product strategy, roadmap development, and choosing the right tech stack for your MVP.',
            icon: '/images/services/mvp-consulting.svg'
        },
        {
            title: 'MVP Prototyping & Wireframing',
            description: 'We create interactive prototypes and wireframes to validate the user journey and design before development begins.',
            icon: '/images/services/mvp-prototyping.svg'
        },
        {
            title: 'Full-Scale Product Development',
            description: 'Upgrade your MVP to a fully developed product with advanced features, integrations, and improved scalability.',
            icon: '/images/services/mvp-full-scale.svg'
        }
    ],
    processTitle: 'Our MVP Development',
    processTitleSpan: 'Process',
    processes: [
        {
            title: 'Discovery & Strategy',
            description: 'We define your core objectives, target audience, and key features while conducting market and competitor research.'
        },
        {
            title: 'UX/UI Design & Prototyping',
            description: 'We create wireframes, interactive mockups, and ensure an intuitive, user-friendly interface.'
        },
        {
            title: 'MVP Development',
            description: 'We build the core functionalities of your MVP with an agile approach, focusing on security and scalability.'
        },
        {
            title: 'Testing & User Feedback',
            description: 'We perform QA testing, gather user feedback, and refine the MVP for further development and scaling.'
        },
        {
            title: 'Launch & Growth Strategy',
            description: 'We successfully launch your MVP, analyze user engagement, and help you iterate and grow.'
        }
    ],
    showcaseTitle: 'Recent MVP Projects',
    showcaseTitleSpan: 'Solutions',
    showcaseItems: [
        {
            title: 'AI-Powered E-Commerce MVP',
            subtitle: 'Smart E-Commerce Platform with AI Recommendations',
            image: '/images/services/awesome-6.svg',
            link: '/case-studies/ai-powered-ecommerce-mvp'
        },
        {
            title: 'Healthcare SaaS MVP',
            subtitle: 'HIPAA-Compliant Telemedicine Platform',
            image: '/images/services/awesome1.svg',
            link: '/case-studies/healthcare-saas-mvp'
        },
        {
            title: 'Social Media MVP for Influencers',
            subtitle: 'Cross-Platform Social Networking App',
            image: '/images/services/awesome2.svg',
            link: '/case-studies/social-media-mvp'
        }
    ],
    showTestimonials: true,
    faqs: [
        {
            question: 'What is an MVP?',
            answer: 'A Minimum Viable Product (MVP) is a simplified version of your product that includes only the core features necessary to test your idea with real users and gather feedback.'
        },
        {
            question: 'How does QuickGrowth help with MVP development?',
            answer: 'QuickGrowth offers end-to-end MVP development services, from idea validation and market analysis to building, testing, and refining the product based on user feedback.'
        },
        {
            question: 'What are the benefits of MVP development?',
            answer: 'MVP development helps you validate your idea before investing fully, launch quickly to gain user insights, and attract investors by showcasing your product’s potential.'
        },
        {
            question: 'Can QuickGrowth help scale my MVP to a full product?',
            answer: 'Yes, we can help transition your MVP into a fully developed product by adding advanced features, integrations, and optimizing scalability.'
        },
        {
            question: 'Which technologies do you use for MVP development?',
            answer: 'We use modern technologies for MVP development, including React.js, Node.js, Python, and mobile frameworks like Flutter and React Native.'
        }
    ]
},

// Software Maintenance Services
'maintenance-supply': {
    title: 'Software Maintenance & Support Services',
    titleSpan: 'Maintenance & Support',
    description: 'QuickGrowth offers comprehensive software maintenance services, ensuring your systems run smoothly, securely, and efficiently. We provide regular updates, security patches, bug fixes, and performance optimization.',
    bannerImage: '/images/services/maintenanceSupplyBanner.svg',
    category: 'maintenance',
    categoryName: 'Software Maintenance',
    name: 'Maintenance Supply',
    showCTA: true,
    introTitle: 'Ensure Peak Performance, Security & Reliability for Your Software',
    introTitleSpan: 'With Maintenance & Support Services',
    introDescription: 'Your software is a critical asset. Keeping it updated, secure, and optimized is essential for smooth operations. At QuickGrowth, we offer a full suite of software maintenance services, from bug fixes to performance optimization, ensuring your software runs flawlessly.',
    introParagraph2: 'With our maintenance services, you can focus on your business while we handle all the technical details of keeping your software up-to-date and secure.',
    introImage: '/images/services/maintainencebanner.svg',
    featuresTitle: 'Our Software Maintenance Services',
    featuresTitleSpan: 'We Provide',
    featuresDescription: 'Our services are designed to ensure long-term stability, security, and optimal performance for your software. From bug fixing to performance optimization, we’ve got you covered.',
    features: [
        {
            title: 'Regular Software Updates',
            description: 'We ensure compatibility with the latest operating systems, browsers, and platforms while patching vulnerabilities and optimizing performance.',
            icon: '/images/services/maintenance-updates.svg'
        },
        {
            title: 'Bug Fixing & Troubleshooting',
            description: 'Identify and resolve system errors, UI/UX glitches, and broken features to ensure seamless functionality across devices.',
            icon: '/images/services/maintenance-bug-fixing.svg'
        },
        {
            title: 'Security & Compliance Updates',
            description: 'We provide regular security patches and vulnerability scans, ensuring your software complies with industry standards like GDPR, HIPAA, and PCI DSS.',
            icon: '/images/services/maintenance-security.svg'
        },
        {
            title: 'Performance Optimization',
            description: 'Optimize loading times, database performance, and scalability to keep your software running efficiently and responsively.',
            icon: '/images/services/maintenance-performance.svg'
        },
        {
            title: 'Feature Enhancements & Upgrades',
            description: 'We enhance features based on user feedback, improving the UI/UX and integrating new APIs, tools, and automation.',
            icon: '/images/services/maintenance-enhancements.svg'
        },
        {
            title: 'Data Backup & Recovery',
            description: 'Regular automated backups and disaster recovery planning ensure the safety of your data and business continuity.',
            icon: '/images/services/maintenance-backup.svg'
        },
        {
            title: 'Monitoring & Support',
            description: '24/7 real-time monitoring and proactive troubleshooting to ensure continuous software performance and quick issue resolution.',
            icon: '/images/services/maintenance-monitoring.svg'
        }
    ],
    packagesTitle: 'Our Software Maintenance Packages',
    packagesTitleSpan: 'Choose the Best Plan for Your Business',
    packagesDescription: 'We offer flexible maintenance plans tailored to your business needs. From basic updates to comprehensive enterprise support, choose the plan that best suits your requirements.',
    packages: [
        {
            title: 'Basic Plan',
            price: '$250/month',
            description: 'Ideal for small businesses requiring basic maintenance, including monthly health checks, bug fixes, and performance monitoring.',
            features: [
                'Monthly software health checks',
                'Bug fixing & minor updates',
                'Basic performance monitoring'
            ],
            cta: 'Perfect for Small Businesses!'
        },
        {
            title: 'Growth Plan',
            price: '$500/month',
            description: 'For growing businesses, this plan includes security patches, compliance updates, database optimization, and regular backups.',
            features: [
                'Everything in Basic Plan, plus',
                'Security patches & compliance updates',
                'Database optimization & regular backups',
                'User experience & performance improvements'
            ],
            cta: 'Great for Scaling Businesses!'
        },
        {
            title: 'Premium Plan',
            price: '$1,250/month',
            description: 'For enterprises needing full-scale maintenance, including feature enhancements, advanced security monitoring, and a dedicated account manager.',
            features: [
                'Everything in Growth Plan, plus',
                'Feature enhancements & API integrations',
                'Advanced security monitoring',
                'Dedicated account manager & 24/7 support'
            ],
            cta: 'For Enterprises Requiring Ongoing Support!'
        },
        {
            title: 'Custom Plan',
            price: 'Tailored',
            description: 'We offer customized maintenance packages to fit your specific business needs, with flexible pricing.',
            features: [
                'Tailored maintenance package',
                'Flexible pricing based on your software & business requirements'
            ],
            cta: 'Need a Custom Solution? Let’s Discuss Your Needs!'
        }
    ],
    technologiesTitle: 'Technologies We Support',
    technologiesDescription: 'We support a wide range of technologies to ensure your software remains compatible, secure, and up-to-date. From programming languages to cloud solutions, we’ve got you covered.',
    technologies: [
        {
            category: 'Programming Languages',
            items: ['Java', 'Python', 'PHP', 'JavaScript', 'C#']
        },
        {
            category: 'Frameworks & CMS',
            items: ['React.js', 'Angular', 'Django', 'Laravel', 'WordPress']
        },
        {
            category: 'Databases',
            items: ['MySQL', 'PostgreSQL', 'Firebase', 'MongoDB']
        },
        {
            category: 'Cloud & DevOps',
            items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes']
        }
    ],
    showcaseTitle: 'Recent Software Maintenance Projects',
    showcaseTitleSpan: 'Solutions Delivered',
    showcaseItems: [
        {
            title: 'Banking & Fintech System Maintenance',
            subtitle: 'Security & Fraud Detection Monitoring',
            image: '/images/services/awesome1.svg',
            link: '/case-studies/banking-fintech-maintenance'
        },
        {
            title: 'E-Commerce Software Optimization',
            subtitle: 'Enhanced Checkout & Cart Performance',
            image: '/images/services/awesome3.svg',
            link: '/case-studies/ecommerce-software-optimization'
        },
        {
            title: 'Mobile App Bug Fixing & Updates',
            subtitle: 'UI/UX Updates & Speed Improvements',
            image: '/images/services/awesome2.svg',
            link: '/case-studies/mobile-app-maintenance'
        }
    ],
    faqs: [
        {
            question: 'What is software maintenance?',
            answer: 'Software maintenance includes bug fixing, updates, performance optimization, security patches, and compliance updates to ensure the software runs smoothly and securely.'
        },
        {
            question: 'Why is regular software maintenance important?',
            answer: 'Regular maintenance helps prevent software bugs, security vulnerabilities, and performance issues, ensuring your software remains efficient and secure.'
        },
        {
            question: 'Do you offer custom maintenance plans?',
            answer: 'Yes, we offer customized maintenance plans to fit your specific software and business needs.'
        },
        {
            question: 'Which technologies do you support?',
            answer: 'We support a wide range of technologies, including popular programming languages, frameworks, databases, and cloud services like AWS, Google Cloud, and Microsoft Azure.'
        }
    ]
},


// AI Chatbot Development Services

'ai-chatbots': {
    title: 'Custom Chatbot Development',
    titleSpan: 'AI Chatbot Development',
    description: 'QuickGrowth builds AI-powered custom chatbots that enhance customer engagement, automate operations, and improve business efficiency. Get personalized, 24/7 customer interactions while reducing costs and improving satisfaction.',
    bannerImage: '/images/services/aiChatboxBanner.svg',
    category: 'chatbots',
    categoryName: 'AI Chatbots',
    name: 'AI Chatbox',
    showCTA: true,
    introTitle: 'Enhance Customer Engagement & Business Efficiency with Custom AI Chatbots',
    introTitleSpan: '24/7 Personalized Support & Automation',
    introDescription: 'Automate repetitive tasks, improve customer service, and gather valuable insights with AI-powered chatbots. QuickGrowth’s custom chatbots deliver fast, reliable responses, optimizing customer experiences and operations.',
    introParagraph2: 'Whether it’s providing 24/7 support, booking appointments, or handling customer queries, our chatbots integrate seamlessly into your business operations.',
    introImage: '/images/services/chatbot-banner.svg',
    featuresTitle: 'Why Choose QuickGrowth for AI Chatbot Development?',
    featuresTitleSpan: 'Here’s Why',
    featuresDescription: 'Our chatbots provide cost savings, scalability, enhanced user engagement, and data-driven insights to help you scale your business efficiently.',
    features: [
        {
            title: 'Cost Savings',
            description: 'Automate repetitive tasks, reduce reliance on human agents, and lower operational costs.',
            icon: '/images/services/ai-chatbox-cost.svg'
        },
        {
            title: '24/7 Customer Support',
            description: 'Provide round-the-clock assistance, ensuring no customer inquiry goes unanswered.',
            icon: '/images/services/ai-chatbox-24-7.svg'
        },
        {
            title: 'Data-Driven Insights',
            description: 'Our chatbots collect valuable customer data, helping you personalize interactions and optimize marketing strategies.',
            icon: '/images/services/ai-chatbox-insights.svg'
        },
        {
            title: 'Competitive Advantage',
            description: 'Position your brand as tech-savvy and customer-focused with AI chatbots.',
            icon: '/images/services/ai-chatbox-advantage.svg'
        },
        {
            title: 'Enhanced User Engagement',
            description: 'Proactively engage users, keeping them on your platform longer and boosting conversion rates.',
            icon: '/images/services/ai-chatbox-engagement.svg'
        },
        {
            title: 'Scalability & Adaptability',
            description: 'Our chatbots grow with your business and integrate seamlessly with emerging technologies.',
            icon: '/images/services/ai-chatbox-scalability.svg'
        }
    ],
    servicesTitle: 'Tailored AI Chatbot Development Services by QuickGrowth',
    servicesTitleSpan: 'We Offer',
    servicesDescription: 'We provide fully customized AI chatbot solutions to address your business’s unique needs, enhancing efficiency and user experience.',
    services: [
        {
            title: 'Custom Chatbot Solutions',
            description: 'Bespoke AI chatbots that handle customer queries, automate tasks, and improve overall user experience.',
            icon: '/images/services/ai-chatbox-custom.svg'
        },
        {
            title: 'Use Case Chatbot Development',
            description: 'AI chatbots tailored for different industries, from customer support to appointment booking.',
            icon: '/images/services/ai-chatbox-use-case.svg'
        },
        {
            title: 'AI Model Integration',
            description: 'Integrate advanced AI models to automate workflows and enhance decision-making.',
            icon: '/images/services/ai-chatbox-ai-model.svg'
        },
        {
            title: 'Multi-language Chatbots',
            description: 'Expand your global reach with multilingual chatbots for seamless cross-border interactions.',
            icon: '/images/services/ai-chatbox-multilingual.svg'
        },
        {
            title: 'Chatbot Maintenance & Support',
            description: 'Ongoing maintenance, upgrades, and performance monitoring to keep your chatbot running smoothly.',
            icon: '/images/services/ai-chatbox-maintenance.svg'
        }
    ],
    integrationTitle: 'Cross-Platform AI Chatbot Integration',
    integrationDescription: 'Our chatbots integrate seamlessly with a variety of platforms, making them adaptable to any business need.',
    integration: [
        'Websites & Mobile Apps',
        'E-commerce Stores',
        'Social Media (Facebook Messenger, WhatsApp, Instagram, Telegram, Twitter)',
        'CRM & ERP Systems',
        'Customer Support Platforms (LiveChat, Zendesk, HubSpot, Salesforce)'
    ],
    caseStudiesTitle: 'Real Results with AI Chatbots',
    caseStudiesDescription: 'Our AI chatbot solutions have delivered tangible results across various industries. Here are some success stories.',
    caseStudies: [
        {
            title: 'AI Chatbot for E-Commerce – Enhancing Customer Experience',
            client: 'A leading e-commerce company',
            results: [
                '70% reduction in response time for customer inquiries',
                'AI chatbot provided 24/7 assistance, increasing satisfaction by 30%',
                '75% of customer queries resolved automatically, reducing human workload'
            ],
            technologies: ['AWS', 'OpenAI API', 'Node.js', 'React.js'],
            cta: 'See how AI chatbots can streamline your e-commerce operations!'
        },
        {
            title: 'AI Chatbot for Healthcare – Automating Patient Support',
            client: 'A telemedicine startup',
            results: [
                'Scheduled over 5,000 patient appointments per month',
                'Instant response to FAQs, reducing staff burden',
                'Personalized health recommendations based on patient history'
            ],
            technologies: ['Google Cloud AI', 'Python', 'TensorFlow'],
            cta: 'Improve patient care with AI-driven automation!'
        },
        {
            title: 'AI Legal Chatbot – Streamlining Client Consultations',
            client: 'A legal firm specializing in corporate law',
            results: [
                'Processed over 2,000 client inquiries per month',
                'Automated legal document review with 90% accuracy',
                'Reduced consultation booking time by 50%'
            ],
            technologies: ['IBM Watson', 'GPT-4', 'JavaScript'],
            cta: 'Transform your legal practice with AI-powered automation!'
        }
    ],
    toolsTitle: 'Tools & Technologies We Use',
    toolsDescription: 'We use the latest technologies for optimal AI chatbot performance and efficiency.',
    tools: [
        { category: 'Front-End Development', items: ['React.js', 'Vue.js', 'Angular'] },
        { category: 'Back-End Development', items: ['Node.js', 'Python', 'Django', 'Flask'] },
        { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'Firebase'] },
        { category: 'Messaging APIs', items: ['Twilio', 'WhatsApp API', 'Facebook Messenger API'] },
        { category: 'Deployment & Cloud Services', items: ['AWS', 'Google Cloud', 'Azure'] },
        { category: 'AI & NLP Models', items: ['OpenAI', 'GPT-4', 'TensorFlow', 'IBM Watson'] }
    ],
    faqs: [
        {
            question: 'What is a custom AI chatbot?',
            answer: 'A custom AI chatbot is a tailored solution built to meet the specific needs of your business, automating customer interactions, tasks, and workflows.'
        },
        {
            question: 'How can AI chatbots improve customer service?',
            answer: 'AI chatbots provide instant responses, automate support tasks, and handle repetitive inquiries, improving customer satisfaction and reducing human agent workload.'
        },
        {
            question: 'Can chatbots be integrated with other platforms?',
            answer: 'Yes, our AI chatbots can be integrated with websites, mobile apps, e-commerce platforms, CRM systems, and social media channels.'
        },
        {
            question: 'What technologies do you use for AI chatbot development?',
            answer: 'We use cutting-edge technologies like GPT-4, OpenAI, TensorFlow, AWS, and Google Cloud for developing powerful AI chatbots.'
        }
    ]
},

//SaaS AI
'saas-ai': {
    title: 'Scalable, Secure, and High-Performance SaaS Development',
    titleSpan: 'SaaS Solutions',
    description: 'QuickGrowth specializes in custom SaaS development, delivering secure, scalable, and cost-effective cloud solutions tailored for your business.',
    bannerImage: '/images/services/saasSolutionsBanner.svg',
    category: 'saas',
    categoryName: 'SaaS Development',
    name: 'SaaS Solutions',
    showCTA: true,
    introTitle: 'Scalable, Secure SaaS Development',
    introTitleSpan: 'For Your Business Growth',
    introDescription: 'At QuickGrowth, we specialize in building custom SaaS platforms designed to scale with your business. Our cloud-based solutions offer flexibility, security, and performance while meeting Canadian data protection regulations.',
    introParagraph2: 'Our SaaS solutions provide everything from MVP development to full-fledged platforms. We help businesses migrate to the cloud and create secure, user-centric applications that deliver outstanding experiences.',
    introImage: '/images/services/saasaibanner.svg',
    featuresTitle: 'Our SaaS Development',
    featuresTitleSpan: 'Services',
    featuresDescription: 'We offer comprehensive SaaS development services to help you build, scale, and optimize your SaaS platforms.',
    features: [
        {
            title: 'SaaS Startup Workshop',
            description: 'Transform ideas into a validated SaaS concept with product roadmaps, technical feasibility, and early-stage estimates.',
            icon: '/images/services/saas-startup-workshop.svg'
        },
        {
            title: 'SaaS Migrations',
            description: 'Migrate legacy systems to cloud-based SaaS platforms with zero downtime, ensuring performance and scalability.',
            icon: '/images/services/saas-migration.svg'
        },
        {
            title: 'SaaS Growth Hacking',
            description: 'Develop custom growth strategies to scale your SaaS business, optimize user retention, and integrate AI-driven analytics.',
            icon: '/images/services/saas-growth-hacking.svg'
        },
        {
            title: 'SaaS MVP Development',
            description: 'Rapidly prototype and develop MVPs for market testing, using real user feedback to iterate and improve your product.',
            icon: '/images/services/saas-mvp.svg'
        },
        {
            title: 'SaaS QA & Testing',
            description: 'End-to-end testing for security, functionality, and performance with automated/manual testing and compliance with Canadian regulations.',
            icon: '/images/services/saas-qa-testing.svg'
        },
        {
            title: 'SaaS API Development & Integration',
            description: 'Create secure, custom APIs for third-party integrations, enhancing connectivity with payment gateways, CRMs, and analytics tools.',
            icon: '/images/services/saas-api-integration.svg'
        }
    ],
    processTitle: 'Our SaaS Development',
    processTitleSpan: 'Process',
    processes: [
        {
            title: 'Discovery & Research',
            description: 'We define your business goals, conduct market research, and create a product roadmap that aligns with your SaaS model.'
        },
        {
            title: 'UX/UI Design & Prototyping',
            description: 'We design intuitive interfaces and ensure a user-friendly experience with interactive mockups and UX testing.'
        },
        {
            title: 'Development & Coding',
            description: 'We follow an agile approach to develop secure and scalable SaaS platforms with modern front-end and back-end technologies.'
        },
        {
            title: 'Testing & Quality Assurance',
            description: 'We conduct rigorous testing to ensure your platform’s functionality, security, and performance meet the highest standards.'
        },
        {
            title: 'Deployment & Launch',
            description: 'We deploy your SaaS platform to cloud-based servers, analyze user feedback, and optimize it for continuous improvement.'
        }
    ],
    
    showTestimonials: true,
    faqs: [
        {
            question: 'What is SaaS development?',
            answer: 'SaaS development is the creation of cloud-based software solutions delivered to users via a subscription model. It offers scalability, cost-effectiveness, and accessibility.'
        },
        {
            question: 'What makes QuickGrowth different in SaaS development?',
            answer: 'QuickGrowth specializes in secure, scalable, and user-centric SaaS platforms. We provide end-to-end services, from MVP development to full-scale SaaS solutions tailored to your business needs.'
        },
        {
            question: 'Can QuickGrowth help with SaaS migrations?',
            answer: 'Yes, we can help you migrate legacy systems to cloud-based SaaS platforms, ensuring zero downtime and optimized performance.'
        },
        {
            question: 'How do you ensure security in SaaS development?',
            answer: 'We implement robust security measures, including compliance with Canadian data protection standards, encryption, and secure coding practices to protect your SaaS platform.'
        },
        {
            question: 'What is a SaaS MVP?',
            answer: 'A SaaS MVP (Minimum Viable Product) is a simplified version of your product that allows you to test your concept, gather user feedback, and iterate before scaling.'
        }
    ]
},

// AI PoC & MVP Development
    
    'ai-poc-mvp': {
    title: 'AI PoC & MVP Development',
    titleSpan: 'AI Proof of Concept & MVP Solutions',
    description: 'QuickGrowth turns your visionary AI concepts into proven solutions. We specialize in AI Proof of Concept (PoC) and Minimum Viable Product (MVP) development to ensure technical feasibility, business impact, and scalability for your AI initiatives.',
    bannerImage: '/images/services/ai-poc-mvp-banner.svg',
    category: 'ai',
    categoryName: 'AI PoC & MVP Development',
    name: 'AI PoC & MVP',
    showCTA: true,
    introTitle: 'Transform AI Concepts into Real-World Solutions',
    introTitleSpan: 'Validate, Build & Scale with Confidence',
    introDescription: 'At QuickGrowth, we help businesses validate AI solutions through Proof of Concept (PoC) and MVP development. Our approach minimizes risks and ensures your AI solution is both feasible and impactful before full-scale deployment.',
    introParagraph2: 'We guide you from ideation to prototype, focusing on maximizing business results with robust AI models and innovative designs.',
    introImage: '/images/services/aipocmvpbanner.svg',
    featuresTitle: 'Why Choose QuickGrowth for AI PoC & MVP Development?',
    featuresTitleSpan: 'Here’s Why',
    featuresDescription: 'QuickGrowth specializes in delivering high-quality AI models and solutions that empower businesses to realize their AI potential. Our PoC & MVP offerings include technical validation, prototype development, and business impact assessments.',
    features: [
        {
            title: 'Feasibility Testing & Validation',
            description: 'We validate the technical feasibility and business impact of AI ideas, ensuring that your concept is viable and aligns with market demands.',
            icon: '/images/services/ai-feasibility.svg'
        },
        {
            title: 'Tailored AI Solutions',
            description: 'We provide custom AI models and algorithms designed to address your unique business challenges and objectives.',
            icon: '/images/services/ai-tailored.svg'
        },
        {
            title: 'Scalable AI MVPs',
            description: 'Our AI MVPs are built to scale, ensuring seamless transitions from prototype to fully operational AI solutions.',
            icon: '/images/services/ai-scalable.svg'
        },
        {
            title: 'Business-Oriented Results',
            description: 'We focus on AI’s direct impact on business operations, ensuring that your AI solution delivers measurable outcomes.',
            icon: '/images/services/ai-business-impact.svg'
        },
        {
            title: 'Continuous Support & Optimization',
            description: 'From initial concept to post-launch, we offer continuous support to refine and optimize your AI solution.',
            icon: '/images/services/ai-support.svg'
        }
    ],
    servicesTitle: 'Our AI PoC & MVP Development Services',
    servicesTitleSpan: 'We Offer',
    servicesDescription: 'QuickGrowth offers end-to-end AI PoC & MVP development services, including AI research, feasibility testing, prototype building, and integration support to help you scale your AI-driven innovations.',
    services: [
        {
            title: 'AI PoC Development',
            description: 'Validate your AI concepts with a custom-built Proof of Concept that demonstrates technical feasibility and business value.',
            icon: '/images/services/ai-poc.svg'
        },
        {
            title: 'AI MVP Development',
            description: 'Build a Minimum Viable Product to test your AI solution in the market, gather user feedback, and refine your model.',
            icon: '/images/services/ai-mvp.svg'
        },
        {
            title: 'AI Model & Algorithm Design',
            description: 'Develop custom AI models and algorithms tailored to your business challenges, leveraging cutting-edge technologies.',
            icon: '/images/services/ai-model.svg'
        },
        {
            title: 'AI Integration & Deployment',
            description: 'Seamlessly integrate AI solutions into your existing infrastructure, ensuring smooth operation and scalability.',
            icon: '/images/services/ai-integration.svg'
        },
        {
            title: 'AI Testing & Optimization',
            description: 'Test AI solutions for accuracy, scalability, and performance, ensuring high-quality results and robust performance.',
            icon: '/images/services/ai-testing.svg'
        }
    ],
    industriesTitle: 'Industries We Serve with AI PoC & MVP Development',
    industriesDescription: 'Our AI PoC & MVP solutions cater to a variety of industries, helping businesses harness the power of AI to innovate and drive growth.',
    industries: [
        {
            title: 'Healthcare',
            description: 'AI-powered diagnostics, medical imaging, and patient data analysis to improve healthcare outcomes.',
            icon: '/images/services/ai-healthcare.svg'
        },
        {
            title: 'Finance',
            description: 'Fraud detection, risk management, and predictive analytics to optimize financial decision-making.',
            icon: '/images/services/ai-finance.svg'
        },
        {
            title: 'Retail & E-Commerce',
            description: 'AI-driven recommendations, personalized shopping experiences, and inventory management solutions.',
            icon: '/images/services/ai-retail.svg'
        },
        {
            title: 'Manufacturing',
            description: 'Predictive maintenance, supply chain optimization, and automated production lines powered by AI.',
            icon: '/images/services/ai-manufacturing.svg'
        },
        {
            title: 'Education',
            description: 'AI-enhanced learning tools, personalized education experiences, and automated grading systems.',
            icon: '/images/services/ai-education.svg'
        },
        {
            title: 'Automotive',
            description: 'AI-powered autonomous driving, predictive maintenance, and traffic management solutions.',
            icon: '/images/services/ai-automotive.svg'
        }
    ],
    coreBenefitsTitle: 'Core Benefits of AI PoC & MVP Development',
    coreBenefitsDescription: 'Our AI PoC & MVP services offer numerous benefits, helping you validate, optimize, and scale your AI solutions effectively.',
    coreBenefits: [
        'Risk Mitigation – Test feasibility before full-scale investment.',
        'Faster Time-to-Market – Quickly build and validate AI models.',
        'Cost Efficiency – Reduce development costs by validating AI concepts early.',
        'Scalability – Develop AI solutions that grow with your business.',
        'Business-Centric AI – Ensure AI solutions deliver measurable business results.',
        'Real-Time Feedback – Gather valuable insights for optimization and refinement.'
    ],
    processTitle: 'AI PoC & MVP Development Process',
    processDescription: 'Our proven development process ensures that your AI solution is built with precision, scalability, and business impact in mind.',
    process: [
        {
            title: 'Discovery & Research',
            description: 'We work with you to understand your business goals, AI opportunities, and market requirements.'
        },
        {
            title: 'Feasibility Testing & PoC Creation',
            description: 'We validate the feasibility of your AI concept with a Proof of Concept, demonstrating technical and business viability.'
        },
        {
            title: 'Prototype Development & MVP Creation',
            description: 'We build a Minimum Viable Product to test your AI solution in real-world scenarios, gathering user feedback for further refinement.'
        },
        {
            title: 'AI Integration & Deployment',
            description: 'We ensure seamless integration of your AI solution into your infrastructure and deploy it for production use.'
        },
        {
            title: 'Optimization & Scaling',
            description: 'We continuously optimize and scale your AI solution based on real-world data, ensuring it remains effective as your business grows.'
        }
    ],
    technologyStackTitle: 'AI Technologies We Use',
    technologyStackDescription: 'We use a wide range of cutting-edge AI technologies to deliver high-performance solutions that meet your business needs.',
    technologyStack: [
        { category: 'AI Frameworks', items: ['TensorFlow', 'PyTorch', 'Keras', 'OpenAI'] },
        { category: 'Data Science & Analytics', items: ['Python', 'R', 'SQL', 'Jupyter'] },
        { category: 'Cloud Platforms', items: ['AWS', 'Google Cloud', 'Azure'] },
        { category: 'Machine Learning', items: ['Scikit-learn', 'XGBoost', 'LightGBM'] },
        { category: 'Data Engineering', items: ['Apache Spark', 'Kafka', 'Hadoop'] }
    ],
    caseStudiesTitle: 'Recent AI PoC & MVP Projects',
    caseStudiesDescription: 'We’ve helped clients across industries develop AI PoCs & MVPs that demonstrate business value and scalability.',
    caseStudies: [
        {
            title: 'AI Fraud Detection for Banking',
            client: 'A leading bank',
            results: [
                'Developed AI-powered fraud detection system that flagged 98% of fraudulent transactions.',
                'Enhanced security and reduced financial losses for the client.'
            ],
            technologies: ['TensorFlow', 'Python', 'AWS'],
            cta: 'Implement AI Fraud Detection in Your Business Today!'
        },
        {
            title: 'AI-Powered Customer Support Chatbot',
            client: 'An eCommerce giant',
            results: [
                'Built an AI chatbot that automated 75% of customer inquiries.',
                'Improved customer satisfaction and reduced support costs.'
            ],
            technologies: ['OpenAI', 'Node.js', 'AWS'],
            cta: 'Enhance Customer Engagement with AI Chatbots!'
        },
        {
            title: 'Predictive Maintenance for Manufacturing',
            client: 'A global manufacturer',
            results: [
                'Developed AI solution to predict equipment failures before they occurred.',
                'Reduced downtime by 40%, improving operational efficiency.'
            ],
            technologies: ['PyTorch', 'AWS', 'Python'],
            cta: 'Optimize Maintenance with AI Predictive Analytics!'
        }
    ],
    faqs: [
        // Add relevant FAQs here
    ]
},





    // SEO Services
    'search-engine-optimization': {
        title: 'Search Engine',
        titleSpan: 'Optimization',
        description: 'Improve your online visibility and drive more organic traffic to your website with our comprehensive SEO services.',
        bannerImage: '/images/services/seoBanner.svg',
        category: 'digital-marketing',
        categoryName: 'Digital Marketing',
        name: 'Search Engine Optimization',
        showCTA: true,
        introTitle: 'Boost Your Online',
        introTitleSpan: 'Visibility with SEO',
        introDescription: 'Search Engine Optimization (SEO) is essential for improving your website&#39;s visibility in search engine results and driving targeted organic traffic. Our expert team at Quick Growth Marketing uses proven strategies to help your business rank higher and attract more qualified leads.',
        introParagraph2: 'We combine technical expertise with content optimization and strategic link building to create a comprehensive SEO approach that delivers sustainable results. Our goal is to help your business achieve long-term growth through increased online visibility and improved search rankings.',
        introImage: '/images/services/seoIntro.svg',
        featuresTitle: 'Our SEO',
        featuresTitleSpan: 'Services',
        featuresDescription: 'We offer a comprehensive range of SEO services designed to improve your website&#39;s search engine rankings and drive more organic traffic.',
        features: [
            {
                title: 'Technical SEO',
                description: 'We optimize your website&#39;s technical aspects to improve crawlability, indexing, and overall performance in search engines.',
                icon: '/images/services/technical.svg'
            },
            {
                title: 'On-Page SEO',
                description: 'We optimize your content, meta tags, headings, and other on-page elements to improve relevance and keyword targeting.',
                icon: '/images/services/onpage.svg'
            },
            {
                title: 'Content Optimization',
                description: 'We create and optimize high-quality, relevant content that engages your audience and helps improve your search rankings.',
                icon: '/images/services/content.svg'
            },
            {
                title: 'Link Building',
                description: 'We implement strategic link building campaigns to increase your website&#39;s authority and improve search engine rankings.',
                icon: '/images/services/links.svg'
            },
            {
                title: 'Local SEO',
                description: 'We optimize your online presence to help your business appear in local search results and attract more local customers.',
                icon: '/images/services/local.svg'
            },
            {
                title: 'SEO Reporting',
                description: 'We provide detailed reports and analytics to track your SEO progress and demonstrate the value of our services.',
                icon: '/images/services/reporting.svg'
            }
        ],
        processTitle: 'Our SEO',
        processTitleSpan: 'Process',
        processes: [
            {
                title: 'SEO Audit',
                description: 'We conduct a comprehensive analysis of your website and current SEO performance to identify strengths, weaknesses, and opportunities.'
            },
            {
                title: 'Keyword Research',
                description: 'We identify the most relevant and valuable keywords for your business to target based on search volume, competition, and user intent.'
            },
            {
                title: 'Technical Optimization',
                description: 'We address technical issues that may be affecting your website&#39;s performance in search results, including site speed, mobile-friendliness, and crawlability.'
            },
            {
                title: 'Content Strategy',
                description: 'We develop a content strategy that targets your key keywords and addresses the needs and interests of your target audience.'
            },
            {
                title: 'Implementation',
                description: 'We implement the recommended optimizations and strategies to improve your website&#39;s search engine performance.'
            },
            {
                title: 'Monitoring & Refinement',
                description: 'We continuously monitor your SEO performance and make adjustments to your strategy to ensure optimal results.'
            }
        ],
        showcaseTitle: 'SEO Success',
        showcaseTitleSpan: 'Stories',
        showcaseItems: [
            {
                title: 'Local Service Provider',
                subtitle: '150% Increase in Organic Traffic',
                image: '/images/services/seoCase1.svg',
                link: '/case-studies/local-service-provider'
            },
            {
                title: 'E-commerce Retailer',
                subtitle: '200% Growth in Organic Revenue',
                image: '/images/services/seoCase2.svg',
                link: '/case-studies/ecommerce-retailer'
            },
            {
                title: 'B2B Technology Company',
                subtitle: '75% More Quality Leads',
                image: '/images/services/seoCase3.svg',
                link: '/case-studies/b2b-technology'
            }
        ],
        showTestimonials: true,
        faqs: [
            {
                question: 'How long does it take to see results from SEO?',
                answer: 'SEO is a long-term strategy, and results typically start to appear within 3-6 months. However, significant improvements in rankings and traffic may take 6-12 months, depending on your industry competitiveness, website condition, and the strategies implemented.'
            },
            {
                question: 'What makes your SEO services different?',
                answer: 'We take a comprehensive and transparent approach to SEO, focusing on sustainable, white-hat techniques that deliver long-term results. We customize our strategies based on your specific business goals and provide detailed reporting to track progress.'
            },
            {
                question: 'Do you guarantee first page rankings?',
                answer: 'We don&#39;t guarantee specific rankings as search engines constantly update their algorithms, and many factors influence rankings. However, we implement proven strategies to improve your visibility and track progress toward ranking goals.'
            },
            {
                question: 'How often will I receive SEO reports?',
                answer: 'We provide monthly comprehensive SEO reports detailing your website&#39;s performance, ranking changes, traffic growth, and other key metrics. We also schedule regular meetings to discuss results and strategy adjustments.'
            },
            {
                question: 'Do you offer local SEO services?',
                answer: 'Yes, we specialize in local SEO for businesses serving specific geographic areas. Our local SEO services include Google Business Profile optimization, local citation building, review management, and location-specific content creation.'
            }
        ]
    },


    //copywriting
    'copywriting': {
        title: 'Copywriting Services',
        titleSpan: 'Crafting Words That Convert and Engage',
        description: 'Your message is more than just words—it’s the voice of your brand. At QuickGrowth, we create persuasive and results-driven copy that connects with your audience and drives action.',
        bannerImage: '/images/services/copywriting-banner.svg',
        category: 'copywriting',
        categoryName: 'Content & Copywriting',
        name: 'Copywriting Services',
        showCTA: true,
        introTitle: 'Powerful Copy That Engages and Converts',
        introTitleSpan: 'Professional Copywriting Services',
        introDescription: 'QuickGrowth specializes in crafting compelling, SEO-optimized, and audience-centered content that drives real business results.',
        introImage: '/images/services/copywritevideo.svg',
        featuresTitle: 'Why Choose QuickGrowth for Copywriting?',
        featuresTitleSpan: 'Expert Copy That Works',
        featuresDescription: 'Our expert writers ensure your content is engaging, persuasive, and tailored for conversions.',
        features: [
            { title: 'Audience-Centered Messaging', description: 'We write for your customers, ensuring content resonates and converts.', icon: '/images/services/audience-focus.svg' },
            { title: 'SEO-Optimized Copy', description: 'Our writing is crafted to rank higher on search engines while staying engaging.', icon: '/images/services/seo-copy.svg' },
            { title: 'Proven Copywriting Frameworks', description: 'We use industry-standard frameworks like AIDA, PAS, and storytelling techniques.', icon: '/images/services/copy-frameworks.svg' },
            { title: 'Tailored for Your Brand', description: 'Every piece of content reflects your unique voice, values, and goals.', icon: '/images/services/brand-voice.svg' }
        ],
        servicesTitle: 'Copywriting Services We Offer',
        servicesDescription: 'We provide a range of content solutions to strengthen your brand and increase engagement.',
        services: [
            { title: 'Website Copywriting', description: 'Engaging homepage, service pages, and about pages with clear, persuasive messaging.', icon: '/images/services/web-copy.svg' },
            { title: 'Blog Writing', description: 'Well-researched, informative blogs that build brand authority and audience trust.', icon: '/images/services/blog-writing.svg' },
            { title: 'Article Writing', description: 'In-depth thought leadership content to position your business as an industry expert.', icon: '/images/services/article-writing.svg' },
            { title: 'Whitepapers & eBooks', description: 'Lead-generating digital assets professionally structured and designed.', icon: '/images/services/whitepaper.svg' },
            { title: 'Product Descriptions', description: 'Persuasive, SEO-friendly descriptions that drive eCommerce conversions.', icon: '/images/services/product-copy.svg' },
            { title: 'Marketing Copywriting', description: 'Sales brochures, ads, and landing pages that persuade and drive action.', icon: '/images/services/marketing-copy.svg' }
        ],
        processTitle: 'How It Works – Get Started in 3 Easy Steps',
        processSteps: [
            { title: 'Schedule a Call', description: 'Book a free 30-minute consultation to discuss your copywriting needs.', icon: '/images/services/schedule-call.svg' },
            { title: 'Share Your Goals', description: 'We’ll craft a custom strategy to align with your brand vision.', icon: '/images/services/share-goals.svg' },
            { title: 'Engage Your Audience', description: 'We deliver compelling, effective copy that resonates and converts.', icon: '/images/services/engage-audience.svg' }
        ],
        caseStudiesTitle: 'Success Stories: Real Results from Our Copywriting Services',
        caseStudies: [
            {
                title: 'Boosting Conversions for an E-Commerce Brand',
                client: 'Online Retailer',
                results: [
                    '30% increase in product page conversions.',
                    'Enhanced SEO copy, leading to a 50% rise in organic traffic.',
                    'Compelling storytelling improved customer engagement.'
                ],
                cta: 'Increase Your Sales with High-Impact Copy!'
            },
            {
                title: 'Thought Leadership Articles for a Tech Firm',
                client: 'B2B Software Company',
                results: [
                    '40% increase in inbound leads from authoritative content.',
                    'Published in major industry blogs, improving brand credibility.',
                    'SEO-optimized articles ranking on the first page of Google.'
                ],
                cta: 'Become an Industry Leader with Expert Content!'
            }
        ],
        ctaTitle: 'Get Started with QuickGrowth’s Copywriting Services',
        ctaDescription: 'Whether you need website content, blogs, or persuasive marketing copy, we create words that drive results.',
        ctaButton: 'Contact Us Today!'
    },
    
    

    // Social Media Marketing
    'social-media-marketing': {
        title: 'Social Media',
        titleSpan: 'Marketing',
        description: 'Engage your audience and build your brand with strategic social media marketing services.',
        bannerImage: '/images/services/socialMediaBanner.svg',
        category: 'digital-marketing',
        categoryName: 'Digital Marketing',
        name: 'Social Media Marketing',
        showCTA: true,
        introTitle: 'Strategic Social Media',
        introTitleSpan: 'Marketing Services',
        introDescription: 'Social media platforms offer unprecedented opportunities to connect with your audience, build brand awareness, and drive engagement. Our social media marketing services help businesses establish a strong online presence and achieve their marketing goals through strategic platform-specific campaigns.',
        introParagraph2: 'We develop tailored social media strategies that align with your business objectives and target audience preferences. From content creation and community management to paid advertising and performance analysis, we handle all aspects of your social media marketing to ensure maximum impact and ROI.',
        introImage: '/images/services/socialIntro.svg',
        featuresTitle: 'Our Social Media',
        featuresTitleSpan: 'Marketing Services',
        featuresDescription: 'We offer a comprehensive range of social media marketing services to help your business succeed across various platforms.',
        features: [
            {
                title: 'Strategy Development',
                description: 'We create customized social media strategies aligned with your business goals, target audience, and industry trends.',
                icon: '/images/services/strategy.svg'
            },
            {
                title: 'Content Creation',
                description: 'We develop engaging, platform-specific content that resonates with your audience and reflects your brand identity.',
                icon: '/images/services/content.svg'
            },
            {
                title: 'Community Management',
                description: 'We actively manage your social media communities, responding to comments, messages, and engagement opportunities.',
                icon: '/images/services/community.svg'
            },
            {
                title: 'Paid Advertising',
                description: 'We create and manage targeted paid social media campaigns to increase reach, engagement, and conversions.',
                icon: '/images/services/advertising.svg'
            },
            {
                title: 'Influencer Marketing',
                description: 'We identify and collaborate with relevant influencers to extend your reach and build credibility with your target audience.',
                icon: '/images/services/influencer.svg'
            },
            {
                title: 'Analytics & Reporting',
                description: 'We track performance metrics and provide regular reports to demonstrate the impact of your social media efforts.',
                icon: '/images/services/analytics.svg'
            }
        ],
        processTitle: 'Our Social Media Marketing',
        processTitleSpan: 'Process',
        processes: [
            {
                title: 'Discovery & Research',
                description: 'We conduct a thorough analysis of your business, competitors, target audience, and current social media presence to inform our strategy.'
            },
            {
                title: 'Strategy Development',
                description: 'We create a comprehensive social media strategy that includes platform selection, content themes, posting frequency, and campaign ideas.'
            },
            {
                title: 'Content Planning',
                description: 'We develop a content calendar outlining the topics, formats, and scheduling of your social media content across different platforms.'
            },
            {
                title: 'Implementation',
                description: 'We execute the strategy by creating and publishing content, managing communities, and running paid campaigns as required.'
            },
            {
                title: 'Monitoring & Engagement',
                description: 'We actively monitor your social media channels, engage with your audience, and handle customer inquiries and feedback.'
            },
            {
                title: 'Analysis & Optimization',
                description: 'We regularly analyze performance data and make adjustments to optimize your social media strategy for better results.'
            }
        ],
        showcaseTitle: 'Social Media',
        showcaseTitleSpan: 'Success Stories',
        showcaseItems: [
            {
                title: 'Lifestyle Brand',
                subtitle: '300% Increase in Engagement',
                image: '/images/services/socialCase1.svg',
                link: '/case-studies/lifestyle-brand'
            },
            {
                title: 'Local Restaurant',
                subtitle: '250% Growth in Following',
                image: '/images/services/socialCase2.svg',
                link: '/case-studies/local-restaurant'
            },
            {
                title: 'Fitness Company',
                subtitle: '400% Boost in Website Traffic',
                image: '/images/services/socialCase3.svg',
                link: '/case-studies/fitness-company'
            }
        ],
        showTestimonials: true,
        faqs: [
            {
                question: 'Which social media platforms do you work with?',
                answer: 'We work with all major social media platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, Pinterest, and YouTube. We recommend the most appropriate platforms based on your business goals, target audience, and industry.'
            },
            {
                question: 'How often will you post on my social media accounts?',
                answer: 'Posting frequency varies by platform and strategy, but typically ranges from 3-5 times per week for most platforms. We develop a custom posting schedule based on your target audience behavior and platform best practices.'
            },
            {
                question: 'Do you create the content for social media posts?',
                answer: 'Yes, our team of content creators develops professional, engaging content for your social media channels. This includes copywriting, graphic design, and video production as needed for different platforms and campaign objectives.'
            },
            {
                question: 'How do you measure social media success?',
                answer: 'We track various metrics including engagement rate, reach, follower growth, website traffic, leads, and conversions. We establish specific KPIs aligned with your business goals and provide regular reports on these metrics.'
            },
            {
                question: 'Do you offer social media advertising services?',
                answer: 'Yes, we offer comprehensive social media advertising services including strategy development, audience targeting, ad creation, campaign management, and performance optimization across all major social media platforms.'
            }
        ]
    },

    // Content Marketing
    'content-marketing': {
        title: 'Content',
        titleSpan: 'Marketing',
        description: 'Drive engagement and establish authority with strategic content marketing services.',
        bannerImage: '/images/services/contentBanner.svg',
        category: 'digital-marketing',
        categoryName: 'Digital Marketing',
        name: 'Content Marketing',
        showCTA: true,
        introTitle: 'Strategic Content',
        introTitleSpan: 'Marketing Services',
        introDescription: 'Content marketing is a powerful way to attract, engage, and convert your target audience by providing valuable, relevant information that addresses their needs and interests. Our content marketing services help businesses build authority, increase brand awareness, and drive meaningful engagement through strategic content creation and distribution.',
        introParagraph2: 'We develop comprehensive content strategies that align with your business goals and audience preferences. From blog posts and articles to videos, infographics, and social media content, we create compelling content that connects with your audience at every stage of the customer journey.',
        introImage: '/images/services/contentIntro.svg',
        featuresTitle: 'Our Content Marketing',
        featuresTitleSpan: 'Services',
        featuresDescription: 'We offer a range of content marketing services designed to help your business attract, engage, and convert your target audience.',
        features: [
            {
                title: 'Content Strategy',
                description: 'We develop comprehensive content strategies aligned with your business goals, target audience, and industry trends.',
                icon: '/images/services/strategy.svg'
            },
            {
                title: 'Blog Management',
                description: 'We create and manage high-quality blog content that provides value to your audience and supports your SEO efforts.',
                icon: '/images/services/blog.svg'
            },
            {
                title: 'Content Creation',
                description: 'We develop various content formats including articles, videos, infographics, case studies, and more to engage your audience.',
                icon: '/images/services/content.svg'
            },
            {
                title: 'Content Distribution',
                description: 'We implement strategic distribution plans to ensure your content reaches your target audience across relevant channels.',
                icon: '/images/services/distribution.svg'
            },
            {
                title: 'Email Marketing',
                description: 'We create engaging email campaigns that deliver valuable content directly to your audience&#39;s inbox.',
                icon: '/images/services/email.svg'
            },
            {
                title: 'Content Analytics',
                description: 'We track and analyze content performance to optimize your strategy and improve results over time.',
                icon: '/images/services/analytics.svg'
            }
        ],
        processTitle: 'Our Content Marketing',
        processTitleSpan: 'Process',
        processes: [
            {
                title: 'Content Audit',
                description: 'We assess your existing content and identify gaps, opportunities, and areas for improvement to inform our strategy.'
            },
            {
                title: 'Audience Research',
                description: 'We conduct in-depth research to understand your target audience&#39;s needs, preferences, pain points, and content consumption habits.'
            },
            {
                title: 'Strategy Development',
                description: 'We create a comprehensive content strategy that includes topics, formats, channels, and a publishing calendar.'
            },
            {
                title: 'Content Creation',
                description: 'Our team of writers, designers, and multimedia specialists creates high-quality content that aligns with your strategy and brand voice.'
            },
            {
                title: 'Distribution & Promotion',
                description: 'We distribute your content across appropriate channels and implement promotional tactics to maximize its reach and impact.'
            },
            {
                title: 'Performance Analysis',
                description: 'We continuously monitor content performance and provide detailed reports with insights and recommendations for optimization.'
            }
        ],
        showcaseTitle: 'Content Marketing',
        showcaseTitleSpan: 'Success Stories',
        showcaseItems: [
            {
                title: 'Financial Services Firm',
                subtitle: '200% Increase in Organic Traffic',
                image: '/images/services/contentCase1.svg',
                link: '/case-studies/financial-services'
            },
            {
                title: 'Healthcare Provider',
                subtitle: '175% More Lead Generation',
                image: '/images/services/contentCase2.svg',
                link: '/case-studies/healthcare-provider'
            },
            {
                title: 'SaaS Company',
                subtitle: '150% Higher Conversion Rate',
                image: '/images/services/contentCase3.svg',
                link: '/case-studies/saas-company'
            }
        ],
        showTestimonials: true,
        faqs: [
            {
                question: 'How often should new content be published?',
                answer: 'The ideal publishing frequency depends on your industry, audience, and resources. Generally, consistency is more important than frequency. We typically recommend publishing new blog content 2-4 times per month, with social media and email content distributed more frequently.'
            },
            {
                question: 'What types of content do you create?',
                answer: 'We create a wide range of content types including blog posts, articles, whitepapers, ebooks, case studies, infographics, videos, podcasts, social media content, email newsletters, and more. The specific mix depends on your audience preferences and business goals.'
            },
            {
                question: 'How do you measure content marketing success?',
                answer: 'We track various metrics including traffic, engagement, time on page, social shares, backlinks, lead generation, conversion rates, and revenue attribution. We establish specific KPIs aligned with your business goals and provide regular reports on these metrics.'
            },
            {
                question: 'Do you help with content optimization for SEO?',
                answer: 'Yes, we integrate SEO best practices into our content creation process. This includes keyword research, on-page optimization, internal linking, and other techniques to help your content rank well in search engine results.'
            },
            {
                question: 'Can you repurpose our existing content?',
                answer: 'Absolutely! Repurposing high-performing content into different formats is an efficient content marketing strategy. We can transform your existing content into new formats such as videos, infographics, social media posts, or podcast episodes to extend its reach and lifespan.'
            }
        ]
    },

    // Email Marketing
    'email-marketing': {
        title: 'Email',
        titleSpan: 'Marketing',
        description: 'Connect directly with your audience and drive conversions with strategic email marketing campaigns.',
        bannerImage: '/images/services/emailBanner.svg',
        category: 'digital-marketing',
        categoryName: 'Digital Marketing',
        name: 'Email Marketing',
        showCTA: true,
        introTitle: 'Strategic Email',
        introTitleSpan: 'Marketing Services',
        introDescription: 'Email marketing remains one of the most effective digital marketing channels, offering unparalleled ROI and direct access to your audience. Our email marketing services help businesses build meaningful relationships with subscribers and drive conversions through personalized, targeted campaigns.',
        introParagraph2: 'We develop comprehensive email marketing strategies that nurture leads, convert customers, and foster loyalty. From list management and segmentation to campaign creation and performance analysis, we handle all aspects of your email marketing to maximize engagement and results.',
        introImage: '/images/services/emailIntro.svg',
        featuresTitle: 'Our Email Marketing',
        featuresTitleSpan: 'Services',
        featuresDescription: 'We offer a range of email marketing services designed to help your business connect with your audience and achieve your marketing goals.',
        features: [
            {
                title: 'Strategy Development',
                description: 'We create comprehensive email marketing strategies aligned with your business goals, target audience, and sales funnel.',
                icon: '/images/services/strategy.svg'
            },
            {
                title: 'List Management',
                description: 'We help you build, clean, and segment your email list to improve deliverability and engagement.',
                icon: '/images/services/list.svg'
            },
            {
                title: 'Campaign Creation',
                description: 'We design and develop engaging email campaigns including newsletters, promotions, welcome sequences, and more.',
                icon: '/images/services/campaign.svg'
            },
            {
                title: 'Automation Setup',
                description: 'We create targeted automated email sequences that deliver the right message to the right person at the right time.',
                icon: '/images/services/automation.svg'
            },
            {
                title: 'A/B Testing',
                description: 'We conduct systematic testing of subject lines, content, and design elements to optimize email performance.',
                icon: '/images/services/testing.svg'
            },
            {
                title: 'Performance Analysis',
                description: 'We track key metrics and provide detailed reports to demonstrate the effectiveness of your email marketing efforts.',
                icon: '/images/services/analytics.svg'
            }
        ],
        processTitle: 'Our Email Marketing',
        processTitleSpan: 'Process',
        processes: [
            {
                title: 'Strategy Development',
                description: 'We create a comprehensive email marketing strategy based on your business goals, target audience, and industry best practices.'
            },
            {
                title: 'List Building & Segmentation',
                description: 'We help you grow your email list and segment subscribers based on demographics, behavior, and engagement level.'
            },
            {
                title: 'Content Planning',
                description: 'We develop a content calendar outlining the topics, themes, and scheduling of your email campaigns.'
            },
            {
                title: 'Campaign Creation',
                description: 'Our team designs and develops professional email campaigns with compelling copy, attractive design, and clear calls-to-action.'
            },
            {
                title: 'Testing & Optimization',
                description: 'We conduct thorough testing of all campaign elements and make data-driven improvements to maximize performance.'
            },
            {
                title: 'Analysis & Reporting',
                description: 'We analyze campaign results and provide detailed reports with insights and recommendations for future improvements.'
            }
        ],
        showcaseTitle: 'Email Marketing',
        showcaseTitleSpan: 'Success Stories',
        showcaseItems: [
            {
                title: 'Online Retailer',
                subtitle: '250% Increase in Email Revenue',
                image: '/images/services/emailCase1.svg',
                link: '/case-studies/online-retailer'
            },
            {
                title: 'Service Provider',
                subtitle: '40% Higher Open Rates',
                image: '/images/services/emailCase2.svg',
                link: '/case-studies/service-provider'
            },
            {
                title: 'Educational Institution',
                subtitle: '300% More Qualified Leads',
                image: '/images/services/emailCase3.svg',
                link: '/case-studies/educational-institution'
            }
        ],
        showTestimonials: true,
        faqs: [
            {
                question: 'What email marketing platforms do you work with?',
                answer: 'We work with all major email marketing platforms including Mailchimp, Constant Contact, Campaign Monitor, ActiveCampaign, HubSpot, Klaviyo, and more. We can help you choose the best platform for your needs or work with your existing system.'
            },
            {
                question: 'How often should I send emails to my list?',
                answer: 'The ideal frequency depends on your industry, audience preferences, and content quality. Generally, we recommend 2-4 emails per month for newsletters and educational content, with additional targeted campaigns as needed for promotions or announcements.'
            },
            {
                question: 'Can you help with email list building?',
                answer: 'Yes, we provide strategies and implementation support for growing your email list through lead magnets, opt-in forms, landing pages, and other ethical list-building tactics that comply with email marketing regulations.'
            },
            {
                question: 'How do you measure email marketing success?',
                answer: 'We track key metrics including open rates, click-through rates, conversion rates, revenue generated, list growth, and unsubscribe rates. We establish specific KPIs aligned with your business goals and provide regular reports on these metrics.'
            },
            {
                question: 'How do you ensure emails don&#39;t go to spam?',
                answer: 'We implement best practices for email deliverability including proper authentication (SPF, DKIM, DMARC), list hygiene, optimized content, responsive design, and compliance with anti-spam regulations to maximize inbox placement.'
            }
        ]
    },

    // PPC Advertising
    'paid-advertising': {
        title: 'Paid',
        titleSpan: 'Advertising',
        description: 'Drive targeted traffic and generate leads with strategic paid advertising campaigns.',
        bannerImage: '/images/services/ppcBanner.svg',
        category: 'digital-marketing',
        categoryName: 'Digital Marketing',
        name: 'Paid Advertising',
        showCTA: true,
        introTitle: 'Results-Driven Paid',
        introTitleSpan: 'Advertising Services',
        introDescription: 'Paid advertising offers immediate visibility and targeted reach to help you achieve your marketing objectives quickly. Our paid advertising services help businesses drive qualified traffic, generate leads, and increase conversions through strategic ad campaigns across search engines, social media, and display networks.',
        introParagraph2: 'We develop comprehensive paid advertising strategies that maximize your budget and deliver measurable results. From keyword research and audience targeting to ad creation and performance optimization, we handle all aspects of your paid advertising to ensure the highest possible return on investment.',
        introImage: '/images/services/ppcIntro.svg',
        featuresTitle: 'Our Paid Advertising',
        featuresTitleSpan: 'Services',
        featuresDescription: 'We offer a range of paid advertising services designed to help your business reach your target audience and achieve your marketing goals.',
        features: [
            {
                title: 'Google Ads Management',
                description: 'We create and manage targeted search, display, and video campaigns on the Google Ads platform to drive traffic and conversions.',
                icon: '/images/services/google.svg'
            },
            {
                title: 'Social Media Advertising',
                description: 'We develop strategic advertising campaigns across Facebook, Instagram, LinkedIn, Twitter, and other social platforms.',
                icon: '/images/services/social.svg'
            },
            {
                title: 'Remarketing Campaigns',
                description: 'We implement remarketing strategies to re-engage visitors who have previously interacted with your website or ads.',
                icon: '/images/services/remarketing.svg'
            },
            {
                title: 'Shopping Campaigns',
                description: 'We create and optimize product listings ads to showcase your products directly in search results and drive e-commerce sales.',
                icon: '/images/services/shopping.svg'
            },
            {
                title: 'Landing Page Optimization',
                description: 'We design and optimize high-converting landing pages specifically tailored to your paid advertising campaigns.',
                icon: '/images/services/landing.svg'
            },
            {
                title: 'Performance Tracking',
                description: 'We implement comprehensive tracking systems and provide detailed reports on ad performance and ROI.',
                icon: '/images/services/tracking.svg'
            }
        ],
        processTitle: 'Our Paid Advertising',
        processTitleSpan: 'Process',
        processes: [
            {
                title: 'Research & Planning',
                description: 'We conduct thorough research on your industry, competitors, target audience, and keywords to inform our advertising strategy.'
            },
            {
                title: 'Campaign Structure',
                description: 'We develop a strategic campaign structure with appropriate ad groups and targeting parameters to maximize performance.'
            },
            {
                title: 'Ad Creation',
                description: 'Our team creates compelling ad copy, visuals, and extensions that engage your target audience and drive action.'
            },
            {
                title: 'Landing Page Development',
                description: 'We design and develop optimized landing pages that align with your ad messaging and maximize conversion rates.'
            },
            {
                title: 'Launch & Monitoring',
                description: 'We launch your campaigns and continuously monitor performance, making real-time adjustments to optimize results.'
            },
            {
                title: 'Analysis & Optimization',
                description: 'We analyze campaign data and implement strategic optimizations to improve performance and maximize your ROI.'
            }
        ],
        showcaseTitle: 'Paid Advertising',
        showcaseTitleSpan: 'Success Stories',
        showcaseItems: [
            {
                title: 'Home Services Company',
                subtitle: '400% Increase in Qualified Leads',
                image: '/images/services/ppcCase1.svg',
                link: '/case-studies/home-services'
            },
            {
                title: 'E-commerce Store',
                subtitle: '300% ROAS Improvement',
                image: '/images/services/ppcCase2.svg',
                link: '/case-studies/ecommerce-store'
            },
            {
                title: 'B2B Software Company',
                subtitle: '50% Lower Cost Per Acquisition',
                image: '/images/services/ppcCase3.svg',
                link: '/case-studies/b2b-software'
            }
        ],
        showTestimonials: true,
        faqs: [
            {
                question: 'What platforms do you advertise on?',
                answer: 'We manage advertising campaigns across all major platforms including Google Ads, Microsoft Ads, Facebook, Instagram, LinkedIn, Twitter, Pinterest, TikTok, and programmatic display networks. We recommend the most appropriate platforms based on your target audience and business goals.'
            },
            {
                question: 'What budget do I need for paid advertising?',
                answer: 'Minimum recommended budgets vary by platform and industry competitiveness. We work with businesses of all sizes and can develop strategies that maximize results within your available budget, whether you&#39;re investing $1,000 or $100,000 per month.'
            },
            {
                question: 'How long does it take to see results from paid advertising?',
                answer: 'Unlike SEO, paid advertising can generate immediate visibility and traffic. However, optimization for maximum performance typically takes 2-3 months as we gather data, refine targeting, improve quality scores, and optimize bidding strategies.'
            },
            {
                question: 'How do you measure the success of paid advertising campaigns?',
                answer: 'We track a variety of metrics including impressions, clicks, click-through rates, conversions, cost per conversion, return on ad spend (ROAS), and overall ROI. We establish specific KPIs aligned with your business goals and provide regular reports on these metrics.'
            },
            {
                question: 'Can you work with my existing paid advertising campaigns?',
                answer: 'Yes, we can take over management of your existing campaigns. We&#39;ll begin with a comprehensive audit to identify strengths, weaknesses, and opportunities for improvement, then implement strategic optimizations to enhance performance.'
            }
        ]
    },

    // Analytics & Reporting
    'analytics-reporting': {
        title: 'Analytics &',
        titleSpan: 'Reporting',
        description: 'Gain valuable insights into your digital performance with comprehensive analytics and reporting services.',
        bannerImage: '/images/services/analyticsBanner.svg',
        category: 'digital-marketing',
        categoryName: 'Digital Marketing',
        name: 'Analytics & Reporting',
        showCTA: true,
        introTitle: 'Data-Driven',
        introTitleSpan: 'Decision Making',
        introDescription: 'Effective analytics and reporting are essential for understanding the performance of your digital marketing efforts and making informed decisions. Our analytics and reporting services help businesses transform raw data into actionable insights that drive strategic improvements and business growth.',
        introParagraph2: 'We implement comprehensive tracking systems, analyze performance data, and provide clear, insightful reports that highlight key metrics, trends, and opportunities. Our goal is to help you understand what&#39;s working, what&#39;s not, and how to optimize your digital strategy for better results.',
        introImage: '/images/services/analyticsIntro.svg',
        featuresTitle: 'Our Analytics &',
        featuresTitleSpan: 'Reporting Services',
        featuresDescription: 'We offer a range of analytics and reporting services designed to help your business measure performance and make data-driven decisions.',
        features: [
            {
                title: 'Analytics Setup',
                description: 'We implement and configure analytics tools to track website traffic, user behavior, conversions, and other key metrics.',
                icon: '/images/services/setup.svg'
            },
            {
                title: 'Custom Dashboards',
                description: 'We create personalized dashboards that display the most relevant metrics for your business in an easy-to-understand format.',
                icon: '/images/services/dashboard.svg'
            },
            {
                title: 'Performance Reporting',
                description: 'We provide regular reports on website and marketing performance, with clear explanations and strategic recommendations.',
                icon: '/images/services/reporting.svg'
            },
            {
                title: 'Conversion Tracking',
                description: 'We set up comprehensive conversion tracking to measure the effectiveness of your marketing efforts in driving desired actions.',
                icon: '/images/services/conversion.svg'
            },
            {
                title: 'User Behavior Analysis',
                description: 'We analyze how users interact with your website to identify opportunities for improving user experience and conversion rates.',
                icon: '/images/services/behavior.svg'
            },
            {
                title: 'ROI Analysis',
                description: 'We evaluate the return on investment for your marketing activities to help you allocate resources more effectively.',
                icon: '/images/services/roi.svg'
            }
        ],
        processTitle: 'Our Analytics &',
        processTitleSpan: 'Reporting Process',
        processes: [
            {
                title: 'Requirements Gathering',
                description: 'We work closely with you to understand your business goals, KPIs, and reporting needs to ensure our analytics setup aligns with your objectives.'
            },
            {
                title: 'Implementation',
                description: 'We implement and configure analytics tools, set up goal tracking, and ensure all data is being collected accurately and comprehensively.'
            },
            {
                title: 'Data Collection',
                description: 'We gather data from various sources, including your website, marketing campaigns, social media, and other digital channels.'
            },
            {
                title: 'Analysis',
                description: 'Our analysts examine the data to identify patterns, trends, and insights that are relevant to your business objectives.'
            },
            {
                title: 'Reporting',
                description: 'We create clear, concise reports that present the most important findings and metrics in an easy-to-understand format.'
            },
            {
                title: 'Strategic Recommendations',
                description: 'Based on our analysis, we provide actionable recommendations to improve performance and achieve better results.'
            }
        ],
        showcaseTitle: 'Analytics',
        showcaseTitleSpan: 'Success Stories',
        showcaseItems: [
            {
                title: 'Multi-Channel Retailer',
                subtitle: '30% Increase in Conversion Rate',
                image: '/images/services/analyticsCase1.svg',
                link: '/case-studies/multi-channel-retailer'
            },
            {
                title: 'Professional Services Firm',
                subtitle: '50% Improvement in Lead Quality',
                image: '/images/services/analyticsCase2.svg',
                link: '/case-studies/professional-services'
            },
            {
                title: 'Travel Company',
                subtitle: '40% Reduction in Customer Acquisition Cost',
                image: '/images/services/analyticsCase3.svg',
                link: '/case-studies/travel-company'
            }
        ],
        showTestimonials: true,
        faqs: [
            {
                question: 'What analytics tools do you work with?',
                answer: 'We work with a variety of analytics tools including Google Analytics, Adobe Analytics, HubSpot, Hotjar, Mixpanel, and other specialized platforms. We can recommend the most appropriate tools for your needs or work with your existing setup.'
            },
            {
                question: 'How often will I receive reports?',
                answer: 'We typically provide monthly comprehensive reports, but can adjust the frequency based on your preferences. We also set up real-time dashboards that allow you to check performance metrics at any time.'
            },
            {
                question: 'Can you help fix tracking issues on my website?',
                answer: 'Yes, we can audit your current analytics implementation, identify any tracking issues, and implement fixes to ensure you&#39;re collecting accurate data. This includes resolving common problems like duplicate tracking, missing conversions, and data attribution issues.'
            },
            {
                question: 'What metrics do you track and report on?',
                answer: 'We track a wide range of metrics tailored to your specific goals and marketing channels. These typically include website traffic, user behavior, conversion rates, engagement metrics, campaign performance, and revenue metrics. We focus on the most relevant KPIs for your business.'
            },
            {
                question: 'How do you present complex data in an understandable way?',
                answer: 'We transform complex data into clear, visual reports with straightforward explanations. We use charts, graphs, and comparison metrics to highlight trends and important insights. We also provide context and explanations to help you understand what the data means for your business.'
            }
        ]
    }
};



export default serviceConfig;