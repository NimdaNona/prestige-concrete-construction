export default function PreviewBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 px-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-2 text-center">
        <p className="text-sm md:text-base font-medium">
          This site is a preview and needs to be purchased in order to claim it and prevent it from being deleted! The site is fully built out, if you like it and want to make it yours, simply go{" "}
          <a
            href="https://www.cliftonsites.com/claim/4dfc7e4e"
            className="underline font-bold hover:text-yellow-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          to purchase it.
        </p>
      </div>
    </div>
  );
}
