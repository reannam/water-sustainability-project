import Image from "next/image";

export default function PlasticPollutionNIPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Plastic Pollution in Northern Ireland
      </h1>

      <div className="relative  mb-8">
        <Image
          src="/images/plasticPollution.jpg"
          alt="Plastic pollution on a Northern Ireland beach"
          objectFit="cover"
          className="rounded-lg mx-auto my-auto items-center"
          width={400}
          height={400}
        />
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Plastic pollution is a growing environmental concern in Northern
          Ireland, affecting its beautiful coastlines, rivers, and landscapes.
          The issue stems from both local littering and the global plastic waste
          crisis, posing significant challenges to wildlife, ecosystems, and
          human health.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Littering Issues in Northern Ireland
        </h2>
        <p className="mb-4">
          Littering remains a persistent problem across Northern Ireland,
          contributing significantly to plastic pollution. Key issues include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Illegal dumping in rural areas and beauty spots</li>
          <li>
            Litter accumulation in urban areas, particularly in city centers and
            residential neighborhoods
          </li>
          <li>
            Inadequate disposal of single-use plastics, such as bottles, food
            packaging, and bags
          </li>
          <li>
            Cigarette butts, which contain plastic, are one of the most commonly
            littered items
          </li>
          <li>
            Flytipping of larger items, including plastic furniture and
            appliances
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Northern Ireland-Specific Issues
        </h2>
        <p className="mb-4">
          Northern Ireland faces unique challenges in addressing plastic
          pollution:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Coastal Pollution: With over 650 miles of coastline, Northern
            Ireland's beaches and marine environments are particularly
            vulnerable to plastic waste.
          </li>
          <li>
            Agricultural Plastic: The significant agricultural sector in
            Northern Ireland generates large amounts of plastic waste, including
            silage wrap and fertilizer bags.
          </li>
          <li>
            Cross-border Challenges: Sharing a border with the Republic of
            Ireland complicates waste management and pollution control efforts.
          </li>
          <li>
            Limited Recycling Infrastructure: Northern Ireland has lower
            recycling rates compared to other parts of the UK, partly due to
            insufficient recycling facilities.
          </li>
          <li>
            Microplastics in Freshwater: Studies have found high levels of
            microplastics in Northern Ireland's lakes and rivers, including
            Lough Neagh.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">
          Initiatives and Solutions:
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>
            The Carrier Bag Levy: Introduced in 2013, this has significantly
            reduced single-use plastic bag consumption.
          </li>
          <li>
            Clean Coasts Programme: Engages local communities in beach clean-ups
            and raising awareness about marine litter.
          </li>
          <li>
            Refillution Campaign: Encourages the use of refillable water bottles
            to reduce plastic bottle waste.
          </li>
          <li>
            Proposed Deposit Return Scheme: Plans to implement a scheme for
            plastic bottles and cans to increase recycling rates.
          </li>
          <li>
            Education Programs: Increased focus on environmental education in
            schools to promote responsible waste management.
          </li>
        </ul>
      </section>
    </div>
  );
}
