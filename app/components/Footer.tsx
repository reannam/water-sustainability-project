import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 mt-auto" id="footing">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Media Icons on the Left */}
          <div className="flex space-x-4" id="socialMedia">
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
          {/* Footer Texts on the Right */}
          <div className="flex space-x-4" id="footerTexts">
            <Link
              href="/contact-us"
              className="border-r border-gray-500 pr-5"
            >
              <strong>Contact Us</strong>
            </Link>
            <Link
              href="/privacypolicy" 
              className="border-r border-gray-500 pr-5"
            >
              <strong>Privacy Policy</strong>
            </Link>
            <Link
              href="/faq"
            >
              <strong>FAQ</strong>
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
