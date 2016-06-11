import Rx from "rxjs";

const requestStuff$ = new Rx.Subject();
// Simulate a network response with a delay
const getStuff$ = requestStuff$
  .delay(1000);

const StuffActions = {
  requestStuff$,
  getStuff$,
};

export default StuffActions;
