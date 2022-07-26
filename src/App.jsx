
/* DEPENDENCES */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Styles */
import "./styles/App.css";

/* Components */
import MainContext from "./context/MainContext.jsx"; /* Global Context */
import Header from "./pages/Home/Components/Header.jsx";

/* Pages */
import HOME from "./pages/Home/Components/HOME.jsx";
import CREATE from "./pages/Create/CREATE.jsx";
import VIEW from "./pages/view/VIEW";

function App() {
  return (
    <MainContext>
      <BrowserRouter>

      <div className="main_content">
        <Header/>     
       <Routes>
          <Route path="/" element={<HOME/>} />
          <Route path="/view/:bookId" element={<VIEW/>}></Route>
          <Route path="/Create" element={<CREATE/>} />
          <Route path="/*" element={<h1>Errror 404</h1>}/>
        </Routes>
      </div>

       
      </BrowserRouter>
    </MainContext>
  );
}

export default App;
