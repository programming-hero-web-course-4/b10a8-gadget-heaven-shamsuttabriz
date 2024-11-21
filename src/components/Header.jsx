export default function Header({ title, subtitle }) {
  return (
    <div className="text-center py-24">
      <div className="w-full lg:w-1/2 mx-auto">
        <h1 className="text-3xl font-bold text-white tracking-wide">{title}</h1>
        <p className="text-slate-200 font-medium py-3 px-4 tracking-wide">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
