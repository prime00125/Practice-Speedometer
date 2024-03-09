// Write your code here
import {Component} from 'react'
class Speedometer extends Component {
  state = {speed: 0}
  onAccelerate = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }
  onBrake = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }
  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading"> SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />

        <h1 className="speedtxt">Speed is {speed}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <button className="buttona" onClick={this.onAccelerate}>
          Accelerate
        </button>
        <button className="buttonb" onClick={this.onBrake}>
          Apply Brake
        </button>
      </div>
    )
  }
}
export default Speedometer
