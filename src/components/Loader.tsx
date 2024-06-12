import {ReactElement} from "react";

export const Loader = ():ReactElement => {
    return (
        <div className="flex justify-center items-center ml-2">
            <div className="inline-block animate-spin text-red-600 rounded-full h-4 w-4 border-b-2 border-red-800"></div>
        </div>
    );
};