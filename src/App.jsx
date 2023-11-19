import { Route, Routes } from "react-router";
import { SharedLayout } from "./shared/components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import CommentPage from "./pages/CommentPage/CommentPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/:id" element={<CommentPage />} />
      </Route>
    </Routes>
  );
}

export default App;
