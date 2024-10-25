import footerLogo from '../../assets/image/logo-footer.png'
const Footer = () => {
    return (
        <footer className="bg-black mt-80 pt-28 pb-14 text-white ">


            <div>
                <img src={footerLogo} className='mx-auto' alt="" />
            </div>
            <div className='flex justify-between md:container mt-9 mx-auto w-[90%]'>
                <div className='space-y-3'> 
                    <h4 className='font-bold text-xl'>About Us</h4>
                    <p className='text-[#FFFFFF99] '>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </div>
                <div className='space-y-3'>
                    <h4 className='font-bold text-xl'>Quick Links</h4>
                    <ul className='list-disc text-[#FFFFFF99] ml-5'>
                        <li>Home</li>
                        <li>Service</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                </div>
                <div className='space-y-3'>
                    <h4 className='font-bold text-xl'>Subscribe</h4>
                    <p className='text-[#FFFFFF99]'>Subscribe to our newsletter for the latest updates.</p>
                    <div>
                    <input type="text" placeholder="Enter your email" className="px-4  rounded-l-xl py-3 " />
                    <button className="font-bold bg-gradient-to-r from-pink-500 to-orange-500 py-3 px-6 rounded-r-xl">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;