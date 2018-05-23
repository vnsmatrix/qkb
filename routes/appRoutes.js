const {hashPassword, checkPassword} = require('../bcrypt');
const {editPass, editEmail, editName, getWishlist, addFav, deleteFav, checkIfFav, getUserInfo, register, getMatchesByEmail, getArtists, getArtistsByMedium, getArtworks, getArtworkById, getArtistByArtworkId, getPhotography, getPoetry, getIllustration, getPainting, getCollage, getMixedMedia, getArtistByName, getArtworksByArtist} = require('../db');
const headlines = require('../headlines');

module.exports = app => {
    app.get('/get-artists', function(req,res) {
        getArtists().then (result => {
            console.log("//////getArtists result.rows", result.rows);
            res.json({
                success: true,
                artists: result.rows
            })
        }).catch(e => {
            console.log(e);
            res.json({
                success: false
            })
        })
    })

    app.get('/get-artworks', function(req,res) {
        getArtworks().then (result => {
            console.log("//////getArtworks result.rows", result.rows);
            res.json({
                success: true,
                artworks: result.rows
            })
        }).catch(e => {
            console.log(e);
            res.json({
                success: false
            })
        })
    })

    app.get('/get-photography', function(req,res) {
        getPhotography().then (result => {
            console.log("//////getPhotography result.rows", result.rows);
            res.json({
                success: true,
                artworks: result.rows
            })
        }).catch(e => {
            console.log(e);
            res.json({
                success: false
            })
        })
    })

    app.get('/get-illustration', function(req,res) {
        getIllustration().then (result => {
            console.log("//////getIllustration result.rows", result.rows);
            res.json({
                success: true,
                artworks: result.rows
            })
        }).catch(e => {
            console.log(e);
            res.json({
                success: false
            })
        })
    })

    app.get('/get-painting', function(req,res) {
        getPainting().then (result => {
            console.log("//////getPainting result.rows", result.rows);
            res.json({
                success: true,
                artworks: result.rows
            })
        }).catch(e => {
            console.log(e);
            res.json({
                success: false
            })
        })
    })

    app.get('/get-collage', function(req,res) {
        getCollage().then (result => {
            console.log("//////getCollage result.rows", result.rows);
            res.json({
                success: true,
                artworks: result.rows
            })
        }).catch(e => {
            console.log(e);
            res.json({
                success: false
            })
        })
    })


    app.get('/get-poetry', function(req,res) {
        getPoetry().then (result => {
            console.log("//////getPoetry result.rows", result.rows);
            res.json({
                success: true,
                artworks: result.rows
            })
        }).catch(e => {
            console.log(e);
            res.json({
                success: false
            })
        })
    })

    app.get('/get-mixedmedia', function(req,res) {
        getMixedMedia().then (result => {
            console.log("//////getMixedMedia result.rows", result.rows);
            res.json({
                success: true,
                artworks: result.rows
            })
        }).catch(e => {
            console.log(e);
            res.json({
                success: false
            })
        })
    })

    app.get('/get-artwork/:id', (req, res) => {
        console.log('///GET ARTWORK req.session.user', req.session.user);
        if(req.session.user) {
            Promise.all([
                getArtworkById(req.params.id),
                checkIfFav(req.session.user.id, req.params.id)
            ]).then(result => {
                console.log('///result[0].rows[0]', result[0].rows[0]);
                console.log('///result[1].rows', result[1].rows);
                console.log('fav: result[1].rows.length > 0', result[1].rows.length > 0);
                res.json({
                    artwork: result[0].rows[0],
                    fav: result[1].rows.length > 0
                })
            }).catch(e => {
                console.log(e);
            })
        } else {
            getArtworkById(req.params.id).then(result => {
                console.log('///getArtworkById result.rows', result.rows);

                res.json({
                    artwork: result.rows[0],
                    fav: 666
                })
            }).catch(e => {
                console.log(e);
            })

        }
    })

    app.get('/get-wishlist', (req,res) => {
        if (!req.session.user) {
            console.log("!req.session.user");
            res.redirect('/login')
        }
        getWishlist(req.session.user.id).then (result => {
            console.log("//////getWishlist result.rows", result.rows);
            res.json({
                success: true,
                artworks: result.rows
            })
        }).catch(e => {
            console.log(e);
            res.json({
                success: false
            })
        })
    })

    app.get('/get-artist/:artist', (req, res) => {
        getArtistByName(req.params.artist).then(result => {
            res.json({
                artist: result.rows[0]
            })
        }).catch(e => {
            console.log(e);
        })
    })

    app.get('/get-artworks-by-artist/:artist', (req, res) => {
        console.log("get-artworks-by-artist/ req.params.artist", req.params.artist);
        getArtworksByArtist(req.params.artist).then(result => {
            res.json({
                artworks: result.rows
            })
        }).catch(e => {
            console.log(e);
        })
    })

    app.get('/get-news', (req, res) => {
        headlines().then(headlines => {
            console.log("headlines", headlines);
            res.json(headlines);
        }).catch(e => {
            console.log("error in /get-news", e);
        })
    })

    app.get('/get-events', (req, res) => {
        getEvents().then(meetUps => {
            console.log("meetUps", meetUps);
            res.json(meetUps);
        }).catch(e => {
            console.log("error in /get-events", e);
        })
    })

    app.post("/register", (req, res) => {
        console.log("req.body post register", req.body);
        if (req.body.email && req.body.pass && req.body.first && req.body.last) {
            hashPassword(req.body.pass).then (result => {
                register(req.body.first, req.body.last, req.body.email, result).then(result => {
                    console.log("in post register: result.rows[0]", result.rows[0]);
                    req.session.user = {
                        id: result.rows[0].id,
                        first: req.body.first,
                        last: req.body.last,
                        email: result.rows[0].email,
                        pass: result.rows[0].pass
                    }
                    console.log("REGISTER req.session.user", req.session.user);
                    res.json({
                        success: true
                    })
                }).catch(e => {
                    console.log(e);
                    res.json({
                        success: false,
                        error: 'Email already registered. Please log in.'
                    })
                })
            }).catch(e => {
                console.log(e);
                res.json({
                    success: false
                })
            })
        } else {
            res.json({
                success: false,
                error: 'Please fill all the blanks.'
            })
        }
    })

    app.post("/login", (req, res) => {
        if (req.body.email && req.body.pass) {
            getMatchesByEmail(req.body.email).then(result => {
                if (result.rows[0] == undefined) {
                    res.json({
                        success: false,
                        error: 'Unknown email!'
                    })
                } else {
                // console.log(req.body.pass, result.rows[0].pass);
                    checkPassword(req.body.pass, result.rows[0].pass).then(result2 => {
                        if (result2 == false) {
                            res.json({
                                success: false,
                                error: 'Ooops! Wrong pass!'
                            })
                        } else {
                            req.session.user = {
                                id: result.rows[0].id,
                                first: result.rows[0].first,
                                last: result.rows[0].last,
                                email: result.rows[0].email,
                                pass: result.rows[0].pass
                            }
                            console.log("LOGIN success req.session.user", req.session.user);
                            res.json({
                                success: true
                            })
                        }
                    }).catch(e => {
                        console.log(e);
                    })
                }
            }).catch(e => {
                console.log(e);
            })
        } else {
            res.json({
                success: false,
                error: 'Please fill all the blanks.'
            })
        }
    })

    app.get('/get-user', (req, res) => {
        console.log("/get-user req.session", req.session);
        if (!req.session.user) {
            console.log("!req.session.user");
            res.redirect('/login')
        } else {
            console.log("req.session.user", req.session.user);
            getUserInfo(req.session.user.id).then (result => {
                console.log("result.rows from getUserInfo", result.rows);
                res.json({
                    success: true,
                    user: result.rows[0]
                })
            }).catch(e => {
                console.log(e);
                res.json({
                    success: false
                })
            })
        }
    })

    app.post("/editname", (req, res) => {
        console.log(req.body);
        if (req.body.first && req.body.last) {
            editName(req.session.user.id, req.body.first, req.body.last).then(result => {
                console.log("editname results.rows", result.rows);
                res.json({
                    success: true,
                    first: result.rows[0].first,
                    last: result.rows[0].last
                })
            }).catch(e => {
                console.log(e);
            })
        } else {
            res.json({
                success: false,
                error: 'Please fill all the blanks.'
            })
        }
    })

    app.post("/editemail", (req, res) => {
        console.log(req.body);
        if (req.body.email) {
            editEmail(req.session.user.id, req.body.email).then(result => {
                console.log("editemail results.rows", result.rows);
                res.json({
                    success: true,
                    email: result.rows[0].email
                })
            }).catch(e => {
                console.log(e);
            })
        } else {
            res.json({
                success: false,
                error: 'Please fill all the blanks.'
            })
        }
    })

    app.post("/editpass", (req, res) => {
        if (req.body.pass) {
            hashPassword(req.body.pass).then(result => {
                editPass(req.session.user.id, result).then(result => {
                    console.log("editemail results.rows", result.rows);
                    res.json({
                        success: true,
                        pass: result.rows[0].pass
                    })
                }).catch(e => {
                    console.log(e);
                })
            }).catch(e => {
                    console.log(e);
            })
        } else {
            res.json({
                success: false,
                error: 'Please fill all the blanks.'
            })
        }
    })

    app.get("/checkIfFav/:artworkId", (req, res) => {
        console.log("req.session.user.id, req.params.artworkId", req.session.user.id, req.params.artworkId);
        checkIfFav(req.session.user.id, req.params.artworkId).then(result => {
            console.log("checkIfFav result.rows", result.rows, result.rows > 0);
            res.json({
                success: true,
                fav: result.rows > 0
            })
        }).catch(e => {
            console.log(e);
        })
    })

    app.post("/addFav/:artworkId", (req, res) => {
        console.log("req.session.user.id, req.params.artworkId", req.session.user.id, req.params.artworkId);
        addFav(req.session.user.id, req.params.artworkId).then(result => {
            console.log("addFav result.rows", result.rows);
            res.json({
                success: true
            })
        }).catch(e => {
            console.log(e);
        })
    })

    app.post("/deleteFav/:artworkId", (req, res) => {
        console.log("req.session.user.id, req.params.artworkId", req.session.user.id, req.params.artworkId);
        deleteFav(req.session.user.id, req.params.artworkId).then(result => {
            console.log("deleteFav result.rows", result.rows);
            res.json({
                success: true
            })
        }).catch(e => {
            console.log(e);
        })
    })


    //delete session (cookies):
    app.get('/logout', (req, res) => {
        req.session = null;
        res.redirect('/')
    })

    app.get('/', function(req, res) {
        // if (req.session.user){
        //     res.redirect('/')
        // } else {
            res.sendFile('/index.html', { root: '.' });
        // }
    })

    //FINAL ROUTE *!
    app.get('*', function(req, res) {
        // if (!req.session.user){
        //     res.redirect('/')
        // } else {
            res.sendFile('/index.html', { root: '.' });
        // }
    });
}
