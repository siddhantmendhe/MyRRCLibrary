import Button from './Button';
import './index.css'
import Profilecardapp from './Profilecardapp';
function App() {
  return (
    <div >
      <h1 className="text-3xl font-bold underline flex justify-center mb-10"> This is an app</h1>
     
     <Profilecardapp/>
     <Button text="This is a button"/>
 
    </div>
  );
}

export default App;
