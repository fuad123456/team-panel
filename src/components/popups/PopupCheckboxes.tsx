
import { useState} from "react";
import {users} from "../../store/data.ts";

export function PopupCheckboxes() {
    const permissions = [...new Set((users.map(u => u.permissions)).flat())]
    const [visible, setVisible] = useState(false)
    return (
        <>
            <div className={"relative"}>
                <div onClick={()=>setVisible(prev=>!prev)}>
                    <select
                        className="px-5 py-3 w-full border-[#C1C1CB] text-[#C1C1CB] border-2 rounded-2xl text-xl flex justify-between items-center"
                    >
                        <option>Выберите права доступа</option>
                    </select>
                    <div className="absolute right-0 bottom-0 top-0 left-0"></div>
                </div>

                    <div className={`${visible ? "bg-[#f9fafb] p-4 rounded-2xl absolute z-50 w-full" : "bg-[#f9fafb] p-4 rounded-2xl absolute z-50 w-full invisible"}`}>
                        <div className={"flex gap-2"}>
                            <input type="checkbox" name="all" id="all"
                                   value={"all"}
                            />
                            <label htmlFor="all">Все</label>
                        </div>
                        <div>

                        </div>
                        {permissions.map((p, i) => (
                            <div className='flex gap-1' key={p + i}>
                                <div className='flex gap-2'>
                                    <input type="checkbox"
                                           className='w-4 rounded-3xl border-2'
                                           defaultChecked={true}
                                           value={p}
                                    />
                                    <label >{p}</label>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </>
    );
}