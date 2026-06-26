import InteractiveGenomicDnaBackground from "@/components/ui/interactive-genomic-dna-background";

const DemoOne = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <InteractiveGenomicDnaBackground />

      <section className="relative z-10 flex min-h-screen items-center px-6">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Genética clínica en Mérida
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
            Genética del cáncer y oncología de precisión
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Estudios genéticos que ayudan a médicos y familias a comprender el riesgo hereditario, las opciones de tratamiento y el monitoreo de la enfermedad.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/20"
            >
              Agendar por WhatsApp
            </a>

            <a
              href="#productos"
              className="rounded-xl border border-slate-300 bg-white/80 px-6 py-3 font-semibold text-slate-900 backdrop-blur"
            >
              Ver estudios
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export { DemoOne };
