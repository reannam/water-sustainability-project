import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="image-row">
        <div className="image-container">
          <Image
            src="/images/loughNeagh.jpg"
            alt="Lough Neagh"
            width={300}
            height={300}
            className="image-border object-cover hover:scale-105 transition-transform duration-300"
          />
          <a href="/lough-neagh" className="image-button">
            Lough Neagh
          </a>
        </div>
        <div className="image-container">
          <Image
            src="/images/plasticPollution.jpg"
            alt="Plastic Pollution"
            width={300}
            height={300}
            className="image-border object-cover hover:scale-105 transition-transform duration-300"
          />
          <a href="/plastic-pollution" className="image-button">
            Plastic Pollution
          </a>
        </div>
        <div className="image-container">
          <Image
            src="/images/manureRunoff.jpg"
            alt="Agricultural Pollution"
            width={300}
            height={300}
            className="image-border object-cover hover:scale-105 transition-transform duration-300"
          />
          <a href="/agricultural-pollution" className="image-button">
            Agricultural Pollution
          </a>
        </div>
        <div className="image-container">
          <Image
            src="/images/historicalDataImage.jpg"
            alt="Historical"
            width={300}
            height={300}
            className="image-border object-cover hover:scale-105 transition-transform duration-300"
          />
          <button className="image-button">Historical</button>
        </div>
      </div>
      <div className="mt-16 text-center my-7">
        <h2 className="text-4xl font-bold text-sky-700 mb-8">Get Involved!</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="image-button" id="homePageButton">
            Sign Up
          </button>
          <button className="image-button" id="homePageButton">
            Volunteer
          </button>
        </div>
      </div>
    </main>
  );
}
