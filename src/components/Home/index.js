import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {Component} from 'react'
import ChoiceItem from '../ChoiceItem'
import './index.css'

class Home extends Component {
  state = {
    score: 0,
    showResult: false,
    choice: '',
    apponent: '',
    resultMessage: '',
  }

  getId = (id, image) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        choice: image,
        apponent: choicesList[number].imageUrl,
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        choice: image,
        apponent: choicesList[number].imageUrl,
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        choice: image,
        apponent: choicesList[number].imageUrl,
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        choice: image,
        apponent: choicesList[number].imageUrl,
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        choice: image,
        apponent: choicesList[number].imageUrl,
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        choice: image,
        apponent: choicesList[number].imageUrl,
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        choice: image,
        apponent: choicesList[number].imageUrl,
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  playAgain = () => {
    this.setState({showResult: false})
  }

  renderChoices = () => {
    const {choicesList} = this.props
    return (
      <ul className="list-container">
        {choicesList.map(each => (
          <ChoiceItem key={each.id} item={each} getId={this.getId} />
        ))}
      </ul>
    )
  }

  renderResult = () => {
    const {choice, apponent, resultMessage} = this.state
    return (
      <div className="result-container">
        <div className="choice-container">
          <div className="mychoice-container">
            <h1 className="heading">YOU</h1>
            <img src={choice} alt="Your Choice" className="image" />
          </div>
          <div className="mychoice-container">
            <h1 className="heading">opponent</h1>
            <img src={apponent} alt="opponent Choice" className="image" />
          </div>
        </div>
        <p className="heading">{resultMessage}</p>
        <button type="button" className="play-btn" onClick={this.playAgain}>
          Play Again
        </button>
      </div>
    )
  }

  render() {
    const {score, showResult} = this.state
    return (
      <div className="bg-container">
        <div className="navbar-container">
          <div className="heading-container">
            <p className="rock-heading">ROCK</p>
            <p className="rock-heading">PAPER</p>
            <p className="rock-heading">SCISSORS</p>
          </div>
          <div className="score-container">
            <p className="score-heading">Score</p>
            <p className="score">{score}</p>
          </div>
        </div>
        {showResult ? this.renderResult() : this.renderChoices()}
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="rules-btn">
                RULES
              </button>
            }
          >
            {close => (
              <div className="rules-container">
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="rules-image"
                />
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default Home
