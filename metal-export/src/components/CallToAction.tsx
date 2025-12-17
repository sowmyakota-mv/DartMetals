import React from 'react';
import { Mail, Phone, MessageCircle, ArrowRight, Shield, Package, Globe } from 'lucide-react';

const CallToAction: React.FC = () => {
  
  // Contact data with clickable links
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Quick Response",
      details: "info@metalexportpro.com",
      note: "Send requirements for quotation",
      link: "mailto:info@metalexportpro.com?subject=Metal Export Inquiry&body=Hello, I would like to inquire about your metal export services.",
      bgColor: "bg-green-600/30",
      textColor: "text-green-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      description: "24/7 Support",
      details: "+44 20 1234 5678",
      note: "Office hours: Mon-Fri 9AM-6PM",
      link: "tel:+442012345678",
      bgColor: "bg-teal-600/30",
      textColor: "text-teal-400"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Instant Chat",
      details: "+44 7777 123456",
      note: "Business inquiries & quotes",
      link: "https://wa.me/447777123456",
      bgColor: "bg-emerald-600/30",
      textColor: "text-emerald-400"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content with 80% Left, 20% Right Layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-12">
          
          {/* Left Side - Content & Details (80%) */}
          <div className="lg:col-span-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              
              {/* Contact Info Cards - Clickable */}
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.link}
                  target={method.title === "WhatsApp" ? "_blank" : "_self"}
                  rel={method.title === "WhatsApp" ? "noopener noreferrer" : ""}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:border-green-400/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center mr-4 ${method.textColor} group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{method.title}</div>
                      <div className="text-green-200 text-sm">{method.description}</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold group-hover:text-green-300 transition-colors">
                    {method.details}
                  </div>
                  <div className="text-white text-sm mt-2">{method.note}</div>
                  <div className="mt-4 flex items-center text-green-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Click to {method.title === "Email" ? "send email" : method.title === "Phone" ? "call now" : "chat on WhatsApp"}
                  </div>
                </a>
              ))}
              
            </div>

            {/* Detailed Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Start Your Metal Export Journey
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 text-green-300">Quality Assured</div>
                    <div className="text-green-200 text-sm">Certified materials with testing reports</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-teal-600/20 rounded-lg flex items-center justify-center mr-4">
                    <Package className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 text-teal-300">Complete Logistics</div>
                    <div className="text-green-200 text-sm">Door-to-door shipping worldwide</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 text-emerald-300">Global Reach</div>
                    <div className="text-green-200 text-sm">Exporting to 30+ countries</div>
                  </div>
                </div>
              </div>
              
              <p className="text-green-100 text-lg">
                Get premium quality ferrous and non-ferrous metals with complete export solutions. 
                Our team handles everything from sourcing to delivery.
              </p>
            </div>
          </div>

          {/* Right Side - Button (20%) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <a 
                href="tel:+442012345678"
                className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col items-center justify-center mb-6"
              >
                <Phone className="w-8 h-8 mb-3" />
                <span className="text-lg">Call Now</span>
                <span className="text-sm opacity-90 mt-1">Get Instant Quote</span>
              </a>
              
              <a 
                href="mailto:info@metalexportpro.com?subject=Metal Export Quote Request&body=Hello, I would like to request a quote for metal export services."
                className="block w-full bg-white text-green-900 hover:bg-gray-100 font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-xl flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-3" />
                Email Quote
              </a>
              
              <div className="mt-4 text-center">
                <div className="text-green-300 text-sm">Response within 2 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;