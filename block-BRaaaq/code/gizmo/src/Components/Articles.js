import {data} from '../data';
import PropTypes from 'prop-types';

function Articles(){
  return (
    <section className="articles container mx-auto">
      <h1 className="text-center text-2xl py-4 font-bold">Articles</h1>
      <ul className="flex flex-wrap justify-between">
        {
          data.map((data,index)=> {
            return <Article key={index} {...data} />
          })
        }
      </ul>
      

    </section>
  )
}

function Article(props){
  // console.log(props);
  
  return (
    <>
      <li className="article flex-basis-33 p-4">
        <div className="img-wrapper w-full">
          <img src={props.urlToImage} alt=""  className="w-full"/>

        </div>
        <h2 className="h1">{props.title}</h2>
      </li>
    </>
  )
}

Article.propTypes = {
  urlToImage : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired
}


export {Article};
export default Articles;