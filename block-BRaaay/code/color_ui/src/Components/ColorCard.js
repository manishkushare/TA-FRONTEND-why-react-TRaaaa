import ColorInfo from "./ColorInfo";
import ColorPallete from "./ColorPallete";

function ColorCard(props){
  // console.log(props,"hey");
  return (
    <article className="color--card flex flex-row py-10 flex-auto justify-center">
      <ColorInfo color={props.color}/>
      <ColorPallete  color ={props.colors} />
    </article>
  )
}
export default ColorCard;