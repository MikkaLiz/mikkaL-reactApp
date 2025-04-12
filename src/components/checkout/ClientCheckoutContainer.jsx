/* eslint-disable no-unused-vars */
import ClientCheckoutForm from "../client/ClientCheckoutFormComponent";
import CheckoutHandler from "./CheckoutHandlerComponent";
import OrderDetailsContainer from "./OrderDetailsContainerComponent";
import { useState } from "react";

const ClientCheckoutContainer = () => {
  const [state, setState] = useState("form");
  const [error, setError] = useState(false);
  const [order, setOrder] = useState({});
  const [orderResults, setOrderResults] = useState({});

  const changeState = (newState) => {
    setState(newState);
  };
  const changeOrder = (newClient) => {
    setOrder(newClient);
  };

  const changeResults = (newResults) => {
    setOrderResults(newResults);
  };
  const changeError = (newError) => {
    setError(newError);
  };
  return (
    <div>
      <div className="col-lg-9 col-md-11 col-sm-11 mx-auto mt-4">
        {state === "form" && (
          <ClientCheckoutForm
            stateHandler={changeState}
            orderHandler={changeOrder}
          />
        )}
        {state === "loading" && (
          <CheckoutHandler
            orderDetails={order}
            stateHandler={changeState}
            errorHandler={changeError}
            orderHandler={changeResults}
          />
        )}
        {state === "success" && (
          <div className="col-lg-8 col-md-12 col-sm-12 mx-auto mt-4">
            <OrderDetailsContainer orderDetails={orderResults}/>
          </div>
        )}
        {state === "error" && (
          <div className="col-lg-8 col-md-12 col-sm-12 mx-auto mt-4">
            <h1>Hubo un error al procesar tu orden</h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default ClientCheckoutContainer;
