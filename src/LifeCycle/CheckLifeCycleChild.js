import React from 'react';

class CheckLifeCycleChild extends React.Component {
  
  constructor(props) {
    console.log('🧒🏻 constructor')
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // componentDidMount() {
    // console.log('🧒🏻 componentDidMount')
    // this.timerID = setInterval(
    //   () => {
    //     this.setState({
    //       date: new Date()
    //     });
    //   },
    //   1000
    // );
  // }

  static getDerivedStateFromProps(props, state) {
    console.log('🧒🏻 getDerivedStateFromProps props: ', props, 'state: ', state)
    return {date: props.date };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('🧒🏻 getSnapshotBeforeUpdate prevProps: ', prevProps, 'prevState: ', prevState);
    return prevState.date;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('🧒🏻 componentDidUpdate prevProps: ', prevProps, 'prevState: ', prevState, 'snapshot: ', snapshot);
  }

  shouldComponentUpdate() {
    console.log('🧒🏻 shouldComponentUpdate');
    return true;
  }
  
  componentWillUnmount() {
    console.log('🧒🏻 The component is about to be unmounted');
  }

  render() {
    console.log('🧒🏻 render')
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default CheckLifeCycleChild
