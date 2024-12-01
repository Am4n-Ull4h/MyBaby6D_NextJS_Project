"use client"

import { useRouter } from "next/navigation";
import { Fragment, lazy, Suspense } from "react";
// const HomeBlogs = lazy(() => import("./HomeBlogs"));
const FrenchFaq = lazy(() => import("./FrenchFaq"));

let tableData = [
  { R1: "Photo-like", R2: "❌", R3: "✓" },
  { R1: "Cost", R2: "$17.95 - $40", R3: "$14.99" },
  { R1: "Delivery Time", R2: "at least 48 hours", R3: "2 minutes" },
  // { R1: "Free Preview", R2: "❌", R3: "✓" },
  { R1: "Quantity of Results", R2: "1", R3: "Many" },
  { R1: "Ultrasounds Processed At Once", R2: "1", R3: "Many" },
  { R1: "Customization", R2: "Skin color", R3: "Race & ethnicity, gender" },
  // { R1: "Open eyes", R2: "❌", R3: "Optional" },
  // { R1: "Hair", R2: "❌", R3: "Optional" },
  // { R1: "Take Poor Quality Ultrasounds as Input", R2: "❌", R3: "✓" },
];

export default function FrenchHome() {

  const navigate = useRouter()
  return (
    <Fragment>
      <div className="GradientBG ">
        <div className=" text-[#121212]">
          <div className="text-center w-[85%] mx-auto">
            <h1 className="lg:text-[40px] md:text-[33px] sm:text-[24px] text-white text-[25px] font-bold pt-12">
            Découvrez à quoi pourrait ressembler votre bébé avec une échographie photoréaliste
            </h1>
            <p className="font-semibold mt-3 w-[90%] mx-auto">
            Créez des logos uniques et personnalisés sans utiliser de designs préfabriqués. Commencez avec un croquis ou une suggestion et contrôlez chaque aspect du processus de conception de votre logo.
            </p>
           
            <h4 className="font-bold text-[19px] mt-8">
            Obtenez un aperçu gratuit en 2 minutes
            </h4>
            <button className="TomatoBG px-6 font-semibold rounded-xl mx-auto block my-3 py-3" onClick={()=>navigate.push('/upload')}>
            Téléchargez des images échographiques 3D
            </button>
          </div>
          <div className="lg:h-[80vh] md:h-[50vh] h-[40vh] w-[80%] mx-auto md:p-7 p-3 bg-[#121212] rounded-3xl shadow-sm">
            <img src="./UltraSound.png" className="h-full w-full" alt="" />
          </div>
        </div>
        <div className="text-[#121212] pb-[130px]">
          <div className="md:w-[80%] sm:w-[90%] w-[95%] mx-auto">
            <div className="sm:flex justify-between items-center pt-[90px]">
              <div className=" lg:w-[50%] md:w-[60%] sm:w-[65%]">
                <h1 className="md:text-[26px] text-[22px] font-bold">
                  <span className="TomatoFont">Un réalisme</span> photoréaliste inégalé
                </h1>
                <p>
                Découvrez la seule technologie au monde qui offre des résultats d’échographie véritablement photoréalistes.
                </p>
              </div>
              <div className="h-[35vh] lg:w-[20%] md:w-[25%] sm:w-[30%] sm:mt-0 mt-5 bg-[#F5F5F5] rounded-2xl">
              <img src="./Box1.png" className="h-full w-full" alt="" />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col-reverse mt-5 justify-between items-center">
              <div className="h-[35vh] lg:w-[20%] md:w-[25%] sm:w-[30%] w-full sm:mt-0 mt-5 bg-[#F5F5F5] rounded-2xl">
                <img src="./Box2.png" className="h-full w-full" alt="" />
              </div>
              <div className="lg:w-[50%] md:w-[60%] sm:w-[65%] w-full">
                <h1 className="md:text-[26px] text-[22px] font-bold">
                  <span className="TomatoFont">Résultats </span> rapides
                </h1>
                <p>
                Recevez vos images améliorées en seulement 5 minutes, au lieu de 3 à 10 jours.
                </p>
              </div>
            </div>

            <div className="sm:flex mt-5 justify-between items-center">
              <div className="lg:w-[50%] md:w-[60%] sm:w-[65%] w-full">
                <h1 className="md:text-[26px] text-[22px] font-bold">
                  <span className="TomatoFont">Une sélection</span> personnalisée
                </h1>
                <p>
                Choisissez parmi une douzaine de variations générées pour trouver l’image parfaite.
                </p>
              </div>
              <div className="h-[35vh] lg:w-[20%] md:w-[25%] sm:w-[30%] w-full sm:mt-0 mt-5 bg-[#F5F5F5] rounded-2xl">
              <img src="./Box3.png" className="h-full w-full" alt="" />
              </div>
            </div>
          </div>
          <div className="TomatoBG mt-12">
            <p className="text-[#121212] text-center md:text-[24px] text-[20px] font-normal md:tracking-[7px] tracking-[3px] py-10">
            Satisfait la curiosité des parents à travers le monde grâce à de charmants aperçus de leurs bébés
            </p>
          </div>

          <div className="md:w-[80%] sm:w-[90%] w-[95%] mx-auto">
            <div className="flex sm:flex-row flex-col-reverse mt-5 justify-between items-center pt-[90px]">
              <div className="h-[35vh] lg:w-[20%] md:w-[25%] sm:w-[30%] w-full sm:mt-0 mt-5 bg-[#F5F5F5] rounded-2xl">
              <img src="./Box4.png" className="h-full w-full" alt="" />
              </div>
              <div className="lg:w-[50%] md:w-[60%] sm:w-[65%] w-full">
                <h1 className="md:text-[26px] text-[22px] font-bold">
                  <span className="TomatoFont">Satisfaction </span> garantie
                </h1>
                <p>Payez uniquement si vous êtes satisfait de l’aperçu du résultat.</p>
              </div>
            </div>

            <div className="sm:flex mt-5 justify-between items-center">
              <div className="lg:w-[50%] md:w-[60%] sm:w-[65%] w-full">
                <h1 className="md:text-[26px] text-[22px] font-bold">
                  <span className="TomatoFont">Tarifs </span> abordables
                </h1>
                <p>
                Notre technologie IA économique offre un meilleur rapport qualité-prix que les concurrents.
                </p>
              </div>
              <div className="h-[35vh] lg:w-[20%] md:w-[25%] sm:w-[30%] w-full sm:mt-0 mt-5 bg-[#F5F5F5] rounded-2xl">
              <img src="./Box5.png" className="h-full w-full" alt="" />
              </div>
            </div>

            <div className="TomatoBG w-full rounded-3xl mt-12 p-5">
              <h1 className="text-center md:text-[26px] text-[22px] font-bold py-2">
              Comparaison avec les technologies actuelles
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
            <Suspense fallback={null}>
              {/* <HomeBlogs /> */}
              <FrenchFaq />
            </Suspense>

            <div className="TomatoBG rounded-3xl w-full p-7 flex flex-col items-center mt-10">
              <h1 className=" mx-auto TextGradient lg:text-[40px] text-[30px] font-bold text-center">
              Vivez l’avenir de <br className="br1" />
              l’échographie
              </h1>
              <button className="bg-[#ED82B8] mt-12 text-[#FFFFFF] font-semibold block mx-auto text-sm p-2 px-4 rounded-lg" onClick={()=>navigate.push('/upload')}>
              Commencez maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
