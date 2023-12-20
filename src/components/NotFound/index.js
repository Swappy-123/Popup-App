// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="wrong-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="wrong-img"
      />
      <h1 className="wrong-head">Lost Your Way?</h1>
      <p className="wrong-para">Sorry, we cannot find that page. You will find lots to explore on the home page</p>
    </div>
  </>
)

export default NotFound
