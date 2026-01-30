import { AlertCircle, DollarSign, Hammer, CheckCircle, Gem, Trophy } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    title: "Unreliable Contractors",
    description: "Missed deadlines, poor communication, and subpar workmanship"
  },
  {
    icon: DollarSign,
    title: "Hidden Costs & Overruns",
    description: "Budget surprises and unexpected expenses that drain your wallet"
  },
  {
    icon: Hammer,
    title: "Poor Quality Materials",
    description: "Cheap materials that look good initially but fail quickly"
  }
];

const solutions = [
  {
    icon: CheckCircle,
    title: "Licensed Professionals",
    description: "10+ years experience with guaranteed timelines and quality workmanship"
  },
  {
    icon: Gem,
    title: "Transparent Fixed Pricing",
    description: "Detailed quotes with no hidden fees - what we quote is what you pay"
  },
  {
    icon: Trophy,
    title: "Premium Materials Only",
    description: "We source the finest materials with lifetime warranties for lasting beauty"
  }
];

export default function PainPointsSolutions() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-diamond-900 mb-6">From Problems to Perfection</h3>
          <div className="w-24 h-1 bg-luxury-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the challenges homeowners face. That's why we've perfected our process to deliver flawless results every time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <h4 className="text-3xl font-bold text-red-600 mb-8">Common Renovation Nightmares</h4>
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl border-l-4 border-red-500"
                data-testid={`card-pain-${index}`}
              >
                <point.icon className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">{point.title}</h5>
                  <p className="text-gray-700">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h4 className="text-3xl font-bold text-green-600 mb-8">Our Diamond Standard Solutions</h4>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl border-l-4 border-green-500"
                data-testid={`card-solution-${index}`}
              >
                <solution.icon className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">{solution.title}</h5>
                  <p className="text-gray-700">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
