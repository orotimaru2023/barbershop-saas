'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white p-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-4">💈 Barbershop SaaS</h1>
        <p className="text-xl text-gray-300 mb-8">Platform moderna para agendamento de barbearia</p>
        
        <div className="space-y-4">
          <div className="p-6 bg-slate-700 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Phase 1: MVP</h2>
            <p className="text-gray-200 mb-4">Desenvolvendo agora...</p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
                Agendar
              </button>
              <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold">
                Login
              </button>
            </div>
          </div>
          
          <div className="text-left space-y-2 text-sm">
            <h3 className="font-bold text-lg mb-3">Próximos passos:</h3>
            <p>✅ Database schema criado</p>
            <p>⏳ Autenticação Keycloak</p>
            <p>⏳ Booking form com calendário</p>
            <p>⏳ Dashboard barbeiros</p>
            <p>⏳ Notificações por email</p>
            <p>⏳ WhatsApp bot (Phase 2)</p>
          </div>
        </div>
      </div>
    </main>
  );
}