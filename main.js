// click handle event
function clickHandleEvent() {
    var amountDue = document.getElementById('amount-due').value;
    var amountReceived = document.getElementById('amount-received').value;
    var result = amountReceived - amountDue;
    
    document.getElementById("total").innerHTML = "Total: " + result;

    var dollars = (Math.floor(result));
    document.getElementById("dollars-output").innerHTML = dollars;

    var cents = result - dollars;
    
    function quarters() {
        if(cents > .24){
        let quarters = cents / .25;
        return (Math.floor(quarters));
    } else { return 0 }
}
    document.getElementById('quarters-output').innerHTML = quarters();
    
    let quartersR = (cents%0.25).toFixed(2);

    function dimes() {
        if( quartersR > .09) {
            let dimes = quartersR / .10
            return (Math.floor(dimes))
        } else {return 0}
    }
    document.getElementById('dimes-output').innerHTML = dimes();

    let dimesR = (quartersR%.10).toFixed(2);
    console.log(quartersR);

    function nickels() {
        if ( dimesR > 0.04) {
            let nickels = dimesR / 0.05
            return (Math.floor(nickels));
        }
        else {return 0}
    }
    document.getElementById('nickels-output').innerHTML = nickels();

    let nickelsR = (dimesR%0.05).toFixed(2);
    console.log(dimesR);

    function pennies() {
        if ( nickelsR > 0) {
            let pennies = nickelsR / .01
            return (Math.floor(pennies));
        }
        else {return 0}
    }
    document.getElementById('pennies-output').innerHTML = pennies();

    }
// click handler listener 
document.getElementById('calculate-change').onclick = () => clickHandleEvent();
