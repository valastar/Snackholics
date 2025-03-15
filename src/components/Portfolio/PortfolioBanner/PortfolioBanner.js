import React from 'react'

function PortfolioBanner() {
    return (
        <div className="relative pt-20 w-full overflow-hidden">
            {/* Hero Banner */}
            <div className="w-full transition-all duration-500 transform hover:scale-[1.01]">
                <img 
                    src="/images/portfolio/portfolio.svg" 
                    alt="Portfolio Banner" 
                    className="w-full h-auto object-cover"
                />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>
    )
}

export default PortfolioBanner