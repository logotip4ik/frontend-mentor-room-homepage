// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kAaS7":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "e80cae8e147655b4";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"i87aF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mainScss = require("./scss/main.scss");
var _tinySwiper = require("tiny-swiper");
var _tinySwiperDefault = parcelHelpers.interopDefault(_tinySwiper);
var _autoPlay = require("tiny-swiper/lib/modules/autoPlay");
var _autoPlayDefault = parcelHelpers.interopDefault(_autoPlay);
var _navigation = require("tiny-swiper/lib/modules/navigation");
var _navigationDefault = parcelHelpers.interopDefault(_navigation);
let isMenuActive = false;
const ANIMATION_TIMING = 400;
const slideHeading = [
    'Discover innovative ways to decorate',
    'We are available all across the globe',
    'Manufactured with the best materials', 
];
const slideText = [
    'We provide unmatched quality, comfort, and style for property owners\
    across the country. Our experts combine form and function in\
    bringing your vision to life. Create a room in your own style with\
    our collection and make your property a reflection of you and what\
    you love.',
    "With stores all over the world, it's\
    easy for you to find furniture for your home or place of business. Locally,\
    we’re in most major cities throughout the country. Find the branch nearest\
    you using our store locator. Any questions? Don't hesitate to contact us\
    today.",
    'Our modern furniture store\
    provide a high level of quality. Our company has invested in advanced\
    technology to ensure that every product is made as perfect and as consistent\
    as possible. With three decades of experience in this industry, we\
    understand what customers want for their home and office.', 
];
window.addEventListener('DOMContentLoaded', ()=>{
    const slideHeadingElement = document.querySelector('.main__section__text__heading');
    const slideTextElement = document.querySelector('.main__section__text__info');
    const menuOpenButton = document.querySelector('.main__nav__menu-icon');
    const menuCloseButton = document.querySelector('.main__nav__close-icon');
    const menuList = document.querySelector('.main__nav__list');
    const menuListItems = document.querySelectorAll('.main__nav__list__item');
    menuListItems.forEach((item)=>item.addEventListener('click', closeNavbar)
    );
    menuOpenButton.addEventListener('click', openNavbar);
    menuCloseButton.addEventListener('click', closeNavbar);
    const swiper = new _tinySwiperDefault.default('.swiper', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
            waitForTransition: true
        },
        navigation: {
            nextEl: '.arrow-right',
            prevEl: '.arrow-left'
        },
        plugins: [_autoPlayDefault.default, _navigationDefault.default]
    });
    swiper.on('scroll', ({ index  })=>{
        slideTextElement.style.opacity = 0;
        slideHeadingElement.style.opacity = 0;
        setTimeout(()=>{
            slideTextElement.textContent = slideText[index];
            slideHeadingElement.textContent = slideHeading[index];
            slideTextElement.style.opacity = 1;
            slideHeadingElement.style.opacity = 1;
        }, ANIMATION_TIMING);
    });
    function openNavbar() {
        document.body.style.overflowY = 'hidden';
        const navOverflow = document.createElement('div');
        navOverflow.className = 'DELETE_ME';
        navOverflow.style.height = '100vh';
        navOverflow.style.width = '100vw';
        navOverflow.style.position = 'fixed';
        navOverflow.style.top = 0;
        navOverflow.style.left = 0;
        navOverflow.style.opacity = 0;
        navOverflow.style.backgroundColor = 'hsla(0, 0%, 0%, 0.75)';
        navOverflow.style.transition = 'opacity 0.4s ease';
        document.body.appendChild(navOverflow);
        setTimeout(()=>{
            navOverflow.style.opacity = 1;
        }, 100);
        isMenuActive = !isMenuActive;
        menuOpenButton.style.opacity = 0;
        setTimeout(()=>{
            menuOpenButton.style.display = isMenuActive ? 'none' : 'block';
            menuCloseButton.style.display = isMenuActive ? 'block' : 'none';
            menuOpenButton.style.opacity = 1;
        }, ANIMATION_TIMING);
        menuList.classList.toggle('main__nav__list--active');
    }
    function closeNavbar() {
        if (window.innerWidth > 830) return;
        const navOverflow = document.querySelector('.DELETE_ME');
        navOverflow.style.opacity = 0;
        setTimeout(()=>navOverflow.remove()
        , ANIMATION_TIMING);
        document.body.style.overflowY = 'auto';
        isMenuActive = !isMenuActive;
        menuCloseButton.style.opacity = 0;
        setTimeout(()=>{
            menuOpenButton.style.display = isMenuActive ? 'none' : 'block';
            menuCloseButton.style.display = isMenuActive ? 'block' : 'none';
            menuCloseButton.style.opacity = 1;
        }, ANIMATION_TIMING);
        menuList.classList.toggle('main__nav__list--active');
    }
});

},{"./scss/main.scss":"bKzMy","tiny-swiper":"98Tzn","tiny-swiper/lib/modules/autoPlay":"8FVcX","tiny-swiper/lib/modules/navigation":"by3vK","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bKzMy":[function() {},{}],"98Tzn":[function(require,module,exports) {
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(this, function() {
    "use strict";
    function S() {
        return (S = Object.assign || function(e) {
            for(var t = 1; t < arguments.length; t++){
                var n, i = arguments[t];
                for(n in i)Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
        }).apply(this, arguments);
    }
    function l(t, e) {
        (void 0) === e && (e = []), Array.isArray(e) || (e = [
            e
        ]), e.forEach(function(e1) {
            return !t.classList.contains(e1) && t.classList.add(e1);
        });
    }
    function p(e, t, n, i) {
        e.addEventListener(t, n, i);
    }
    function m(e, t, n) {
        e.removeEventListener(t, n);
    }
    function u(e, t, n) {
        return (void 0) === n && (n = ""), e.setAttribute(t, n), e;
    }
    function f(t, n, e) {
        return Object.keys(n).forEach(function(e1) {
            t.style[e1] = n[e1];
        }), e && getComputedStyle(t), t;
    }
    var d = {
        direction: "horizontal",
        touchRatio: 1,
        touchAngle: 45,
        longSwipesRatio: 0.5,
        initialSlide: 0,
        loop: !1,
        freeMode: !1,
        passiveListeners: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        speed: 300,
        longSwipesMs: 300,
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: !1,
        slidePrevClass: "swiper-slide-prev",
        slideNextClass: "swiper-slide-next",
        slideActiveClass: "swiper-slide-active",
        slideClass: "swiper-slide",
        wrapperClass: "swiper-wrapper",
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchMoveStopPropagation: !1,
        excludeElements: [],
        injections: {
            translate: function(e, t, n, i) {
                f(t.element.$wrapper, {
                    transition: e.isStart ? "none" : "transform ease " + i + "ms",
                    transform: n.isHorizontal ? "translate3d(" + e.transforms + "px, 0, 0)" : "translate3d(0, " + e.transforms + "px, 0)"
                });
            }
        }
    };
    var h = "before-init", v = "after-init", y = "before-slide", r = "scroll", w = "after-slide", x = "before-destroy", g = "after-destroy";
    function b() {
        var o = {
        };
        return {
            on: function(e, t) {
                o[e] ? o[e].push(t) : o[e] = [
                    t
                ];
            },
            off: function(e, t) {
                !o[e] || -1 < (t = o[e].indexOf(t)) && o[e].splice(t, 1);
            },
            emit: function(e) {
                for(var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++)n[i - 1] = arguments[i];
                o[e] && o[e].forEach(function(e1) {
                    return e1.apply(void 0, n);
                });
            },
            clear: function() {
                o = {
                };
            }
        };
    }
    var o = 180 / Math.PI;
    function z() {
        var i = [];
        return {
            getDuration: function() {
                var e = i[0], t = i[i.length - 1];
                return e ? t.time - e.time : 0;
            },
            getOffset: function() {
                var e = i[0], t = i[i.length - 1];
                return e ? {
                    x: t.x - e.x,
                    y: t.y - e.y
                } : {
                    x: 0,
                    y: 0
                };
            },
            getLogs: function() {
                return i;
            },
            vector: function() {
                var e, t, n;
                return t = (e = i).length - 1, n = e[t], e = e[t - 1] || n, t = {
                    x: n.x - e.x,
                    y: n.y - e.y
                }, n = n.time - e.time, e = t.x / n || 0, n = t.y / n || 0, S({
                }, t, {
                    angle: Math.atan2(Math.abs(t.y), Math.abs(t.x)) * o,
                    velocityX: e,
                    velocityY: n
                });
            },
            clear: function() {
                i = [];
            },
            push: function(e) {
                i.push(S({
                    time: Date.now()
                }, e));
            }
        };
    }
    function a1() {
        return (performance || Date).now();
    }
    function t() {
        var i, e, t1 = requestAnimationFrame || webkitRequestAnimationFrame || setTimeout, n = cancelAnimationFrame || webkitCancelAnimationFrame || clearTimeout;
        return {
            run: function(n1) {
                i = (void 0) === i ? a1() : i, e = t1(function() {
                    var e1 = a1(), t2 = e1 - i;
                    i = e1, n1(t2);
                });
            },
            stop: function() {
                i = void 0, n(e);
            }
        };
    }
    function e() {
        var e1 = t();
        return {
            run: function t1(n) {
                e1.run(function(e2) {
                    t1(n), n(e2);
                });
            },
            stop: function() {
                e1.stop();
            }
        };
    }
    function T(e1, t1) {
        e1 = e1.tracker, t1 = t1.initStatus;
        e1.clear(), t1();
    }
    function P(a1, s, c, l1) {
        var i = l1.initLayout, o1 = l1.initStatus, u1 = l1.render, f1 = l1.scrollPixel, d1 = l1.slideTo, p1 = l1.getOffsetSteps, m1 = e();
        return {
            preheat: function(e1, t1) {
                var n = c.tracker;
                m1.stop(), n.clear(), n.push(e1), i(t1), o1(t1), c.isStart = !0, u1();
            },
            move: function(e1) {
                var t1, n = c.tracker, i1 = a1.touchRatio, o2 = a1.touchAngle, r1 = a1.isHorizontal;
                c.isStart && !c.isScrolling && (n.push(e1), t1 = n.vector(), ((e1 = n.getOffset()).x || e1.y) && (r1 && t1.angle < o2 || !r1 && 90 - t1.angle < o2 || c.isTouching ? (i1 = t1[r1 ? "x" : "y"] * i1, c.isTouching = !0, f1(i1), u1()) : (c.isScrolling = !0, n.clear())));
            },
            stop: function() {
                var t1, e1, n, i1 = c.index, o2 = c.tracker, r1 = s.measure;
                c.isStart && (c.isStart = !1, a1.freeMode ? (t1 = o2.vector()[a1.isHorizontal ? "velocityX" : "velocityY"], m1.run(function(e2) {
                    e2 *= t1;
                    t1 *= 0.98, Math.abs(e2) < 0.01 ? (m1.stop(), T(c, l1)) : (f1(e2), u1(0));
                })) : (e1 = o2.getDuration(), n = o2.getOffset()[a1.isHorizontal ? "x" : "y"], o2 = Math.ceil(Math.abs(n) / r1.boxSize), r1 = p1(n), e1 > a1.longSwipesMs ? d1(i1 + r1 * (0 < n ? -1 : 1)) : d1(0 < n ? i1 - o2 : i1 + o2), T(c, l1)));
            }
        };
    }
    function E(r1, t1, a1, e1) {
        var s = r1.touchable, c = [
            "INPUT",
            "SELECT",
            "OPTION",
            "TEXTAREA",
            "BUTTON",
            "VIDEO"
        ], e1 = P(a1, r1, t1, e1), l1 = e1.preheat, n = e1.move, i = e1.stop;
        function u1(e2) {
            e2 = s ? e2.changedTouches[0] : e2;
            return {
                x: e2.pageX,
                y: e2.pageY
            };
        }
        function o1(e2) {
            for(var t2 = 0; t2 < a1.excludeElements.length; t2++)if (a1.excludeElements[t2].contains(e2.target)) return;
            var n1, i1 = r1.element.$wrapper, o2 = a1.touchStartPreventDefault && -1 === c.indexOf(e2.target.nodeName) || a1.touchStartForcePreventDefault;
            !s && o2 && e2.preventDefault(), l1(u1(e2), (n1 = i1, o2 = a1.isHorizontal, i1 = getComputedStyle(n1).transform.replace(/[a-z]|\(|\)|\s/g, "").split(",").map(parseFloat), n1 = [], 16 === i1.length ? n1 = i1.slice(12, 14) : 6 === i1.length && (n1 = i1.slice(4, 6)), n1[o2 ? 0 : 1] || 0));
        }
        function f1(e2) {
            a1.touchMoveStopPropagation && e2.stopPropagation(), n(u1(e2)), t1.isTouching && !1 !== e2.cancelable && e2.preventDefault();
        }
        function d1() {
            i();
        }
        return {
            attach: function() {
                var e2 = r1.element.$el;
                s ? (p(e2, "touchstart", o1, {
                    passive: a1.passiveListeners,
                    capture: !1
                }), p(e2, "touchmove", f1), p(e2, "touchend", d1), p(e2, "touchcancel", d1)) : (p(e2, "mousedown", o1), p(document, "mousemove", f1), p(document, "mouseup", d1));
            },
            detach: function() {
                var e2 = r1.element.$el;
                m(e2, "touchstart", o1), m(e2, "touchmove", f1), m(e2, "touchend", d1), m(e2, "touchcancel", d1), m(e2, "mousedown", o1), m(document, "mousemove", f1), m(document, "mouseup", d1);
            }
        };
    }
    function s1(e1, t1, n) {
        var i = e1.$list, o1 = t1.viewSize, r1 = t1.slideSize, a1 = t1.boxSize, e1 = (s2 = n).loop ? Math.ceil(s2.slidesPerView) : 0, t1 = e1 * a1, s2 = -t1 + (n.centeredSlides ? (o1 - r1) / 2 : 0);
        return {
            max: s2,
            min: n.spaceBetween + (n.loop ? r1 : o1) + s2 - a1 * i.length,
            base: s2,
            expand: e1,
            buffer: t1,
            minIndex: 0,
            maxIndex: i.length - (n.centeredSlides || n.loop ? 1 : Math.ceil(n.slidesPerView))
        };
    }
    function M(e1, o1) {
        var r1 = {
        };
        function t1(e2) {
            var t2, t2 = (t2 = o1, i = (n = e2).$el, n = t2.isHorizontal ? i.offsetWidth : i.offsetHeight, {
                boxSize: (i = (n - Math.ceil(t2.slidesPerView - 1) * t2.spaceBetween) / t2.slidesPerView) + t2.spaceBetween,
                viewSize: n,
                slideSize: i
            }), n = s1(e2, t2, o1), i = Boolean("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints || window.DocumentTouch && document instanceof DocumentTouch);
            Object.assign(r1, {
                touchable: i,
                element: e2,
                measure: t2,
                limitation: n
            });
        }
        return (r1.update = t1)(e1), r1;
    }
    var C = "data-shallow-slider", A = "data-slider";
    function $(a1, s2) {
        function r1(e1) {
            var t1 = a1.element.$wrapper, o1 = e1.index;
            t1.querySelectorAll("[" + A + "]").forEach(function(e2) {
                var t2, n, i = ~~e2.getAttribute(A);
                t2 = e2, n = [
                    s2.slidePrevClass,
                    s2.slideNextClass,
                    s2.slideActiveClass
                ], Array.isArray(n) || (n = [
                    n
                ]), n.forEach(function(e3) {
                    return t2.classList.contains(e3) && t2.classList.remove(e3);
                }), i === o1 && l(e2, s2.slideActiveClass), i == o1 - 1 && l(e2, s2.slidePrevClass), i === o1 + 1 && l(e2, s2.slideNextClass);
            });
        }
        function c() {
            a1.element.$wrapper.querySelectorAll("[" + C + "]").forEach(function(e1) {
                return a1.element.$wrapper.removeChild(e1);
            });
        }
        function e1() {
            var e2, n, i, t1, o1, r2;
            a1.element.$list.forEach(function(e3, t2) {
                return u(e3, A, t2);
            }), c(), s2.loop && (e2 = a1.element, t1 = a1.limitation, n = e2.$list, i = e2.$wrapper, t1 = t1.expand, o1 = n.slice(-t1).map(function(e3) {
                return e3.cloneNode(!0);
            }), r2 = n.slice(0, t1).map(function(e3) {
                return e3.cloneNode(!0);
            }), o1.forEach(function(e3, t2) {
                i.appendChild(u(r2[t2], C)), i.insertBefore(u(o1[t2], C), n[0]);
            }));
        }
        function t1() {
            var e2 = a1.element, t2 = a1.measure, n = e2.$wrapper, i = {
                display: "flex",
                willChange: "transform",
                flexDirection: s2.isHorizontal ? "row" : "column"
            }, o1 = ((e2 = {
            })[s2.isHorizontal ? "width" : "height"] = t2.slideSize + "px", e2[s2.isHorizontal ? "margin-right" : "margin-bottom"] = s2.spaceBetween + "px", e2);
            f(n, i), n.querySelectorAll("[" + A + "]").forEach(function(e3) {
                return f(e3, o1);
            });
        }
        return {
            init: function() {
                e1(), t1();
            },
            render: function(e2, t2, n, i) {
                var o1 = a1.element.$wrapper, t2 = (void 0) === t2 ? s2.speed : t2;
                s2.injections.translate(e2, a1, s2, t2), e2.isStart || r1(e2), i && getComputedStyle(o1).transform, n && setTimeout(n, t2);
            },
            destroy: function() {
                var e2 = a1.element, t2 = e2.$list, n = e2.$wrapper, i = s2.isHorizontal ? "margin-right" : "margin-bottom";
                [
                    "display",
                    "will-change",
                    "flex-direction"
                ].forEach(function(e3) {
                    n.style.removeProperty(e3);
                }), t2.forEach(function(e3) {
                    return e3.style.removeProperty(i);
                }), c();
            },
            updateSize: t1
        };
    }
    function O(e1, t1) {
        var n = e1 - t1.max, t1 = e1 - t1.min;
        return 0 < n ? n : t1 < 0 ? t1 : 0;
    }
    function D(d1, p1, m1, i, h1) {
        function v1(e1) {
            var t1 = d1.measure;
            return Math.ceil(Math.abs(e1) / t1.boxSize - m1.longSwipesRatio);
        }
        function x1(e1, t1, n) {
            i.render(p1, e1, t1, n);
        }
        function g1(e1) {
            var t1, n = d1.limitation, i1 = n.min, o1 = n.max, n = o1 - i1 + (m1.loop ? d1.measure.boxSize : 0), i1 = n + 1;
            p1.transforms = e1, m1.loop ? (t1 = (o1 - e1) % i1 / n, p1.progress = t1 < 0 ? 1 + t1 : 1 < t1 ? t1 - 1 : t1) : (t1 = (o1 - e1) / n, p1.progress = t1 < 0 ? 0 : 1 < t1 ? 1 : t1), h1.emit(r, S({
            }, p1));
        }
        function e1(e2, t1) {
            var n, i1, o1, r1, a1, s2 = d1.measure, c = d1.limitation, l1 = c.maxIndex - c.minIndex + 1, u1 = m1.loop ? (e2 % l1 + l1) % l1 : e2 > c.maxIndex ? c.maxIndex : e2 < c.minIndex ? c.minIndex : e2, f1 = -u1 * s2.boxSize + c.base;
            0 !== v1(f1 - p1.transforms) && m1.loop && (n = O(p1.transforms, c), i1 = u1 - p1.index, o1 = p1.index, r1 = u1, a1 = i1, e2 = (l1 = c).maxIndex, o1 = (0 < a1 ? 1 : -1) * (l1.minIndex - e2 - 1) + r1 - o1, (a1 = Math.abs(a1) > Math.abs(o1) ? o1 : a1) === i1 || n ? p1.index === u1 && g1(0 < n ? c.min - s2.boxSize + n : c.max + s2.boxSize + n) : g1(a1 < 0 ? c.min - s2.boxSize : c.max + s2.boxSize), x1(0, void 0, !0)), h1.emit(y, p1.index, p1, u1), p1.index = u1, g1(f1), x1(t1, function() {
                h1.emit(w, u1, p1);
            });
        }
        return {
            update: function() {
                e1(p1.index, 0), i.updateSize();
            },
            render: x1,
            transform: g1,
            slideTo: e1,
            scrollPixel: function(e2) {
                var t1, n = p1.transforms, i1 = d1.measure, o1 = d1.limitation, r1 = (t1 = Number(e2.toExponential().split("e")[1])) <= 0 ? Math.pow(10, -(t1 - 1)) : 1, a1 = n;
                m1.resistance && !m1.loop && (0 < e2 && n >= o1.max ? e2 -= Math.pow(e2 * r1, m1.resistanceRatio) / r1 : e2 < 0 && n <= o1.min && (e2 += Math.pow(-e2 * r1, m1.resistanceRatio) / r1)), a1 += e2, m1.loop && (t1 = p1.tracker.vector(), r1 = m1.isHorizontal ? t1.velocityX : t1.velocityY, (e2 = O(n, o1)) && (t1 = n, n = o1, 0 < r1 && t1 > n.max || r1 < 0 && t1 < n.min) && (a1 = 0 < e2 ? o1.min - i1.boxSize + e2 : o1.max + i1.boxSize + e2)), g1(a1);
            },
            initStatus: function(e2) {
                (void 0) === e2 && (e2 = 0), p1.startTransform = e2, p1.isStart = !1, p1.isScrolling = !1, p1.isTouching = !1;
            },
            initLayout: function(e2) {
                g1(e2);
            },
            getOffsetSteps: v1
        };
    }
    function I(e1, t1) {
        var n = "string" == typeof e1 ? document.body.querySelector(e1) : e1, e1 = n.querySelector("." + t1.wrapperClass), t1 = [].slice.call(n.getElementsByClassName(t1.slideClass));
        return {
            $el: n,
            $wrapper: e1,
            $list: t1
        };
    }
    function H(e1, t1) {
        var n = (a2 = S({
        }, d, a2 = t1), S({
        }, a2, {
            isHorizontal: "horizontal" === a2.direction
        })), i = b(), o1 = M(I(e1, n), n), r1 = {
            tracker: z(),
            index: 0,
            startTransform: 0,
            isStart: !1,
            isScrolling: !1,
            isTouching: !1,
            transforms: 0,
            progress: 0
        }, t1 = i.on, a2 = i.off, s2 = i.emit, c = {
            on: t1,
            off: a2,
            env: o1,
            state: r1,
            options: n
        };
        (n.plugins || H.plugins || []).forEach(function(e2) {
            return e2(c, n);
        }), s2(h, c);
        var l1 = $(o1, n), u1 = D(o1, r1, n, l1, i), f1 = E(o1, r1, n, u1);
        return r1 = u1.slideTo, Object.assign(c, {
            update: function() {
                l1.destroy(), o1.update(I(e1, n)), l1.init(), u1.update();
            },
            destroy: function() {
                s2(x, c), f1.detach(), l1.destroy(), s2(g, c), i.clear();
            },
            slideTo: r1,
            updateSize: function() {
                o1.update(I(e1, n)), u1.update();
            }
        }), l1.init(), f1.attach(), r1(n.initialSlide, 0), s2(v, c), c;
    }
    return H.use = function(e1) {
        H.plugins = e1;
    }, H;
});

},{}],"8FVcX":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.SwiperPluginAutoPlay = factory());
})(this, function() {
    'use strict';
    function attachListener(el, evtName, handler, opts) {
        el.addEventListener(evtName, handler, opts);
    }
    function detachListener(el, evtName, handler) {
        el.removeEventListener(evtName, handler);
    }
    var LIFE_CYCLES = {
        BEFORE_INIT: 'before-init',
        AFTER_INIT: 'after-init',
        BEFORE_SLIDE: 'before-slide',
        SCROLL: 'scroll',
        AFTER_SLIDE: 'after-slide',
        BEFORE_DESTROY: 'before-destroy',
        AFTER_DESTROY: 'after-destroy'
    };
    /**
     * TinySwiper plugin for auto paly.
     *
     * @param {SwiperInstance} instance
     * @param {Options}
     */ var SwiperPluginAutoPlay = function SwiperPluginAutoPlay1(instance, options) {
        var isEnable = Boolean(options.autoplay);
        if (!isEnable) return;
        var autoPlayOptions = Object.assign({
            delay: 3000,
            disableOnInteraction: true,
            reverseDirection: false,
            stopOnLastSlide: false,
            waitForTransition: true
        }, options.autoplay);
        var hook = autoPlayOptions.waitForTransition ? LIFE_CYCLES.AFTER_SLIDE : LIFE_CYCLES.BEFORE_SLIDE;
        var touchable = instance.env.touchable;
        var $el = instance.env.element.$el;
        var autoPlayState = {
            pause: false,
            timeoutId: void 0
        };
        function play() {
            var state = instance.state, env = instance.env;
            if (!(autoPlayOptions.stopOnLastSlide && state.index >= env.limitation.maxIndex) && !autoPlayState.pause && !autoPlayState.timeoutId) autoPlayState.timeoutId = setTimeout(function() {
                var newIndex = autoPlayOptions.reverseDirection ? state.index - 1 : state.index + 1;
                var computedIndex = newIndex > env.limitation.maxIndex ? env.limitation.minIndex : newIndex < env.limitation.minIndex ? env.limitation.maxIndex : newIndex;
                instance.slideTo(computedIndex);
                autoPlayState.timeoutId = void 0;
            }, autoPlayOptions.delay);
        }
        function onTouchStart() {
            clearTimeout(autoPlayState.timeoutId);
            autoPlayState.pause = true;
            autoPlayState.timeoutId = void 0;
        }
        function onTouchEnd() {
            autoPlayState.pause = false;
            play();
        }
        instance.on(hook, play);
        instance.on(LIFE_CYCLES.AFTER_INIT, function() {
            if (touchable) {
                attachListener($el, 'touchstart', onTouchStart);
                attachListener($el, 'touchend', onTouchEnd);
                attachListener($el, 'touchcancel', onTouchEnd);
            } else {
                attachListener($el, 'mousedown', onTouchStart);
                attachListener(document, 'mouseup', onTouchEnd);
            }
        });
        instance.on(LIFE_CYCLES.AFTER_DESTROY, function() {
            if (touchable) {
                detachListener($el, 'touchstart', onTouchStart);
                detachListener($el, 'touchend', onTouchEnd);
                detachListener($el, 'touchcancel', onTouchEnd);
            } else {
                detachListener($el, 'mousedown', onTouchStart);
                detachListener(document, 'mouseup', onTouchEnd);
            }
        });
    };
    return SwiperPluginAutoPlay;
});

},{}],"by3vK":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.SwiperPluginNavigation = factory());
})(this, function() {
    'use strict';
    function attachListener(el, evtName, handler, opts) {
        el.addEventListener(evtName, handler, opts);
    }
    function detachListener(el, evtName, handler) {
        el.removeEventListener(evtName, handler);
    }
    var SwiperPluginNavigation = function SwiperPluginNavigation1(instance, options) {
        var isEnable = Boolean(options.navigation);
        var navigationInstance = {
            nextEl: null,
            prevEl: null
        };
        var navigationOptions = Object.assign({
            disabledClass: 'swiper-button-disabled'
        }, options.navigation);
        var nextClickHandler = function nextClickHandler1(e) {
            clickHandler(e.target, 'next');
        };
        var prevClickHandler = function prevClickHandler1(e) {
            clickHandler(e.target, 'prev');
        };
        var clickHandler = function clickHandler1(e, type) {
            if (checkIsDisable(e) && !instance.options.loop) return;
            var index = instance.state.index;
            if (type === 'next') instance.slideTo(index + 1);
            if (type === 'prev') instance.slideTo(index - 1);
        };
        var checkNavBtnDisabledClass = function checkNavBtnDisabledClass1(index) {
            var _instance$env$limitat = instance.env.limitation, minIndex = _instance$env$limitat.minIndex, maxIndex = _instance$env$limitat.maxIndex;
            if (navigationInstance && navigationInstance.prevEl && navigationInstance.nextEl) {
                if (navigationInstance.nextEl.classList.contains(navigationOptions.disabledClass) && index >= minIndex) navigationInstance.nextEl.classList.remove(navigationOptions.disabledClass);
                if (navigationInstance.prevEl.classList.contains(navigationOptions.disabledClass) && index <= maxIndex) navigationInstance.prevEl.classList.remove(navigationOptions.disabledClass);
                if (index === minIndex) navigationInstance.prevEl.classList.add(navigationOptions.disabledClass);
                if (index === maxIndex) navigationInstance.nextEl.classList.add(navigationOptions.disabledClass);
            }
        };
        var checkIsDisable = function checkIsDisable1(e) {
            return e.classList.contains(navigationOptions.disabledClass);
        };
        var checkButtonDefaultStatus = function checkButtonDefaultStatus1() {
            var index = instance.state.index;
            var $list = instance.env.element.$list;
            var minIndex = instance.env.limitation.minIndex;
            if (index === minIndex && navigationInstance.prevEl) navigationInstance.prevEl.classList.add(navigationOptions.disabledClass);
            if ($list.length === minIndex && navigationInstance.nextEl) navigationInstance.nextEl.classList.add(navigationOptions.disabledClass);
        };
        instance.on('before-slide', function(currentIndex, state, newIndex) {
            if (!instance.options.loop) checkNavBtnDisabledClass(newIndex);
        });
        instance.on('after-init', function() {
            if (!isEnable) return;
            navigationInstance.nextEl = typeof navigationOptions.nextEl === 'string' ? document.body.querySelector(navigationOptions.nextEl) : navigationOptions.nextEl;
            navigationInstance.prevEl = typeof navigationOptions.prevEl === 'string' ? document.body.querySelector(navigationOptions.prevEl) : navigationOptions.prevEl;
            if (!instance.options.loop) checkButtonDefaultStatus();
            attachListener(navigationInstance.nextEl, 'click', nextClickHandler);
            attachListener(navigationInstance.prevEl, 'click', prevClickHandler);
        });
        instance.on('after-destroy', function() {
            if (navigationInstance && navigationInstance.prevEl && navigationInstance.nextEl) {
                detachListener(navigationInstance.nextEl, 'click', nextClickHandler);
                detachListener(navigationInstance.prevEl, 'click', prevClickHandler);
                delete navigationInstance.nextEl;
                delete navigationInstance.prevEl;
            }
        });
    };
    return SwiperPluginNavigation;
});

},{}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["kAaS7","i87aF"], "i87aF", "parcelRequire484e")

//# sourceMappingURL=index.147655b4.js.map
