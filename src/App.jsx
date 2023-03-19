import './App.css'
import './index.css'
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../src/pages/home/HomePage';
import CollectionPage from '../src/pages/collection/CollectionPage';

export function App() {

  return (
    <BrowserRouter>
      <Layout children=
      {
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      }>
      </Layout>
    </BrowserRouter>
  );
}

export default App
