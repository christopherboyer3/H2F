const CACHE_NAME = 'ssport-cache-v1';
const ASSETS = [
  "SSPORT (Google Chrome).html",
  "SSPORTStyle.css",
  "manifest.webmanifest",
  ".vs/LCDA/v16/.suo",
  "icons/Age.png",
  "icons/BodyTemperature.png",
  "icons/DesignScenario.png",
  "icons/Distance.png",
  "icons/Down.png",
  "icons/EnergyCost.png",
  "icons/Equipment.png",
  "icons/EquipmentLoad.png",
  "icons/Female.png",
  "icons/Grade.png",
  "icons/Height.png",
  "icons/Humidity.png",
  "icons/Icon.png",
  "icons/LwBody.png",
  "icons/LwBodyCustom.png",
  "icons/LwBodyFighting.png",
  "icons/LwBodyNone.png",
  "icons/LwFoot.png",
  "icons/LwFootBoots.png",
  "icons/LwFootCustom.png",
  "icons/LwFootShoes.png",
  "icons/LwHead.png",
  "icons/LwHeadCap.png",
  "icons/LwHeadCustom.png",
  "icons/LwHeadHelmet.png",
  "icons/LwHeadNone.png",
  "icons/LwPack.png",
  "icons/LwPackApproach.png",
  "icons/LwPackCustom.png",
  "icons/LwPackNone.png",
  "icons/LwPackSustainment.png",
  "icons/LwUniform.png",
  "icons/LwUniformCombat.png",
  "icons/LwUniformCustom.png",
  "icons/LwUniformPT.png",
  "icons/LwWeapon.png",
  "icons/LwWeaponCustom.png",
  "icons/LwWeaponM4.png",
  "icons/LwWeaponNone.png",
  "icons/Main.png",
  "icons/Male.png",
  "icons/MaleSign.png",
  "icons/MetabolicRate.png",
  "icons/References.png",
  "icons/Results.png",
  "icons/Route.png",
  "icons/Route3.png",
  "icons/Settings.png",
  "icons/Sex.png",
  "icons/Soldier.png",
  "icons/Speed.png",
  "icons/Sweat.png",
  "icons/Temperature.png",
  "icons/Terrain.png",
  "icons/Tf.png",
  "icons/TfCustom.png",
  "icons/TfGravel.png",
  "icons/TfPavement.png",
  "icons/TfSlippery.png",
  "icons/TfSwamp.png",
  "icons/Time.png",
  "icons/Units.png",
  "icons/Up.png",
  "icons/Volume.png",
  "icons/Weather.png",
  "icons/Weight.png",
  "icons/Wind.png",
  "Javascript/JBuildItemLists.js",
  "Javascript/JListen.js",
  "Javascript/JLookup.js",
  "Javascript/JNumber.js",
  "Javascript/JRange.js",
  "Javascript/JStartup.js"
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k))))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});