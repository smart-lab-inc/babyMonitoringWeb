import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import LogoPNG from '../../assets/png/logo.png';

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 border-b-2 p-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src={LogoPNG}
            className="h-8 mr-3"
            alt="SmartLab Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            SmartLab
          </span>
        </a>
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </Menu.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items
                  static
                  className="md:hidden absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-500">Menu items go here</p>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${
                            active ? 'text-white bg-blue-700' : 'text-gray-900 hover:bg-gray-100'
                          }`}
                          aria-current="page"
                        >
                          Home
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${
                            active ? 'text-white bg-blue-700' : 'text-gray-900 hover:bg-gray-100'
                          }`}
                        >
                          Estadísticas
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${
                            active ? 'text-white bg-blue-700' : 'text-gray-900 hover:bg-gray-100'
                          }`}
                        >
                          Registrar monitor
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${
                            active ? 'text-white bg-blue-700' : 'text-gray-900 hover:bg-gray-100'
                          }`}
                        >
                          Cerrar sesión
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
              <div className="hidden md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      Estadísticas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                    >
                      Registrar monitor
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                    >
                      Cerrar sesión
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </Menu>
      </div>
    </nav>
  );
}

export default Navbar;
