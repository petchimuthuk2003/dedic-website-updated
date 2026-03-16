
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO, Tech Corp',
    content: 'Dedic Infotech transformed our digital presence with their innovative solutions. Their team delivered beyond our expectations.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Product Manager, StartupXYZ',
    content: 'Working with Dedic was a game-changer. They understood our vision and brought it to life with exceptional quality.',
    rating: 5
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'CTO, Digital Solutions',
    content: 'Professional, reliable, and highly skilled. Dedic Infotech is our go-to partner for all software development needs.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-spacing relative bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center gap-8 md:gap-16 mb-10 md:mb-16">
          <div className="max-w-3xl">
            <span className="text-tech-blue font-black text-xs uppercase tracking-[0.4em] mb-8 block">What Our Clients Say</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-app-slate tracking-tighter leading-tight">
              Clients Testimonial
            </h2>
          </div>
        </div>

        {/* Mobile View with Slider */}
        <div className="md:hidden block relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col gap-8 h-full mx-2">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-tech-blue text-tech-blue" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="mt-auto">
                      <h4 className="text-xl font-bold text-app-slate">{testimonial.name}</h4>
                      <p className="text-slate-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-tech-blue hover:border-tech-blue transition-colors bg-white shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-tech-blue w-6' : 'bg-slate-300'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-tech-blue hover:border-tech-blue transition-colors bg-white shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-tech-blue transition-all shadow-sm flex flex-col gap-8"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-tech-blue text-tech-blue" />
                ))}
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="text-xl font-bold text-app-slate">{testimonial.name}</h4>
                <p className="text-slate-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
