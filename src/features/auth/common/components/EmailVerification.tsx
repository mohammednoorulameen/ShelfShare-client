import React from "react";

type UIState = "processing" | "success" | "failed" | "resent";

interface Props {
  state: UIState;
}

const EmailVerification: React.FC<Props> = ({ state }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
        {/* PROCESSING */}
        {state === "processing" && (
          <>
            <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-indigo-600 mx-auto"></div>
            <h2 className="text-xl font-semibold mt-6">
              Verifying your email…
            </h2>
            <p className="text-gray-600 mt-2">
              Please wait a moment while we confirm your account.
            </p>
          </>
        )}

        {/* SUCCESS */}
        {state === "success" && (
          <>
            <img
              src="https://i.imgur.com/Ld0ZAjJ.png"
              className="w-20 mx-auto"
              alt="success"
            />
            <h2 className="text-2xl font-semibold mt-4">Email Verified 🎉</h2>
            <p className="text-gray-600 mt-2">
              Your account has been successfully verified.
            </p>
            <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
              Continue to Login
            </button>
          </>
        )}

        {/* FAILED */}
        {state === "failed" && (
          <>
            <img
              src="https://i.imgur.com/Ta3lw3K.png"
              className="w-20 mx-auto"
              alt="failed"
            />
            <h2 className="text-2xl font-semibold mt-4">Verification Failed</h2>
            <p className="text-gray-600 mt-2">
              The verification link is invalid or expired.
            </p>
            <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
              Resend Verification Email
            </button>
          </>
        )}

        {/* RESENT */}
        {/* RESENT */}
        {state === "resent" && (
          <>
            <img
              src="https://i.imgur.com/J68wQpR.png"
              className="w-20 mx-auto"
              alt="resent"
            />
            <h2 className="text-2xl font-semibold mt-4">New Email Sent 📩</h2>

            <p className="text-gray-600 mt-2">
              Please check your inbox for the new verification link.
            </p>

            {/* SMALL RESEND BUTTON */}
            <button className="mt-5 text-indigo-600 font-medium text-sm underline hover:text-indigo-800 transition">
              Resend Email Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
