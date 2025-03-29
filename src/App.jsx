import { Suspense } from "react";
import Bottles from "./components/Bottles/Bottles";



const bottlesPromise=fetch('./Bottles.json').then(res=>res.json());

function App() {


  return (
    <>
  
      <h1>Awesome Water Bottles</h1>
     <Suspense fallback={<h1>Bottles Data are Loading....</h1>}>
      <Bottles bottlesPromise={bottlesPromise}></Bottles>
     </Suspense>

    </>
  )
}

export default App
