export const metadata = {
  title: "Checkout | KNGO",
  description: "Secure checkout for KNGO competitions.",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          Secure Checkout
        </h1>

        <p className="text-white/70 mb-8">
          Payments are processed securely. This checkout is
          Stripe-ready and will go live soon.
        </p>

        <div className="rounded-xl border border-white/10 bg-black/60 p-6 space-y-4">
          <div className="flex justify-between">
            <span>Competition entry</span>
            <span>£5.00</span>
          </div>

          <div className="flex justify-between text-white/70">
            <span>Processing fee</span>
            <span>£0.00</span>
          </div>

          <div className="border-t border-white/10 pt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>£5.00</span>
          </div>

          {/* Stripe placeholder */}
          <div className="mt-6 rounded-lg border border-dashed border-yellow-400/40 p-4 text-sm text-yellow-400 text-center">
            Stripe payment element will appear here
          </div>

          <button
            disabled
            className="mt-4 w-full bg-gray-500 text-gray-900 py-3 rounded-lg font-semibold cursor-not-allowed"
          >
            Pay securely (coming soon)
          </button>
        </div>

        <p className="mt-6 text-xs text-white/50 text-center">
          Payments will be handled by Stripe. Card details are
          never stored on our servers.
        </p>
      </div>
    </main>
  );
}
