import { Layout } from "@/components/layout/Layout";
import { MapPin, ExternalLink, Flame } from "lucide-react";
import mapImage from "@assets/generated_images/ubicacion.jpeg";

export default function Location() {
  const address = "Erasmo Poggi 483, Rafaela, Santa Fe, Argentina";
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 pt-28">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Flame size={14} className="text-primary" />
              <span className="text-xs font-heading uppercase tracking-[0.22em] text-primary">Encontranos</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl leading-none mb-3 text-foreground">
              NUESTRA<br /><span className="text-fire">UBICACIÓN</span>
            </h1>
            <div className="divider-fire w-20 opacity-50" />
          </div>

          {/* Map card */}
          <div className="bg-card rounded-xl overflow-hidden border border-primary/15 shadow-[0_0_40px_hsl(22_100%_52%_/_0.08)]">
            <div className="relative aspect-video w-full bg-secondary/20 group">
              <img
                src={mapImage}
                alt="Mapa de ubicación"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

              {/* Floating info card */}
              <div className="absolute bottom-5 left-5 right-5 md:left-7 md:right-auto md:w-80 bg-card/97 backdrop-blur-md p-6 rounded-lg border border-primary/20 shadow-[0_8px_30px_hsl(0_0%_0%_/_0.4)]">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-8 h-8 rounded-md bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={15} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base uppercase tracking-wide text-foreground mb-1">Taller & Showroom</h3>
                    <p className="text-sm text-muted-foreground">{address}</p>
                  </div>
                </div>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading font-700 uppercase tracking-[0.12em] text-xs px-5 py-3 rounded-md transition-all duration-300 shadow-[0_0_14px_hsl(22_100%_52%_/_0.3)] hover:shadow-[0_0_22px_hsl(22_100%_52%_/_0.5)]"
                >
                  <ExternalLink size={13} /> Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
