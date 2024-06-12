import React, {ReactElement, useEffect} from "react";
import {UserType} from "../../../types.ts";
import {useAppDispatch, useAppSelector} from "../../../store/hooks.tsx";
import {deleteUserAction} from "../../../store/actions/action.ts";
import {Loader} from "../../Loader.tsx";
import {SecondaryPopup} from "../SecondaryPopup.tsx";
import {setSecondaryPopup} from "../../../store/slices/popovers.slice.ts";


type propsType = {
    setChoiceVisible: React.Dispatch<React.SetStateAction<boolean>>
    choiceVisible:boolean
    setActivePop: React.Dispatch<React.SetStateAction<boolean>>
    user:UserType
}
export const ChoicePopover = ({setChoiceVisible, choiceVisible, setActivePop, user}:propsType):ReactElement => {
    const loading = useAppSelector(state => state.admin?.loading)
    const isOpenSecondaryPopup = useAppSelector(state => state.popups?.secondaryPopup.isActivate)
    function changePermission(){
        setActivePop(prev=>!prev)
        setChoiceVisible(prev=>!prev)
    }
    const dispatch = useAppDispatch();
    async function deleteUser(){
        dispatch(deleteUserAction(
            {userId:user.id, isDelete:true}
        ))
    }
    useEffect(()=>{
        if(loading){
            new Promise<boolean>(resolve => {
                setTimeout(()=>{
                    resolve(true)
                },1000)
            }).then(result=>{
                dispatch(setSecondaryPopup({
                    isActivate:result,
                    message:"Пользователь успешно удален"
                }))
            })

        }
    })
    return (
        <>
            {choiceVisible &&
                <div className={"p-4 bg-[#f9fafb] rounded-xl absolute w-64 z-20"} >
                    <div className={"mb-2 text-[#424f5e] hover:text-[#9494a0]"}>
                        <button
                        onClick={changePermission}
                        >
                            Изменить права доступа
                        </button>
                    </div>
                    <div className={"mb-2 text-[#424f5e] hover:text-[#9494a0]"}>
                        <button className={"hover:text[#9494a0]"}>
                            Отправить код повторно
                        </button>
                    </div>
                    <div className={"mb-2 text-[#424f5e] hover:text-[#9494a0] flex"}>
                        <button onClick={deleteUser}>
                            Удалить
                        </button>
                        {loading && <Loader/>}
                        {(loading && isOpenSecondaryPopup) && <SecondaryPopup/>}
                    </div>
            </div>
            }
        </>
    );
};
