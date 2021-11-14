function ColorPallete(props){
  let {color}= props;
  
  console.log(color);
  return (
    <div className="color--pallete grid grid-cols-5 gap-8 justify-items-center">
      {
        color.map((color,index)=> {
        
          return (
            <div className="color--box flex flex-col">
              <div className="color--tile" style={{background:color}}></div>
              <div className="color--tile-description flex justify-between">
                <span>{index ===0? 50:index*100}</span>
                <span>{color}</span>
              </div>
            </div>
          )
        }) 
        
      }
      
    </div>
  )
}
export default ColorPallete;