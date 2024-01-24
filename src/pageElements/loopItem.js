const LoopItem = ({profileImg, review, projectImg}) => {
  return (
    <div className="loop-item">
      <div className="client">
        <img src={profileImg} alt="profile picture of happy customer" />
        <p className="review-auto-loop">
          {`\"${review}\"`}
        </p>
      </div>
      <div className="auto-img-container">
        <img src={projectImg} alt="Completed concrete project for happy customer"/>
      </div>
    </div>
  )
}

export default LoopItem