import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageSquare, Phone, Mail, Globe, Layout, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const projects = [
  {
    id: 'royal-cuts',
    title: 'Royal Cuts Barbershop',
    description: 'A dark, luxury digital experience for a premium grooming lounge.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    tags: ['Luxury', 'Booking System', 'Dark Mode'],
    color: '#C7A46C'
  },
  {
    id: 'iron-forge',
    title: 'Iron Forge Fitness',
    description: 'High-energy, performance-driven website for a modern fitness community.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    tags: ['Fitness', 'Membership', 'Dynamic'],
    color: '#1A1A1A'
  },
  {
    id: 'bean-street',
    title: 'Bean Street Café',
    description: 'Warm, inviting, and cozy digital home for a local coffee roastery.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800',
    tags: ['Hospitality', 'Menu', 'Cozy'],
    color: '#8B5E3C'
  }
];

const services = [
  {
    title: 'Business Websites',
    description: 'Clean, modern websites tailored to your local business needs and goals.',
    icon: Globe
  },
  {
    title: 'Website Redesign',
    description: 'Modernize your outdated website with a fresh, professional look and feel.',
    icon: RefreshCw
  },
  {
    title: 'Landing Pages',
    description: 'High-converting pages designed specifically for your marketing promotions.',
    icon: Layout
  }
];

const process = [
  { step: '01', title: 'Discovery', description: 'We dive deep into your business goals, target audience, and unique value proposition.' },
  { step: '02', title: 'Design', description: 'Crafting a bespoke visual identity and layout that resonates with your brand.' },
  { step: '03', title: 'Development', description: 'Building a lightning-fast, responsive website using modern web technologies.' },
  { step: '04', title: 'Launch', description: 'Deploying your site with precision and ensuring everything is optimized for success.' }
];

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Owner, Royal Cuts',
    content: 'ThreeFoldHub transformed our online presence. We saw a 40% increase in bookings within the first month of launching our new site.',
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Marcus Thorne',
    role: 'Founder, Iron Forge',
    content: 'The professionalism and attention to detail were unmatched. Our members love the new class schedule and trainer profiles.',
    image: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    name: 'Elena Rossi',
    role: 'Manager, Bean Street',
    content: 'They captured the cozy vibe of our cafe perfectly. The digital menu is so easy for our customers to navigate on their phones.',
    image: 'https://i.pravatar.cc/150?u=elena'
  }
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex items-center pt-32 pb-20 bg-studio-bg relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="liquid-blob w-[500px] h-[500px] bg-brand-primary -top-48 -left-24" />
        <div className="liquid-blob w-[400px] h-[400px] bg-brand-secondary bottom-0 -right-24" style={{ animationDelay: '-2s' }} />
        <div className="liquid-blob w-[300px] h-[300px] bg-brand-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" style={{ animationDelay: '-4s' }} />

        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 glass-pill text-xs font-bold tracking-widest uppercase text-brand-primary mb-6">
              Premium Web Design Studio
            </div>
            <h1 className="text-6xl md:text-8xl font-display leading-[1.1] mb-8 text-studio-ink">
              Crafting <span className="text-gradient italic">Handcrafted</span> Digital Experiences
            </h1>
            <p className="text-xl md:text-2xl text-studio-ink/70 mb-12 max-w-lg leading-relaxed font-light">
              We build high-performance, liquid-glass websites for modern businesses that want to stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary flex items-center justify-center group !px-10 !py-5"
              >
                Start a Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 liquid-glass p-4 overflow-hidden shadow-2xl transition-all duration-1000 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1000" 
                alt="Premium Web Design"
                className="w-full h-auto rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Abstract Shapes */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-48 h-48 border border-brand-primary/20 rounded-full -z-10 backdrop-blur-sm"
            />
            <motion.div 
              animate={{ x: [0, 20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-primary/5 rounded-3xl -z-10 blur-sm border border-white/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="section-padding bg-studio-bg">
        <div className="container-custom">
          <Reveal width="100%">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-brand-primary font-semibold uppercase tracking-widest text-xs mb-4 block">Our Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-display text-studio-ink">Selected Work</h2>
              </div>
              <p className="text-studio-ink/60 max-w-md">
                A collection of digital experiences we've crafted for businesses that care about their brand.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <Link to={`/project/${project.id}`} className="block liquid-glass p-4">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-2xl font-display mb-2 group-hover:text-brand-primary transition-colors text-studio-ink">{project.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-studio-bg">
        <div className="container-custom">
          <Reveal width="100%">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-brand-primary font-semibold uppercase tracking-widest text-xs mb-4 block">Services</span>
              <h2 className="text-4xl md:text-5xl font-display mb-6 text-studio-ink">What We Offer</h2>
              <p className="text-studio-ink/60">
                We provide comprehensive digital solutions to help your business thrive in the modern landscape.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="liquid-glass p-10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-display mb-2 text-studio-ink">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section-padding bg-brand-primary relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-tight">
              Ready to <span className="text-white/60 italic">elevate</span> your business online?
            </h2>
            <button className="px-12 py-5 bg-white text-brand-primary rounded-2xl font-bold text-lg hover:bg-brand-secondary hover:text-white transition-all duration-300 shadow-2xl shadow-black/20">
              Start Your Project
            </button>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-studio-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-brand-primary font-semibold uppercase tracking-widest text-xs mb-4 block">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-display mb-8 text-studio-ink">Let's build something great together.</h2>
              <p className="text-studio-ink/60 text-lg mb-12 leading-relaxed">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-studio-ink/40 font-bold mb-1">Email Us</p>
                    <p className="text-lg font-semibold text-studio-ink">hello@lumina.studio</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-studio-ink/40 font-bold mb-1">Call Us</p>
                    <p className="text-lg font-semibold text-studio-ink">+1 (555) 123-4567</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/15551234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-emerald-500 text-white px-8 py-4 rounded-2xl hover:bg-emerald-600 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-emerald-500/20 w-full sm:w-auto justify-center"
                >
                  <MessageSquare size={20} />
                  <span className="font-bold">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="liquid-glass p-10"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-studio-ink/60">Name</label>
                    <input type="text" className="w-full bg-studio-ink/5 text-studio-ink border border-studio-ink/10 px-4 py-3 rounded-xl focus:outline-none focus:border-brand-primary transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-studio-ink/60">Email</label>
                    <input type="email" className="w-full bg-studio-ink/5 text-studio-ink border border-studio-ink/10 px-4 py-3 rounded-xl focus:outline-none focus:border-brand-primary transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-studio-ink/60">Business Name</label>
                  <input type="text" className="w-full bg-studio-ink/5 text-studio-ink border border-studio-ink/10 px-4 py-3 rounded-xl focus:outline-none focus:border-brand-primary transition-colors" placeholder="Your Local Business" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-studio-ink/60">Message</label>
                  <textarea rows={4} className="w-full bg-studio-ink/5 text-studio-ink border border-studio-ink/10 px-4 py-3 rounded-xl focus:outline-none focus:border-brand-primary transition-colors" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="w-full bg-brand-primary text-white py-5 rounded-xl font-bold hover:bg-brand-secondary transition-all duration-300 shadow-lg shadow-brand-primary/20">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
