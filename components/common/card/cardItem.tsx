import Image from "next/image";
import { CheckCircle, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

// CardItem Component
function CardItem({ title, price, offer, advantages, buttonText,imageUrl }: any) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6 flex flex-col items-center">
        <Image
          src={imageUrl}
          alt={`Carte ${title}`}
          width={240}
          height={150}
          className="rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        <p className="text-lg font-medium mb-4">{price}</p>
        <div className="bg-green-50 text-green-800 rounded-full py-2 px-4 flex items-center mb-6">
          <CheckCircle className="h-4 w-4 mr-2" />
          <span className="text-sm">{offer}</span>
        </div>
      </div>

      <CardContent className="border-t pt-6">
        <h3 className="font-medium mb-4">Vos avantages</h3>
        <div className="space-y-6">
          {advantages.map((advantage: any, index: number) => (
            <div className="flex" key={index}>
              <div className="mr-4">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium">{advantage.title}</h4>
                {advantage.description && (
                  <p className="text-sm text-gray-600">{advantage.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="border-t p-6">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">{buttonText}</Button>
      </CardFooter>
    </Card>
  );
}

export default CardItem;
