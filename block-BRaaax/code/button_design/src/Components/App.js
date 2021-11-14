import Button from "./Button";

function App(){
  return (
    <div className="btn--container">
      <Button label="Click Me!" size="small" type="primary"/>
      <Button label="Click Me!" size="medium" type="primary"/>
      <Button label="Click Me!" size="large" type="primary"/>
      <Button label="Click Me!" size="small" type="secondary"/>
      <Button label="Click Me!" size="large" type="tertiary"/>
      <Button label="Click Me!" disabled/>



      
    </div>
  )
}

export default App;