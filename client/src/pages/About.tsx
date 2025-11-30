import { Layout } from "@/components/layout/Layout";
import workshopImage from "@assets/generated_images/metal_workshop_interior.png";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-6">Nuestra Historia</h1>
                
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                    <p>
                        En <strong>Parrillas & Asadores Gabriel</strong>, el fuego es más que una forma de cocinar; es una tradición que une. Todo comenzó hace más de 15 años en un pequeño taller en Rafaela, donde la pasión por la herrería y el amor por el asado se encontraron.
                    </p>
                    <p>
                        Lo que empezó como pedidos para amigos y familiares pronto se transformó en un emprendimiento dedicado a crear las mejores herramientas para el asador argentino. Creemos que una buena parrilla no se cambia, se hereda. Por eso, cada pieza que sale de nuestro taller está construida para resistir el paso del tiempo y miles de encendidas.
                    </p>
                    <p>
                        Hoy, seguimos trabajando con la misma dedicación artesanal, pero incorporando tecnología y diseño para ofrecer productos funcionales, estéticos y eternos.
                    </p>
                </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                        src={workshopImage} 
                        alt="Nuestro Taller" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-xl border border-border max-w-xs hidden md:block">
                    <p className="font-heading font-bold text-4xl text-primary mb-1">15+</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide font-bold">Años de experiencia forjando calidad</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
