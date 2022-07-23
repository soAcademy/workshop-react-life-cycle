import React from 'react';

class Updating extends React.Component {
  constructor(props) {
    console.log('constructor')
    super(props);
    this.state = {
      favoritecolor: 'red',
      date: new Date()
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.timerID = setInterval(
      () => {
        this.setState({
          date: new Date()
        });
      },
      1000
    );
  }

  static getDerivedStateFromProps(props, state) {
    console.log('✅[1] getDerivedStateFromProps props: ', props, 'state: ', state)
    return {favoritecolor: props.favoritecolor };
  }

  shouldComponentUpdate() {
    console.log('✅[2] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('✅[4] getSnapshotBeforeUpdate prevProps: ', prevProps, 'prevState: ', prevState);
    return prevState.date;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('✅[5] componentDidUpdate prevProps: ', prevProps, 'prevState: ', prevState, 'snapshot: ', snapshot);
    console.log('==========');
  }

  render() {
    console.log('✅[3] render')
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Updating
