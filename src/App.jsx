import './App.css'
import SearchBar from './components/atoms/searchBar/SearchBar';
import './index.css'
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Layout>
        {
          //Routes
        }
      </Layout>
    </BrowserRouter>
  );
}

export default App
