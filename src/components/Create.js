import React, { useState } from "react";
import { useDispatch, useNextId } from "../Context";
import { MdAdd } from 'react-icons/md';
import styled, { css } from 'styled-components';


function Create() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const nextId = useNextId();

    const onToggle = () => setOpen(!open);
    const handleChange = event => setValue(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        nextId.current += 1;
        setOpen(false);
        setValue('');
    };
    return (
        <>
        {open && (
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        value={value} 
                        onChange={handleChange} 
                        placeholder="앞으로 할 일을 작성해주세요." 
                    />

                </form>
            </div>
            )}
            <button onClick={onToggle} open={open}>
                <MdAdd />
            </button>
        </>
    );
}
export default Create;
