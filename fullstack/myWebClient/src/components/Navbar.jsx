import React from 'react'
import { use } from 'react'
import { Link, useNavigate } from 'react-router'
import useAuth from '../context/authStore.js'
import Cookie from 'js-cookie'

const Navbar = () => {
  let navigate = useNavigate()
  const auth = useAuth((state) => state.user)
  return (
    <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            Navbar
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">

            {
              auth ?
                <>
                  <li>
                    <Link
                      to="/"
                      className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/users"
                      className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      Users
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/posts"
                      className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      Posts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/editAccount"
                      className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile-pic"
                      className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      Profile
                    </Link>
                  </li>
<li>
                    <Link
                      to="/chat"
                      className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      Chat
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        Cookie.remove('token');
                        useAuth.setState({ user: null });
                        navigate('/login');
                      }}
                      className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      Logout
                    </button>
                  </li>
                </>
                :



                <>
                  <li>
                    <Link
                      to="/login"
                      className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      Register
                    </Link>
                  </li>
                </>
            }

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar