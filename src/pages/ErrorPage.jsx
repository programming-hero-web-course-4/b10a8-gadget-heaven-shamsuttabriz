import { Helmet } from "react-helmet-async";

export default function ErrorPage() {
  return (
    <div>
      <Helmet>
        <title>GadgetHavenTech | Not-Found</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center space-y-5">
          <h1 className="text-4xl lg:text-5xl font-bold">Page Not found</h1>
          <p className="text-4xl lg:text-5xl font-medium">404</p>
        </div>
      </div>
    </div>
  );
}
