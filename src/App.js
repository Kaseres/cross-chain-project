import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './containers/navbar/Navbar';
import Welcome from './containers/home/Welcome';
import TablePage from './containers/table/TablePage';
import ConnectWallet from './containers/wallect/ConnectWallet';
import MyCollections from './containers/nft/Collections';
import MintPage from './containers/nft/MintPage';
import CollectionDetail from './containers/nft/CollectionDetail';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="table" element={<TablePage />} />
          <Route path="connect-wallet" element={<ConnectWallet />} />
          <Route path="my-collection" element={<MyCollections />} />
          <Route path="mint-nft" element={<MintPage />} />
          <Route path="collection-detail" element={<CollectionDetail />} />
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
