'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const SeeYouSoonPopup = dynamic(() => import("@/components/common/seeYouSoonPopup"), { ssr: false });


function Header() {
  const [showGoodbye, setShowGoodbye] = useState(false);
  const { logout, isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    setShowGoodbye(true);
    logout();
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-16">
        <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
      </div>
    );
  }
  return (
    <>
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center">
              <div className="mr-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
              </div>
              <div className="font-bold text-xl">B FOR BANK</div>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600">Compte & cartes</a>
            <a href="#" className="hover:text-blue-600">Épargner</a>
            <Link href="/financer" className="hover:text-blue-600">Financer</Link>
            <a href="#" className="hover:text-blue-600">S'assurer</a>
            <Link href="/s_informer" className="hover:text-blue-600">S'informer</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link href="/profile" className="text-sm text-gray-700 hover:underline">
                  {user?.lastName || "Mon Profil"}
                </Link>
                <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600">
                  Déconnexion
                </Button>
              </div>
            ) : (
              <>
                <Link href="/auth/login" className="hidden md:block text-sm text-blue-600 hover:underline">
                  Je suis déjà client
                </Link>
                <Button
                  name="btn_ouvrir_un_compte"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => router.push("/auth/register")}
                >
                  Ouvrir un compte
                </Button>
              </>
            )}
            <Button name="btn_menu" variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {showGoodbye && <SeeYouSoonPopup onClose={() => setShowGoodbye(false)} />}
      </header>

    </>
  );
}

export default Header;
