
function SingleCargo(cL, cW, cH, tL, tW, tH, stack) {
    let result = {cargo: 0, flippedCargo: 0, rotate: false, stack: stack, totalCargo: 0}
    
    let normalCargo = 0;
    let rotatedCargo = 0;
    let maxCargo = 0;

    let altNormalCargo = 0;
    let altRotatedCargo = 0;
    let altMaxCargo = 0;
    

    let widthFit = 0; 
    let lengthFit = 0;

    let altWidthFit = 0;
    let altLengthFit = 0;

    if(cL>tL || cW > tW || cH > tH) {
        return "Cargo too large for this truck!"
    }
    if(tH < (2*cH) || stack === 'false') {
        console.log("are we even here")
        result.stack = false;
    }

    widthFit = Math.floor(tW / cW);
    lengthFit = Math.floor(tL / cL);
    normalCargo = widthFit * lengthFit;
    rotatedCargo = LayoutCalc(cL, cW, tL, tW);
    maxCargo = normalCargo + rotatedCargo;

    if(cL !== cW && tL !== tW) {
        altWidthFit = Math.floor(tW / cL);
        altLengthFit = Math.floor(tL / cW);
        altNormalCargo = altWidthFit * altLengthFit;  
        altRotatedCargo = LayoutCalc(cW, cL, tL, tW)
        altMaxCargo = altNormalCargo + altRotatedCargo;
    }

    if(altMaxCargo>maxCargo) {
        result.rotate = true;
        result.cargo = altNormalCargo;
        result.flippedCargo = altRotatedCargo;
    }else {
        result.cargo = normalCargo;
        result.flippedCargo = rotatedCargo;
    }

    if(result.stack === false){
        result.totalCargo = result.cargo + result.flippedCargo;
    }else{
        result.totalCargo = Math.floor(tH / cH) * (result.cargo + result.flippedCargo)
    }

    return result;

    function LayoutCalc (cL, cW, tL, tW) {
        let lRemainder = tL % cL;
        let wRemainder = tW % cW;
        let extra = 0;

        if(lRemainder >= cW){
            extra = Math.floor(lRemainder/cW) * Math.floor(tW/cL)
        }if(wRemainder >= cL) {
            extra = Math.floor(wRemainder/cL) * Math.floor(tL/cW)
        } 
        return extra;
    }
}

export default SingleCargo;