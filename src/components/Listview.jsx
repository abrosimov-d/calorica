export default function Listview(props) {

    return (
            <table className="listview">
            {props.data.map((item, index) => {
                return <tr key={index} onClick={props.onClick}><td>{item}</td></tr>
            })}
            </table>
    )
}