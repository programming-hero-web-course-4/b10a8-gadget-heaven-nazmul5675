
const Banner = () => {
    return (
        <div>
            <div className="bg-purple-500    rounded-b-2xl w-11/12  mx-auto ">
                <div className="flex flex-col justify-center items-center gap-y-14 pt-20 pb-48 ">
                    <h1 className="sm:text-6xl text-2xl font-bold text-white text-center ">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p className="text-white text-base text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    <button className="btn rounded-full text-purple-600 ">Shop Now</button>
                </div>
            </div>
            <div className=" relative -top-36 flex justify-center overflow-hidden">
                <div className="border-2 border-white p-5 rounded-xl w-[1110px]  ">
                    <img className=" object-cover rounded-2xl w-full h-[611px]  " src="../../../assets/banner.jpg" alt="vr-glass" />
                </div>
            </div>
        </div>
    );
};

export default Banner;

