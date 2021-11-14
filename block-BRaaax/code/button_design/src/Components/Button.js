function Button(props){
  function getStyle(){
    let {size,type} = props;
    return `button button--${size} button--${type}`;
  }
  return (
    <button  className={getStyle()} disabled={props.disabled}>{props.label || "button"} </button>
  )
}
export default Button;