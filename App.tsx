import { DollGallery } from "./components/DollGallery";
import { Navigation } from "./components/Navigation";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-red-50 to-blue-50">
      {/* Navigation Menu */}
      <Navigation />

      {/* Textile Banner with Gradient Overlay */}
      <div className="relative h-64 md:h-80 overflow-hidden mt-16">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1756361771453-6bce7c2cf539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwd292ZW4lMjBmYWJyaWN8ZW58MXx8fHwxNzY3NzkzNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Filipino indigenous textile pattern"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - Traditional Colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-red-800/40 to-yellow-700/30"></div>
        
        {/* Title Overlay on Banner */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl mb-4 text-white drop-shadow-lg">
              Habi ng Panahon
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
              kasaysayang hinabi sa hibla (sample tagline lang to)
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Project Overview */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">
            pagdiriwang ng tradisyon ng pilipino sa tela
          </p>
        </div>

        {/* Gallery */}
        <DollGallery />
      </div>
    </div>
  );
}