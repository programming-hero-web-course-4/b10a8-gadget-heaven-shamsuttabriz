import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar({ pathname }) {
  const links = (
    <>
      <li>
        <Link to="/" className="text-lg font-medium">
          Home
        </Link>
      </li>
      <li>
        <Link to="/statistics" className="text-lg font-medium">
          Statistics
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="text-lg font-medium">
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <nav
      className={`navbar fixed md:px-20 z-50 ${
        pathname == "/" ? "mt-10 text-white px-8 md:px-20 " : "bg-white"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-100 space-y-3 px-4 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-xl font-semibold lg:font-bold">
          GadgetHeavenTech
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-1 lg:gap-2 ">
        <a
          className={`text-2xl  ${
            pathname == "/"
              ? "bg-white p-2 text-primary hover:bg-gray-200"
              : "border-8"
          } border-white cursor-pointer hover:border-slate-200 rounded-full p-1 duration-200`}
        >
          <MdOutlineShoppingCart />
        </a>
        <a
          className={`text-2xl  ${
            pathname == "/"
              ? "bg-white p-2 text-primary hover:bg-gray-200"
              : "border-8"
          } border-white cursor-pointer hover:border-slate-200 rounded-full p-1 duration-200`}
        >
          <FaRegHeart />
        </a>
      </div>
    </nav>
  );
}
