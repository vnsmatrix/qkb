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

exports.register = (first, last, email, pass) => {
    return db.query('INSERT INTO users (first, last, email, pass) VALUES($1, $2, $3, $4) RETURNING *', [first, last, email, pass])
}

exports.getMatchesByEmail = (email) => {
    return db.query('SELECT first, last, pass, id FROM users WHERE email = $1', [email])
}

exports.getUserInfo = (id) => {
    return db.query('SELECT * FROM users WHERE id = $1', [id])
}

exports.checkIfFav = (user_id, artwork_id) => {
    return db.query('SELECT * FROM wishlist WHERE user_id = $1 AND artwork_id = $2', [user_id, artwork_id])
}

exports.addFav = (user_id, artwork_id) => {
    return db.query('INSERT INTO wishlist (user_id, artwork_id) VALUES ($1, $2)', [user_id, artwork_id])
}

exports.deleteFav = (user_id, artwork_id) => {
    return db.query('DELETE FROM wishlist WHERE user_id = $1 AND artwork_id = $2', [user_id, artwork_id])
}

exports.getWishlist = (user_id) => {
    return db.query(`SELECT * FROM artworks LEFT JOIN wishlist ON artworks.id = wishlist.artwork_id WHERE wishlist.user_id = $1`, [user_id]);
}
