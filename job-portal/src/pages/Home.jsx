import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const jobs = [
    {
      id: 1,
      logo: "G",
      company: "Google",
      title: "Senior React Developer",
      location: "Bangalore, India",
      type: "Full Time",
      salary: "₹12L - ₹20L",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      logo: "A",
      company: "Amazon",
      title: "Frontend Engineer",
      location: "Hyderabad, India",
      type: "Remote",
      salary: "₹10L - ₹18L",
      color: "from-orange-500 to-yellow-400",
    },
    {
      id: 3,
      logo: "M",
      company: "Microsoft",
      title: "Full Stack Developer",
      location: "Pune, India",
      type: "Full Time",
      salary: "₹14L - ₹22L",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const categories = [
    {
      icon: "💻",
      title: "Software Development",
      jobs: "1,240+ Jobs",
    },
    {
      icon: "🎨",
      title: "UI / UX Design",
      jobs: "780+ Jobs",
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
      jobs: "640+ Jobs",
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      jobs: "930+ Jobs",
    },
    {
      icon: "📊",
      title: "Data Science",
      jobs: "520+ Jobs",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      jobs: "410+ Jobs",
    },
  ];

  return (
    <>
      <div className="overflow-hidden bg-slate-950 text-white">

        {/* ================= HERO SECTION ================= */}

        <section className="relative min-h-[88vh] flex items-center">

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#111936] to-[#36125e]" />

          {/* Glow */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />

          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/30 rounded-full blur-[130px] animate-pulse" />

          <div className="absolute top-[40%] left-[45%] w-60 h-60 bg-blue-600/10 rounded-full blur-[100px]" />

          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg,#ffffff 1px,transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center py-20">

            {/* LEFT */}
            <div className="animate-slideLeft">

              <div className="inline-flex items-center gap-2 border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-xl rounded-full px-4 py-2 mb-6">

                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />

                <span className="text-cyan-300 text-sm">
                  🚀 10,000+ New Opportunities Available
                </span>

              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08]">

                Find Your

                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Dream Career
                </span>

                With JobConnect

              </h1>

              <p className="mt-7 text-gray-300 text-lg max-w-xl leading-8">

                Connect with leading companies, discover premium career
                opportunities and build the professional future you deserve.

              </p>

              {/* SEARCH BOX */}

              <div className="mt-9 max-w-2xl">

                <div className="p-2 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">

                  <div className="flex flex-1 items-center bg-white/5 rounded-xl px-4">

                    <span className="text-xl mr-3">🔍</span>

                    <input
                      type="text"
                      placeholder="Job title or keyword"
                      className="w-full bg-transparent py-4 outline-none text-white placeholder-gray-400"
                    />

                  </div>

                  <div className="flex flex-1 items-center bg-white/5 rounded-xl px-4">

                    <span className="text-xl mr-3">📍</span>

                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full bg-transparent py-4 outline-none text-white placeholder-gray-400"
                    />

                  </div>

                  <Link
                    to="/jobs"
                    className="flex justify-center items-center px-7 py-4 rounded-xl font-semibold
                    bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
                    hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
                    transition duration-300"
                  >
                    Search
                  </Link>

                </div>

              </div>

              {/* Popular Search */}

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">

                <span className="text-gray-400">
                  Popular:
                </span>

                {["React Developer", "UI/UX", "Cloud", "AI Engineer"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10
                      hover:bg-cyan-500/20 hover:border-cyan-400/30 cursor-pointer transition"
                    >
                      {item}
                    </span>
                  )
                )}

              </div>

              {/* COUNTER */}

              <div className="grid grid-cols-3 max-w-lg gap-5 mt-10">

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    12K+
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Live Jobs
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-blue-400">
                    5K+
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Companies
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-purple-400">
                    30K+
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Candidates
                  </p>
                </div>

              </div>

            </div>


            {/* ================= RIGHT 3D DESIGN ================= */}

            <div className="relative h-[580px] hidden lg:flex justify-center items-center perspective-container animate-slideRight">

              {/* Orbit */}
              <div className="absolute w-[450px] h-[450px] border border-blue-400/10 rounded-full animate-spinSlow" />

              <div className="absolute w-[350px] h-[350px] border border-purple-400/10 rounded-full animate-spinReverse" />

              {/* Main 3D Card */}

              <div
                className="relative w-[390px]
                rounded-[32px]
                border border-white/20
                bg-white/10
                backdrop-blur-2xl
                shadow-[0_35px_100px_rgba(0,0,0,0.5)]
                p-7
                transform rotate-y
                animate-float"
              >

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 font-bold text-xl shadow-lg">
                      J
                    </div>

                    <div>
                      <h3 className="font-bold">
                        JobConnect AI
                      </h3>

                      <p className="text-gray-400 text-xs">
                        Career Intelligence
                      </p>
                    </div>

                  </div>

                  <div className="px-3 py-1 text-xs rounded-full bg-green-400/10 text-green-400">
                    ● Online
                  </div>

                </div>

                <div className="my-7">

                  <p className="text-gray-400 text-sm">
                    Recommended for you
                  </p>

                  <h2 className="text-2xl font-bold mt-2">
                    Full Stack Developer
                  </h2>

                  <div className="flex gap-2 mt-4">

                    <span className="px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-lg text-xs">
                      React
                    </span>

                    <span className="px-3 py-1 bg-purple-400/10 text-purple-300 rounded-lg text-xs">
                      Node.js
                    </span>

                    <span className="px-3 py-1 bg-green-400/10 text-green-300 rounded-lg text-xs">
                      MongoDB
                    </span>

                  </div>

                </div>

                <div className="space-y-4">

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">

                    <div className="flex justify-between text-sm mb-2">

                      <span className="text-gray-300">
                        Profile Match
                      </span>

                      <span className="text-cyan-400">
                        94%
                      </span>

                    </div>

                    <div className="w-full h-2 rounded-full bg-white/10">

                      <div className="w-[94%] h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />

                    </div>

                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between">

                    <div>
                      <p className="text-xs text-gray-400">
                        Expected Salary
                      </p>

                      <p className="font-bold mt-1">
                        ₹12L – ₹18L
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        Location
                      </p>

                      <p className="font-bold mt-1">
                        Remote
                      </p>
                    </div>

                  </div>

                </div>

                <button
                  className="mt-6 w-full py-3 rounded-xl font-semibold
                  bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
                  hover:shadow-[0_0_30px_rgba(59,130,246,.4)]
                  transition"
                >
                  View Opportunity →
                </button>

              </div>


              {/* Floating Card 1 */}

              <div className="absolute top-14 right-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl animate-floatSmall">

                <div className="flex gap-3 items-center">

                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex justify-center items-center text-xl">
                    ✓
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Application
                    </p>

                    <p className="font-semibold text-sm">
                      Successfully Sent
                    </p>
                  </div>

                </div>

              </div>


              {/* Floating Card 2 */}

              <div className="absolute bottom-14 left-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl animate-floatSmall2">

                <p className="text-xs text-gray-400">
                  New Jobs Today
                </p>

                <p className="text-2xl font-bold text-cyan-400">
                  +348
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= TRUST SECTION ================= */}

        <section className="py-10 border-y border-white/10 bg-white/[0.02]">

          <div className="max-w-7xl mx-auto px-6">

            <p className="text-center text-gray-500 text-sm uppercase tracking-[4px] mb-8">
              Trusted by professionals from
            </p>

            <div className="flex justify-center flex-wrap gap-12 md:gap-20 text-gray-400 font-bold text-xl">

              <span className="hover:text-white transition">
                Google
              </span>

              <span className="hover:text-white transition">
                Microsoft
              </span>

              <span className="hover:text-white transition">
                Amazon
              </span>

              <span className="hover:text-white transition">
                Infosys
              </span>

              <span className="hover:text-white transition">
                TCS
              </span>

            </div>

          </div>

        </section>


        {/* ================= CATEGORY ================= */}

        <section className="py-24 relative">

          <div className="absolute left-[-100px] top-20 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full" />

          <div className="max-w-7xl mx-auto px-6 relative">

            <div className="text-center">

              <span className="text-cyan-400 font-semibold tracking-widest text-sm">
                EXPLORE CAREERS
              </span>

              <h2 className="text-4xl md:text-5xl font-black mt-3">
                Find Jobs By
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                  {" "}Category
                </span>
              </h2>

              <p className="text-gray-400 mt-4">
                Explore opportunities across the world's most demanding industries.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

              {categories.map((category, index) => (

                <div
                  key={index}
                  className="group relative p-[1px] rounded-2xl
                  bg-gradient-to-br from-white/20 to-transparent
                  hover:-translate-y-3 transition-all duration-500"
                >

                  <div
                    className="h-full p-7 rounded-2xl bg-[#0b1022]
                    group-hover:bg-[#101831]
                    transition duration-500
                    shadow-xl"
                  >

                    <div
                      className="w-14 h-14 flex justify-center items-center
                      text-3xl rounded-xl bg-white/5
                      group-hover:scale-110 group-hover:rotate-6
                      transition duration-500"
                    >
                      {category.icon}
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      {category.jobs}
                    </p>

                    <div className="mt-5 text-cyan-400 group-hover:translate-x-2 transition">
                      Explore Jobs →
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= FEATURED JOBS ================= */}

        <section className="py-24 bg-gradient-to-b from-[#080d1c] to-[#101129]">

          <div className="max-w-7xl mx-auto px-6">

            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5">

              <div>

                <p className="text-purple-400 font-semibold tracking-widest text-sm">
                  LATEST OPPORTUNITIES
                </p>

                <h2 className="text-4xl md:text-5xl font-black mt-3">
                  Featured Jobs
                </h2>

              </div>

              <Link
                to="/jobs"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                View All Jobs →
              </Link>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">

              {jobs.map((job) => (

                <div
                  key={job.id}
                  className="group relative p-[1px] rounded-3xl
                  bg-gradient-to-br from-white/20 via-white/5 to-transparent
                  hover:-translate-y-3 transition duration-500"
                >

                  <div className="h-full p-7 rounded-3xl bg-[#0e1427]">

                    <div className="flex justify-between">

                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center
                        bg-gradient-to-br ${job.color}
                        text-xl font-black shadow-xl`}
                      >
                        {job.logo}
                      </div>

                      <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition">
                        ♡
                      </button>

                    </div>

                    <p className="text-gray-400 mt-6">
                      {job.company}
                    </p>

                    <h3 className="text-xl font-bold mt-2 group-hover:text-cyan-400 transition">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-5">

                      <span className="text-sm px-3 py-1 rounded-lg bg-white/5">
                        📍 {job.location}
                      </span>

                      <span className="text-sm px-3 py-1 rounded-lg bg-blue-500/10 text-blue-300">
                        {job.type}
                      </span>

                    </div>

                    <div className="border-t border-white/10 mt-7 pt-6 flex justify-between items-center">

                      <div>

                        <p className="text-gray-500 text-xs">
                          Salary
                        </p>

                        <p className="font-bold mt-1">
                          {job.salary}
                        </p>

                      </div>

                      <Link
                        to="/jobdetails"
                        className="px-5 py-2 rounded-xl bg-white/5
                        hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600
                        transition duration-300"
                      >
                        Apply
                      </Link>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= HOW IT WORKS ================= */}

        <section className="py-24 relative">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="text-cyan-400 text-sm font-semibold tracking-[3px]">
                SIMPLE PROCESS
              </p>

              <h2 className="text-4xl md:text-5xl font-black mt-3">
                Your Career In
                <span className="text-purple-400">
                  {" "}3 Steps
                </span>
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">

              {[
                {
                  number: "01",
                  icon: "👤",
                  title: "Create Profile",
                  text: "Build your professional profile and showcase your skills, experience and achievements.",
                },
                {
                  number: "02",
                  icon: "🔍",
                  title: "Find Jobs",
                  text: "Discover jobs recommended according to your experience, skills and career goals.",
                },
                {
                  number: "03",
                  icon: "🚀",
                  title: "Get Hired",
                  text: "Apply directly, connect with recruiters and start your next professional journey.",
                },
              ].map((step) => (

                <div
                  key={step.number}
                  className="relative p-8 rounded-3xl bg-white/[0.04]
                  border border-white/10
                  hover:border-cyan-400/30
                  hover:-translate-y-3
                  transition duration-500 group"
                >

                  <span className="absolute top-6 right-7 text-5xl font-black text-white/[0.04]">
                    {step.number}
                  </span>

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition">
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold mt-7">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    {step.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= AI SECTION ================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-950 via-indigo-950 to-purple-950 p-10 md:p-16">

              <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/20 blur-[100px] rounded-full" />

              <div className="grid lg:grid-cols-2 gap-14 items-center relative z-10">

                <div>

                  <span className="px-4 py-2 rounded-full text-sm bg-purple-400/10 border border-purple-400/20 text-purple-300">
                    ✨ AI POWERED CAREER
                  </span>

                  <h2 className="mt-7 text-4xl md:text-5xl font-black leading-tight">
                    Smarter Job Search With
                    <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      AI Technology
                    </span>
                  </h2>

                  <p className="mt-6 text-gray-300 leading-8">
                    Get intelligent job recommendations based on your skills,
                    experience and career interests with our smart matching
                    technology.
                  </p>

                  <Link
                    to="/jobs"
                    className="inline-block mt-8 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition"
                  >
                    Explore AI Jobs →
                  </Link>

                </div>


                <div className="relative flex justify-center">

                  <div className="relative w-72 h-72">

                    <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spinSlow" />

                    <div className="absolute inset-7 rounded-full border border-purple-400/30 animate-spinReverse" />

                    <div className="absolute inset-14 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/30 backdrop-blur-xl border border-white/20 flex justify-center items-center animate-float">

                      <div className="text-center">

                        <div className="text-6xl">
                          🤖
                        </div>

                        <p className="font-bold mt-3">
                          JobConnect AI
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="py-24">

          <div className="max-w-6xl mx-auto px-6">

            <div
              className="relative text-center rounded-[40px]
              bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700
              px-7 py-16 md:py-20
              overflow-hidden shadow-[0_30px_80px_rgba(79,70,229,0.35)]"
            >

              <div className="absolute -top-16 -left-16 w-60 h-60 bg-cyan-300/20 rounded-full blur-[80px]" />

              <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-purple-300/30 rounded-full blur-[80px]" />

              <div className="relative z-10">

                <h2 className="text-4xl md:text-5xl font-black">
                  Ready To Build Your Future?
                </h2>

                <p className="mt-5 text-blue-100 max-w-2xl mx-auto text-lg">
                  Create your professional profile and discover thousands of
                  career opportunities from leading companies.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-8">

                  <Link
                    to="/register"
                    className="px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold
                    hover:-translate-y-1 hover:shadow-2xl transition duration-300"
                  >
                    Create Free Account
                  </Link>

                  <Link
                    to="/jobs"
                    className="px-8 py-4 rounded-xl border border-white/30 bg-white/10
                    backdrop-blur-xl font-semibold hover:bg-white/20 transition"
                  >
                    Browse Jobs
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>


      {/* ================= CUSTOM ANIMATION ================= */}

      <style>{`

        .perspective-container {
          perspective: 1200px;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateY(-7deg) rotateX(3deg);
          }

          50% {
            transform: translateY(-20px) rotateY(7deg) rotateX(-2deg);
          }
        }

        @keyframes floatSmall {
          0%,100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes floatSmall2 {
          0%,100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(16px);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes slideLeft {

          from {
            opacity: 0;
            transform: translateX(-60px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }

        }

        @keyframes slideRight {

          from {
            opacity: 0;
            transform: translateX(60px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }

        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-floatSmall {
          animation: floatSmall 4s ease-in-out infinite;
        }

        .animate-floatSmall2 {
          animation: floatSmall2 5s ease-in-out infinite;
        }

        .animate-spinSlow {
          animation: spinSlow 20s linear infinite;
        }

        .animate-spinReverse {
          animation: spinReverse 16s linear infinite;
        }

        .animate-slideLeft {
          animation: slideLeft 0.9s ease forwards;
        }

        .animate-slideRight {
          animation: slideRight 0.9s ease forwards;
        }

      `}</style>
    </>
  );
};

export default Home;