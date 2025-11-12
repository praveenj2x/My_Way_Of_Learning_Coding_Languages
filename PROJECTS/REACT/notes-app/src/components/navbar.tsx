const Navbar = () => {
  return (
    <nav className="flex w-full">
      
      {/* Main navbar content */}
      <div className="flex-1 flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="text-3xl font-bold outfit cursor-pointer hover:opacity-80 transition-opacity">
          Note
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a href="#" className="text-lg outfit relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-lg outfit relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-lg outfit relative group">
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-lg outfit relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
