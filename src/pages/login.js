import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Example() {
  const pass = "0967";
  const user = "admin";
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (password === pass && username === user) {
      toast.success("Login successful");
      setTimeout(() => {
        router.push("/admin");
      }, 1000);
    } else {
      toast.error("Login failed");
    }
  };

  return (
    <>
      <div className='flex h-screen'>
        <div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <img
                className='h-12 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt='Your Company'
              />
              <h2 className='mt-6 text-3xl font-bold tracking-tight text-gray-900'>
                Sign in to your account
              </h2>
              <p className='mt-2 text-sm text-gray-600'>
                <span className='font-medium text-indigo-600 hover:text-indigo-500'>
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
                      className='block text-sm font-medium leading-6 text-gray-900'
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
                      className='block text-sm font-medium leading-6 text-gray-900'
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
                      className='flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
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
            src='https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
            alt=''
          />
        </div>
      </div>
    </>
  );
}
