import { Outlet, useLoaderData } from "react-router-dom";
import banner from "../assets/banner.jpg";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

export default function Home() {
  const categories = useLoaderData();
  return (
    <div>
      {/* Banner Section */}
      <Banner />
      {/* Banner Image Section */}
      <div className="relative mb-64 z-10">
        <div className="w-2/3 h-96 p-2 border-2 border-white rounded-2xl bg-slate-200/50 mx-auto absolute -bottom-56 left-1/2 -translate-x-2/4">
          <img
            className="w-full h-full object-cover object-center rounded-xl"
            src={banner}
            alt="Banner"
          />
        </div>
      </div>
      {/* Category wise Product Section */}
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-12">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-12">
          {/* Category */}
          <div className="col-span-1">
            <Categories categories={categories} />
          </div>
          {/* Product */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
