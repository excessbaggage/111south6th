export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://photos.zillowstatic.com/fp/a58f1d0b3943b31133d16105469b0c93-uncropped_scaled_within_1536_1152.webp")',
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display font-normal text-white text-4xl md:text-6xl lg:text-7xl">
          111 South 6th Street
        </h1>

        <p className="font-body uppercase tracking-[4px] text-white/80 text-sm md:text-base mt-4">
          Fernandina Beach, Florida
        </p>

        <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto my-6" />

        <p className="font-display text-white text-2xl md:text-3xl">
          $999,000
        </p>

        {/* Scroll indicator */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="scroll-bounce mt-12 w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
