import './App.css'
import './index.css'
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../src/pages/home/HomePage';

export function App() {
  return (
    <BrowserRouter>
      <Layout children=
      {
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      }>
      </Layout>
    </BrowserRouter>
  );
}

export default App
