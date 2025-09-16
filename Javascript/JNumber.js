var ClassNumber = document.getElementsByClassName("Number")
var i
for (i = 0; i < ClassNumber.length; i++) {
    ClassNumber[i].addEventListener("change", UpdateNumberHand, false)
    ClassNumber[i].addEventListener("click", HighlightNumber, false)
    ClassNumber[i].addEventListener("focus", HighlightNumber, false)
    ClassNumber[i].addEventListener("focusout", HighlightOffNumber, false)
}

function HighlightNumber(x) {
    this.style.color = 'black';
    this.style.background = 'white';
}

function HighlightOffNumber(x) {
    this.style.color = 'transparent';
    this.style.background = 'transparent';
}

function UpdateNumberHand() {
    var x = this.id;
    UpdateNumber(x)
}

function UpdateNumber(x) {
    var xID = document.getElementById(x).id
    var xVal = document.getElementById(x).value
    var DisplayId = xID.replace(/Number/, 'Display');
    var RangeId = xID.replace(/Number/, 'Range');
    var VarId = xID.replace(/Number/, '');
    var TrueId = xID.replace(/Number/, 'True');
    var ConvId = xID.replace(/Number/, 'Conv');
    var SelectId = xID.replace(/Number/, 'Select');
    var UnitId = xID.replace(/Number/, 'Unit');

    var ConvVal = document.getElementById(ConvId).value
    var UnitVal = document.getElementById(UnitId).value

    document.getElementById(DisplayId).value = xVal + " " + UnitVal;
    if (UnitVal === "%") {
        document.getElementById(DisplayId).value = xVal + UnitVal;
    }
    if (UnitVal === "x Treadmill") {
        document.getElementById(DisplayId).value = xVal + UnitVal;
    }
    document.getElementById(RangeId).value = xVal;
    document.getElementById(SelectId).value = 1;
    document.getElementById(TrueId).value = xVal / ConvVal;

    if (UnitVal === document.getElementById('Fahrenheit').value) {
        document.getElementById(TrueId).value = (xVal - 32) / ConvVal;
    }
    GetMR()

    UpdateBoxTO(RangeId)
}