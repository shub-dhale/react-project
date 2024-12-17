

import { useState } from 'react';
import './index.css';
//import Cards from './components/cards';

function App() {
  const [add, setAdd] = useState(15)

  const addition = () => {
    setAdd(add + 1);
    setAdd(add + 1);
    setAdd(add + 1);
    setAdd(add + 1);

  }
  const sub = () => {
    setAdd(add - 1);
  }

  return (
    <>
      {/* <div class="flex items-center justify-center h-screen">
        <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" />
        <div>
          <strong>Andrew Alfred</strong>
        </div>
        <Cards />
        <Cards />


      </div> */}
      <button onClick={addition}>Add Value{add}</button><br />
      <button onClick={sub}>Remove Value{add}</button>



    </>
  );
}

export default App;
