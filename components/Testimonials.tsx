
import React from 'react';
import { Star } from 'lucide-react';

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
  return (
    <section className="section-spacing relative bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center gap-16 mb-16">
          <div className="max-w-3xl">
            <span className="text-tech-blue font-black text-xs uppercase tracking-[0.4em] mb-8 block">What Our Clients Say</span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-app-slate tracking-tighter leading-tight">
              Clients Testimonial
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
