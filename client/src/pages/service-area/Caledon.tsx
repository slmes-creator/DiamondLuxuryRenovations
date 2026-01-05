import ServiceAreaTemplate from "./ServiceAreaTemplate";

const neighborhoods = ["Bolton", "Caledon East", "Palgrave", "Inglewood", "Alton", "Cheltenham", "Mono Mills", "Albion"];

export default function Caledon() {
  return <ServiceAreaTemplate city="Caledon" neighborhoods={neighborhoods} />;
}
