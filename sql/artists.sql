DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(333) NOT NULL UNIQUE,
    medium VARCHAR(333) NOT NULL,
    img VARCHAR(333) NOT NULL,
    bio VARCHAR(3333) NOT NULL
);

INSERT INTO artists (id, name, medium, img, bio) VALUES
    (1, 'Dánae Cuesta', 'Photography',
    'http://payload430.cargocollective.com/1/20/663222/10916568/000001-_800.jpg',
    'Shooting exclusively on film, Dánae uses photography as a political weapon and the internet as a platform for deterritorialising the segmentation of the public and private spaces through experimental practices in which new spheres of action and subjectivation are created by the exploration of intimacy and desire as dynamic powers that stimulate processes of transformation and reappropiation of the flows of gender.'
);

INSERT INTO artists (id, name, medium, img, bio) VALUES
    (2, 'Laurence Philomene', 'Photography',
    'https://adolescentcontent.com/wp-content/uploads/2018/01/Laurence-Philomene-director1-e1516324540368.jpg',
    'Laurence is an emerging non-binary photographer, director and curator living in Montreal/Toronto. Working around themes of colour theory, queerness and gender identity. Previously mentored by Ivan Shaw (excutive photo director at Vogue) and Ramaa Mosley (Splendid & Co). Curator of the Coven Collective & Camp Gallery.'
);

INSERT INTO artists (id, name, medium, img, bio) VALUES
    (3, 'Arvida Byström', 'Photography',
    'http://www.antiagency.co.uk/assets/homepage-4-409x620.jpg',
    'Being a star of Instagram, Byström explores self-identity as a queer woman and questions sexualized women’s bodies. She decided to put together a book with the artist Molly Soda about Instagram censorship, called Pics or It Didn’t Happen: Images Banned From Instagram. The book was released in March 2017 and showcases mostly pictures of women’s bodies that Instagram has taken down.'
);

INSERT INTO artists (id, name, medium, img, bio) VALUES
    (4, 'Lora Mathis', 'Poetry',
    'http://www.antiagency.co.uk/assets/homepage-4-409x620.jpg',
    'Lora Mathis is a writer, visual artist, zinester, and musician from Southern California. Their first full-length collection The Women Widowed to Themselves was a Pushcart Prize nominee and published in 2015 by Where Are You Press.'
);
