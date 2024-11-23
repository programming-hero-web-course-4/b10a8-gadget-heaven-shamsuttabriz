export default function Footer() {
  return (
    <footer className="bg-slate-100 p-10">
      <div className="text-center mb-6 md:mb-12">
        <h1 className="text-4xl font-bold mb-4 text-black">Gadget Heaven</h1>
        <p className="font-medium text-lg text-gray-600 leading-9 tracking-wider">
          Leading the way in cutting-edge technology and innovation
        </p>
      </div>
      <div className="footer flex justify-around flex-col mx-auto md:flex-row">
        <nav className="w-1/2 mx-auto">
          <h6 className="text-black font-bold text-lg text-center w-full">
            Services
          </h6>
          <a className="link link-hover text-center text-gray-500 w-full text-base font-medium">
            Product Support
          </a>
          <a className="link link-hover text-center text-gray-500 w-full text-base font-medium">
            Order Tracking
          </a>
          <a className="link link-hover text-center text-gray-500 w-full text-base font-medium">
            Shipping & Delivery
          </a>
          <a className="link link-hover text-center text-gray-500 w-full text-base font-medium">
            Returns
          </a>
        </nav>
        <nav className="w-1/2 mx-auto">
          <h6 className="text-black font-bold text-lg text-center w-full">
            Company
          </h6>
          <a className="link link-hover text-center text-gray-500 w-full text-base font-medium">
            About Us
          </a>
          <a className="link link-hover text-center text-gray-500 w-full text-base font-medium">
            Careers
          </a>
          <a className="link link-hover text-center text-gray-500 w-full text-base font-medium">
            Contact
          </a>
        </nav>
        <nav className="w-1/2 mx-auto">
          <h6 className="text-black font-bold text-lg text-center w-full">
            Legal
          </h6>
          <a className="link link-hover text-center text-gray-500 w-full text-base font-medium">
            Teams of Service
          </a>
          <a className="link link-hover text-center text-gray-500 w-full text-base font-medium">
            Privacy Policy
          </a>
          <a className="link link-hover text-center text-gray-500 w-full text-base font-medium">
            Cookie Policy
          </a>
        </nav>
      </div>
    </footer>
  );
}
