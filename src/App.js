import SingleCargo from "./Functionality/singleCargo";
import CargoPosition from "./Functionality/cargoPosition";
import CreateCargo from "./Components/createCargo";

import {useState } from "react";
import "./App.css"

function App() {

  const [truckSpecs, setTruckSpecs] = useState({length: 0,width: 0, height: 0})
  const [cargoSpecs, setCargoSpecs] = useState({length: 0, width: 0, height: 0})
  const [stack, setStack] = useState(false)
  const [showTruck, setShowTruck] = useState(false)
  const [Cargos, setCargos] = useState([])
  const [total, setTotal] = useState(0)
  const [error, setError] = useState([false])
  
  const handleTruckChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setTruckSpecs(values => ({...values, [field]: Number(value)}))
  }

  const handleCargoChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setCargoSpecs(values => ({...values, [field]: Number(value)}))
  }

  const handleRadioChange = (e) => {
    setStack(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(cargoSpecs.length > truckSpecs.length || cargoSpecs.width > truckSpecs.width || cargoSpecs.height > truckSpecs.height){
      setError(true);
      return;
    }
    let result = SingleCargo(cargoSpecs.length, cargoSpecs.width, cargoSpecs.height, truckSpecs.length, truckSpecs.width, truckSpecs.height, stack);
    setTotal(result.totalCargo);
    const Cargos = CargoPosition(result, cargoSpecs.length, cargoSpecs.width, truckSpecs.length, truckSpecs.width)
    setCargos(Cargos)
    setShowTruck(true)
    setError(false)
  }
  
  return (
    <div className="App">
      <form className="SpecsField" onSubmit={handleSubmit}>
        <div className="SpecsDiv">
          <h1>Truck Info</h1>
          <label> Length:
            <input 
              type="number"
              min={1}
              name="length"
              value={truckSpecs.length}
              className="InputLength"
              onChange={handleTruckChange}
            />
          </label>
          <label> Width: 
            <input 
              type="number"
              name="width"
              value={truckSpecs.width}
              className="InputWidth"
              onChange={handleTruckChange}
            />
          </label>
          <label> Height:
            <input 
              type="number"
              min={1}
              name="height"
              value={truckSpecs.height}
              className="InputHeight"
              onChange={handleTruckChange}
            />
          </label>
          <h1>Cargo Info</h1>
          <label> Length:
            <input 
              type="number"
              min={1}
              name="length"
              value={cargoSpecs.length}
              className="InputLength"
              onChange={handleCargoChange}
            />
          </label>
          <label> Width:
            <input 
              type="number"
              min={1}
              name="width"
              value={cargoSpecs.width}
              className="InputWidth"
              onChange={handleCargoChange}
            />
          </label>
          <label> Height:
            <input 
              type="number"
              min={1}
              name="height"
              value={cargoSpecs.height}
              className="InputHeight"
              onChange={handleCargoChange}
            />
          </label>
          <label>
            <h3>Can the cargo be stacked?</h3>
            <label> Yes
              <input 
                className="RadioInput"
                style={{marginLeft:7}}
                type="radio"
                name="stack"
                value={true}
                onChange={handleRadioChange}
              />
            </label>
            <label> No 
              <input 
                className="RadioInput"
                type="radio"
                name="stack"
                value={false}
                onChange={handleRadioChange}
              />
            </label>
          </label>
        </div>
      <button type="submit" >Calculate</button>
      {error === true ? <h2>Cargo cannot be larger than the truck!</h2>:null}
      </form>
      {showTruck === true ? 
      <div className="ResultShell">
        <div id="TruckShell" style={{width: truckSpecs.width * 20, height: truckSpecs.length * 20}}>
          <CreateCargo cargos={Cargos}/>
        </div>
        <div className="CargoInfo">
          <h3>Total Cargo: {total}</h3>
          <h3>Cargo per layer: {Cargos.length}</h3>
          <h3>Truck Length: {truckSpecs.length}</h3>
          <h3>Truck Width: {truckSpecs.width}</h3>
        </div>
      </div> 
      : null}
    </div>
  );
}

export default App;
