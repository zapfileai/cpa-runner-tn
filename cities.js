const tennesseeCities = [
  "Adams", "Adamsville", "Afton", "Alamo", "Alcoa",
  "Alexandria", "Antioch", "Apison", "Ardmore", "Arlington",
  "Arrington", "Ashland City", "Athens", "Atoka", "Bath Springs",
  "Baxter", "Beechgrove", "Bell Buckle", "Bells", "Belvidere",
  "Benton", "Bethel Springs", "Big Sandy", "Birchwood", "Blaine",
  "Bloomington Springs", "Blountville", "Bluff City", "Bolivar", "Bon Aqua",
  "Braden", "Bradford", "Brentwood", "Brighton", "Bristol",
  "Brownsville", "Brush Creek", "Buchanan", "Buffalo Valley", "Burlison",
  "Burns", "Butler", "Calhoun", "Camden", "Carthage",
  "Cedar Grove", "Cedar Hill", "Celina", "Centerville", "Chapel Hill",
  "Chapmansboro", "Charleston", "Charlotte", "Chattanooga", "Christiana",
  "Chuckey", "Church Hill", "Clarksville", "Cleveland", "Clinton",
  "College Grove", "Collegedale", "Collierville", "Columbia", "Cookeville",
  "Copperhill", "Cordova", "Corryton", "Cosby", "Cottage Grove",
  "Cottontown", "Covington", "Cross Plains", "Crossville", "Culleoka",
  "Cumberland City", "Cumberland Furnace", "Cunningham", "Dandridge", "Dayton",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < tennesseeCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(tennesseeCities[i]);
}

module.exports = { batches };
