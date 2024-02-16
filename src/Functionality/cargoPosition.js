
function CargoPosition(result, cL, cW, tL, tW) {
    // position measured in pixels, 20px per foot
    // 3x5 === 60x100px
    let cargos = []
    let counter = 1;
     
    let widestPosition = 0;
    let longestPosition = 0;
    let wMax = tW; 

    let lPosition = 0;
    let wPosition = 0;

    if(result.rotate === true) {
        let temp = cL;
        cL = cW;
        cW = temp;
    }

    for(let i=1; i<=result.cargo; i++){
        let tempCargo = {name: counter, width: cW, height: cL, color: 'lightblue', top: lPosition, left: wPosition};
        cargos.push(tempCargo);
        counter ++;
        wPosition += cW;
        if(wPosition + cW > wMax && i<result.cargo){
            wPosition = 0;
            lPosition += cL;
        }
    }

    widestPosition = wPosition;
    longestPosition = lPosition + cL;
    
    if(result.flippedCargo > 0){
        if(wMax-widestPosition >= cL){
            wPosition = widestPosition;
            lPosition = 0;
        
            for(let j=1; j<=result.flippedCargo; j++){
                let tempCargo = {name: counter, width: cL, height: cW, color: "orange", top: lPosition, left: wPosition};
                cargos.push(tempCargo);
                counter ++;
                wPosition += cL;
                if(wPosition +cL>wMax){
                    wPosition = widestPosition;
                    lPosition += cW;
                }
            }
        }else {
            lPosition = longestPosition;
            wPosition = 0;

            for(let j=1; j<=result.flippedCargo; j++){
                let tempCargo = {name: counter, width: cL, height: cW, color: "orange", top: lPosition, left: wPosition};
                cargos.push(tempCargo);
                counter ++;
                wPosition += cL;
                if(wPosition + cL > wMax){
                    wPosition = 0;
                    lPosition += cW;
                }
            }
        }
    }
    console.log(cargos)
    return cargos;
}

export default CargoPosition