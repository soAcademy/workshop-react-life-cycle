import React from 'react';

class Mounting extends React.Component {
  constructor(props) {
    console.log('✅[1] constructor')
    super(props);
    this.state = {
      favoritecolor: 'red',
    };
  }

  componentDidMount() {
    console.log('✅[4] componentDidMount')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('✅[2] getDerivedStateFromProps props: ', props, 'state: ', state)
    return {favoritecolor: props.favoritecolor };
  }

  render() {
    console.log('✅[3] render')
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      </div>
    );
  }
}

export default Mounting
