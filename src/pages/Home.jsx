import banner from "../assets/banner.jpg";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="bg-slate-700 relative mb-64">
        <div className="w-2/3 h-96 p-2 border-2 border-white rounded-2xl bg-slate-200/50 mx-auto absolute -bottom-56 left-56">
          <img
            className="w-full h-full object-cover object-center rounded-xl"
            src={banner}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
}
