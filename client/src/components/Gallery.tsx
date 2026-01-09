import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import flooringBefore1 from "@/assets/flooring-before-1.jpg";
import flooringAfter1 from "@/assets/flooring-after-1.jpg";
import flooringBefore2 from "@/assets/flooring-before-2.jpg";
import flooringAfter2 from "@/assets/flooring-after-2.jpg";
import flooringBefore3 from "@/assets/flooring-before-3.jpg";
import flooringAfter3 from "@/assets/flooring-after-3.jpg";
import flooringBefore4 from "@/assets/flooring-before-4.jpg";
import flooringAfter4 from "@/assets/flooring-after-4.jpg";

import bathroomBefore1 from "@/assets/bathroom-before1.jpg";
import bathroomAfter1 from "@/assets/bathroom-after1.jpg";
import bathroomBefore2 from "@/assets/bathroom-before-2.jpg";
import bathroomAfter2 from "@/assets/bathroom-after-2.jpg";
import bathroomBefore3 from "@/assets/bathroom-before-3.jpg";
import bathroomAfter3 from "@/assets/bathroom-after-3.jpg";

import staircaseBefore1 from "@/assets/staircase-before-1.jpg";
import staircaseAfter1 from "@/assets/staircase-after-1.jpg";
import staircaseBefore2 from "@/assets/staircase-before-2.jpg";
import staircaseAfter2 from "@/assets/staircase-after-2.jpg";
import staircaseBefore3 from "@/assets/staircase-before-3.jpg";
import staircaseAfter3 from "@/assets/staircase-after-3.jpg";

import tilesBefore1 from "@/assets/tiles-before-1.jpg";
import tilesAfter1 from "@/assets/tiles-after-1.jpg";

const galleryCategories = [
  {
    id: "staircase",
    title: "Staircase",
    pairs: [
      { before: staircaseBefore3, after: staircaseAfter3, title: "Modern Stair Makeover" },
      { before: staircaseBefore1, after: staircaseAfter1, title: "Custom Staircase Refinishing" },
      { before: staircaseBefore2, after: staircaseAfter2, title: "Oak Staircase Restoration" },
    ]
  },
  {
    id: "bathroom",
    title: "Bathroom",
    pairs: [
      { before: bathroomBefore3, after: bathroomAfter3, title: "Modern Bathroom Update" },
      { before: bathroomBefore2, after: bathroomAfter2, title: "Master Bath Renovation" },
      { before: bathroomBefore1, after: bathroomAfter1, title: "Luxury Bathroom Remodel" },
    ]
  },
  {
    id: "tiles",
    title: "Tiles",
    pairs: [
      { before: tilesBefore1, after: tilesAfter1, title: "Tile Installation" },
    ]
  },
  {
    id: "flooring",
    title: "Flooring",
    pairs: [
      { before: flooringBefore4, after: flooringAfter4, title: "Premium Floor Refinishing" },
      { before: flooringBefore2, after: flooringAfter2, title: "Living Room Floor Upgrade" },
      { before: flooringBefore3, after: flooringAfter3, title: "Modern Flooring Installation" },
      { before: flooringBefore1, after: flooringAfter1, title: "Hardwood Flooring Transformation" },
    ]
  },
];

function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl group" data-testid="before-after-slider">
      <div className="relative h-80 md:h-96">
        <img
          src={after}
          alt={`${title} - After`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={before}
            alt={`${title} - Before`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-luxury-500 cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-luxury-500 rounded-full flex items-center justify-center shadow-lg">
            <ChevronLeft className="w-4 h-4 text-white -ml-1" />
            <ChevronRight className="w-4 h-4 text-white -mr-1" />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          aria-label="Before and after comparison slider"
        />
        <div className="absolute top-4 left-4 bg-diamond-900/80 text-white px-3 py-1 rounded-full text-sm font-medium">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-luxury-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
          After
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <p className="text-white font-bold text-lg">{title}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("staircase");
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCategory = galleryCategories.find(cat => cat.id === activeCategory)!;
  const currentPair = currentCategory.pairs[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? currentCategory.pairs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === currentCategory.pairs.length - 1 ? 0 : prev + 1));
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentIndex(0);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-diamond-900 mb-6">Before & After Gallery</h3>
          <div className="w-24 h-1 bg-luxury-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the stunning transformations from our real projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={activeCategory === category.id 
                ? "bg-luxury-600 hover:bg-luxury-700 text-white" 
                : "border-diamond-300 text-diamond-700 hover:bg-diamond-50"
              }
              onClick={() => handleCategoryChange(category.id)}
              data-testid={`button-category-${category.id}`}
            >
              {category.title}
            </Button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <BeforeAfterSlider
            before={currentPair.before}
            after={currentPair.after}
            title={currentPair.title}
          />

          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="border-diamond-300 text-diamond-700 hover:bg-diamond-50"
              data-testid="button-gallery-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <span className="text-diamond-700 font-medium">
              {currentIndex + 1} / {currentCategory.pairs.length}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="border-diamond-300 text-diamond-700 hover:bg-diamond-50"
              data-testid="button-gallery-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {currentCategory.pairs.map((pair, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative rounded-lg overflow-hidden w-24 h-24 md:w-28 md:h-28 transition-all duration-300 ${
                currentIndex === index ? "ring-4 ring-luxury-500 scale-105" : "opacity-70 hover:opacity-100"
              }`}
              data-testid={`thumbnail-${activeCategory}-${index}`}
            >
              <img
                src={pair.after}
                alt={pair.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
