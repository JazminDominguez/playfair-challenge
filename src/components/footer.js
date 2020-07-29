import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black">
      <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
        <p className="text-white">
          Front end developer test for Playfair Design
        </p>

        <p>
          <a
            className="font-bold text-white no-underline"
            href="https://github.com/JazminDominguez/playfair-challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </nav>
    </footer>
  );
}
