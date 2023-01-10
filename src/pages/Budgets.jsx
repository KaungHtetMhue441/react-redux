import { useSelector,useDispatch } from "react-redux";
import { budgetsSelecter } from "../reducers/budgets/budgetsReducer";
import store from "../store/store";
console.log(store.getState());
export default ()=>{
    const data = useSelector(budgetsSelecter);
    return (
        <div>
            Hey I am Kaung Htet Hmue
        </div>
    )
}