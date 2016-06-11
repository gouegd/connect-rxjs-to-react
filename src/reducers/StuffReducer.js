import Rx from "rxjs";
import StuffActions from "app/actions/StuffActions";

const StuffReducer$ = Rx.Observable.merge(
  StuffActions.requestStuff$.map(() =>
    (state) => ({ ...state, isLoading: true })),

  StuffActions.getStuff$.map(() =>
    (state) => ({ isLoading: false, value: state.value * 2 })
  ),
)
.startWith(() => ({ isLoading: false, value: 1 })) // function which returns initial state (optional)

export default StuffReducer$;
