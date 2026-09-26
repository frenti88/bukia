import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Rounded Banner Card */}
        <div className="relative bg-[#111317] text-white rounded-3xl p-8 sm:p-12 md:p-14 overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Background Wireframe Topographic Contours */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg viewBox="0 0 1000 400" className="w-full h-full object-cover">
              <path d="M0,200 Q250,50 500,200 T1000,200" stroke="#FFFFFF" strokeWidth="1" fill="none" />
              <path d="M0,250 Q250,100 500,250 T1000,250" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 4" fill="none" />
              <path d="M0,300 Q250,150 500,300 T1000,300" stroke="#FFFFFF" strokeWidth="1" fill="none" />
              <path d="M0,350 Q250,200 500,350 T1000,350" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 4" fill="none" />
            </svg>
          </div>

          {/* Left Text */}
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Ready to Read With Purpose?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
              Join over 12K+ intentional readers and receive curated book deep-dives and mental models directly in your inbox.
            </p>
          </div>

          {/* Right Input Form */}
          <div className="relative z-10 w-full md:w-auto">
            {subscribed ? (
              <div className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs px-5 py-3 rounded-full flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You're in! Welcome to intentional reading.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/15 flex items-center max-w-md w-full"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="bg-transparent text-xs sm:text-sm text-white placeholder:text-gray-400 px-4 py-2 flex-1 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-gray-100 text-black text-xs font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 flex-shrink-0"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
