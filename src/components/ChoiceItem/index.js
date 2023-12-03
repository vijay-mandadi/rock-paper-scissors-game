import '../Home/index.css'

const ChoiceItem = props => {
  const {item, getId} = props
  const {id, imageUrl} = item
  const altId = id.toLowerCase()

  const onClickChoice = () => {
    getId(id, imageUrl)
  }

  return (
    <li className="listitem">
      <button
        type="button"
        className="game-button"
        onClick={onClickChoice}
        data-testid={`${altId}Button`}
      >
        <img src={imageUrl} alt={id} className="image" />
      </button>
    </li>
  )
}

export default ChoiceItem
