export function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  const links = [
    ["FAQ", "Help Center", "Account", "Media Center"],
    ["Investor Relations", "Jobs", "Ways to Watch", "Terms of Use"],
    ["Privacy", "Cookie Preferences", "Corporate Information", "Contact Us"],
    ["Speed Test", "Legal Notices", "Only on Netflix", "Ad Choices"],
  ];

  return (
    <footer
      className="border-t border-border/30 mt-16 py-10 px-4 md:px-12"
      style={{ background: "oklch(0.09 0 0)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="text-muted-foreground mb-6 text-sm">
          Questions? Call{" "}
          <a href="tel:1-844-505-2993" className="underline hover:text-white">
            1-844-505-2993
          </a>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4 mb-8">
          {links.flat().map((link) => (
            <button
              key={link}
              type="button"
              className="text-muted-foreground text-xs hover:underline hover:text-white/70 transition-colors text-left"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="border border-muted-foreground/30 rounded w-fit px-3 py-1 text-muted-foreground text-xs mb-6">
          English
        </div>

        <p className="text-muted-foreground text-xs">
          &copy; {year}. Built with &#10084;&#65039; using{" "}
          <a
            href={utmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
