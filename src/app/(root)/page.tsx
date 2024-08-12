import Image from "next/image";
import UserSection from "../_components/userSection";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/constant";
import HomeCard from "../_components/HomeCard";

async function Home() {
  return (
    <div className="pt-32">
      <div className="flex flex-col">
        {/* <UserSection /> */}
        <div className="sm:w-full lg:w-1/2 pb-10">
          <p className="w-full text-3xl font-medium">
            Connecting tech companies with top talented <br /> cybersecurity professionals
          </p>
        </div>

        <div className="flex justify-between items-center flex-col lg:flex-row pb-5">
          <HomeCard />
          <div className="w-full lg:w-1/3">
            <Image
              src={"/assets/images/hqdefault.jpg"}
              alt="home-banner"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="py-5">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
}
export default Home