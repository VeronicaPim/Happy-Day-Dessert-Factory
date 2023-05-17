//javascript main file, from this website and github:
// https://www.npmjs.com/package/js-confetti
$("form").submit((event) => {
    event.preventDefault();
    const jsConfetti = new JSConfetti()
    //confetti effect
    jsConfetti.addConfetti()
})

//anime effect, from this github:
// https://github.com/juliangarnier/anime/
anime({
    targets: '.logo-image',
    loop: 2,
    rotate: {
        value: '+=1turn', // 0 + 2 = '2turn'
        duration: 1800,
        easing: 'easeInOutSine'
      },
});

//from lab 4, to use tabs 
function showDescription(descript) {
    $("#description").html("Description: " + descript);
}
function hideDescription() {
    $("#description").html("");
}