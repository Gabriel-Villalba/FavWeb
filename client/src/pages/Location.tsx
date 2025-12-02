import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink } from "lucide-react";
import mapImage from "@assets/generated_images/ubicacion.jpeg";

export default function Location() {
  const address = "Erasmo Poggi 483, Rafaela, Santa Fe, Argentina";
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">Nuestra Ubicación</h1>
            <p className="text-xl text-muted-foreground">Vení a conocer nuestro taller y showroom.</p>
          </div>

          <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border">
            <div className="relative aspect-video w-full bg-secondary/20 group">
              <img 
                src={mapImage} 
                alt="Mapa de ubicación" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-auto md:w-80 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-border">
                 <div className="flex items-start gap-3 mb-4">
                    <MapPin className="text-primary mt-1 shrink-0" />
                    <div>
                        <h3 className="font-bold text-lg text-foreground">Taller Central</h3>
                        <p className="text-muted-foreground">{address}</p>
                    </div>
                 </div>
                 <Button asChild className="w-full font-bold uppercase bg-primary hover:bg-primary/90 text-white">
                    <a href={mapLink} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Ver en Google Maps
                    </a>
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
