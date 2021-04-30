import { useState } from "react";
import { GET_DATA, INITIAL_GET_DATA_VARIABLES } from "./queries";
import { Query } from "./Query";

const App:React.FC =() => {
  const [getDataVariables, setGetDataVariables] = useState(INITIAL_GET_DATA_VARIABLES)

  const handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void = (e) => {
    setGetDataVariables({ ...getDataVariables, query:e.target.value })
  }

  return (
    <>
      <form>
        <input value={getDataVariables.query} onChange={handleChange}/>
      </form>
      <div className="App"> </div>
      <Query query={GET_DATA} variables={getDataVariables}/>
    </>

  );
}

export default App;
