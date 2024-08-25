import React, { Fragment } from "react";
import Link from "next/link";

let HomeBlogsData = [
  {
    img: "./BlogImg.png",
    content:
      "What is an 8K Ultrasound? - Bringing Your Baby's First Images to Life",
    date: "21/01/2024",

    authurImg: "./AuthImg.jpg",
    authorName: "Aman Ullah",
    authorTitle: "Author",
    release: "New Release",
  },
  {
    img: "./BlogImg.png",
    content:
      "What is an 8K Ultrasound? - Bringing Your Baby's First Images to Life",
    date: "21/01/2024",

    authurImg: "./AuthImg.jpg",
    authorName: "Aman Ullah",
    authorTitle: "Author",
    release: "New Release",
  },
  {
    img: "./BlogImg.png",
    content:
      "What is an 8K Ultrasound? - Bringing Your Baby's First Images to Life",
    date: "21/01/2024",

    authurImg: "./AuthImg.jpg",
    authorName: "Aman Ullah",
    authorTitle: "Author",
    release: "",
  },
  {
    img: "./BlogImg.png",
    content:
      "What is an 8K Ultrasound? - Bringing Your Baby's First Images to Life",
    date: "21/01/2024",

    authurImg: "./AuthImg.jpg",
    authorName: "Aman Ullah",
    authorTitle: "Author",
    release: "",
  },
  {
    img: "./BlogImg.png",
    content:
      "What is an 8K Ultrasound? - Bringing Your Baby's First Images to Life",
    date: "21/01/2024",

    authurImg: "./AuthImg.jpg",
    authorName: "Aman Ullah",
    authorTitle: "Author",
    release: "",
  },
  {
    img: "./BlogImg.png",
    content:
      "What is an 8K Ultrasound? - Bringing Your Baby's First Images to Life",
    date: "21/01/2024",

    authurImg: "./AuthImg.jpg",
    authorName: "Aman Ullah",
    authorTitle: "Author",
    release: "",
  },
];

function BlogPage() {
  return (
    <Fragment>
      <div className="GradientBG3 text-[#121212] pb-12">
      <div className="text-center pt-12">
        <h1 className="md:text-[40px] text-[30px] font-extrabold ">
          Our <span className="TomatoFont">Blog</span>
        </h1>
        <p className="text-[#121212b0] mt-3">
          Learn more about our latest releases as well as tips and tricks <br />
          on using Photorealistic Ultrasound
        </p>
      </div>
      <div className="flex justify-evenly flex-wrap gap-y-12 pt-10">
        {HomeBlogsData.map((elm, ind) => (
          <div
            key={ind}
            className="lg:w-[27%] md:w-[40%] w-[80%] bg-[#F5F5F5] rounded-3xl shadow pb-3  "
          >
            <img src={elm.img} alt="" className="w-full" />
            <div className="px-4">
             <Link href=''>  <p className="text-[14px] font-semibold pt-3">{elm.content}</p></Link>
              <p className="text-[12px] font-extralight text-[#1212128a]">
                {elm.date}
              </p>
              <div className="flex justify-between pt-4 items-center">
                <div className="flex gap-2 items-center">
                  <img
                    src={elm.authurImg}
                    alt=""
                    className="h-[30px] w-[30px] rounded-full"
                  />
                  <div>
                    <p className="text-[13px]">{elm.authorName}</p>
                    <p className="text-[11px]">{elm.authorTitle}</p>
                  </div>
                </div>
                <p className="bg-[#E3E3E3] px-3 rounded-full text-[10px] font-medium">
                  {elm.release}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </Fragment>
  );
}

export default BlogPage;
