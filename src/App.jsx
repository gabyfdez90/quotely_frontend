import './App.css'
import './index.css'
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../src/pages/home/HomePage';
import CollectionPage from '../src/pages/collection/CollectionPage';
import GenrePage from '../src/pages/genre/GenrePage';
import FormPage from './pages/form/formPage';
import SongDetailsPage from './pages/songDetails/SongDetailsPage';

export function App() {

  return (
    <BrowserRouter>
      <Layout children=
      {
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/genre" element={<GenrePage />} />
        <Route path="/add" element={<FormPage />} />
        <Route path="/song-details/:id" element={<SongDetailsPage />} />
        </Routes>
      }>
      </Layout>
    </BrowserRouter>
  );
}

export default App
