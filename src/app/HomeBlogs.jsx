import React, { Fragment } from "react";
import Link from "next/link";

let HomeBlogsData= [
    {
        img : './BlogImg.png',
        content : "What is an 8K Ultrasound? - Bringing Your Baby's First Images to Life",
        date : "21/01/2024",

        authurImg : "./AuthImg.jpg",
        authorName : "Aman Ullah",
        authorTitle : "Author",
        release : "New Release"
    },
    {
        img : './BlogImg.png',
        content : "What is an 8K Ultrasound? - Bringing Your Baby's First Images to Life",
        date : "21/01/2024",

        authurImg : "./AuthImg.jpg",
        authorName : "Aman Ullah",
        authorTitle : "Author",
        release : "New Release"
    },
    {
        img : './BlogImg.png',
        content : "What is an 8K Ultrasound? - Bringing Your Baby's First Images to Life",
        date : "21/01/2024",

        authurImg : "./AuthImg.jpg",
        authorName : "Aman Ullah",
        authorTitle : "Author",
        release : ""
    },
]

function HomeBlogs() {
  return (
    <Fragment>
      <div className="text-center my-10">
        <h1 className="md:text-[40px] text-[30px] font-extrabold">
          Our <span className="TomatoFont">Blog</span>
        </h1>
        <p className="text-[#121212b0] mt-3">
          Learn more about our latest releases as well as tips and tricks <br />
          on using Photorealistic Ultrasound
        </p>
      </div>
      <div className="flex justify-between lg:gap-0 gap-10 w-full lg:overflow-x-auto overflow-x-scroll OverScroll">
      {
        HomeBlogsData.map((elm,ind)=><div key={ind} className="lg:w-[28%] lg:flex-shrink-1 flex-shrink-0 md:w-[40%] sm:w-[60%] w-[85%] bg-[#F5F5F5] rounded-xl shadow pb-3  ">
            <img src={elm.img} alt="" className="w-full" />
            <div className="px-4">
            <Link href=''><p className="text-[14px] font-semibold pt-3">{elm.content}</p></Link>
            <p className="text-[12px] font-extralight text-[#1212128a]">{elm.date}</p>
            <div className="flex justify-between pt-4 items-center">
                <div className="flex gap-2 items-center">
                    <img src={elm.authurImg} alt="" className="h-[30px] w-[30px] rounded-full" />
                    <div>
                    <p className="text-[13px]">{elm.authorName}</p>
                    <p className="text-[11px]">{elm.authorTitle}</p>
                    </div>
                </div>
                <p className="bg-[#E3E3E3] px-3 rounded-full text-[10px] font-medium">
                    {
                        elm.release
                    }
                </p>
            </div>
            </div>
        </div>)
      }
      </div>
    </Fragment>
  );
}

export default HomeBlogs;
