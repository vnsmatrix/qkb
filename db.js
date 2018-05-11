var spicedPg = require('spiced-pg');

var db;

if (process.env.DATABASE_URL){
    db = spicedPg(process.env.DATABASE_URL);
} else {
    db = spicedPg('postgres:postgres:postgres@localhost:5432/qkb');
}

exports.getArtists = () => {
    return db.query(`SELECT * FROM artists`);
}

exports.getArtistsByMedium = (medium) => {
    return db.query(`SELECT * FROM artists WHERE medium = $1`, [medium]);
}
