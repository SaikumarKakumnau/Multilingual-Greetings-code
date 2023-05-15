import './index.css'

const TabItem = props => {
  const {languageDetails, isActive, setActiveTab} = props

  const {id, buttonText} = languageDetails
  const buttonClassName = isActive ? 'button Active-Button' : 'button'

  const onClickSetActiveTab = () => {
    setActiveTab(id)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={buttonClassName}
        onClick={onClickSetActiveTab}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
