export default function ConfirmarCorreo() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#FFF1EC] px-5">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
                <div className="mb-5 text-5xl">
                    ✓
                </div>

                <h1 className="text-2xl font-bold text-[#C75D7A]">
                    Correo confirmado
                </h1>

                <p className="mt-3 text-gray-600">
                    Tu correo electrónico ha sido confirmado
                    correctamente.
                </p>

                <p className="mt-2 text-sm text-gray-500">
                    Ya puedes volver a Eclípsa e iniciar sesión
                    con tu cuenta.
                </p>
            </div>
        </main>
    );
}