export default function Toolbar(props) {

    return (
        <div className="toolbar">
            <button onClick={props.onClick} value={-1}>prev</button>
            <div className="toolbar-date" >{props.date.toLocaleDateString()}</div>
            <button onClick={props.onClick} value={1} className="toolbar-button">next</button>
        </div>
    )
}