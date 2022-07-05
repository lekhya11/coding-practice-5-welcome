import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="button" type="button">
          Subscribe
        </button>
      </div>
    )
  }
}

export default Welcome
