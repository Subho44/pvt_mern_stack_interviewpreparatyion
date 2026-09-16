import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <>
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-white/20
      bg-gradient-to-r from-slate-950/90 via-indigo-950/85 to-purple-950/90
      shadow-lg shadow-indigo-950/20 backdrop-blur-xl"
    >
      <div
        className="mx-auto flex max-w-7xl flex-col items-center
        gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8"
      >
        {/* Brand */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3 rounded-xl
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-cyan-300"
        >
          <span
            aria-hidden="true"
            className="flex h-11 w-11 items-center justify-center
            rounded-2xl border border-white/20
            bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600
            text-xl font-black text-white shadow-lg shadow-blue-500/25
            transition-transform duration-300
            motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-105
            motion-reduce:transition-none"
          >
            J
          </span>

          <span className="text-2xl font-extrabold tracking-tight text-white">
            Job
            <span
              className="bg-gradient-to-r from-cyan-300 to-violet-300
              bg-clip-text text-transparent"
            >
              Connect
            </span>
          </span>
        </Link>

        {/* Navigation */}
        <div
          className="flex w-full flex-wrap items-center justify-center
          gap-1.5 sm:gap-2 lg:w-auto"
        >
          <Link
            to="/"
            className="rounded-xl px-3 py-2.5 text-sm font-medium
            text-slate-200 transition duration-300
            hover:bg-white/10 hover:text-cyan-300
            motion-safe:hover:-translate-y-0.5
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-300 motion-reduce:transition-none"
          >
            Home
          </Link>

          <Link
            to="/d"
            className="rounded-xl px-3 py-2.5 text-sm font-medium
            text-slate-200 transition duration-300
            hover:bg-white/10 hover:text-cyan-300
            motion-safe:hover:-translate-y-0.5
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-300 motion-reduce:transition-none"
          >
            Dashboard
          </Link>

          <Link
            to="/j"
            className="rounded-xl px-3 py-2.5 text-sm font-medium
            text-slate-200 transition duration-300
            hover:bg-white/10 hover:text-cyan-300
            motion-safe:hover:-translate-y-0.5
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-300 motion-reduce:transition-none"
          >
            Jobdetails
          </Link>

          <Link
            to="/job"
            className="rounded-xl px-3 py-2.5 text-sm font-medium
            text-slate-200 transition duration-300
            hover:bg-white/10 hover:text-cyan-300
            motion-safe:hover:-translate-y-0.5
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-300 motion-reduce:transition-none"
          >
            Jobs
          </Link>

          
          <Link
            to="/location"
            className="rounded-xl px-3 py-2.5 text-sm font-medium
            text-slate-200 transition duration-300
            hover:bg-white/10 hover:text-cyan-300
            motion-safe:hover:-translate-y-0.5
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-300 motion-reduce:transition-none"
          >
            Location
          </Link>
          
          <Link
            to="/resume"
            className="rounded-xl px-3 py-2.5 text-sm font-medium
            text-slate-200 transition duration-300
            hover:bg-white/10 hover:text-cyan-300
            motion-safe:hover:-translate-y-0.5
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-300 motion-reduce:transition-none"
          >
            resume cv
          </Link>

          
          <Link
            to="/contact"
            className="rounded-xl px-3 py-2.5 text-sm font-medium
            text-slate-200 transition duration-300
            hover:bg-white/10 hover:text-cyan-300
            motion-safe:hover:-translate-y-0.5
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-300 motion-reduce:transition-none"
          >
            Contact us
          </Link>

          <Link
            to="/l"
            className="rounded-xl border border-white/20
            bg-white/5 px-4 py-2.5 text-sm font-semibold text-white
            transition duration-300
            hover:border-cyan-300/60 hover:bg-white/10
            motion-safe:hover:-translate-y-0.5
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-300 motion-reduce:transition-none"
          >
            Login
          </Link>

          <Link
            to="/p"
            className="rounded-xl px-3 py-2.5 text-sm font-medium
            text-slate-200 transition duration-300
            hover:bg-white/10 hover:text-cyan-300
            motion-safe:hover:-translate-y-0.5
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-300 motion-reduce:transition-none"
          >
            Profile
          </Link>

          <Link
            to="/r"
            className="group relative isolate overflow-hidden rounded-xl
            bg-gradient-to-r from-blue-600 to-violet-600
            px-5 py-2.5 text-sm font-semibold text-white
            shadow-lg shadow-violet-500/20 transition duration-300
            hover:shadow-violet-500/40
            motion-safe:hover:-translate-y-0.5
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-300 motion-reduce:transition-none"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0
              -translate-x-full bg-gradient-to-r
              from-transparent via-white/20 to-transparent
              transition-transform duration-700
              motion-safe:group-hover:translate-x-full
              motion-reduce:hidden"
            />
            <span className="relative">Register</span>
          </Link>
        </div>
      </div>

      {/* Gradient bottom border */}
      <div
        aria-hidden="true"
        className="h-px bg-gradient-to-r from-transparent
        via-cyan-400/70 to-transparent"
      />
    </nav>
  </>
}

export default Navbar