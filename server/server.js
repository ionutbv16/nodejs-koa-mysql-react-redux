var SPEC = {
  swagger: "2.0",
  info: {
    title: "Hello API",
    version: "1.0.0"
  },
  basePath: "/api",
  paths: {
    "/hello/:name": {
      "get": {
        tags: [ "Hello" ],
        summary: "Says hello",
        parameters: [
          { name: "name",
            in: "path",
            type: "string",
            default: "World" },
          { name: "punctuation",
            in: "query",
            type: "string",
            required: true }
        ],
        responses: {
          "200": {
            description: "Everything went well :)",
            schema: { $ref: "#/definitions/Message" }
          },
          "400": {
            description: "Issue with the parameters"
          }
        }
      }
    }
  },
  definitions: {
    Message: {
      required: [ "adunit" ],
      properties: {
        message: {
          type: "string"
        }
      }
    }
  }
};
 
var app = require("koa")();
app.use(require("koa-bodyparser")());
app.use(require("koa-swagger")(SPEC));
var cors = require('koa-cors');
app.use(cors());
 
var _ = require("koa-route");

const mysql = require('promise-mysql');

const config = {
    
    user: 'root', password: 'password', database: 'test_adludio', host: 'localhost', port: '3306',
    connectionLimit: 100,
};

const pool = mysql.createPool(config);

async function getadunit(query) {
    try {
        //Find item
        let itemData = await pool.query(
          query 
        );
        return itemData;
    } catch (error) {
        console.log(error);
        ctx.throw(400, 'INVALID_DATA');
    }
}

async function inserttruncateadunit(query) {
  try {
      //Find item
      let itemData = await pool.query(
        query 
      );
      return true;
  } catch (error) {
      console.log(error);
      ctx.throw(400, 'INVALID_DATA');
  }
}


//DEFINE SQL STRINGS
const sqlevents = "SELECT date, type, SUM(value) as sum FROM test_adludio.report group by type";
const sqleventsio = "SELECT date, type, SUM(value) as sum, name FROM test_adludio.report, test_adludio.insertion_order WHERE test_adludio.insertion_order.id=test_adludio.report.id_insertion_order group by test_adludio.report.type";
const sqleventsca = "SELECT date, test_adludio.report.type, SUM(value) as sum, " +
"test_adludio.insertion_order.name as insertion_order, test_adludio.campaign.name as campaign " +
"FROM test_adludio.report, test_adludio.campaign, test_adludio.insertion_order " +
"WHERE test_adludio.report.id_campaign=test_adludio.campaign.id " +
"AND test_adludio.insertion_order.id=test_adludio.report.id_insertion_order " +
"group by test_adludio.report.type";
const sqleventsad = "SELECT date, test_adludio.report.type, SUM(value) as sum, " +
"test_adludio.insertion_order.name as insertion_order,  " +
"test_adludio.campaign.name as campaign,  " +
"test_adludio.adunit.name as adunit  " +
"FROM test_adludio.report, test_adludio.campaign, test_adludio.insertion_order, test_adludio.adunit " +
"WHERE test_adludio.report.id_campaign=test_adludio.campaign.id  " +
"AND  test_adludio.insertion_order.id=test_adludio.report.id_insertion_order  " +
"AND  test_adludio.adunit.id=test_adludio.report.id_adunit  " +
"group by test_adludio.report.type";
const sqleventsoptimized = "SELECT * FROM optimized";

app.use(_.get("/api/events",  function* () {
  console.log("api/events");
    let adunit =  yield  getadunit(sqlevents);
    this.body = {
      adunit:  adunit
    };
}));

app.use(_.get("/api/eventsio",  function* () {
  console.log("api/eventsio");
    let adunit =  yield  getadunit(sqleventsio);
    this.body = {
      adunit:  adunit
    };
}));

app.use(_.get("/api/eventsca",  function* () {
  console.log("api/eventsca");
    let adunit =  yield  getadunit(sqleventsca);
    this.body = {
      adunit:  adunit
    };
}));

app.use(_.get("/api/eventsad",  function* () {
  console.log("api/eventsad");
    let adunit =  yield  getadunit(sqleventsad);
    this.body = {
      adunit:  adunit
    };
}));

app.use(_.get("/api/eventsop",  function* () {
  console.log("api/eventsop");
    let adunit =  yield  getadunit(sqleventsoptimized);
    this.body = {
      adunit:  adunit
    };
}));


// POPULATE OPTIMIZATION TABLE FOR EACH HOME PAGE REQUEST ON FRONTEND
app.use(_.get("/api/eventsupdate",  function* () {
  console.log("api/eventsupdate");
  // clear table
  yield inserttruncateadunit(
    "TRUNCATE test_adludio.optimized;"
  );
  // populate table
  let adunit =  yield  getadunit(sqleventsio);
  for (i = 0; i < adunit.length; i++) {
    yield inserttruncateadunit(
        "INSERT INTO optimized (daterecord, typerecord, ordername, sum) " +
        " values ('"+ adunit[i]['date'] +"', '"+ adunit[i]['type'] +"',"+ mysql.escape(adunit[i]['name']) +",'"+ adunit[i]['sum'] +"')"
    );
  };
  this.body = {
    insertiondone:  true
  };
}));

app.listen(3000);
