import data from '../countries.json';
import Country from './Country';
function Countries(){
  return (
    <ul className="container mx-auto grid grid-cols-3 gap-8 " >
      {
        data.map((country,index)=>  <Country {...country} key={country.code} />)
      }
    </ul>
  )
}

export default Countries;