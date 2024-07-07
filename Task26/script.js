let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

let filteredCountries = countries.filter(country => {
  return country.startsWith('A') && country.endsWith('a');
});

console.log(filteredCountries); 
