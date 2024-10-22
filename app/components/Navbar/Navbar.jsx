// components/Navbar.jsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
  <Link href="/about" className="hover:text-blue-500">
    About
  </Link>
</li>

          <li>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
