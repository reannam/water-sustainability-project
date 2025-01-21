import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-400 transition-colors" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-gray-600 hover:text-pink-600 transition-colors" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-800 transition-colors" />
            </Link>
          </div>
          <div className="flex space-x-4 ">
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors border-r border-gray-500 pr-5"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Reanna McEldowney and Eoghan Gallagher.
        </div>
      </div>
    </footer>
  );
}
