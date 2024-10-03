"use client";

import React, { Fragment, lazy, Suspense, useState, useEffect } from "react";
import { TbCloudUpload } from "react-icons/tb";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, storage } from "@/app/firebase/config"; // Ensure Firebase storage is imported here
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling
import { deductCredit } from "@/app/firebase/DeductCredit"; // Import the deductCredit function

const UploadNav = lazy(() => import("./UploadNavbar"));

function UploadPage() {
  const [imageFile, setImageFile] = useState(null);
  const [modifiedImageUrl, setModifiedImageUrl] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [user, loading] = useAuthState(auth);

  const [ethnicity, setEthnicity] = useState("");
  const [hair, setHair] = useState("");
  const [eye, setEye] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setModifiedImageUrl("");
      setError("");
    }
  };

  const uploadImageToApi = async () => {
    if (!imageFile) {
      alert("Please select an image to upload.");
      return;
    }

    try {
      setLoadingState(true);

      // Check if the user has enough credits
      const hasCredits = await deductCredit(user.uid);
      if (!hasCredits) {
        // toast.error("Please purchase credits", {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   });
        setLoadingState(false);

        setTimeout(() => {
          router.push("/payment");
        }, 4000);
        // return;
      }

      // Step 1: Upload the image to Firebase storage and get the URL
      const imageUrl = await uploadImageToFirebase(imageFile);

      // Step 2: Prepare the request body with the URL
      const requestBody = {
        input: {
          edit_type: "BabyGen",
          input_image: imageUrl, // Use the URL of the uploaded image
          prompt:
            "realistic closeup of a new born baby face high resolution, 4k",
          width: 1024,
          height: 1024,
          strength: 0.65,
          ethnicity: ethnicity,
          hair_color: hair,
          eye_color: eye,
        },
      };

      // Step 3: Call the API with the image URL
      const response = await fetch(
        "https://api.runpod.ai/v2/94i5sz9kagyg2t/runsync",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer KE8GCEKLK9W2K4FHOECK9GC4SWEZ554Y5DFDF5FG`, // Replace with your real API key
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      setImageFile(null);

      if (response.ok) {
        const data = await response.json();
        setModifiedImageUrl(data.output); // Assuming data.output contains the modified image URL
      } else {
        setError("Failed to upload the image. Please try again.");
      }
    } catch (error) {
      setError("Failed to upload the image. Please try again.");
    } finally {
      setLoadingState(false);
    }
  };

  // Function to upload image to Firebase storage and return the URL
  const uploadImageToFirebase = async (file) => {
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef); // Get and return the URL of the uploaded image
  };

  if (loading)
    return (
      <p className="h-[90vh] w-full flex justify-center items-center text-2xl font-bold">
        Please wait...
      </p>
    );

  return (
    <Fragment>
      <Suspense fallback={null}>
        <UploadNav />
      </Suspense>
      <ToastContainer />
      <div className="GradientBG3 sm:h-[90vh] w-full flex sm:flex-row flex-col items-center justify-around">
        {/* Upload Section */}
        <div className="rounded-xl bg-[#F5F5F5] xl:w-[15%] lg:w-[20%] md:w-[26%] sm:w-[32%] w-[50%] sm:mt-0 mt-8 flex items-center py-8 flex-col">
          <h1 className="text-[#ED82B8] font-bold text-[18px]">Upload Image</h1>
          <div className="w-[90%] relative mx-auto rounded-xl mt-6 bg-[#ADB5BD] h-[20vh] flex flex-col justify-center items-center text-[#000000a1] text-[12px] font-medium">
            {!imageFile ? (
              <div>
                <TbCloudUpload className="text-[40px] text-[#0000007e] mb-2 block mx-auto" />
                <p>CHOOSE SCAN</p>
              </div>
            ) : (
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Img"
                className=" h-full w-full "
              />
            )}
            <input
              type="file"
              className="z-10 cursor-pointer opacity-0 rounded-lg absolute h-full w-full"
              id="upload"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>

          <div className="flex w-[90%] items-center justify-between my-2 mt-7">
            <label htmlFor="" className="text-black text-[12px]">
              Select Hair
            </label>
            <select
              name=""
              id=""
              onChange={(e) => setEthnicity(e.target.value)}
              className="text-black border-b-2 border-black bg-transparent outline-none text-[12px]"
            >
              <option value="">None</option>
              <option value="indian" selected>indian</option>
              <option value="asian">asian</option>
              <option value="hispanic">hispanic</option>
              <option value="american">american</option>
              <option value="indonesian">indonesian</option>
            </select>
          </div>
          <div className="flex w-[90%] items-center justify-between my-2">
            <label htmlFor="" className="text-black text-[12px]">
              Select Hair
            </label>
            <select
              name=""
              id=""
              onChange={(e) => setHair(e.target.value)}
              className="text-black border-b-2 border-black bg-transparent outline-none text-[12px]"
            >
              <option value="">None</option>
              <option value="black">Black</option>
              <option value="red" selected>Red</option>
              <option value="blonde">Blonde</option>
              <option value="grey">Grey</option>
              <option value="white">White</option>
            </select>
          </div>
          <div className="flex w-[90%] items-center justify-between my-2">
            <label htmlFor="" className="text-black text-[12px]">
              Select hair color:
            </label>
            <select
              name=""
              id=""
              onChange={(e) => setEye(e.target.value)}
              className="text-black border-b-2 border-black bg-transparent outline-none text-[12px]"
            >
              <option value="black">Black</option>
              <option value="brown">Brown</option>
              <option value="amber">Amber</option>
              <option value="blue">Blue</option>
              <option value="hazel" selected>Hazel</option>
            </select>
          </div>
          <button
            className="rounded-md shadow py-1 px-3 bg-[#86DEF4] mt-5"
            onClick={uploadImageToApi}
            disabled={!imageFile || loadingState}
          >
            {loadingState ? "Generating..." : "Generate"}
          </button>
        </div>

        {/* Results Section */}
        <div className="rounded-xl bg-[#F5F5F5] xl:w-[50%] lg:w-[55%] sm:w-[62%] w-[90%] sm:my-0 my-8 flex items-center py-3 flex-col">
          <h1 className="text-[#ED82B8] mt-7 font-bold text-[18px]">Results</h1>
          <div className="w-[95%] mx-auto rounded-xl mt-2 bg-[#ADB5BD] h-[45vh] flex justify-center items-center">
            {loadingState ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : modifiedImageUrl ? (
              <img
                src={modifiedImageUrl}
                alt="Modified"
                className="h-full w-full rounded-2xl"
              />
            ) : (
              <p>No image generated yet</p>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default UploadPage;
