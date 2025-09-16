//UpdateRange
var ClassRange = document.getElementsByClassName("Range")
var i
for (i = 0; i < ClassRange.length; i++) {
    ClassRange[i].addEventListener("change", UpdateRange, false)
};

function UpdateRange() {
    var ConvId = this.id.replace(/Range/, 'Conv');
    var DisplayId = this.id.replace(/Range/, 'Display');
    var NumberId = this.id.replace(/Range/, 'Number');
    var SelectId = this.id.replace(/Range/, 'Select');
    var TrueId = this.id.replace(/Range/, 'True');
    var UnitId = this.id.replace(/Range/, 'Unit');
    var VarId = this.id.replace(/Range/, '');
    var ConvVal = document.getElementById(ConvId).value
    var UnitVal = document.getElementById(UnitId).value

    document.getElementById(DisplayId).value = this.value + " " + UnitVal;
    if (UnitVal === "%") {
        document.getElementById(DisplayId).value = this.value + UnitVal;
    }
    if (UnitVal === "x Treadmill") {
        document.getElementById(DisplayId).value = this.value + UnitVal;
    }

    document.getElementById(NumberId).value = this.value;
    document.getElementById(SelectId).value = 1;
    document.getElementById(TrueId).value = this.value / ConvVal;
    if (UnitVal === document.getElementById('Fahrenheit').value) {
        document.getElementById(TrueId).value = (this.value - 32) / ConvVal;
    }
    GetMR()
    UpdateBoxTO(this.id)
};