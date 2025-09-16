function BuildItemLists() {
    var ClassItemList = document.getElementsByClassName("ItemList")
    var i
    var j


    var RoundVal = LtVariable['Bw'][6]

    for (i = 0; i < ClassItemList.length; i++) {
        var ConvId = ClassItemList[i].id.replace(/ItemList/, 'Conv')
        var UnitId = ClassItemList[i].id.replace(/ItemList/, 'Unit')
        var ItemId = ClassItemList[i].id.replace(/ItemList/, 'Item')
        var ItemLabelId = ClassItemList[i].id.replace(/ItemList/, 'ItemLabel')
        var ItemWeightId = ClassItemList[i].id.replace(/ItemList/, 'ItemWeight')
        var ItemWeightNumId = ClassItemList[i].id.replace(/ItemList/, 'ItemWeightNum')
        var LtUnitId = ClassItemList[i].id.replace(/ItemList/, 'LtSelect');
        var LtUnit = window[LtUnitId]
        var elem = document.getElementById(ItemId)
        var elemB4 = document.getElementById(ItemId)

        var ConvVal = document.getElementById(ConvId).value
        var UnitVal = document.getElementById(UnitId).value

        for (j in LtUnit) {
            if (j > 0) {
                var jVal = Number(j)
                var Num = LtUnit[j][3]
                var clone = elem.cloneNode(true);
                // Update the ID and add a class
                clone.classList.add('DivItemRow');
                clone.id = ItemId + jVal
                var ItemLabel = document.createElement("label");
                ItemLabel.innerText = Num
                ItemLabel.id = ItemLabelId
                ItemLabel.classList.add('LabelItem');
                clone.appendChild(ItemLabel)

                var ItemWeight = document.createElement("input")
                ItemWeight.id = ItemWeightId + jVal
                ItemWeight.type = "text"
                ItemWeight.value = Math.round(Number(LtUnit[j][1]) * ConvVal * RoundVal) / RoundVal + " " + UnitVal

                if (UnitVal === "x Treadmill") {
                    ItemWeight.value = Math.round(Number(LtUnit[j][1]) * ConvVal * RoundVal) / RoundVal + UnitVal
                }

                ItemWeight.classList.add('ItemDisplay2');
                ItemWeight.setAttribute('readonly', true);
                ItemWeight.setAttribute('disabled', true);
                ItemLabel.after(ItemWeight)

                var ItemWeightNum = document.createElement("input")
                ItemWeightNum.id = ItemWeightNumId + jVal
                ItemWeightNum.type = "number"
                ItemWeightNum.value = Math.round(Number(LtUnit[j][1]) * ConvVal * RoundVal) / RoundVal
                ItemWeightNum.style.display = "none"
                ItemWeight.classList.add('ItemWeightNum');
                ItemWeight.after(ItemWeightNum)

                // Inject it into the DOM
                elemB4.after(clone)
                var elemB4 = clone
            }
        }
    }
}
BuildItemLists()


function UpdateItemLists() {
    var ClassItemList = document.getElementsByClassName("ItemList")
    var i
    var j

    var RoundVal = LtVariable['Bw'][6]

    for (i = 0; i < ClassItemList.length; i++) {
        var ConvId = ClassItemList[i].id.replace(/ItemList/, 'Conv')
        var UnitId = ClassItemList[i].id.replace(/ItemList/, 'Unit')
        var ItemId = ClassItemList[i].id.replace(/ItemList/, 'Item')
        var ItemLabelId = ClassItemList[i].id.replace(/ItemList/, 'ItemLabel')
        var ItemWeightId = ClassItemList[i].id.replace(/ItemList/, 'ItemWeight')
        var ItemWeightNumId = ClassItemList[i].id.replace(/ItemList/, 'ItemWeightNum')
        var LtUnitId = ClassItemList[i].id.replace(/ItemList/, 'LtSelect');
        var LtUnit = window[LtUnitId]
        var elem = document.getElementById(ItemId)
        var elemB4 = document.getElementById(ItemId)

        var ConvVal = document.getElementById(ConvId).value
        var UnitVal = document.getElementById(UnitId).value

        for (j in LtUnit) {
            if (j > 0) {
                var jVal = Number(j)
                var Num = LtUnit[j][3]
                var ItemWeightIId = ItemWeightId + jVal
                document.getElementById(ItemWeightIId).value = Math.round(Number(LtUnit[j][1]) * ConvVal * RoundVal) / RoundVal + " " + UnitVal

                if (UnitVal === "x Treadmill") {
                    document.getElementById(ItemWeightIId).value = Math.round(Number(LtUnit[j][1]) * ConvVal * RoundVal) / RoundVal + UnitVal
                }

                var ItemWeightNumIId = ItemWeightNumId + jVal
                document.getElementById(ItemWeightNumIId).value = Math.round(Number(LtUnit[j][1]) * ConvVal * RoundVal) / RoundVal
            }
        }
    }
}


var ClassX = document.getElementsByClassName("DivLoad")
var i
for (i = 0; i < ClassX.length; i++) {
    ClassX[i].innerText = 0
}

//UpdateItemList
var ClassDivDown = document.getElementsByClassName("DivDown")
var i
for (i = 0; i < ClassDivDown.length; i++) {
    ClassDivDown[i].addEventListener("click", ExpandItemListHand,false)
}

function ExpandItemListHand() {
    var x = this.id
    ExpandItemList(x)
}

function ExpandItemList(x) {
    var ClassIconG4Down = document.getElementsByClassName("IconG4Down")
    var i
    for (i = 0; i < ClassIconG4Down.length; i++) {
        ClassIconG4Down[i].src = "icons/Down.png"
    }

    var ClassItemList = document.getElementsByClassName("ItemList")
    var i
    for (i = 0; i < ClassItemList.length; i++) {
        ClassItemList[i].style.display = "none"
    }

    var xID = document.getElementById(x).id
    var DivLoadId = xID.replace(/DivDown/, 'DivLoad')
    var IconDownId = xID.replace(/DivDown/, 'IconDown')
    var ItemListId = xID.replace(/DivDown/, 'ItemList')
    var DivLoadVal = document.getElementById(DivLoadId).innerText
    if (DivLoadVal === "0") {
        document.getElementById(IconDownId).src = "icons/Up.png"
        document.getElementById(DivLoadId).innerText = "1"
        document.getElementById(ItemListId).style.display = "grid"
    }
    else {
        document.getElementById(IconDownId).src = "icons/Down.png"
        document.getElementById(DivLoadId).innerText = "0"
        document.getElementById(ItemListId).style.display = "none"
    }
}

var ClassDivItemRow = document.getElementsByClassName("DivItemRow")
var i
for (i = 0; i < ClassDivItemRow.length; i++) {
    ClassDivItemRow[i].addEventListener("mouseover", DivItemRowMouseOverHand, false)
    ClassDivItemRow[i].addEventListener("click", DivItemRowClickHand, false)
}

function DivItemRowMouseOverHand() {
    var x = this.id;
    DivItemRowMouseOver(x)
}

function DivItemRowMouseOver(x) {
    var xID = document.getElementById(x).id
    var xVal = Number(xID.match(/\d+/g))
    var ItemWeightId = xID.replace(/Item/, 'ItemWeight')
    var ItemWeightNumId = xID.replace(/Item/, 'ItemWeightNum')
    var xID = xID.replace(xVal, '')
    var IconId = xID.replace(/Item/, 'Icon')
    var LtUnitId = xID.replace(/Item/, 'LtSelect')
    var PanelLabel = xID.replace(/Item/, 'Label')
    var DisplayId = xID.replace(/Item/, 'Display')
    var NumberId = xID.replace(/Item/, 'Number')
    var Display2Id = xID.replace(/Item/, 'Display2')
    var LtUnit = window[LtUnitId]
    document.getElementById(IconId).src = LtUnit[xVal][2]
    document.getElementById(PanelLabel).innerText = LtUnit[xVal][4]

    var TextLength = LtUnit[xVal][4].length
    document.getElementById(PanelLabel).style.fontSize = 0.9 + "rem"

    if (TextLength > 9) {
        document.getElementById(PanelLabel).style.fontSize = 0.4 + 4 / (TextLength) + "rem"
    }

    document.getElementById(Display2Id).value = document.getElementById(ItemWeightId).value
    document.getElementById(NumberId).value = document.getElementById(ItemWeightNumId).value
    UpdateNumber(NumberId)

    if (xVal === 1) {
        document.getElementById(DisplayId).style.display = "grid"
        document.getElementById(NumberId).style.display = "grid"
        document.getElementById(Display2Id).style.display = "none"
        document.getElementById('SelectTemplateEquipment').value = 1
    }
    else {
        document.getElementById(DisplayId).style.display = "none"
        document.getElementById(NumberId).style.display = "none"
        document.getElementById(Display2Id).style.display = "grid"
    }
}

function DivItemRowClickHand() {
    var xID = this.id
    var xVal = Number(xID.match(/\d+/g))
    var xID = xID.replace(xVal, '')
    var x = xID.replace(/Item/, 'DivDown')
    ExpandItemList(x)
}

//DropDown
var ClassDropdown = document.getElementsByClassName("Dropdown")
var i
for (i = 0; i < ClassDropdown.length; i++) {
    ClassDropdown[i].addEventListener("mouseover", ExpandDropdown, false)
    ClassDropdown[i].addEventListener("mouseout", CloseDropdown, false)
}

function ExpandDropdown() {
    var xID = this.id
    var NumberId = xID.replace(/Dropdown/, 'Number')
    var DropdownContentId = xID.replace(/Dropdown/, 'DropdownContent')
    if (document.getElementById(NumberId).style.display === "grid") {
        document.getElementById(DropdownContentId).style.display = "grid"
    }
}

function CloseDropdown() {
    var xID = this.id
    var DropdownContentId = xID.replace(/Dropdown/, 'DropdownContent')
    document.getElementById(DropdownContentId).style.display = "none"
}