import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
  } from 'react-icons/md';

export default function TodoItem({ todo, onRemove, onToggle }) {
    const {id, text, checked} = todo;

    return (
        <li className="todoItem">
             <div
                className={`checkbox${checked ? "Checked" : ""}`}
                onClick={() => onToggle(id)}
                >
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <button className="removeBtn" type="button"
            onClick={() => onRemove(id)}>
                삭제
            </button>
        </li>
    );
}