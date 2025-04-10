
import React from 'react';
import { CloudLightning } from 'lucide-react';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gradient-to-b from-sky-100 to-white relative">
      <div className="section-container">
        <div className="flex justify-center mb-4">
          <CloudLightning className="text-skyblue-light animate-float" size={40} />
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-2">
            © {currentYear} IMPHNEN - Hak Cipta & Hak Mager Dilindungi Undang-Undang Rebahan.
          </p>
          <p className="text-gray-500 text-sm">
            Dibuat sambil ngopi & rebahan oleh tim FE paling woles sedunia.
          </p>
        </div>
        
        <div className="mt-6 flex justify-center space-x-4 text-sm text-gray-400">
          <a href="#" className="hover:text-skyblue transition-colors duration-300">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-skyblue transition-colors duration-300">Kontak</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
