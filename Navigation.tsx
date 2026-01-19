import { useState } from "react";
import { Menu, X, Info, Users, BookOpen, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const openDialog = (dialogName: string) => {
    setActiveDialog(dialogName);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl text-stone-800">Habi ng Panahon</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => openDialog("about")}
              className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition-colors"
            >
              <Info className="size-5" />
              <span>About</span>
            </button>
            <button
              onClick={() => openDialog("tribes")}
              className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition-colors"
            >
              <Users className="size-5" />
              <span>The Tribes</span>
            </button>
            <button
              onClick={() => openDialog("project")}
              className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition-colors"
            >
              <BookOpen className="size-5" />
              <span>Our Project</span>
            </button>
            <button
              onClick={() => openDialog("contact")}
              className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition-colors"
            >
              <Mail className="size-5" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-stone-800"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => openDialog("about")}
                className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition-colors text-left"
              >
                <Info className="size-5" />
                <span>About</span>
              </button>
              <button
                onClick={() => openDialog("tribes")}
                className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition-colors text-left"
              >
                <Users className="size-5" />
                <span>The Tribes</span>
              </button>
              <button
                onClick={() => openDialog("project")}
                className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition-colors text-left"
              >
                <BookOpen className="size-5" />
                <span>Our Project</span>
              </button>
              <button
                onClick={() => openDialog("contact")}
                className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition-colors text-left"
              >
                <Mail className="size-5" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* About Dialog */}
      <Dialog open={activeDialog === "about"} onOpenChange={() => setActiveDialog(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl text-stone-800">About Habi ng Panahon</DialogTitle>
            <DialogDescription className="text-lg">
              Weaving Through Time - A Cultural Preservation Project (ANO TAGALOG NITO PLS)
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              ang habi ng panahon ay blablablabla
            </p>
            <p>
              ang layunin namin ay blablabla
            </p>
            <p>
              ang bawat manika ay nagsisilbing halimbawa ng blablabla
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-200">
              <h4 className="text-xl mb-2 text-stone-800">Misyon</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>i-preserve(??) ang tradisyon ng pilipino sa paghabi</li>
                <li>magpalaganap ng kaalaman tungkol sa balablabalbalbak</li>
                <li>suportahan ang mga tribo at ang kanilang mga tradisyon</li>
                <li>pag-ugnayin ang agwat sa pagitan ng tradisyon at modernong awdyens(?)</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* The Tribes Dialog */}
      <Dialog open={activeDialog === "tribes"} onOpenChange={() => setActiveDialog(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl text-stone-800">Mga Tribo</DialogTitle>
            <DialogDescription className="text-lg">
              Ang mga pangkay-etnikong ipinagdiriwang namin
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            {/* Kalinga */}
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="text-2xl mb-2 text-red-900">Kalinga</h4>
              <p className="text-gray-700 mb-2"><strong>Location:</strong> Kalinga Province, Cordillera Region</p>
              <p className="text-gray-700">
                desc
              </p>
            </div>

            {/* Ivatan */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-2xl mb-2 text-blue-900">Ivatan</h4>
              <p className="text-gray-700 mb-2"><strong>Location:</strong> Batanes Islands, Northern Philippines</p>
              <p className="text-gray-700">
                desc
              </p>
            </div>

            {/* Tagalog */}
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="text-2xl mb-2 text-amber-900">Tagalog</h4>
              <p className="text-gray-700 mb-2"><strong>Location:</strong> Central and Southern Luzon</p>
              <p className="text-gray-700">
                desc
              </p>
            </div>

            {/* Bontoc */}
            <div className="bg-stone-100 p-4 rounded-lg border border-stone-300">
              <h4 className="text-2xl mb-2 text-stone-800">Bontoc</h4>
              <p className="text-gray-700 mb-2"><strong>Location:</strong> Mountain Province, Cordillera Region</p>
              <p className="text-gray-700">
                desc
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Our Project Dialog */}
      <Dialog open={activeDialog === "project"} onOpenChange={() => setActiveDialog(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl text-stone-800">Ang Proyekto</DialogTitle>
            <DialogDescription className="text-lg">
              Paano binubuhay ang kultura sa pamamagitan ng proyektong ito
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              blablabla
            </p>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="text-xl mb-2 text-stone-800">Our Approach(ANO TAGALOG NITO)</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Pananaliksik:</strong> Kami ay nagsasagawa ng masusing pananaliksik tungkol sa mga tribo, at ang kanilang mga tradisyon.</li>
                <li><strong>Disenyo:</strong> Ang bawat pananamit ng manika ay sariling disenyo.</li>
                <li><strong>Documentation:</strong> idk what 2 put here yall</li>
                <li><strong>Education:</strong> Ang proyekto ay nagsisilbing "accessible" na source(!!) ng impormasyon.</li>
              </ol>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-xl mb-2 text-blue-900">Bakit Manika?</h4>
              <p>
                pinili namin ito dahil blablablabla
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="text-xl mb-2 text-red-900">Kultural na Respeto</h4>
              <p>
                idk what 2 put here ...? we conducted thorough research to ensure accurate information so as to respect the tribes etc etc..
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Dialog */}
      <Dialog open={activeDialog === "contact"} onOpenChange={() => setActiveDialog(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl text-stone-800">Contact Us</DialogTitle>
            <DialogDescription className="text-lg">
              Get in touch with the Habi ng Panahon team
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
             reach out 2 us!!!!!
            </p>
            
            <div className="bg-yellow-50 p-6 rounded-lg space-y-4 border border-yellow-200">
              <div>
                <h4 className="text-lg mb-2 text-stone-800">Email</h4>
                <p className="text-gray-700">lalagyanpabanito@gmail.com</p>
              </div>
              
              <div>
                <h4 className="text-lg mb-2 text-stone-800">Social Media</h4>
                <div className="space-y-1">
                  <p className="text-gray-700">Instagram: @WALEY</p>
                  <p className="text-gray-700">Facebook: WALEY</p>
                  <p className="text-gray-700">Twitter: @WALEY</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg mb-2 text-stone-800">Visit Us</h4>
                <p className="text-gray-700">Manila, Philippines</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-lg mb-2 text-blue-900">Collaborations</h4>
              <p className="text-gray-700">
                WAG NA TALAGA LAGYAN NITO
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}