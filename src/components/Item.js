import React from "react";
import { useDispatch } from "../Context";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";

function Item({id, done, text}) {
    const dispatch = useDispatch();

    const onToggle = () => {

        dispatch({
            type: "TOGGLE",
            id
        });
    };

    const onRemove = () => {
        dispatch({
            type: "REMOVE",
            id
        });
    };
    return (
        <>
            <button done={done} onClick={onToggle}>
                {done && <MdDone/>}
            </button>
            <text done={done}>{text}</text>
            <button onClick={onRemove}> <MdDelete/> </button>
        </>
    );
}
export default Item;