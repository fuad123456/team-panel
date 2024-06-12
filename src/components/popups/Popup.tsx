import  {ReactElement, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks.tsx";
import {PopupCheckboxes} from "./PopupCheckboxes.tsx";
import {addUser} from "../../store/slices/admin.slice.ts";
import {setOpenPopup, setSecondaryPopup} from "../../store/slices/popovers.slice.ts";

export function Popup():ReactElement {

    const [emailValue, setEmailValue] = useState("")
    const dispatch = useAppDispatch()
    const popformRef = useRef<HTMLFormElement>(null)
    const isOpenPopup = useAppSelector(state => state.popups.popup)
    function validateEmail(email:string):boolean {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    function onAddUser():void{
            if (popformRef.current != null && validateEmail(emailValue)) {
                const checkedInputsNode = popformRef.current?.querySelectorAll('input[type="checkbox"]:checked') as NodeListOf<HTMLInputElement>

                const checkedInputsArray = Array.from(checkedInputsNode)
                const checkedInputValues = checkedInputsArray.map(i => i.value)
                dispatch(setOpenPopup(!isOpenPopup))
                dispatch(addUser({
                    permissions:checkedInputValues,
                    email:emailValue
                }))
                dispatch(setSecondaryPopup({
                    message:`Приглашение отправлено на почту ${emailValue}`,
                    isActivate:true
                }))
            }
        }


    return (
        <div className="fixed inset-0 bg-[#1C1C1C] bg-opacity-10 flex items-center justify-center z-10">
            <div className="bg-white px-[60px] py-[70px] rounded-2xl shadow-popover-popup w-[526px] relative">

                <form className="space-y-4" ref={popformRef}
                    onSubmit={(e)=>{
                        e.preventDefault()
                    }}
                >
                    <input type="email" id="name" name="name"
                           required={true}
                           className="px-5 py-4 w-full border-[#C1C1CB] border-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-2xl text-xl"
                           placeholder={"Email"}
                           onChange={(e)=>{
                               setEmailValue(e.currentTarget.value)
                           }}
                    />

                    <div className={"relative"}>
                        <PopupCheckboxes />
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={onAddUser}
                            type="button"
                            className="inline-block bg-[#32C076] hover:bg-green-400 text-white font-bold py-3 px-4 w-full rounded-2xl"
                        >
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
