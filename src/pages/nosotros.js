import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Avatar from "boring-avatars";
// Images

import Image from "next/image";
import toast from "react-hot-toast";

const user = {
  name: "DrinkBot",
  email: "drinks@drinkbot.com",
  imageUrl:
    "https://lh3.googleusercontent.com/a/AGNmyxZrBVqrt0Z35RTsStNynIBiWuW-KnJKFOUIBe_UKA=s576",
};

const navigation = [
  { name: "Drinks", href: "admin", current: false },
  { name: "Team", href: "nosotros", current: true },
];
const userNavigation = [{ name: "Sign out", href: "login" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const people = [
  {
    name: "Imanol Silva",
    role: "Front End",
    imageUrl: "/images/Imanol.jpg",
    instaUrl: "https://www.instagram.com/imanolsilva12/",
  },
  {
    name: "Javier Martínez",
    role: "Back End",
    imageUrl: "/images/Javi.jpg",
    instaUrl: "https://www.instagram.com/javrbrenes/",
  },
  {
    name: "Daniel Lopez",
    role: "IoT Dev",
    imageUrl: "/images/dani.jpg",
    instaUrl: "#",
  },
];

const Admin = () => {
  useEffect(() => {
    toast("Follow Us!", {
      icon: "📸",
    });
  }, []);

  return (
    <>
      <div className='min-h-full'>
        <>
          <Disclosure as='nav' className='border-b border-white bg-zinc-900'>
            {({ open }) => (
              <>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                  <div className='flex h-16 justify-between'>
                    <div className='flex'>
                      <div className='flex flex-shrink-0 items-center'>
                        <Image
                          className='hidden h-8 w-auto lg:block'
                          src='/images/banner.jpg'
                          width={200}
                          height={50}
                          alt='Your Company'
                        />
                      </div>
                      <div className='hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8'>
                        {navigation.map(item => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "border-red-500 text-white"
                                : "border-transparent text-white hover:border-white hover:text-white",
                              "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                      {/* Profile dropdown */}
                      <Menu as='div' className='relative ml-3 bg-zinc-900'>
                        <div>
                          <Menu.Button className='flex max-w-xs items-center rounded-full bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'>
                            <span className='sr-only'>Open user menu</span>
                            <Avatar
                              size={40}
                              name='Maria Mitchell'
                              variant='marble'
                              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-zinc-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            {userNavigation.map(item => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-zinc-700" : "",
                                      "block px-4 py-2 text-sm text-white"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                    <div className='-mr-2 flex items-center sm:hidden'>
                      {/* Mobile menu button */}
                      <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-white hover:bg-white hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'>
                        <span className='sr-only'>Open main menu</span>
                        {open ? (
                          <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                        ) : (
                          <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className='sm:hidden'>
                  <div className='space-y-1 pt-2 pb-3'>
                    {navigation.map(item => (
                      <Disclosure.Button
                        key={item.name}
                        as='a'
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "border-red-500 bg-red-50 text-red-700"
                            : "border-transparent text-white hover:border-white hover:bg-whitehover:text-white",
                          "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className='border-t border-white pt-4 pb-3'>
                    <div className='flex items-center px-4'>
                      <div className='flex-shrink-0'>
                        <Image
                          height={100}
                          width={100}
                          className='h-10 w-10 rounded-full'
                          src={user.imageUrl}
                          alt='image'
                        />
                      </div>
                      <div className='ml-3'>
                        <div className='text-base font-medium text-white'>{user.name}</div>
                        <div className='text-sm font-medium text-white'>{user.email}</div>
                      </div>
                    </div>
                    <div className='mt-3 space-y-1'>
                      {userNavigation.map(item => (
                        <Disclosure.Button
                          key={item.name}
                          as='a'
                          href={item.href}
                          className='block px-4 py-2 text-base font-medium text-white hover:bg-white hover:text-white'
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <div className=' bg-zinc-900 h-screen'>
            <main>
              <div className='bg-zinc-900 py-14'>
                <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
                  <div className='mx-auto max-w-2xl'>
                    <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                      Meet our <span className='text-red-700'>team</span>
                    </h2>
                    <p className='mt-4 text-lg leading-8 text-gray-400'>
                      We’re a dynamic group of individuals who are passionate about what we do.
                    </p>
                  </div>
                  <ul
                    role='list'
                    className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'
                  >
                    {people.map(person => (
                      <li key={person.name} className='rounded-2xl bg-zinc-800 py-10 px-8'>
                        <div className='mx-auto w-full flex justify-center'>
                          <Image
                            src={person.imageUrl}
                            width={200}
                            height={200}
                            alt='image'
                            className='rounded-full h-44 w-44'
                          />
                        </div>
                        <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-white'>
                          {person.name}
                        </h3>
                        <p className='text-sm leading-6 text-gray-400'>{person.role}</p>
                        <ul role='list' className='mt-6 flex justify-center gap-x-6'>
                          <li>
                            <a href={person.instaUrl} className='text-gray-400 hover:text-gray-300'>
                              <span className='sr-only'>Instagram</span>
                              <svg
                                className='h-5 w-5'
                                aria-hidden='true'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                              >
                                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />{" "}
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </main>
          </div>
        </>
      </div>
    </>
  );
};

export default Admin;
