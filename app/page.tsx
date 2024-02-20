import Image from "next/image";
import profilePic from "@/public/portfolio.jpeg";
export default function Home() {
  return (
    <div className="flex-grow flex justify-center items-center px-12">
      <div className="flex flex-row">
        <div className="flex flex-col p-5">
          <h1 className="text-3xl font-bold">Hello, I am Yair Sadan</h1>
          <p className="text-xl font-semibold">A full-stack developer</p>
          <p className="text-lg font-normal">
            I am a full-stack developer with a passion for building and
            maintaining web applications. I have experience with a variety of
            technologies including React, Node.js, and MongoDB. I am always
            looking to learn new things and improve my skills.
          </p>
        </div>
        <Image
          src={profilePic}
          height={400}
          alt="picture of me"
          className="rounded-lg"
          quality={100}
        />
      </div>
    </div>
  );
}
