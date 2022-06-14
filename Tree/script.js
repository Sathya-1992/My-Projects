var continents = {
    "Asia": {
        name: "Asia"
    },
    "Africa": {
        name: "Africa"
    },
    "NorthAmerica": {
        name: "NorthAmerica"
    }
};
var countries = {
    "India": {
        name: "India",
        continentName: "Asia"
    },
    "Japan": {
        name: "Japan",
        continentName: "Asia"
    },
    "Nigiria": {
        name: "Nigiria",
        continentName: "Africa"
    },
    "SouthAfrica": {
        name: "SouthAfrica",
        continentName: "Africa"
    },
    "USA": {
        name: "USA",
        continentName: "NorthAmerica"
    },
    "Canada": {
        name: "Canada",
        continentName: "NorthAmerica"
    }
};
var states = {
    "Tamilnadu": {
        name: "Tamilnadu",
        countryName: "India"
    },
    "Kerala": {
        name: "kerala",
        countryName: "India"
    },
    "Shikoku": {
        name: "Shikoku",
        countryName: "Japan"
    },
    "Kanto": {
        name: "Kanto",
        countryName: "Japan"
    },
    "Kwara": {
        name: "Kwara",
        countryName: "Nigiria"
    },
    "Taraba": {
        name: "Taraba",
        countryName: "Nigiria"
    },
    "EasternCape": {
        name: "EasternCape",
        countryName: "SouthAfrica"
    },
    "NorthernCape": {
        name: "NorthernCape",
        countryName: "SouthAfrica"
    },
    "NewYork": {
        name: "NewYork",
        countryName: "USA"
    },
    "Texas": {
        name: "Texas",
        countryName: "USA"
    },
    "Alberta": {
        name: "Alberta",
        countryName: "Canada"
    },
    "Manitoba": {
        name: "Manitoba",
        countryName: "Canada"
    }
};
var districts = {
    "Tirunelveli": {
        name: "Tirunelveli",
        stateName: "Tamilnadu"
    },
    "Tenkasi": {
        name: "Tenkasi",
        stateName: "Tamilnadu"
    },
    "Kollam": {
        name: "Kollam",
        stateName: "kerala"
    },
    "Kottayam": {
        name: "Kottayam",
        stateName: "kerala"
    }
};
/**
 * To generate Tree structure in json.
 */
var treeModel = [];
Object.keys(continents).forEach(function (continentName) {
    treeModel.push({
        name: continents[continentName].name,
        children: findCountries(continentName)
    });
});
/**
 *
 * @param continentName to get countries of given continent.
 * @returns countries of matched continent.
 */
function findCountries(continentName) {
    var countryList = [];
    Object.keys(countries).forEach(function (countryName) {
        var country = countries[countryName];
        if (country.continentName === continentName) {
            var statesArray = findStates(country.name);
            if (statesArray.length === 0) {
                countryList.push({
                    name: country.Name
                });
            }
            else {
                countryList.push({
                    name: country.name,
                    children: statesArray
                });
            }
        }
    });
    return countryList;
}
/**
 *
 * @param countryName to get states of given country.
 * @returns states of matched country.
 */
function findStates(countryName) {
    var stateList = [];
    Object.keys(states).forEach(function (stateName) {
        var state = states[stateName];
        if (state.countryName === countryName) {
            var districtsArray = findDistricts(state.name);
            if (districtsArray.length === 0) {
                stateList.push({
                    name: state.name
                });
            }
            else {
                stateList.push({
                    name: state.name,
                    children: districtsArray
                });
            }
        }
    });
    return stateList;
}
/**
 *
 * @param statename to get districts of given states.
 * @returns districts of matched states.
 */
function findDistricts(statename) {
    var distictList = [];
    Object.keys(districts).forEach(function (districtName) {
        var district = districts[districtName];
        if (district.stateName === statename) {
            distictList.push({
                name: district.name
            });
        }
    });
    return distictList;
}
console.log(treeModel);
/**
 * Tree View
 */
var continentElement = document.getElementById("Continents");
var container = document.querySelector(".container");
container.addEventListener("click", displayTree);
/**
 *
 * @param tree to append all the children with parent
 * @param parent which is element to append the child
 */
function displayValue(tree, parent) {
    parent.classList.toggle("disable");
    tree.forEach(function (data) {
        var divElement = document.createElement("div");
        var nameList = document.createTextNode(data.name);
        var nameSpanElement = document.createElement("div");
        divElement.classList.add("margin");
        nameSpanElement.appendChild(nameList);
        parent.appendChild(nameSpanElement);
        divElement.id = data.name;
        parent.appendChild(divElement);
        if (data.hasOwnProperty("children")) {
            nameSpanElement.classList.add("symbol");
            displayValue(data.children, divElement);
        }
        else {
            nameSpanElement.classList.add("select");
        }
    });
}
displayValue(treeModel, continentElement);
/**
 *
 * @param event to toggle class for show or hide the sub tree
 * @returns the element to change the icon
 */
function displayTree(event) {
    return new Promise(function (resolve, reject) {
        var element = event.target;
        var value = element.textContent;
        if (value) {
            document.getElementById(value).classList.toggle("disable");
            resolve(element);
        }
        else {
            reject(element);
        }
    }).then(changeIcon);
}
/**
 *
 * @param element to change the icon when click the text in tree
 */
function changeIcon(element) {
    if (element.className === "symbol") {
        element.className = "explored";
    }
    else if (element.className === "explored") {
        element.className = "symbol";
    }
}
