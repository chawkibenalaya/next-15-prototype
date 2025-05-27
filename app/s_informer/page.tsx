export const metadata = {
    title: "S'informer - BforBank",
    description: "Articles utiles pour mieux comprendre vos produits bancaires",
  };
  
  type Article = {
    title: string;
    body: string;
  };

  // Static Site Generation Next.js va générer cette page au build time 

  export default async function SInformerPage() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/articles");
  
    if (!res.ok) {
      throw new Error("Erreur lors de la récupération des articles");
    }
  
    const articles: Article[] = await res.json();
  
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">S'informer avec BforBank</h1>
        <p className="text-gray-700 mb-8">
          Retrouvez nos derniers articles pour mieux gérer vos finances personnelles,
          comprendre les produits bancaires et développer votre culture financière.
        </p>
  
        <div className="space-y-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  