const tennesseeCities = [
  "Decatur", "Decaturville", "Decherd", "Del Rio", "Dickson",
  "Dover", "Dresden", "Duck River", "Dunlap", "Dyer",
  "Dyersburg", "Eads", "Eagleville", "Elizabethton", "Ellendale",
  "Englewood", "Erin", "Erwin", "Estill Springs", "Ethridge",
  "Evensville", "Fairview", "Fall Branch", "Fayetteville", "Finger",
  "Franklin", "Friendsville", "Gainesboro", "Gallatin", "Gatlinburg",
  "Georgetown", "Germantown", "Gladeville", "Gleason", "Goodlettsville",
  "Gordonsville", "Graysville", "Greenback", "Greenbrier", "Greeneville",
  "Greenfield", "Halls", "Harriman", "Harrison", "Harrogate",
  "Hartsville", "Helenwood", "Henderson", "Hendersonville", "Henning",
  "Hermitage", "Hilham", "Hixson", "Hohenwald", "Humboldt",
  "Huntingdon", "Huntland", "Jacks Creek", "Jacksboro", "Jackson",
  "Jamestown", "Jasper", "Jefferson City", "Jellico", "Joelton",
  "Johnson City", "Jonesborough", "Kenton", "Kingsport", "Kingston",
  "Kingston Springs", "Knoxville", "Kodak", "La Follette", "La Vergne",
  "Lafayette", "Lake City", "Lancaster", "Lancing", "Lascassas",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < tennesseeCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(tennesseeCities[i]);
}

module.exports = { batches };
