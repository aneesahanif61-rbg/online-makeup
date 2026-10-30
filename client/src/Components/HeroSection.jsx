import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#0b090a] text-white">

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden pt-28">

        {/* Background Glow */}
        <div className="absolute left-[-150px] top-[180px] h-[400px] w-[400px] rounded-full bg-[#8f3f58]/20 blur-[120px]" />

        <div className="absolute right-[-150px] top-[100px] h-[450px] w-[450px] rounded-full bg-[#b85c76]/10 blur-[130px]" />

        {/* HERO CONTAINER */}
        <div className="relative mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:px-10">

          {/* LEFT CONTENT */}
          <div className="z-10 max-w-xl">

            {/* Small Label */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#b85c76]/30 bg-[#b85c76]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#d995a9]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#e6a8b7]">
                Beauty • Elegance • You
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Your Beauty,
              <br />

              <span className="text-[#d995a9]">
                Your Signature.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              Discover luxurious beauty essentials designed to enhance
              your natural glow. Explore our carefully selected makeup,
              skincare and beauty collections.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              <NavLink
                to="/collections"
                className="rounded-full bg-[#b85c76] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#b85c76]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#d06f89]"
              >
                Explore Collection
              </NavLink>

              <NavLink
                to="/about-us"
                className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-[#b85c76] hover:bg-[#b85c76]/10"
              >
                Discover More
              </NavLink>

            </div>

            {/* STATS */}
            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-7 sm:gap-12">

              <div>
                <h3 className="font-serif text-2xl font-semibold">
                  50+
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/40">
                  Products
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <h3 className="font-serif text-2xl font-semibold">
                  10K+
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/40">
                  Happy Clients
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <h3 className="font-serif text-2xl font-semibold">
                  4.9
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/40">
                  Rating
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center">

            {/* Outer Glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-[#b85c76]/20 blur-[100px] sm:h-[500px] sm:w-[500px]" />

            {/* Image Circle */}
            <div className="relative h-[420px] w-[320px] overflow-hidden rounded-[180px] border border-white/10 shadow-2xl shadow-black/50 sm:h-[560px] sm:w-[420px]">

              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=85"
                alt="Luxury makeup collection"
                className="h-full w-full object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b090a]/70 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-10 left-0 rounded-2xl border border-white/10 bg-[#171116]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:left-2">

              <p className="text-[10px] uppercase tracking-[0.25em] text-[#d995a9]">
                New Arrival
              </p>

              <p className="mt-1 font-serif text-lg">
                Rose Glow Collection
              </p>

            </div>

            {/* Floating Badge */}
            <div className="absolute right-2 top-12 flex h-20 w-20 rotate-6 items-center justify-center rounded-full border border-[#d995a9]/30 bg-[#171116]/90 text-center shadow-xl backdrop-blur-xl sm:right-8">
              <div>
                <p className="font-serif text-xl text-[#e6a8b7]">
                  100%
                </p>

                <p className="text-[7px] uppercase tracking-widest text-white/50">
                  Beauty
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;

