///SERVER///

const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const csurf = require('csurf');
const {hashPassword, checkPassword} = require('./bcrypt')
const {getArtists, getArtistsByMedium, getArtworks, getArtistByArtworkId, getPhotography, getPoetry, getIllustration, getPainting, getCollage, getMixedMedia} = require('./db')

//upload files stuff:
const multer = require('multer');
const uidSafe = require('uid-safe');
const path = require('path');

const s3 = require('./s3')
const config = require('./config')

const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/uploads');
    },
    filename: function (req, file, callback) {
      uidSafe(24).then(function(uid) { //24 is the number of bytes who want the unique id to have, b64 encoded
          callback(null, uid + path.extname(file.originalname)); //originalname is the name as it was in the user file
      });
    }
});

var uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152 //2MB
    }
});

//MIDDLEWARE:

app.use(express.static('./public'))

app.use(cookieSession({
    secret: 'nobody knows this secret but me',
    maxAge: 1000 * 60 * 60 * 24 * 7 * 6
}));

app.use(bodyParser());

app.use(compression()); //gzip compression of textual responses

//csurf protection middleware: get the csrf token into a cookie
//verifies request comes from my site, not from someone else's
app.use(csurf());

app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js', //if url is bundle.js, use:
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

//MY ROUTES:

app.get('/artists', function(req,res) {
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

app.get('/artworks', function(req,res) {
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

app.get('/photography', function(req,res) {
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

app.get('/illustration', function(req,res) {
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

app.get('/painting', function(req,res) {
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

app.get('/collage', function(req,res) {
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


app.get('/poetry', function(req,res) {
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

app.get('/mixedmedia', function(req,res) {
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
    getArtworkById(req.params.id).then(result => {
        res.json({
            artwork: result.rows[0],
        })
    }).catch(e => {
        console.log(e);
    })
    getArtistByArtworkId(req.params.id).then(result => {
        res.json({
            name: result.rows[0].name,
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
    if (req.session.user){
        res.redirect('/')
    } else {
        res.sendFile(__dirname + '/index.html')
    }
})



app.get("/seeFR/:otherUserId", (req, res) => {
    console.log("req.params.otherUserId, req.session.user.id", req.params.otherUserId, req.session.user.id);
    seeFR(req.params.otherUserId, req.session.user.id).then(result => {
        console.log("seeFR result.rows", result.rows);
        res.json({
            success: true,
            sender_id: result.rows[0] && result.rows[0].sender_id,
            receiver_id: result.rows[0] && result.rows[0].receiver_id,
            status: result.rows[0] && result.rows[0].status
        })
    }).catch(e => {
        console.log(e);
    })
})

//FINAL ROUTE *!
app.get('*', function(req, res) {
    if (!req.session.user){
        res.redirect('/')
    } else {
        res.sendFile(__dirname + '/index.html')
    }
});

//LISTENING:
app.listen(8080, function() {
    console.log("I'm listening.");
});
