import ServiceAreaTemplate from "./ServiceAreaTemplate";

const neighborhoods = ["Etobicoke", "North York", "Scarborough", "East York", "York", "Downtown", "Midtown", "The Beaches"];

export default function Toronto() {
  return <ServiceAreaTemplate city="Toronto" neighborhoods={neighborhoods} />;
}
