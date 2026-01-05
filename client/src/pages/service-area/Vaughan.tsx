import ServiceAreaTemplate from "./ServiceAreaTemplate";

const neighborhoods = ["Woodbridge", "Maple", "Kleinburg", "Thornhill", "Concord", "Vellore Village", "Patterson", "Rutherford"];

export default function Vaughan() {
  return <ServiceAreaTemplate city="Vaughan" neighborhoods={neighborhoods} />;
}
