import Image from "next/image";

export default function Home() {
  return (
    <html>
      <body>
        <div className="image-row">
          <Image 
            src="/images/loughNeagh.jpg" 
            alt="Lough Neagh"
            width={200}
            height={200}
            className="image-border"  // Add the border class here
          />
          <Image 
            src="/images/plasticPollution.jpg" 
            alt="Plastic Pollution"
            width={200}
            height={200}
            className="image-border"  // Add the border class here
          />
          <Image 
            src="/images/manureRunoff.jpg" 
            alt="Agricultural Pollution"
            width={200}
            height={200}
            className="image-border"  // Add the border class here
          />
          <Image 
            src="/images/historicalDataImage.jpg" 
            alt="Historical"
            width={200}
            height={200}
            className="image-border"  // Add the border class here
          />
        </div>
        <div>
          <h1>Get Involved!</h1>
        </div>
      </body>
    </html>
  );
}
