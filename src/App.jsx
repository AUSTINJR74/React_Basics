import "./App.css"


// Child components, data is imported
import HomepageLeft from "../src/Homepage/HomepageLeft" 
import HomepageRight from "../src/Homepage/HomepageRight"
import data from "./data/e-commerce_content.json"


function App() {
  return (
    <div className="App">

      {/* Data is passed to the child component */}
      <HomepageLeft data={data} /> 
      <HomepageRight data={data} />
      
    </div>
  );
}

export default App;
