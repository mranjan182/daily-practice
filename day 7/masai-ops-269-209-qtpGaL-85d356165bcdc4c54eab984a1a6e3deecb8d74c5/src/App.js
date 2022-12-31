import Avatar from "./Components/Avatar";
import Button from "./Components/Button";

export default function App() {
  return (
    <div className="App">{/* add Button and  Avatar component here */
  }
     <Button/>
     <Avatar caption={"This is a caption"} image={"https://images.unsplash.com/photo-1664575601786-b00156752b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"}/>
  </div>
  );
}
