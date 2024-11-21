import { NavLink } from "react-router-dom";

export default function Categories({ categories }) {
  return (
    <div>
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/category/${category.slug}`}
          className={({ isActive }) =>
            `block text-base lg:text-lg p-2 lg:p-3 border-2 border-primary/60 hover:border-primary bg-slate-100 duration-200 rounded-3xl font-bold mb-4 text-center ${
              isActive ? "bg-violet-500 text-white" : "tab-active"
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
}
