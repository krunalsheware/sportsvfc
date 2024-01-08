// import { Fragment, useEffect, useState } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


// const navigation = [
//   { name: 'Home', href: '/', current: false },
//   { name: 'AboutUs', href: '/aboutus', current: false },
//   { name: 'Achivments', href: '/achivments', current: false },
//   { name: 'ContactUS', href: '/contactus', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Nav() {

//   const[isScrolled,setIsScrolled]=useState(false)
//   useEffect(()=>{
//     const handelscroll=()=>{
//       const scrollePosition=window.scrollY
//       if (scrollePosition>50) {
//         setIsScrolled(true)
//       }
//       else{
//         setIsScrolled(false)
//       }
//     }
//     window.addEventListener('scroll',handelscroll);
//     return()=>{
//       window.removeEventListener('scroll',handelscroll)
//     };

//   },[]);
//   return (
//     <Disclosure as="nav" className={`bg-gray-800 ${isScrolled ? 'bg-opacity-88' : 'bg-opacity-100'} fixed top-0 w-full transition duration-300 ease-in-out z-50 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500`}>
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   {/* <img
//                     className="h-2 w-auto bg-white"
//                     src=""
//                     alt=""
//                    /> */}
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                           'rounded-md px-3 py-2 text-sm font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'block rounded-md px-3 py-2 text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   )
// }
// export {Nav};


import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact Us', href: '/contactus' },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      

        <div className="hidden sm:flex space-x-4">
          {/* Desktop Navigation Links */}
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-gray-300 px-3 py-2 text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="sm:hidden">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="block text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {!isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Hamburger Icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Close Icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden px-2 py-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block hover:text-gray-300 py-2 text-base font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
