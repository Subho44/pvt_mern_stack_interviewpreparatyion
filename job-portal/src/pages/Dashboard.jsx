import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const menuItems = [
    { name: "Dashboard", icon: "🏠", path: "/dashboard" },
    { name: "My Profile", icon: "👤", path: "/profile" },
    { name: "Find Jobs", icon: "💼", path: "/jobs" },
    { name: "Applications", icon: "📄", path: "/applications" },
    { name: "Saved Jobs", icon: "❤️", path: "/saved-jobs" },
    { name: "Resume CV", icon: "📑", path: "/resume" },
    { name: "Messages", icon: "💬", path: "/messages" },
    { name: "Settings", icon: "⚙️", path: "/settings" },
  ];

  const stats = [
    {
      title: "Applied Jobs",
      value: "24",
      icon: "📨",
      bg: "from-blue-500 to-cyan-400",
    },
    {
      title: "Saved Jobs",
      value: "12",
      icon: "❤️",
      bg: "from-pink-500 to-rose-500",
    },
    {
      title: "Interviews",
      value: "08",
      icon: "🎯",
      bg: "from-purple-500 to-indigo-500",
    },
    {
      title: "Job Offers",
      value: "04",
      icon: "🏆",
      bg: "from-orange-500 to-yellow-400",
    },
  ];

  const applications = [
    {
      company: "Google",
      title: "Frontend Developer",
      location: "Bangalore",
      status: "Shortlisted",
      color: "bg-green-500/10 text-green-400",
      logo: "G",
    },
    {
      company: "Microsoft",
      title: "Full Stack Developer",
      location: "Hyderabad",
      status: "In Review",
      color: "bg-blue-500/10 text-blue-400",
      logo: "M",
    },
    {
      company: "Amazon",
      title: "React Developer",
      location: "Remote",
      status: "Applied",
      color: "bg-purple-500/10 text-purple-400",
      logo: "A",
    },
  ];

  const recommendedJobs = [
    {
      title: "MERN Stack Developer",
      company: "TCS",
      salary: "₹8L - ₹12L",
      location: "Kolkata",
    },
    {
      title: "React JS Developer",
      company: "Infosys",
      salary: "₹7L - ₹10L",
      location: "Pune",
    },
    {
      title: "Cloud Engineer",
      company: "Wipro",
      salary: "₹9L - ₹14L",
      location: "Remote",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070b17] text-white">

      <div className="flex">

        {/* ================= SIDEBAR ================= */}

        <aside
          className="
          hidden lg:flex
          fixed top-[82px] left-0
          h-[calc(100vh-82px)]
          w-[270px]
          flex-col
          bg-gradient-to-b
          from-[#10172b]
          via-[#11172d]
          to-[#090d19]
          border-r border-white/10
          shadow-2xl
          z-40
        "
        >

          {/* User */}
          <div className="p-6 border-b border-white/10">

            <div className="flex items-center gap-3">

              <div
                className="
                w-14 h-14
                rounded-2xl
                flex items-center justify-center
                bg-gradient-to-br
                from-cyan-400
                via-blue-500
                to-purple-600
                font-black
                text-xl
                shadow-[0_0_30px_rgba(59,130,246,.3)]
              "
              >
                SS
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Subhojit
                </h3>

                <p className="text-gray-400 text-xs">
                  Job Seeker
                </p>
              </div>

            </div>

          </div>

          {/* MENU */}

          <div className="p-4 flex-1 overflow-y-auto">

            <p className="text-xs text-gray-500 uppercase tracking-[3px] px-3 mb-4">
              Main Menu
            </p>

            <div className="space-y-2">

              {menuItems.map((item, index) => (

                <Link
                  key={index}
                  to={item.path}
                  className={`
                    group
                    flex items-center gap-4
                    px-4 py-3
                    rounded-xl
                    transition-all duration-300

                    ${
                      index === 0
                        ? "bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-cyan-300 border border-blue-400/20"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }
                  `}
                >

                  <span
                    className="
                    w-9 h-9
                    rounded-lg
                    bg-white/5
                    flex items-center justify-center
                    group-hover:scale-110
                    transition
                  "
                  >
                    {item.icon}
                  </span>

                  <span className="font-medium">
                    {item.name}
                  </span>

                </Link>

              ))}

            </div>

          </div>

          {/* LOGOUT */}

          <div className="p-4 border-t border-white/10">

            <button
              className="
              w-full
              flex items-center justify-center gap-3
              py-3 rounded-xl
              bg-red-500/10
              text-red-400
              hover:bg-red-500
              hover:text-white
              transition duration-300
            "
            >
              <span>🚪</span>
              Logout
            </button>

          </div>

        </aside>


        {/* ================= MAIN CONTENT ================= */}

        <main className="w-full lg:ml-[270px]">

          {/* Background */}

          <div className="relative overflow-hidden">

            <div
              className="
              absolute top-0 left-0
              w-[400px] h-[400px]
              bg-blue-600/10
              blur-[120px]
              rounded-full
            "
            />

            <div
              className="
              absolute right-0 top-[300px]
              w-[400px] h-[400px]
              bg-purple-600/10
              blur-[120px]
              rounded-full
            "
            />

            <div className="relative z-10 p-5 md:p-8 lg:p-10">

              {/* ================= WELCOME ================= */}

              <section
                className="
                relative
                overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-gradient-to-r
                from-[#121c39]
                via-[#192047]
                to-[#321551]
                p-7 md:p-10
                shadow-2xl
              "
              >

                <div
                  className="
                  absolute
                  -right-20 -top-20
                  w-64 h-64
                  bg-purple-500/20
                  blur-[80px]
                  rounded-full
                "
                />

                <div
                  className="
                  absolute
                  -left-20 -bottom-20
                  w-64 h-64
                  bg-cyan-500/10
                  blur-[90px]
                  rounded-full
                "
                />

                <div
                  className="
                  relative z-10
                  flex flex-col
                  xl:flex-row
                  justify-between
                  xl:items-center
                  gap-8
                "
                >

                  <div>

                    <div
                      className="
                      inline-flex items-center gap-2
                      px-4 py-2
                      rounded-full
                      bg-white/5
                      border border-white/10
                      text-sm
                      text-cyan-300
                    "
                    >
                      👋 Welcome back
                    </div>

                    <h1
                      className="
                      text-3xl
                      md:text-4xl
                      lg:text-5xl
                      font-black
                      mt-5
                    "
                    >
                      Hello,
                      <span
                        className="
                        bg-gradient-to-r
                        from-cyan-400
                        to-purple-400
                        text-transparent
                        bg-clip-text
                      "
                      >
                        {" "}Subhojit
                      </span>
                    </h1>

                    <p className="text-gray-300 mt-4 max-w-xl leading-7">
                      Track your applications, discover recommended jobs and
                      manage your professional career from one dashboard.
                    </p>

                  </div>

                  <Link
                    to="/jobs"
                    className="
                    inline-flex
                    items-center
                    justify-center
                    px-7 py-4
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-600
                    to-purple-600
                    font-semibold
                    shadow-[0_15px_40px_rgba(59,130,246,.25)]
                    hover:-translate-y-1
                    hover:shadow-[0_20px_50px_rgba(59,130,246,.4)]
                    transition duration-300
                  "
                  >
                    🔍 Find New Jobs
                  </Link>

                </div>

              </section>


              {/* ================= STATS ================= */}

              <section
                className="
                grid
                sm:grid-cols-2
                xl:grid-cols-4
                gap-5
                mt-7
              "
              >

                {stats.map((stat, index) => (

                  <div
                    key={index}
                    className="
                      group
                      relative
                      overflow-hidden
                      p-6
                      rounded-2xl
                      bg-[#101729]
                      border border-white/10
                      hover:-translate-y-2
                      hover:border-white/20
                      transition-all duration-500
                      shadow-xl
                    "
                  >

                    <div
                      className={`
                        absolute
                        -right-12 -top-12
                        w-32 h-32
                        bg-gradient-to-br
                        ${stat.bg}
                        opacity-10
                        blur-3xl
                        rounded-full
                      `}
                    />

                    <div className="flex justify-between items-center">

                      <div>

                        <p className="text-gray-400 text-sm">
                          {stat.title}
                        </p>

                        <h2 className="text-4xl font-black mt-3">
                          {stat.value}
                        </h2>

                        <p className="text-green-400 text-xs mt-3">
                          ↑ Updated recently
                        </p>

                      </div>

                      <div
                        className={`
                          w-14 h-14
                          rounded-2xl
                          bg-gradient-to-br
                          ${stat.bg}
                          flex items-center justify-center
                          text-2xl
                          shadow-xl
                          group-hover:scale-110
                          group-hover:rotate-6
                          transition duration-500
                        `}
                      >
                        {stat.icon}
                      </div>

                    </div>

                  </div>

                ))}

              </section>


              {/* ================= MAIN DASHBOARD GRID ================= */}

              <section
                className="
                grid
                xl:grid-cols-[2fr_1fr]
                gap-7
                mt-7
              "
              >

                {/* LEFT */}

                <div className="space-y-7">

                  {/* APPLICATIONS */}

                  <div
                    className="
                    rounded-3xl
                    border border-white/10
                    bg-[#0e1527]
                    shadow-xl
                    overflow-hidden
                  "
                  >

                    <div
                      className="
                      p-6
                      flex flex-wrap
                      justify-between
                      items-center
                      gap-3
                      border-b border-white/10
                    "
                    >

                      <div>

                        <h2 className="text-xl font-bold">
                          Recent Applications
                        </h2>

                        <p className="text-gray-500 text-sm mt-1">
                          Track your latest job applications
                        </p>

                      </div>

                      <Link
                        to="/applications"
                        className="text-cyan-400 text-sm hover:text-cyan-300"
                      >
                        View All →
                      </Link>

                    </div>

                    <div className="p-4">

                      {applications.map((app, index) => (

                        <div
                          key={index}
                          className="
                            flex flex-col
                            md:flex-row
                            md:items-center
                            justify-between
                            gap-4
                            p-4
                            rounded-2xl
                            hover:bg-white/[0.04]
                            transition
                          "
                        >

                          <div className="flex items-center gap-4">

                            <div
                              className="
                              w-12 h-12
                              rounded-xl
                              flex items-center justify-center
                              bg-gradient-to-br
                              from-blue-500
                              to-purple-600
                              font-black
                              shadow-lg
                            "
                            >
                              {app.logo}
                            </div>

                            <div>

                              <h3 className="font-semibold">
                                {app.title}
                              </h3>

                              <p className="text-gray-400 text-sm mt-1">
                                {app.company} • 📍 {app.location}
                              </p>

                            </div>

                          </div>

                          <span
                            className={`
                              px-4 py-2
                              rounded-full
                              text-xs
                              font-semibold
                              ${app.color}
                            `}
                          >
                            {app.status}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>


                  {/* RECOMMENDED JOBS */}

                  <div
                    className="
                    rounded-3xl
                    border border-white/10
                    bg-[#0e1527]
                    p-6
                    shadow-xl
                  "
                  >

                    <div className="flex justify-between items-center">

                      <div>

                        <h2 className="text-xl font-bold">
                          Recommended Jobs
                        </h2>

                        <p className="text-gray-500 text-sm mt-1">
                          Based on your profile and skills
                        </p>

                      </div>

                      <span className="text-purple-400">
                        ✨ AI Match
                      </span>

                    </div>

                    <div
                      className="
                      grid
                      md:grid-cols-2
                      2xl:grid-cols-3
                      gap-4
                      mt-6
                    "
                    >

                      {recommendedJobs.map((job, index) => (

                        <div
                          key={index}
                          className="
                            group
                            p-5
                            rounded-2xl
                            bg-white/[0.03]
                            border border-white/10
                            hover:border-cyan-400/30
                            hover:-translate-y-2
                            transition duration-500
                          "
                        >

                          <div
                            className="
                            w-11 h-11
                            rounded-xl
                            bg-gradient-to-br
                            from-cyan-500
                            to-blue-600
                            flex items-center justify-center
                            font-bold
                          "
                          >
                            {job.company.charAt(0)}
                          </div>

                          <h3
                            className="
                            font-bold
                            mt-5
                            group-hover:text-cyan-400
                            transition
                          "
                          >
                            {job.title}
                          </h3>

                          <p className="text-gray-400 text-sm mt-2">
                            {job.company}
                          </p>

                          <div className="mt-4 space-y-2 text-sm">

                            <p className="text-gray-400">
                              📍 {job.location}
                            </p>

                            <p className="text-gray-300">
                              💰 {job.salary}
                            </p>

                          </div>

                          <button
                            className="
                            mt-5 w-full
                            py-2.5
                            rounded-xl
                            bg-white/5
                            hover:bg-gradient-to-r
                            hover:from-cyan-500
                            hover:to-blue-600
                            transition duration-300
                          "
                          >
                            View Job
                          </button>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>


                {/* ================= RIGHT SIDE ================= */}

                <div className="space-y-7">

                  {/* PROFILE */}

                  <div
                    className="
                    p-6
                    rounded-3xl
                    bg-[#0e1527]
                    border border-white/10
                    shadow-xl
                  "
                  >

                    <div className="flex justify-between items-center">

                      <h2 className="font-bold text-lg">
                        Profile Completion
                      </h2>

                      <span className="text-cyan-400 font-bold">
                        75%
                      </span>

                    </div>

                    <div
                      className="
                      w-full h-3
                      bg-white/10
                      rounded-full
                      mt-5
                      overflow-hidden
                    "
                    >

                      <div
                        className="
                        w-[75%]
                        h-full
                        bg-gradient-to-r
                        from-cyan-400
                        via-blue-500
                        to-purple-500
                        rounded-full
                      "
                      />

                    </div>

                    <p className="text-gray-400 text-sm mt-5">
                      Complete your profile to improve job recommendations.
                    </p>

                    <div className="space-y-3 mt-6">

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">
                          ✓ Personal Details
                        </span>
                        <span className="text-green-400">
                          Done
                        </span>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">
                          ✓ Skills
                        </span>
                        <span className="text-green-400">
                          Done
                        </span>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">
                          ○ Resume
                        </span>
                        <span className="text-yellow-400">
                          Pending
                        </span>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">
                          ○ Experience
                        </span>
                        <span className="text-yellow-400">
                          Pending
                        </span>
                      </div>

                    </div>

                    <Link
                      to="/profile"
                      className="
                      block
                      text-center
                      mt-6
                      py-3
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-600
                      to-purple-600
                      hover:scale-[1.02]
                      transition
                    "
                    >
                      Complete Profile
                    </Link>

                  </div>


                  {/* CAREER SCORE */}

                  <div
                    className="
                    relative
                    overflow-hidden
                    p-6
                    rounded-3xl
                    bg-gradient-to-br
                    from-blue-600/20
                    to-purple-600/20
                    border border-purple-400/20
                  "
                  >

                    <div
                      className="
                      absolute
                      -right-12 -bottom-12
                      w-40 h-40
                      rounded-full
                      bg-purple-500/20
                      blur-[50px]
                    "
                    />

                    <p className="text-purple-300 text-sm">
                      AI Career Score
                    </p>

                    <div className="flex items-end gap-2 mt-4">

                      <h2 className="text-5xl font-black">
                        86
                      </h2>

                      <span className="text-gray-400 mb-1">
                        /100
                      </span>

                    </div>

                    <p className="text-gray-300 mt-4 text-sm leading-6">
                      Your profile is performing better than most candidates
                      with similar skills.
                    </p>

                    <div className="mt-5 flex gap-2 flex-wrap">

                      <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 text-cyan-300">
                        React
                      </span>

                      <span className="px-3 py-1 rounded-full text-xs bg-purple-500/10 text-purple-300">
                        Node.js
                      </span>

                      <span className="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-300">
                        MongoDB
                      </span>

                    </div>

                  </div>


                  {/* QUICK ACTION */}

                  <div
                    className="
                    p-6
                    rounded-3xl
                    bg-[#0e1527]
                    border border-white/10
                  "
                  >

                    <h2 className="font-bold text-lg">
                      Quick Actions
                    </h2>

                    <div className="grid grid-cols-2 gap-3 mt-5">

                      <Link
                        to="/resume"
                        className="
                        p-4
                        rounded-xl
                        bg-white/[0.04]
                        hover:bg-blue-500/10
                        text-center
                        transition
                      "
                      >
                        <div className="text-2xl">
                          📄
                        </div>

                        <p className="text-sm mt-2">
                          Upload CV
                        </p>
                      </Link>

                      <Link
                        to="/jobs"
                        className="
                        p-4
                        rounded-xl
                        bg-white/[0.04]
                        hover:bg-purple-500/10
                        text-center
                        transition
                      "
                      >
                        <div className="text-2xl">
                          🔍
                        </div>

                        <p className="text-sm mt-2">
                          Search Job
                        </p>
                      </Link>

                      <Link
                        to="/profile"
                        className="
                        p-4
                        rounded-xl
                        bg-white/[0.04]
                        hover:bg-cyan-500/10
                        text-center
                        transition
                      "
                      >
                        <div className="text-2xl">
                          👤
                        </div>

                        <p className="text-sm mt-2">
                          Edit Profile
                        </p>
                      </Link>

                      <Link
                        to="/saved-jobs"
                        className="
                        p-4
                        rounded-xl
                        bg-white/[0.04]
                        hover:bg-pink-500/10
                        text-center
                        transition
                      "
                      >
                        <div className="text-2xl">
                          ❤️
                        </div>

                        <p className="text-sm mt-2">
                          Saved Jobs
                        </p>
                      </Link>

                    </div>

                  </div>

                </div>

              </section>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
};

export default Dashboard;