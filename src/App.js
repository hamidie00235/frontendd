import { Button,Container,Grid , Input,Textarea,Stack} from '@mantine/core';
import './App.css';
import Card from "./Components/Card";
import { useState } from "react";

const App = () => {
  const[title,setTitle] = useState("");
  const[paragraph,setParagraph] = useState("");
  const[list,setList] = useState([

    {id:1,
      title: "dağ 1",
    par: "aciklama 1",
    },
    {id:2,
      title: "dağ 2",
    par: "aciklama 2",
    },
    {id:3,
      title: "dağ 3",
    par: "aciklama 3",
    }
    ,
    ]);
const click = () => {
  setTitle("");
  setParagraph("");
 
setList([...list,{
  id:5,
  title,
  par :paragraph,
}
]);};
  
  return(
  <Container>
<h1>kart olusmturma programi</h1>
<stack >
<Input.Wrapper label="Start">
<Input placeholder="write here" width={400} value={title} onChange={(e)=> setTitle(e.target.value)}/>
</Input.Wrapper>

    <Textarea
      placeholder="write paragraph here"
      label="paragraph" value={paragraph} onChange={(e)=> setParagraph(e.target.value)}/>

<Button variant="outline" onClick={click}  >kart olusmtur</Button>

</stack>
<h2>kartlar:</h2>
<Grid>
  {list.map(({par ,title}, i) => (
    <Grid.Col span={4}key={`index ${i}`}>
    <Card 
   par={par} 
    title={title} i={i} click={() =>{
      let copyList = [...list];
      copyList.splice(i,1);
      setList(copyList);
      
    }}/>
    </Grid.Col>
  ))}
</Grid>
</Container>
  );
};

export default App ;
