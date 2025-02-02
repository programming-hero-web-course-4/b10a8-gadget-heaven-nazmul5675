
const Footer = () => {
    return (

        <>
            <div className="flex flex-col items-center gap-2 py-5 pt-0 sm:pt-10 ">
                <h1 className="font-bold text-2xl">Gadget Heaven</h1>
                <p className="font-medium text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="flex-none  sm:flex  justify-between  p-10 border-t border-gray-300 w-10/12 mx-auto">
                <nav className="flex flex-col items-center gap-y-1 sm:p-2 p-4 " >
                    <h6 className="font-bold pb-3 text-black">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="flex flex-col  items-center gap-y-1 sm:p-2 p-4">
                    <h6 className="font-bold pb-3 text-black">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>

                </nav>
                <nav className="flex flex-col  items-center gap-y-1 sm:p-2 p-4">
                    <h6 className="font-bold pb-3 text-black">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </footer>
        </>
    );
};

export default Footer;