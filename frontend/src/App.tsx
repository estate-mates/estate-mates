import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TheNav from "./components/app/TheNav";
import { RouterProvider } from "react-router-dom";
import browserRouter from "./router/browserRouter";
import { ResetStyles } from "./styles";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ResetStyles />
      {/* <TheNav /> */}
      <RouterProvider router={browserRouter} />
    </QueryClientProvider>
  );
}

export default App;
