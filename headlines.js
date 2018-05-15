const twApi = require('./twApi');

module.exports = function() {
    return twApi.getTweets([
        'QueerArtBerlin',
        'covenberlin',
        'TheAdvocateMag',
        'danaecuesta',
        'voices4_',
        'NTransfeminista',
        'rqtr',
        'OrgulloMadrid',
        'queer_sol',
        'queerberlin',
        'queerspiegel',
        'siegessaeule',
        'Anarcho_Queer',
        'paroledequeer',
        'golfxsconppios'
    ]).then(function(data) {
        console.log("got our tweets", data);
        return data.filter(function(item) {
            return item.entities.urls && item.entities.urls.length == 1;
        }).map(function(item) {
            console.log("item filter data from getTweets in headlines", item);
            let text = item.text;
            if (item.entities.media) {
                for (let i = 0; i < item.entities.media.length; i++) {
                    text = text.split(item.entities.media[i].url).join('');
                }
            }
            text = text.split(item.entities.urls[0].url).join('');
            return {
                text: text.trim(),
                href: item.entities.urls[0].url,
                source: item.user.name,
            }
        });
    }).catch(e => {
        console.log("error in getTweets", e);
    })
};
