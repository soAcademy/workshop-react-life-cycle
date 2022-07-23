import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    console.log('🧒🏻 The component Clock constructor');
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    console.log('🧒🏻 The component Clock componentDidMount');
    this.timerID = setInterval(
      () => {
        this.setState({
          date: new Date()
        });
      },
      1000
    );
  }
  
  componentWillUnmount() {
    console.log('🧒🏻 The component Clock componentWillUnmount');
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class Unmounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowClock: true,
    };
  }

  toggleComponent = () => {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleComponent}>Click to toggle clock</button>
        {this.state.isShowClock && <Clock />}
      </div>
    );
  }
}

export default Unmounting
