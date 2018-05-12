//todo: fix carousel dots

import React from 'react';

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
    timer = setTimeout (moveKitties, 3000);
}

timer = setTimeout(moveKitties, 3000);

[].slice.call(dots).forEach(function(dot, index) {
    dots[index].addEventListener('click', function () {
        clearTimeout(timer);
        moveKitties(index);
        console.log(index);
    });

});

export default function Home() {
    return (
        <div id="home">

            <div id="kitties">
                <div className="kitty onscreen">
                    <img src="/1.jpg" />
                </div>
                <div className="kitty">
                    <img src="/2.jpg" />
                </div>
                <div className="kitty">
                    <img src="/3.jpg" />
                </div>
                <div className="kitty">
                    <img src="/4.jpg" />
                </div>
                <div className="kitty">
                    <img src="/5.jpg" />
                </div>

                <div id="dots">
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>

            </div>

            <script src="script.js" charet="utf-8"></script>
        </div>

    );
}
