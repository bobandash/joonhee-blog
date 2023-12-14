import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="md:py-8 bg-black text-white">
      <div className="relative flex flex-col md:flex-row uppercase justify-center md:justify-between text-2xl md:w-[90%] mx-auto">
        <p className="text-center py-2 md:py-0">
          <Link className="hover:text-kosovo_gold" to="/">
            Joonhee Bock
          </Link>
        </p>
        <ul className="py-3 md:py-0 flex-row gap-7 flex text-sm md:text-xl justify-around bg-kosovo md:bg-black">
          <li>
            <Link to="/about" className="hover:text-kosovo_gold">
              About
            </Link>
          </li>
          <li>
            <Link to="/posts" className="hover:text-kosovo_gold">
              Posts
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-kosovo_gold">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
