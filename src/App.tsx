import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Wrench, Droplet, Shield, Clock, Star, Menu, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = "27761234567";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20need%20plumbing%20assistance`;

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="mailto:info@vredenburgplumbing.co.za" className="flex items-center hover:text-blue-200 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              info@vredenburgplumbing.co.za
            </a>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Vredenburg, Western Cape
            </span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            24/7 Emergency Service
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Droplet className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-blue-900">
                  Vredenburg<br/><span className="text-blue-600">Plumbing Solutions</span>
                </span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#testimonials" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Reviews</a>
              <a href="#gallery" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Gallery</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold flex items-center transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                +27 76 123 4567
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-blue-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-slate-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-md">Services</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-md">About</a>
              <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-md">Reviews</a>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-md">Gallery</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-blue-600 font-bold hover:bg-blue-50 rounded-md"
              >
                Call: +27 76 123 4567
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Plumber at work" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Licensed & Insured Plumbers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Reliable Plumbing Services in <span className="text-blue-400">Vredenburg</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              Fast, professional, and affordable plumbing solutions for your home or business. From emergency repairs to full installations, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
              >
                Book Now on WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="#services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all"
              >
                Our Services
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-300">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" />
                24/7 Emergency
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" />
                Free Quotes
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" />
                Guaranteed Work
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Expert Plumbing Services</h3>
            <p className="text-lg text-slate-600">
              We provide a comprehensive range of plumbing services to keep your water flowing smoothly and safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Emergency Plumbing",
                desc: "Burst pipes or severe leaks? We're available 24/7 for immediate response.",
                icon: <Clock className="w-8 h-8 text-blue-600" />
              },
              {
                title: "Pipe Repairs",
                desc: "Expert detection and repair of leaking or damaged pipes to prevent water damage.",
                icon: <Wrench className="w-8 h-8 text-blue-600" />
              },
              {
                title: "Blocked Drains",
                desc: "Fast and effective clearing of blocked drains, toilets, and sinks.",
                icon: <Droplet className="w-8 h-8 text-blue-600" />
              },
              {
                title: "Water Installations",
                desc: "Professional installation of geysers, water tanks, and plumbing fixtures.",
                icon: <Shield className="w-8 h-8 text-blue-600" />
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors"
                >
                  Book Service <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1607472586893-edb57cb5b28f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Friendly plumber" 
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-4xl font-bold mb-1">15+</div>
                  <div className="text-blue-100 font-medium">Years Experience</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Your Trusted Local Plumbers in Vredenburg</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Vredenburg Plumbing Solutions, we pride ourselves on delivering top-tier plumbing services built on trust, reliability, and unmatched expertise. As a locally owned business, we understand the unique needs of our community.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether it's a minor leak, a major installation, or a midnight emergency, our team of certified professionals is dedicated to providing swift, effective, and transparent solutions. We don't just fix pipes; we build lasting relationships with our clients through honest work and fair pricing.
              </p>
              
              <ul className="space-y-4 mb-8">
                {['Fully Licensed & Insured', 'Transparent Upfront Pricing', 'Clean & Respectful Technicians', '100% Satisfaction Guarantee'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center transition-all"
              >
                Contact Our Team
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-300 font-semibold tracking-wide uppercase text-sm mb-2">Client Reviews</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                location: "Vredenburg",
                text: "Incredible service! I had a burst pipe at 2 AM and they were here within 30 minutes. Fixed the issue quickly and the price was very reasonable for an emergency callout."
              },
              {
                name: "David van der Merwe",
                location: "Saldanha",
                text: "Highly professional team. They installed a new solar geyser for us. The workmanship is neat, and they cleaned up perfectly after themselves. Highly recommended."
              },
              {
                name: "Michelle Botha",
                location: "Vredenburg",
                text: "Finally, a plumber who actually shows up on time! They unblocked our main drain efficiently and gave us good advice on maintenance. Will definitely use them again."
              }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-blue-800/50 p-8 rounded-2xl border border-blue-700/50"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-blue-100 mb-6 leading-relaxed italic">"{review.text}"</p>
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-blue-300 text-sm">{review.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recent Projects</h3>
            <p className="text-lg text-slate-600">
              A glimpse into the quality plumbing work we deliver across Vredenburg.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1521207418485-99c71172090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1607472586893-edb57cb5b28f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="aspect-square rounded-xl overflow-hidden group relative"
              >
                <img 
                  src={img} 
                  alt={`Plumbing work ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors"
            >
              Need similar work done? Contact us <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="bg-blue-50 py-20 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to fix your plumbing issues?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Don't let a small leak turn into a major disaster. Our team is ready to help you right now.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg shadow-green-500/30 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp Us Now
            </a>
            <a 
              href="mailto:info@vredenburgplumbing.co.za"
              className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-sm w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Droplet className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">
                  Vredenburg Plumbing
                </span>
              </div>
              <p className="mb-4 text-sm leading-relaxed">
                Professional, reliable, and fast plumbing services for residential and commercial properties in Vredenburg and surrounding areas.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Reviews</a></li>
                <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span>Vredenburg, Western Cape<br/>South Africa</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span>+27 76 123 4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span>info@vredenburgplumbing.co.za</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Vredenburg Plumbing Solutions. All rights reserved.</p>
            <p className="mt-2 md:mt-0 text-slate-500">
              SEO Keywords: Plumber Vredenburg, Emergency plumbing Vredenburg, Blocked drains Vredenburg
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/40 hover:bg-green-600 hover:scale-110 transition-all z-50 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
