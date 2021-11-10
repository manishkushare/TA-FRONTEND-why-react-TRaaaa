function Hero(){
  return (
    <section className="hero" style={{backgroundImage:'url("/media/home-bg.jpg")' ,backgroundRepeat:"none", backgroundSize:"cover",height:"100vh"}}>
      <div className="container mx-auto grid grid-cols-2">
        <article className="col">
          <h1>We make beautiful websites for all people</h1>
          <div className="row">
            <a href="#">
              <button>Start Project</button>
            </a>
            <span>
              CALL US (+66) 010-020-0340
              for any enquiry
            </span>
          </div>
        </article>
        <article className="col">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/AqcjdkPMPJA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>

          </iframe>
        </article>
        {/* <img src="/media/work-image1.jpg" alt="" /> */}
      </div>
    </section>
  )
  
}
export default Hero;