"useclient";

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-transparent">
      <div className="w-28">
        <img src="logo.avif" alt="" />
      </div>

      <div className="flex space-x-4 rounded-full bg-[#0d0d0d] border border-white p-2">
        <Link href="/" className='text-white hover:bg-[#232323] focus:text-[#f58327] focus:bg-[#232323] rounded-full px-4 py-1'>HOME</Link>
        <Link href="/pages/about" className='text-white hover:bg-[#232323] focus:text-[#f58327] focus:bg-[#232323] rounded-full px-4 py-1'>ABOUT</Link>
        <Link href="/pages/services" className='text-white hover:bg-[#232323] focus:text-[#f58327] focus:bg-[#232323] rounded-full px-4 py-1'>SERVICES</Link>
        <Link href="/pages/projects" className='text-white hover:bg-[#232323] focus:text-[#f58327] focus:bg-[#232323] rounded-full px-4 py-1'>PROJECTS</Link>
        <Link href="/pages/blog" className='text-white hover:bg-[#232323] focus:text-[#f58327] focus:bg-[#232323] rounded-full px-4 py-1'>BLOGS</Link>
        <Link href="/pages/contact" className='text-white hover:bg-[#232323] focus:text-[#f58327] focus:bg-[#232323] rounded-full px-4 py-1'>CONTACT</Link>
      </div>

      <button className='bg-[#FF7A30] rounded-full px-4 py-2'>Contact Us  ↗</button>
    </nav>
  );
};

export default Navbar;
