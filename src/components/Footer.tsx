'use client';

declare global {
  interface Window {
    Cookiebot?: {
      show: () => void;
    };
  }
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 mt-12">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 AantalDagenTot.nl - Alle rechten voorbehouden |{' '}
          <button
            type="button"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline bg-transparent border-none cursor-pointer"
            onClick={() => {
              if (window.Cookiebot) {
                window.Cookiebot.show();
              }
            }}
          >
            Cookieverklaring
          </button>
        </p>
      </div>
    </footer>
  );
}