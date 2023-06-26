import './index.css'
import ProfileCard from './ProfileCard';
function App() {
  return (
    <div >
      <h1 className="text-3xl font-bold underline flex justify-center mb-10"> This is an app</h1>
      <div className='flex justify-evenly '> 
      <ProfileCard name="Jack" phone={161651651651} title="Web dev" handle="jack@twitter" imageSrc="https://i.pravatar.cc/150?u=a042581f4e29026704a"/>
      <ProfileCard name="John" phone={161651465451}  title="Android Dev" handle="john@Facebook" imageSrc="https://i.pravatar.cc/150?u=a042581f4e29026704c"/>
      </div>
    </div>
  );
}

export default App;
