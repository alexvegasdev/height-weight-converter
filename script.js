function updateHeight(unit) {
    if (unit === 'feet' || unit === 'inches') {
        let feet = parseFloat(document.getElementById('feet').value) || 0;
        let inches = parseFloat(document.getElementById('inches').value) || 0;

        if ( Number.isInteger(feet) && Number.isInteger(inches)) {
            if(inches<12){
                let meters = parseInt(feet * 0.3048);
                let centimeters = (feet * 0.3048 - meters) * 100 + inches * 2.54;

                if (centimeters > 100) {
                    meters += Math.floor(centimeters / 100);
                    centimeters %= 100;
                }
                document.getElementById('m').value = meters;
                document.getElementById('cm').value = centimeters.toFixed(2);
            }
            else{
                alert("Remeber to insert values from 0 to 11 for inches.");
            }
        } else {
            alert("Please, insert interger values.");
        }

    } else if (unit === 'm' || unit === 'cm') {
        let meters = parseFloat(document.getElementById('m').value) || 0;
        let centimeters = parseFloat(document.getElementById('cm').value) || 0;

        if (centimeters<100){
            let totalInches = meters * 39.3701 + centimeters * 0.393701;
            let feet = Math.floor(totalInches / 12);
            let remainingInches = totalInches % 12;
            document.getElementById('feet').value = feet;
            document.getElementById('inches').value = remainingInches.toFixed(2);
        }
        else{
            alert("Remeber to insert values from 0 to 99 for centimeters.");
        }        
    }
}

function resetHeight() {
    document.getElementById('feet').value = "";
    document.getElementById('inches').value = "";
    document.getElementById('m').value = "";
    document.getElementById('cm').value = "";
}

function updateWeight(quantity) {
    if (quantity === 'pounds') {
        let pounds = parseFloat(document.getElementById('pounds').value);
        let kg = pounds* 0.453592;
        document.getElementById('kg').value = kg.toFixed(2);

    } else if (quantity === 'kg') {
        let kg = parseFloat(document.getElementById('kg').value);
        let pounds = kg * 2.20462;
        document.getElementById('pounds').value = pounds.toFixed(2);
    }
}

function resetWeight() {
    document.getElementById('pounds').value = "";
    document.getElementById('kg').value = "";
}