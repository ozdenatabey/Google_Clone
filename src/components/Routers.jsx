import { Route, Routes } from "react-router-dom";
import Results from "./Results";

export const Routers = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Results />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};
