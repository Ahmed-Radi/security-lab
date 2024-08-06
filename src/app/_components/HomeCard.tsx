import { Button } from "@/components/ui/button"
import { homeCardData } from "@/constant";
import { HomeCardData, HomeCardSubitem } from "@/types";
import Link from "next/link";

const HomeCard = () => {
  return (
    <div className="w-full lg:w-2/3">
      <div className="flex justify-between items-stretch flex-col md:flex-row">
        {homeCardData.map(({ title, data}: HomeCardData) => (
          <div key={title} className="flex flex-col mr-0 md:first:mr-3 lg:mr-6 mb-3 lg:mb-0 shadow-md border border-gray-200 rounded-md p-2">
            <h2 className="card-title text-blue-400">{title}</h2>
            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:gap-0">
              {data.map(({ subtitle, content, button: { label, link }}: HomeCardSubitem) => (
                <div key={subtitle} className="flex flex-col">
                  <h3 className="text-xl font-semibold">{subtitle}</h3>
                  <p className="text-gray-700 text-sm mb-2 w-[90%]">{content}</p>
                  <Button className="text-blue-400 bg-transparent m-auto px-2 py-1 border border-blue-400 transition-all duration-300 hover:text-white hover:bg-blue-400" asChild>
                    <Link href={link}>{label}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeCard