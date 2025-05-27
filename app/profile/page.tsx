'use client';

import { useAuth } from "@/context/authContext";
import { use, useEffect, useState } from "react";

type UserDto = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function ProfilePage() {
  const { user } = useAuth();
  const [email, setEmail] = useState(user?.email || "");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailUpdate = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/user/update-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        credentials: "include", // Include cookies in the request
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour de l'email.");
      }

      setSuccess("Email mis à jour avec succès !");
      setIsEditing(false);
      setError("");
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue.");
      setSuccess("");
    }
  };

  useEffect(() => {
    if (user?.email && email === "") {
      setEmail(user.email);
    }
  },[user?.email])

  if (!user) {
    return <></>;
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Mon Profil</h1>

      <div className="space-y-5 bg-white shadow-md rounded-xl p-6">
        <div>
          <p className="text-sm text-gray-500">Nom complet</p>
          <p className="text-lg font-medium">{user.firstName} {user.lastName}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Email</p>
          {isEditing ? (
            <div className="flex items-center space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
              <button
                onClick={handleEmailUpdate}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Enregistrer
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEmail(user.email);
                }}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Annuler
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <p className="text-lg font-medium">{email}</p>
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-600 hover:underline"
              >
                Modifier
              </button>
            </div>
          )}
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}
        {success && <p className="text-sm text-green-500">{success}</p>}

        <div>
          <p className="text-sm text-gray-500">Statut</p>
          <p className="text-sm inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full">
            Client vérifié
          </p>
        </div>

      </div>
    </div>
  );
}