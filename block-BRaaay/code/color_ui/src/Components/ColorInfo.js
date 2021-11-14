function ColorInfo(props){
  // console.log(props)
  let {color}= props
  return (
    <div className="color--info px-5">
      <h1>{color[0].toUpperCase() + color.slice(1)}</h1>
      <span>colors.{color}</span>
    </div>
    // <img src="" alt="" />
  )
}
export default ColorInfo;