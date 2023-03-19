import './App.css'
import './index.css'
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";
import DetailsCard from './components/molecules/detailsCard/DetailsCard';

export function App() {
  return (
    <BrowserRouter>
      <DetailsCard author={"Aldous Huxley"} quote={"After silence, that which comes nearest to expressing the inexpressible is music."} book={"Brave New World"} genre={"Distopic novel"} year={1967} uploaded={"May 17"}/>
      <Layout>
        {
          //Routes
        }
      </Layout>
    </BrowserRouter>
  );
}

export default App
