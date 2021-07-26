import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    status: 'Subscribe',
  }

  subStatus = () => {
    const {status} = this.state
    if (status === 'Subscribe') {
      return this.setState({status: 'Subscribed'})
    }
    return this.setState({status: 'Subscribe'})
  }

  render() {
    const {status} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Welcome</h1>
          <p className="sub-heading">Thank you! Happy Learning</p>
          <button type="button" onClick={this.subStatus} className="button">
            {status}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
