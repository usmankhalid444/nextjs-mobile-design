import Discover from "../../pages/components/Discover";
import Popular from "../../pages/components/Popular";
import Suggestions from "../../pages/components/Suggestions";
import Timings from "../../pages/components/Timings";

export default function Home() {
  return (
    <section className="py-8">
      <div className="hidden sm:block">
        This Website is optimized for mobile viewing. Please access it on your
        mobile device.
      </div>
      <div className="sm:hidden">
        <Discover />
        <Popular />
        <Suggestions />
        <Timings />
      </div>
    </section>
  );
}
