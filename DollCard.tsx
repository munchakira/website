import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "./ui/dialog";
import type { Doll } from "./DollGallery";

interface DollCardProps {
  doll: Doll;
}

export function DollCard({ doll }: DollCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === doll.imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? doll.imageUrls.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Clickable Card Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-left w-full cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={doll.imageUrls[0]}
            alt={`${doll.culture} traditional outfit`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
            <span className="text-white text-lg bg-red-700 px-4 py-2 rounded-full">
              Click for Details
            </span>
          </div>
          
          {/* Region badge */}
          <div className="absolute top-4 right-4 bg-stone-700 text-white px-3 py-1 rounded-full text-sm">
            {doll.region}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl mb-2 text-stone-800">
            {doll.culture}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {doll.description}
          </p>
        </div>
      </button>

      {/* Dialog with Detailed Information - Following Sketch Layout */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
          <div className="grid md:grid-cols-2 gap-0">
            {/* LEFT SIDE - Image with Navigation */}
            <div className="bg-gray-100 p-6 flex flex-col items-center justify-center">
              {/* Image */}
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-white shadow-lg">
                <ImageWithFallback
                  src={doll.imageUrls[currentImageIndex]}
                  alt={`${doll.culture} angle ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Arrow Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={previousImage}
                  className="p-2 rounded-full bg-red-700 text-white hover:bg-red-800 transition-colors shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-6" />
                </button>
                
                <span className="text-gray-600">
                  {currentImageIndex + 1} / {doll.imageUrls.length}
                </span>
                
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full bg-red-700 text-white hover:bg-red-800 transition-colors shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - Tribe Information */}
            <div className="p-6 flex flex-col">
              {/* Tribe Name Header */}
              <DialogHeader className="mb-6">
                <DialogTitle className="text-4xl text-stone-800 mb-2">
                  {doll.detailedInfo.tribe}
                </DialogTitle>
                <DialogDescription className="text-lg text-gray-600">
                  {doll.detailedInfo.location}
                </DialogDescription>
              </DialogHeader>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto space-y-6">
                {/* Tribe Overview Section */}
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                  <h4 className="text-xl mb-3 text-stone-800">Tribe Overview</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {doll.detailedInfo.overview}
                  </p>
                  
                  {/* Traditional Garments */}
                  <div className="mt-4">
                    <h5 className="text-lg mb-2 text-stone-700">Traditional Garments:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {doll.detailedInfo.traditionalGarments.map((garment, index) => (
                        <li key={index}>{garment}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials */}
                  <div className="mt-4">
                    <h5 className="text-lg mb-2 text-stone-700">Materials:</h5>
                    <div className="flex flex-wrap gap-2">
                      {doll.detailedInfo.materials.map((material, index) => (
                        <span
                          key={index}
                          className="bg-amber-200 text-stone-800 px-3 py-1 rounded-full text-sm"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Patterns */}
                  <div className="mt-4">
                    <h5 className="text-lg mb-2 text-stone-700">Patterns & Designs:</h5>
                    <p className="text-gray-700 leading-relaxed">
                      {doll.detailedInfo.patterns}
                    </p>
                  </div>
                </div>

                {/* History Section */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="text-xl mb-3 text-blue-900">History</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {doll.detailedInfo.history}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}