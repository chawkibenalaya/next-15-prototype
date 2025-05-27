import CardComparison from "@/components/common/card/cardComparison"
import PromoBanner from "@/components/common/promoBanner"
import { Offer } from "@/types/offerType";


// Main Component
export default async function Home() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/offers", {
    cache: "no-store", // ⬅️ équivalent à getServerSideProps
  });
  const offers = await res.json();

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Choisissez la carte qui vous correspond</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Plutôt avec ou sans assurance ? Besoin de plafonds élargis ? Envie d'une carte gratuite ? C'est simple, chez
            nous c'est à la carte.
          </p>
          <CardComparison offers={offers}/>
        </div>
      </main>
    </div>
  )
}