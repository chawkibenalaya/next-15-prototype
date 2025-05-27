export const metadata = {
    title: "Financer - BforBank",
    description: "Découvrez nos solutions de financement : crédits, prêts et conseils.",
  };
  
  type Financement = {
    title: string;
    description: string;
  };
  
  export default async function FinancerPage() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/financements", {
      next: { revalidate: 3600 }, // ISR : revalide toutes les 1h
    });
  
    if (!res.ok) {
      throw new Error("Impossible de récupérer les données de financement");
    }
  
    const offres: Financement[] = await res.json();
  
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Financer vos projets</h1>
        <p className="text-gray-700 mb-8">
          BforBank vous accompagne dans vos projets personnels et professionnels grâce à
          des solutions de financement adaptées à vos besoins.
        </p>
  
        <div className="space-y-6">
          {offres.map((offre, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{offre.title}</h2>
              <p className="text-gray-600">{offre.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  