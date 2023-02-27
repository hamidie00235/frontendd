
import './App.css';
import Card from "./Components/Card";
import { useState } from "react";

let arr = [

{
  title: "dağ 1",
par: "aciklama",
},
{
  title: "dağ 1",
par: "aciklama",
},
{
  title: "dağ 1",
par: "aciklama",
}


];
const App = () => { 
const[val,setVal]= useState("ders11");

  return(<div>
<h1>baslik</h1>
<h2>{val}</h2>
<button onClick={() => {   
  setVal("ders12");
}}>
  değiştir 
  </button>

<p>baslangic</p>
<div className="Cards">
  {arr.map(({par ,title}) => (
    <Card par={par} title={title} />
  ))}
</div>
</div>
  );
};

export default App;
