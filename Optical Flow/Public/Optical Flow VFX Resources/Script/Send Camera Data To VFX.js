//@input Component.VFXComponent vfx
//@input Component.Camera camera

if (!script.vfx) {
    print("ERROR: Please set the VFX component to the script.");
    return;
}
if (!script.vfx.asset) {
    print("ERROR: Please make sure VFX component contains VFX asset.");
    return;
}
if (!script.camera) {
    print("ERROR: Please set the Camera component to the script.");
    return;
}

var vfxAsset = script.vfx.asset;
var mainCam = script.camera;


function onUpdate() {
	var vBorder = Math.tan(mainCam.fov / 2);
	var hBorder = vBorder * mainCam.aspect;
	var bottomLeft = new vec3(-hBorder, -vBorder * 0.5, -1.1);
    
    vfxAsset.properties.aspect = mainCam.aspect;
    vfxAsset.properties.bottomLeft = bottomLeft;
    vfxAsset.properties.fovScale = hBorder;
}

var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(onUpdate);
