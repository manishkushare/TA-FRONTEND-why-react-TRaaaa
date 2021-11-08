import React from 'react';
// function Button3(){
//   return (
//     <>
//       <button onClick= {(event)=> handleButton3(event)}  className="border-2 border-black rounded-xl px-5 py-2 ">Arya</button>
//       <button onClick= {(event)=> handleButton3(event)}  className="border-2 border-black rounded-xl px-5 py-2 ">John</button>
//       <button onClick= {(event)=> handleButton3(event)}  className="border-2 border-black rounded-xl px-5 py-2 ">Bran</button>
//     </>
//   )
// }
class Button3 extends React.Component{
  render(){
    return (
      <>
        <button onClick= {(event)=> handleButton3(event)}  className="border-2 border-black rounded-xl px-5 py-2 ">Arya</button>
        <button onClick= {(event)=> handleButton3(event)}  className="border-2 border-black rounded-xl px-5 py-2 ">John</button>
        <button onClick= {(event)=> handleButton3(event)}  className="border-2 border-black rounded-xl px-5 py-2 ">Bran</button>
      </>
    )
  }
}
function handleButton3(event){
  console.dir(event.target);
  event.target.textContent === "Arya"? alert("Arya"):
  event.target.textContent === "John"? alert("John"): alert("Bran");
}
export default Button3;