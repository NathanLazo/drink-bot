import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-zinc-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://ca-times.brightspotcdn.com/dims4/default/fd2d9ec/2147483647/strip/true/crop/1800x1201+0+0/resize/1200x801!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F82%2Fed%2Fff4b8b6444e6b0e8cd436d9dbe57%2Fguild.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />

        {/* Navigation */}
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

        <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
          <p className=" text-6xl text-white drop-shadow-lg">
            Esto no es cualquier cosa, esto es{" "}
            <span className="text-red-600 font-extrabold text-6xl drop-shadow-lg">
              DrinkBot
            </span>
          </p>
          <p className="mt-4 text-2xl text-white drop-shadow-lg">
            Tu bebida favorita en cuestión de segundos, evita esperar a los
            meseros, ahora puedes hacerlo tú mismo, misma calidad, más rapido.
          </p>
          <a
            href="login"
            className="mt-8 inline-block rounded-md border border-transparent bg-red-700 py-3 px-8 text-base font-medium text-slate-200 hover:bg-red-600 drop-shadow-lg"
          >
            <span className="drop-shadow-2xl">Sign In</span>
          </a>
        </div>
      </div>

      <footer className="bg-zinc-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-2">
          <div className="border-t border-gray-800 py-6">
            <p className="text-sm text-slate-300">
              Copyright &copy; 2021 DrinkBot, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
