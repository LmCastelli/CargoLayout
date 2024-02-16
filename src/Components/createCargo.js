import "./createCargo.css"
function CreateCargo (cargos) {

    return (
        <div className="TruckShell">
            {cargos.cargos.map((cargo, index)=> (
                <div key={index}className="TestDiv" style={{width: cargo.width * 20, height: cargo.height * 20, backgroundColor: cargo.color, top: cargo.top * 20, left: cargo.left * 20}}>
                    <h4>{cargo.name}</h4>
                </div>
            ))}
        </div>
    )
}
export default CreateCargo;