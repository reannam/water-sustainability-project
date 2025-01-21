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
            className="image-border"
          />
          <button className="image-button">Lough Neagh</button>
        </div>
        <div className="image-container">
          <Image 
            src="/images/plasticPollution.jpg" 
            alt="Plastic Pollution"
            width={300}
            height={300}
            className="image-border"
          />
          <button className="image-button">Plastic Pollution</button>
        </div>
        <div className="image-container">
          <Image 
            src="/images/manureRunoff.jpg" 
            alt="Agricultural Pollution"
            width={300}
            height={300}
            className="image-border"
          />
          <button className="image-button">Agricultural Pollution</button>
        </div>
        <div className="image-container">
          <Image 
            src="/images/historicalDataImage.jpg" 
            alt="Historical"
            width={300}
            height={300}
            className="image-border"
          />
          <button className="image-button">Historical</button>
        </div>
      </div>
      <div>
        <h1 className="get-involved-heading">Get Involved!</h1>
      </div>
    </main>
  );
}
