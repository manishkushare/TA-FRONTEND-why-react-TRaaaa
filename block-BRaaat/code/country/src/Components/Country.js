function Country(props){
  console.log(props);
  return (
    <li 
      onClick= {(e)=> handle(e,props)}
      className="country border-2 flex flex-col justify-center items-center">
        <h1>{props.name}</h1>
        <span>{props.code + props.emoji}</span>
        <p>{props.unicode}</p>
    </li>
  )
}
function handle(e,data){
  alert(`${data.code} ${data.emoji}`)
}
export default Country;