var isAnimating = true;

function stopHeartAnimation() {
    var heart = document.getElementById("heart");
    heart.style.animationPlayState = 'paused';
    isAnimating = false;
}

document.getElementById("yesButton").addEventListener("click", function() {
    stopHeartAnimation();
});

document.getElementById("noButton").addEventListener("click", function() {
    if (isAnimating) {
        var yesButton = document.getElementById("yesButton");
        var style = window.getComputedStyle(yesButton, null);
        var matrix = new WebKitCSSMatrix(style.transform);
        var currentScale = matrix.m11; // m11 öğesi ölçeklendirme değerini temsil eder
        var newScale = currentScale + 0.1;

        // Ölçeklendirme miktarına göre butonun konumunu ayarlayın
        var translateX = -50 * (newScale - 1);
        var translateY = 30 * (newScale - 1);

        yesButton.style.transform = `translate(${translateX}px, ${translateY}px) scale(${newScale})`;
    }
});
