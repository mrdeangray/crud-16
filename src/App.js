import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardProvider from "./context/CardProvider";
import ReadCards from "./components/ReadCards";
import CreateCard from "./components/CreateCard";
import UpdateCard from "./components/UpdateCard";
import DeleteCard from "./components/DeleteCard";

function App() {
  return (
    <div className="App">
      <CardProvider>
        <Routes>
          <Route exact path="/" element={<ReadCards />} />
          <Route exact path="/create" element={<CreateCard />} />
          <Route exact path="/update/:id" element={<UpdateCard />} />
          <Route exact path="/delete/:id" element={<DeleteCard />} />
        </Routes>
      </CardProvider>
    </div>
  );
}

export default App;
