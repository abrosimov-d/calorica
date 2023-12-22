export default function Listview(props, onCLick) {
    function onClick() {
        console.log("clicked!")
    }

    return (
            <table className="listview">
            {props.data.map((item, index) => {
                return <tr key={index} onClick={onClick}><td>{item}</td></tr>
            })}
            </table>
    )
}