import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import Feed from "./components/Feed";

function App() {
  return (
    <Provider store={appStore}>
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/" element={<Feed/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    </Provider>
  );
}

export default App;
