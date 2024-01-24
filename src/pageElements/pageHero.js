import "../pageElements/pageHero.css"

const PageHero = ({title, img}) => {
  return (
    <div className="page-hero" style={{backgroundImage: `url(${img})`}}>
      <div className="page-title">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default PageHero