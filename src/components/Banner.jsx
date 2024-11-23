export default function Banner() {
  return (
    <div className="border-2 p-2 bg-slate-300/20 rounded-xl">
      <div className="text-center text-white bg-primary rounded-lg px-3 lg:px-8 pt-32 pb-48">
        <div className="w-full lg:w-[800px] mx-auto">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-wider">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-base text-gray-200 mt-6 mb-12 lg:px-24">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <a
            href="#"
            className="bg-white text-primary font-bold px-4 py-2 rounded-3xl"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
