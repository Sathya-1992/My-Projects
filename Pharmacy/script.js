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
var billingButton;
var errorValue;
var pathDetail;
var medicineName;
var medicineCapacity;
var medicineQuantity;
var blinkContainer;
var listContainer;
/**
 * Initial function.
 */
(function () {
    searchMedicineInput = document.getElementById("searchMedicine");
    salesMedicineQuantity = document.getElementById("salesQuantity");
    billForm = document.getElementById("billform");
    billingButton = document.getElementById("billButton");
    errorValue = document.getElementById("error");
    pathDetail = document.getElementById("path");
    medicineName = document.getElementById("medName");
    medicineCapacity = document.getElementById("medCapacity");
    medicineQuantity = document.getElementById("medQuantity");
    listContainer = document.getElementById("listContainer");
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
        billForm.style.display = "none";
        for (var i = 0; i < rackDetails.length; i++) {
            document.getElementById(rackDetails[i]).classList.remove("otherRack");
            for (var j = 0; j < rackDetails.length; j++) {
                document.getElementById(rackDetails[i]).classList.remove("rackMove" + j);
            }
        }
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
            var j = 2;
            for (var i = 0; i < rackDetails.length; i++) {
                var rackClass = "rack" + i;
                if (rackId === rackDetails[i]) {
                    container = document.getElementById(medicineId);
                    container && container.classList.add("containerStyle");
                    pathDetail.innerHTML = "Medicine Path : " + rackId + " - " + shelfId + " - " + medicineId;
                    billingButton.style.display = "flex";
                    pathDetail.style.display = "flex";
                    document.getElementById(rackDetails[i]).classList.add("rackMove1", "rackMoveTime");
                    var selected = true;
                }
                else {
                    if (selected) {
                        document.getElementById(rackDetails[i]).classList.add("rackMove" + j, "rackMoveTime");
                        console.log("value:" + j);
                        j++;
                    }
                    else {
                        document.getElementById(rackDetails[i]).classList.add("otherRack");
                    }
                }
            }
        }
    }
}
/**
 * To clear previously searched medicine details.
 */
function clearDetails() {
    searchMedicineInput.value = '';
    container && container.classList.remove("containerStyle");
    pathDetail.style.display = "none";
    billingButton.style.display = "none";
    billForm.style.display = "none";
    errorValue.style.display = "none";
    listContainer.style.display = "none";
    for (var i = 0; i < rackDetails.length; i++) {
        document.getElementById(rackDetails[i]).classList.remove("otherRack");
        for (var j = 0; j < rackDetails.length; j++) {
            document.getElementById(rackDetails[i]).classList.remove("rackMove" + j);
        }
    }
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
        var validateQuantity = (30 * containerDetails.capacity) / 100;
        if (containerDetails.availableQuantity < validateQuantity) {
            blinkAlert(containerDetails.id);
        }
        showMedicineList();
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
}
/**
 * To show all medicine name and its available quantity.
 */
function showMedicineList() {
    listContainer.style.display = "grid";
    var headerHtml = "<div class='listHeader boldText'><div class='listStyle flex'>Medicine Name</div><div class='listStyle flex'>Available Quantity<span class='material-icons-outlined iconpad' onclick='sortMedicineListAscending()' title='Ascending Order'>arrow_upward</span><span class='material-icons-outlined iconpad' onclick='sortMedicineListDescending()' title='Descending Order'>arrow_downward</span></div></div>";
    var contentHtml = "<div class='medicineList'>";
    for (var i = 0; i < medicines.length; i++) {
        var medicineName = medicines[i].name;
        var availQuantity = medicines[i].availableQuantity.toString();
        var validateQuantity = (30 * medicines[i].capacity) / 100;
        var minimumQuantityClass = "";
        if (medicines[i].availableQuantity < validateQuantity) {
            minimumQuantityClass = "minimumQuantity";
        }
        contentHtml += "<div class='listHeader'><div class='listStyle flex " + minimumQuantityClass + "'>" + medicineName + "</div><div class='listStyle flex " + minimumQuantityClass + "'>" + availQuantity + "</div></div>";
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
