import data from '../colors.json';
import ColorCard from './ColorCard';
// console.log(data);

function App(){
  function getColorData(){
    let colorData = [];
    for(let color in data){
      colorData.push({
        colors: data[color],
        color : color

      })
    }
    return colorData
  }

  return (
    <section className="hero">
      <div className="container mx-auto">
      {
        getColorData().map((color,index) => {
          return <ColorCard {...color} key={index}  className="flex flex-col"/>

        })

      }

      </div>
    </section>
  )
}

export default App;