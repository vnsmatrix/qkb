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
    price INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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

INSERT INTO artworks (id, artist, title, img, medium, format, dets, year, price) VALUES
    (10, 'Nil & Karin Romano', 'My Pets Have Eaten Me To Rot Away',
    'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/30221485_10156229437593550_5544029702202589184_o.jpg?_nc_cat=0&_nc_eui2=AeHST0K6S9Khqt89OqJ9TpB1XM2MqXGtZb5owDJOY50KLkytXzVNMJAYu8zPO_P0aJ49ijyNlXMZvlXb80IaSrjCDBqYK4uamILvk9JfEQSLOA&oh=c12c770050c495224b9ffec53ae20a6d&oe=5B4F6FE4',
    'Painting',
    '120 x 80 cm',
    'Original',
    2018,
    666
);

INSERT INTO artworks (id, artist, title, img, medium, format, dets, year, price) VALUES
    (11, 'Nil & Karin Romano', 'Swimming Into A Big Sea Of Fake Emotions',
    'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/28279519_10156108294988550_431056561415440564_n.jpg?_nc_cat=0&_nc_eui2=AeG9wDPTJ21_JLB5EfX46lIS28ng7i86Fkuqwm3nyx_ejEu76VeHMTFYjAUm3W7mRjxTmtn2pCrQT-uHcxlAuEAxK1lykct4s1EbdpSKloxcDw&oh=7995056a5abe6882e3df2423d3cfb01e&oe=5B90DC1C',
    'Painting',
    '120 x 80 cm',
    'Original',
    2018,
    666
);

INSERT INTO artworks (id, artist, title, img, medium, format, dets, year, price) VALUES
    (12, 'Shaltmira', 'Why people hate',
    'http://shaltmira.weebly.com/uploads/3/3/0/1/3301242/9488975_orig.png',
    'Illustration',
    '30 x 15 cm',
    'Edition of 50',
    2013,
    15
);
