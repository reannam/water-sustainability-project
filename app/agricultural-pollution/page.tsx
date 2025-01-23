import Image from "next/image";

export default function AgriculturalPollutionNIPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Agricultural Pollution in Northern Ireland
      </h1>

      <div className="relative mb-8">
        <Image
          src="/images/manureRunoff.jpg"
          alt="Agricultural landscape in Northern Ireland with visible pollution effects"
          objectFit="cover"
          className="rounded-lg mx-auto my-auto items-center"
          width={400}
          height={400}
        />
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Agricultural pollution is a significant environmental challenge in
          Northern Ireland, affecting water quality, soil health, and
          biodiversity. The region's strong agricultural sector, while
          economically important, contributes to various forms of pollution,
          with slurry run-off being a primary concern.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Slurry Run-off and Related Issues
        </h2>
        <p className="mb-4">
          Slurry, a mixture of animal waste and water, is a major source of
          agricultural pollution in Northern Ireland. Key issues include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Nutrient Pollution: Excess nitrogen and phosphorus from slurry
            run-off can lead to eutrophication in water bodies, causing algal
            blooms and fish kills.
          </li>
          <li>
            Water Contamination: Slurry can contaminate groundwater and surface
            water, potentially affecting drinking water sources.
          </li>
          <li>
            Ammonia Emissions: Northern Ireland has the highest ammonia
            emissions per unit area in the UK, largely due to livestock farming
            and slurry spreading.
          </li>
          <li>
            Soil Degradation: Overuse of slurry can lead to soil compaction and
            reduced soil biodiversity.
          </li>
          <li>
            Odor Nuisance: Improper slurry management can cause unpleasant
            odors, affecting local communities.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Other Agricultural Pollution Issues
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Pesticide Runoff: Overuse or misuse of pesticides can contaminate
            water sources and harm wildlife.
          </li>
          <li>
            Sediment Pollution: Soil erosion from agricultural lands can lead to
            sedimentation in rivers and lakes.
          </li>
          <li>
            Plastic Pollution: Agricultural plastics, such as silage wrap and
            fertilizer bags, contribute to plastic waste.
          </li>
          <li>
            Air Pollution: Besides ammonia, agriculture contributes to
            greenhouse gas emissions, particularly methane from livestock.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Case Studies and Incidents
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Lough Neagh Eutrophication
            </h3>
            <p>
              Lough Neagh, the largest freshwater lake in the British Isles, has
              been severely affected by agricultural pollution. In recent years,
              the lake has experienced significant algal blooms due to excess
              nutrients from agricultural runoff, threatening its ecosystem and
              water quality.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              River Faughan Pollution Incident (2018)
            </h3>
            <p>
              In 2018, a major slurry spill into the River Faughan in County
              Londonderry resulted in a significant fish kill. The incident
              highlighted the potential devastating effects of agricultural
              pollution on river ecosystems and the need for stricter
              regulations and enforcement.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Moygashel Burn Chronic Pollution
            </h3>
            <p>
              The Moygashel Burn, a tributary of the River Blackwater, has
              suffered from chronic agricultural pollution. Regular monitoring
              has shown consistently high levels of phosphates and nitrates,
              likely due to intensive farming practices in the area.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Mitigation Efforts and Future Directions
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Nutrient Action Programme: Implements EU Nitrates Directive,
            regulating the use of fertilizers and manure.
          </li>
          <li>
            CAFRE Environmental Training: Provides farmers with training on best
            environmental practices.
          </li>
          <li>
            Slurry Storage Regulations: Requires farms to have adequate slurry
            storage capacity to avoid winter spreading.
          </li>
          <li>
            Environmental Farming Scheme: Offers financial incentives for
            farmers to adopt environmentally friendly practices.
          </li>
          <li>
            Research Initiatives: Ongoing studies into low-emission slurry
            spreading techniques and precision agriculture.
          </li>
        </ul>
        <p>
          While progress has been made, addressing agricultural pollution in
          Northern Ireland remains an ongoing challenge. It requires continued
          collaboration between farmers, policymakers, and environmental
          agencies to balance agricultural productivity with environmental
          protection.
        </p>
      </section>
    </div>
  );
}
