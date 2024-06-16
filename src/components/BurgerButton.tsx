import burgerIcon from "../assets/burger.svg";
import {useAppDispatch, useAppSelector} from "../store/hooks.tsx";
import {openBurger} from "../store/slices/burger.slice.ts";

export default function BurgerButton() {
    const isOpen = useAppSelector(state => state.burger?.isOpenBurger);
    const dispatch = useAppDispatch()
    function onClickBurger(){
        dispatch(openBurger(!isOpen))
    }
    return <button
        type="button"
        className={"block sm:hidden"}
        onClick={onClickBurger}
    >
        <img src={burgerIcon} alt="burger"/>
    </button>;
}