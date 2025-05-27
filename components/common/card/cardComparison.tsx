import Link from "next/link";
import { Offer } from "@/types/offerType";
import CardItem from "./cardItem";
import { off } from "process";

function CardComparison({ offers }: { offers: Offer[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {offers?.map((offer, index) => (
        <Link href={`/offres/${offer.name}`} key={index} className="block">
          <CardItem
            title={offer.name}
            price={`${offer.monthlyPrice}€/mois`}
            offer={`Jusqu'à ${offer.bonusAmount}€ offerts${offer.bonusLegalReference}`}
            advantages={[
              {
                title: "Plafonds de paiement par carte",
                description: `${offer.physicalPaymentLimit}€ pour la carte physique et ${offer.virtualPaymentLimit}€ pour la carte virtuelle sur ${offer.paymentLimitPeriodDays} jours glissants`,
              },
              {
                title: "Plafonds de retraits par carte",
                description: `${offer.withdrawalLimit}€ / ${offer.withdrawalLimitPeriodDays} jours glissants`,
              },
              {
                title: "",
                description: `Votre carte ${offer.name} est composée de ${offer.cardMaterial}`,
              },
            ]}
            buttonText="Choisir cette carte"
            imageUrl={offer.imageUrl}
          />
        </Link>
      ))}
    </div>
  );
}

export default CardComparison;
