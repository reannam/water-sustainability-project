import LoughNeaghPHLevels from "./components/loughNeaghPHLevels";

export default function PollutionData(){
    return(
        <main>
         <div className="container mx-auto p-4 items-center justify-center my-auto">
         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center faq-title">
        Lough Neagh Pollution Data
        </h1>
            <div className="flex items-center justify-center">
            <LoughNeaghPHLevels/>
            </div>
         </div>
        </main>
    );
}