import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-white py-[15px] ">
        <div className="flex flex-row justify-end items-center px-[40px] space-x-14 font-mono">
          <Link to="/" className="hover:bg-violet-200 rounded p-3">Home</Link>
          <Link to="/register" className="hover:bg-violet-200 rounded p-3">Register</Link>
          <Link to="/search" className="hover:bg-violet-200 rounded p-3">Search</Link>
          <Link to="/About" className="hover:bg-violet-200 rounded p-3">About</Link>
          <Link to="#" className="hover:bg-violet-200 rounded p-3">Contact</Link>
          <form>
            <input type="text" className="rounded h-[30px] bg-slate-200" />
            <button className="ml-[20px] bg-blue-500 rounded-xl px-[10px] py-[3px] text-white hover:bg-blue-200">
              Search
            </button>
          </form>
        </div>
      </header>
    </>
  );
};

export default Navbar;
