import React, { Component } from 'react'
import './styles/App.css'
import { WeatherWindy, WeatherCloudy, WeatherSunny, WeatherSnowy, WeatherPouring, WeatherRainy, WeatherLightning } from 'mdi-material-ui'
import axios from 'axios'
import moscow from './image/moscow.jpg'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      main: '',
      speed: null,
      temp: null,
      color: '',
      clouds: false,
      clear: false,
      snow: false,
      rain: false,
      drizzle: false,
      thunderstorm: false,
      clouds1: false,
      clear1: false,
      snow1: false,
      rain1: false,
      drizzle1: false,
      thunderstorm1: false,
      clouds2: false,
      clear2: false,
      snow2: false,
      rain2: false,
      drizzle2: false,
      thunderstorm2: false,
      clouds3: false,
      clear3: false,
      snow3: false,
      rain3: false,
      drizzle3: false,
      thunderstorm3: false,
    }
  }

  componentWillMount = () => {
    this.getWeather();
  }

  getWeather = () => {

    axios(
      {
        url: `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=419a45b36004dfc3c483e9581f03ee54`
      }
    )
    .then( response => {
      this.chooseColorandIcon(response.data.list[0].weather[0].main);
      this.chooseMiniIcon1(response.data.list[8].weather[0].main);
      this.chooseMiniIcon2(response.data.list[16].weather[0].main);
      this.chooseMiniIcon3(response.data.list[24].weather[0].main);
      this.setState({ name: response.data.city.name, main: response.data.list[0].weather[0].main, speed: response.data.list[0].wind.speed, temp: response.data.list[0].main.temp })
    })
  }

  getWeekDay = (date) => {
    switch (date) {
      case 1: 
        return 'MON';
      case 2: 
        return 'TUE';
      case 3: 
        return 'WED';
      case 4: 
        return 'THU';
      case 5: 
        return 'FRI';
      case 6: 
        return 'SAT';
      case 7: 
        return 'SUN';
      default: 
        return '';
    }
  }

  chooseColorandIcon = (main) => {
    switch (main) {
      case 'Clouds': 
        this.setState({color: 'grey', clouds: true});
        break;
      case 'Clear': 
        this.setState({color: 'steelblue', clear: true})
        break;
      case 'Snow': 
        this.setState({color: 'wheat', snow: true})
        break;
      case 'Rain': 
        this.setState({color: 'darkcyan', rain: true})
        break;
      case 'Drizzle': 
        this.setState({color: 'slateblue', drizzle: true})
        break;
      case 'Thunderstorm': 
        this.setState({color: 'black', thunderstorm: true})
        break;
      default: 
        return '';
    }
  }

  chooseMiniIcon1 = (main) => {
    switch (main) {
      case 'Clouds': 
        this.setState({clouds1: true});
        break;
      case 'Clear': 
        this.setState({clear1: true})
        break;
      case 'Snow': 
        this.setState({snow1: true})
        break;
      case 'Rain': 
        this.setState({rain1: true})
        break;
      case 'Drizzle': 
        this.setState({drizzle1: true})
        break;
      case 'Thunderstorm': 
        this.setState({thunderstorm1: true})
        break;
      default: 
        return '';
    }
  }

  chooseMiniIcon2 = (main) => {
    switch (main) {
      case 'Clouds': 
        this.setState({clouds2: true});
        break;
      case 'Clear': 
        this.setState({clear2: true})
        break;
      case 'Snow': 
        this.setState({snow2: true})
        break;
      case 'Rain': 
        this.setState({rain2: true})
        break;
      case 'Drizzle': 
        this.setState({drizzle2: true})
        break;
      case 'Thunderstorm': 
        this.setState({thunderstorm2: true})
        break;
      default: 
        return '';
    }
  }

  chooseMiniIcon3 = (main) => {
    switch (main) {
      case 'Clouds': 
        this.setState({clouds3: true});
        break;
      case 'Clear': 
        this.setState({clear3: true})
        break;
      case 'Snow': 
        this.setState({snow3: true})
        break;
      case 'Rain': 
        this.setState({rain3: true})
        break;
      case 'Drizzle': 
        this.setState({drizzle3: true})
        break;
      case 'Thunderstorm': 
        this.setState({thunderstorm3: true})
        break;
      default: 
        return '';
    }
  }


  render() {

    const date = new Date().getDay();

    return (
      <div className="container">
      <div style={bgStyle}>
        <div className="section-1" style={{backgroundColor: this.state.color}}>
          <div className="info">
            <p className="city"> {this.state.name} </p>
            <hr className="line" />
            <p className="description">{this.state.main}</p>
            <div className="speed"> 
            <WeatherWindy className="speed-icon" /> 
            <div className="speed-number">{Math.round(this.state.speed)}</div> MPH</div>
            <p className="temp">{Math.round(this.state.temp - 273.15)}℃</p>
          </div>
          <div className="icon-box">
    { this.state.clouds && <WeatherCloudy className="icon" /> }
    { this.state.clear &&    <WeatherSunny  className="icon" /> }
    { this.state.snow &&   <WeatherSnowy className="icon" /> }
    { this.state.rain &&   <WeatherPouring className="icon" /> }
    { this.state.drizzle &&   <WeatherRainy className="icon" /> }
    { this.state.thunderstorm &&   <WeatherLightning className="icon" /> }
          </div>
        </div>
        </div>
        <div className="section-2">
          <ul className="mini">
            <li className="mini-1"> <p className="day"> {this.getWeekDay(date+1)} </p> 
    {this.state.clouds1 && <WeatherCloudy className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.clear1 && <WeatherSunny className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.snow1 && <WeatherSnowy className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.rain1 && <WeatherPouring className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.drizzle1 && <WeatherRainy className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.thunderstorm1 && <WeatherLightning className="mini-icon" style={{color:this.state.color}} /> }
            </li>
            <li className="mini-2"> <p className="day"> {this.getWeekDay(date+2)} </p> 
    {this.state.clouds2 && <WeatherCloudy className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.clear2 && <WeatherSunny className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.snow2 && <WeatherSnowy className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.rain2 && <WeatherPouring className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.drizzle2 && <WeatherRainy className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.thunderstorm2 && <WeatherLightning className="mini-icon" style={{color:this.state.color}} /> }
            </li>
            <li className="mini-3"> <p className="day"> {this.getWeekDay(date+3)} </p> 
    {this.state.clouds3 && <WeatherCloudy className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.clear3 && <WeatherSunny className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.snow3 && <WeatherSnowy className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.rain3 && <WeatherPouring className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.drizzle3 && <WeatherRainy className="mini-icon" style={{color:this.state.color}} /> }
    {this.state.thunderstorm3 && <WeatherLightning className="mini-icon" style={{color:this.state.color}} /> }
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

let bgStyle = {
  backgroundImage: `url(${moscow})`,
  backgroundSize: '100%'
};

export default App;
