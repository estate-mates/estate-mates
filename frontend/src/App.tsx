import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import TheNav from "./components/app/TheNav";
import { RouterProvider } from "react-router-dom";
import browserRouter from "./router/browserRouter";
import { ResetStyles, GlobalStyles } from "./styles";
import { Suspense } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // @ts-ignore
      suspense:true,
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true}/>
      <ResetStyles />
      <GlobalStyles />
      {/* <TheNav /> */}
      <Suspense fallback={<div>...loading</div>}>
        <RouterProvider router={browserRouter} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
