import LogoSVG from "../../assets/svg/logo.svg";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function Navbar() {

  const navItems = ["Inicio", "Estadísticas", "Registrar monitor", "Cerrar sesión"];

  return (
    <nav className="bg-white border-gray-200 border-b-2 p-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <img
            src={LogoSVG}
            width={32}
            className="h-10 w-full"
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
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 mt-40 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="py-1">
                    {navItems.map((item) => (
                      <Menu.Item key={item}>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                          >
                            {item}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
              <div className="hidden md:block">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                  {navItems.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
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
