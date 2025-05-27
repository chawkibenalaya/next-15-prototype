export default function SeeYouSoonPopup({ onClose }: { onClose: () => void }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4">À bientôt 👋</h2>
          <p className="text-gray-600 mb-4">Vous avez été déconnecté avec succès.</p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={onClose}
          >
            Fermer
          </button>
        </div>
      </div>
    );
  }