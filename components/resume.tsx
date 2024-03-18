export default function Resume() {
  return (
    <div
      className="flex-grow flex justify-center items-center px-12"
      id="resume"
    >
      <div className="flex flex-col">
        <h1>Resume</h1>
        <p>Here&apos;s my resume</p>
      </div>
      <iframe src={"/resume.pdf"} height={700} width={900} />
    </div>
  );
}
