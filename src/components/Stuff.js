import React, { Component, PropTypes } from "react";
import state$ from "app/state";
import connect from "app/rx-state/connect";
import bindAction from "app/rx-state/bindAction";
import StuffActions from "app/actions/StuffActions";

export class Stuff extends Component {
  static propTypes = {
    stuff: PropTypes.object.isRequired,
    requestStuff: PropTypes.func.isRequired,
  };

  shouldComponentUpdate (newProps, newState) {
    return true;
  }

  render() {
    console.count("render stuff");
    const { stuff, requestStuff } = this.props;
    return (
      <div className="stuff">
        <h1 className="stuff__title">The value is { stuff.isLoading  ? '...' : stuff.value }</h1>
        <hr/>
        <button onClick={ () => requestStuff() } className="stuff__button stuff__button--async">get stuff</button>
      </div>
    );
  }
}

export default connect(state$, state => ({
  stuff: state.stuff,
  requestStuff: bindAction(StuffActions.requestStuff$),
}))(Stuff);
