import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Subscribing email:', email);
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <div className="bg-neutral-900 text-white my-10 p-4 rounded-2xl md:w-[70vw] mx-auto">
      <div className="space-y-6">
        
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Join our newsletter list</h2>
          <p className="text-gray-300">
            Sign up to get the most recent blog articles in your email every week.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black rounded-full transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        
        <div className="pt-6 border-t border-gray-800">
          <p className="text-sm satoshi font-semibold uppercase tracking-wider mb-4">
            Share this post to the social medias
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label={`Share on ${social.label}`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;