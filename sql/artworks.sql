DROP TABLE IF EXISTS artworks;

CREATE TABLE artworks (
    id SERIAL PRIMARY KEY,
    artist VARCHAR(333) NOT NULL REFERENCES artists(name),
    title VARCHAR(333),
    img VARCHAR(333) NOT NULL,
    medium VARCHAR(333) NOT NULL,
    format VARCHAR(333) NOT NULL,
    dets VARCHAR(333) NOT NULL,
    year INTEGER NOT NULL,
    price INTEGER NOT NULL
);

INSERT INTO artworks (id, artist, title, img, medium, format, dets, year, price) VALUES
    (1, 'Dánae Cuesta', 'Legs',
    'http://payload430.cargocollective.com/1/20/663222/10918135/000024_900.jpg',
    'Photography',
    '180 x 120 cm',
    'Limited edition of 3',
    2017,
    300
);

INSERT INTO artworks (id, artist, title, img, medium, format, dets, year, price) VALUES
    (2, 'Dánae Cuesta', 'Hug',
    'http://payload430.cargocollective.com/1/20/663222/10916475/000036-_800.jpg',
    'Photography',
    '120 x 180 cm',
    'Limited edition of 3',
    2014,
    300
);

INSERT INTO artworks (id, artist, title, img, medium, format, dets, year, price) VALUES
    (3, 'Lora Mathis', 'Alive',
    'https://hughmanatees.files.wordpress.com/2016/04/girl-lora-mathis-51.jpg?w=920&h=&crop=1&zoom=2',
    'Photography',
    '120 x 180 cm',
    'Limited edition of 3',
    2016,
    300
);

INSERT INTO artworks (id, artist, title, img, medium, format, dets, year, price) VALUES
    (4, 'Dánae Cuesta', 'Gender Cancelled',
    'http://payload529.cargocollective.com/1/20/663222/12894465/05-000020_638.jpg',
    'Photography',
    '40 x 60 cm',
    'Limited edition of 10',
    2017,
    120
);

INSERT INTO artworks (id, artist, title, img, medium, format, dets, year, price) VALUES
    (5, 'Lora Mathis', 'Kiss your friends',
    'https://static1.squarespace.com/static/544bf66be4b0dd27d7019154/5a9f181c419202557d887e41/5a9f924e652dea8c73b158d7/1521424185663/kiss+ur+friends+-+5x7+.jpg?format=1500w',
    'Poetry',
    '20 x 30 cm',
    'Edition of 100',
    2017,
    12
);

INSERT INTO artworks (id, artist, title, img, medium, format, dets, year, price) VALUES
    (6, 'Lora Mathis', 'Radical softness',
    'https://static1.squarespace.com/static/544bf66be4b0dd27d7019154/5a9f181c419202557d887e41/5a9f920253450a19d22020b9/1520407158103/Radical+Softness.jpg?format=1500w',
    'Photography',
    '30 x 20 cm',
    'Limited edition of 10',
    2017,
    50
);

INSERT INTO artworks (id, artist, title, img, medium, format, dets, year, price) VALUES
    (7, 'Lora Mathis', 'Instinct to ruin',
    'https://assets.bigcartel.com/product_images/213203593/FullSizeRender-1.jpg?auto=format&fit=max&w=1000',
    'Poetry',
    '54 pages',
    'Cover art is by Dianna Settles',
    2017,
    15
);

INSERT INTO artworks (id, artist, title, img, medium, format, dets, year, price) VALUES
    (8, 'Lora Mathis', 'Die together',
    'https://static1.squarespace.com/static/544bf66be4b0dd27d7019154/5a9f24539140b73a633f383c/5a9f249a8165f526fc4fd1b7/1520379040234/Die+Together.jpg?format=1000w',
    'Illustration',
    '20 x 30 cm',
    'Original',
    2017,
    120
);

INSERT INTO artworks (id, artist, title, img, medium, format, dets, year, price) VALUES
    (9, 'Dánae Cuesta', 'Vandals #2',
    'https://cdn.shopify.com/s/files/1/1569/5061/products/shop_V2_grande.png?v=1505809711',
    'Mixed Media',
    '372 pages / 24 x 27 cm',
    'Edition of 1500',
    2017,
    45
);
