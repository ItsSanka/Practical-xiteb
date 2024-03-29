var cSpeed = 0;
var cWidth = 150;
var cHeight = 150;
var cTotalFrames = 12;
var cFrameWidth = 100;
var cImageSrc = 'resources/images/loader.gif';

var cImageTimeout = false;
var cIndex = 0;
var cXpos = 0;
var cPreloaderTimeout = false;
var SECONDS_BETWEEN_FRAMES = 0;

function startAnimation() {

	document.getElementById('loaderImage').style.backgroundImage = 'url(' + cImageSrc + ')';
	document.getElementById('loaderImage').style.width = cWidth + 'px';
	document.getElementById('loaderImage').style.height = cHeight + 'px';

}

function continueAnimation() {

	cXpos += cFrameWidth;
	cIndex += 1;
	if (cIndex >= cTotalFrames) {
		cXpos = 0;
		cIndex = 0;
	}

	if (document.getElementById('loaderImage'))
		document.getElementById('loaderImage');

	cPreloaderTimeout = setTimeout('continueAnimation()');
}

function stopAnimation() {//stops animation
	clearTimeout(cPreloaderTimeout);
	cPreloaderTimeout = false;
}

function imageLoader(s, fun)//Pre-loads the sprites image
{
	clearTimeout(cImageTimeout);
	cImageTimeout = 0;
	genImage = new Image();
	genImage.onload = function () { cImageTimeout = setTimeout(fun, 0) };
	genImage.onerror = new Function('alert(\'Could not load the image\')');
	genImage.src = s;
}

//The following code starts the animation
new imageLoader(cImageSrc, 'startAnimation()');

setTimeout(function () {
	$(".loader").fadeOut("slow");
}, 1500);
