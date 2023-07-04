import Button from './Button';
import { GoBellFill } from "react-icons/go";
import './index.css'
import Profilecardapp from './Profilecardapp';
function App() {
  return (
    <div >
      <h1 className="text-3xl font-bold underline flex justify-center mb-10"> This is an app</h1>
     
     <Profilecardapp/>
     <Button  success rounded outline ><GoBellFill />click me</Button>
 
    </div>
  );
}

export default App;
