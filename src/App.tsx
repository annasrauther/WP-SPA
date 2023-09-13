// Import dependencies
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import components
import Header from "./components/Header";
import Loading from "./components/Loading";

// Import Context
import { AuthProvider } from "./context/AuthContext";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const Page = React.lazy(() => import("./pages/Page"));
const Login = React.lazy(() => import("./pages/Login"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

/**
 * App component
 *
 * @returns {JSX.Element}
 * @component
 */
function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/:slug" element={<Page />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
