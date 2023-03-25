import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Example() {
  const pass = "0967";
  const user = "admin";
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigation = [{ name: " < Home", href: "/", current: false }];

  const handleSubmit = e => {
    e.preventDefault();
    if (password === pass && username === user) {
      toast.success("Login successful");
      setTimeout(() => {
        router.push("/admin");
      }, 1000);
    } else {
      toast.error("Login Failed");
    }
  };

  return (
    <>
      <div className='flex h-screen'>
        <div className='flex flex-1 flex-col bg-zinc-900 justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className=' sm:flex sm:space-x-8 pb-28 md:-mt-48 mx-auto w-96'>
            {navigation.map(item => (
              <a key={item.name} href={item.href} className='text-white'>
                {item.name}
              </a>
            ))}
          </div>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <img className='h-12 w-auto' src='/images/banner.jpg' alt='DrinkBot' />
              <h2 className='mt-6 text-3xl font-bold tracking-tight text-white'>
                Sign in to your account
              </h2>
              <p className='mt-2 text-sm text-slate-200'>
                <span className='font-medium text-slate-200 hover:text-slate-500'>
                  Only admins can sign in
                </span>
              </p>
            </div>

            <div className='mt-8'>
              <div className='mt-6'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div>
                    <label
                      htmlFor='user'
                      className='block text-sm font-medium leading-6 text-slate-200'
                    >
                      User
                    </label>
                    <div className='mt-2'>
                      <input
                        id='user'
                        name='user'
                        type='user'
                        autoComplete='user'
                        onChange={e => setUsername(e.target.value)}
                        required
                        className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-slate-200'
                    >
                      Password
                    </label>
                    <div className='mt-2'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        autoComplete='current-password'
                        required
                        className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type='submit'
                      className='flex w-full justify-center rounded-md bg-red-700 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='relative hidden w-0 flex-1 lg:block'>
          <img
            className='absolute inset-0 h-full w-full object-cover'
            src='https://www.bhg.com/thmb/lRY29ITOQFKy4qzeQfL4mld0WPc=/1244x0/filters:no_upscale():strip_icc()/bar-cart-alcohol-drinks-17483300-4120bc9cec73441eb2c7fee3922baf3b.jpg'
            alt='DrinkBar'
          />
        </div>
      </div>
    </>
  );
}
