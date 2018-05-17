DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(333) NOT NULL UNIQUE,
    email VARCHAR(333) NOT NULL UNIQUE,
    medium VARCHAR(333) NOT NULL,
    img VARCHAR(333) NOT NULL,
    bio VARCHAR(3333) NOT NULL
);

INSERT INTO artists (id, name, email, medium, img, bio) VALUES
    (1, 'Dánae Cuesta', 'danaecuesta@gmail.com', 'Photography',
    'http://payload430.cargocollective.com/1/20/663222/10916568/000001-_800.jpg',
    'Shooting exclusively on film, Dánae uses photography as a political weapon and the internet as a platform for deterritorialising the segmentation of the public and private spaces through experimental practices in which new spheres of action and subjectivation are created by the exploration of intimacy and desire as dynamic powers that stimulate processes of transformation and reappropiation of the flows of gender.'
);

INSERT INTO artists (id, name, email, medium, img, bio) VALUES
    (2, 'Laurence Philomene', 'l', 'Photography',
    'https://adolescentcontent.com/wp-content/uploads/2018/01/Laurence-Philomene-director1-e1516324540368.jpg',
    'Laurence is an emerging non-binary photographer, director and curator living in Montreal/Toronto. Working around themes of colour theory, queerness and gender identity. Previously mentored by Ivan Shaw (excutive photo director at Vogue) and Ramaa Mosley (Splendid & Co). Curator of the Coven Collective & Camp Gallery.'
);

INSERT INTO artists (id, name, email, medium, img, bio) VALUES
    (3, 'Arvida Byström', 'a', 'Photography',
    'http://www.antiagency.co.uk/assets/homepage-4-409x620.jpg',
    'Being a star of Instagram, Byström explores self-identity as a queer woman and questions sexualized women’s bodies. She decided to put together a book with the artist Molly Soda about Instagram censorship, called Pics or It Didn’t Happen: Images Banned From Instagram. The book was released in March 2017 and showcases mostly pictures of women’s bodies that Instagram has taken down.'
);

INSERT INTO artists (id, name, email, medium, img, bio) VALUES
    (4, 'Lora Mathis', 'lm', 'Poetry',
    'http://www.antiagency.co.uk/assets/homepage-4-409x620.jpg',
    'Lora Mathis is a writer, visual artist, zinester, and musician from Southern California. Their first full-length collection The Women Widowed to Themselves was a Pushcart Prize nominee and published in 2015 by Where Are You Press.'
);

INSERT INTO artists (id, name, email, medium, img, bio) VALUES
    (5, 'Nil & Karin Romano', 'romano', 'Painting',
    'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/16797897_10155014751053550_2915709557326162695_o.jpg?_nc_cat=0&_nc_eui2=AeGwRpPjtz4hhoGjhCKc28I4GVoRdR5WTTw9eLs_2SN5pshy3-BLMPuZ-py3ZjWJdT7yBpKOgA1-ekSeB41adywzxiSlTbDWrbl0QyUtM4za_g&oh=ff06a3e979bf22c440760680def3e7d3&oe=5B9C272D',
    'The Romano twins are a duo of painters & djs born & based in Tel Aviv. They produce beautifully twisted works of art four hands at a time. For the Nil & Karin, the most important thing in the process of creation is to tell a story, which will give the viewer a glimpse into secret corners of their inner world they can not express in words. Long years of almost total isolation, depression and mental storms bring the sisters to create unusual art which deals with the dark layers of the human soul, using motifs of chaos, nihilism and strong emotions. These motifs are joined by the motif of dominant and dominating women at the center of their work.'
);
