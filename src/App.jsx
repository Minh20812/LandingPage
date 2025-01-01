import Router from "./Router";
import Header from "./components/page/Header";
import Footer from "./components/page/Footer";

const App = () => {
  return (
    <>
      <div className=" relative">
        <Header />
        <Router />
        <Footer />
      </div>
    </>
  );
};

export default App;
