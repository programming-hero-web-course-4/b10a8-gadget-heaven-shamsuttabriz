import { Helmet } from "react-helmet-async";
import Header from "../components/Header";

export default function Statistics() {
  return (
    <div>
      <Helmet>
        <title>GadgetHavenTech | Statistics</title>
      </Helmet>
      <div className="bg-primary">
        <Header
          title="Statistics"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
      </div>
      <div className="py-20 px-12 container mx-auto">
        <h1 className="text-xl lg:text-3xl font-semibold">Statistics</h1>
        <div></div>
      </div>
    </div>
  );
}
