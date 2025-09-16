// JavaScript source code

function startup() {
    var ClassPanelInput = document.getElementsByClassName("PanelInput")
    var i
    for (i = 0; i < ClassPanelInput.length; i++) {
        var ConvId = ClassPanelInput[i].id.replace(/Panel/, 'Conv');
        var DisplayId = ClassPanelInput[i].id.replace(/Panel/, 'Display')
        var IconId = ClassPanelInput[i].id.replace(/Panel/, 'Icon');
        var LabelId = ClassPanelInput[i].id.replace(/Panel/, 'Label');
        var NumberId = ClassPanelInput[i].id.replace(/Panel/, 'Number')
        var RangeId = ClassPanelInput[i].id.replace(/Panel/, 'Range');
        var TrueId = ClassPanelInput[i].id.replace(/Panel/, 'True');
        var UnitId = ClassPanelInput[i].id.replace(/Panel/, 'Unit');
        var VarId = ClassPanelInput[i].id.replace(/Panel/, '')

        var UnitVal = LtVariable[VarId][7]

        document.getElementById(ConvId).value = 1
        document.getElementById(DisplayId).value = LtVariable[VarId][3] + " " + UnitVal
        document.getElementById(LabelId).innerText = LtVariable[VarId][0]
        document.getElementById(NumberId).max = LtVariable[VarId][4]
        document.getElementById(NumberId).min = LtVariable[VarId][2]
        document.getElementById(NumberId).step = LtVariable[VarId][5]
        document.getElementById(NumberId).value = LtVariable[VarId][3]
        document.getElementById(RangeId).max = LtVariable[VarId][4]
        document.getElementById(RangeId).min = LtVariable[VarId][2]
        document.getElementById(RangeId).step = LtVariable[VarId][5]
        document.getElementById(RangeId).value = LtVariable[VarId][3]
        document.getElementById(TrueId).value = LtVariable[VarId][3]
        document.getElementById(UnitId).value = UnitVal;

        if (UnitVal === "%") {
            document.getElementById(DisplayId).value = LtVariable[VarId][3] + UnitVal
        }
        if (UnitVal === "x Treadmill") {
            document.getElementById(DisplayId).value = LtVariable[VarId][3] + UnitVal
        }
    };

    var ClassSelectUnit = document.getElementsByClassName("SelectUnit")
    var i
    var j
    for (i = 0; i < ClassSelectUnit.length; i++) {
            var LtUnitId = ClassSelectUnit[i].id.replace(/Select/, 'Lt');
            var LtUnit = window[LtUnitId];
            for (j in LtUnit) {
                ClassSelectUnit[i].options[ClassSelectUnit[i].options.length] = new Option(LtUnit[j][0], j);
            }
    }

    var ClassSelect = document.getElementsByClassName("Select")
    var i
    var j
    for (i = 0; i < ClassSelect.length; i++) {
        var LtUnitId = ClassSelect[i].id.replace(/Select/, 'LtSelect');
        var LtUnit = window[LtUnitId];
        for (j in LtUnit) {
            ClassSelect[i].options[ClassSelect[i].options.length] = new Option(LtUnit[j][0], j);
        }

    }

    var ClassSelectTemplate = document.getElementsByClassName("SelectTemplate")
    var i
    var j
    for (i = 0; i < ClassSelectTemplate.length; i++) {
        var LtUnitId = ClassSelectTemplate[i].id.replace(/SelectTemplate/, 'LtSelect');
        var LtUnit = window[LtUnitId];
        for (j in LtUnit) {
            ClassSelectTemplate[i].options[ClassSelectTemplate[i].options.length] = new Option(LtUnit[j][0], j);
        }
    }
}
startup();

var i
var j
var k
var RowVal = 0
for (i in LtBiblio) {
    var ClassI = document.getElementsByClassName(i)
    var ClassI2Id = LtBiblio[i][0]
    var ClassI2 = document.getElementsByClassName(ClassI2Id)
    var RowVal = RowVal+1

    for (j in ClassI) {
        ClassI[j].innerText = RowVal + ". " + LtBiblio[i][1];
        ClassI[j].href = LtBiblio[i][2];
    }

    for (k in ClassI2) {
        ClassI2[k].innerText = "[" + RowVal + "]";
    }
}

function ClickRef() {
    document.getElementById('PanelMain').style.display = "none"
    document.getElementById('PanelScenario').style.display = "none"
    document.getElementById('PanelSettings').style.display = "none"
    document.getElementById('PanelReferences').style.display = "grid"
}

var i
var j
for (i in LtSelect) {
    var SelectId = document.getElementById(i).id
    document.getElementById(SelectId).options[0].disabled = true;
    document.getElementById(SelectId).options[0].hidden = true;
}

document.getElementById('UnitTa').value = document.getElementById('Celsius').value;
document.getElementById('UnitTc').value = document.getElementById('Celsius').value;

document.getElementById('DisplayTa').value = 20 + " " + document.getElementById('Celsius').value
document.getElementById('SelectUnitEc').value = 2;

document.getElementById('SelectUnitMr').value = 2;
document.getElementById('SelectUnitSpd').value = 2;
document.getElementById('SelectUnitSwt').value = 2;

document.getElementById('TrueIT').value = 1.09
document.getElementById('TrueITVg').value = -0.246
document.getElementById('TrueIMclo').value = 0.377
document.getElementById('TrueIMcloVg').value = 0.34

document.getElementById('ConvMr').value = 1
document.getElementById('TrueMr').value = LtVariable['Mr'][3]
document.getElementById('UnitMr').value = LtVariable['Mr'][7]

document.getElementById('ConvEc').value = 1
document.getElementById('TrueEc').value = LtVariable['Ec'][3]
document.getElementById('UnitEc').value = LtVariable['Ec'][7]

document.getElementById('ConvSwt').value = 1
document.getElementById('TrueSwt').value = LtVariable['Swt'][3]
document.getElementById('UnitSwt').value = LtVariable['Swt'][7]

document.getElementById('ConvTc').value = 1
document.getElementById('TrueTc').value = LtVariable['Tc'][3]
document.getElementById('UnitTc').value = LtVariable['Tc'][7]