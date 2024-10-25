
const Newsletter = () => {
    return (
       <div className="relative">
         <div className="border-2 absolute  w-full border-white  rounded-xl p-4  ">
            <div className="text-center py-20 bg-white rounded-xl space-y-3 bg-[url('/assets/image/bg-shadow.png')] w-full bg-cover bg-no-repeat">
                <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
                <h5 className="font-bold text-[#131313B3] text-xl">Get the latest updates and news right in your inbox!</h5>
                <div className="w-full space-y-4" >
                    <input type="text" placeholder="Enter your email" className="px-4 mr-4 rounded-xl py-3 border-2 md:w-[30%] w-[80%]" />
                    <button className="font-bold bg-gradient-to-r from-pink-500 to-orange-500 py-3 px-6 rounded-xl md:w-[15%] w-[80%]">Subscribe</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Newsletter;