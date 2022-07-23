import React from 'react';
import CheckLifeCycleChild from './CheckLifeCycleChild';

class CheckLifeCycle extends React.Component {
  constructor(props) {
    console.log('🤱 constructor')
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    console.log('🤱 componentDidMount')
    this.timerID = setInterval(
      () => {
        this.setState({
          date: new Date()
        });
      },
      1000
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('🤱 getSnapshotBeforeUpdate prevProps: ', prevProps, 'prevState: ', prevState);
    return prevState.date;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('🤱 componentDidUpdate prevProps: ', prevProps, 'prevState: ', prevState, 'snapshot: ', snapshot);
    console.log('==========');
  }

  shouldComponentUpdate() {
    console.log('🤱 shouldComponentUpdate');
    return true;
  }
  
  componentWillUnmount() {
    console.log('🤱 componentWillUnmount');
  }

  render() {
    console.log('🤱 render')
    return (
      <div>
        <h1>HELLO!</h1>
        <CheckLifeCycleChild date={this.state.date}/>
      </div>
    );
  }
}

export default CheckLifeCycle
