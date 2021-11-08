let fruits = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];

function ButtonMap(){
  return (
    <>
      {
        fruits.map((fruit,id)=> {
          return <button onClick={(e)=> handle(e,fruit.id)} key= {id} className="border-2 border-black rounded-xl px-5 py-2 ">{fruit.value}</button>
        })
      }
    </>

  )
};

function handle(e,fruitName){
  alert(fruitName);
}
export default ButtonMap;