import './App.css'
import './index.css'
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";
import DetailsCard from './components/molecules/detailsCard/DetailsCard';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        {
          //Routes
        }
      </Layout>
    </BrowserRouter>
  );
}

export default App
