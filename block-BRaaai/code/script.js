let cardInfo = {
    title: 'City Lights in New York',
    date: new Date('2017-01-26'),
    comments: 67,
    subTitle: 'The city that never sleeps.',
    description:
      'New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.',
    category: 'photos',
    imageURL:
      'https://images.unsplash.com/photo-1610874933184-7728fd666162?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
};
  
const rootHeader = document.querySelector('#root-header');
const root = document.querySelector('#root');
let headerContent = 
    <>
        <img src= {cardInfo.imageURL} alt={"desert image"} className={"img"}/>
        <span className={"date-wrapper"}>
            {`${cardInfo.date.getDate()}\n${cardInfo.date.toLocaleString("default", { month: "short" })}`.toUpperCase()}
        </span>
        <span className= {"category"}>
            {cardInfo.category.toUpperCase()}
        </span>
    </>
let heroContent = 
    <>
        <h1>
            {cardInfo.title}
        </h1>
        <h2>
            {cardInfo.subTitle}
        </h2>
        <p>
            {cardInfo.description}
        </p>
        <ul className={"flex-row"}>
            <li>
                {'o 6 mins ago'}
            </li>
            <li>
                <span>
                    <i class="fas fa-comments"></i>
                    {`${cardInfo.comments} comments`}
                </span>
            </li>
        </ul>
    </>
ReactDOM.render(headerContent,rootHeader);
ReactDOM.render(heroContent,root);