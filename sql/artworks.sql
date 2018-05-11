DROP TABLE IF EXISTS artworks;

CREATE TABLE artworks (
    id SERIAL PRIMARY KEY,
    artist_id INTEGER NOT NULL REFERENCES artists(id),
    title VARCHAR(333),
    img VARCHAR(333) NOT NULL,
    medium VARCHAR(333) NOT NULL,
    format VARCHAR(333) NOT NULL,
    edition INTEGER NOT NULL,
    year INTEGER NOT NULL,
    price INTEGER NOT NULL
);
