function Button1(){
  return (
    <>
      <button
        onClick = {(event)=> handeButton1("manish",event)}  
        className="border-2 border-black rounded-xl px-5 py-2 ">
        Click Me
      </button>
    </>
  )
};

function handeButton1(name,event){
  console.log(event.target);
  alert(`Hello React Event, ${name}`);
};

export default Button1;