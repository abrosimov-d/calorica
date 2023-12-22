import { useState } from "react";

export default function Toolbar() {

    const [date, setDate] = useState(new Date());

	function addDays(date, days) {
		let result = new Date(date);
		result.setDate(result.getDate() + days)
		return result;
	}

    function onClick(e) {
        setDate(addDays(date, parseInt(e.target.value)));
    }

    return (
        <div className="toolbar">
            <button onClick={onClick} value={-1}  className="toolbar-button">prev</button>
            <div className="toolbar-date">{date.toLocaleDateString()}</div>
            <button onClick={onClick} value={1} className="toolbar-button">next</button>
        </div>
    )
}