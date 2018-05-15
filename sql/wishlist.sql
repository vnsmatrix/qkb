DROP TABLE IF EXISTS wishlist;

CREATE TABLE wishlist (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    artwork_id INTEGER NOT NULL REFERENCES artworks(id)
);
