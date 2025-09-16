//ExpandTitleScenario
document.getElementById('TitleScenario').addEventListener("click", ExpandTitleScenario, false)
function ExpandTitleScenario() {
    if (document.getElementById('TitleSoldier').style.display === "grid") {
        document.getElementById('TitleSoldier').style.display = "none"
        document.getElementById('TitleEquipment').style.display = "none"
        document.getElementById('TitleWeather').style.display = "none"
        document.getElementById('TitleRoute').style.display = "none"
        document.getElementById('DownScenario').src = "icons/Down.png" 
    }
    else {
        document.getElementById('TitleSoldier').style.display = "grid"
        document.getElementById('TitleEquipment').style.display = "grid"
        document.getElementById('TitleWeather').style.display = "grid"
        document.getElementById('TitleRoute').style.display = "grid"
        document.getElementById('DownScenario').src = "icons/Up.png" 
    }
};

//ExpandTitleScenario
document.getElementById('TitleSettings').addEventListener("click", ExpandTitleSettings, false)
function ExpandTitleSettings() {
    if (document.getElementById('TitleUnitSystem').style.display === "grid") {
        document.getElementById('TitleUnitSystem').style.display = "none"
        document.getElementById('DownSettings').src = "icons/Down.png" 
    }
    else {
        document.getElementById('TitleUnitSystem').style.display = "grid"
        document.getElementById('DownSettings').src = "icons/Up.png" 
    }
};

//UpdateSelectLwUniform
document.getElementById('SelectLwUniform').addEventListener("change", UpdateSelectLwUniform, false)
function UpdateSelectLwUniform() {
    var UNIFORM = document.getElementById('SelectLwUniform').value
    if (UNIFORM === 2) {
        document.getElementById('TrueIT').value = 0.655
        document.getElementById('TrueITVg').value = -0.37
        document.getElementById('TrueIMclo').value = 0.727
        document.getElementById('TrueIMcloVg').value = 0.362
    }
    else {
        document.getElementById('TrueIT').value = 1.09
        document.getElementById('TrueITVg').value = -0.246
        document.getElementById('TrueIMclo').value = 0.377
        document.getElementById('TrueIMcloVg').value = 0.34
    }
    GetMR()
};

//UpdateSelectSex
document.getElementById('SelectSex').addEventListener("change", UpdateSelectSex, false)
function UpdateSelectSex() {
    var SelectSexVal = Number(document.getElementById('SelectSex').value)
    document.getElementById('TrueSex').value = SelectSexVal - 1;

    if (SelectSexVal === 1) {
        document.getElementById('IconSex').src = "icons/Female.png"
        document.getElementById('SumSex').innerText = "Female"
    }
    else {
        document.getElementById('IconSex').src = "icons/Male.png"
        document.getElementById('SumSex').innerText = "Male"
    }
    GetMR()
};

document.getElementById('SelectUnitBw').addEventListener("change", UpdateSelectUnitBw, false)
function UpdateSelectUnitBw() {
    UpdateLwUnit('SelectLwUniform')
    UpdateLwUnit('SelectLwHead')
    UpdateLwUnit('SelectLwBody')
    UpdateLwUnit('SelectLwFoot')
    UpdateLwUnit('SelectLwPack')
    UpdateLwUnit('SelectLwWeapon')
    UpdateItemLists()
};

function UpdateLwUnit(X) {
    var XId = document.getElementById(X).id
    var ConvId = XId.replace(/Select/, 'Conv')
    var DisplayId = XId.replace(/Select/, 'Display')
    var Display2Id = XId.replace(/Select/, 'Display2')
    var NumberId = XId.replace(/Select/, 'Number')
    var RangeId = XId.replace(/Select/, 'Range')
    var TrueId = XId.replace(/Select/, 'True')
    var UnitId = XId.replace(/Select/, 'Unit')
    var VarId = XId.replace(/Select/, '')

    var ConvVal = document.getElementById('ConvBw').value
    var UnitVal = document.getElementById('UnitBw').value
    var RoundVal = LtVariable['Bw'][6]

    var TrueVal = document.getElementById(TrueId).value
    var VarVal = Math.round(TrueVal * ConvVal * RoundVal) / RoundVal
    var MaxVal = Math.round(LtVariable[VarId][4] * ConvVal * RoundVal) / RoundVal
    var MinVal = Math.round(LtVariable[VarId][2] * ConvVal * RoundVal) / RoundVal

    document.getElementById(ConvId).value = ConvVal
    document.getElementById(DisplayId).value = VarVal + " " + UnitVal
    document.getElementById(Display2Id).value = VarVal + " " + UnitVal
    document.getElementById(NumberId).max = MaxVal
    document.getElementById(NumberId).min = MinVal
    document.getElementById(NumberId).value = VarVal
    document.getElementById(RangeId).max = MaxVal
    document.getElementById(RangeId).min = MinVal
    document.getElementById(RangeId).value = VarVal
    document.getElementById(UnitId).value = UnitVal
};

//GetMr = Calculate metabolic rate and core temperature
function GetMR() {

    var AGE = Number(document.getElementById('TrueAge').value)
    var BW = Number(document.getElementById('TrueBw').value)
    var DIST = Number(document.getElementById('TrueDist').value)
    var GRD = Number(document.getElementById('TrueGrd').value)
    var HT = Number(document.getElementById('TrueHt').value)
    var LWUniform = Number(document.getElementById('TrueLwUniform').value)
    var LWHead = Number(document.getElementById('TrueLwHead').value)
    var LWBody = Number(document.getElementById('TrueLwBody').value)
    var LWFoot = Number(document.getElementById('TrueLwFoot').value)
    var LWPack = Number(document.getElementById('TrueLwPack').value)
    var LWWeapon = Number(document.getElementById('TrueLwWeapon').value)
    var IT = document.getElementById('TrueIT').value
    var ITVg = document.getElementById('TrueITVg').value
    var IMclo = document.getElementById('TrueIMclo').value
    var IMcloVg = document.getElementById('TrueIMcloVg').value
    var RH = Number(document.getElementById('TrueRh').value)
    var SEX = Number(document.getElementById('TrueSex').value)
    var SPD = Number(document.getElementById('TrueSpd').value)
    var TA = Number(document.getElementById('TrueTa').value)
    var TF = Number(document.getElementById('TrueTf').value)
    var WS = Number(document.getElementById('TrueWs').value)

    var TMR = TA
    var Veff = Number(0.67 * SPD + WS + 0.11)
    var BSA = (1 - SEX) * 0.010269 * Math.pow(HT, 0.6522) * Math.pow(BW, 0.4246) + SEX * 0.011053 * Math.pow(HT, 0.6454) * Math.pow(BW, 0.4129);
    var LWTotal = LWUniform + LWHead + LWBody + LWFoot + LWPack + LWWeapon
    var LWmulti = 1 + 4 * Math.pow(LWWeapon / BW, 1.3) + 1.38 * Math.pow(LWHead / BW, 1.21) + 1.38 * Math.pow(LWBody / BW, 1.21) + 1.38 * Math.pow(LWFoot / BW, 1.21) + 1.38 * Math.pow(LWUniform / BW, 1.21) + 1.96 * Math.pow(LWPack / BW, 1.36)
    var RMR = 0.0484259259 / BW * (SEX * (66.5 + 13.75 * BW + 5.003 * HT - 6.755 * AGE) + (1 - SEX) * (655.1 + 9.563 * BW + 1.85 * HT - 4.676 * AGE));
    var TIME = 1000 * DIST / SPD
    var MR = BW * (RMR + LWmulti * (0.21 + TF * (1.78 * Math.pow(SPD, 0.58) + 0.27 * Math.pow(SPD, 4) + 0.34 * SPD * GRD * (1 - Math.pow(1.05, (1 - Math.pow(1.1, GRD + 32)))))));
    var EC = (MR-BW*RMR) / 1000 * TIME
    var TSKi = 33

    var TCi = 37
    var SVPTsk = Math.pow(10, (8.1076 - (1750.286 / (TSKi + 235))))
    var ITeff = IT * Math.pow(Veff, ITVg)
    var Cevap = IMclo * Math.pow(Veff, IMcloVg)
    var Hrc = 6.45 * BSA * (TA - TSKi) / ITeff
    var U = 0.41 / IT * Math.pow(Veff, (-0.43 - IMcloVg))
    var Rload = (-0.071 * Math.pow(TMR - TA, 2) + 10.432 * (TMR - TA)) * (BSA / 1.8)
    var Pa = RH / 100 * Math.pow(10, (8.1076 - (1750.286 / (TA + 235))))
    var Emax = 14.21 * BSA * Cevap * (SVPTsk - Pa)
    var Ereq = Hrc + 0.8 * MR + U * Rload
    var TCeq = 36.75 + 0.004 * MR + 0.0025 * U * Rload + 0.0011 * Hrc + 0.8 * Math.exp(0.0047 * (Ereq - Emax))
    var KWKD = (1 + 3 * Math.exp(0.3 * (37 - TCeq))) / 225
    var TCx = TCi + (TCeq - TCi) * (1 - Math.exp(-KWKD * TIME / 60))
    var SWTrate = 147 * BSA + 1.527 * Ereq - 0.87 * Emax
    var SWT = Math.max(0, SWTrate * TIME / 3600)

    document.getElementById('TrueEc').value = EC
    document.getElementById('TrueMr').value = MR
    document.getElementById('TrueSwt').value = SWT
    document.getElementById('TrueTc').value = TCx

    document.getElementById('SumLwTotal').innerText = Math.round(10 * document.getElementById('ConvBw').value * LWTotal) / 10 + " " + document.getElementById('UnitBw').value
    document.getElementById('OutputTime').value = Math.floor(TIME / 3600) + " hr " + (Math.floor(TIME / 60) - Math.floor(TIME / 3600) * 60) + " min";
    document.getElementById('OutputMr').value = Math.round(document.getElementById('ConvMr').value * MR) + " " + document.getElementById('UnitMr').value;
    document.getElementById('OutputEc').value = Math.round(document.getElementById('ConvEc').value * EC) + " " + document.getElementById('UnitEc').value;
    document.getElementById('OutputSwt').value = Math.round(document.getElementById('ConvSwt').value * SWT) + " " + document.getElementById('UnitSwt').value;

    var SelectUnitValue = Number(document.getElementById('SelectUnitT').value)

    if (TCx > 42) {
        document.getElementById('OutputTc').value = "> 42 " + document.getElementById('UnitTa').value

        if (SelectUnitValue === 2) {
            document.getElementById('OutputTc').value = "> 107.6 " + document.getElementById('UnitTa').value
        }
    }
    else {
        document.getElementById('OutputTc').value = Math.round(10 * TCx) / 10 + " " + document.getElementById('UnitTa').value
        if (SelectUnitValue === 2) {
            document.getElementById('OutputTc').value = Math.round(10 * (32 + 9 / 5 * TCx)) / 10 + " " + document.getElementById('UnitTa').value
        }
    }

    var SelectSexVal = Number(document.getElementById('SelectSex').value)
    document.getElementById('TrueSex').value = SelectSexVal - 1;

    if (SelectSexVal === 1) {
        document.getElementById('IconSex').src = "icons/Female.png"
        document.getElementById('SumSex').innerText = "Female"
    }
    else {
        document.getElementById('IconSex').src = "icons/Male.png"
        document.getElementById('SumSex').innerText = "Male"
    }
    UpdateThermometer()
    document.getElementById('SumAge').innerText = document.getElementById('NumberAge').value + " year old"
    document.getElementById('SumHt').innerText = document.getElementById('DisplayHt').value
    document.getElementById('SumBw').innerText = document.getElementById('DisplayBw').value
    document.getElementById('SumLwPercent').innerText = Math.round(100 * LWTotal / BW) + "% BW"

    if (Number(document.getElementById('SelectUnitHt').value) === 2) {
        document.getElementById('SumHt').innerText = Math.floor(document.getElementById('NumberHt').value / 12) + "'" + Math.floor(document.getElementById('NumberHt').value - 12 * Math.floor(document.getElementById('NumberHt').value / 12)) + "\""
    }
    document.getElementById('SumTa').innerText = document.getElementById('DisplayTa').value
    document.getElementById('SumWs').innerText = "Wind "+ document.getElementById('DisplayWs').value
    document.getElementById('SumRh').innerText = document.getElementById('DisplayRh').value + " RH"

    document.getElementById('SumTime').innerText = Math.floor(TIME / 3600) + "hr " + (Math.floor(TIME / 60) - Math.floor(TIME / 3600) * 60) + "min";
        document.getElementById('SumDist').innerText = Math.round(document.getElementById('ConvDist').value * DIST * 10) / 10 + " " + document.getElementById('UnitDist').value
    document.getElementById('SumGrd').innerText = GRD+"%"
    document.getElementById('SumSpd').innerText = Math.round(document.getElementById('ConvSpd').value * 10 * SPD) / 10 + " " + document.getElementById('UnitSpd').value
}

//UpdateSelect
var ClassSelect = document.getElementsByClassName("Select")
var i
for (i = 0; i < ClassSelect.length; i++) {
    ClassSelect[i].addEventListener("change", UpdateSelectHand, false)
};

function UpdateSelectHand() {
    var x = this.id;
    UpdateSelect(x)
}

function UpdateSelect(x) {
    var xID = document.getElementById(x).id
    var xVal = document.getElementById(x).value
    if (xVal > 1) {

        var DisplayId = xID.replace(/Select/, 'Display')
        var NumberId = xID.replace(/Select/, 'Number')
        var RangeId = xID.replace(/Select/, 'Range')
        var VarId = xID.replace(/Select/, '')
        var TrueId = xID.replace(/Select/, 'True')
        var ConvId = xID.replace(/Select/, 'Conv')
        var UnitId = xID.replace(/Select/, 'Unit')
        var ConvVal = document.getElementById(ConvId).value
        var UnitVal = document.getElementById(UnitId).value

        var LtUnitId = xID.replace(/Select/, 'LtSelect')
        var LtUnit = window[LtUnitId]
        var RoundVal = LtVariable[VarId][6]
        var VarVal = Math.round(LtUnit[xVal][1] * ConvVal * RoundVal) / RoundVal

        document.getElementById(DisplayId).value = VarVal + " " + UnitVal;
        if (UnitVal === "%") {
            document.getElementById(DisplayId).value = VarVal + UnitVal;
        }
        if (UnitVal === "x Treadmill") {
            document.getElementById(DisplayId).value = VarVal + UnitVal;
        }
        document.getElementById(RangeId).value = VarVal;
        document.getElementById(NumberId).value = VarVal;
        document.getElementById(TrueId).value = VarVal / ConvVal;
    }
    GetMR()
}

//UpdateSelectUnit
var ClassSelectUnit = document.getElementsByClassName("SelectUnit")
var i
for (i = 0; i < ClassSelectUnit.length; i++) {
    ClassSelectUnit[i].addEventListener("change", UpdateSelectUnitHand, this,false)
};

function UpdateSelectUnitHand() {
    var x = this.id;
    UpdateSelectUnit(x)
}

function UpdateSelectUnit(x) {
    var xID = document.getElementById(x).id
    var xVal = document.getElementById(x).value
    var ConvId = xID.replace(/SelectUnit/, 'Conv')
    var DisplayId = xID.replace(/SelectUnit/, 'Display')
    var NumberId = xID.replace(/SelectUnit/, 'Number')
    var RangeId = xID.replace(/SelectUnit/, 'Range')
    var TrueId = xID.replace(/SelectUnit/, 'True')
    var UnitId = xID.replace(/SelectUnit/, 'Unit')
    var VarId = xID.replace(/SelectUnit/, '')
    var LabelMinId = xID.replace(/SelectUnit/, 'LabelMin')

    var LtUnitId = xID.replace(/Select/, 'Lt')
    var LtUnit = window[LtUnitId]
    var ConvVal = LtUnit[xVal][2]
    var RoundVal = LtVariable[VarId][6]
    var MaxVal = Math.round(LtVariable[VarId][4] * ConvVal * RoundVal) / RoundVal
    var MinVal = Math.round(LtVariable[VarId][2] * ConvVal * RoundVal) / RoundVal
    var TrueVal = document.getElementById(TrueId).value
    var UnitVal = LtUnit[xVal][1]

    var VarVal = Math.round(TrueVal * ConvVal * RoundVal) / RoundVal
    document.getElementById(ConvId).value = ConvVal
    document.getElementById(DisplayId).value = VarVal + " " + UnitVal
    document.getElementById(NumberId).max = MaxVal
    document.getElementById(NumberId).min = MinVal
    document.getElementById(NumberId).value = VarVal
    document.getElementById(RangeId).max = MaxVal
    document.getElementById(RangeId).min = MinVal
    document.getElementById(RangeId).value = VarVal
    document.getElementById(UnitId).value = UnitVal

    if (VarId === "Spd") {
        var TrueVal = document.getElementById('TrueWs').value
        var VarVal = Math.round(TrueVal * ConvVal * RoundVal) / RoundVal
        var MaxVal = Math.round(LtVariable['Ws'][4] * ConvVal * RoundVal) / RoundVal
        var MinVal = Math.round(LtVariable['Ws'][2] * ConvVal * RoundVal) / RoundVal
        document.getElementById('ConvWs').value = ConvVal
        document.getElementById('DisplayWs').value = VarVal + " " + UnitVal
        document.getElementById('NumberWs').max = MaxVal
        document.getElementById('NumberWs').min = MinVal
        document.getElementById('NumberWs').value = VarVal
        document.getElementById('RangeWs').max = MaxVal
        document.getElementById('RangeWs').min = MinVal
        document.getElementById('RangeWs').value = VarVal
        document.getElementById('UnitWs').value = UnitVal
    }
    GetMR()
};

//UpdateSelectUnitOutput
document.getElementById('SelectUnitEc').addEventListener("change", UpdateSelectUnitOutputHand, this, false)
document.getElementById('SelectUnitMr').addEventListener("change", UpdateSelectUnitOutputHand, this, false)
document.getElementById('SelectUnitSwt').addEventListener("change", UpdateSelectUnitOutputHand, this, false)

function UpdateSelectUnitOutputHand() {
    var x = this.id;
    UpdateSelectUnitOutput(x)
}

function UpdateSelectUnitOutput(x) {
    var xID = document.getElementById(x).id
    var xVal = document.getElementById(x).value
    var ConvId = xID.replace(/SelectUnit/, 'Conv')
    var LtUnitId = xID.replace(/Select/, 'Lt')
    var TrueId = xID.replace(/SelectUnit/, 'True')
    var UnitId = xID.replace(/SelectUnit/, 'Unit')
    var VarId = xID.replace(/SelectUnit/, '')

    var LtUnit = window[LtUnitId]
    var ConvVal = LtUnit[xVal][2]
    var RoundVal = LtVariable[VarId][6]
    var TrueVal = document.getElementById(TrueId).value
    var UnitVal = LtUnit[xVal][1]

    var VarVal = Math.round(TrueVal * ConvVal * RoundVal) / RoundVal

    document.getElementById(ConvId).value = ConvVal
    document.getElementById(UnitId).value = UnitVal
    GetMR()

};

//UpdateSelectUnitT
document.getElementById('SelectUnitT').addEventListener("change", UpdateSelectUnitT, false)
function UpdateSelectUnitT() {
    var SelectUnitValue = Number(document.getElementById('SelectUnitT').value)
    var VarVal = Math.round(document.getElementById('TrueTa').value*10)/10
    var MaxVal = Math.round(LtVariable['Ta'][4])
    var MinVal = Math.round(LtVariable['Ta'][2])
    var UnitVal = document.getElementById('Celsius').value
    var ConvVal = 1

    if (SelectUnitValue === 2) {
        var UnitVal = document.getElementById('Fahrenheit').value
        var VarVal = Math.round((document.getElementById('TrueTa').value * 9 / 5 + 32)*10)/10
        var MaxVal = Math.round(LtVariable['Ta'][4] * 9 / 5 + 32)
        var MinVal = Math.round(LtVariable['Ta'][2] * 9 / 5 + 32)
        var ConvVal = 9/5
    }

    document.getElementById('DisplayTa').value = VarVal + " " + UnitVal

    document.getElementById('NumberTa').max = MaxVal
    document.getElementById('NumberTa').min = MinVal
    document.getElementById('NumberTa').value = VarVal
    document.getElementById('RangeTa').max = MaxVal
    document.getElementById('RangeTa').min = MinVal
    document.getElementById('RangeTa').value = VarVal
    document.getElementById('ConvTa').value = ConvVal
    document.getElementById('UnitTa').value = UnitVal
    document.getElementById('ConvTc').value = ConvVal
    document.getElementById('UnitTc').value = UnitVal
    GetMR()
};

var ClassMenu1 = document.getElementsByClassName("Menu1")
var i;
for (i = 0; i < ClassMenu1.length; i++) {

    ClassMenu1[i].addEventListener("click", function PanelExpandMenu1(evt) {
        var ClassMenu1 = document.getElementsByClassName("Menu1")
        var ClassMenu1ID = this.id;
        var ClassMenu1PanelID = ClassMenu1ID.replace(/Title/g, 'Panel');
        document.getElementById('PanelMain').style.display = "none";
        document.getElementById('PanelScenario').style.display = "none";
        document.getElementById('PanelSettings').style.display = "none";
        document.getElementById('PanelReferences').style.display = "none";
        document.getElementById(ClassMenu1PanelID).style.display = "grid";

        for (i = 0; i < ClassMenu1.length; i++) {
            ClassMenu1[i].className = ClassMenu1[i].className.replace(" active", "")
        }
        for (i = 0; i < ClassMenu2.length; i++) {
            ClassMenu2[i].className = ClassMenu2[i].className.replace(" active", "")
        }
        evt.currentTarget.className += " active"
    });
};

var ClassMenu2 = document.getElementsByClassName("Menu2");
var i;
for (i = 0; i < ClassMenu2.length; i++) {
    ClassMenu2[i].addEventListener("click", function PanelExpandMenu2(evt) {
        var ClassMenu2ID = this.id;
        var ClassMenu2PanelID = ClassMenu2ID.replace(/Title/g, 'Panel');
        var DivSummaryId = ClassMenu2ID.replace(/Title/g, 'DivSummary');
        document.getElementById(ClassMenu2PanelID).style.display = "grid";
        document.getElementById('PanelMain').style.display = "none";
        document.getElementById('PanelReferences').style.display = "none";
        document.getElementById('PanelSettings').style.display = "none";
        document.getElementById('PanelScenario').style.display = "none";

        if (ClassMenu2ID === "TitleUnitSystem") {
            document.getElementById('PanelSettings').style.display = "grid";
        }

        else {
            document.getElementById('PanelScenario').style.display = "grid";
            if (ClassMenu2ID !== "TitleSoldier") {
                document.getElementById('PanelSoldier').style.display = "none";
            }

            if (ClassMenu2ID !== "TitleEquipment") {
                document.getElementById('PanelEquipment').style.display = "none";
            }

            if (ClassMenu2ID !== "TitleWeather") {
                document.getElementById('PanelWeather').style.display = "none";
            }

            if (ClassMenu2ID !== "TitleRoute") {
                document.getElementById('PanelRoute').style.display = "none";
            }
        }

        for (i = 0; i < ClassMenu1.length; i++) {
            ClassMenu1[i].className = ClassMenu1[i].className.replace(" active", "")
        }
        for (i = 0; i < ClassMenu2.length; i++) {
            ClassMenu2[i].className = ClassMenu2[i].className.replace(" active", "")
        }

        evt.currentTarget.className += " active"
        document.getElementById(DivSummaryId).style.display = "block"

    });
};

function PanelExpand(x) {
    var xID = document.getElementById(x).id;
    var yID = xID.replace(/Drop/g, 'Drop');
    var zID = xID.replace(/Drop/g, 'Panel');

    if (document.getElementById(xID).innerText === "+") {
        document.getElementById(zID).style.display = "grid";
        document.getElementById(yID).innerText = "-"
    }

    else if (document.getElementById(yID).innerText === "-") {
        document.getElementById(zID).style.display = "none";
        document.getElementById(yID).innerText = "+"
    }

}

document.getElementById("TitleMain").click();

document.getElementById('SelectTemplateUnitSystem').addEventListener("change", UpdateSelectUnitSystem, false)
function UpdateSelectUnitSystem() {
    var x = document.getElementById('SelectTemplateUnitSystem').value
    var Tcelsius = document.getElementById('Celsius').value
    var Tfahrenheit = document.getElementById('Fahrenheit').value
    if (x === "International") {
        document.getElementById('SelectUnitDist').value = 1;
        document.getElementById('SelectUnitEc').value = 2;
        document.getElementById('SelectUnitHt').value = 1;
        document.getElementById('SelectUnitMr').value = 2;
        document.getElementById('SelectUnitSpd').value = 2;
        document.getElementById('SelectUnitSwt').value = 2;
        document.getElementById('SelectUnitBw').value = 1;
        document.getElementById('SelectUnitT').value = 1;
    }
    else if (x === "United States") {
        document.getElementById('SelectUnitDist').value = 2;
        document.getElementById('SelectUnitEc').value = 1;
        document.getElementById('SelectUnitHt').value = 2;
        document.getElementById('SelectUnitMr').value = 1;
        document.getElementById('SelectUnitSpd').value = 3;
        document.getElementById('SelectUnitSwt').value = 1;
        document.getElementById('SelectUnitBw').value = 2;
        document.getElementById('SelectUnitT').value = 2;
    }

    UpdateSelectUnit('SelectUnitDist')
    UpdateSelectUnitOutput('SelectUnitEc')
    UpdateSelectUnit('SelectUnitHt')
    UpdateSelectUnitOutput('SelectUnitMr')
    UpdateSelectUnit('SelectUnitSpd')
    UpdateSelectUnitOutput('SelectUnitSwt')
    UpdateSelectUnit('SelectUnitBw')
    UpdateSelectUnitT()
    UpdateSelectUnitBw()
}


function UpdateTemplateSoldier(x) {
    var xval = document.getElementById(x).value
    if (xval > 1) {
        var ValSex = LtSelectSoldier[xval][2]
        var ValAge = LtSelectSoldier[xval][3]
        var ValHt = Math.round(LtSelectSoldier[xval][4] * document.getElementById('ConvHt').value)
        var ValBw = Math.round(LtSelectSoldier[xval][5] * document.getElementById('ConvBw').value * 10) / 10

        document.getElementById('TrueSex').value = ValSex
        document.getElementById('TrueAge').value = ValAge
        document.getElementById('TrueHt').value = ValHt / document.getElementById('ConvHt').value
        document.getElementById('TrueBw').value = ValBw / document.getElementById('ConvBw').value

        document.getElementById('SelectSex').value = ValSex+1
        document.getElementById('NumberAge').value = ValAge
        document.getElementById('NumberHt').value = ValHt
        document.getElementById('NumberBw').value = ValBw

        document.getElementById('RangeAge').value = ValAge
        document.getElementById('RangeHt').value = ValHt
        document.getElementById('RangeBw').value = ValBw

        document.getElementById('DisplayAge').value = ValAge + " years"
        document.getElementById('DisplayHt').value = ValHt + " " + document.getElementById('UnitHt').value
        document.getElementById('DisplayBw').value = ValBw + " " + document.getElementById('UnitBw').value

        GetMR()
    }
}

function UpdateTemplateEquipment() {
    var xval = document.getElementById('SelectTemplateEquipment').value
    var ConVal = document.getElementById('ConvBw').value
    var UnitVal = document.getElementById('UnitBw').value
    if (xval > 1) {

        var LwUniform = Math.round(LtSelectEquipment[xval][7]*ConVal*10)/10
        var LwHead = Math.round(LtSelectEquipment[xval][8] * ConVal * 10) / 10
        var LwBody = Math.round(LtSelectEquipment[xval][9] * ConVal * 10) / 10
        var LwFoot = Math.round(LtSelectEquipment[xval][10] * ConVal * 10) /10
        var LwPack = Math.round(LtSelectEquipment[xval][11] * ConVal * 10) / 10
        var LwWeapon = Math.round(LtSelectEquipment[xval][12] * ConVal * 10) / 10

        document.getElementById('SelectLwUniform').value = LtSelectEquipment[xval][1];
        document.getElementById('SelectLwHead').value = LtSelectEquipment[xval][2];
        document.getElementById('SelectLwBody').value = LtSelectEquipment[xval][3];
        document.getElementById('SelectLwFoot').value = LtSelectEquipment[xval][4];
        document.getElementById('SelectLwPack').value = LtSelectEquipment[xval][5];
        document.getElementById('SelectLwWeapon').value = LtSelectEquipment[xval][6];

        UpdateSelect('SelectLwUniform')
        UpdateSelect('SelectLwHead')
        UpdateSelect('SelectLwBody')
        UpdateSelect('SelectLwFoot')
        UpdateSelect('SelectLwPack')
        UpdateSelect('SelectLwWeapon')

        var x = "ItemLwUniform" + LtSelectEquipment[xval][1]
        DivItemRowMouseOver(x)
        var x = "ItemLwHead" + LtSelectEquipment[xval][2]
        DivItemRowMouseOver(x)
        var x = "ItemLwBody" + LtSelectEquipment[xval][3]
        DivItemRowMouseOver(x)
        var x = "ItemLwFoot" + LtSelectEquipment[xval][4]
        DivItemRowMouseOver(x)
        var x = "ItemLwPack" + LtSelectEquipment[xval][5]
        DivItemRowMouseOver(x)
        var x = "ItemLwWeapon" + LtSelectEquipment[xval][6]
        DivItemRowMouseOver(x)
        GetMR()
    }
}

document.getElementById('NumberBw').addEventListener("change", LwRanging, false)
document.getElementById('RangeBw').addEventListener("change", LwRanging, false)
document.getElementById('SelectTemplateSoldier').addEventListener("change", LwRanging, false)
function LwRanging() {
    var Bw = document.getElementById('TrueBw').value
    var GY = 0.4
    var YR = 0.8
    var RB = 1.2
    var Width = 15

    var LoadMax = 50
    var Coef = 1.38
    var Expo = 1.21
    var GYVal = Math.pow(GY / Coef, 1 / Expo)
    var YRVal = Math.pow(YR / Coef, 1 / Expo)
    var RBVal = Math.pow(RB / Coef, 1 / Expo)

    var BoxGix = document.getElementById('BoxGLwBody').id
    var BoxGId = document.getElementById('BoxGLwBody').id
    var BoxYId = BoxGId.replace(/BoxG/, 'BoxY')
    var BoxRId = BoxGId.replace(/BoxG/, 'BoxR')
    var BoxBId = BoxGId.replace(/BoxG/, 'BoxB')

    document.getElementById(BoxGId).style.width = Width * Math.min(GYVal * Bw, LoadMax) / LoadMax + "rem"
    document.getElementById(BoxYId).style.width = Width * (Math.min(YRVal * Bw, LoadMax) - Math.min(GYVal * Bw, LoadMax)) / LoadMax + "rem"
    document.getElementById(BoxRId).style.width = Width * (Math.min(RBVal * Bw, LoadMax) - Math.min(YRVal * Bw, LoadMax)) / LoadMax + "rem"
    document.getElementById(BoxBId).style.width = Width * (Math.min(10 * Bw, LoadMax) - Math.min(RBVal * Bw, LoadMax)) / LoadMax + "rem"

    var LoadMax = 50
    var Coef = 4
    var Expo = 1.3
    var GYVal = Math.pow(GY / Coef, 1 / Expo)
    var YRVal = Math.pow(YR / Coef, 1 / Expo)
    var RBVal = Math.pow(RB / Coef, 1 / Expo)

    var BoxGId = BoxGix.replace(/Body/, 'Weapon')
    var BoxYId = BoxGId.replace(/BoxG/, 'BoxY')
    var BoxRId = BoxGId.replace(/BoxG/, 'BoxR')
    var BoxBId = BoxGId.replace(/BoxG/, 'BoxB')

    document.getElementById(BoxGId).style.width = Width * Math.min(GYVal * Bw, LoadMax) / LoadMax + "rem"
    document.getElementById(BoxYId).style.width = Width * (Math.min(YRVal * Bw, LoadMax) - Math.min(GYVal * Bw, LoadMax)) / LoadMax + "rem"
    document.getElementById(BoxRId).style.width = Width * (Math.min(RBVal * Bw, LoadMax) - Math.min(YRVal * Bw, LoadMax)) / LoadMax + "rem"
    document.getElementById(BoxBId).style.width = Width * (Math.min(10 * Bw, LoadMax) - Math.min(RBVal * Bw, LoadMax)) / LoadMax + "rem"

   // var LoadMax = 5
   // var Coef = 8
   // var Expo = 1.3
   // var GYVal = Math.pow(GY / Coef, 1 / Expo)
   // var YRVal = Math.pow(YR / Coef, 1 / Expo)
   // var RBVal = Math.pow(RB / Coef, 1 / Expo)
   // var BoxGId = BoxGix.replace(/Body/, 'Foot')
   // var BoxYId = BoxGId.replace(/BoxG/, 'BoxY')
   // var BoxRId = BoxGId.replace(/BoxG/, 'BoxR')
   // var BoxBId = BoxGId.replace(/BoxG/, 'BoxB')

   // document.getElementById(BoxGId).style.width = Width * Math.min(GYVal * Bw, LoadMax) / LoadMax + "rem"
   // document.getElementById(BoxYId).style.width = Width * (Math.min(YRVal * Bw, LoadMax) - Math.min(GYVal * Bw, LoadMax)) / LoadMax + "rem"
   // document.getElementById(BoxRId).style.width = Width * (Math.min(RBVal * Bw, LoadMax) - Math.min(YRVal * Bw, LoadMax)) / LoadMax + "rem"
   // document.getElementById(BoxBId).style.width = Width * (Math.min(10 * Bw, LoadMax) - Math.min(RBVal * Bw, LoadMax)) / LoadMax + "rem"

    var LoadMax = 50
    var Coef = 1.96
    var Expo = 1.36
    var GYVal = Math.pow(GY / Coef, 1 / Expo)
    var YRVal = Math.pow(YR / Coef, 1 / Expo)
    var RBVal = Math.pow(RB / Coef, 1 / Expo)

    var BoxGId = BoxGix.replace(/Body/, 'Pack')
    var BoxYId = BoxGId.replace(/BoxG/, 'BoxY')
    var BoxRId = BoxGId.replace(/BoxG/, 'BoxR')
    var BoxBId = BoxGId.replace(/BoxG/, 'BoxB')

    document.getElementById(BoxGId).style.width = Width * Math.min(GYVal * Bw, LoadMax) / LoadMax + "rem"
    document.getElementById(BoxYId).style.width = Width * (Math.min(YRVal * Bw, LoadMax) - Math.min(GYVal * Bw, LoadMax)) / LoadMax + "rem"
    document.getElementById(BoxRId).style.width = Width * (Math.min(RBVal * Bw, LoadMax) - Math.min(YRVal * Bw, LoadMax)) / LoadMax + "rem"
    document.getElementById(BoxBId).style.width = Width * (Math.min(10 * Bw, LoadMax) - Math.min(RBVal * Bw, LoadMax)) / LoadMax + "rem"

    var LoadMax = 5
    var Coef = 1.38
    var Expo = 1.21
    var GYVal = Math.pow(GY / Coef, 1 / Expo)
    var YRVal = Math.pow(YR / Coef, 1 / Expo)
    var RBVal = Math.pow(RB / Coef, 1 / Expo)
    var BoxGId = BoxGix.replace(/Body/, 'Uniform')
    var BoxYId = BoxGId.replace(/BoxG/, 'BoxY')
    var BoxRId = BoxGId.replace(/BoxG/, 'BoxR')
    var BoxBId = BoxGId.replace(/BoxG/, 'BoxB')

    document.getElementById(BoxGId).style.width = Width * Math.min(GYVal * Bw, LoadMax) / LoadMax + "rem"
    document.getElementById(BoxYId).style.width = Width * (Math.min(YRVal * Bw, LoadMax) - Math.min(GYVal * Bw, LoadMax)) / LoadMax + "rem"
    document.getElementById(BoxRId).style.width = Width * (Math.min(RBVal * Bw, LoadMax) - Math.min(YRVal * Bw, LoadMax)) / LoadMax + "rem"
    document.getElementById(BoxBId).style.width = Width * (Math.min(10 * Bw, LoadMax) - Math.min(RBVal * Bw, LoadMax)) / LoadMax + "rem"

    var LoadMax = 5
    var Coef = 1.38
    var Expo = 1.21
    var GYVal = Math.pow(GY / Coef, 1 / Expo)
    var YRVal = Math.pow(YR / Coef, 1 / Expo)
    var RBVal = Math.pow(RB / Coef, 1 / Expo)
    var BoxGId = BoxGix.replace(/Body/, 'Head')
    var BoxYId = BoxGId.replace(/BoxG/, 'BoxY')
    var BoxRId = BoxGId.replace(/BoxG/, 'BoxR')
    var BoxBId = BoxGId.replace(/BoxG/, 'BoxB')

    document.getElementById(BoxGId).style.width = Width * Math.min(GYVal * Bw, LoadMax) / LoadMax + "rem"
    document.getElementById(BoxYId).style.width = Width * (Math.min(YRVal * Bw, LoadMax) - Math.min(GYVal * Bw, LoadMax)) / LoadMax + "rem"
    document.getElementById(BoxRId).style.width = Width * (Math.min(RBVal * Bw, LoadMax) - Math.min(YRVal * Bw, LoadMax)) / LoadMax + "rem"
    document.getElementById(BoxBId).style.width = Width * (Math.min(10 * Bw, LoadMax) - Math.min(RBVal * Bw, LoadMax)) / LoadMax + "rem"
}

function UpdateBoxTOx() {
    var x = this.id
    UpdateBoxTO(x)
}

function UpdateBoxTO(x) {
    var xID = document.getElementById(x).id
    var xVal = document.getElementById(xID).value
    var Width = 15
    var BoxTId = xID.replace(/Range/, 'BoxT');
    var BoxOId = xID.replace(/Range/, 'BoxO');
    var ConvId = xID.replace(/Range/, 'Conv');
    var UnitId = xID.replace(/Range/, 'Unit');
    var VarId = xID.replace(/Range/, '')
    var ConvVal = document.getElementById(ConvId).value
    var UnitVal = document.getElementById(UnitId).value
    var RoundVal = LtVariable[VarId][6]
    var MaxVal = Math.round(LtVariable[VarId][4] * ConvVal * RoundVal) / RoundVal
    var MinVal = Math.round(LtVariable[VarId][2] * ConvVal * RoundVal) / RoundVal

    if (UnitVal === document.getElementById('Fahrenheit').value) {
        var MaxVal = Math.round((LtVariable[VarId][4] * ConvVal+32) * RoundVal) / RoundVal
        var MinVal = Math.round((LtVariable[VarId][2] * ConvVal+32) * RoundVal) / RoundVal
    }

    var BoxTVal = (2 + 48 * ((xVal - MinVal) / (MaxVal - MinVal))) / 50
    var BoxOVal = 1 - BoxTVal
    document.getElementById(BoxTId).style.width = Width * BoxTVal + "rem"
    document.getElementById(BoxOId).style.width = Width * BoxOVal + "rem"
}

document.getElementById('SelectTemplateUnitSystem').value = "International"
UpdateSelectUnitSystem()
document.getElementById('SelectTemplateUnitSystem').value = "United States"
UpdateSelectUnitSystem()

GetMR()
LwRanging()
UpdateBoxTO('RangeDist')
UpdateBoxTO('RangeLwBody')
UpdateBoxTO('RangeLwFoot')
UpdateBoxTO('RangeLwHead')
UpdateBoxTO('RangeLwPack')
UpdateBoxTO('RangeLwUniform')
UpdateBoxTO('RangeLwWeapon')
UpdateBoxTO('RangeRh')
UpdateBoxTO('RangeSpd')
UpdateBoxTO('RangeTa')
UpdateBoxTO('RangeTf')
UpdateBoxTO('RangeWs')

    document.getElementById('BoxGTa').style.width = 7.2375 + "rem"
    document.getElementById('BoxYTa').style.width = 3.675 + "rem"
    document.getElementById('BoxRTa').style.width = 2.475 + "rem"
document.getElementById('BoxBTa').style.width = 1.6125 + "rem"



function UpdateThermometer() {
    var XVal = Math.min(Math.max(37, Number(document.getElementById('TrueTc').value)), 42)
    var XReserve = (XVal - 37) / (42 - 37)
    var ColHt = 4
    document.getElementById('ColThermometer').style.height = XReserve * ColHt + "rem"
}