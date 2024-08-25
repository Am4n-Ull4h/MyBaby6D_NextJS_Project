import { Fragment, lazy, Suspense } from "react";
const HomeBlogs = lazy(() => import("./HomeBlogs"));
const FreqaskQuest = lazy(() => import("./FreqaskQuest"));

let tableData = [
  { R1: "Photo-like", R2: "❌", R3: "✓" },
  { R1: "Cost", R2: "$17.95 - $40", R3: "$14.99" },
  { R1: "Delivery Time", R2: "at least 48 hours", R3: "2 minutes" },
  { R1: "Free Preview", R2: "❌", R3: "✓" },
  { R1: "Quantity of Results", R2: "1", R3: "Many" },
  { R1: "Ultrasounds Processed At Once", R2: "1", R3: "Many" },
  { R1: "Customization", R2: "Skin color", R3: "Race & ethnicity, gender" },
  { R1: "Open eyes", R2: "❌", R3: "Optional" },
  { R1: "Hair", R2: "❌", R3: "Optional" },
  { R1: "Take Poor Quality Ultrasounds as Input", R2: "❌", R3: "✓" },
];

export default function Home() {
  return (
    <Fragment>
      <div className="GradientBG">
        <div className=" text-[#121212]">
          <div className="text-center">
            <h1 className="lg:text-[60px] md:text-[48px] sm:text-[40px] text-[25px] font-bold pt-12">
              See how your baby may look like <br className="br1" /> with{" "}
              <span className="TomatoFont">Photorealistic Ultrasound</span>
            </h1>
            <p className="font-semibold mt-3">
              Create unique & custom logos without relying on stock designs.
            </p>
            <p className="font-semibold">
              Start with a sketch or a prompt & control every aspect of your
              logo design process.
            </p>
            <h4 className="font-bold text-[19px] mt-8">
              Get <span className="TomatoFont">free</span> preview in 2 minutes
            </h4>
            <button className="TomatoBG px-6 font-semibold rounded-xl mx-auto block my-3 py-3">
              Upload 3D Ultrasound Images
            </button>
          </div>
          <div className="lg:h-[80vh] h-[50vh] w-[80%] mx-auto md:p-7 p-3 bg-[#121212] rounded-3xl shadow-sm">
            <img src="./UltraSound.png" className="h-full w-full" alt="" />
          </div>
        </div>
        <div className="text-[#121212] pb-[130px]">
          <div className="md:w-[80%] sm:w-[90%] w-[95%] mx-auto">
            <div className="sm:flex justify-between items-center pt-[90px]">
              <div className=" lg:w-[50%] md:w-[60%] sm:w-[65%]">
                <h1 className="md:text-[26px] text-[22px] font-bold">
                  <span className="TomatoFont">Unmatched</span> Photorealism
                </h1>
                <p>
                  Experience the world's only technology that delivers truly
                  photo-like ultrasound results.
                </p>
              </div>
              <div className="h-[35vh] lg:w-[20%] md:w-[25%] sm:w-[30%] sm:mt-0 mt-5 bg-[#F5F5F5] rounded-2xl"></div>
            </div>

            <div className="flex sm:flex-row flex-col-reverse mt-5 justify-between items-center">
              <div className="h-[35vh] lg:w-[20%] md:w-[25%] sm:w-[30%] w-full sm:mt-0 mt-5 bg-[#F5F5F5] rounded-2xl"></div>
              <div className="lg:w-[50%] md:w-[60%] sm:w-[65%] w-full">
                <h1 className="md:text-[26px] text-[22px] font-bold">
                  <span className="TomatoFont">Quick </span> Results
                </h1>
                <p>
                  Receive your enhanced images in just 5 minutes, not 3-10 days.
                </p>
              </div>
            </div>

            <div className="sm:flex mt-5 justify-between items-center">
              <div className="lg:w-[50%] md:w-[60%] sm:w-[65%] w-full">
                <h1 className="md:text-[26px] text-[22px] font-bold">
                  <span className="TomatoFont">Personalized</span> Selection
                </h1>
                <p>
                  Choose from a dozen generated variations to find the perfect
                  image.
                </p>
              </div>
              <div className="h-[35vh] lg:w-[20%] md:w-[25%] sm:w-[30%] w-full sm:mt-0 mt-5 bg-[#F5F5F5] rounded-2xl"></div>
            </div>
          </div>
          <div className="TomatoBG mt-12">
            <p className="text-[#121212] text-center md:text-[24px] text-[20px] font-normal md:tracking-[7px] tracking-[3px] py-10">
              Satisfied the curiosity of parents <br className="br1" /> across
              countries with <br className="br1" /> cute glimpses of babies
            </p>
          </div>

          <div className="md:w-[80%] sm:w-[90%] w-[95%] mx-auto">
            <div className="flex sm:flex-row flex-col-reverse mt-5 justify-between items-center pt-[90px]">
              <div className="h-[35vh] lg:w-[20%] md:w-[25%] sm:w-[30%] w-full sm:mt-0 mt-5 bg-[#F5F5F5] rounded-2xl"></div>
              <div className="lg:w-[50%] md:w-[60%] sm:w-[65%] w-full">
                <h1 className="md:text-[26px] text-[22px] font-bold">
                  <span className="TomatoFont">Satisfaction </span> Guaranteed
                </h1>
                <p>Pay only if you're happy with the preview of the outcome.</p>
              </div>
            </div>

            <div className="sm:flex mt-5 justify-between items-center">
              <div className="lg:w-[50%] md:w-[60%] sm:w-[65%] w-full">
                <h1 className="md:text-[26px] text-[22px] font-bold">
                  <span className="TomatoFont">Affordable </span> Pricing
                </h1>
                <p>
                  Our cost-effective AI technology offers better value than
                  competitors.
                </p>
              </div>
              <div className="h-[35vh] lg:w-[20%] md:w-[25%] sm:w-[30%] w-full sm:mt-0 mt-5 bg-[#F5F5F5] rounded-2xl"></div>
            </div>

            <div className="TomatoBG w-full rounded-3xl mt-12 p-5">
              <h1 className="text-center md:text-[26px] text-[22px] font-bold py-2">
                Comparison with Current Technologies
              </h1>

              <div className="bg-[#FFFFFF] rounded-2xl">
                <table className="w-full">
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index} className="text-[14px]">
                        <td className="ps-5 py-1 font-semibold text-[#1E1E1E] border-r border-b">
                          {row.R1}
                        </td>
                        <td className="text-center text-[#000000] border-r border-b">
                          {row.R2}
                        </td>
                        <td className="text-center text-[#279638] border-b">
                          {row.R3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Suspense>
              <HomeBlogs />
              <FreqaskQuest />
            </Suspense>

            <div className="TomatoBG rounded-3xl w-full p-7 flex flex-col items-center mt-10">
              <h1 className=" mx-auto TextGradient lg:text-[40px] text-[30px] font-bold text-center">
                Experience the future <br className="br1" />
                of Ultrasound
              </h1>
              <button className="bg-[#ED82B8] mt-12 text-[#FFFFFF] font-semibold block mx-auto text-sm p-2 px-4 rounded-lg">
                Get started now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
