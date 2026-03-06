import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-xl border-t border-white/5 text-white/90 pt-20 pb-10 relative overflow-hidden">
      <div className="liquid-blob w-[400px] h-[400px] bg-brand-primary -bottom-48 -left-24 opacity-5" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-display font-bold text-white mb-6 block group">
              ThreeFold<span className="text-brand-primary group-hover:text-brand-secondary transition-colors">Hub</span><span className="text-brand-accent">.</span>
            </Link>
            <p className="max-w-sm text-white/60 leading-relaxed mb-8">
              Handcrafting premium digital experiences for local businesses that value quality, 
              performance, and professional design with a liquid glass aesthetic.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-brand-primary hover:text-white transition-all duration-300 border border-white/5 hover:border-white/20">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-brand-primary hover:text-white transition-all duration-300 border border-white/5 hover:border-white/20">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-brand-primary hover:text-white transition-all duration-300 border border-white/5 hover:border-white/20">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/" className="hover:text-brand-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Home</Link></li>
              <li><a href="#work" className="hover:text-brand-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Work</a></li>
              <li><Link to="/services" className="hover:text-brand-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Services</Link></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-primary" />
                <span>hello@threefoldhub.com</span>
              </li>
              <li>+1 (555) 123-4567</li>
              <li>123 Design Street<br />Creative City, ST 12345</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} ThreeFoldHub. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
