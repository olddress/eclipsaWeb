import Link from "next/link";

export default function PoliticaPrivacidad() {
  return (
    <main className="min-h-screen bg-[#FFF1EC] px-5 py-10 sm:px-8">
      <div className="mx-auto w-full max-w-4xl">

        {/* Encabezado */}
        <header className="mb-10 flex flex-col items-center text-center">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#F0E0DC] bg-white shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C75D7A"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#1E1E1E] sm:text-4xl">
            Política de privacidad
          </h1>

          <div className="mt-4 rounded-xl border border-[#F4E7DF] bg-[#FDF3EE] px-4 py-2">
            <p className="text-sm font-bold text-[#FF7A59]">
              Última actualización: agosto de 2026
            </p>
          </div>
        </header>

        {/* Introducción */}
        <section className="mb-5 rounded-[22px] border border-[#E9DED3] bg-white p-6 shadow-sm sm:p-7">
          <p className="text-[16px] leading-7 text-[#5F5651]">
            En <strong>Eclípsa</strong> valoramos tu privacidad. Esta política
            explica qué información recopilamos, cómo la utilizamos, con quién
            podemos compartirla y cuáles son tus derechos sobre tus datos
            personales cuando utilizas nuestra aplicación y nuestros servicios.
          </p>

          <p className="mt-4 text-[16px] leading-7 text-[#5F5651]">
            Utilizamos la información únicamente para proporcionar, mantener y
            mejorar nuestros servicios, gestionar pedidos, procesar pagos,
            realizar entregas, brindar soporte y proteger la seguridad de
            nuestros usuarios.
          </p>
        </section>

        {/* Información que recopilamos */}
        <section className="mb-5 rounded-[22px] border border-[#E9DED3] bg-white p-6 shadow-sm sm:p-7">
          <SectionTitle
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2EC4B6"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
            title="Información que recopilamos"
          />

          <div className="space-y-3">
            <ListItem text="Nombre." />

            <ListItem text="Documento de identidad." />

            <ListItem text="Correo electrónico." />

            <ListItem text="Número de teléfono." />

            <ListItem text="Direcciones de entrega." />

            <ListItem text="Información relacionada con pedidos y compras." />

            <ListItem text="Información necesaria para procesar pagos." />

            <ListItem text="Información técnica necesaria para el funcionamiento y seguridad de la aplicación." />
          </div>
        </section>

        {/* Uso de la información */}
        <section className="mb-5 rounded-[22px] border border-[#E9DED3] bg-white p-6 shadow-sm sm:p-7">
          <SectionTitle
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2EC4B6"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="m7 16 4-5 3 3 5-7" />
              </svg>
            }
            title="¿Para qué usamos tu información?"
          />

          <p className="text-[16px] leading-7 text-[#5F5651]">
            Utilizamos los datos personales para las siguientes finalidades:
          </p>

          <div className="mt-4 space-y-3">
            <ListItem text="Crear y administrar tu cuenta." />

            <ListItem text="Autenticar tu identidad y mantener segura tu cuenta." />

            <ListItem text="Procesar y gestionar tus pedidos." />

            <ListItem text="Coordinar y realizar las entregas." />

            <ListItem text="Procesar los pagos asociados a tus compras." />

            <ListItem text="Brindar atención y soporte al cliente." />

            <ListItem text="Prevenir actividades fraudulentas y proteger la seguridad de nuestros servicios." />

            <ListItem text="Cumplir obligaciones legales y requerimientos de las autoridades competentes." />

          </div>
        </section>

        {/* Procesamiento de pagos */}
        <section className="mb-5 rounded-[22px] border border-[#E9DED3] bg-white p-6 shadow-sm sm:p-7">
          <SectionTitle
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2EC4B6"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
              </svg>
            }
            title="Procesamiento de pagos"
          />

          <p className="text-[16px] leading-7 text-[#5F5651]">
            Para procesar los pagos realizados a través de Eclípsa utilizamos
            proveedores especializados en servicios de pago, como{" "}
            <strong>Wompi</strong>.
          </p>

          <p className="mt-4 text-[16px] leading-7 text-[#5F5651]">
            La información necesaria para procesar una transacción puede ser
            compartida con el proveedor de pagos correspondiente. Estos
            proveedores procesan la información de acuerdo con sus propias
            políticas de privacidad y medidas de seguridad.
          </p>

          <p className="mt-4 text-[16px] leading-7 text-[#5F5651]">
            Eclípsa no utiliza la información de pago de los usuarios con fines
            publicitarios o de marketing.
          </p>
        </section>

        {/* Transporte y entregas */}
        <section className="mb-5 rounded-[22px] border border-[#E9DED3] bg-white p-6 shadow-sm sm:p-7">
          <SectionTitle
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2EC4B6"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 17h14" />
                <path d="M6 17V7h8l4 4v6" />
                <circle cx="8" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
                <path d="M14 7v4h4" />
              </svg>
            }
            title="Transporte y entregas"
          />

          <p className="text-[16px] leading-7 text-[#5F5651]">
            Para realizar la entrega de los pedidos, Eclípsa puede utilizar
            proveedores de servicios de transporte y operadores logísticos
            externos.
          </p>

          <p className="mt-4 text-[16px] leading-7 text-[#5F5651]">
            Cuando sea necesario para completar una entrega, podremos compartir
            con el proveedor de transporte información como el nombre del
            destinatario, número de teléfono, dirección de entrega y los datos
            necesarios para identificar y gestionar el pedido.
          </p>

          <p className="mt-4 text-[16px] leading-7 text-[#5F5651]">
            Entre los proveedores de transporte que podemos utilizar se
            encuentran empresas como <strong>Inter Rapidísimo</strong> y otros
            operadores logísticos, dependiendo de la disponibilidad, cobertura
            y características del servicio seleccionado para cada pedido.
          </p>

          <p className="mt-4 text-[16px] leading-7 text-[#5F5651]">
            La información compartida con estos proveedores se limita, en la
            medida razonablemente posible, a aquella necesaria para realizar y
            gestionar la entrega.
          </p>
        </section>

        {/* Compartición de información */}
        <section className="mb-5 rounded-[22px] border border-[#E9DED3] bg-white p-6 shadow-sm sm:p-7">
          <SectionTitle
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2EC4B6"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
            title="Compartición de información"
          />

          <p className="text-[16px] leading-7 text-[#5F5651]">
            Eclípsa no vende los datos personales de sus usuarios.
          </p>

          <p className="mt-4 text-[16px] leading-7 text-[#5F5651]">
            Podemos compartir determinados datos personales con proveedores de
            servicios que sean necesarios para el funcionamiento de Eclípsa.
            Esto puede incluir proveedores de procesamiento de pagos, servicios
            de alojamiento de datos e infraestructura tecnológica, empresas de
            transporte y entrega, y otros proveedores necesarios para prestar
            nuestros servicios.
          </p>

          <p className="mt-4 text-[16px] leading-7 text-[#5F5651]">
            También podremos divulgar información cuando sea necesario para
            cumplir obligaciones legales, responder a solicitudes de
            autoridades competentes, prevenir fraudes o proteger los derechos,
            la seguridad y los bienes de Eclípsa y de sus usuarios.
          </p>
        </section>

        {/* Seguridad */}
        <section className="mb-5 rounded-[22px] border border-[#E9DED3] bg-white p-6 shadow-sm sm:p-7">
          <SectionTitle
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2EC4B6"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            }
            title="Seguridad"
          />

          <p className="text-[16px] leading-7 text-[#5F5651]">
            Aplicamos medidas técnicas y organizativas razonables para proteger
            los datos personales frente al acceso no autorizado, pérdida,
            alteración, divulgación o destrucción.
          </p>

          <p className="mt-4 text-[16px] leading-7 text-[#5F5651]">
            Sin embargo, ningún sistema de almacenamiento o transmisión de
            información a través de Internet puede garantizar una seguridad
            absoluta. Trabajamos continuamente para mantener protegida la
            información que manejamos.
          </p>
        </section>

        {/* Conservación */}
        <section className="mb-5 rounded-[22px] border border-[#E9DED3] bg-white p-6 shadow-sm sm:p-7">
          <SectionTitle
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2EC4B6"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M8 6V4h8v2" />
                <path d="M19 6l-1 15H6L5 6" />
                <path d="M10 11v5" />
                <path d="M14 11v5" />
              </svg>
            }
            title="Conservación de los datos"
          />

          <p className="text-[16px] leading-7 text-[#5F5651]">
            Conservamos los datos personales durante el tiempo necesario para
            proporcionar nuestros servicios, gestionar las cuentas y pedidos,
            cumplir obligaciones legales, resolver disputas y hacer cumplir
            nuestros acuerdos.
          </p>

          <p className="mt-4 text-[16px] leading-7 text-[#5F5651]">
            Cuando los datos ya no sean necesarios para estas finalidades,
            podrán ser eliminados o anonimizados de acuerdo con nuestras
            obligaciones legales y operativas.
          </p>
        </section>

        {/* Derechos */}
        <section className="mb-5 rounded-[22px] border border-[#E9DED3] bg-white p-6 shadow-sm sm:p-7">
          <SectionTitle
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2EC4B6"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <path d="M14 2v6h6" />
                <path d="M8 13h8" />
                <path d="M8 17h5" />
              </svg>
            }
            title="Tus derechos"
          />

          <p className="text-[16px] leading-7 text-[#5F5651]">
            De acuerdo con la legislación aplicable, puedes ejercer derechos
            relacionados con tus datos personales, incluyendo:
          </p>

          <div className="mt-4 space-y-3">
            <ListItem text="Solicitar información sobre los datos personales que tratamos." />

            <ListItem text="Solicitar la actualización o corrección de información incorrecta." />

            <ListItem text="Solicitar la eliminación de tus datos cuando sea legalmente procedente." />

            <ListItem text="Solicitar información sobre el uso y tratamiento de tus datos." />

            <ListItem text="Presentar consultas, solicitudes o reclamos relacionados con el tratamiento de tus datos personales." />
          </div>
        </section>

        {/* Administración de cuenta */}
        <section className="mb-5 rounded-[22px] border border-[#E9DED3] bg-white p-6 shadow-sm sm:p-7">
          <SectionTitle
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2EC4B6"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
            title="Administración de la cuenta"
          />

          <p className="text-[16px] leading-7 text-[#5F5651]">
            Los datos asociados a tu cuenta se utilizan para permitirte acceder
            a Eclípsa, gestionar tu información, consultar tus pedidos y utilizar
            las funciones disponibles para usuarios registrados.
          </p>

          <p className="mt-4 text-[16px] leading-7 text-[#5F5651]">
            Si solicitas la eliminación de tu cuenta, podremos conservar cierta
            información cuando sea necesario para cumplir obligaciones legales,
            resolver disputas o mantener registros de transacciones.
          </p>
        </section>

        {/* Contacto */}
        <section className="mt-7 rounded-3xl border border-[#F0E0DC] bg-[#FDF3EE] p-7 text-center sm:p-8">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2EC4B6"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
            </svg>
          </div>

          <h2 className="mt-4 text-2xl font-extrabold text-[#1E1E1E]">
            Contacto
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-6 text-[#6F625B]">
            Si tienes preguntas, solicitudes o inquietudes relacionadas con
            esta política de privacidad o con el tratamiento de tus datos
            personales, puedes comunicarte con nuestro equipo de soporte.
          </p>

          <Link
            href="/ayuda"
            className="mt-5 inline-flex rounded-xl bg-[#2EC4B6] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
          >
            Ayuda y soporte
          </Link>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-[#E9DED3] pt-7 text-center">
          <h2 className="text-xl font-extrabold text-[#1E1E1E]">
            Gracias por confiar en Eclípsa
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#7A6E66]">
            Tu privacidad y seguridad son una prioridad para nosotros.
          </p>

          <p className="mt-5 text-xs text-[#9B9088]">
            © 2026 Eclípsa. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Componentes auxiliares                                                     */
/* -------------------------------------------------------------------------- */

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mb-5 flex items-center">
      <div className="shrink-0">{icon}</div>

      <h2 className="ml-3 text-xl font-extrabold text-[#1E1E1E]">
        {title}
      </h2>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FF7A59"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-1 shrink-0"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>

      <span className="ml-3 text-[15px] leading-6 text-[#5F5651]">
        {text}
      </span>
    </div>
  );
}