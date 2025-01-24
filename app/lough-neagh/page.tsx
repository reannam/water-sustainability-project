import Image from "next/image";

export default function LoughNeaghPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center faq-title">
        Lough Neagh, Northern Ireland
      </h1>

      <div className="relative  mb-8">
        <Image
          src="/images/loughNeagh.jpg"
          alt="Lough Neagh"
          objectFit="cover"
          className="rounded-lg my-auto mx-auto items-center"
          width={400}
          height={400}
        />
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Lough Neagh</h2>
        <p className="mb-4">
          Lough Neagh is the largest freshwater lake in the British Isles,
          located in the center of Northern Ireland. It covers an area of 392
          square kilometers (151 square miles) and supplies 40% of Northern
          Ireland's water.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Green Algae in Lough Neagh
        </h2>
        <p className="mb-4">
          In recent years, Lough Neagh has been experiencing significant issues
          with green algae blooms. These blooms, also known as cyanobacteria or
          blue-green algae, have become a major environmental concern for the
          lake and its ecosystem.
        </p>
        <h3 className="text-xl font-semibold mb-2">
          Key Points about Green Algae in Lough Neagh:
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Causes: Excess nutrients, particularly phosphorus, from agricultural
            runoff and sewage contribute to algal growth.
          </li>
          <li>
            Impact: The algae can produce toxins harmful to humans and animals,
            affecting water quality and local wildlife.
          </li>
          <li>
            Visibility: During blooms, the water can turn a vivid green color,
            significantly altering the lake's appearance.
          </li>
          <li>
            Economic effects: The algae blooms can impact fishing, tourism, and
            water treatment processes.
          </li>
          <li>
            Ongoing research: Scientists are studying the lake to understand and
            mitigate the algae problem.
          </li>
        </ul>
        <p>
          Efforts are underway to address the green algae issue in Lough Neagh,
          including improved water treatment, reduction of nutrient runoff, and
          ongoing monitoring of water quality.
        </p>
      </section>
    </div>
  );
}
