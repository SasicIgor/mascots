import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "reactQuery/queryClient";

import { RouterProvider } from "react-router";

import { ToastProvider } from "contexts/ToastContext";

import Loading from "components/Loading";
import { router } from "components/routes";


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <RouterProvider router={router} />;
        <ReactQueryDevtools initialIsOpen={false} />
        <Loading />
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
