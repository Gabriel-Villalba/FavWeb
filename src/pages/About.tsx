import { Layout } from "@/components/layout/Layout";
import { Flame } from "lucide-react";
import workshopImage from "@assets/generated_images/metal_workshop_interior.png";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 pt-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            
            {/* Text */}
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-2 mb-4">
                <Flame size={14} className="text-primary" />
                <span className="text-xs font-heading uppercase tracking-[0.22em] text-primary">Quiénes somos</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl leading-none mb-4 text-foreground">
                NUESTRA<br /><span className="text-fire">HISTORIA</span>
              </h1>
              <div className="divider-fire w-20 mb-8 opacity-50" />

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  En <strong className="text-foreground">FAV Asadores</strong>, el fuego es más que una forma de cocinar; es una tradición que une. Todo comenzó hace más de 15 años en un pequeño taller en Rafaela, donde la pasión por la herrería y el amor por el asado se encontraron.
                </p>
                <p>
                  Lo que empezó como pedidos para amigos y familiares se transformó en un emprendimiento dedicado a crear las mejores herramientas para el asador argentino. Creemos que una buena parrilla no se cambia, se hereda. Cada pieza sale de nuestro taller para resistir miles de encendidas.
                </p>
                <p>
                  Hoy seguimos trabajando con la misma dedicación artesanal, incorporando diseño y tecnología para ofrecer productos funcionales, estéticos y eternos.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-[0_20px_60px_hsl(22_100%_52%_/_0.12)] border border-primary/10 rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src={workshopImage}
                  alt="Nuestro Taller"
                  className="w-full h-full object-cover"
                />
                {/* Fire overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Stat card */}
              <div className="absolute -bottom-5 -left-5 bg-card border border-primary/20 p-5 rounded-lg shadow-[0_8px_30px_hsl(22_100%_52%_/_0.12)] hidden md:block">
                <div className="flex items-center gap-2 mb-1">
                  <Flame size={14} className="text-primary" />
                </div>
                <p className="font-heading font-900 text-4xl text-primary leading-none mb-1">15+</p>
                <p className="text-xs font-heading uppercase tracking-[0.12em] text-muted-foreground">Años forjando calidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
