import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo_profile.jpg';

const navigation = [
  { name: 'Analytics', href: '/home', current: true },
  { name: 'Users', href: '/home/users', current: false },
  { name: 'Transactions', href: '/home/transactions', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-slate-100 md:bg-slate-50 max-h-full max-w-full">
      {({ open }) => (
        <>
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-col items-start w-1/6 h-screen bg-slate-50 gap-10">
            <div>
              <h1 className="text-xl font-bold text-gray-800 pl-4">Apprezest</h1>
            </div>
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-800 hover:bg-gray-200 hover:rounded-lg p-2 px-10 transition-all duration-300 ease-in-out relative"
                >
                  <span className="block transition-all duration-300 ease-in-out w-full hover:w-[80%] absolute top-0 left-1/2 transform -translate-x-1/2" />
                  {item.name}
                </Link>
              ))}
            </div>
            <footer className="w-full mt-auto text-gray-800">
              <hr className="border-gray-400 w-full" />
              <div className="flex gap-4 p-4">
                <img src={logo} className='w-10 rounded-full' alt="profile" />
                <span className='pt-2'>Shashank</span>
              </div>
            </footer>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>

          <Disclosure.Panel className={`fixed inset-0 z-50 flex flex-col bg-slate-50 transition-transform transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col items-start p-4 gap-4">
              <div className="flex justify-between w-full">
                <h1 className="text-xl font-bold text-gray-800">Apprezest</h1>
                <Disclosure.Button className="p-2 text-gray-400 hover:text-gray-800">
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Disclosure.Button>
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-800 hover:bg-gray-200 hover:rounded-lg p-2 w-full text-left"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <footer className="w-full mt-auto text-gray-800">
              <hr className="border-gray-400 w-full" />
              <div className="flex gap-4 p-4">
                <img src={logo} className='w-10 rounded-full' alt="profile" />
                <span className='pt-2'>Shashank</span>
              </div>
            </footer>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
