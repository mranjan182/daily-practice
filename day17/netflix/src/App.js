import logo from "./logo.svg";
import "./App.css";
import { Card } from "./component/Card";
import { Data } from "./component/Data";
function App() {
  return (
    <>
      <div className="App">
        <h1 className="heading">List of top 5 Prime web series</h1>
      </div>
      <div className="addcard">
        {Data.map((elem) => {
          return <Card
           key={elem.id}
            image={elem.imageLink}
            title={elem.title}
            name={elem.name}
            prime={elem.primelink}
          />;
        })}
      </div>
    </>
  );
}

export default App;
