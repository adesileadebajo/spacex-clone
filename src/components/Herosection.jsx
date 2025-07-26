import "./Herosection.css";

export default function Herosection({
  headerText,
  paragraphText,
  buttonText,
  backgroundImage,
}) {
  return (
    <section
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-hero py-50 px-20 ">
        <h1 className="text-5xl text-fit">{headerText}</h1>
        <p>{paragraphText}</p>
        <button className="border w-40 h-12 mt-5 hover:bg-white hover:text-black cursor-pointer">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
