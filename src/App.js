import "./App.css";
import UserList from "./components/Users";
import Countries from "./components/Countries";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  let title = "react-app";
  return (
    <div className="App">
      <Header></Header>
      <span>{title} app is running!</span>
      <h2>React Display JSON Data from Rest API</h2>
      <UserList></UserList> <br></br>
      <br></br>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

export default App;
