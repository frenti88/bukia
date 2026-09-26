import React from 'react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left: Copyright */}
          <div>
            <p>© 2026 BOOKIA Inc. All rights reserved.</p>
          </div>

          {/* Center: Legal Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigateToSection('hero')}
              className="hover:text-black transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigateToSection('hero')}
              className="hover:text-black transition-colors"
            >
              Terms of Service
            </button>
          </div>

          {/* Right: Navigation Links */}
          <div className="flex items-center gap-6 font-medium text-gray-700">
            <button
              onClick={() => onNavigateToSection('hero')}
              className="hover:text-black transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigateToSection('catalog')}
              className="hover:text-black transition-colors"
            >
              Library
            </button>
            <button
              onClick={() => onNavigateToSection('countdown')}
              className="hover:text-black transition-colors"
            >
              Community
            </button>
            <button
              onClick={() => onNavigateToSection('articles')}
              className="hover:text-black transition-colors"
            >
              Support
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
