import ServiceAreaTemplate from "./ServiceAreaTemplate";

const neighborhoods = ["Port Credit", "Streetsville", "Erin Mills", "Meadowvale", "Clarkson", "Cooksville", "Lorne Park", "Square One"];

export default function Mississauga() {
  return <ServiceAreaTemplate city="Mississauga" neighborhoods={neighborhoods} />;
}
