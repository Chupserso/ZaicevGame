gdjs.GameSceneCode = {};
gdjs.GameSceneCode.GDAdventurer1Objects1_1final = [];

gdjs.GameSceneCode.GDBButtonObjects2_1final = [];

gdjs.GameSceneCode.GDBearTrapObjects1_1final = [];

gdjs.GameSceneCode.GDDarkGuardObjects1_1final = [];

gdjs.GameSceneCode.GDFallMarkerObjects1_1final = [];

gdjs.GameSceneCode.GDForestGoblinObjects1_1final = [];

gdjs.GameSceneCode.GDPriestessObjects1_1final = [];

gdjs.GameSceneCode.GDPriestessObjects1= [];
gdjs.GameSceneCode.GDPriestessObjects2= [];
gdjs.GameSceneCode.GDPriestessObjects3= [];
gdjs.GameSceneCode.GDPriestessObjects4= [];
gdjs.GameSceneCode.GDBullet2Objects1= [];
gdjs.GameSceneCode.GDBullet2Objects2= [];
gdjs.GameSceneCode.GDBullet2Objects3= [];
gdjs.GameSceneCode.GDBullet2Objects4= [];
gdjs.GameSceneCode.GDchurchObjects1= [];
gdjs.GameSceneCode.GDchurchObjects2= [];
gdjs.GameSceneCode.GDchurchObjects3= [];
gdjs.GameSceneCode.GDchurchObjects4= [];
gdjs.GameSceneCode.GDRedFloorObjects1= [];
gdjs.GameSceneCode.GDRedFloorObjects2= [];
gdjs.GameSceneCode.GDRedFloorObjects3= [];
gdjs.GameSceneCode.GDRedFloorObjects4= [];
gdjs.GameSceneCode.GDHillsObjects1= [];
gdjs.GameSceneCode.GDHillsObjects2= [];
gdjs.GameSceneCode.GDHillsObjects3= [];
gdjs.GameSceneCode.GDHillsObjects4= [];
gdjs.GameSceneCode.GDFallMarkerObjects1= [];
gdjs.GameSceneCode.GDFallMarkerObjects2= [];
gdjs.GameSceneCode.GDFallMarkerObjects3= [];
gdjs.GameSceneCode.GDFallMarkerObjects4= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects2= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects3= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects4= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects2= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects3= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects4= [];
gdjs.GameSceneCode.GDBearTrapObjects1= [];
gdjs.GameSceneCode.GDBearTrapObjects2= [];
gdjs.GameSceneCode.GDBearTrapObjects3= [];
gdjs.GameSceneCode.GDBearTrapObjects4= [];
gdjs.GameSceneCode.GDAdventurer1Objects1= [];
gdjs.GameSceneCode.GDAdventurer1Objects2= [];
gdjs.GameSceneCode.GDAdventurer1Objects3= [];
gdjs.GameSceneCode.GDAdventurer1Objects4= [];
gdjs.GameSceneCode.GDForestGoblinObjects1= [];
gdjs.GameSceneCode.GDForestGoblinObjects2= [];
gdjs.GameSceneCode.GDForestGoblinObjects3= [];
gdjs.GameSceneCode.GDForestGoblinObjects4= [];
gdjs.GameSceneCode.GDDarkGuardObjects1= [];
gdjs.GameSceneCode.GDDarkGuardObjects2= [];
gdjs.GameSceneCode.GDDarkGuardObjects3= [];
gdjs.GameSceneCode.GDDarkGuardObjects4= [];
gdjs.GameSceneCode.GDArrowObjects1= [];
gdjs.GameSceneCode.GDArrowObjects2= [];
gdjs.GameSceneCode.GDArrowObjects3= [];
gdjs.GameSceneCode.GDArrowObjects4= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects1= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects2= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects3= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects4= [];
gdjs.GameSceneCode.GDAButtonObjects1= [];
gdjs.GameSceneCode.GDAButtonObjects2= [];
gdjs.GameSceneCode.GDAButtonObjects3= [];
gdjs.GameSceneCode.GDAButtonObjects4= [];
gdjs.GameSceneCode.GDBButtonObjects1= [];
gdjs.GameSceneCode.GDBButtonObjects2= [];
gdjs.GameSceneCode.GDBButtonObjects3= [];
gdjs.GameSceneCode.GDBButtonObjects4= [];
gdjs.GameSceneCode.GDTimerObjects1= [];
gdjs.GameSceneCode.GDTimerObjects2= [];
gdjs.GameSceneCode.GDTimerObjects3= [];
gdjs.GameSceneCode.GDTimerObjects4= [];
gdjs.GameSceneCode.GDTutorialTextObjects1= [];
gdjs.GameSceneCode.GDTutorialTextObjects2= [];
gdjs.GameSceneCode.GDTutorialTextObjects3= [];
gdjs.GameSceneCode.GDTutorialTextObjects4= [];
gdjs.GameSceneCode.GDFlatHeartBarObjects1= [];
gdjs.GameSceneCode.GDFlatHeartBarObjects2= [];
gdjs.GameSceneCode.GDFlatHeartBarObjects3= [];
gdjs.GameSceneCode.GDFlatHeartBarObjects4= [];
gdjs.GameSceneCode.GDDeathObjects1= [];
gdjs.GameSceneCode.GDDeathObjects2= [];
gdjs.GameSceneCode.GDDeathObjects3= [];
gdjs.GameSceneCode.GDDeathObjects4= [];


gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AButton"), gdjs.GameSceneCode.GDAButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("BButton"), gdjs.GameSceneCode.GDBButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("FlatLightJoystick"), gdjs.GameSceneCode.GDFlatLightJoystickObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDFlatLightJoystickObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFlatLightJoystickObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDAButtonObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDBButtonObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBButtonObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameSceneCode.GDTutorialTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTutorialTextObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) != 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.GameSceneCode.GDTimerObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(Math.floor(101 - gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene))));
}
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPriestessObjects2Objects = Hashtable.newFrom({"Priestess": gdjs.GameSceneCode.GDPriestessObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBearTrapObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDAdventurer1Objects2ObjectsGDgdjs_9546GameSceneCode_9546GDForestGoblinObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDDarkGuardObjects2Objects = Hashtable.newFrom({"BearTrap": gdjs.GameSceneCode.GDBearTrapObjects2, "Adventurer1": gdjs.GameSceneCode.GDAdventurer1Objects2, "ForestGoblin": gdjs.GameSceneCode.GDForestGoblinObjects2, "DarkGuard": gdjs.GameSceneCode.GDDarkGuardObjects2});
gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.GameSceneCode.GDAdventurer1Objects1.length = 0;

gdjs.GameSceneCode.GDBearTrapObjects1.length = 0;

gdjs.GameSceneCode.GDDarkGuardObjects1.length = 0;

gdjs.GameSceneCode.GDFallMarkerObjects1.length = 0;

gdjs.GameSceneCode.GDForestGoblinObjects1.length = 0;

gdjs.GameSceneCode.GDPriestessObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameSceneCode.GDAdventurer1Objects1_1final.length = 0;
gdjs.GameSceneCode.GDBearTrapObjects1_1final.length = 0;
gdjs.GameSceneCode.GDDarkGuardObjects1_1final.length = 0;
gdjs.GameSceneCode.GDFallMarkerObjects1_1final.length = 0;
gdjs.GameSceneCode.GDForestGoblinObjects1_1final.length = 0;
gdjs.GameSceneCode.GDPriestessObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.GameSceneCode.GDFallMarkerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Priestess"), gdjs.GameSceneCode.GDPriestessObjects2);
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPriestessObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPriestessObjects2[i].getY() > (( gdjs.GameSceneCode.GDFallMarkerObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDFallMarkerObjects2[0].getY()) ) {
        isConditionTrue_1 = true;
        gdjs.GameSceneCode.GDPriestessObjects2[k] = gdjs.GameSceneCode.GDPriestessObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPriestessObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameSceneCode.GDFallMarkerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDFallMarkerObjects1_1final.indexOf(gdjs.GameSceneCode.GDFallMarkerObjects2[j]) === -1 )
            gdjs.GameSceneCode.GDFallMarkerObjects1_1final.push(gdjs.GameSceneCode.GDFallMarkerObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameSceneCode.GDPriestessObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDPriestessObjects1_1final.indexOf(gdjs.GameSceneCode.GDPriestessObjects2[j]) === -1 )
            gdjs.GameSceneCode.GDPriestessObjects1_1final.push(gdjs.GameSceneCode.GDPriestessObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Adventurer1"), gdjs.GameSceneCode.GDAdventurer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("BearTrap"), gdjs.GameSceneCode.GDBearTrapObjects2);
gdjs.copyArray(runtimeScene.getObjects("DarkGuard"), gdjs.GameSceneCode.GDDarkGuardObjects2);
gdjs.copyArray(runtimeScene.getObjects("ForestGoblin"), gdjs.GameSceneCode.GDForestGoblinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Priestess"), gdjs.GameSceneCode.GDPriestessObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPriestessObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBearTrapObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDAdventurer1Objects2ObjectsGDgdjs_9546GameSceneCode_9546GDForestGoblinObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDDarkGuardObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameSceneCode.GDAdventurer1Objects2.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDAdventurer1Objects1_1final.indexOf(gdjs.GameSceneCode.GDAdventurer1Objects2[j]) === -1 )
            gdjs.GameSceneCode.GDAdventurer1Objects1_1final.push(gdjs.GameSceneCode.GDAdventurer1Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameSceneCode.GDBearTrapObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDBearTrapObjects1_1final.indexOf(gdjs.GameSceneCode.GDBearTrapObjects2[j]) === -1 )
            gdjs.GameSceneCode.GDBearTrapObjects1_1final.push(gdjs.GameSceneCode.GDBearTrapObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameSceneCode.GDDarkGuardObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDDarkGuardObjects1_1final.indexOf(gdjs.GameSceneCode.GDDarkGuardObjects2[j]) === -1 )
            gdjs.GameSceneCode.GDDarkGuardObjects1_1final.push(gdjs.GameSceneCode.GDDarkGuardObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameSceneCode.GDForestGoblinObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDForestGoblinObjects1_1final.indexOf(gdjs.GameSceneCode.GDForestGoblinObjects2[j]) === -1 )
            gdjs.GameSceneCode.GDForestGoblinObjects1_1final.push(gdjs.GameSceneCode.GDForestGoblinObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameSceneCode.GDPriestessObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDPriestessObjects1_1final.indexOf(gdjs.GameSceneCode.GDPriestessObjects2[j]) === -1 )
            gdjs.GameSceneCode.GDPriestessObjects1_1final.push(gdjs.GameSceneCode.GDPriestessObjects2[j]);
    }
}
}
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) >= 100);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameSceneCode.GDAdventurer1Objects1_1final, gdjs.GameSceneCode.GDAdventurer1Objects1);
gdjs.copyArray(gdjs.GameSceneCode.GDBearTrapObjects1_1final, gdjs.GameSceneCode.GDBearTrapObjects1);
gdjs.copyArray(gdjs.GameSceneCode.GDDarkGuardObjects1_1final, gdjs.GameSceneCode.GDDarkGuardObjects1);
gdjs.copyArray(gdjs.GameSceneCode.GDFallMarkerObjects1_1final, gdjs.GameSceneCode.GDFallMarkerObjects1);
gdjs.copyArray(gdjs.GameSceneCode.GDForestGoblinObjects1_1final, gdjs.GameSceneCode.GDForestGoblinObjects1);
gdjs.copyArray(gdjs.GameSceneCode.GDPriestessObjects1_1final, gdjs.GameSceneCode.GDPriestessObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15304636);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Fail", false, 75, 0.8);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPriestessObjects1Objects = Hashtable.newFrom({"Priestess": gdjs.GameSceneCode.GDPriestessObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDchurchObjects1Objects = Hashtable.newFrom({"church": gdjs.GameSceneCode.GDchurchObjects1});
gdjs.GameSceneCode.asyncCallback15306996 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}
gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.GameSceneCode.asyncCallback15306996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Priestess"), gdjs.GameSceneCode.GDPriestessObjects1);
gdjs.copyArray(runtimeScene.getObjects("church"), gdjs.GameSceneCode.GDchurchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPriestessObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDchurchObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15306076);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "WinGame", false, 50, 1);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.1);
}
{ //Subevents
gdjs.GameSceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet2Objects3Objects = Hashtable.newFrom({"Bullet2": gdjs.GameSceneCode.GDBullet2Objects3});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet2Objects3Objects = Hashtable.newFrom({"Bullet2": gdjs.GameSceneCode.GDBullet2Objects3});
gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Priestess"), gdjs.GameSceneCode.GDPriestessObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPriestessObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPriestessObjects3[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPriestessObjects3[k] = gdjs.GameSceneCode.GDPriestessObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPriestessObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPriestessObjects3 */
gdjs.GameSceneCode.GDBullet2Objects3.length = 0;

{for(var i = 0, len = gdjs.GameSceneCode.GDPriestessObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPriestessObjects3[i].getBehavior("FireBullet").Fire((gdjs.GameSceneCode.GDPriestessObjects3[i].getCenterXInScene()) - 75 / 2, (gdjs.GameSceneCode.GDPriestessObjects3[i].getCenterYInScene()) - 75 / 2, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet2Objects3Objects, 180, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDBullet2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBullet2Objects3[i].setScale(75 / Math.max((gdjs.GameSceneCode.GDBullet2Objects3[i].getWidth()), (gdjs.GameSceneCode.GDBullet2Objects3[i].getHeight())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Priestess"), gdjs.GameSceneCode.GDPriestessObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPriestessObjects3.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDPriestessObjects3[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPriestessObjects3[k] = gdjs.GameSceneCode.GDPriestessObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPriestessObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPriestessObjects3 */
gdjs.GameSceneCode.GDBullet2Objects3.length = 0;

{for(var i = 0, len = gdjs.GameSceneCode.GDPriestessObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPriestessObjects3[i].getBehavior("FireBullet").Fire((gdjs.GameSceneCode.GDPriestessObjects3[i].getCenterXInScene()), (gdjs.GameSceneCode.GDPriestessObjects3[i].getCenterYInScene()) - 75 / 2, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet2Objects3Objects, 0, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDBullet2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBullet2Objects3[i].setScale(75 / Math.max((gdjs.GameSceneCode.GDBullet2Objects3[i].getWidth()), (gdjs.GameSceneCode.GDBullet2Objects3[i].getHeight())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Priestess"), gdjs.GameSceneCode.GDPriestessObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPriestessObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPriestessObjects2[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPriestessObjects2[k] = gdjs.GameSceneCode.GDPriestessObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPriestessObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bullet2"), gdjs.GameSceneCode.GDBullet2Objects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDBullet2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBullet2Objects2[i].setZOrder(2000);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "GunFire", false, 40, gdjs.randomFloatInRange(0.8, 1));
}}

}


};gdjs.GameSceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15307660);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "MobileControls");
}}

}


{



}


{

gdjs.GameSceneCode.GDBButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameSceneCode.GDBButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BButton"), gdjs.GameSceneCode.GDBButtonObjects3);
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDBButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDBButtonObjects3[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.GameSceneCode.GDBButtonObjects3[k] = gdjs.GameSceneCode.GDBButtonObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDBButtonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameSceneCode.GDBButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDBButtonObjects2_1final.indexOf(gdjs.GameSceneCode.GDBButtonObjects3[j]) === -1 )
            gdjs.GameSceneCode.GDBButtonObjects2_1final.push(gdjs.GameSceneCode.GDBButtonObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameSceneCode.GDBButtonObjects2_1final, gdjs.GameSceneCode.GDBButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Priestess"), gdjs.GameSceneCode.GDPriestessObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPriestessObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPriestessObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPriestessObjects2[k] = gdjs.GameSceneCode.GDPriestessObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPriestessObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15312652);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPriestessObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPriestessObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPriestessObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Priestess"), gdjs.GameSceneCode.GDPriestessObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPriestessObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPriestessObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPriestessObjects1[k] = gdjs.GameSceneCode.GDPriestessObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPriestessObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15313452);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPriestessObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPriestessObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPriestessObjects1[i].flipX(false);
}
}}

}


};gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Left"), gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Right"), gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Priestess"), gdjs.GameSceneCode.GDPriestessObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1[0].getAABBRight()), (( gdjs.GameSceneCode.GDPriestessObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPriestessObjects1[0].getPointY("")) - 500, (( gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1[0].getAABBLeft()), (( gdjs.GameSceneCode.GDPriestessObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPriestessObjects1[0].getPointY("")) + 500, "", 0);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPriestessObjects2Objects = Hashtable.newFrom({"Priestess": gdjs.GameSceneCode.GDPriestessObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAdventurer1Objects2Objects = Hashtable.newFrom({"Adventurer1": gdjs.GameSceneCode.GDAdventurer1Objects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDDarkGuardObjects2Objects = Hashtable.newFrom({"DarkGuard": gdjs.GameSceneCode.GDDarkGuardObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet2Objects2Objects = Hashtable.newFrom({"Bullet2": gdjs.GameSceneCode.GDBullet2Objects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAdventurer1Objects2ObjectsGDgdjs_9546GameSceneCode_9546GDForestGoblinObjects2Objects = Hashtable.newFrom({"Adventurer1": gdjs.GameSceneCode.GDAdventurer1Objects2, "ForestGoblin": gdjs.GameSceneCode.GDForestGoblinObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDDeathObjects1Objects = Hashtable.newFrom({"Death": gdjs.GameSceneCode.GDDeathObjects1});
gdjs.GameSceneCode.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Adventurer1"), gdjs.GameSceneCode.GDAdventurer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("ForestGoblin"), gdjs.GameSceneCode.GDForestGoblinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Priestess"), gdjs.GameSceneCode.GDPriestessObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPriestessObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAdventurer1Objects2Objects, 700, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDAdventurer1Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDAdventurer1Objects2[i].getVariableBoolean(gdjs.GameSceneCode.GDAdventurer1Objects2[i].getVariables().get("Activated"), false) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDAdventurer1Objects2[k] = gdjs.GameSceneCode.GDAdventurer1Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDAdventurer1Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDForestGoblinObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDForestGoblinObjects2[i].getVariableBoolean(gdjs.GameSceneCode.GDForestGoblinObjects2[i].getVariables().get("Activated"), false) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDForestGoblinObjects2[k] = gdjs.GameSceneCode.GDForestGoblinObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDForestGoblinObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDAdventurer1Objects2 */
/* Reuse gdjs.GameSceneCode.GDForestGoblinObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDAdventurer1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAdventurer1Objects2[i].setVariableBoolean(gdjs.GameSceneCode.GDAdventurer1Objects2[i].getVariables().get("Activated"), true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDForestGoblinObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDForestGoblinObjects2[i].setVariableBoolean(gdjs.GameSceneCode.GDForestGoblinObjects2[i].getVariables().get("Activated"), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Adventurer1"), gdjs.GameSceneCode.GDAdventurer1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDAdventurer1Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDAdventurer1Objects2[i].getVariableBoolean(gdjs.GameSceneCode.GDAdventurer1Objects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDAdventurer1Objects2[k] = gdjs.GameSceneCode.GDAdventurer1Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDAdventurer1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDAdventurer1Objects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDAdventurer1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAdventurer1Objects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ForestGoblin"), gdjs.GameSceneCode.GDForestGoblinObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDForestGoblinObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDForestGoblinObjects2[i].getVariableBoolean(gdjs.GameSceneCode.GDForestGoblinObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDForestGoblinObjects2[k] = gdjs.GameSceneCode.GDForestGoblinObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDForestGoblinObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDForestGoblinObjects2 */
gdjs.GameSceneCode.GDDarkGuardObjects2.length = 0;

{for(var i = 0, len = gdjs.GameSceneCode.GDForestGoblinObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDForestGoblinObjects2[i].getBehavior("FireBullet").Fire((gdjs.GameSceneCode.GDForestGoblinObjects2[i].getCenterXInScene()) - 75 / 2, (gdjs.GameSceneCode.GDForestGoblinObjects2[i].getCenterYInScene()) - 75 / 2, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDDarkGuardObjects2Objects, 180, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDDarkGuardObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDDarkGuardObjects2[i].setScale(75 / Math.max((gdjs.GameSceneCode.GDDarkGuardObjects2[i].getWidth()), (gdjs.GameSceneCode.GDDarkGuardObjects2[i].getHeight())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ForestGoblin"), gdjs.GameSceneCode.GDForestGoblinObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDForestGoblinObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDForestGoblinObjects2[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDForestGoblinObjects2[k] = gdjs.GameSceneCode.GDForestGoblinObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDForestGoblinObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DarkGuard"), gdjs.GameSceneCode.GDDarkGuardObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDDarkGuardObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDDarkGuardObjects2[i].setZOrder(2000);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Adventurer1"), gdjs.GameSceneCode.GDAdventurer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Bullet2"), gdjs.GameSceneCode.GDBullet2Objects2);
gdjs.copyArray(runtimeScene.getObjects("ForestGoblin"), gdjs.GameSceneCode.GDForestGoblinObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet2Objects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAdventurer1Objects2ObjectsGDgdjs_9546GameSceneCode_9546GDForestGoblinObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDAdventurer1Objects2 */
/* Reuse gdjs.GameSceneCode.GDBullet2Objects2 */
/* Reuse gdjs.GameSceneCode.GDForestGoblinObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDAdventurer1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAdventurer1Objects2[i].returnVariable(gdjs.GameSceneCode.GDAdventurer1Objects2[i].getVariables().get("Health")).sub(1);
}
for(var i = 0, len = gdjs.GameSceneCode.GDForestGoblinObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDForestGoblinObjects2[i].returnVariable(gdjs.GameSceneCode.GDForestGoblinObjects2[i].getVariables().get("Health")).sub(1);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDBullet2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBullet2Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Adventurer1"), gdjs.GameSceneCode.GDAdventurer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.GameSceneCode.GDFallMarkerObjects2);
gdjs.copyArray(runtimeScene.getObjects("ForestGoblin"), gdjs.GameSceneCode.GDForestGoblinObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDAdventurer1Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDAdventurer1Objects2[i].getY() > (( gdjs.GameSceneCode.GDFallMarkerObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDFallMarkerObjects2[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDAdventurer1Objects2[k] = gdjs.GameSceneCode.GDAdventurer1Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDAdventurer1Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDForestGoblinObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDForestGoblinObjects2[i].getY() > (( gdjs.GameSceneCode.GDFallMarkerObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDFallMarkerObjects2[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDForestGoblinObjects2[k] = gdjs.GameSceneCode.GDForestGoblinObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDForestGoblinObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDAdventurer1Objects2 */
/* Reuse gdjs.GameSceneCode.GDForestGoblinObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDAdventurer1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAdventurer1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDForestGoblinObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDForestGoblinObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Adventurer1"), gdjs.GameSceneCode.GDAdventurer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("ForestGoblin"), gdjs.GameSceneCode.GDForestGoblinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDAdventurer1Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDAdventurer1Objects1[i].getVariableNumber(gdjs.GameSceneCode.GDAdventurer1Objects1[i].getVariables().get("Health")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDAdventurer1Objects1[k] = gdjs.GameSceneCode.GDAdventurer1Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDAdventurer1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDForestGoblinObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDForestGoblinObjects1[i].getVariableNumber(gdjs.GameSceneCode.GDForestGoblinObjects1[i].getVariables().get("Health")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDForestGoblinObjects1[k] = gdjs.GameSceneCode.GDForestGoblinObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDForestGoblinObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDAdventurer1Objects1 */
/* Reuse gdjs.GameSceneCode.GDForestGoblinObjects1 */
gdjs.GameSceneCode.GDDeathObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDDeathObjects1Objects, (( gdjs.GameSceneCode.GDForestGoblinObjects1.length === 0 ) ? (( gdjs.GameSceneCode.GDAdventurer1Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDAdventurer1Objects1[0].getCenterXInScene()) :gdjs.GameSceneCode.GDForestGoblinObjects1[0].getCenterXInScene()), (( gdjs.GameSceneCode.GDForestGoblinObjects1.length === 0 ) ? (( gdjs.GameSceneCode.GDAdventurer1Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDAdventurer1Objects1[0].getCenterYInScene()) :gdjs.GameSceneCode.GDForestGoblinObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDAdventurer1Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAdventurer1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDForestGoblinObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDForestGoblinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "EnemyDeath", false, 50, gdjs.randomFloatInRange(0.9, 1));
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDDarkGuardObjects1Objects = Hashtable.newFrom({"Bullet2": gdjs.GameSceneCode.GDBullet2Objects1, "DarkGuard": gdjs.GameSceneCode.GDDarkGuardObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPriestessObjects1Objects = Hashtable.newFrom({"Priestess": gdjs.GameSceneCode.GDPriestessObjects1});
gdjs.GameSceneCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet2"), gdjs.GameSceneCode.GDBullet2Objects1);
gdjs.copyArray(runtimeScene.getObjects("DarkGuard"), gdjs.GameSceneCode.GDDarkGuardObjects1);
gdjs.copyArray(runtimeScene.getObjects("Priestess"), gdjs.GameSceneCode.GDPriestessObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDDarkGuardObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPriestessObjects1Objects, 1000, true);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBullet2Objects1 */
/* Reuse gdjs.GameSceneCode.GDDarkGuardObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDBullet2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBullet2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDDarkGuardObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDDarkGuardObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameSceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.GameSceneCode.GDFallMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Priestess"), gdjs.GameSceneCode.GDPriestessObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedFloor"), gdjs.GameSceneCode.GDRedFloorObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameSceneCode.GDRedFloorObjects1.length !== 0 ? gdjs.GameSceneCode.GDRedFloorObjects1[0] : null), true, "Background", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameSceneCode.GDPriestessObjects1.length !== 0 ? gdjs.GameSceneCode.GDPriestessObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.GameSceneCode.GDPriestessObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPriestessObjects1[i].setZOrder(1000);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDFallMarkerObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFallMarkerObjects1[i].hide();
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("RedFloor"), gdjs.GameSceneCode.GDRedFloorObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRedFloorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRedFloorObjects1[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) + 50);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDRedFloorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRedFloorObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 3);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDRedFloorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRedFloorObjects1[i].setYOffset(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) / 3);
}
}}

}


{


gdjs.GameSceneCode.eventsList1(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList2(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList4(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList6(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList7(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList8(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList9(runtimeScene);
}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDPriestessObjects1.length = 0;
gdjs.GameSceneCode.GDPriestessObjects2.length = 0;
gdjs.GameSceneCode.GDPriestessObjects3.length = 0;
gdjs.GameSceneCode.GDPriestessObjects4.length = 0;
gdjs.GameSceneCode.GDBullet2Objects1.length = 0;
gdjs.GameSceneCode.GDBullet2Objects2.length = 0;
gdjs.GameSceneCode.GDBullet2Objects3.length = 0;
gdjs.GameSceneCode.GDBullet2Objects4.length = 0;
gdjs.GameSceneCode.GDchurchObjects1.length = 0;
gdjs.GameSceneCode.GDchurchObjects2.length = 0;
gdjs.GameSceneCode.GDchurchObjects3.length = 0;
gdjs.GameSceneCode.GDchurchObjects4.length = 0;
gdjs.GameSceneCode.GDRedFloorObjects1.length = 0;
gdjs.GameSceneCode.GDRedFloorObjects2.length = 0;
gdjs.GameSceneCode.GDRedFloorObjects3.length = 0;
gdjs.GameSceneCode.GDRedFloorObjects4.length = 0;
gdjs.GameSceneCode.GDHillsObjects1.length = 0;
gdjs.GameSceneCode.GDHillsObjects2.length = 0;
gdjs.GameSceneCode.GDHillsObjects3.length = 0;
gdjs.GameSceneCode.GDHillsObjects4.length = 0;
gdjs.GameSceneCode.GDFallMarkerObjects1.length = 0;
gdjs.GameSceneCode.GDFallMarkerObjects2.length = 0;
gdjs.GameSceneCode.GDFallMarkerObjects3.length = 0;
gdjs.GameSceneCode.GDFallMarkerObjects4.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects4.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects4.length = 0;
gdjs.GameSceneCode.GDBearTrapObjects1.length = 0;
gdjs.GameSceneCode.GDBearTrapObjects2.length = 0;
gdjs.GameSceneCode.GDBearTrapObjects3.length = 0;
gdjs.GameSceneCode.GDBearTrapObjects4.length = 0;
gdjs.GameSceneCode.GDAdventurer1Objects1.length = 0;
gdjs.GameSceneCode.GDAdventurer1Objects2.length = 0;
gdjs.GameSceneCode.GDAdventurer1Objects3.length = 0;
gdjs.GameSceneCode.GDAdventurer1Objects4.length = 0;
gdjs.GameSceneCode.GDForestGoblinObjects1.length = 0;
gdjs.GameSceneCode.GDForestGoblinObjects2.length = 0;
gdjs.GameSceneCode.GDForestGoblinObjects3.length = 0;
gdjs.GameSceneCode.GDForestGoblinObjects4.length = 0;
gdjs.GameSceneCode.GDDarkGuardObjects1.length = 0;
gdjs.GameSceneCode.GDDarkGuardObjects2.length = 0;
gdjs.GameSceneCode.GDDarkGuardObjects3.length = 0;
gdjs.GameSceneCode.GDDarkGuardObjects4.length = 0;
gdjs.GameSceneCode.GDArrowObjects1.length = 0;
gdjs.GameSceneCode.GDArrowObjects2.length = 0;
gdjs.GameSceneCode.GDArrowObjects3.length = 0;
gdjs.GameSceneCode.GDArrowObjects4.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects1.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects2.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects3.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects4.length = 0;
gdjs.GameSceneCode.GDAButtonObjects1.length = 0;
gdjs.GameSceneCode.GDAButtonObjects2.length = 0;
gdjs.GameSceneCode.GDAButtonObjects3.length = 0;
gdjs.GameSceneCode.GDAButtonObjects4.length = 0;
gdjs.GameSceneCode.GDBButtonObjects1.length = 0;
gdjs.GameSceneCode.GDBButtonObjects2.length = 0;
gdjs.GameSceneCode.GDBButtonObjects3.length = 0;
gdjs.GameSceneCode.GDBButtonObjects4.length = 0;
gdjs.GameSceneCode.GDTimerObjects1.length = 0;
gdjs.GameSceneCode.GDTimerObjects2.length = 0;
gdjs.GameSceneCode.GDTimerObjects3.length = 0;
gdjs.GameSceneCode.GDTimerObjects4.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects1.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects2.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects3.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects4.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects1.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects2.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects3.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects4.length = 0;
gdjs.GameSceneCode.GDDeathObjects1.length = 0;
gdjs.GameSceneCode.GDDeathObjects2.length = 0;
gdjs.GameSceneCode.GDDeathObjects3.length = 0;
gdjs.GameSceneCode.GDDeathObjects4.length = 0;

gdjs.GameSceneCode.eventsList10(runtimeScene);

return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
