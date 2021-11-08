function Button2(){
  return (
    <>
      <button
        onClick = {(event)=> handeButton2("manish",event)}  
        className="border-2 border-black rounded-xl px-5 py-2 ">
        How can I help you?
      </button>
    </>
  )
};
function handeButton2(name,event){
  console.log(event.target);
  alert(`To learn React use https://reactjs.org, ${name}`);
  alert("React and ReactDOM works together");
  alert("Babel helps in writing JSX")
};

export default Button2;