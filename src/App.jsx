import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/login" element={<LoginPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
