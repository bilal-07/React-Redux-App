import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "./states/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { depositMoney, withDrawMoney } = bindActionCreators(
    actionCreator,
    dispatch
  );
  return (
    <div className="mt-5">
      <h1>Deposit and WithDraw Money </h1>
      {/* <button
        onClick={() => dispatch(actionCreator.withDrawMoney(100))}
        className="btn btn-primary mx-3"
      >
        -
      </button> */}
      <button
        onClick={() => withDrawMoney(100)}
        className="btn btn-primary mx-3"
      >
        -
      </button>
      Add to cart
      <button
        onClick={() => depositMoney(100)}
        className="btn btn-primary mx-2"
      >
        +
      </button>
    </div>
  );
};

export default Shop;
