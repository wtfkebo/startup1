import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Shield, Globe, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: '5,999',
    description: 'Perfect for small local businesses starting their digital journey.',
    features: [
      'Custom 5-Page Website',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      '1 Month Support',
      'SSL Certificate'
    ],
    icon: Globe,
    popular: false
  },
  {
    name: 'Professional',
    price: '12,999',
    description: 'The ideal choice for growing businesses that need more impact.',
    features: [
      'Custom 10-Page Website',
      'Advanced SEO Strategy',
      'Content Management System',
      'Google My Business Sync',
      '3 Months Support',
      'Speed Optimization',
      'Custom Animations'
    ],
    icon: Zap,
    popular: true
  },
  {
    name: 'Enterprise',
    price: '29,999',
    description: 'A comprehensive digital powerhouse for established local brands.',
    features: [
      'Unlimited Pages',
      'Full E-commerce Integration',
      'Priority 24/7 Support',
      'Monthly Performance Reports',
      'Advanced Security Hardening',
      'Professional Copywriting',
      'Brand Identity Design'
    ],
    icon: Shield,
    popular: false
  },
  {
    name: 'Custom',
    price: 'Bespoke',
    description: 'Tailored solutions for unique business requirements and complex projects.',
    features: [
      'Everything in Enterprise',
      'Custom API Integrations',
      'Dedicated Project Manager',
      'Advanced Data Analytics',
      'White-label Solutions',
      'Ongoing Strategic Consulting'
    ],
    icon: Star,
    popular: false
  }
];

export default function Services() {
  return (
    <main className="pt-40 pb-20 bg-studio-bg relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="liquid-blob w-[600px] h-[600px] bg-brand-primary -top-48 -right-24 opacity-10" />
      <div className="liquid-blob w-[400px] h-[400px] bg-brand-secondary bottom-0 -left-24 opacity-10" style={{ animationDelay: '-3s' }} />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 glass-pill text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
          >
            Pricing & Plans
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 text-studio-ink"
          >
            Invest in your <span className="text-gradient italic">Digital Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-studio-ink/60 leading-relaxed"
          >
            Transparent pricing for premium web design. No hidden fees, just high-quality 
            craftsmanship tailored to your business needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="relative p-8 rounded-[2.5rem] transition-all duration-500 group liquid-glass hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 bg-brand-primary/10 text-brand-primary">
                <tier.icon size={28} />
              </div>

              <h3 className="text-3xl font-display font-bold mb-4 text-studio-ink">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4 text-studio-ink">
                <span className="text-4xl font-display font-bold">{tier.price === 'Bespoke' ? '' : '$'}{tier.price}</span>
                {tier.price !== 'Bespoke' && <span className="text-sm opacity-60">/ project</span>}
              </div>
              
              <p className="text-sm opacity-70 leading-relaxed text-studio-ink/70">
                {tier.description}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </main>
  );
}
