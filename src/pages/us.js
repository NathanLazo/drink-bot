import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";

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

toast("Follow Us!", {
  icon: "📸",
  style: {
    background: "#000",
    color: "#fff",
  },
});

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
  };

  return (
    <>
      <div className="min-h-full">
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <div className="bg-zinc-900">
              <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div></div>
                <div className="flex items-center space-x-6">
                  <Link
                    href="/us"
                    className="text-sm font-medium text-white hover:text-gray-100"
                  >
                    Us
                  </Link>
                  <Link
                    href="/login"
                    className="text-sm font-medium text-white hover:text-gray-100"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className=" bg-zinc-900 h-screen">
          <main>
            <div className="bg-zinc-900 py-14">
              <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Meet our <span className="text-red-700">team</span>
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-gray-400">
                    We’re a dynamic group of individuals who are passionate
                    about what we do.
                  </p>
                </div>
                <ul
                  role="list"
                  className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
                >
                  {people.map((person) => (
                    <li
                      key={person.name}
                      className="rounded-2xl bg-zinc-800 py-10 px-8"
                    >
                      <div className="mx-auto w-full flex justify-center">
                        <Image
                          src={person.imageUrl}
                          width={200}
                          height={200}
                          className="rounded-full h-44 w-44"
                        />
                      </div>
                      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                        {person.name}
                      </h3>
                      <p className="text-sm leading-6 text-gray-400">
                        {person.role}
                      </p>
                      <ul
                        role="list"
                        className="mt-6 flex justify-center gap-x-6"
                      >
                        <li>
                          <a
                            href={person.instaUrl}
                            className="text-gray-400 hover:text-gray-300"
                          >
                            <span className="sr-only">Instagram</span>
                            <svg
                              className="h-5 w-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />{" "}
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
      </div>
    </>
  );
};

export default Admin;
