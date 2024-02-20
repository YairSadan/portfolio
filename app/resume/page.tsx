import Image from "next/image";
import resumePicture from "@/public/resume.jpeg";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="flex-grow flex justify-center items-center px-12">
      <div className="flex flex-col">
        <h1>Resume</h1>
        <p>Here&apos;s my resume</p>
      </div>
      <Link
        href="https://resume.io/r/53szp89oP"
        target="_blank"
      >
        <Image
          src={resumePicture}
          height={700}
          alt="picture of my resume"
          quality={100}
        />
      </Link>
    </div>
  );
}
