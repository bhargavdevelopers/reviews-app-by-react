// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onClickLeftButton = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onClickRightButton = () => {
    const {count} = this.state
    const {reviewsList} = this.props

    if (count < reviewsList.length - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]

    return (
      <div className="bg-container">
        <h1 className="heading"> Reviews </h1>
        <div className="reviews-container">
          <button
            className="arrow-btn"
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickLeftButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow-img"
              alt="left arrow"
            />
          </button>
          <div className="review-details" key={username}>
            <img src={imgUrl} alt={username} className="img" />
            <p className="username"> {username} </p>
            <p className="company-name"> {companyName} </p>
            <p className="description"> {description} </p>
          </div>
          <button
            className="arrow-btn"
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickRightButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow-img"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
