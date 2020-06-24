// Wrap every letter in a span
var textWrapper = document.querySelector('.h1_acc');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.h1_acc .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
    }).add({
        targets: '.h1_acc',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

var arr_acc = {};
arr_acc.opacityIn = [0, 1];
arr_acc.scaleIn = [0.2, 1];
arr_acc.scaleOut = 3;
arr_acc.durationIn = 800;
arr_acc.durationOut = 600;
arr_acc.delay = 500;

anime.timeline({ loop: true })
    .add({
        targets: '.arr_acc .letters-1',
        opacity: arr_acc.opacityIn,
        scale: arr_acc.scaleIn,
        duration: arr_acc.durationIn
    }).add({
        targets: '.arr_acc .letters-1',
        opacity: 0,
        scale: arr_acc.scaleOut,
        duration: arr_acc.durationOut,
        easing: "easeInExpo",
        delay: arr_acc.delay
    }).add({
        targets: '.arr_acc .letters-2',
        opacity: arr_acc.opacityIn,
        scale: arr_acc.scaleIn,
        duration: arr_acc.durationIn
    }).add({
        targets: '.arr_acc .letters-2',
        opacity: 0,
        scale: arr_acc.scaleOut,
        duration: arr_acc.durationOut,
        easing: "easeInExpo",
        delay: arr_acc.delay
    }).add({
        targets: '.arr_acc .letters-3',
        opacity: arr_acc.opacityIn,
        scale: arr_acc.scaleIn,
        duration: arr_acc.durationIn
    }).add({
        targets: '.arr_acc .letters-3',
        opacity: 0,
        scale: arr_acc.scaleOut,
        duration: arr_acc.durationOut,
        easing: "easeInExpo",
        delay: arr_acc.delay
    }).add({
        targets: '.arr_acc',
        opacity: 0,
        duration: 500,
        delay: 500
    });