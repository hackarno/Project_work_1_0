import "./styles.css";
import { Chart } from "frappe-charts";

const jsonQueryTyovoima = {
  query: [
    {
      code: "Alue",
      selection: {
        filter: "agg:_Kunnat tunnusjärjestyksessä tunnuksineen 2022.agg",
        values: [
          "KU005",
          "KU009",
          "KU010",
          "KU016",
          "KU018",
          "KU019",
          "KU020",
          "KU035",
          "KU043",
          "KU046",
          "KU047",
          "KU049",
          "KU050",
          "KU051",
          "KU052",
          "KU060",
          "KU061",
          "KU062",
          "KU065",
          "KU069",
          "KU071",
          "KU072",
          "KU074",
          "KU075",
          "KU076",
          "KU077",
          "KU078",
          "KU079",
          "KU081",
          "KU082",
          "KU086",
          "KU090",
          "KU091",
          "KU092",
          "KU097",
          "KU098",
          "KU102",
          "KU103",
          "KU105",
          "KU106",
          "KU108",
          "KU109",
          "KU111",
          "KU139",
          "KU140",
          "KU142",
          "KU143",
          "KU145",
          "KU146",
          "KU148",
          "KU149",
          "KU151",
          "KU152",
          "KU153",
          "KU165",
          "KU167",
          "KU169",
          "KU170",
          "KU171",
          "KU172",
          "KU176",
          "KU177",
          "KU178",
          "KU179",
          "KU181",
          "KU182",
          "KU186",
          "KU202",
          "KU204",
          "KU205",
          "KU208",
          "KU211",
          "KU213",
          "KU214",
          "KU216",
          "KU217",
          "KU218",
          "KU224",
          "KU226",
          "KU230",
          "KU231",
          "KU232",
          "KU233",
          "KU235",
          "KU236",
          "KU239",
          "KU240",
          "KU241",
          "KU244",
          "KU245",
          "KU249",
          "KU250",
          "KU256",
          "KU257",
          "KU260",
          "KU261",
          "KU263",
          "KU265",
          "KU271",
          "KU272",
          "KU273",
          "KU275",
          "KU276",
          "KU280",
          "KU284",
          "KU285",
          "KU286",
          "KU287",
          "KU288",
          "KU290",
          "KU291",
          "KU295",
          "KU297",
          "KU300",
          "KU301",
          "KU304",
          "KU305",
          "KU309",
          "KU312",
          "KU316",
          "KU317",
          "KU318",
          "KU320",
          "KU322",
          "KU398",
          "KU399",
          "KU400",
          "KU402",
          "KU403",
          "KU405",
          "KU407",
          "KU408",
          "KU410",
          "KU416",
          "KU417",
          "KU418",
          "KU420",
          "KU421",
          "KU422",
          "KU423",
          "KU425",
          "KU426",
          "KU430",
          "KU433",
          "KU434",
          "KU435",
          "KU436",
          "KU438",
          "KU440",
          "KU441",
          "KU444",
          "KU445",
          "KU475",
          "KU478",
          "KU480",
          "KU481",
          "KU483",
          "KU484",
          "KU489",
          "KU491",
          "KU494",
          "KU495",
          "KU498",
          "KU499",
          "KU500",
          "KU503",
          "KU504",
          "KU505",
          "KU507",
          "KU508",
          "KU529",
          "KU531",
          "KU535",
          "KU536",
          "KU538",
          "KU541",
          "KU543",
          "KU545",
          "KU560",
          "KU561",
          "KU562",
          "KU563",
          "KU564",
          "KU576",
          "KU577",
          "KU578",
          "KU580",
          "KU581",
          "KU583",
          "KU584",
          "KU588",
          "KU592",
          "KU593",
          "KU595",
          "KU598",
          "KU599",
          "KU601",
          "KU604",
          "KU607",
          "KU608",
          "KU609",
          "KU611",
          "KU614",
          "KU615",
          "KU616",
          "KU619",
          "KU620",
          "KU623",
          "KU624",
          "KU625",
          "KU626",
          "KU630",
          "KU631",
          "KU635",
          "KU636",
          "KU638",
          "KU678",
          "KU680",
          "KU681",
          "KU683",
          "KU684",
          "KU686",
          "KU687",
          "KU689",
          "KU691",
          "KU694",
          "KU697",
          "KU698",
          "KU700",
          "KU702",
          "KU704",
          "KU707",
          "KU710",
          "KU729",
          "KU732",
          "KU734",
          "KU736",
          "KU738",
          "KU739",
          "KU740",
          "KU742",
          "KU743",
          "KU746",
          "KU747",
          "KU748",
          "KU749",
          "KU751",
          "KU753",
          "KU755",
          "KU758",
          "KU759",
          "KU761",
          "KU762",
          "KU765",
          "KU766",
          "KU768",
          "KU771",
          "KU777",
          "KU778",
          "KU781",
          "KU783",
          "KU785",
          "KU790",
          "KU791",
          "KU831",
          "KU832",
          "KU833",
          "KU834",
          "KU837",
          "KU844",
          "KU845",
          "KU846",
          "KU848",
          "KU849",
          "KU850",
          "KU851",
          "KU853",
          "KU854",
          "KU857",
          "KU858",
          "KU859",
          "KU886",
          "KU887",
          "KU889",
          "KU890",
          "KU892",
          "KU893",
          "KU895",
          "KU905",
          "KU908",
          "KU915",
          "KU918",
          "KU921",
          "KU922",
          "KU924",
          "KU925",
          "KU927",
          "KU931",
          "KU934",
          "KU935",
          "KU936",
          "KU941",
          "KU946",
          "KU976",
          "KU977",
          "KU980",
          "KU981",
          "KU989",
          "KU992"
        ]
      }
    },
    {
      code: "Pääasiallinen toiminta",
      selection: {
        filter: "item",
        values: ["11+12"]
      }
    },
    {
      code: "Sukupuoli",
      selection: {
        filter: "item",
        values: ["SSS"]
      }
    },
    {
      code: "Ikä",
      selection: {
        filter: "item",
        values: ["SSS"]
      }
    },
    {
      code: "Vuosi",
      selection: {
        filter: "item",
        values: ["1989", "1999", "2009", "2019"]
      }
    }
  ],
  response: {
    format: "json-stat2"
  }
};

const jsonQueryMokit = {
  query: [
    {
      code: "Rakennusvuosi",
      selection: {
        filter: "item",
        values: ["1980 - 1989", "1990 - 1999", "2000 - 2009", "2010 - 2019"]
      }
    },
    {
      code: "Alue",
      selection: {
        filter: "agg:_Kunnat tunnusjärjestyksessä tunnuksineen 2023.agg",
        values: [
          "KU005",
          "KU009",
          "KU010",
          "KU016",
          "KU018",
          "KU019",
          "KU020",
          "KU035",
          "KU043",
          "KU046",
          "KU047",
          "KU049",
          "KU050",
          "KU051",
          "KU052",
          "KU060",
          "KU061",
          "KU062",
          "KU065",
          "KU069",
          "KU071",
          "KU072",
          "KU074",
          "KU075",
          "KU076",
          "KU077",
          "KU078",
          "KU079",
          "KU081",
          "KU082",
          "KU086",
          "KU090",
          "KU091",
          "KU092",
          "KU097",
          "KU098",
          "KU102",
          "KU103",
          "KU105",
          "KU106",
          "KU108",
          "KU109",
          "KU111",
          "KU139",
          "KU140",
          "KU142",
          "KU143",
          "KU145",
          "KU146",
          "KU148",
          "KU149",
          "KU151",
          "KU152",
          "KU153",
          "KU165",
          "KU167",
          "KU169",
          "KU170",
          "KU171",
          "KU172",
          "KU176",
          "KU177",
          "KU178",
          "KU179",
          "KU181",
          "KU182",
          "KU186",
          "KU202",
          "KU204",
          "KU205",
          "KU208",
          "KU211",
          "KU213",
          "KU214",
          "KU216",
          "KU217",
          "KU218",
          "KU224",
          "KU226",
          "KU230",
          "KU231",
          "KU232",
          "KU233",
          "KU235",
          "KU236",
          "KU239",
          "KU240",
          "KU241",
          "KU244",
          "KU245",
          "KU249",
          "KU250",
          "KU256",
          "KU257",
          "KU260",
          "KU261",
          "KU263",
          "KU265",
          "KU271",
          "KU272",
          "KU273",
          "KU275",
          "KU276",
          "KU280",
          "KU284",
          "KU285",
          "KU286",
          "KU287",
          "KU288",
          "KU290",
          "KU291",
          "KU295",
          "KU297",
          "KU300",
          "KU301",
          "KU304",
          "KU305",
          "KU309",
          "KU312",
          "KU316",
          "KU317",
          "KU318",
          "KU320",
          "KU322",
          "KU398",
          "KU399",
          "KU400",
          "KU402",
          "KU403",
          "KU405",
          "KU407",
          "KU408",
          "KU410",
          "KU416",
          "KU417",
          "KU418",
          "KU420",
          "KU421",
          "KU422",
          "KU423",
          "KU425",
          "KU426",
          "KU430",
          "KU433",
          "KU434",
          "KU435",
          "KU436",
          "KU438",
          "KU440",
          "KU441",
          "KU444",
          "KU445",
          "KU475",
          "KU478",
          "KU480",
          "KU481",
          "KU483",
          "KU484",
          "KU489",
          "KU491",
          "KU494",
          "KU495",
          "KU498",
          "KU499",
          "KU500",
          "KU503",
          "KU504",
          "KU505",
          "KU507",
          "KU508",
          "KU529",
          "KU531",
          "KU535",
          "KU536",
          "KU538",
          "KU541",
          "KU543",
          "KU545",
          "KU560",
          "KU561",
          "KU562",
          "KU563",
          "KU564",
          "KU576",
          "KU577",
          "KU578",
          "KU580",
          "KU581",
          "KU583",
          "KU584",
          "KU588",
          "KU592",
          "KU593",
          "KU595",
          "KU598",
          "KU599",
          "KU601",
          "KU604",
          "KU607",
          "KU608",
          "KU609",
          "KU611",
          "KU614",
          "KU615",
          "KU616",
          "KU619",
          "KU620",
          "KU623",
          "KU624",
          "KU625",
          "KU626",
          "KU630",
          "KU631",
          "KU635",
          "KU636",
          "KU638",
          "KU678",
          "KU680",
          "KU681",
          "KU683",
          "KU684",
          "KU686",
          "KU687",
          "KU689",
          "KU691",
          "KU694",
          "KU697",
          "KU698",
          "KU700",
          "KU702",
          "KU704",
          "KU707",
          "KU710",
          "KU729",
          "KU732",
          "KU734",
          "KU736",
          "KU738",
          "KU739",
          "KU740",
          "KU742",
          "KU743",
          "KU746",
          "KU747",
          "KU748",
          "KU749",
          "KU751",
          "KU753",
          "KU755",
          "KU758",
          "KU759",
          "KU761",
          "KU762",
          "KU765",
          "KU766",
          "KU768",
          "KU771",
          "KU777",
          "KU778",
          "KU781",
          "KU783",
          "KU785",
          "KU790",
          "KU791",
          "KU831",
          "KU832",
          "KU833",
          "KU834",
          "KU837",
          "KU844",
          "KU845",
          "KU846",
          "KU848",
          "KU849",
          "KU850",
          "KU851",
          "KU853",
          "KU854",
          "KU857",
          "KU858",
          "KU859",
          "KU886",
          "KU887",
          "KU889",
          "KU890",
          "KU892",
          "KU893",
          "KU895",
          "KU905",
          "KU908",
          "KU915",
          "KU918",
          "KU921",
          "KU922",
          "KU924",
          "KU925",
          "KU927",
          "KU931",
          "KU934",
          "KU935",
          "KU936",
          "KU941",
          "KU946",
          "KU976",
          "KU977",
          "KU980",
          "KU981",
          "KU989",
          "KU992"
        ]
      }
    }
  ],
  response: {
    format: "json-stat2"
  }
};

const getData = async (hakuQuery, url) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(hakuQuery)
  });
  if (!res.ok) {
    return;
  }
  const data = await res.json();

  console.log(data);
  return data;
};

const mapFetch = async () => {
  const url =
    "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326";
  const res = await fetch(url);
  const data = await res.json();
  await initMap(data);

  console.log(data);
};

const initMap = (data) => {
  let map = L.map("map", {
    minZoom: -3
  });

  let geoJson = L.geoJSON(data, {
    onEachFeature: getFeature,
    style: getStyle
  }).addTo(map);

  let geoJson2 = L.geoJSON(data, {
    onEachFeature: getFeature2,
    style: getStyle2
  }).addTo(map);

  let osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
    attribution: "© OpenStreetMap"
  }).addTo(map);

  let overlayMaps = {
    "New summer houses": geoJson,
    Workforce: geoJson2
  };

  let baseMaps = {
    OpenStreeMap: osm
  };

  let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

  map.fitBounds(geoJson.getBounds());
};

const getFeature = (feature, layer) => {
  if (!feature.properties.name) {
    return;
  }
  layer.bindTooltip(feature.properties.name);
  layer.bindPopup(`
    New summer houses in ${feature.properties.name}:<br>
    1980-1989: ${mokkienMaarat[0][masterCount]}<br>
    1990-1999: ${mokkienMaarat[1][masterCount]}<br>
    2000-2009: ${mokkienMaarat[2][masterCount]}<br>
    2010-2019: ${mokkienMaarat[3][masterCount]}`);

  layer.on("click", function (e) {
    buildChart(feature.properties.name);
  });
  masterCount += 1;
  kuntaLista.push(feature.properties.name);
};

const getFeature2 = (feature, layer) => {
  if (!feature.properties.name) {
    return;
  }
  layer.bindTooltip(feature.properties.name);
  layer.bindPopup(`
    Workforce in ${feature.properties.name}:<br>
    1989: ${tyovoimaMaarat[0][masterCount2]}<br>
    1999: ${tyovoimaMaarat[1][masterCount2]}<br>
    2009: ${tyovoimaMaarat[2][masterCount2]}<br>
    2019: ${tyovoimaMaarat[3][masterCount2]}`);

  layer.on("click", function (e) {
    buildChart(feature.properties.name);
  });
  masterCount2 += 1;
};

const getStyle = (feature) => {
  return {
    fillColor: `hsl(${varit(feature.properties.name)} 75% 50%)`,
    fillOpacity: 0.5,
    color: ""
  };
};

const getStyle2 = (feature) => {
  return {
    color: `hsl(${varit2(feature.properties.name)} 75% 50%)`,
    fillOpacity: 0,
    weight: 4
  };
};

const initializeSite = async (hakuQuery1, hakuQuery2, url1, url2) => {
  //Haetaan mökkien määrää koskeva data Tilastokeskukselta
  let mokkiData = await getData(hakuQuery1, url1);
  let tyovoimaData = await getData(hakuQuery2, url2);

  console.log(mokkiData);
  //Mökkien määrädata käsitellään mokkienMaarat listan sisään vuosikymmenkohtaisiksi listoiksi sisäkkäisillä for-loopeilla

  let apuLuku = 0;

  for (let i = 0; i < 4; i++) {
    mokkienMaarat[i] = [];
    for (let k = 0; k < 309; k++) {
      let maara = mokkiData.value[apuLuku];
      mokkienMaarat[i][k] = maara;
      apuLuku += 1;
    }
  }

  //Työvoimadata käsitellään vastaavalla tavalla kuin mökkidata edellä

  let apuLuku2 = 0;

  for (let i = 0; i < 4; i++) {
    tyovoimaMaarat[i] = [];
    if (apuLuku2 > 0) {
      apuLuku2 -= 1235;
    }
    for (let k = 0; k < 309; k++) {
      let maara = tyovoimaData.value[apuLuku2];
      tyovoimaMaarat[i][k] = maara;
      apuLuku2 += 4;
    }
  }

  // mapFetch kutsuu lopuksi funktion mapInit, joka vastaa kartan ulkoasusta ja tuonnista sivustolle
  mapFetch();
};

//buildChart funktiota käytetään kuvaajien piirtoon, kun käyttäjä klikkaa kuntaa kartalta.
const buildChart = (kunnanNimi) => {
  let kunnanNumero = 0;
  for (let i = 0; i < kuntaLista.length; i++) {
    if (kunnanNimi == kuntaLista[i]) {
      break;
    }
    kunnanNumero += 1;
  }

  const labels = ["1980-1989", "1990-1999", "2000-2009", "2010-2019"];

  const chartData = {
    labels: labels,
    datasets: [
      {
        name: "Workforce",
        values: [
          tyovoimaMaarat[0][kunnanNumero],
          tyovoimaMaarat[1][kunnanNumero],
          tyovoimaMaarat[2][kunnanNumero],
          tyovoimaMaarat[3][kunnanNumero]
        ],
        chartType: "bar"
      },
      {
        name: "Summer houses",
        values: [
          mokkienMaarat[0][kunnanNumero],
          mokkienMaarat[1][kunnanNumero],
          mokkienMaarat[2][kunnanNumero],
          mokkienMaarat[3][kunnanNumero]
        ],
        chartType: "line"
      }
    ]
  };

  const chart = new Chart("#chart", {
    title: "Statistics of selected municipality:",
    data: chartData,
    type: "axis-mixed",
    height: 450,
    colors: ["#eb5146"]
  });
  document
    .getElementById("exportButton")
    .addEventListener("click", function () {
      chart.export();
    });
};

const varit = (kunnanNimi) => {
  let kunnanNumero = 0;
  for (let i = 0; i < kuntaLista.length; i++) {
    if (kunnanNimi == kuntaLista[i]) {
      break;
    }
    kunnanNumero += 1;
  }

  const muutosLuku =
    mokkienMaarat[3][kunnanNumero] / mokkienMaarat[2][kunnanNumero];

  if (muutosLuku >= 1) {
    return 120;
  } else if (muutosLuku > 0.5) {
    return 60;
  } else {
    return 0;
  }
};

const varit2 = (kunnanNimi) => {
  let kunnanNumero = 0;
  for (let i = 0; i < kuntaLista.length; i++) {
    if (kunnanNimi == kuntaLista[i]) {
      break;
    }
    kunnanNumero += 1;
  }

  const muutosLuku =
    tyovoimaMaarat[3][kunnanNumero] / tyovoimaMaarat[2][kunnanNumero];

  if (muutosLuku >= 1) {
    return 120;
  } else if (muutosLuku > 0.8) {
    return 60;
  } else {
    return 0;
  }
};

const urlMokkidata =
  "https://statfin.stat.fi:443/PxWeb/api/v1/fi/StatFin/rakke/statfin_rakke_pxt_116k.px";
const urlTyovoimadata =
  "https://statfin.stat.fi:443/PxWeb/api/v1/fi/StatFin/tyokay/statfin_tyokay_pxt_115b.px";

let masterCount = 0;
let masterCount2 = 0;
let mokkienMaarat = [];
let tyovoimaMaarat = [];
let masterData = {};
let kuntaLista = [];
initializeSite(
  jsonQueryMokit,
  jsonQueryTyovoima,
  urlMokkidata,
  urlTyovoimadata
);
