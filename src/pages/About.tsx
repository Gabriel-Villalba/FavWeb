import { Layout } from "@/components/layout/Layout";
import workshopImage from "@assets/generated_images/metal_workshop_interior.png";

export default function About() {
  return (
    <Layout>
      <div className="mx-auto w-full max-w-5xl px-4 pb-8 pt-4 md:px-6 md:pt-10">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft md:rounded-[2.5rem]">
              <img src={workshopImage} alt="Nuestro Taller" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 right-4 grid h-28 w-28 rotate-6 place-items-center rounded-full bg-sun text-center shadow-soft md:-left-6 md:right-auto md:h-32 md:w-32">
              <div>
                <p className="font-heading text-4xl font-extrabold leading-none">15+</p>
                <p className="mt-1 px-2 text-[0.65rem] font-bold leading-tight">años forjando calidad</p>
              </div>
            </div>
          </div>

          <div className="pt-4 md:pt-0">
            <span className="inline-block rounded-full bg-peach px-3 py-1 text-xs font-bold text-primary">Quiénes somos</span>
            <h1 className="mt-3 text-5xl md:text-6xl">Nuestra <span className="hl">historia</span></h1>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
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
        </div>
      </div>
    </Layout>
  );
}
