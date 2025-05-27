'use client'; // Obligatoire pour les composants d'erreur

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
      <h2 className="text-2xl font-bold text-red-600">Oups, une erreur est survenue</h2>
      <p className="text-gray-600">{error.message}</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => reset()}
      >
        Réessayer
      </button>
    </div>
  );
}
