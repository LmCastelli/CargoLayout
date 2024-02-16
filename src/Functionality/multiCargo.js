
function MultiCargo(cargos, truck, stack, priority) {
    // [{name:Alpha, length: 3, width: 4, height: 3},{name:Beta, length: 2, width: 4, height: 2}]
    // truck : {length: 10, width: 6, height: 7}
    // priority can be..
    // maximize space (aim for as close to 50/50 with near perfect space), 
    // Alpha (maximize Alpha sent, while also max space),
    // # of X, Y, Z (prioritize flat number of all listed, then max space)

    let maxCargo = [];
    let truckBedArea = truck.length * truck.width;
    let alphaCargoArea = cargos[0].length * cargos[0].width;
    let betaCargoArea = cargos[1].length * cargos[1].width;

    // max space

    if(priority === 'max_space'){
        let alphaHalf = Math.floor((truckBedArea / 2) / (alphaCargoArea));
        let betaHalf = Math.floor((truckBedArea / 2) / (betaCargoArea));
    }


}

export default MultiCargo;