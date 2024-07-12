import { useCallback, useState } from "react";

export default function TodoInput({onInsert}) {
    const [value, setValue] = useState('');
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[])
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        }
    ,[value])

    return(
        <form className="inputField" onSubmit={onSubmit}>
            <input 
            className="todoInput" type="text" placeholder="할일을 입력하세요"
            onChange={onChange} value={value}/>
            <button className="addBtn" type="submit">추가</button>
        </form>
    );
}