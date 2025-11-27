import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import AppRoutes from "./app/routes/AppRoutes";
import { LoadingPage } from "./shared/LoadingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        toastOptions={{
          style: {
            fontSize: "12px",
            padding: "6px 10px",
            borderRadius: "6px",
            minWidth: "180px",
          },
          success: {
            style: {
              background: "#4f46e5",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "#4f46e5",
            },
          },
          error: {
            style: {
              background: "#ef4444",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "#ef4444",
            },
          },
        }}
        position="top-right"
        reverseOrder={false}
      />
      <Suspense
        fallback={
          <div>
            {" "}
            <LoadingPage />{" "}
          </div>
        }
      >
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <AppRoutes />
            </Provider>
          </QueryClientProvider>
        </GoogleOAuthProvider>
      </Suspense>
    </BrowserRouter>
  );
}
