

// SystemJS support.
window.self = window;
require("src/system.bundle.f45da.js");

if (jsb && jsb.fileUtils && jsb.localStorage) {
    const hotUpdatePath = jsb.localStorage.getItem('hotUpdatePath');
    if (hotUpdatePath && jsb.fileUtils.isDirectoryExist(hotUpdatePath)) {
        const searchPaths = jsb.fileUtils.getSearchPaths();
        if (!searchPaths.includes(hotUpdatePath)) {
            searchPaths.unshift(hotUpdatePath);
            jsb.fileUtils.setSearchPaths(searchPaths);
        }
        console.log("Hot update search paths applied:", searchPaths);
    }
  }
  
const importMapJson = jsb.fileUtils.getStringFromFile("src/import-map.96fa8.json");
const importMap = JSON.parse(importMapJson);
System.warmup({
    importMap,
    importMapUrl: 'src/import-map.96fa8.json',
    defaultHandler: (urlNoSchema) => {
        require(urlNoSchema.startsWith('/') ? urlNoSchema.substr(1) : urlNoSchema);
    },
});

System.import('./application.86f6c.js')
.then(({ Application }) => {
    return new Application();
}).then((application) => {
    return System.import('cc').then((cc) => {
        require('jsb-adapter/engine-adapter.js');
        return application.init(cc);
    }).then(() => {
        return application.start();
    });
}).catch((err) => {
    console.error(err.toString() + ', stack: ' + err.stack);
});
