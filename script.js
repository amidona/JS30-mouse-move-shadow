const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; //100px, how far out from the element the shadow effect will be

function shadow(e) {
    // console.log(e);
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    
    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    //offsetX and offsetY will show where your cursor is, however if you have nested elements (in this case the h1 inside the hero), those numbers will reset to zero at the start of those elements, so the above math makes it so your numbers remain constant across the screen

    //console.log(x, y);

    const xWalk = Math.round((x / width * walk) - (walk / 2)); 
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    //if 100 is our walk, 50 should be as high as we go and -50 should be as low as we go

    //console.log(xWalk, yWalk)

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 red`//,
        // ${xWalk * -1}px ${yWalk}px 0 blue,
        // ${yWalk}px ${xWalk * -1}px 0 goldenrod,
        // ${yWalk * -1}px ${xWalk}px 0 green
        //can have multiple shadows moving in different orientations
    ;
}

hero.addEventListener("mousemove", shadow);