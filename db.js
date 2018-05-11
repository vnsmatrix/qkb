var spicedPg = require('spiced-pg');

var db;

if (process.env.DATABASE_URL){
    db = spicedPg(process.env.DATABASE_URL);
} else {
    db = spicedPg('postgres:postgres:postgres@localhost:5432/qkb');
}
