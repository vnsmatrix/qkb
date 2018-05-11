(function () {
    var cur = 0//index of the current kitty onscreen
    var kitties = document.getElementsByClassName('kitty')
    var dots = document.getElementsByClassName('dot')
    var next
    var timer

    function moveKitties(next) {
        kitties[cur].classList.remove('onscreen');
        kitties[cur].classList.add('exit');
        dots[cur].classList.remove('active');

        kitties[cur].addEventListener('transitionend', function fn(e) {
                e.target.classList.remove('exit');
                e.target.removeEventListener('transitionend', fn);
        });

        if (!isNaN(next)) { //if (next != null)
            cur = next;
        } else {
            cur++;
            if (cur >= kitties.length) {
                cur = 0;
            }
        }

        kitties[cur].classList.add('onscreen');
        dots[cur].classList.add('active');
        timer = setTimeout (moveKitties, 5000);
    }

    timer = setTimeout(moveKitties, 5000);

    [].slice.call(dots).forEach(function(dot, index) {
        dots[index].addEventListener('click', function () {
            clearTimeout(timer);
            moveKitties(index);
            console.log(index);
        });

    });

})();
