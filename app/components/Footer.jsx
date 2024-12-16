import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; 

export default function Footer() {
  return (
    <footer className="bg-[#161616] py-8 rounded-3xl">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6">
        
        <div className="text-center">
          <h3 className="text-orange-500 font-semibold mb-4">Follow us:</h3>
          <div className="flex space-x-4 justify-center">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-orange-500 transition-colors"
            >
              <Facebook className="text-white" size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-orange-500 transition-colors"
            >
              <Twitter className="text-white" size={24} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-orange-500 transition-colors"
            >
              <Linkedin className="text-white" size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-orange-500 transition-colors"
            >
              <Instagram className="text-white" size={24} />
            </Link>
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="name@email.com"
            className="bg-gray-700 text-gray-300 px-2 py-3 rounded-3xl w-48 focus:outline-none"
          />
          <button className="bg-[#FF7A30] px-7 py-3 rounded-full transition-colors">
            <p>Subscribe for newsletter</p>
          </button>
        </div>
      </div>
    </footer>
  );
}
