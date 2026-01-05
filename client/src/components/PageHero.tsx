interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section
      className="relative py-24 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.85)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-page-title">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-luxury-300 max-w-3xl mx-auto" data-testid="text-page-subtitle">
            {subtitle}
          </p>
        )}
        <div className="w-24 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mx-auto mt-6 rounded-full" />
      </div>
    </section>
  );
}
