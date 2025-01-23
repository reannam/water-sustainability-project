"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Input } from "@/components/ui/input";
import "leaflet/dist/leaflet.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export function LoughNeaghMap() {
  const icon = new Icon({
    iconUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4+pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // Define the cities/towns around Lough Neagh
  const locations = [
    {
      name: "Antrim",
      position: [54.7134, -6.2079],
      population: 23000,
      reports: 15,
      mostRecent: "Algae",
    },
    {
      name: "Lurgan",
      position: [54.4634, -6.3335],
      population: 25000,
      reports: 22,
      mostRecent: "Drinking Water",
    },
    {
      name: "Cookstown",
      position: [54.6425, -6.745],
      population: 11000,
      reports: 8,
      mostRecent: "Water Pollution",
    },
    {
      name: "Magherafelt",
      position: [54.7553, -6.6075],
      population: 8800,
      reports: 12,
      mostRecent: "Algae",
    },
    {
      name: "Portadown",
      position: [54.4195, -6.4538],
      population: 22000,
      reports: 18,
      mostRecent: "Drinking Water",
    },
    {
      name: "Toomebridge",
      position: [54.7508, -6.4605],
      population: 800,
      reports: 5,
      mostRecent: "Water Pollution",
    },
  ];
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [locationsList, setLocationsList] = useState(locations);
  const [waterType, setWaterType] = useState("drinking");
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const location = formData.get("location")?.toString().trim();
    const waterType = formData.get("waterType")?.toString().trim();

    if (!location || !waterType) {
      alert("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    const locationIndex = locationsList.findIndex(
      (loc) => loc.name.toLowerCase() === location.toLowerCase()
    );
    if (locationIndex !== -1) {
      // Location exists: Increase report counter and update most recent report
      const updatedLocations = [...locationsList];
      updatedLocations[locationIndex] = {
        ...updatedLocations[locationIndex],
        reports: updatedLocations[locationIndex].reports + 1,
        mostRecent: waterType,
      };
      setLocationsList(updatedLocations);
      console.log(`Updated "${location}" with a new report.`);
    } else {
      // Location does not exist: Add it to the array
      const newLocation = {
        name: location,
        position: [54.7134, -10.2079], // Default position; can be updated later
        population: 0, // Default population
        reports: 1,
        mostRecent: waterType,
      };
      setLocationsList([...locationsList, newLocation]);
      alert("Report submitted successfully");
      router.refresh();
      setIsSubmitting(false);
    }
  }

  const handleWaterTypeChange = (event) => {
    setWaterType(event.target.value);
  };

  return (
    <main>
      <MapContainer
        center={[54.6, -6.4]}
        zoom={10}
        style={{ height: "600px", width: "100%" }}
        className="rounded-lg shadow-lg overflow-hidden"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker
            key={location.name}
            position={location.position as [number, number]}
            icon={icon}
            eventHandlers={{
              click: () => setActiveLocation(location.name),
            }}
          >
            <Popup>
              <div className="text-center">
                <h2 className="text-lg font-semibold">{location.name}</h2>
                <p className="text-sm">
                  Population: {location.population.toLocaleString()}
                </p>
                <p className="text-sm">Reports: {location.reports}</p>
                <p className="text-sm">
                  Most Recent Report: {location.mostRecent}
                </p>
              </div>
            </Popup>
            <div
              className={`absolute bg-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-blue-500 text-blue-500 font-bold text-xs ${
                activeLocation === location.name ? "bg-blue-500 text-white" : ""
              }`}
              style={{ transform: "translate(-50%, -100%)" }}
            >
              {location.reports}
            </div>
          </Marker>
        ))}
      </MapContainer>

      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Report Water Near You
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={onSubmit}
            className="space-y-8 rounded-lg border p-6 shadow-sm bg-white"
          >
            {/* Location Field */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium">
                Location
              </Label>
              <Input
                id="location"
                name="location"
                placeholder="Enter the location"
                required
              />
            </div>

            {/* Water Type Field */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Water Type</Label>
              <select
                id="waterType"
                name="waterType"
                value={waterType}
                onChange={handleWaterTypeChange}
                className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="drinking">Drinking Water</option>
                <option value="algae">Algae</option>
                <option value="pollution">Water Pollution</option>
              </select>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
