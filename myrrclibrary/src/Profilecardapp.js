import ProfileCard from "./ProfileCard";
function Profilecardapp(){
    return(
    <div  className='flex justify-evenly '> 
         <ProfileCard name="Jack" phone={161651651651} title="Web dev" handle="jack@twitter" imageSrc="https://i.pravatar.cc/150?u=a042581f4e29026704a"/>
      <ProfileCard name="John" phone={161651465451}  title="Android Dev" handle="john@Facebook" imageSrc="https://i.pravatar.cc/150?u=a042581f4e29026704c"/>
    </div>
)
}

export default Profilecardapp;