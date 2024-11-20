'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass-morph py-4' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              Donation Club
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-2 hover:text-purple-600 transition-colors ${
                      isActive(link.href) ? 'text-purple-600' : ''
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></span>
                    )}
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Link 
                  href="/donate" 
                  className={`btn-primary ${isActive('/donate') ? 'ring-2 ring-white ring-offset-2' : ''}`}
                >
                  Donate Now
                </Link>

                {isAuthenticated ? (
                  <Menu as="div" className="relative">
                    <Menu.Button className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white hover:border-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                      <Image
                        src="/profile-placeholder.jpg"
                        alt="Profile"
                        fill
                        className="object-cover"
                      />
                    </Menu.Button>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-lg shadow-lg p-2 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/profile"
                              className={`block px-4 py-2 rounded-lg ${
                                active ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
                              }`}
                            >
                              Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => setIsAuthenticated(false)}
                              className={`block w-full text-left px-4 py-2 rounded-lg ${
                                active ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
                              }`}
                            >
                              Sign Out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Link 
                    href="/auth" 
                    className={`px-6 py-2 rounded-full border-2 border-purple-600 text-purple-600 
                      hover:bg-white hover:text-purple-600 transition-all duration-300 
                      ${isActive('/auth') ? 'bg-white text-purple-600' : ''}`}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-purple-600 hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-[75%] bg-white shadow-xl z-50 md:hidden"
            >
              <div className="p-4">
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6 text-purple-600" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Navigation Links */}
                  <div className="space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block py-2 text-lg ${
                          isActive(link.href) ? 'text-purple-600 font-semibold' : 'text-gray-700'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Auth Section */}
                  <div className="pt-6 border-t space-y-4">
                    {isAuthenticated ? (
                      <div className="space-y-4">
                        <Link
                          href="/profile"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="relative w-10 h-10 rounded-full overflow-hidden">
                            <Image
                              src="/profile-placeholder.jpg"
                              alt="Profile"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-600">View Profile</p>
                          </div>
                        </Link>
                        <button
                          onClick={() => {
                            setIsAuthenticated(false);
                            setIsMenuOpen(false);
                          }}
                          className="w-full px-6 py-2 text-purple-600 border-2 border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                        >
                          Sign Out
                        </button>
                      </div>
                    ) : (
                      <Link
                        href="/auth"
                        className="block w-full px-6 py-2 text-center text-purple-600 border-2 border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                    )}
                    
                    <Link
                      href="/donate"
                      className="block w-full px-6 py-2 text-center text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { usePathname } from 'next/navigation';
// import { Menu, Transition } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const navLinks = [
//     { href: '/', label: 'Home' },
//     { href: '/about', label: 'About' },
//     { href: '/contact', label: 'Contact' },
//   ];

//   return (
//     <>
//       <motion.nav
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           scrolled ? 'glass-morph py-4' : 'bg-transparent py-6'
//         }`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between">
//             <Link href="/" className="text-2xl font-bold text-white">
//               Donation Club
//             </Link>
            
//             <div className="hidden md:flex items-center space-x-8">
//               <div className="flex items-center space-x-8">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className={`relative py-2 text-white/90 hover:text-white transition-colors ${
//                       isActive(link.href) ? 'text-white' : ''
//                     }`}
//                   >
//                     {link.label}
//                     {isActive(link.href) && (
//                       <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
//                     )}
//                   </Link>
//                 ))}
//               </div>

//               <div className="flex items-center space-x-4">
//                 <Link 
//                   href="/donate" 
//                   className={`btn-primary ${isActive('/donate') ? 'ring-2 ring-white ring-offset-2' : ''}`}
//                 >
//                   Donate Now
//                 </Link>

//                 {isAuthenticated ? (
//                   <Menu as="div" className="relative">
//                     <Menu.Button className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white hover:border-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
//                       <Image
//                         src="/profile-placeholder.jpg"
//                         alt="Profile"
//                         fill
//                         className="object-cover"
//                       />
//                     </Menu.Button>

//                     <Transition
//                       enter="transition duration-100 ease-out"
//                       enterFrom="transform scale-95 opacity-0"
//                       enterTo="transform scale-100 opacity-100"
//                       leave="transition duration-75 ease-out"
//                       leaveFrom="transform scale-100 opacity-100"
//                       leaveTo="transform scale-95 opacity-0"
//                     >
//                       <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-lg shadow-lg p-2 focus:outline-none">
//                         <Menu.Item>
//                           {({ active }) => (
//                             <Link
//                               href="/profile"
//                               className={`block px-4 py-2 rounded-lg ${
//                                 active ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
//                               }`}
//                             >
//                               Profile
//                             </Link>
//                           )}
//                         </Menu.Item>
//                         <Menu.Item>
//                           {({ active }) => (
//                             <button
//                               onClick={() => setIsAuthenticated(false)}
//                               className={`block w-full text-left px-4 py-2 rounded-lg ${
//                                 active ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
//                               }`}
//                             >
//                               Sign Out
//                             </button>
//                           )}
//                         </Menu.Item>
//                       </Menu.Items>
//                     </Transition>
//                   </Menu>
//                 ) : (
//                   <Link 
//                     href="/auth" 
//                     className={`px-6 py-2 rounded-full border-2 border-white text-white 
//                       hover:bg-white hover:text-purple-600 transition-all duration-300 
//                       ${isActive('/auth') ? 'bg-white text-purple-600' : ''}`}
//                   >
//                     Sign In
//                   </Link>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
//               onClick={() => setIsMenuOpen(true)}
//             >
//               <Bars3Icon className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu Drawer */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
//               onClick={() => setIsMenuOpen(false)}
//             />

//             {/* Drawer */}
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'tween', duration: 0.3 }}
//               className="fixed right-0 top-0 h-full w-[75%] bg-white shadow-xl z-50 md:hidden"
//             >
//               <div className="p-4">
//                 <div className="flex justify-end mb-6">
//                   <button
//                     onClick={() => setIsMenuOpen(false)}
//                     className="p-2 rounded-lg hover:bg-purple-50 transition-colors"
//                   >
//                     <XMarkIcon className="w-6 h-6 text-purple-600" />
//                   </button>
//                 </div>

//                 <div className="space-y-6">
//                   {/* Navigation Links */}
//                   <div className="space-y-4">
//                     {navLinks.map((link) => (
//                       <Link
//                         key={link.href}
//                         href={link.href}
//                         className={`block py-2 text-lg ${
//                           isActive(link.href) ? 'text-purple-600 font-semibold' : 'text-gray-700'
//                         }`}
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         {link.label}
//                       </Link>
//                     ))}
//                   </div>

//                   {/* Auth Section */}
//                   <div className="pt-6 border-t space-y-4">
//                     {isAuthenticated ? (
//                       <div className="space-y-4">
//                         <Link
//                           href="/profile"
//                           className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-50"
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           <div className="relative w-10 h-10 rounded-full overflow-hidden">
//                             <Image
//                               src="/profile-placeholder.jpg"
//                               alt="Profile"
//                               fill
//                               className="object-cover"
//                             />
//                           </div>
//                           <div>
//                             <p className="font-semibold">John Doe</p>
//                             <p className="text-sm text-gray-600">View Profile</p>
//                           </div>
//                         </Link>
//                         <button
//                           onClick={() => {
//                             setIsAuthenticated(false);
//                             setIsMenuOpen(false);
//                           }}
//                           className="w-full px-6 py-2 text-purple-600 border-2 border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
//                         >
//                           Sign Out
//                         </button>
//                       </div>
//                     ) : (
//                       <Link
//                         href="/auth"
//                         className="block w-full px-6 py-2 text-center text-purple-600 border-2 border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         Sign In
//                       </Link>
//                     )}
                    
//                     <Link
//                       href="/donate"
//                       className="block w-full px-6 py-2 text-center text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       Donate Now
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }