import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-green-600">
      <div className="absolute w-full z-10">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between py-4">
              <div className="text-white text-xl font-bold">EcoRide</div>
              <div className="space-x-4">
                <a href="/register" className="px-4 py-2 text-white hover:bg-white/20 rounded">S 'inscrire</a>
                <a href="/register" className="px-4 py-2 bg-white text-[#1eb2cb] hover:bg-white/90 rounded">Se connecter</a>

              </div>
            </nav>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;