"use client";

import { Mail, ShieldCheck, Trash2, Clock, CheckCircle2 } from "lucide-react";

export default function Home() {
  const correo = "eclipsaropa@gmail.com";

  const solicitarEliminacion = () => {
    const asunto = encodeURIComponent("Solicitud de eliminación de cuenta");
    const cuerpo = encodeURIComponent(
      "Hola, deseo solicitar la eliminación de mi cuenta de Eclípsa.\n\n" +
        "El correo asociado a mi cuenta es:\n\n"
    );

    window.location.href = `mailto:${correo}?subject=${asunto}&body=${cuerpo}`;
  };

  return (
    <main
  className="min-h-screen px-4 py-8 sm:px-6 lg:px-8"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(255, 241, 236, 0.82),
        rgba(255, 241, 236, 0.82)
      ),
      url("/background.jpg")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
      <div className="mx-auto max-w-3xl">
        {/* Encabezado */}
        <header className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2EC4B6] shadow-md">
            <Trash2 className="h-8 w-8 text-white" strokeWidth={2} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-[#1F2D2E] sm:text-4xl">
            Eliminación de cuenta
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#6B6B6B]">
            En Eclípsa respetamos tu decisión de eliminar tu cuenta y los datos
            asociados a ella.
          </p>
        </header>

        {/* Tarjeta principal */}
        <section className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-[#F0E0DC]">
          {/* Franja superior */}
          <div className="h-2 bg-[#FF7A59]" />

          <div className="p-6 sm:p-10">
            {/* Introducción */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1F2D2E]">
                ¿Quieres eliminar tu cuenta?
              </h2>

              <p className="mt-3 leading-7 text-[#6B6B6B]">
                Puedes solicitar la eliminación de tu cuenta de Eclípsa y de
                los datos personales asociados a ella. Para hacerlo, sigue los
                pasos indicados a continuación.
              </p>
            </div>

            {/* Pasos */}
            <div className="space-y-4">
              {/* Paso 1 */}
              <div className="flex gap-4 rounded-2xl bg-[#E6F7F6] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2EC4B6] font-bold text-white">
                  1
                </div>

                <div>
                  <h3 className="font-semibold text-[#1F2D2E]">
                    Prepara tu solicitud
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#6B6B6B]">
                    Envía la solicitud desde el correo electrónico asociado a
                    tu cuenta de Eclípsa.
                  </p>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="flex gap-4 rounded-2xl bg-[#FFF1EC] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF7A59] font-bold text-white">
                  2
                </div>

                <div>
                  <h3 className="font-semibold text-[#1F2D2E]">
                    Solicita la eliminación
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#6B6B6B]">
                    Indica que deseas eliminar tu cuenta y proporciona el
                    correo electrónico utilizado en Eclípsa.
                  </p>
                </div>
              </div>

              {/* Botón */}
              <button
                onClick={solicitarEliminacion}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2EC4B6] px-5 py-4 font-semibold text-white shadow-sm transition hover:bg-[#27afa2] active:scale-[0.99]"
              >
                <Mail className="h-5 w-5" />
                Solicitar eliminación de cuenta
              </button>

              <p className="text-center text-sm text-[#6B6B6B]">
                También puedes enviar directamente un correo a{" "}
                <a
                  href={`mailto:${correo}`}
                  className="font-medium text-[#2EC4B6] hover:underline"
                >
                  {correo}
                </a>
              </p>
            </div>

            {/* Separador */}
            <div className="my-10 h-px bg-[#F0E0DC]" />

            {/* Datos que se eliminan */}
            <section>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1EC]">
                  <ShieldCheck
                    className="h-5 w-5 text-[#FF7A59]"
                    strokeWidth={2}
                  />
                </div>

                <h2 className="text-xl font-bold text-[#1F2D2E]">
                  Datos que serán eliminados
                </h2>
              </div>

              <p className="mb-4 leading-7 text-[#6B6B6B]">
                Al procesar una solicitud válida de eliminación, se eliminarán
                los datos personales asociados a la cuenta que puedan ser
                eliminados de acuerdo con nuestras obligaciones legales.
              </p>

              <ul className="space-y-3">
                {[
                  "Información del perfil de usuario.",
                  "Correo electrónico asociado a la cuenta.",
                  "Datos personales proporcionados durante el registro.",
                  "Información y preferencias asociadas a la cuenta.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#2EC4B6]"
                    />
                    <span className="text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Datos conservados */}
            <section className="mt-10 rounded-2xl bg-[#FFF7D6] p-5 sm:p-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFD166]">
                  <Clock
                    className="h-5 w-5 text-[#1F2D2E]"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h2 className="font-bold text-[#1F2D2E]">
                    Datos que pueden conservarse
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#6B6B6B]">
                    Determinada información podría conservarse cuando sea
                    necesario para cumplir obligaciones legales, fiscales,
                    contables, prevenir fraude, resolver disputas o cumplir
                    otras obligaciones aplicables. Estos datos se conservarán
                    únicamente durante el período necesario y serán eliminados
                    cuando deje de existir la obligación de conservarlos.
                  </p>
                </div>
              </div>
            </section>

            {/* Tiempo */}
            <section className="mt-8">
              <h2 className="text-xl font-bold text-[#1F2D2E]">
                Tiempo de procesamiento
              </h2>

              <p className="mt-3 leading-7 text-[#6B6B6B]">
                Las solicitudes serán revisadas y procesadas dentro de un
                plazo razonable. Una vez completada la eliminación, se
                notificará al usuario mediante el correo utilizado para
                realizar la solicitud.
              </p>
            </section>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center">
          <p className="font-semibold text-[#1F2D2E]">Eclípsa</p>

          <p className="mt-1 text-sm text-[#6B6B6B]">
            Tu espacio para descubrir prendas que vuelven a tener historia.
          </p>

          <p className="mt-4 text-xs text-[#6B6B6B]">
            © {new Date().getFullYear()} Eclípsa. Todos los derechos
            reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}