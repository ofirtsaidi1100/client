import { Navbar } from "../../features/navbar";
import { Home } from "../../pages/home";
import { Chat } from "../../pages/chat";
import { Route, Routes } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <div className="w-full h-full">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
};
