const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

// Declare an empty array;
let arr = []

//Declare an array with more than 5 number of elements
let newArr = [1,2,3,4,5]

//Find the length of your array
console.log(newArr.length)

//Get the first item, the middle item and the last item of the array
let firstItem = arr[0]
let secondItem = arr[2]
let lastItem = arr[4]

// Declare an array called mixedDataTypes,
//put different data types in the array and find the length of the array.
// The array size should be greater than 5
let mixedDataTypes = [1,3,'D','d','e', '73' ]
console.log(mixedDataTypes.length)

//Declare an array variable name itCompanies and assign initial values
//Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Print the array using console.log()
console.log(itCompanies)

//Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(Math.trunc(itCompanies.length/2));
console.log(itCompanies.length-1)

//Print out each company
itCompanies.forEach((company)=>console.log(company))


//Change each company name to uppercase one by one and print them out
const UpperCompagnies = itCompanies.map((company)=> { return company.charAt(0).toUpperCase() + company.slice(1)})
console.log(UpperCompagnies);

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple,
// IBM,Oracle and Amazon are big IT companies.
let sentence = UpperCompagnies.reduce((companies, currentcompany, index) => {
    if(index === UpperCompagnies.length -1) {
        return companies + 'and ' + currentcompany
    }
    return companies + currentcompany + ' '
},'')

console.log(sentence + ' are big IT companies.')

//Check if a certain company exists in the itCompanies array.
// If it exist return the company else return a company is not found
function getCompany(company) {
    if(UpperCompagnies.includes(company)) return company
else return "a company is not found"
}

console.log(getCompany('Facebook'))

//Filter out companies which have more than one 'o' without the filter method
let reducedCompagny = UpperCompagnies.reduce((companies, currentCompany) => {

    // if more than 2, more than 2 o was found
    if(currentCompany.split('o').length > 2) {
        if(!companies) companies = []
        companies[companies.length] = currentCompany
    }

    return companies
},[])
console.log('reduced =>')
console.dir(reducedCompagny)


// Sort the array using sort() method
let sortedUpperCompagnies = UpperCompagnies.sort((a,b)=>a.localeCompare(b))
console.log('sorted =>')
console.log(sortedUpperCompagnies)
// Reverse the array using reverse() method
let reversedUpperCompagnies = UpperCompagnies.reverse()
console.log(reversedUpperCompagnies)

// Slice out the first 3 companies from the array
let slicedFirstCompagnies = UpperCompagnies.slice(0,3)

// Slice out the last 3 companies from the array
let slicedLastCompagnies = UpperCompagnies.slice(-3)

// Slice out the middle IT company or companies from the array
let middle = UpperCompagnies.length / 2;
let slicedMiddleCompagnies;
if(Math.trunc(middle) === middle) {
    slicedFirstCompagnies = UpperCompagnies.slice(middle-1, middle);
} else {
    slicedFirstCompagnies = UpperCompagnies.slice(middle,1);
}


// Remove the middle IT company or companies from the array
let removeMiddle;
if(Math.trunc(middle) === middle) {
    removeMiddle = UpperCompagnies.splice(middle-1, middle);
} else {
    removeMiddle = UpperCompagnies.splice(middle,1);
}
console.log('removeMiddle => ')
console.dir(UpperCompagnies)

// Remove the first IT company from the array
let removeFirst = UpperCompagnies.splice(0,1)


//Remove the last IT company from the array
let removeLast = UpperCompagnies.splice(-1)


//Remove all IT companies
UpperCompagnies.length = 0
console.log(UpperCompagnies)
