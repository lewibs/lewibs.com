window.onscroll = function () { sticky() };

// Get the header
var header = document.getElementById("navBar");
// Get the offset position of the navbar
var stickyDis = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky() {
    if (window.pageYOffset > stickyDis) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}