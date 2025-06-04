
var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

  var PACKAGE_PATH;
  if (typeof window === 'object') {
    PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
  } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'game.data';
    var REMOTE_PACKAGE_BASE = 'game.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
    Module['locateFile'](REMOTE_PACKAGE_BASE) :
    ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);

    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;

    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onerror = function(event) {
        throw new Error("NetworkError for: " + packageName);
      }
      xhr.onload = function(event) {
        if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
          var packageData = xhr.response;
          callback(packageData);
        } else {
          throw new Error(xhr.statusText + " : " + xhr.responseURL);
        }
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };

    function runWithFS() {

      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);

      function DataRequest(start, end, crunched, audio) {
        this.start = start;
        this.end = end;
        this.crunched = crunched;
        this.audio = audio;
      }
      DataRequest.prototype = {
        requests: {},
        open: function(mode, name) {
          this.name = name;
          this.requests[name] = this;
          Module['addRunDependency']('fp ' + this.name);
        },
        send: function() {},
        onload: function() {
          var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

        },
        finish: function(byteArray) {
          var that = this;

        Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        Module['removeRunDependency']('fp ' + that.name);

        this.requests[this.name] = null;
      }
    };

    var files = metadata.files;
    for (i = 0; i < files.length; ++i) {
      new DataRequest(files[i].start, files[i].end, files[i].crunched, files[i].audio).open('GET', files[i].filename);
    }


    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    var IDB_RO = "readonly";
    var IDB_RW = "readwrite";
    var DB_NAME = "EM_PRELOAD_CACHE";
    var DB_VERSION = 1;
    var METADATA_STORE_NAME = 'METADATA';
    var PACKAGE_STORE_NAME = 'PACKAGES';
    function openDatabase(callback, errback) {
      try {
        var openRequest = indexedDB.open(DB_NAME, DB_VERSION);
      } catch (e) {
        return errback(e);
      }
      openRequest.onupgradeneeded = function(event) {
        var db = event.target.result;

        if(db.objectStoreNames.contains(PACKAGE_STORE_NAME)) {
          db.deleteObjectStore(PACKAGE_STORE_NAME);
        }
        var packages = db.createObjectStore(PACKAGE_STORE_NAME);

        if(db.objectStoreNames.contains(METADATA_STORE_NAME)) {
          db.deleteObjectStore(METADATA_STORE_NAME);
        }
        var metadata = db.createObjectStore(METADATA_STORE_NAME);
      };
      openRequest.onsuccess = function(event) {
        var db = event.target.result;
        callback(db);
      };
      openRequest.onerror = function(error) {
        errback(error);
      };
    };

    /* Check if there's a cached package, and if so whether it's the latest available */
    function checkCachedPackage(db, packageName, callback, errback) {
      var transaction = db.transaction([METADATA_STORE_NAME], IDB_RO);
      var metadata = transaction.objectStore(METADATA_STORE_NAME);

      var getRequest = metadata.get("metadata/" + packageName);
      getRequest.onsuccess = function(event) {
        var result = event.target.result;
        if (!result) {
          return callback(false);
        } else {
          return callback(PACKAGE_UUID === result.uuid);
        }
      };
      getRequest.onerror = function(error) {
        errback(error);
      };
    };

    function fetchCachedPackage(db, packageName, callback, errback) {
      var transaction = db.transaction([PACKAGE_STORE_NAME], IDB_RO);
      var packages = transaction.objectStore(PACKAGE_STORE_NAME);

      var getRequest = packages.get("package/" + packageName);
      getRequest.onsuccess = function(event) {
        var result = event.target.result;
        callback(result);
      };
      getRequest.onerror = function(error) {
        errback(error);
      };
    };

    function cacheRemotePackage(db, packageName, packageData, packageMeta, callback, errback) {
      var transaction_packages = db.transaction([PACKAGE_STORE_NAME], IDB_RW);
      var packages = transaction_packages.objectStore(PACKAGE_STORE_NAME);

      var putPackageRequest = packages.put(packageData, "package/" + packageName);
      putPackageRequest.onsuccess = function(event) {
        var transaction_metadata = db.transaction([METADATA_STORE_NAME], IDB_RW);
        var metadata = transaction_metadata.objectStore(METADATA_STORE_NAME);
        var putMetadataRequest = metadata.put(packageMeta, "metadata/" + packageName);
        putMetadataRequest.onsuccess = function(event) {
          callback(packageData);
        };
        putMetadataRequest.onerror = function(error) {
          errback(error);
        };
      };
      putPackageRequest.onerror = function(error) {
        errback(error);
      };
    };

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;

        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        if (Module['SPLIT_MEMORY']) Module.printErr('warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting');
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);

        var files = metadata.files;
        for (i = 0; i < files.length; ++i) {
          DataRequest.prototype.requests[files[i].filename].onload();
        }
        Module['removeRunDependency']('datafile_game.data');

      };
      Module['addRunDependency']('datafile_game.data');

      if (!Module.preloadResults) Module.preloadResults = {};

      function preloadFallback(error) {
        console.error(error);
        console.error('falling back to default preload behavior');
        fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, processPackageData, handleError);
      };

      openDatabase(
        function(db) {
          checkCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME,
            function(useCached) {
              Module.preloadResults[PACKAGE_NAME] = {fromCache: useCached};
              if (useCached) {
                console.info('loading ' + PACKAGE_NAME + ' from cache');
                fetchCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME, processPackageData, preloadFallback);
              } else {
                console.info('loading ' + PACKAGE_NAME + ' from remote');
                fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE,
                  function(packageData) {
                    cacheRemotePackage(db, PACKAGE_PATH + PACKAGE_NAME, packageData, {uuid:PACKAGE_UUID}, processPackageData,
                      function(error) {
                        console.error(error);
                        processPackageData(packageData);
                      });
                  }
                  , preloadFallback);
              }
            }
            , preloadFallback);
        }
        , preloadFallback);

      if (Module['setStatus']) Module['setStatus']('Downloading...');

    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }

  }
  loadPackage({"package_uuid":"078f8ade-f4dd-4a5d-9188-a7465cb699c1","remote_package_size":161544739,"files":[{"filename":"","crunched":0,"start":0,"end":19,"audio":false},{"filename":"","crunched":0,"start":19,"end":42,"audio":false},{"filename":"","crunched":0,"start":42,"end":426,"audio":false},{"filename":"","crunched":0,"start":426,"end":499,"audio":false},{"filename":"","crunched":0,"start":499,"end":977,"audio":false},{"filename":"","crunched":0,"start":977,"end":1873,"audio":false},{"filename":"","crunched":0,"start":1873,"end":6599,"audio":false},{"filename":"","crunched":0,"start":6599,"end":6788,"audio":false},{"filename":"","crunched":0,"start":6788,"end":7212,"audio":false},{"filename":"","crunched":0,"start":7212,"end":8861,"audio":false},{"filename":"","crunched":0,"start":8861,"end":9277,"audio":false},{"filename":"","crunched":0,"start":9277,"end":10651,"audio":false},{"filename":"","crunched":0,"start":10651,"end":15549,"audio":false},{"filename":"","crunched":0,"start":15549,"end":16093,"audio":false},{"filename":"","crunched":0,"start":16093,"end":17585,"audio":false},{"filename":"","crunched":0,"start":17585,"end":20368,"audio":false},{"filename":"","crunched":0,"start":20368,"end":22676,"audio":false},{"filename":"","crunched":0,"start":22676,"end":26326,"audio":false},{"filename":"","crunched":0,"start":26326,"end":32030,"audio":false},{"filename":"","crunched":0,"start":32030,"end":32270,"audio":false},{"filename":"","crunched":0,"start":32270,"end":36199,"audio":false},{"filename":"","crunched":0,"start":36199,"end":40128,"audio":false},{"filename":"","crunched":0,"start":40128,"end":43716,"audio":false},{"filename":"","crunched":0,"start":43716,"end":44507,"audio":false},{"filename":"","crunched":0,"start":44507,"end":45849,"audio":false},{"filename":"","crunched":0,"start":45849,"end":49847,"audio":false},{"filename":"","crunched":0,"start":49847,"end":50553,"audio":false},{"filename":"","crunched":0,"start":50553,"end":50733,"audio":false},{"filename":"","crunched":0,"start":50733,"end":113006,"audio":false},{"filename":"","crunched":0,"start":113006,"end":115861,"audio":false},{"filename":"","crunched":0,"start":115861,"end":117314,"audio":false},{"filename":"","crunched":0,"start":117314,"end":181855,"audio":false},{"filename":"","crunched":0,"start":181855,"end":184624,"audio":false},{"filename":"","crunched":0,"start":184624,"end":2420605,"audio":false},{"filename":"","crunched":0,"start":2420605,"end":2574825,"audio":false},{"filename":"","crunched":0,"start":2574825,"end":2575052,"audio":false},{"filename":"","crunched":0,"start":2575052,"end":2583343,"audio":false},{"filename":"","crunched":0,"start":2583343,"end":2630518,"audio":false},{"filename":"","crunched":0,"start":2630518,"end":2630697,"audio":false},{"filename":"","crunched":0,"start":2630697,"end":2632149,"audio":false},{"filename":"","crunched":0,"start":2632149,"end":2632940,"audio":false},{"filename":"","crunched":0,"start":2632940,"end":2634226,"audio":false},{"filename":"","crunched":0,"start":2634226,"end":2635079,"audio":false},{"filename":"","crunched":0,"start":2635079,"end":2639975,"audio":false},{"filename":"","crunched":0,"start":2639975,"end":2640143,"audio":false},{"filename":"","crunched":0,"start":2640143,"end":2640684,"audio":false},{"filename":"","crunched":0,"start":2640684,"end":2640862,"audio":false},{"filename":"","crunched":0,"start":2640862,"end":2641849,"audio":false},{"filename":"","crunched":0,"start":2641849,"end":2642038,"audio":false},{"filename":"","crunched":0,"start":2642038,"end":2642665,"audio":false},{"filename":"","crunched":0,"start":2642665,"end":2642803,"audio":false},{"filename":"","crunched":0,"start":2642803,"end":2643842,"audio":false},{"filename":"","crunched":0,"start":2643842,"end":2644025,"audio":false},{"filename":"","crunched":0,"start":2644025,"end":2814701,"audio":false},{"filename":"","crunched":0,"start":2814701,"end":2817651,"audio":false},{"filename":"","crunched":0,"start":2817651,"end":2818507,"audio":false},{"filename":"","crunched":0,"start":2818507,"end":2818681,"audio":false},{"filename":"","crunched":0,"start":2818681,"end":2937323,"audio":false},{"filename":"","crunched":0,"start":2937323,"end":2941823,"audio":false},{"filename":"","crunched":0,"start":2941823,"end":2942358,"audio":false},{"filename":"","crunched":0,"start":2942358,"end":2942534,"audio":false},{"filename":"","crunched":0,"start":2942534,"end":2947186,"audio":false},{"filename":"","crunched":0,"start":2947186,"end":2947843,"audio":false},{"filename":"","crunched":0,"start":2947843,"end":2982543,"audio":false},{"filename":"","crunched":0,"start":2982543,"end":2983216,"audio":false},{"filename":"","crunched":0,"start":2983216,"end":3141853,"audio":false},{"filename":"","crunched":0,"start":3141853,"end":3143196,"audio":false},{"filename":"","crunched":0,"start":3143196,"end":3144910,"audio":false},{"filename":"","crunched":0,"start":3144910,"end":3337825,"audio":false},{"filename":"","crunched":0,"start":3337825,"end":3412403,"audio":false},{"filename":"","crunched":0,"start":3412403,"end":3413366,"audio":false},{"filename":"","crunched":0,"start":3413366,"end":3467030,"audio":false},{"filename":"","crunched":0,"start":3467030,"end":3503511,"audio":false},{"filename":"","crunched":0,"start":3503511,"end":3504694,"audio":false},{"filename":"","crunched":0,"start":3504694,"end":3506097,"audio":false},{"filename":"","crunched":0,"start":3506097,"end":3510357,"audio":false},{"filename":"","crunched":0,"start":3510357,"end":3510532,"audio":false},{"filename":"","crunched":0,"start":3510532,"end":3570160,"audio":false},{"filename":"","crunched":0,"start":3570160,"end":3571032,"audio":false},{"filename":"","crunched":0,"start":3571032,"end":3571823,"audio":false},{"filename":"","crunched":0,"start":3571823,"end":3576314,"audio":false},{"filename":"","crunched":0,"start":3576314,"end":3846646,"audio":false},{"filename":"","crunched":0,"start":3846646,"end":3846838,"audio":false},{"filename":"","crunched":0,"start":3846838,"end":3973252,"audio":false},{"filename":"","crunched":0,"start":3973252,"end":3974932,"audio":false},{"filename":"","crunched":0,"start":3974932,"end":3976275,"audio":false},{"filename":"","crunched":0,"start":3976275,"end":3978380,"audio":false},{"filename":"","crunched":0,"start":3978380,"end":3982796,"audio":false},{"filename":"","crunched":0,"start":3982796,"end":4022248,"audio":false},{"filename":"","crunched":0,"start":4022248,"end":4023768,"audio":false},{"filename":"","crunched":0,"start":4023768,"end":4223898,"audio":false},{"filename":"","crunched":0,"start":4223898,"end":4225619,"audio":false},{"filename":"","crunched":0,"start":4225619,"end":4226314,"audio":false},{"filename":"","crunched":0,"start":4226314,"end":4278602,"audio":false},{"filename":"","crunched":0,"start":4278602,"end":4279440,"audio":false},{"filename":"","crunched":0,"start":4279440,"end":4296930,"audio":false},{"filename":"","crunched":0,"start":4296930,"end":4297718,"audio":false},{"filename":"","crunched":0,"start":4297718,"end":4303147,"audio":false},{"filename":"","crunched":0,"start":4303147,"end":4314793,"audio":false},{"filename":"","crunched":0,"start":4314793,"end":4318788,"audio":false},{"filename":"","crunched":0,"start":4318788,"end":4319797,"audio":false},{"filename":"","crunched":0,"start":4319797,"end":4320315,"audio":false},{"filename":"","crunched":0,"start":4320315,"end":4482415,"audio":false},{"filename":"","crunched":0,"start":4482415,"end":4486083,"audio":false},{"filename":"","crunched":0,"start":4486083,"end":4486773,"audio":false},{"filename":"","crunched":0,"start":4486773,"end":4487609,"audio":false},{"filename":"","crunched":0,"start":4487609,"end":4487781,"audio":false},{"filename":"","crunched":0,"start":4487781,"end":4562903,"audio":false},{"filename":"","crunched":0,"start":4562903,"end":7796667,"audio":false},{"filename":"","crunched":0,"start":7796667,"end":7797509,"audio":false},{"filename":"","crunched":0,"start":7797509,"end":7797693,"audio":false},{"filename":"","crunched":0,"start":7797693,"end":7799414,"audio":false},{"filename":"","crunched":0,"start":7799414,"end":7800956,"audio":false},{"filename":"","crunched":0,"start":7800956,"end":7806202,"audio":false},{"filename":"","crunched":0,"start":7806202,"end":7807933,"audio":false},{"filename":"","crunched":0,"start":7807933,"end":7967991,"audio":false},{"filename":"","crunched":0,"start":7967991,"end":7973311,"audio":false},{"filename":"","crunched":0,"start":7973311,"end":7974829,"audio":false},{"filename":"","crunched":0,"start":7974829,"end":7982189,"audio":false},{"filename":"","crunched":0,"start":7982189,"end":7983300,"audio":false},{"filename":"","crunched":0,"start":7983300,"end":7986361,"audio":false},{"filename":"","crunched":0,"start":7986361,"end":7987417,"audio":false},{"filename":"","crunched":0,"start":7987417,"end":7988200,"audio":false},{"filename":"","crunched":0,"start":7988200,"end":7988368,"audio":false},{"filename":"","crunched":0,"start":7988368,"end":7993773,"audio":false},{"filename":"","crunched":0,"start":7993773,"end":7996252,"audio":false},{"filename":"","crunched":0,"start":7996252,"end":7996417,"audio":false},{"filename":"","crunched":0,"start":7996417,"end":8043813,"audio":false},{"filename":"","crunched":0,"start":8043813,"end":10435312,"audio":false},{"filename":"","crunched":0,"start":10435312,"end":10449982,"audio":false},{"filename":"","crunched":0,"start":10449982,"end":17189710,"audio":false},{"filename":"","crunched":0,"start":17189710,"end":17191426,"audio":false},{"filename":"","crunched":0,"start":17191426,"end":17191607,"audio":false},{"filename":"","crunched":0,"start":17191607,"end":17244559,"audio":false},{"filename":"","crunched":0,"start":17244559,"end":17248772,"audio":false},{"filename":"","crunched":0,"start":17248772,"end":18242146,"audio":false},{"filename":"","crunched":0,"start":18242146,"end":18243861,"audio":false},{"filename":"","crunched":0,"start":18243861,"end":18244026,"audio":false},{"filename":"","crunched":0,"start":18244026,"end":18246439,"audio":false},{"filename":"","crunched":0,"start":18246439,"end":18246980,"audio":false},{"filename":"","crunched":0,"start":18246980,"end":18249420,"audio":false},{"filename":"","crunched":0,"start":18249420,"end":18249961,"audio":false},{"filename":"","crunched":0,"start":18249961,"end":18250891,"audio":false},{"filename":"","crunched":0,"start":18250891,"end":18251961,"audio":false},{"filename":"","crunched":0,"start":18251961,"end":18255293,"audio":false},{"filename":"","crunched":0,"start":18255293,"end":18258388,"audio":false},{"filename":"","crunched":0,"start":18258388,"end":18258901,"audio":false},{"filename":"","crunched":0,"start":18258901,"end":18259655,"audio":false},{"filename":"","crunched":0,"start":18259655,"end":18259838,"audio":false},{"filename":"","crunched":0,"start":18259838,"end":18260235,"audio":false},{"filename":"","crunched":0,"start":18260235,"end":18557370,"audio":false},{"filename":"","crunched":0,"start":18557370,"end":18686953,"audio":false},{"filename":"","crunched":0,"start":18686953,"end":18711330,"audio":false},{"filename":"","crunched":0,"start":18711330,"end":18762955,"audio":false},{"filename":"","crunched":0,"start":18762955,"end":18768276,"audio":false},{"filename":"","crunched":0,"start":18768276,"end":19038306,"audio":false},{"filename":"","crunched":0,"start":19038306,"end":19041671,"audio":false},{"filename":"","crunched":0,"start":19041671,"end":19041840,"audio":false},{"filename":"","crunched":0,"start":19041840,"end":19047872,"audio":false},{"filename":"","crunched":0,"start":19047872,"end":19164091,"audio":false},{"filename":"","crunched":0,"start":19164091,"end":19164991,"audio":false},{"filename":"","crunched":0,"start":19164991,"end":19339499,"audio":false},{"filename":"","crunched":0,"start":19339499,"end":19340140,"audio":false},{"filename":"","crunched":0,"start":19340140,"end":19344137,"audio":false},{"filename":"","crunched":0,"start":19344137,"end":19348207,"audio":false},{"filename":"","crunched":0,"start":19348207,"end":19351772,"audio":false},{"filename":"","crunched":0,"start":19351772,"end":19387837,"audio":false},{"filename":"","crunched":0,"start":19387837,"end":19630073,"audio":false},{"filename":"","crunched":0,"start":19630073,"end":19686437,"audio":false},{"filename":"","crunched":0,"start":19686437,"end":19687232,"audio":false},{"filename":"","crunched":0,"start":19687232,"end":19687724,"audio":false},{"filename":"","crunched":0,"start":19687724,"end":19688259,"audio":false},{"filename":"","crunched":0,"start":19688259,"end":19689146,"audio":false},{"filename":"","crunched":0,"start":19689146,"end":19859715,"audio":false},{"filename":"","crunched":0,"start":19859715,"end":19860793,"audio":false},{"filename":"","crunched":0,"start":19860793,"end":19885795,"audio":false},{"filename":"","crunched":0,"start":19885795,"end":19886270,"audio":false},{"filename":"","crunched":0,"start":19886270,"end":19886546,"audio":false},{"filename":"","crunched":0,"start":19886546,"end":19886719,"audio":false},{"filename":"","crunched":0,"start":19886719,"end":20030119,"audio":false},{"filename":"","crunched":0,"start":20030119,"end":20182780,"audio":false},{"filename":"","crunched":0,"start":20182780,"end":20182883,"audio":false},{"filename":"","crunched":0,"start":20182883,"end":20183205,"audio":false},{"filename":"","crunched":0,"start":20183205,"end":20185534,"audio":false},{"filename":"","crunched":0,"start":20185534,"end":20314363,"audio":false},{"filename":"","crunched":0,"start":20314363,"end":20314499,"audio":false},{"filename":"","crunched":0,"start":20314499,"end":20315386,"audio":false},{"filename":"","crunched":0,"start":20315386,"end":20363220,"audio":false},{"filename":"","crunched":0,"start":20363220,"end":20363393,"audio":false},{"filename":"","crunched":0,"start":20363393,"end":20693925,"audio":false},{"filename":"","crunched":0,"start":20693925,"end":20694100,"audio":false},{"filename":"","crunched":0,"start":20694100,"end":26804222,"audio":false},{"filename":"","crunched":0,"start":26804222,"end":26806693,"audio":false},{"filename":"","crunched":0,"start":26806693,"end":26807157,"audio":false},{"filename":"","crunched":0,"start":26807157,"end":26807984,"audio":false},{"filename":"","crunched":0,"start":26807984,"end":26808424,"audio":false},{"filename":"","crunched":0,"start":26808424,"end":26812524,"audio":false},{"filename":"","crunched":0,"start":26812524,"end":26812706,"audio":false},{"filename":"","crunched":0,"start":26812706,"end":26813130,"audio":false},{"filename":"","crunched":0,"start":26813130,"end":26814897,"audio":false},{"filename":"","crunched":0,"start":26814897,"end":26862795,"audio":false},{"filename":"","crunched":0,"start":26862795,"end":26917138,"audio":false},{"filename":"","crunched":0,"start":26917138,"end":26953846,"audio":false},{"filename":"","crunched":0,"start":26953846,"end":27166490,"audio":false},{"filename":"","crunched":0,"start":27166490,"end":27337447,"audio":false},{"filename":"","crunched":0,"start":27337447,"end":27339407,"audio":false},{"filename":"","crunched":0,"start":27339407,"end":27339585,"audio":false},{"filename":"","crunched":0,"start":27339585,"end":29130107,"audio":false},{"filename":"","crunched":0,"start":29130107,"end":29133154,"audio":false},{"filename":"","crunched":0,"start":29133154,"end":29133675,"audio":false},{"filename":"","crunched":0,"start":29133675,"end":29141881,"audio":false},{"filename":"","crunched":0,"start":29141881,"end":29271665,"audio":false},{"filename":"","crunched":0,"start":29271665,"end":29402991,"audio":false},{"filename":"","crunched":0,"start":29402991,"end":29404042,"audio":false},{"filename":"","crunched":0,"start":29404042,"end":29404083,"audio":false},{"filename":"","crunched":0,"start":29404083,"end":29404124,"audio":false},{"filename":"","crunched":0,"start":29404124,"end":29406987,"audio":false},{"filename":"","crunched":0,"start":29406987,"end":29420942,"audio":false},{"filename":"","crunched":0,"start":29420942,"end":29423101,"audio":false},{"filename":"","crunched":0,"start":29423101,"end":29429058,"audio":false},{"filename":"","crunched":0,"start":29429058,"end":29430562,"audio":false},{"filename":"","crunched":0,"start":29430562,"end":29593265,"audio":false},{"filename":"","crunched":0,"start":29593265,"end":29716353,"audio":false},{"filename":"","crunched":0,"start":29716353,"end":29852042,"audio":false},{"filename":"","crunched":0,"start":29852042,"end":29988668,"audio":false},{"filename":"","crunched":0,"start":29988668,"end":30126862,"audio":false},{"filename":"","crunched":0,"start":30126862,"end":30304694,"audio":false},{"filename":"","crunched":0,"start":30304694,"end":30492459,"audio":false},{"filename":"","crunched":0,"start":30492459,"end":30688834,"audio":false},{"filename":"","crunched":0,"start":30688834,"end":30884870,"audio":false},{"filename":"","crunched":0,"start":30884870,"end":31080774,"audio":false},{"filename":"","crunched":0,"start":31080774,"end":31280994,"audio":false},{"filename":"","crunched":0,"start":31280994,"end":31399842,"audio":true},{"filename":"","crunched":0,"start":31399842,"end":31406918,"audio":false},{"filename":"","crunched":0,"start":31406918,"end":31409368,"audio":false},{"filename":"","crunched":0,"start":31409368,"end":31411787,"audio":false},{"filename":"","crunched":0,"start":31411787,"end":31437462,"audio":true},{"filename":"","crunched":0,"start":31437462,"end":33828604,"audio":false},{"filename":"","crunched":0,"start":33828604,"end":36064035,"audio":false},{"filename":"","crunched":0,"start":36064035,"end":37854151,"audio":false},{"filename":"","crunched":0,"start":37854151,"end":37984483,"audio":false},{"filename":"","crunched":0,"start":37984483,"end":37995316,"audio":false},{"filename":"","crunched":0,"start":37995316,"end":116208646,"audio":false},{"filename":"","crunched":0,"start":116208646,"end":116267635,"audio":false},{"filename":"","crunched":0,"start":116267635,"end":116272524,"audio":false},{"filename":"","crunched":0,"start":116272524,"end":116597978,"audio":false},{"filename":"","crunched":0,"start":116597978,"end":121318704,"audio":false},{"filename":"","crunched":0,"start":121318704,"end":121325865,"audio":false},{"filename":"","crunched":0,"start":121325865,"end":121326725,"audio":false},{"filename":"","crunched":0,"start":121326725,"end":121395887,"audio":false},{"filename":"","crunched":0,"start":121395887,"end":121413095,"audio":false},{"filename":"","crunched":0,"start":121413095,"end":121452592,"audio":false},{"filename":"","crunched":0,"start":121452592,"end":121488625,"audio":false},{"filename":"","crunched":0,"start":121488625,"end":121527568,"audio":false},{"filename":"","crunched":0,"start":121527568,"end":121730335,"audio":false},{"filename":"","crunched":0,"start":121730335,"end":121887118,"audio":false},{"filename":"","crunched":0,"start":121887118,"end":121924406,"audio":true},{"filename":"","crunched":0,"start":121924406,"end":121944370,"audio":false},{"filename":"","crunched":0,"start":121944370,"end":121956009,"audio":false},{"filename":"","crunched":0,"start":121956009,"end":121958886,"audio":false},{"filename":"","crunched":0,"start":121958886,"end":122021259,"audio":false},{"filename":"","crunched":0,"start":122021259,"end":122083444,"audio":false},{"filename":"","crunched":0,"start":122083444,"end":122212280,"audio":false},{"filename":"","crunched":0,"start":122212280,"end":122236769,"audio":false},{"filename":"","crunched":0,"start":122236769,"end":125477624,"audio":true},{"filename":"","crunched":0,"start":125477624,"end":125486541,"audio":true},{"filename":"","crunched":0,"start":125486541,"end":125491765,"audio":false},{"filename":"","crunched":0,"start":125491765,"end":125494944,"audio":false},{"filename":"","crunched":0,"start":125494944,"end":125496523,"audio":false},{"filename":"","crunched":0,"start":125496523,"end":125500193,"audio":false},{"filename":"","crunched":0,"start":125500193,"end":125511533,"audio":false},{"filename":"","crunched":0,"start":125511533,"end":125512631,"audio":false},{"filename":"","crunched":0,"start":125512631,"end":125525414,"audio":false},{"filename":"","crunched":0,"start":125525414,"end":125553263,"audio":false},{"filename":"","crunched":0,"start":125553263,"end":125554127,"audio":false},{"filename":"","crunched":0,"start":125554127,"end":125562635,"audio":false},{"filename":"","crunched":0,"start":125562635,"end":125562730,"audio":false},{"filename":"","crunched":0,"start":125562730,"end":125618747,"audio":false},{"filename":"","crunched":0,"start":125618747,"end":125619831,"audio":false},{"filename":"","crunched":0,"start":125619831,"end":125628571,"audio":false},{"filename":"","crunched":0,"start":125628571,"end":125630032,"audio":false},{"filename":"","crunched":0,"start":125630032,"end":125631888,"audio":false},{"filename":"","crunched":0,"start":125631888,"end":125632281,"audio":false},{"filename":"","crunched":0,"start":125632281,"end":125632906,"audio":false},{"filename":"","crunched":0,"start":125632906,"end":125633300,"audio":false},{"filename":"","crunched":0,"start":125633300,"end":125633880,"audio":false},{"filename":"","crunched":0,"start":125633880,"end":125634360,"audio":false},{"filename":"","crunched":0,"start":125634360,"end":125635032,"audio":false},{"filename":"","crunched":0,"start":125635032,"end":125635460,"audio":false},{"filename":"","crunched":0,"start":125635460,"end":125636096,"audio":false},{"filename":"","crunched":0,"start":125636096,"end":125636564,"audio":false},{"filename":"","crunched":0,"start":125636564,"end":125637241,"audio":false},{"filename":"","crunched":0,"start":125637241,"end":125637752,"audio":false},{"filename":"","crunched":0,"start":125637752,"end":125638584,"audio":false},{"filename":"","crunched":0,"start":125638584,"end":125639313,"audio":false},{"filename":"","crunched":0,"start":125639313,"end":125640339,"audio":false},{"filename":"","crunched":0,"start":125640339,"end":125640956,"audio":false},{"filename":"","crunched":0,"start":125640956,"end":125641854,"audio":false},{"filename":"","crunched":0,"start":125641854,"end":125642028,"audio":false},{"filename":"","crunched":0,"start":125642028,"end":125642671,"audio":false},{"filename":"","crunched":0,"start":125642671,"end":125643468,"audio":false},{"filename":"","crunched":0,"start":125643468,"end":125644678,"audio":false},{"filename":"","crunched":0,"start":125644678,"end":125644977,"audio":false},{"filename":"","crunched":0,"start":125644977,"end":125645580,"audio":false},{"filename":"","crunched":0,"start":125645580,"end":125646075,"audio":false},{"filename":"","crunched":0,"start":125646075,"end":125646811,"audio":false},{"filename":"","crunched":0,"start":125646811,"end":125648468,"audio":false},{"filename":"","crunched":0,"start":125648468,"end":125648565,"audio":false},{"filename":"","crunched":0,"start":125648565,"end":125654682,"audio":false},{"filename":"","crunched":0,"start":125654682,"end":125655664,"audio":false},{"filename":"","crunched":0,"start":125655664,"end":125658051,"audio":false},{"filename":"","crunched":0,"start":125658051,"end":125658107,"audio":false},{"filename":"","crunched":0,"start":125658107,"end":125659090,"audio":false},{"filename":"","crunched":0,"start":125659090,"end":125660111,"audio":false},{"filename":"","crunched":0,"start":125660111,"end":125660734,"audio":false},{"filename":"","crunched":0,"start":125660734,"end":125662314,"audio":false},{"filename":"","crunched":0,"start":125662314,"end":125665724,"audio":false},{"filename":"","crunched":0,"start":125665724,"end":125666422,"audio":false},{"filename":"","crunched":0,"start":125666422,"end":125668596,"audio":false},{"filename":"","crunched":0,"start":125668596,"end":125669854,"audio":false},{"filename":"","crunched":0,"start":125669854,"end":125670377,"audio":false},{"filename":"","crunched":0,"start":125670377,"end":125670886,"audio":false},{"filename":"","crunched":0,"start":125670886,"end":125671177,"audio":false},{"filename":"","crunched":0,"start":125671177,"end":125671552,"audio":false},{"filename":"","crunched":0,"start":125671552,"end":125672209,"audio":false},{"filename":"","crunched":0,"start":125672209,"end":125672521,"audio":false},{"filename":"","crunched":0,"start":125672521,"end":125673845,"audio":false},{"filename":"","crunched":0,"start":125673845,"end":125675481,"audio":false},{"filename":"","crunched":0,"start":125675481,"end":125675998,"audio":false},{"filename":"","crunched":0,"start":125675998,"end":125679980,"audio":false},{"filename":"","crunched":0,"start":125679980,"end":125682994,"audio":false},{"filename":"","crunched":0,"start":125682994,"end":125683960,"audio":false},{"filename":"","crunched":0,"start":125683960,"end":125684223,"audio":false},{"filename":"","crunched":0,"start":125684223,"end":125684388,"audio":false},{"filename":"","crunched":0,"start":125684388,"end":125691348,"audio":false},{"filename":"","crunched":0,"start":125691348,"end":125691634,"audio":false},{"filename":"","crunched":0,"start":125691634,"end":125691897,"audio":false},{"filename":"","crunched":0,"start":125691897,"end":125694097,"audio":false},{"filename":"","crunched":0,"start":125694097,"end":125695672,"audio":false},{"filename":"","crunched":0,"start":125695672,"end":125696463,"audio":false},{"filename":"","crunched":0,"start":125696463,"end":125701204,"audio":false},{"filename":"","crunched":0,"start":125701204,"end":125701700,"audio":false},{"filename":"","crunched":0,"start":125701700,"end":125714380,"audio":false},{"filename":"","crunched":0,"start":125714380,"end":125717035,"audio":false},{"filename":"","crunched":0,"start":125717035,"end":125718066,"audio":false},{"filename":"","crunched":0,"start":125718066,"end":125728207,"audio":false},{"filename":"","crunched":0,"start":125728207,"end":125728238,"audio":false},{"filename":"","crunched":0,"start":125728238,"end":125735864,"audio":false},{"filename":"","crunched":0,"start":125735864,"end":125736974,"audio":false},{"filename":"","crunched":0,"start":125736974,"end":125741692,"audio":false},{"filename":"","crunched":0,"start":125741692,"end":125744892,"audio":false},{"filename":"","crunched":0,"start":125744892,"end":125745569,"audio":false},{"filename":"","crunched":0,"start":125745569,"end":125746808,"audio":false},{"filename":"","crunched":0,"start":125746808,"end":125747885,"audio":false},{"filename":"","crunched":0,"start":125747885,"end":125753133,"audio":false},{"filename":"","crunched":0,"start":125753133,"end":125754432,"audio":false},{"filename":"","crunched":0,"start":125754432,"end":125755459,"audio":false},{"filename":"","crunched":0,"start":125755459,"end":125755539,"audio":false},{"filename":"","crunched":0,"start":125755539,"end":125755592,"audio":false},{"filename":"","crunched":0,"start":125755592,"end":125755707,"audio":false},{"filename":"","crunched":0,"start":125755707,"end":125755906,"audio":false},{"filename":"","crunched":0,"start":125755906,"end":125755914,"audio":false},{"filename":"","crunched":0,"start":125755914,"end":125755954,"audio":false},{"filename":"","crunched":0,"start":125755954,"end":125757057,"audio":false},{"filename":"","crunched":0,"start":125757057,"end":125757767,"audio":false},{"filename":"","crunched":0,"start":125757767,"end":125758735,"audio":false},{"filename":"","crunched":0,"start":125758735,"end":125763959,"audio":false},{"filename":"","crunched":0,"start":125763959,"end":125765124,"audio":false},{"filename":"","crunched":0,"start":125765124,"end":125770922,"audio":false},{"filename":"","crunched":0,"start":125770922,"end":125774172,"audio":false},{"filename":"","crunched":0,"start":125774172,"end":125785850,"audio":false},{"filename":"","crunched":0,"start":125785850,"end":125886956,"audio":false},{"filename":"","crunched":0,"start":125886956,"end":125893579,"audio":false},{"filename":"","crunched":0,"start":125893579,"end":125893601,"audio":false},{"filename":"","crunched":0,"start":125893601,"end":125893625,"audio":false},{"filename":"","crunched":0,"start":125893625,"end":125893654,"audio":false},{"filename":"","crunched":0,"start":125893654,"end":125894144,"audio":false},{"filename":"","crunched":0,"start":125894144,"end":125894996,"audio":false},{"filename":"","crunched":0,"start":125894996,"end":125895814,"audio":false},{"filename":"","crunched":0,"start":125895814,"end":125897483,"audio":false},{"filename":"","crunched":0,"start":125897483,"end":125898204,"audio":false},{"filename":"","crunched":0,"start":125898204,"end":125899054,"audio":false},{"filename":"","crunched":0,"start":125899054,"end":125903565,"audio":false},{"filename":"","crunched":0,"start":125903565,"end":125911158,"audio":false},{"filename":"","crunched":0,"start":125911158,"end":127235512,"audio":false},{"filename":"","crunched":0,"start":127235512,"end":127535779,"audio":false},{"filename":"","crunched":0,"start":127535779,"end":127584308,"audio":false},{"filename":"","crunched":0,"start":127584308,"end":127593601,"audio":false},{"filename":"","crunched":0,"start":127593601,"end":127653951,"audio":false},{"filename":"","crunched":0,"start":127653951,"end":127733553,"audio":false},{"filename":"","crunched":0,"start":127733553,"end":127785547,"audio":false},{"filename":"","crunched":0,"start":127785547,"end":128131469,"audio":false},{"filename":"","crunched":0,"start":128131469,"end":128141098,"audio":false},{"filename":"","crunched":0,"start":128141098,"end":128147561,"audio":false},{"filename":"","crunched":0,"start":128147561,"end":128162207,"audio":false},{"filename":"","crunched":0,"start":128162207,"end":128170635,"audio":false},{"filename":"","crunched":0,"start":128170635,"end":128179471,"audio":false},{"filename":"","crunched":0,"start":128179471,"end":128180797,"audio":false},{"filename":"","crunched":0,"start":128180797,"end":128180854,"audio":false},{"filename":"","crunched":0,"start":128180854,"end":128187124,"audio":false},{"filename":"","crunched":0,"start":128187124,"end":128188505,"audio":false},{"filename":"","crunched":0,"start":128188505,"end":128191217,"audio":false},{"filename":"","crunched":0,"start":128191217,"end":128194904,"audio":false},{"filename":"","crunched":0,"start":128194904,"end":128195624,"audio":false},{"filename":"","crunched":0,"start":128195624,"end":128204704,"audio":false},{"filename":"","crunched":0,"start":128204704,"end":128206010,"audio":false},{"filename":"","crunched":0,"start":128206010,"end":128207672,"audio":false},{"filename":"","crunched":0,"start":128207672,"end":128211835,"audio":false},{"filename":"","crunched":0,"start":128211835,"end":128224143,"audio":true},{"filename":"","crunched":0,"start":128224143,"end":128244943,"audio":false},{"filename":"","crunched":0,"start":128244943,"end":128262503,"audio":false},{"filename":"","crunched":0,"start":128262503,"end":128289974,"audio":true},{"filename":"","crunched":0,"start":128289974,"end":128466580,"audio":true},{"filename":"","crunched":0,"start":128466580,"end":128531490,"audio":true},{"filename":"","crunched":0,"start":128531490,"end":128556091,"audio":true},{"filename":"","crunched":0,"start":128556091,"end":129113731,"audio":true},{"filename":"","crunched":0,"start":129113731,"end":129378375,"audio":true},{"filename":"","crunched":0,"start":129378375,"end":129378432,"audio":false},{"filename":"","crunched":0,"start":129378432,"end":129401070,"audio":false},{"filename":"","crunched":0,"start":129401070,"end":129433837,"audio":false},{"filename":"","crunched":0,"start":129433837,"end":129437325,"audio":false},{"filename":"","crunched":0,"start":129437325,"end":129438488,"audio":false},{"filename":"","crunched":0,"start":129438488,"end":129439000,"audio":false},{"filename":"","crunched":0,"start":129439000,"end":129439650,"audio":false},{"filename":"","crunched":0,"start":129439650,"end":129443149,"audio":false},{"filename":"","crunched":0,"start":129443149,"end":129446474,"audio":false},{"filename":"","crunched":0,"start":129446474,"end":129447125,"audio":false},{"filename":"","crunched":0,"start":129447125,"end":129448551,"audio":false},{"filename":"","crunched":0,"start":129448551,"end":129453452,"audio":false},{"filename":"","crunched":0,"start":129453452,"end":129778906,"audio":false},{"filename":"","crunched":0,"start":129778906,"end":134499632,"audio":false},{"filename":"","crunched":0,"start":134499632,"end":134506793,"audio":false},{"filename":"","crunched":0,"start":134506793,"end":134507653,"audio":false},{"filename":"","crunched":0,"start":134507653,"end":134518933,"audio":false},{"filename":"","crunched":0,"start":134518933,"end":134523834,"audio":false},{"filename":"","crunched":0,"start":134523834,"end":134910032,"audio":false},{"filename":"","crunched":0,"start":134910032,"end":139656137,"audio":false},{"filename":"","crunched":0,"start":139656137,"end":139659560,"audio":false},{"filename":"","crunched":0,"start":139659560,"end":139666721,"audio":false},{"filename":"","crunched":0,"start":139666721,"end":139667581,"audio":false},{"filename":"","crunched":0,"start":139667581,"end":139680043,"audio":false},{"filename":"","crunched":0,"start":139680043,"end":139681226,"audio":false},{"filename":"","crunched":0,"start":139681226,"end":139698083,"audio":false},{"filename":"","crunched":0,"start":139698083,"end":139701262,"audio":false},{"filename":"","crunched":0,"start":139701262,"end":139720653,"audio":false},{"filename":"","crunched":0,"start":139720653,"end":139730181,"audio":false},{"filename":"","crunched":0,"start":139730181,"end":139731866,"audio":false},{"filename":"","crunched":0,"start":139731866,"end":139731924,"audio":false},{"filename":"","crunched":0,"start":139731924,"end":139732116,"audio":false},{"filename":"","crunched":0,"start":139732116,"end":139732475,"audio":false},{"filename":"","crunched":0,"start":139732475,"end":139732616,"audio":false},{"filename":"","crunched":0,"start":139732616,"end":139732744,"audio":false},{"filename":"","crunched":0,"start":139732744,"end":139732758,"audio":false},{"filename":"","crunched":0,"start":139732758,"end":139732942,"audio":false},{"filename":"","crunched":0,"start":139732942,"end":139739318,"audio":false},{"filename":"","crunched":0,"start":139739318,"end":139739363,"audio":false},{"filename":"","crunched":0,"start":139739363,"end":139739397,"audio":false},{"filename":"","crunched":0,"start":139739397,"end":139740497,"audio":false},{"filename":"","crunched":0,"start":139740497,"end":139742505,"audio":false},{"filename":"","crunched":0,"start":139742505,"end":139743282,"audio":false},{"filename":"","crunched":0,"start":139743282,"end":139744102,"audio":false},{"filename":"","crunched":0,"start":139744102,"end":139744271,"audio":false},{"filename":"","crunched":0,"start":139744271,"end":139748039,"audio":false},{"filename":"","crunched":0,"start":139748039,"end":139749148,"audio":false},{"filename":"","crunched":0,"start":139749148,"end":139757063,"audio":false},{"filename":"","crunched":0,"start":139757063,"end":139758642,"audio":false},{"filename":"","crunched":0,"start":139758642,"end":139758762,"audio":false},{"filename":"","crunched":0,"start":139758762,"end":139759537,"audio":false},{"filename":"","crunched":0,"start":139759537,"end":139766361,"audio":false},{"filename":"","crunched":0,"start":139766361,"end":139766937,"audio":false},{"filename":"","crunched":0,"start":139766937,"end":139768249,"audio":false},{"filename":"","crunched":0,"start":139768249,"end":139768495,"audio":false},{"filename":"","crunched":0,"start":139768495,"end":139770833,"audio":false},{"filename":"","crunched":0,"start":139770833,"end":139771412,"audio":false},{"filename":"","crunched":0,"start":139771412,"end":139773034,"audio":false},{"filename":"","crunched":0,"start":139773034,"end":139774145,"audio":false},{"filename":"","crunched":0,"start":139774145,"end":139777476,"audio":false},{"filename":"","crunched":0,"start":139777476,"end":139777582,"audio":false},{"filename":"","crunched":0,"start":139777582,"end":139778262,"audio":false},{"filename":"","crunched":0,"start":139778262,"end":139778371,"audio":false},{"filename":"","crunched":0,"start":139778371,"end":139782119,"audio":false},{"filename":"","crunched":0,"start":139782119,"end":139782172,"audio":false},{"filename":"","crunched":0,"start":139782172,"end":139829974,"audio":false},{"filename":"","crunched":0,"start":139829974,"end":139877117,"audio":false},{"filename":"","crunched":0,"start":139877117,"end":140070820,"audio":false},{"filename":"","crunched":0,"start":140070820,"end":140118686,"audio":false},{"filename":"","crunched":0,"start":140118686,"end":140166050,"audio":false},{"filename":"","crunched":0,"start":140166050,"end":140447190,"audio":false},{"filename":"","crunched":0,"start":140447190,"end":140883231,"audio":false},{"filename":"","crunched":0,"start":140883231,"end":142235661,"audio":false},{"filename":"","crunched":0,"start":142235661,"end":150121053,"audio":false},{"filename":"","crunched":0,"start":150121053,"end":159780885,"audio":false},{"filename":"","crunched":0,"start":159780885,"end":160112059,"audio":false},{"filename":"","crunched":0,"start":160112059,"end":160413043,"audio":false},{"filename":"","crunched":0,"start":160413043,"end":161084520,"audio":false},{"filename":"","crunched":0,"start":161084520,"end":161108870,"audio":false},{"filename":"","crunched":0,"start":161108870,"end":161173507,"audio":false},{"filename":"","crunched":0,"start":161173507,"end":161248043,"audio":false},{"filename":"","crunched":0,"start":161248043,"end":161323123,"audio":false},{"filename":"","crunched":0,"start":161323123,"end":161376038,"audio":false},{"filename":"","crunched":0,"start":161376038,"end":161432365,"audio":false},{"filename":"","crunched":0,"start":161432365,"end":161483953,"audio":false},{"filename":"","crunched":0,"start":161483953,"end":161538259,"audio":false},{"filename":"","crunched":0,"start":161538259,"end":161544739,"audio":true}]});

})();
