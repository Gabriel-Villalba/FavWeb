import { Layout } from "@/components/layout/Layout";
import { MapPin, ExternalLink } from "lucide-react";
import mapImage from "@assets/generated_images/ubicacion.jpeg";

export default function Location() {
  const address = "Erasmo Poggi 483, Rafaela, Santa Fe, Argentina";
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <Layout>
      <div className="mx-auto w-full max-w-4xl px-4 pb-8 pt-4 md:px-6 md:pt-10">
        <div className="mb-7 md:mb-10">
          <span className="inline-block rounded-full bg-aqua px-3 py-1 text-xs font-bold text-pool">Encontranos</span>
          <h1 className="mt-3 text-5xl md:text-7xl">Nuestra <span className="hl">ubicación</span></h1>
          <p className="mt-3 text-muted-foreground md:text-lg">Vení a conocer nuestro taller y showroom.</p>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft md:aspect-video md:rounded-[2.5rem]">
            <img src={mapImage} alt="Mapa de ubicación" className="h-full w-full object-cover" />
          </div>

          <div className="relative z-10 -mt-10 ml-4 mr-4 rounded-3xl bg-white p-5 shadow-soft md:absolute md:bottom-8 md:left-8 md:ml-0 md:mr-0 md:mt-0 md:w-80 md:p-6">
            <div className="mb-4 flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-peach text-primary">
                <MapPin size={20} />
              </span>
              <div>
                <h3 className="text-lg">Taller & Showroom</h3>
                <p className="text-sm text-muted-foreground">{address}</p>
              </div>
            </div>
            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-pop transition hover:-translate-y-0.5"
            >
              <ExternalLink size={16} /> Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
