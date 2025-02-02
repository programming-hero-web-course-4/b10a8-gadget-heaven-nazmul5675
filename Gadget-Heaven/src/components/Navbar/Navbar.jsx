import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
const Navbar = () => {
    const link = <>
        <li className="font-semibold"><a>Home</a></li>
        <li className="font-semibold"><a>Statistics</a></li>
        <li className="font-semibold"><a>Dashboard</a></li>

    </>
    return (
        <div className="navbar bg-base-100 w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <a className="bg-white border p-2 rounded-full"><IoCartOutline /></a>
                <a className="border p-2 rounded-full"><CiHeart /></a>
            </div>
        </div>
    );
};

export default Navbar;