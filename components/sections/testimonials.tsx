export const TestimonialsSection = () => {
  return (
    <section className="px-6 py-36 max-w-5xl mx-auto">
      <div className="space-y-10">
        <h4 className="flex items-center gap-4">
          <span className="text-primary text-3xl">✦</span>
          <span className="text-xl md:text-2xl">
            Don&apos;t just take my word for it:
          </span>
        </h4>

        <blockquote className="text-lg md:text-4xl font-medium leading-snug">
          &quot;Wendy is an incredibly talented frontend developer with a
          remarkable eye for detail. Her dedication to delivering high-quality,
          user-centered designs is evident in every project she works on.
          I&apos;ve had the pleasure of seeing her grow as a developer, and her
          ability to tackle complex challenges while maintaining a positive
          attitude is inspiring. Wendy is an invaluable asset to any team.&quot;
        </blockquote>

        <div className="flex items-center gap-4">
          <span className="text-white text-2xl">—</span>
          <div>
            <p className=" text-xl md:text-2xl">Felix Yeboah,</p>
            <p className="text-gray-400 text-lg md:text-xl">
              Frontend Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
