const Footer = () => {
  return (
    <>
      <div className="bg-black mt-10 text-gray-300 lg:pt-14 xl:pt-14 2xl:pt-14 pb-10 text-sm pt-5">
        <div className="flex">
          <div className="text-xs sm:flex md:flex lg:flex xl:flex 2xl:flex">
            <div className="mr-6 lg:mr-20 xl:mr-20 2xl:mr-20 sm:text-center md:text-center lg:text-center xl:text-center 2xl:text-center ml-5">
              <p className="sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3 md:ml-20 xl:ml-60">
                Shop All
              </p>
              <p className="sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3 md:ml-20 xl:ml-60">
                About
              </p>
              <p className="sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3 md:ml-20 xl:ml-60">
                contact
              </p>
              <p className="sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3 md:ml-20 xl:ml-60">
                Stockists
              </p>
            </div>
            <div className="mr-6 lg:mr-20 xl:mr-20 2xl:mr-20 sm:text-center md:text-center lg:text-center xl:text-center 2xl:text-center ml-5">
              <p className="sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3">FAQ</p>
              <p className="sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3">
                Shipping and Returns
              </p>
              <p className="sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3">
                Shipping and Returns
              </p>
              <p className="sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3">
                Store Policy
              </p>
              <p className="sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3">
                Payment Methods
              </p>
            </div>
            <div className="mr-6 lg:mr-20 xl:mr-20 2xl:mr-20 sm:text-center md:text-center lg:text-center xl:text-center 2xl:text-center ml-5">
              <p className="sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3">
                Instagram
              </p>
              <p className="sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3">
                Pinterest
              </p>
              <p className="sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3">
                Facebook
              </p>
              <p className="sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3">
                Twitter
              </p>
            </div>
          </div>
          <div className="mr-6 lg:mr-20 xl:mr-20 2xl:mr-20 sm:text-center md:text-center lg:text-center xl:text-center 2xl:text-center ml-5">
            <p className="text-white lg:text-base xl:text-base 2xl:text-base text-xs">
              Join our mailing list
            </p>
            <p className="text-white pt-2 lg:text-base xl:text-base 2xl:text-base text-xs">
              and get 10% off
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your Email here *"
                className="bg-black border-2 lg:mt-3 xl:mt-3 2xl:mt-3 mt-2 text-white p-1"
              />
            </form>
            <button className="ml-2 bg-orange-500 text-center text-white p-2 mt-4 w-40 hover:bg-orange-200 hover:text-black">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <p className="text-xs ml-14 pb-9">
        &copy 2035 by NOUS. Powered and secured by <u>Wix</u>
      </p>
    </>
  );
};
export default Footer;
