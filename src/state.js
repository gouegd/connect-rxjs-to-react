import Rx from "rxjs";
import createState from "app/rx-state/createState";
import CounterReducer$ from "app/reducers/CounterReducer";
import StuffReducer$ from "app/reducers/StuffReducer";

const reducer$ = Rx.Observable.merge(
  CounterReducer$.map(reducer => ["counter", reducer]),
  StuffReducer$.map(reducer => ["stuff", reducer]),
);

export default createState(reducer$);
