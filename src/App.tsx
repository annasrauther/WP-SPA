import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

// Lazy-load your components using React.lazy
const Home = React.lazy(() => import("./pages/Home"));
const Page = React.lazy(() => import("./pages/Page"));
const Login = React.lazy(() => import("./pages/Login"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/:slug" element={<Page />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
