
var medicinesNameList = [
  "Stavudine","Sucralfate","Sugammadex","Abacavir","Acyclovir","Alemtuzumab","Alendronate","Allopurinol","Amifostine","Amikacin",
  "Aminocaproic Acid","Amitriptyline","Amlodipine","Amoxicillin","Paracetamol","Amphotericin","Ampicillin","Baclofen","Bleomycin","Bortezomib",
  "Bosentan","Busulfan","Calcium","Captopril","Carbamazepine","Carboplatin","Carmustine","Cefaclor","Cefepime","Cefixime",
  "Ceftazidime","Cefuroxime","Celecoxib","Cephalexin","Cidofovir","Cisplatin","Cladribine","Clarithromycin","Clindamycin","Clobazam",
  "Clofarabine","Codeine","Crizanlizumab","Crizotinib","Cyclobenzaprine","Cyclophosphamide","Cyclosporine","Cyproheptadine","Cytarabine","Dacarbazine",
  "Dactinomycin","Dapsone","Diclofenac","Didanosine","Dinutuximab","Dobutamine","Dopamine","Dornase alfa","Doxorubicin","Dronabinol",
  "Enalapril","Enoxaparin","Erlotinib","Erythromycin","Erythropoietin","Etonogestrel","Etoposide","Etravirine","Famciclovir","Famotidine",
  "Fidaxomicin","Fluconazole","Fludarabine","Fluorouracil","Foscarnet","Furosemide","Gabapentin","Ganciclovir","Gefitinib","Gemcitabine",
  "Granisetron","Hydrocortisone","Hydromorphone","Hydroxyurea","Irinotecan","Isotretinoin","Itraconazole","Ketoconazole","Levothyroxine","Linezolid",
  "Lomustine","Lorazepam","Lorlatinib","Melphalan","Meperidine","Mercaptopurine","Meropenem","Mesna","Methadone","Methotrexate"
]
/**
 * 
 * To generate medicine storage details.
 */
var shelfCount = 0;
var rackDetails = new Array();
var medicines = medicinesNameList.map(function(medicineName, index){
    var rackName = "rack_"+ (Math.floor(index/20) + 1);
if(rackDetails.indexOf(rackName)===-1){
    rackDetails.push(rackName);
}
if(index%20==0){
    shelfCount=0;}
    var shelfName = "shelf_"+(Math.floor(shelfCount/5) + 1);
shelfCount++;
    return {
        id : "medicine_"+(index+1),
        name : medicineName,
        rack : rackName,
        shelf : shelfName,
        capacity : 100
    }
})

/**
 * 
 * @param searchWord to find the medicine detail object.
 * @returns Matched medicine detail of the searchword.
 */

function findMedicineDetail(searchWord:string){
  var searchedMedicineDetails =medicines.filter(function(medicineName){
    return medicineName.name.toLowerCase()===searchWord.toLowerCase();
  });
  if(searchedMedicineDetails[0]){
    return searchedMedicineDetails[0];
  }else{
    alert("This medicine is not available");
  }
}
/**
 * 
 * To highlight the rack and container which is mathched with searchMedicine.
 */
function hightlightRack(){
  var searchWord = (document.getElementById("searchMedicine") as HTMLInputElement).value;
  if(searchWord===""){
    alert("Medicine name can't be empty");
  }
  else{
    var containerDetails = findMedicineDetail(searchWord);
    var rackId = containerDetails.rack;
    var medicineId = containerDetails.id;
    var shelfId = containerDetails.shelf;
    for(var i=0;i<rackDetails.length;i++){
      if(rackId===rackDetails[i]){
        document.getElementById(rackDetails[i]).style.display = "grid";
        var container = document.getElementById(medicineId);
        container.classList.add("containerStyle");
        document.getElementById("path").innerHTML = "Medicine Path : "+rackId+" - "+shelfId+" - "+medicineId;
      }
      else{
        document.getElementById(rackDetails[i]).style.display = "none";
      }
    }
  }
}
function resetRack(){
  location.reload();
}
