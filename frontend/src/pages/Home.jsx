export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[400px] bg-[#f7f9fc]">
        {/* Navigation */}
        

        <div className="absolute inset-0 bg-gradient-to-r from-[#09ab8e]/80 to-[#1eb2cb]/80">
          <div className="container mx-auto px-4 pt-32">
            <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl">
              Trouvez le moyen de transport idéal pour vos trajets entre villes
            </h1>
            <p className="text-white/90 mt-4 max-w-xl">
              Planifiez votre voyage dès maintenant. Économisez, voyagez facilement
            </p>
          </div>
        </div>

        {/* Search Form */}
        <div className="absolute left-0 right-0 -bottom-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-4">
              <input placeholder="Départ" className="flex-1 p-2 border rounded" />
              <button className="p-2 border rounded">⇄</button>
              <input placeholder="Arrivée" className="flex-1 p-2 border rounded" />
              <input type="date" className="flex-1 p-2 border rounded" />
              <button className="bg-[#1eb2cb] text-white p-2 rounded hover:bg-[#1eb2cb]/90">🔍 Chercher</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 mt-24">
        {/* Covoiturage Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Vous souhaitez effectuer un <span className="text-[#1eb2cb]">Covoiturage</span> ?
            </h2>
            <p className="mt-4 text-gray-600">
              Chez EcoRide, sécurité et confiance sont nos priorités. Chaque membre est authentifié par une pièce
              d'identité et une photo, avec un numéro de téléphone vérifié. En choisissant le covoiturage EcoRide, vous
              contribuez à une mobilité plus durable en réduisant l'empreinte carbone.
            </p>
          </div>
          <div className="relative h-[300px]">
            {/* Placeholder for image */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">Image placeholder</div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Les destinations les plus populaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Casablanca", "Rabat", "Marrakech", "Agadir"].map((city) => (
              <div key={city} className="group cursor-pointer overflow-hidden rounded-lg shadow-md">
                <div className="relative h-48 bg-gray-300">
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <h3 className="text-white text-xl font-semibold">{city}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-12">
            Le <span className="text-[#1eb2cb]">Covoiturage</span> selon <span className="text-[#09ab8e]">EcoRide</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Trouver une correspondance",
                description: "Trouvez rapidement et facilement des critères similaires de voyage et de correspondance",
              },
              {
                title: "Payer",
                description: "Réservez votre course en ligne en quelques clics",
              },
              {
                title: "C'est tout",
                description: "Profitez de votre voyage et rencontrez de nouvelles personnes",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#f7f9fc] rounded-full flex items-center justify-center">
                  {/* Placeholder for icon */}
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-[#f7f9fc] py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            {["Facebook", "Twitter", "Instagram", "Youtube"].map((social, index) => (
              <button key={index} className="text-gray-600 hover:text-[#1eb2cb]">
                {social}
              </button>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">© 2024 EcoRide.com - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  )
}

