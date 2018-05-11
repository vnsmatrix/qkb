DROP TABLE IF EXISTS artworks;

CREATE TABLE artworks (
    id SERIAL PRIMARY KEY,
    artist_id
    title VARCHAR(333) NOT NULL,
    medium VARCHAR(333) NOT NULL,
    img VARCHAR(333) NOT NULL,
    bio VARCHAR(333) NOT NULL
);
