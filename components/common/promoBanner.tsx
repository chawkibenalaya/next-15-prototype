import { CheckCircle, X } from "lucide-react"

function PromoBanner() {
    return (
      <div className="bg-green-50 py-3 px-4 relative">
        <div className="container mx-auto flex items-center justify-center">
          <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
          <p className="text-sm">
            Jusqu'à 230€ offerts<sup>(1)(2)</sup>. N'attendez plus pour découvrir nos cartes !
          </p>
          <button name="btn_fermer" className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
    )
  }
  export default PromoBanner;