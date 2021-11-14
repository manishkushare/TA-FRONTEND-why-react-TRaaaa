import Button from "./Button";
import {size,type} from '../buttonInfo';
console.log(size,"hey",type);
function App(){
  return (
    <div className="btn--container">
      <Button label="Click Me!" size={size.SMALL}type={type.PRIMARY} onClickhandler= {()=> alert("Hey, you clicked me")}/>
      <Button label="Click Me!" size={size.MEDIUM} type={type.PRIMARY}/>
      <Button label="Click Me!" size={size.LARGE}type={type.PRIMARY}/>
      <Button label="Click Me!" size={size.MEDIUM}type={type.SECONDARY}/>
      <Button label="Click Me!" size={size.SMALL}type={type.TERTIARY} onClickhandler= {()=> alert("Hey, you clicked me")} />
      <Button label="Click Me!" disabled onClickhandler= {()=> alert("Hey, you clicked me")}/>



      
    </div>
  )
}

export default App;