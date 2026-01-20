
import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const PortfolioPage: React.FC = () => {
    const portfolioItems = [
        {
            title: "Book My Festive",
            description: "A comprehensive platform for festive event bookings and management.",
            link: "https://bookmyfestive.com/",
            image: "/Public/bookmyfestive.webp",
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "Customine",
            description: "Innovative custom solutions tailored for unique business needs.",
            link: "http://customine.in/",
            image: "/Public/customine.webp",
            color: "from-blue-500 to-cyan-500"
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-20 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tech-blue/10 rounded-full blur-[80px] -z-10"></div>
                    <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-app-slate to-tech-blue tracking-tighter mb-6">
                        OUR PORTFOLIO
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Explore our latest work and seeing how we bring digital visions to life.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {portfolioItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white rounded-3xl p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-tech-blue/10 border border-slate-100 hover:border-tech-blue/30 overflow-hidden flex flex-col"
                        >
                            {/* Visual Area */}
                            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-700">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay Effect */}
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="px-2 pb-2">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-2xl font-bold text-app-slate leading-tight group-hover:text-tech-blue transition-colors">
                                        {item.title}
                                    </h3>
                                    <span className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-tech-blue group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight size={20} />
                                    </span>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
