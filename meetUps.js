const muApi = require('./muApi');

module.exports = function() {
    return muApi.getMeetUps([
        'lgbt',
        'lgbtq',
        'queer',
        'femme'
    ]).then(function(data) {
        console.log("got our meetUps", data);
        return data.filter(function(item) {
            return item.entities.urls && item.entities.urls.length == 1;
        }).map(function(item) {
            console.log("item filter data from getMeetUps", item);
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
        console.log("error in getMeetUps", e);
    })
};
