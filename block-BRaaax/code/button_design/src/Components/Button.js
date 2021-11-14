import {size as btnSize,type as btnType} from "../buttonInfo";
console.log(btnSize,"hola",btnType);
function Button(props){
  function getStyle(){
    let {size=btnSize.MEDIUM,type= btnType.PRIMARY} = props;
    return `button button--${size} button--${type}`;
  }
  return (
    <button onClick={props.onClickhandler} className={getStyle()} disabled={props.disabled}>{props.label || "button"} </button>
  )
}
export default Button;