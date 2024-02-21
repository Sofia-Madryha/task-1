import logo from "./logo.svg";
import "./App.css";

function App() {

  const HomePage = lazy(() => import('../pages/HomePage'));
  const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
  
  return (
    <div>
      <Routes>
        <Route path="/" index element={<HomePage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
