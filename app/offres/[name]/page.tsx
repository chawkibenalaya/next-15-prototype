import { Offer } from '@/types/offerType';
import { notFound } from 'next/navigation';



export async function generateStaticParams() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'/offers');
  const offers: Offer[] = await res.json();

  return offers.map((offer) => ({
    name: offer.name,
  }));
}

export default async function OfferPage({ params }: { params: { name: string } }) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/offers`);
  const offers: Offer[] = await res.json();

  const offer = offers.find((o) => o.name === params.name);

  if (!offer) return notFound();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{offer.name}</h1>
      <p className="text-gray-700 mb-2">Prix : {offer.monthlyPrice}€/mois</p>
      <p className="text-gray-700 mb-2">
        Offre : Jusqu'à {offer.bonusAmount}€ offerts {offer.bonusLegalReference}
      </p>
      <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
        <li>
          Plafond paiement carte : {offer.physicalPaymentLimit}€ (physique) / {offer.virtualPaymentLimit}€ (virtuelle) sur {offer.paymentLimitPeriodDays} jours
        </li>
        <li>
          Plafond retrait : {offer.withdrawalLimit}€ / {offer.withdrawalLimitPeriodDays} jours
        </li>
        <li>Carte composée de {offer.cardMaterial}</li>
      </ul>
    </div>
  );
}
