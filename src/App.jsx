import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

  return (
    <div>
      <Routes>
        <Route
          path="/"
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        ></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
