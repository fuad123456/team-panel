import {useAppDispatch, useAppSelector} from "../../store/hooks.tsx";
import {setSecondaryPopup} from "../../store/slices/popovers.slice.ts";

export function SecondaryPopup() {
    const dispatch = useAppDispatch()
    const message = useAppSelector(state=>state.popups?.secondaryPopup.message)
    return (
        <>
            <div className="fixed inset-0 bg-[#1C1C1C] bg-opacity-10 flex items-center justify-center z-10">
                <div className="bg-white px-[60px] py-[70px] rounded-2xl shadow-popover-popup w-[526px] relative">
                    <div className={"text-lg text-[#424F5E] font-bold"}>
                        {message}
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={()=>dispatch(setSecondaryPopup({
                                message:"",
                                isActivate:false
                            }))}
                            type="button"
                            className="inline-block bg-[#32C076] hover:bg-green-400 text-white font-bold py-3 px-4 w-full rounded-2xl"
                        >
                           Закрыть
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}