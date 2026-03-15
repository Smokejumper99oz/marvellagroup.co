export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Marvella Group
      </h1>

      <p className="text-xl text-gray-300 mb-12 text-center max-w-xl">
        Aviation Software Platforms built by airline crew.
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border border-gray-800 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">CrewRules™</h2>
          <p className="text-gray-400">
            Contract intelligence and scheduling tools for airline pilots and flight attendants.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">FastMX™</h2>
          <p className="text-gray-400">
            Real-time aircraft maintenance coordination and communication.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">HOTcalc™</h2>
          <p className="text-gray-400">
            Accurate aircraft holdover time calculations for winter operations.
          </p>
        </div>
      </div>
    </main>
  )
}