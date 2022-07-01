import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
// import { bindActionCreators } from "redux";

const Counter = ({ counter, incr, decr, rand, res }) => {
  return (
    <div class="container mx-auto">
      <h1>Counter: {counter}</h1>
      <button onClick={rand} class="btn btn-info mx-3">
        Random#
      </button>
      <button onClick={incr} class="btn btn-primary">
        Increment +
      </button>
      <button onClick={decr} class="btn btn-danger mx-3">
        Decrement -
      </button>
      <button onClick={res} class="btn btn-success">
        Reset
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.value,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
//   // const { incr, decr, res, rand } = bindActionCreators(actions, dispatch);
//   // return {
//   //   incr,
//   //   decr,
//   //   res,
//   //   rand,
//   // };
// };

export default connect(mapStateToProps, actions)(Counter);
