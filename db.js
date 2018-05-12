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

exports.getArtistByArtworkId = (id) => {
    //todo
    return db.query(`SELECT name FROM artists WHERE id = $1`, [id]);
}

exports.getArtworks = () => {
    return db.query(`SELECT * FROM artworks`);
}

exports.getArtworksByMedium = (medium) => {
    return db.query(`SELECT * FROM artworks WHERE medium = $1`, [medium]);
}

exports.getArtworksByArtistId = (id) => {
    return db.query(`SELECT name FROM artists WHERE id = $1`, [id]);
}
