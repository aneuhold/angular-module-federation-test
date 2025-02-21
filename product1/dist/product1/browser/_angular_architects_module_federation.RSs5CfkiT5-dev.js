var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {}) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __require = /* @__PURE__ */(x => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function (x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = value => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = value => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = x => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/@angular-architects/module-federation-runtime/fesm2022/angular-architects-module-federation-runtime.mjs
var angular_architects_module_federation_runtime_exports = {};
__export(angular_architects_module_federation_runtime_exports, {
  getManifest: () => getManifest,
  initFederation: () => initFederation,
  loadManifest: () => loadManifest,
  loadRemoteEntry: () => loadRemoteEntry,
  loadRemoteModule: () => loadRemoteModule,
  setManifest: () => setManifest
});
function lookupExposedModule(key, exposedModule) {
  return __async(this, null, function* () {
    const container = containerMap[key];
    const factory = yield container.get(exposedModule);
    const Module = factory();
    return Module;
  });
}
function initRemote(container, key) {
  return __async(this, null, function* () {
    if (remoteMap[key]) {
      return container;
    }
    if (!isDefaultScopeInitialized) {
      yield __webpack_init_sharing__("default");
      isDefaultScopeInitialized = true;
    }
    yield container.init(__webpack_share_scopes__.default);
    remoteMap[key] = true;
    return container;
  });
}
function loadRemoteEntry(remoteEntryOrOptions, remoteName) {
  return __async(this, null, function* () {
    if (typeof remoteEntryOrOptions === "string") {
      const remoteEntry = remoteEntryOrOptions;
      return yield loadRemoteScriptEntry(remoteEntry, remoteName);
    } else if (remoteEntryOrOptions.type === "script") {
      const options = remoteEntryOrOptions;
      return yield loadRemoteScriptEntry(options.remoteEntry, options.remoteName);
    } else if (remoteEntryOrOptions.type === "module") {
      const options = remoteEntryOrOptions;
      yield loadRemoteModuleEntry(options.remoteEntry);
    }
  });
}
function loadRemoteModuleEntry(remoteEntry) {
  return __async(this, null, function* () {
    if (containerMap[remoteEntry]) {
      return Promise.resolve();
    }
    return yield import(/* webpackIgnore:true */
    remoteEntry).then(container => {
      initRemote(container, remoteEntry);
      containerMap[remoteEntry] = container;
    });
  });
}
function loadRemoteScriptEntry(remoteEntry, remoteName) {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => {
      if (containerMap[remoteName]) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = remoteEntry;
      script.onerror = reject;
      script.onload = () => {
        const container = window[remoteName];
        initRemote(container, remoteName);
        containerMap[remoteName] = container;
        resolve();
      };
      document.body.appendChild(script);
    });
  });
}
function loadRemoteModule(optionsOrRemoteName, exposedModule) {
  return __async(this, null, function* () {
    let loadRemoteEntryOptions;
    let key;
    let remoteEntry;
    let options;
    if (typeof optionsOrRemoteName === "string") {
      options = {
        type: "manifest",
        remoteName: optionsOrRemoteName,
        exposedModule
      };
    } else {
      options = optionsOrRemoteName;
    }
    if (!options.type) {
      const hasManifest = Object.keys(config).length > 0;
      options.type = hasManifest ? "manifest" : "script";
    }
    if (options.type === "manifest") {
      const manifestEntry = config[options.remoteName];
      if (!manifestEntry) {
        throw new Error("Manifest does not contain " + options.remoteName);
      }
      options = {
        type: manifestEntry.type,
        exposedModule: options.exposedModule,
        remoteEntry: manifestEntry.remoteEntry,
        remoteName: manifestEntry.type === "script" ? options.remoteName : void 0
      };
      remoteEntry = manifestEntry.remoteEntry;
    } else {
      remoteEntry = options.remoteEntry;
    }
    if (options.type === "script") {
      loadRemoteEntryOptions = {
        type: "script",
        remoteEntry: options.remoteEntry,
        remoteName: options.remoteName
      };
      key = options.remoteName;
    } else if (options.type === "module") {
      loadRemoteEntryOptions = {
        type: "module",
        remoteEntry: options.remoteEntry
      };
      key = options.remoteEntry;
    }
    if (remoteEntry) {
      yield loadRemoteEntry(loadRemoteEntryOptions);
    }
    return yield lookupExposedModule(key, options.exposedModule);
  });
}
function setManifest(manifest, skipRemoteEntries = false) {
  return __async(this, null, function* () {
    config = parseConfig(manifest);
    if (!skipRemoteEntries) {
      yield loadRemoteEntries();
    }
  });
}
function getManifest() {
  return config;
}
function initFederation(manifest, skipRemoteEntries = false) {
  return __async(this, null, function* () {
    if (typeof manifest === "string") {
      return loadManifest(manifest, skipRemoteEntries);
    } else {
      return setManifest(manifest, skipRemoteEntries);
    }
  });
}
function loadManifest(configFile, skipRemoteEntries = false) {
  return __async(this, null, function* () {
    const result = yield fetch(configFile);
    if (!result.ok) {
      throw Error("could not load configFile: " + configFile);
    }
    config = parseConfig(yield result.json());
    if (!skipRemoteEntries) {
      yield loadRemoteEntries();
    }
  });
}
function parseConfig(config2) {
  const result = {};
  for (const key in config2) {
    const value = config2[key];
    let entry;
    if (typeof value === "string") {
      entry = {
        remoteEntry: value,
        type: "module"
      };
    } else {
      entry = __spreadProps(__spreadValues({}, value), {
        type: value.type || "module"
      });
    }
    result[key] = entry;
  }
  return result;
}
function loadRemoteEntries() {
  return __async(this, null, function* () {
    const promises = [];
    for (const key in config) {
      const entry = config[key];
      if (entry.type === "module") {
        promises.push(loadRemoteEntry({
          type: "module",
          remoteEntry: entry.remoteEntry
        }));
      } else {
        promises.push(loadRemoteEntry({
          type: "script",
          remoteEntry: entry.remoteEntry,
          remoteName: key
        }));
      }
    }
    yield Promise.all(promises);
  });
}
var config, containerMap, remoteMap, isDefaultScopeInitialized;
var init_angular_architects_module_federation_runtime = __esm({
  "node_modules/@angular-architects/module-federation-runtime/fesm2022/angular-architects-module-federation-runtime.mjs"() {
    config = {};
    containerMap = {};
    remoteMap = {};
    isDefaultScopeInitialized = false;
  }
});

// node_modules/@angular-architects/module-federation/src/index.js
var require_src = __commonJS({
  "node_modules/@angular-architects/module-federation/src/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tslib_1 = __require("tslib");
    tslib_1.__exportStar((init_angular_architects_module_federation_runtime(), __toCommonJS(angular_architects_module_federation_runtime_exports)), exports);
  }
});
export default require_src();