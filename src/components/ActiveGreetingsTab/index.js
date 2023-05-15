import './index.css'

const ActiveGreetingsTab = props => {
  const {setActiveTabDetails} = props
  const {imageUrl, imageAltText} = setActiveTabDetails

  return (
    <div className="image-container">
      <img src={imageUrl} alt={imageAltText} className="greeting-image" />
    </div>
  )
}

export default ActiveGreetingsTab
