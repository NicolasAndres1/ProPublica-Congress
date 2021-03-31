import './App.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header title={'ProPublica Congress'} />
      <SearchBar />
      {/* <Footer /> */}
    </>
  );
}

export default App;
