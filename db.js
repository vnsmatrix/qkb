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
    return db.query(`SELECT name FROM artists WHERE id = $1`, [id]);
}

exports.getArtworks = () => {
    return db.query(`SELECT * FROM artworks`);
}

exports.getArtworkById = (id) => {
    return db.query(`SELECT * FROM artworks WHERE id = $1`, [id]);
}

exports.getArtworksByMedium = (medium) => {
    return db.query(`SELECT * FROM artworks WHERE medium = $1`, [medium]);
}

exports.getPhotography = () => {
    return db.query(`SELECT * FROM artworks WHERE medium = 'Photography'`);
}

exports.getPoetry = () => {
    return db.query(`SELECT * FROM artworks WHERE medium = 'Poetry'`);
}

exports.getIllustration = () => {
    return db.query(`SELECT * FROM artworks WHERE medium = 'Illustration'`);
}

exports.getPainting = () => {
    return db.query(`SELECT * FROM artworks WHERE medium = 'Painting'`);
}

exports.getCollage = () => {
    return db.query(`SELECT * FROM artworks WHERE medium = 'Collage'`);
}

exports.getMixedMedia = () => {
    return db.query(`SELECT * FROM artworks WHERE medium = 'Mixed Media'`);
}

exports.getArtworksByArtist = (artist) => {
    return db.query(`SELECT * FROM artworks WHERE artist = $1`, [artist]);
}

exports.getArtistByName = (name) => {
    return db.query(`SELECT * FROM artists WHERE name = $1`, [name]);
}
