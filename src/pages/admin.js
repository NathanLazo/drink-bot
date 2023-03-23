import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

// Images
import BacachoImage from "../../public/images/bacacho.png";
import DobelImage from "../../public/images/dobel.png";
import Image from "next/image";
import { toast } from "react-hot-toast";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Admin = () => {
  const enviarDatos = async (e, type) => {
    e.preventDefault();
    const res = await fetch("/api/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <div className='min-h-full'>
        <Disclosure as='nav' className='border-b border-white bg-zinc-900'>
          {({ open }) => (
            <>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 justify-between'>
                  <div className='flex'>
                    <div className='flex flex-shrink-0 items-center'>
                      <img
                        className='block h-8 w-auto lg:hidden'
                        src='https://tailwindui.com/img/logos/mark.svg?color=red&shade=600'
                        alt='Your Company'
                      />
                      <img
                        className='hidden h-8 w-auto lg:block'
                        src='https://tailwindui.com/img/logos/mark.svg?color=red&shade=600'
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
                          <img className='h-8 w-8 rounded-full' src={user.imageUrl} alt='' />
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
                      <img className='h-10 w-10 rounded-full' src={user.imageUrl} alt='' />
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

        <div className='py-10 bg-zinc-900 h-screen'>
          <header>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <h1 className='text-3xl font-bold leading-tight tracking-tight text-white'>
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 '>
              <div className='contenedor mt-8'>
                <div className='grid grid-cols-2 space-x-24'>
                  <div className=''>
                    <button
                      className='tarjeta m-5 mt-0'
                      onClick={e => {
                        toast.success("Dispensando bebida");
                        enviarDatos(e, "dobel");
                      }}
                    >
                      <div className='imgBx'>
                        {/* <img src="imagenes/imagenesbebidas/dobel1.png"> */}
                        <Image src={DobelImage} width={500} height={500} alt='dobel' />
                      </div>

                      <div className='contentBx pt-5'>
                        <a id='dispensar' type='button' className='m-5' onclick='enviarDatos()'>
                          Dispensar
                        </a>
                      </div>
                    </button>
                  </div>

                  <div className='col'>
                    <button className='tarjeta m-5 mt-0' onClick={() => {}}>
                      <div className='imgBx'>
                        {/* <img src="imagenes/imagenesbebidas/baca2.png"> */}
                        <Image src={BacachoImage} alt='Bacacho' width={500} height={500} />
                      </div>
                      <div className='contentBx pt-5'>
                        <a id='dispensar2' type='button' className='m-5' onclick='enviarDatos()'>
                          Dispensar
                        </a>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Admin;
