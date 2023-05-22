import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const SharedLayout = lazy(() => import("../SharedLayout"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const TweetsPage = lazy(() => import("../../pages/TweetsPage"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
