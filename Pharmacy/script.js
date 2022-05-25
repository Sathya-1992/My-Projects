var medicinesNameList = [
    "Stavudine", "Sucralfate", "Sugammadex", "Abacavir", "Acyclovir", "Alemtuzumab", "Alendronate", "Allopurinol", "Amifostine", "Amikacin",
    "Aminocaproic Acid", "Amitriptyline", "Amlodipine", "Amoxicillin", "Paracetamol", "Amphotericin", "Ampicillin", "Baclofen", "Bleomycin", "Bortezomib",
    "Bosentan", "Busulfan", "Calcium", "Captopril", "Carbamazepine", "Carboplatin", "Carmustine", "Cefaclor", "Cefepime", "Cefixime",
    "Ceftazidime", "Cefuroxime", "Celecoxib", "Cephalexin", "Cidofovir", "Cisplatin", "Cladribine", "Clarithromycin", "Clindamycin", "Clobazam",
    "Clofarabine", "Codeine", "Crizanlizumab", "Crizotinib", "Cyclobenzaprine", "Cyclophosphamide", "Cyclosporine", "Cyproheptadine", "Cytarabine", "Dacarbazine",
    "Dactinomycin", "Dapsone", "Diclofenac", "Didanosine", "Dinutuximab", "Dobutamine", "Dopamine", "Dornase alfa", "Doxorubicin", "Dronabinol",
    "Enalapril", "Enoxaparin", "Erlotinib", "Erythromycin", "Erythropoietin", "Etonogestrel", "Etoposide", "Etravirine", "Famciclovir", "Famotidine",
    "Fidaxomicin", "Fluconazole", "Fludarabine", "Fluorouracil", "Foscarnet", "Furosemide", "Gabapentin", "Ganciclovir", "Gefitinib", "Gemcitabine",
    "Granisetron", "Hydrocortisone", "Hydromorphone", "Hydroxyurea", "Irinotecan", "Isotretinoin", "Itraconazole", "Ketoconazole", "Levothyroxine", "Linezolid",
    "Lomustine", "Lorazepam", "Lorlatinib", "Melphalan", "Meperidine", "Mercaptopurine", "Meropenem", "Mesna", "Methadone", "Methotrexate"
];
var searchWord;
var activeRack;
var containerDetails;
var container;
var salesQuantity;
var searchMedicineInput;
var salesMedicineQuantity;
var billForm;
var errorValue;
var pathDetail;
var medicineName;
var medicineCapacity;
var medicineQuantity;
var blinkContainer;
var listContainer;
var datalist;
var root = document.documentElement;
var currentRack;
var selectedMedicineClass;
var medicineId;
var activeList;
var listSelection;
var blinkList;
/**
 * Initial function.
 */
(function () {
    searchMedicineInput = document.querySelector(".searchMedicine");
    salesMedicineQuantity = document.getElementById("salesQuantity");
    billForm = document.getElementById("billform");
    errorValue = document.getElementById("error");
    pathDetail = document.getElementById("path");
    medicineName = document.getElementById("medName");
    medicineCapacity = document.getElementById("medCapacity");
    medicineQuantity = document.getElementById("medQuantity");
    listContainer = document.getElementById("listContainer");
    root = document.documentElement;
    datalist = document.getElementById("medicine");
    selectedMedicineClass = "";
    searchMedicineInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("searchBtn").click();
        }
    });
    salesMedicineQuantity.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("submitSalesBtn").click();
        }
    });
})();
/**
 *
 * To generate medicine storage details.
 */
var shelfCount = 0;
var rackDetails = new Array();
var medicines = medicinesNameList.map(function (medicineName, index) {
    var rackName = "rack_" + (Math.floor(index / 20) + 1);
    if (rackDetails.indexOf(rackName) === -1) {
        rackDetails.push(rackName);
    }
    if (index % 20 == 0) {
        shelfCount = 0;
    }
    var shelfName = "shelf_" + (Math.floor(shelfCount / 5) + 1);
    shelfCount++;
    return {
        id: "medicine_" + (index + 1),
        name: medicineName,
        rack: rackName,
        shelf: shelfName,
        capacity: 100,
        availableQuantity: 100
    };
});
rackGenerator();
showMedicineList();
/**
 *
 * @param searchWord to find the medicine detail object.
 * @returns Matched medicine detail of the searchword.
 */
function findMedicineDetail(searchWord) {
    var searchedMedicineDetails = medicines.filter(function (medicineName) {
        return medicineName.name.toLowerCase() === searchWord.toLowerCase();
    });
    if (searchedMedicineDetails[0]) {
        return searchedMedicineDetails[0];
    }
    else {
        alert("This medicine is not available");
        clearDetails();
    }
}
/**
 *
 * To highlight the rack and container which is mathched with searchMedicine.
 */
function highlightRack() {
    if (activeRack) {
        container && container.classList.remove("containerStyle");
        listSelection.classList.remove("contStyle");
        billForm.style.display = "none";
    }
    searchWord = searchMedicineInput.value;
    if (searchWord === "") {
        alert("Medicine name can't be empty");
        clearDetails();
    }
    else {
        activeRack = searchWord;
        containerDetails = findMedicineDetail(searchWord);
        if (containerDetails) {
            var rackId = containerDetails.rack;
            var medicineId = containerDetails.id;
            var shelfId = containerDetails.shelf;
            for (var i = 0; i < rackDetails.length; i++) {
                if (rackId === rackDetails[i]) {
                    container = document.getElementById(medicineId);
                    container && container.classList.add("containerStyle");
                    listSelection = document.querySelector("." + medicineId);
                    listSelection.classList.add("contStyle");
                    pathDetail.innerHTML = "Medicine Path : " + rackId + " - " + shelfId + " - " + medicineId;
                    pathDetail.style.display = "flex";
                    currentRack = i;
                    root.style.setProperty("--currentRack", currentRack.toString());
                }
            }
            billingForm();
        }
    }
}
/**
 * To clear previously searched medicine details.
 */
function clearDetails() {
    searchMedicineInput.value = '';
    container && container.classList.remove("containerStyle");
    listSelection && listSelection.classList.remove("contStyle");
    searchWord = "";
    pathDetail.style.display = "none";
    billForm.style.display = "none";
    errorValue.style.display = "none";
    currentRack = 0;
    root.style.setProperty("--currentRack", currentRack.toString());
}
/**
 * Enable billing form and show the medicine details.
 */
function billingForm() {
    billForm.style.display = "block";
    medicineName.innerHTML = containerDetails.name;
    medicineCapacity.innerHTML = containerDetails.capacity + '';
    medicineQuantity.innerHTML = containerDetails.availableQuantity + '';
    errorValue.style.display = "none";
}
/**
 * Calculate and show current availability of Medicines.
 */
function salesMedicine() {
    var valueCheck = salesMedicineQuantity.value;
    if (valueCheck) {
        salesQuantity = parseInt(salesMedicineQuantity.value);
        if (salesQuantity > containerDetails.availableQuantity) {
            errorValue.style.display = "block";
            errorValue.innerHTML = "Error: Only " + containerDetails.availableQuantity + " medicines are available.";
        }
        else if (salesQuantity <= 0) {
            errorValue.style.display = "block";
            errorValue.innerHTML = "Error: Enter valid number";
        }
        else {
            errorValue.style.display = "none";
            containerDetails.availableQuantity = containerDetails.availableQuantity - salesQuantity;
            medicineQuantity.innerHTML = containerDetails.availableQuantity + '';
            document.querySelector("." + containerDetails.id).lastChild.textContent = containerDetails.availableQuantity + '';
            document.getElementById(containerDetails.id).firstChild.firstChild.lastChild.textContent = containerDetails.availableQuantity + '';
            var validateQuantity = (30 * containerDetails.capacity) / 100;
            if (containerDetails.availableQuantity < validateQuantity) {
                blinkAlert(containerDetails.id);
            }
        }
    }
    else {
        errorValue.style.display = "block";
        errorValue.innerHTML = "Error: You must enter the number";
    }
    salesMedicineQuantity.value = '';
}
/**
 *
 * @param containerId to find minimum quantity container.
 * Blink the container which is in below 30% of its capacity.
 */
function blinkAlert(containerId) {
    blinkContainer = document.getElementById(containerId);
    blinkContainer.classList.add("blinkContainer");
    blinkList = document.querySelector("." + containerId);
    blinkList.classList.add("minimumQuantity");
}
/**
 * To show all medicine name and its available quantity.
 */
function showMedicineList() {
    var headerHtml = "<div class='listHeader boldText'><div class='listStyle flex'>Medicine Name</div><div class='listStyle flex'>Available Quantity<span class='material-icons-outlined iconpad' onclick='sortMedicineListAscending()' title='Ascending Order'>arrow_upward</span><span class='material-icons-outlined iconpad' onclick='sortMedicineListDescending()' title='Descending Order'>arrow_downward</span></div></div>";
    var contentHtml = "<div class='medicineList'>";
    for (var i = 0; i < medicines.length; i++) {
        var medicineName = medicines[i].name;
        var availQuantity = medicines[i].availableQuantity.toString();
        medicineId = "medicine_" + (i + 1);
        contentHtml += "<div class=" + medicineId + " onclick='selectMedicine(this.className)'><div class='listStyle flex'>" + medicineName + "</div><div class='listStyle flex'>" + availQuantity + "</div></div>";
    }
    contentHtml += "</div>";
    listContainer.innerHTML = headerHtml + contentHtml;
}
/**
 * Sort medicine details by available quantity (Ascending).
 */
function sortMedicineListAscending() {
    medicines.sort(function (a, b) {
        return a.availableQuantity - b.availableQuantity;
    });
    showMedicineList();
}
/**
 * Sort medicine details by available quantity (Descending).
 */
function sortMedicineListDescending() {
    medicines.sort(function (a, b) {
        return b.availableQuantity - a.availableQuantity;
    });
    showMedicineList();
}
/**
 * To navigate previous racks.
 */
function showPreviousRack() {
    if (currentRack) {
        if (currentRack === 0) {
            alert("There is no previous rack.");
        }
        else {
            currentRack = currentRack - 1;
            root.style.setProperty("--currentRack", currentRack.toString());
        }
    }
    else {
        alert("There is no previous rack.");
        currentRack = 0;
    }
}
/**
 * To navigate next racks.
 */
function showNextRack() {
    if (currentRack) {
        if (currentRack === rackDetails.length - 1) {
            alert("There is no next rack.");
        }
        else {
            currentRack = currentRack + 1;
            root.style.setProperty("--currentRack", currentRack.toString());
        }
    }
    else {
        currentRack = 1;
        root.style.setProperty("--currentRack", currentRack.toString());
    }
}
/**
 *
 * @param medicineId to get the text value from list.
 * select the medicine by clicking the list.
 */
function selectMedicine(medicineClass) {
    var classArray = medicineClass.split(" ");
    var medicineId = classArray[0];
    var medicineName = document.querySelector("." + medicineId).firstChild.textContent;
    searchMedicineInput.value = medicineName;
    if (activeRack) {
        listSelection.classList.remove("contStyle");
    }
    highlightRack();
    listSelection = document.querySelector("." + medicineId);
    listSelection.classList.add("contStyle");
}
/**
 * To generate the rack dynamically.
 */
function rackGenerator() {
    var container = document.querySelector(".container");
    console.log(medicines[0]);
    var index = 0;
    var zIndex = 10;
    for (var k = 0; k < rackDetails.length; k++) {
        var rackName = rackDetails[k];
        var scene = document.createElement("div");
        scene.classList.add("scene");
        scene.style.zIndex = zIndex + '';
        var cube = document.createElement("div");
        cube.id = rackName;
        cube.classList.add("cube");
        cube.title = rackName;
        var front = document.createElement("div");
        for (var j = 1; j <= 4; j++) {
            var shelf = document.createElement("div");
            shelf.classList.add("shelf");
            for (var i = 1; i <= 5; i++) {
                var medbox = document.createElement("div");
                medbox.classList.add("medBox");
                medbox.id = medicines[index].id;
                var smallCube = document.createElement("div");
                smallCube.classList.add("cube");
                var smallfront = document.createElement("div");
                var medName = document.createElement("p");
                medName.classList.add("sticker");
                var medQuantity = document.createElement("p");
                medQuantity.classList.add("displayQuantity");
                var medText = document.createTextNode(medicines[index].name);
                var quantityText = document.createTextNode(medicines[index].availableQuantity + '');
                medName.appendChild(medText);
                medQuantity.appendChild(quantityText);
                smallfront.appendChild(medName);
                smallfront.appendChild(medQuantity);
                var smallback = document.createElement("div");
                var smallleft = document.createElement("div");
                var smallright = document.createElement("div");
                var smalltop = document.createElement("div");
                var smallbottom = document.createElement("div");
                smallfront.classList.add("face", "contBackground", "contFrontBack", "contFront", "flex");
                smallback.classList.add("face", "contBackground", "contFrontBack", "contBack");
                smallleft.classList.add("face", "contBackground", "contLeftRight", "contLeft");
                smallright.classList.add("face", "contBackground", "contLeftRight", "contRight");
                smalltop.classList.add("face", "contBackground", "contTopBottom", "contTop");
                smallbottom.classList.add("face", "contBackground", "contTopBottom", "contBottom");
                smallCube.appendChild(smallfront);
                smallCube.appendChild(smallback);
                smallCube.appendChild(smallleft);
                smallCube.appendChild(smallright);
                smallCube.appendChild(smalltop);
                smallCube.appendChild(smallbottom);
                medbox.appendChild(smallCube);
                shelf.appendChild(medbox);
                index++;
            }
            front.appendChild(shelf);
        }
        var back = document.createElement("div");
        var left = document.createElement("div");
        var right = document.createElement("div");
        var top_1 = document.createElement("div");
        var bottom = document.createElement("div");
        front.classList.add("face", "rackBackground", "frontBack", "front");
        back.classList.add("face", "rackBackground", "frontBack", "back");
        left.classList.add("face", "rackBackground", "leftRight", "left");
        right.classList.add("face", "rackBackground", "leftRight", "right");
        top_1.classList.add("face", "rackBackground", "topBottom", "top");
        bottom.classList.add("face", "rackBackground", "topBottom", "bottom");
        cube.appendChild(front);
        cube.appendChild(back);
        cube.appendChild(left);
        cube.appendChild(right);
        cube.appendChild(top_1);
        cube.appendChild(bottom);
        scene.appendChild(cube);
        container.appendChild(scene);
        zIndex--;
    }
}
