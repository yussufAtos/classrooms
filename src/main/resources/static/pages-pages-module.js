(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js ***!
  \**********************************************************************/
/*! exports provided: TranslateModule, TranslateLoader, TranslateFakeLoader, USE_STORE, USE_DEFAULT_LANG, TranslateService, MissingTranslationHandler, FakeMissingTranslationHandler, TranslateParser, TranslateDefaultParser, TranslateCompiler, TranslateFakeCompiler, TranslateDirective, TranslatePipe, TranslateStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateModule", function() { return TranslateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateLoader", function() { return TranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateFakeLoader", function() { return TranslateFakeLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_STORE", function() { return USE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_DEFAULT_LANG", function() { return USE_DEFAULT_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationHandler", function() { return MissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeMissingTranslationHandler", function() { return FakeMissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateParser", function() { return TranslateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateDefaultParser", function() { return TranslateDefaultParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateCompiler", function() { return TranslateCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateFakeCompiler", function() { return TranslateFakeCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateDirective", function() { return TranslateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateStore", function() { return TranslateStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
TranslateLoader = /** @class */ (function () {
    function TranslateLoader() {
    }
    return TranslateLoader;
}());
/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
var TranslateFakeLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TranslateFakeLoader, _super);
    function TranslateFakeLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateFakeLoader.prototype.getTranslation = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
    };
    TranslateFakeLoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return TranslateFakeLoader;
}(TranslateLoader));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
MissingTranslationHandler = /** @class */ (function () {
    function MissingTranslationHandler() {
    }
    return MissingTranslationHandler;
}());
/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
var FakeMissingTranslationHandler = /** @class */ (function () {
    function FakeMissingTranslationHandler() {
    }
    /**
     * @param {?} params
     * @return {?}
     */
    FakeMissingTranslationHandler.prototype.handle = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return params.key;
    };
    FakeMissingTranslationHandler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return FakeMissingTranslationHandler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
TranslateCompiler = /** @class */ (function () {
    function TranslateCompiler() {
    }
    return TranslateCompiler;
}());
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
var TranslateFakeCompiler = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TranslateFakeCompiler, _super);
    function TranslateFakeCompiler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    TranslateFakeCompiler.prototype.compile = /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    function (value, lang) {
        return value;
    };
    /**
     * @param {?} translations
     * @param {?} lang
     * @return {?}
     */
    TranslateFakeCompiler.prototype.compileTranslations = /**
     * @param {?} translations
     * @param {?} lang
     * @return {?}
     */
    function (translations, lang) {
        return translations;
    };
    TranslateFakeCompiler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return TranslateFakeCompiler;
}(TranslateCompiler));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/* tslint:disable */
/**
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {?} o1 Object or value to compare.
 * @param {?} o2 Object or value to compare.
 * @return {?} true if arguments are equal.
 */
function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    // NaN === NaN
    /** @type {?} */
    var t1 = typeof o1;
    /** @type {?} */
    var t2 = typeof o2;
    /** @type {?} */
    var length;
    /** @type {?} */
    var key;
    /** @type {?} */
    var keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
/**
 * @param {?} item
 * @return {?}
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
function mergeDeep(target, source) {
    /** @type {?} */
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(function (key) {
            var _a, _b;
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
            }
        });
    }
    return output;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
TranslateParser = /** @class */ (function () {
    function TranslateParser() {
    }
    return TranslateParser;
}());
var TranslateDefaultParser = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TranslateDefaultParser, _super);
    function TranslateDefaultParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
        return _this;
    }
    /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    TranslateDefaultParser.prototype.interpolate = /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    function (expr, params) {
        /** @type {?} */
        var result;
        if (typeof expr === 'string') {
            result = this.interpolateString(expr, params);
        }
        else if (typeof expr === 'function') {
            result = this.interpolateFunction(expr, params);
        }
        else {
            // this should not happen, but an unrelated TranslateService test depends on it
            result = (/** @type {?} */ (expr));
        }
        return result;
    };
    /**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    TranslateDefaultParser.prototype.getValue = /**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    function (target, key) {
        /** @type {?} */
        var keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            if (isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    };
    /**
     * @param {?} fn
     * @param {?=} params
     * @return {?}
     */
    TranslateDefaultParser.prototype.interpolateFunction = /**
     * @param {?} fn
     * @param {?=} params
     * @return {?}
     */
    function (fn, params) {
        return fn(params);
    };
    /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    TranslateDefaultParser.prototype.interpolateString = /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    function (expr, params) {
        var _this = this;
        if (!params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, function (substring, b) {
            /** @type {?} */
            var r = _this.getValue(params, b);
            return isDefined(r) ? r : substring;
        });
    };
    TranslateDefaultParser.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return TranslateDefaultParser;
}(TranslateParser));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TranslateStore = /** @class */ (function () {
    function TranslateStore() {
        /**
         * The lang currently used
         */
        this.currentLang = this.defaultLang;
        /**
         * a list of translations per lang
         */
        this.translations = {};
        /**
         * an array of langs
         */
        this.langs = [];
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         */
        this.onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         */
        this.onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         */
        this.onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    return TranslateStore;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var USE_STORE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('USE_STORE');
/** @type {?} */
var USE_DEFAULT_LANG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('USE_DEFAULT_LANG');
var TranslateService = /** @class */ (function () {
    /**
     *
     * @param store an instance of the store (that is supposed to be unique)
     * @param currentLoader An instance of the loader currently used
     * @param compiler An instance of the compiler currently used
     * @param parser An instance of the parser currently used
     * @param missingTranslationHandler A handler for missing translations.
     * @param isolate whether this service should use the store or not
     * @param useDefaultLang whether we should use default language translation when current language translation is missing.
     */
    function TranslateService(store, currentLoader, compiler, parser, missingTranslationHandler, useDefaultLang, isolate) {
        if (useDefaultLang === void 0) { useDefaultLang = true; }
        if (isolate === void 0) { isolate = false; }
        this.store = store;
        this.currentLoader = currentLoader;
        this.compiler = compiler;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        this.useDefaultLang = useDefaultLang;
        this.isolate = isolate;
        this.pending = false;
        this._onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._langs = [];
        this._translations = {};
        this._translationRequests = {};
    }
    Object.defineProperty(TranslateService.prototype, "onTranslationChange", {
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
           *     // do something
           * });
         */
        get: /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @return {?}
         */
        function () {
            return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onLangChange", {
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
           *     // do something
           * });
         */
        get: /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @return {?}
         */
        function () {
            return this.isolate ? this._onLangChange : this.store.onLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onDefaultLangChange", {
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
           *     // do something
           * });
         */
        get: /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @return {?}
         */
        function () {
            return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "defaultLang", {
        /**
         * The default lang to fallback when translations are missing on the current lang
         */
        get: /**
         * The default lang to fallback when translations are missing on the current lang
         * @return {?}
         */
        function () {
            return this.isolate ? this._defaultLang : this.store.defaultLang;
        },
        set: /**
         * @param {?} defaultLang
         * @return {?}
         */
        function (defaultLang) {
            if (this.isolate) {
                this._defaultLang = defaultLang;
            }
            else {
                this.store.defaultLang = defaultLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        /**
         * The lang currently used
         */
        get: /**
         * The lang currently used
         * @return {?}
         */
        function () {
            return this.isolate ? this._currentLang : this.store.currentLang;
        },
        set: /**
         * @param {?} currentLang
         * @return {?}
         */
        function (currentLang) {
            if (this.isolate) {
                this._currentLang = currentLang;
            }
            else {
                this.store.currentLang = currentLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "langs", {
        /**
         * an array of langs
         */
        get: /**
         * an array of langs
         * @return {?}
         */
        function () {
            return this.isolate ? this._langs : this.store.langs;
        },
        set: /**
         * @param {?} langs
         * @return {?}
         */
        function (langs) {
            if (this.isolate) {
                this._langs = langs;
            }
            else {
                this.store.langs = langs;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "translations", {
        /**
         * a list of translations per lang
         */
        get: /**
         * a list of translations per lang
         * @return {?}
         */
        function () {
            return this.isolate ? this._translations : this.store.translations;
        },
        set: /**
         * @param {?} translations
         * @return {?}
         */
        function (translations) {
            if (this.isolate) {
                this._translations = translations;
            }
            else {
                this.store.translations = translations;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the default language to use as a fallback
     */
    /**
     * Sets the default language to use as a fallback
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.setDefaultLang = /**
     * Sets the default language to use as a fallback
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        if (lang === this.defaultLang) {
            return;
        }
        /** @type {?} */
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (!this.defaultLang) {
                this.defaultLang = lang;
            }
            pending.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                .subscribe(function (res) {
                _this.changeDefaultLang(lang);
            });
        }
        else { // we already have this language
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Gets the default language used
     */
    /**
     * Gets the default language used
     * @return {?}
     */
    TranslateService.prototype.getDefaultLang = /**
     * Gets the default language used
     * @return {?}
     */
    function () {
        return this.defaultLang;
    };
    /**
     * Changes the lang currently used
     */
    /**
     * Changes the lang currently used
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.use = /**
     * Changes the lang currently used
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        // don't change the language if the language given is already selected
        if (lang === this.currentLang) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.translations[lang]);
        }
        /** @type {?} */
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                .subscribe(function (res) {
                _this.changeLang(lang);
            });
            return pending;
        }
        else { // we have this language, return an Observable
            this.changeLang(lang);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.translations[lang]);
        }
    };
    /**
     * Retrieves the given translations
     */
    /**
     * Retrieves the given translations
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.retrieveTranslations = /**
     * Retrieves the given translations
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        /** @type {?} */
        var pending;
        // if this language is unavailable, ask for it
        if (typeof this.translations[lang] === "undefined") {
            this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
            pending = this._translationRequests[lang];
        }
        return pending;
    };
    /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     */
    /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.getTranslation = /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        this.pending = true;
        /** @type {?} */
        var loadingTranslations = this.currentLoader.getTranslation(lang).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.loadingTranslations = loadingTranslations.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.compiler.compileTranslations(res, lang); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.loadingTranslations
            .subscribe(function (res) {
            _this.translations[lang] = res;
            _this.updateLangs();
            _this.pending = false;
        }, function (err) {
            _this.pending = false;
        });
        return loadingTranslations;
    };
    /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     */
    /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     * @param {?} lang
     * @param {?} translations
     * @param {?=} shouldMerge
     * @return {?}
     */
    TranslateService.prototype.setTranslation = /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     * @param {?} lang
     * @param {?} translations
     * @param {?=} shouldMerge
     * @return {?}
     */
    function (lang, translations, shouldMerge) {
        if (shouldMerge === void 0) { shouldMerge = false; }
        translations = this.compiler.compileTranslations(translations, lang);
        if (shouldMerge && this.translations[lang]) {
            this.translations[lang] = mergeDeep(this.translations[lang], translations);
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Returns an array of currently available langs
     */
    /**
     * Returns an array of currently available langs
     * @return {?}
     */
    TranslateService.prototype.getLangs = /**
     * Returns an array of currently available langs
     * @return {?}
     */
    function () {
        return this.langs;
    };
    /**
     * Add available langs
     */
    /**
     * Add available langs
     * @param {?} langs
     * @return {?}
     */
    TranslateService.prototype.addLangs = /**
     * Add available langs
     * @param {?} langs
     * @return {?}
     */
    function (langs) {
        var _this = this;
        langs.forEach(function (lang) {
            if (_this.langs.indexOf(lang) === -1) {
                _this.langs.push(lang);
            }
        });
    };
    /**
     * Update the list of available langs
     */
    /**
     * Update the list of available langs
     * @return {?}
     */
    TranslateService.prototype.updateLangs = /**
     * Update the list of available langs
     * @return {?}
     */
    function () {
        this.addLangs(Object.keys(this.translations));
    };
    /**
     * Returns the parsed result of the translations
     */
    /**
     * Returns the parsed result of the translations
     * @param {?} translations
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    TranslateService.prototype.getParsedResult = /**
     * Returns the parsed result of the translations
     * @param {?} translations
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    function (translations, key, interpolateParams) {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var res;
        if (key instanceof Array) {
            /** @type {?} */
            var result = {};
            /** @type {?} */
            var observables = false;
            try {
                for (var key_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(key), key_1_1 = key_1.next(); !key_1_1.done; key_1_1 = key_1.next()) {
                    var k = key_1_1.value;
                    result[k] = this.getParsedResult(translations, k, interpolateParams);
                    if (typeof result[k].subscribe === "function") {
                        observables = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (key_1_1 && !key_1_1.done && (_a = key_1.return)) _a.call(key_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (observables) {
                /** @type {?} */
                var mergedObs = void 0;
                try {
                    for (var key_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(key), key_2_1 = key_2.next(); !key_2_1.done; key_2_1 = key_2.next()) {
                        var k = key_2_1.value;
                        /** @type {?} */
                        var obs = typeof result[k].subscribe === "function" ? result[k] : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])((/** @type {?} */ (result[k])));
                        if (typeof mergedObs === "undefined") {
                            mergedObs = obs;
                        }
                        else {
                            mergedObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(mergedObs, obs);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (key_2_1 && !key_2_1.done && (_b = key_2.return)) _b.call(key_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return mergedObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) {
                    /** @type {?} */
                    var obj = {};
                    arr.forEach(function (value, index) {
                        obj[key[index]] = value;
                    });
                    return obj;
                }));
            }
            return result;
        }
        if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
        }
        if (typeof res === "undefined" && this.defaultLang && this.defaultLang !== this.currentLang && this.useDefaultLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (typeof res === "undefined") {
            /** @type {?} */
            var params = { key: key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return typeof res !== "undefined" ? res : key;
    };
    /**
     * Gets the translated value of a key (or an array of keys)
     * @returns the translated key, or an object of translated keys
     */
    /**
     * Gets the translated value of a key (or an array of keys)
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} the translated key, or an object of translated keys
     */
    TranslateService.prototype.get = /**
     * Gets the translated value of a key (or an array of keys)
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} the translated key, or an object of translated keys
     */
    function (key, interpolateParams) {
        var _this = this;
        if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                /** @type {?} */
                var onComplete = function (res) {
                    observer.next(res);
                    observer.complete();
                };
                /** @type {?} */
                var onError = function (err) {
                    observer.error(err);
                };
                _this.loadingTranslations.subscribe(function (res) {
                    res = _this.getParsedResult(res, key, interpolateParams);
                    if (typeof res.subscribe === "function") {
                        res.subscribe(onComplete, onError);
                    }
                    else {
                        onComplete(res);
                    }
                }, onError);
            });
        }
        else {
            /** @type {?} */
            var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(res);
            }
        }
    };
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @returns A stream of the translated key, or an object of translated keys
     */
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} A stream of the translated key, or an object of translated keys
     */
    TranslateService.prototype.stream = /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} A stream of the translated key, or an object of translated keys
     */
    function (key, interpolateParams) {
        var _this = this;
        if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(this.get(key, interpolateParams), this.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (event) {
            /** @type {?} */
            var res = _this.getParsedResult(event.translations, key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(res);
            }
        })));
    };
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     */
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    TranslateService.prototype.instant = /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    function (key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        /** @type {?} */
        var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (typeof res.subscribe !== "undefined") {
            if (key instanceof Array) {
                /** @type {?} */
                var obj_1 = {};
                key.forEach(function (value, index) {
                    obj_1[key[index]] = key[index];
                });
                return obj_1;
            }
            return key;
        }
        else {
            return res;
        }
    };
    /**
     * Sets the translated value of a key, after compiling it
     */
    /**
     * Sets the translated value of a key, after compiling it
     * @param {?} key
     * @param {?} value
     * @param {?=} lang
     * @return {?}
     */
    TranslateService.prototype.set = /**
     * Sets the translated value of a key, after compiling it
     * @param {?} key
     * @param {?} value
     * @param {?=} lang
     * @return {?}
     */
    function (key, value, lang) {
        if (lang === void 0) { lang = this.currentLang; }
        this.translations[lang][key] = this.compiler.compile(value, lang);
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Changes the current lang
     */
    /**
     * Changes the current lang
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.changeLang = /**
     * Changes the current lang
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
        if (!this.defaultLang) {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Changes the default lang
     */
    /**
     * Changes the default lang
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.changeDefaultLang = /**
     * Changes the default lang
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Allows to reload the lang file from the file
     */
    /**
     * Allows to reload the lang file from the file
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.reloadLang = /**
     * Allows to reload the lang file from the file
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    };
    /**
     * Deletes inner translation
     */
    /**
     * Deletes inner translation
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.resetLang = /**
     * Deletes inner translation
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this._translationRequests[lang] = undefined;
        this.translations[lang] = undefined;
    };
    /**
     * Returns the language code name from the browser, e.g. "de"
     */
    /**
     * Returns the language code name from the browser, e.g. "de"
     * @return {?}
     */
    TranslateService.prototype.getBrowserLang = /**
     * Returns the language code name from the browser, e.g. "de"
     * @return {?}
     */
    function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     */
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     * @return {?}
     */
    TranslateService.prototype.getBrowserCultureLang = /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     * @return {?}
     */
    function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        var browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    };
    TranslateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: TranslateStore },
        { type: TranslateLoader },
        { type: TranslateCompiler },
        { type: TranslateParser },
        { type: MissingTranslationHandler },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [USE_DEFAULT_LANG,] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [USE_STORE,] }] }
    ]; };
    return TranslateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TranslateDirective = /** @class */ (function () {
    function TranslateDirective(translateService, element, _ref) {
        var _this = this;
        this.translateService = translateService;
        this.element = element;
        this._ref = _ref;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(function (event) {
                if (event.lang === _this.translateService.currentLang) {
                    _this.checkNodes(true, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe(function (event) {
                _this.checkNodes(true, event.translations);
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(function (event) {
                _this.checkNodes(true);
            });
        }
    }
    Object.defineProperty(TranslateDirective.prototype, "translate", {
        set: /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (key) {
                this.key = key;
                this.checkNodes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateDirective.prototype, "translateParams", {
        set: /**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            if (!equals(this.currentParams, params)) {
                this.currentParams = params;
                this.checkNodes(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TranslateDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.checkNodes();
    };
    /**
     * @param {?=} forceUpdate
     * @param {?=} translations
     * @return {?}
     */
    TranslateDirective.prototype.checkNodes = /**
     * @param {?=} forceUpdate
     * @param {?=} translations
     * @return {?}
     */
    function (forceUpdate, translations) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        /** @type {?} */
        var nodes = this.element.nativeElement.childNodes;
        // if the element is empty
        if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
        }
        for (var i = 0; i < nodes.length; ++i) {
            /** @type {?} */
            var node = nodes[i];
            if (node.nodeType === 3) { // node type 3 is a text node
                // node type 3 is a text node
                /** @type {?} */
                var key = void 0;
                if (this.key) {
                    key = this.key;
                    if (forceUpdate) {
                        node.lastKey = null;
                    }
                }
                else {
                    /** @type {?} */
                    var content = this.getContent(node);
                    /** @type {?} */
                    var trimmedContent = content.trim();
                    if (trimmedContent.length) {
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = trimmedContent;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = this.getContent(node);
                        }
                        else if (node.originalContent && forceUpdate) { // the content seems ok, but the lang has changed
                            node.lastKey = null;
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        }
    };
    /**
     * @param {?} key
     * @param {?} node
     * @param {?} translations
     * @return {?}
     */
    TranslateDirective.prototype.updateValue = /**
     * @param {?} key
     * @param {?} node
     * @param {?} translations
     * @return {?}
     */
    function (key, node, translations) {
        var _this = this;
        if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
                return;
            }
            this.lastParams = this.currentParams;
            /** @type {?} */
            var onTranslation = function (res) {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = _this.getContent(node);
                }
                node.currentValue = isDefined(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                _this.setContent(node, _this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
                _this._ref.markForCheck();
            };
            if (isDefined(translations)) {
                /** @type {?} */
                var res = this.translateService.getParsedResult(translations, key, this.currentParams);
                if (typeof res.subscribe === "function") {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TranslateDirective.prototype.getContent = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return isDefined(node.textContent) ? node.textContent : node.data;
    };
    /**
     * @param {?} node
     * @param {?} content
     * @return {?}
     */
    TranslateDirective.prototype.setContent = /**
     * @param {?} node
     * @param {?} content
     * @return {?}
     */
    function (node, content) {
        if (isDefined(node.textContent)) {
            node.textContent = content;
        }
        else {
            node.data = content;
        }
    };
    /**
     * @return {?}
     */
    TranslateDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
        if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
        }
        if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
        }
    };
    TranslateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[translate],[ngx-translate]'
                },] }
    ];
    /** @nocollapse */
    TranslateDirective.ctorParameters = function () { return [
        { type: TranslateService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    TranslateDirective.propDecorators = {
        translate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        translateParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return TranslateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate, _ref) {
        this.translate = translate;
        this._ref = _ref;
        this.value = '';
    }
    /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @param {?=} translations
     * @return {?}
     */
    TranslatePipe.prototype.updateValue = /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @param {?=} translations
     * @return {?}
     */
    function (key, interpolateParams, translations) {
        var _this = this;
        /** @type {?} */
        var onTranslation = function (res) {
            _this.value = res !== undefined ? res : key;
            _this.lastKey = key;
            _this._ref.markForCheck();
        };
        if (translations) {
            /** @type {?} */
            var res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (typeof res.subscribe === 'function') {
                res.subscribe(onTranslation);
            }
            else {
                onTranslation(res);
            }
        }
        this.translate.get(key, interpolateParams).subscribe(onTranslation);
    };
    /**
     * @param {?} query
     * @param {...?} args
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} query
     * @param {...?} args
     * @return {?}
     */
    function (query) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!query || query.length === 0) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
            return this.value;
        }
        /** @type {?} */
        var interpolateParams;
        if (isDefined(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                /** @type {?} */
                var validArgs = args[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + args[0]);
                }
            }
            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe(function (event) {
                if (_this.lastKey && event.lang === _this.translate.currentLang) {
                    _this.lastKey = null;
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe(function (event) {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(function () {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams);
                }
            });
        }
        return this.value;
    };
    /**
     * Clean any existing subscription to change events
     */
    /**
     * Clean any existing subscription to change events
     * @return {?}
     */
    TranslatePipe.prototype._dispose = /**
     * Clean any existing subscription to change events
     * @return {?}
     */
    function () {
        if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
        }
        if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
        if (typeof this.onDefaultLangChange !== 'undefined') {
            this.onDefaultLangChange.unsubscribe();
            this.onDefaultLangChange = undefined;
        }
    };
    /**
     * @return {?}
     */
    TranslatePipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._dispose();
    };
    TranslatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'translate',
                    pure: false // required to update the value when the promise is resolved
                },] }
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: TranslateService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    return TranslatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TranslateModule = /** @class */ (function () {
    function TranslateModule() {
    }
    /**
     * Use this method in your root module to provide the TranslateService
     */
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {?=} config
     * @return {?}
     */
    TranslateModule.forRoot = /**
     * Use this method in your root module to provide the TranslateService
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                TranslateStore,
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                TranslateService
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     */
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {?=} config
     * @return {?}
     */
    TranslateModule.forChild = /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                TranslateService
            ]
        };
    };
    TranslateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        TranslatePipe,
                        TranslateDirective
                    ],
                    exports: [
                        TranslatePipe,
                        TranslateDirective
                    ]
                },] }
    ];
    return TranslateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyYW5zbGF0ZS1jb3JlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Abmd4LXRyYW5zbGF0ZS9jb3JlL2xpYi90cmFuc2xhdGUubG9hZGVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9jb3JlL2xpYi9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2NvcmUvbGliL3RyYW5zbGF0ZS5jb21waWxlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvY29yZS9saWIvdXRpbC50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvY29yZS9saWIvdHJhbnNsYXRlLnBhcnNlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvY29yZS9saWIvdHJhbnNsYXRlLnN0b3JlLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9jb3JlL2xpYi90cmFuc2xhdGUuc2VydmljZS50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvY29yZS9saWIvdHJhbnNsYXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvY29yZS9saWIvdHJhbnNsYXRlLnBpcGUudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2NvcmUvcHVibGljX2FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHJhbnNsYXRlTG9hZGVyIHtcbiAgYWJzdHJhY3QgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+O1xufVxuXG4vKipcbiAqIFRoaXMgbG9hZGVyIGlzIGp1c3QgYSBwbGFjZWhvbGRlciB0aGF0IGRvZXMgbm90aGluZywgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCBhIGxvYWRlciBhdCBhbGxcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZUZha2VMb2FkZXIgZXh0ZW5kcyBUcmFuc2xhdGVMb2FkZXIge1xuICBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBvZih7fSk7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSBcIi4vdHJhbnNsYXRlLnNlcnZpY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zIHtcbiAgLyoqXG4gICAqIHRoZSBrZXkgdGhhdCdzIG1pc3NpbmcgaW4gdHJhbnNsYXRpb24gZmlsZXNcbiAgICovXG4gIGtleTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBhbiBpbnN0YW5jZSBvZiB0aGUgc2VydmljZSB0aGF0IHdhcyB1bmFibGUgdG8gdHJhbnNsYXRlIHRoZSBrZXkuXG4gICAqL1xuICB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlO1xuXG4gIC8qKlxuICAgKiBpbnRlcnBvbGF0aW9uIHBhcmFtcyB0aGF0IHdlcmUgcGFzc2VkIGFsb25nIGZvciB0cmFuc2xhdGluZyB0aGUgZ2l2ZW4ga2V5LlxuICAgKi9cbiAgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3Q7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIHtcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIG1pc3NpbmcgdHJhbnNsYXRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIGNvbnRleHQgZm9yIHJlc29sdmluZyBhIG1pc3NpbmcgdHJhbnNsYXRpb25cbiAgICogQHJldHVybnMgYSB2YWx1ZSBvciBhbiBvYnNlcnZhYmxlXG4gICAqIElmIGl0IHJldHVybnMgYSB2YWx1ZSwgdGhlbiB0aGlzIHZhbHVlIGlzIHVzZWQuXG4gICAqIElmIGl0IHJldHVybiBhbiBvYnNlcnZhYmxlLCB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhpcyBvYnNlcnZhYmxlIHdpbGwgYmUgdXNlZCAoZXhjZXB0IGlmIHRoZSBtZXRob2Qgd2FzIFwiaW5zdGFudFwiKS5cbiAgICogSWYgaXQgZG9lc24ndCByZXR1cm4gdGhlbiB0aGUga2V5IHdpbGwgYmUgdXNlZCBhcyBhIHZhbHVlXG4gICAqL1xuICBhYnN0cmFjdCBoYW5kbGUocGFyYW1zOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zKTogYW55O1xufVxuXG4vKipcbiAqIFRoaXMgaGFuZGxlciBpcyBqdXN0IGEgcGxhY2Vob2xkZXIgdGhhdCBkb2VzIG5vdGhpbmcsIGluIGNhc2UgeW91IGRvbid0IG5lZWQgYSBtaXNzaW5nIHRyYW5zbGF0aW9uIGhhbmRsZXIgYXQgYWxsXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciBpbXBsZW1lbnRzIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIge1xuICBoYW5kbGUocGFyYW1zOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcGFyYW1zLmtleTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHJhbnNsYXRlQ29tcGlsZXIge1xuICBhYnN0cmFjdCBjb21waWxlKHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IHN0cmluZyB8IEZ1bmN0aW9uO1xuXG4gIGFic3RyYWN0IGNvbXBpbGVUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zOiBhbnksIGxhbmc6IHN0cmluZyk6IGFueTtcbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBpbGVyIGlzIGp1c3QgYSBwbGFjZWhvbGRlciB0aGF0IGRvZXMgbm90aGluZywgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCBhIGNvbXBpbGVyIGF0IGFsbFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlRmFrZUNvbXBpbGVyIGV4dGVuZHMgVHJhbnNsYXRlQ29tcGlsZXIge1xuICBjb21waWxlKHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IHN0cmluZyB8IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjb21waWxlVHJhbnNsYXRpb25zKHRyYW5zbGF0aW9uczogYW55LCBsYW5nOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0cmFuc2xhdGlvbnM7XG4gIH1cbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKipcbiAqIERldGVybWluZXMgaWYgdHdvIG9iamVjdHMgb3IgdHdvIHZhbHVlcyBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBUd28gb2JqZWN0cyBvciB2YWx1ZXMgYXJlIGNvbnNpZGVyZWQgZXF1aXZhbGVudCBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZyBpcyB0cnVlOlxuICpcbiAqICogQm90aCBvYmplY3RzIG9yIHZhbHVlcyBwYXNzIGA9PT1gIGNvbXBhcmlzb24uXG4gKiAqIEJvdGggb2JqZWN0cyBvciB2YWx1ZXMgYXJlIG9mIHRoZSBzYW1lIHR5cGUgYW5kIGFsbCBvZiB0aGVpciBwcm9wZXJ0aWVzIGFyZSBlcXVhbCBieVxuICogICBjb21wYXJpbmcgdGhlbSB3aXRoIGBlcXVhbHNgLlxuICpcbiAqIEBwYXJhbSBvMSBPYmplY3Qgb3IgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSBvMiBPYmplY3Qgb3IgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHRydWUgaWYgYXJndW1lbnRzIGFyZSBlcXVhbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhvMTogYW55LCBvMjogYW55KTogYm9vbGVhbiB7XG4gIGlmIChvMSA9PT0gbzIpIHJldHVybiB0cnVlO1xuICBpZiAobzEgPT09IG51bGwgfHwgbzIgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgaWYgKG8xICE9PSBvMSAmJiBvMiAhPT0gbzIpIHJldHVybiB0cnVlOyAvLyBOYU4gPT09IE5hTlxuICBsZXQgdDEgPSB0eXBlb2YgbzEsIHQyID0gdHlwZW9mIG8yLCBsZW5ndGg6IG51bWJlciwga2V5OiBhbnksIGtleVNldDogYW55O1xuICBpZiAodDEgPT0gdDIgJiYgdDEgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvMSkpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShvMikpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICgobGVuZ3RoID0gbzEubGVuZ3RoKSA9PSBvMi5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XG4gICAgICAgICAgaWYgKCFlcXVhbHMobzFba2V5XSwgbzJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobzIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGtleVNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBmb3IgKGtleSBpbiBvMSkge1xuICAgICAgICBpZiAoIWVxdWFscyhvMVtrZXldLCBvMltrZXldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBrZXlTZXRba2V5XSA9IHRydWU7XG4gICAgICB9XG4gICAgICBmb3IgKGtleSBpbiBvMikge1xuICAgICAgICBpZiAoIShrZXkgaW4ga2V5U2V0KSAmJiB0eXBlb2YgbzJba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4vKiB0c2xpbnQ6ZW5hYmxlICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RlZmluZWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW06IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQ6IGFueSwgc291cmNlOiBhbnkpOiBhbnkge1xuICBsZXQgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGFyZ2V0KTtcbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5OiBhbnkpID0+IHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwge1trZXldOiBzb3VyY2Vba2V5XX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dHB1dFtrZXldID0gbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCB7W2tleV06IHNvdXJjZVtrZXldfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7aXNEZWZpbmVkfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmFuc2xhdGVQYXJzZXIge1xuICAvKipcbiAgICogSW50ZXJwb2xhdGVzIGEgc3RyaW5nIHRvIHJlcGxhY2UgcGFyYW1ldGVyc1xuICAgKiBcIlRoaXMgaXMgYSB7eyBrZXkgfX1cIiA9PT4gXCJUaGlzIGlzIGEgdmFsdWVcIiwgd2l0aCBwYXJhbXMgPSB7IGtleTogXCJ2YWx1ZVwiIH1cbiAgICogQHBhcmFtIGV4cHJcbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKi9cbiAgYWJzdHJhY3QgaW50ZXJwb2xhdGUoZXhwcjogc3RyaW5nIHwgRnVuY3Rpb24sIHBhcmFtcz86IGFueSk6IHN0cmluZztcblxuICAvKipcbiAgICogR2V0cyBhIHZhbHVlIGZyb20gYW4gb2JqZWN0IGJ5IGNvbXBvc2VkIGtleVxuICAgKiBwYXJzZXIuZ2V0VmFsdWUoeyBrZXkxOiB7IGtleUE6ICd2YWx1ZUknIH19LCAna2V5MS5rZXlBJykgPT0+ICd2YWx1ZUknXG4gICAqIEBwYXJhbSB0YXJnZXRcbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0VmFsdWUodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKTogYW55XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyIGV4dGVuZHMgVHJhbnNsYXRlUGFyc2VyIHtcbiAgdGVtcGxhdGVNYXRjaGVyOiBSZWdFeHAgPSAve3tcXHM/KFtee31cXHNdKilcXHM/fX0vZztcblxuICBwdWJsaWMgaW50ZXJwb2xhdGUoZXhwcjogc3RyaW5nIHwgRnVuY3Rpb24sIHBhcmFtcz86IGFueSk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdDogc3RyaW5nO1xuXG4gICAgaWYgKHR5cGVvZiBleHByID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pbnRlcnBvbGF0ZVN0cmluZyhleHByLCBwYXJhbXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cHIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW50ZXJwb2xhdGVGdW5jdGlvbihleHByLCBwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgYW4gdW5yZWxhdGVkIFRyYW5zbGF0ZVNlcnZpY2UgdGVzdCBkZXBlbmRzIG9uIGl0XG4gICAgICByZXN1bHQgPSBleHByIGFzIHN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0VmFsdWUodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKTogYW55IHtcbiAgICBsZXQga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgIGtleSA9ICcnO1xuICAgIGRvIHtcbiAgICAgIGtleSArPSBrZXlzLnNoaWZ0KCk7XG4gICAgICBpZiAoaXNEZWZpbmVkKHRhcmdldCkgJiYgaXNEZWZpbmVkKHRhcmdldFtrZXldKSAmJiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnb2JqZWN0JyB8fCAha2V5cy5sZW5ndGgpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xuICAgICAgICBrZXkgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgIHRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleSArPSAnLic7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoa2V5cy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgaW50ZXJwb2xhdGVGdW5jdGlvbihmbjogRnVuY3Rpb24sIHBhcmFtcz86IGFueSkge1xuICAgIHJldHVybiBmbihwYXJhbXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnRlcnBvbGF0ZVN0cmluZyhleHByOiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwci5yZXBsYWNlKHRoaXMudGVtcGxhdGVNYXRjaGVyLCAoc3Vic3RyaW5nOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICAgICAgbGV0IHIgPSB0aGlzLmdldFZhbHVlKHBhcmFtcywgYik7XG4gICAgICByZXR1cm4gaXNEZWZpbmVkKHIpID8gciA6IHN1YnN0cmluZztcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0RlZmF1bHRMYW5nQ2hhbmdlRXZlbnQsIExhbmdDaGFuZ2VFdmVudCwgVHJhbnNsYXRpb25DaGFuZ2VFdmVudH0gZnJvbSBcIi4vdHJhbnNsYXRlLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVN0b3JlIHtcbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGxhbmcgdG8gZmFsbGJhY2sgd2hlbiB0cmFuc2xhdGlvbnMgYXJlIG1pc3Npbmcgb24gdGhlIGN1cnJlbnQgbGFuZ1xuICAgKi9cbiAgcHVibGljIGRlZmF1bHRMYW5nOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXG4gICAqL1xuICBwdWJsaWMgY3VycmVudExhbmc6IHN0cmluZyA9IHRoaXMuZGVmYXVsdExhbmc7XG5cbiAgLyoqXG4gICAqIGEgbGlzdCBvZiB0cmFuc2xhdGlvbnMgcGVyIGxhbmdcbiAgICovXG4gIHB1YmxpYyB0cmFuc2xhdGlvbnM6IGFueSA9IHt9O1xuXG4gIC8qKlxuICAgKiBhbiBhcnJheSBvZiBsYW5nc1xuICAgKi9cbiAgcHVibGljIGxhbmdzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLyoqXG4gICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gdHJhbnNsYXRpb24gY2hhbmdlIGV2ZW50c1xuICAgKiBvblRyYW5zbGF0aW9uQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50KSA9PiB7XG4gICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAqIH0pO1xuICAgKi9cbiAgcHVibGljIG9uVHJhbnNsYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRpb25DaGFuZ2VFdmVudD4oKTtcblxuICAvKipcbiAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBsYW5nIGNoYW5nZSBldmVudHNcbiAgICogb25MYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICogfSk7XG4gICAqL1xuICBwdWJsaWMgb25MYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIGRlZmF1bHQgbGFuZyBjaGFuZ2UgZXZlbnRzXG4gICAqIG9uRGVmYXVsdExhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICogfSk7XG4gICAqL1xuICBwdWJsaWMgb25EZWZhdWx0TGFuZ0NoYW5nZTogRXZlbnRFbWl0dGVyPERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50PigpO1xufVxuIiwiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge2NvbmNhdCwgbWVyZ2UsIE9ic2VydmFibGUsIE9ic2VydmVyLCBvZn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7bWFwLCBzaGFyZSwgc3dpdGNoTWFwLCB0YWtlLCB0b0FycmF5fSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7TWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtc30gZnJvbSBcIi4vbWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyXCI7XG5pbXBvcnQge1RyYW5zbGF0ZUNvbXBpbGVyfSBmcm9tIFwiLi90cmFuc2xhdGUuY29tcGlsZXJcIjtcbmltcG9ydCB7VHJhbnNsYXRlTG9hZGVyfSBmcm9tIFwiLi90cmFuc2xhdGUubG9hZGVyXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVBhcnNlcn0gZnJvbSBcIi4vdHJhbnNsYXRlLnBhcnNlclwiO1xuXG5pbXBvcnQge1RyYW5zbGF0ZVN0b3JlfSBmcm9tIFwiLi90cmFuc2xhdGUuc3RvcmVcIjtcbmltcG9ydCB7aXNEZWZpbmVkLCBtZXJnZURlZXB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGNvbnN0IFVTRV9TVE9SRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdVU0VfU1RPUkUnKTtcbmV4cG9ydCBjb25zdCBVU0VfREVGQVVMVF9MQU5HID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ1VTRV9ERUZBVUxUX0xBTkcnKTtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50IHtcbiAgdHJhbnNsYXRpb25zOiBhbnk7XG4gIGxhbmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW5nQ2hhbmdlRXZlbnQge1xuICBsYW5nOiBzdHJpbmc7XG4gIHRyYW5zbGF0aW9uczogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQge1xuICBsYW5nOiBzdHJpbmc7XG4gIHRyYW5zbGF0aW9uczogYW55O1xufVxuXG5kZWNsYXJlIGludGVyZmFjZSBXaW5kb3cge1xuICBuYXZpZ2F0b3I6IGFueTtcbn1cblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IFdpbmRvdztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xuICBwcml2YXRlIGxvYWRpbmdUcmFuc2xhdGlvbnM6IE9ic2VydmFibGU8YW55PjtcbiAgcHJpdmF0ZSBwZW5kaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX29uVHJhbnNsYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRpb25DaGFuZ2VFdmVudD4oKTtcbiAgcHJpdmF0ZSBfb25MYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PigpO1xuICBwcml2YXRlIF9vbkRlZmF1bHRMYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGVmYXVsdExhbmdDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQ+KCk7XG4gIHByaXZhdGUgX2RlZmF1bHRMYW5nOiBzdHJpbmc7XG4gIHByaXZhdGUgX2N1cnJlbnRMYW5nOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmdzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIHByaXZhdGUgX3RyYW5zbGF0aW9uczogYW55ID0ge307XG4gIHByaXZhdGUgX3RyYW5zbGF0aW9uUmVxdWVzdHM6IGFueSA9IHt9O1xuXG4gIC8qKlxuICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIHRyYW5zbGF0aW9uIGNoYW5nZSBldmVudHNcbiAgICogb25UcmFuc2xhdGlvbkNoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogVHJhbnNsYXRpb25DaGFuZ2VFdmVudCkgPT4ge1xuICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAgKiB9KTtcbiAgICovXG4gIGdldCBvblRyYW5zbGF0aW9uQ2hhbmdlKCk6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX29uVHJhbnNsYXRpb25DaGFuZ2UgOiB0aGlzLnN0b3JlLm9uVHJhbnNsYXRpb25DaGFuZ2U7XG4gIH1cblxuICAvKipcbiAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBsYW5nIGNoYW5nZSBldmVudHNcbiAgICogb25MYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICogfSk7XG4gICAqL1xuICBnZXQgb25MYW5nQ2hhbmdlKCk6IEV2ZW50RW1pdHRlcjxMYW5nQ2hhbmdlRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fb25MYW5nQ2hhbmdlIDogdGhpcy5zdG9yZS5vbkxhbmdDaGFuZ2U7XG4gIH1cblxuICAvKipcbiAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBkZWZhdWx0IGxhbmcgY2hhbmdlIGV2ZW50c1xuICAgKiBvbkRlZmF1bHRMYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAqIH0pO1xuICAgKi9cbiAgZ2V0IG9uRGVmYXVsdExhbmdDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX29uRGVmYXVsdExhbmdDaGFuZ2UgOiB0aGlzLnN0b3JlLm9uRGVmYXVsdExhbmdDaGFuZ2U7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgbGFuZyB0byBmYWxsYmFjayB3aGVuIHRyYW5zbGF0aW9ucyBhcmUgbWlzc2luZyBvbiB0aGUgY3VycmVudCBsYW5nXG4gICAqL1xuICBnZXQgZGVmYXVsdExhbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fZGVmYXVsdExhbmcgOiB0aGlzLnN0b3JlLmRlZmF1bHRMYW5nO1xuICB9XG5cbiAgc2V0IGRlZmF1bHRMYW5nKGRlZmF1bHRMYW5nOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5pc29sYXRlKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0TGFuZyA9IGRlZmF1bHRMYW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRlZmF1bHRMYW5nID0gZGVmYXVsdExhbmc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXG4gICAqL1xuICBnZXQgY3VycmVudExhbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fY3VycmVudExhbmcgOiB0aGlzLnN0b3JlLmN1cnJlbnRMYW5nO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRMYW5nKGN1cnJlbnRMYW5nOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5pc29sYXRlKSB7XG4gICAgICB0aGlzLl9jdXJyZW50TGFuZyA9IGN1cnJlbnRMYW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmN1cnJlbnRMYW5nID0gY3VycmVudExhbmc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFuIGFycmF5IG9mIGxhbmdzXG4gICAqL1xuICBnZXQgbGFuZ3MoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9sYW5ncyA6IHRoaXMuc3RvcmUubGFuZ3M7XG4gIH1cblxuICBzZXQgbGFuZ3MobGFuZ3M6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgdGhpcy5fbGFuZ3MgPSBsYW5ncztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5sYW5ncyA9IGxhbmdzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhIGxpc3Qgb2YgdHJhbnNsYXRpb25zIHBlciBsYW5nXG4gICAqL1xuICBnZXQgdHJhbnNsYXRpb25zKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX3RyYW5zbGF0aW9ucyA6IHRoaXMuc3RvcmUudHJhbnNsYXRpb25zO1xuICB9XG5cbiAgc2V0IHRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnM6IGFueSkge1xuICAgIGlmICh0aGlzLmlzb2xhdGUpIHtcbiAgICAgIHRoaXMuX3RyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS50cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZSBhbiBpbnN0YW5jZSBvZiB0aGUgc3RvcmUgKHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdW5pcXVlKVxuICAgKiBAcGFyYW0gY3VycmVudExvYWRlciBBbiBpbnN0YW5jZSBvZiB0aGUgbG9hZGVyIGN1cnJlbnRseSB1c2VkXG4gICAqIEBwYXJhbSBjb21waWxlciBBbiBpbnN0YW5jZSBvZiB0aGUgY29tcGlsZXIgY3VycmVudGx5IHVzZWRcbiAgICogQHBhcmFtIHBhcnNlciBBbiBpbnN0YW5jZSBvZiB0aGUgcGFyc2VyIGN1cnJlbnRseSB1c2VkXG4gICAqIEBwYXJhbSBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIEEgaGFuZGxlciBmb3IgbWlzc2luZyB0cmFuc2xhdGlvbnMuXG4gICAqIEBwYXJhbSBpc29sYXRlIHdoZXRoZXIgdGhpcyBzZXJ2aWNlIHNob3VsZCB1c2UgdGhlIHN0b3JlIG9yIG5vdFxuICAgKiBAcGFyYW0gdXNlRGVmYXVsdExhbmcgd2hldGhlciB3ZSBzaG91bGQgdXNlIGRlZmF1bHQgbGFuZ3VhZ2UgdHJhbnNsYXRpb24gd2hlbiBjdXJyZW50IGxhbmd1YWdlIHRyYW5zbGF0aW9uIGlzIG1pc3NpbmcuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFRyYW5zbGF0ZVN0b3JlLFxuICAgICAgICAgICAgICBwdWJsaWMgY3VycmVudExvYWRlcjogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICAgICAgICBwdWJsaWMgY29tcGlsZXI6IFRyYW5zbGF0ZUNvbXBpbGVyLFxuICAgICAgICAgICAgICBwdWJsaWMgcGFyc2VyOiBUcmFuc2xhdGVQYXJzZXIsXG4gICAgICAgICAgICAgIHB1YmxpYyBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLFxuICAgICAgICAgICAgICBASW5qZWN0KFVTRV9ERUZBVUxUX0xBTkcpIHByaXZhdGUgdXNlRGVmYXVsdExhbmc6IGJvb2xlYW4gPSB0cnVlLFxuICAgICAgICAgICAgICBASW5qZWN0KFVTRV9TVE9SRSkgcHJpdmF0ZSBpc29sYXRlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHRvIHVzZSBhcyBhIGZhbGxiYWNrXG4gICAqL1xuICBwdWJsaWMgc2V0RGVmYXVsdExhbmcobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGxhbmcgPT09IHRoaXMuZGVmYXVsdExhbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcGVuZGluZzogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5yZXRyaWV2ZVRyYW5zbGF0aW9ucyhsYW5nKTtcblxuICAgIGlmICh0eXBlb2YgcGVuZGluZyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8gb24gaW5pdCBzZXQgdGhlIGRlZmF1bHRMYW5nIGltbWVkaWF0ZWx5XG4gICAgICBpZiAoIXRoaXMuZGVmYXVsdExhbmcpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0TGFuZyA9IGxhbmc7XG4gICAgICB9XG5cbiAgICAgIHBlbmRpbmcucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGVmYXVsdExhbmcobGFuZyk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7IC8vIHdlIGFscmVhZHkgaGF2ZSB0aGlzIGxhbmd1YWdlXG4gICAgICB0aGlzLmNoYW5nZURlZmF1bHRMYW5nKGxhbmcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHVzZWRcbiAgICovXG4gIHB1YmxpYyBnZXREZWZhdWx0TGFuZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRMYW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGxhbmcgY3VycmVudGx5IHVzZWRcbiAgICovXG4gIHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBkb24ndCBjaGFuZ2UgdGhlIGxhbmd1YWdlIGlmIHRoZSBsYW5ndWFnZSBnaXZlbiBpcyBhbHJlYWR5IHNlbGVjdGVkXG4gICAgaWYgKGxhbmcgPT09IHRoaXMuY3VycmVudExhbmcpIHtcbiAgICAgIHJldHVybiBvZih0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSk7XG4gICAgfVxuXG4gICAgbGV0IHBlbmRpbmc6IE9ic2VydmFibGU8YW55PiA9IHRoaXMucmV0cmlldmVUcmFuc2xhdGlvbnMobGFuZyk7XG5cbiAgICBpZiAodHlwZW9mIHBlbmRpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIG9uIGluaXQgc2V0IHRoZSBjdXJyZW50TGFuZyBpbW1lZGlhdGVseVxuICAgICAgaWYgKCF0aGlzLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExhbmcgPSBsYW5nO1xuICAgICAgfVxuXG4gICAgICBwZW5kaW5nLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYW5nZUxhbmcobGFuZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcGVuZGluZztcbiAgICB9IGVsc2UgeyAvLyB3ZSBoYXZlIHRoaXMgbGFuZ3VhZ2UsIHJldHVybiBhbiBPYnNlcnZhYmxlXG4gICAgICB0aGlzLmNoYW5nZUxhbmcobGFuZyk7XG5cbiAgICAgIHJldHVybiBvZih0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgZ2l2ZW4gdHJhbnNsYXRpb25zXG4gICAqL1xuICBwcml2YXRlIHJldHJpZXZlVHJhbnNsYXRpb25zKGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IHBlbmRpbmc6IE9ic2VydmFibGU8YW55PjtcblxuICAgIC8vIGlmIHRoaXMgbGFuZ3VhZ2UgaXMgdW5hdmFpbGFibGUsIGFzayBmb3IgaXRcbiAgICBpZiAodHlwZW9mIHRoaXMudHJhbnNsYXRpb25zW2xhbmddID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLl90cmFuc2xhdGlvblJlcXVlc3RzW2xhbmddID0gdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXSB8fCB0aGlzLmdldFRyYW5zbGF0aW9uKGxhbmcpO1xuICAgICAgcGVuZGluZyA9IHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHNbbGFuZ107XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbiBvYmplY3Qgb2YgdHJhbnNsYXRpb25zIGZvciBhIGdpdmVuIGxhbmd1YWdlIHdpdGggdGhlIGN1cnJlbnQgbG9hZGVyXG4gICAqIGFuZCBwYXNzZXMgaXQgdGhyb3VnaCB0aGUgY29tcGlsZXJcbiAgICovXG4gIHB1YmxpYyBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMucGVuZGluZyA9IHRydWU7XG4gICAgY29uc3QgbG9hZGluZ1RyYW5zbGF0aW9ucyA9IHRoaXMuY3VycmVudExvYWRlci5nZXRUcmFuc2xhdGlvbihsYW5nKS5waXBlKHNoYXJlKCkpO1xuICAgIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9ucyA9IGxvYWRpbmdUcmFuc2xhdGlvbnMucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBtYXAoKHJlczogT2JqZWN0KSA9PiB0aGlzLmNvbXBpbGVyLmNvbXBpbGVUcmFuc2xhdGlvbnMocmVzLCBsYW5nKSksXG4gICAgICBzaGFyZSgpXG4gICAgKTtcblxuICAgIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9uc1xuICAgICAgLnN1YnNjcmliZSgocmVzOiBPYmplY3QpID0+IHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPSByZXM7XG4gICAgICAgIHRoaXMudXBkYXRlTGFuZ3MoKTtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICB9LCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBsb2FkaW5nVHJhbnNsYXRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hbnVhbGx5IHNldHMgYW4gb2JqZWN0IG9mIHRyYW5zbGF0aW9ucyBmb3IgYSBnaXZlbiBsYW5ndWFnZVxuICAgKiBhZnRlciBwYXNzaW5nIGl0IHRocm91Z2ggdGhlIGNvbXBpbGVyXG4gICAqL1xuICBwdWJsaWMgc2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nLCB0cmFuc2xhdGlvbnM6IE9iamVjdCwgc2hvdWxkTWVyZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRyYW5zbGF0aW9ucyA9IHRoaXMuY29tcGlsZXIuY29tcGlsZVRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnMsIGxhbmcpO1xuICAgIGlmIChzaG91bGRNZXJnZSAmJiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSkge1xuICAgICAgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPSBtZXJnZURlZXAodGhpcy50cmFuc2xhdGlvbnNbbGFuZ10sIHRyYW5zbGF0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHJhbnNsYXRpb25zW2xhbmddID0gdHJhbnNsYXRpb25zO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUxhbmdzKCk7XG4gICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoe2xhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ119KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSBhdmFpbGFibGUgbGFuZ3NcbiAgICovXG4gIHB1YmxpYyBnZXRMYW5ncygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5sYW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYXZhaWxhYmxlIGxhbmdzXG4gICAqL1xuICBwdWJsaWMgYWRkTGFuZ3MobGFuZ3M6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcbiAgICBsYW5ncy5mb3JFYWNoKChsYW5nOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aGlzLmxhbmdzLmluZGV4T2YobGFuZykgPT09IC0xKSB7XG4gICAgICAgIHRoaXMubGFuZ3MucHVzaChsYW5nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIGxhbmdzXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZUxhbmdzKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkTGFuZ3MoT2JqZWN0LmtleXModGhpcy50cmFuc2xhdGlvbnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXJzZWQgcmVzdWx0IG9mIHRoZSB0cmFuc2xhdGlvbnNcbiAgICovXG4gIHB1YmxpYyBnZXRQYXJzZWRSZXN1bHQodHJhbnNsYXRpb25zOiBhbnksIGtleTogYW55LCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IGFueSB7XG4gICAgbGV0IHJlczogc3RyaW5nIHwgT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gICAgaWYgKGtleSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fSxcbiAgICAgICAgb2JzZXJ2YWJsZXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGsgb2Yga2V5KSB7XG4gICAgICAgIHJlc3VsdFtrXSA9IHRoaXMuZ2V0UGFyc2VkUmVzdWx0KHRyYW5zbGF0aW9ucywgaywgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdFtrXS5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIG9ic2VydmFibGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9ic2VydmFibGVzKSB7XG4gICAgICAgIGxldCBtZXJnZWRPYnM6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAgICAgZm9yIChsZXQgayBvZiBrZXkpIHtcbiAgICAgICAgICBsZXQgb2JzID0gdHlwZW9mIHJlc3VsdFtrXS5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIiA/IHJlc3VsdFtrXSA6IG9mKHJlc3VsdFtrXSBhcyBzdHJpbmcpO1xuICAgICAgICAgIGlmICh0eXBlb2YgbWVyZ2VkT2JzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBtZXJnZWRPYnMgPSBvYnM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lcmdlZE9icyA9IG1lcmdlKG1lcmdlZE9icywgb2JzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lcmdlZE9icy5waXBlKFxuICAgICAgICAgIHRvQXJyYXkoKSxcbiAgICAgICAgICBtYXAoKGFycjogQXJyYXk8c3RyaW5nPikgPT4ge1xuICAgICAgICAgICAgbGV0IG9iajogYW55ID0ge307XG4gICAgICAgICAgICBhcnIuZm9yRWFjaCgodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICBvYmpba2V5W2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAodHJhbnNsYXRpb25zKSB7XG4gICAgICByZXMgPSB0aGlzLnBhcnNlci5pbnRlcnBvbGF0ZSh0aGlzLnBhcnNlci5nZXRWYWx1ZSh0cmFuc2xhdGlvbnMsIGtleSksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlcyA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLmRlZmF1bHRMYW5nICYmIHRoaXMuZGVmYXVsdExhbmcgIT09IHRoaXMuY3VycmVudExhbmcgJiYgdGhpcy51c2VEZWZhdWx0TGFuZykge1xuICAgICAgcmVzID0gdGhpcy5wYXJzZXIuaW50ZXJwb2xhdGUodGhpcy5wYXJzZXIuZ2V0VmFsdWUodGhpcy50cmFuc2xhdGlvbnNbdGhpcy5kZWZhdWx0TGFuZ10sIGtleSksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbGV0IHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyA9IHtrZXksIHRyYW5zbGF0ZVNlcnZpY2U6IHRoaXN9O1xuICAgICAgaWYgKHR5cGVvZiBpbnRlcnBvbGF0ZVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFyYW1zLmludGVycG9sYXRlUGFyYW1zID0gaW50ZXJwb2xhdGVQYXJhbXM7XG4gICAgICB9XG4gICAgICByZXMgPSB0aGlzLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIuaGFuZGxlKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiByZXMgIT09IFwidW5kZWZpbmVkXCIgPyByZXMgOiBrZXk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgdHJhbnNsYXRlZCB2YWx1ZSBvZiBhIGtleSAob3IgYW4gYXJyYXkgb2Yga2V5cylcbiAgICogQHJldHVybnMgdGhlIHRyYW5zbGF0ZWQga2V5LCBvciBhbiBvYmplY3Qgb2YgdHJhbnNsYXRlZCBrZXlzXG4gICAqL1xuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPHN0cmluZyB8IGFueT4ge1xuICAgIGlmICghaXNEZWZpbmVkKGtleSkgfHwgIWtleS5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIFwia2V5XCIgcmVxdWlyZWRgKTtcbiAgICB9XG4gICAgLy8gY2hlY2sgaWYgd2UgYXJlIGxvYWRpbmcgYSBuZXcgdHJhbnNsYXRpb24gdG8gdXNlXG4gICAgaWYgKHRoaXMucGVuZGluZykge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8c3RyaW5nPikgPT4ge1xuICAgICAgICBsZXQgb25Db21wbGV0ZSA9IChyZXM6IHN0cmluZykgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgb25FcnJvciA9IChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9ucy5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgcmVzID0gdGhpcy5nZXRQYXJzZWRSZXN1bHQocmVzLCBrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmVzLnN1YnNjcmliZShvbkNvbXBsZXRlLCBvbkVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25Db21wbGV0ZShyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgb25FcnJvcik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlcyA9IHRoaXMuZ2V0UGFyc2VkUmVzdWx0KHRoaXMudHJhbnNsYXRpb25zW3RoaXMuY3VycmVudExhbmddLCBrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb2YocmVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmVhbSBvZiB0cmFuc2xhdGVkIHZhbHVlcyBvZiBhIGtleSAob3IgYW4gYXJyYXkgb2Yga2V5cykgd2hpY2ggdXBkYXRlc1xuICAgKiB3aGVuZXZlciB0aGUgbGFuZ3VhZ2UgY2hhbmdlcy5cbiAgICogQHJldHVybnMgQSBzdHJlYW0gb2YgdGhlIHRyYW5zbGF0ZWQga2V5LCBvciBhbiBvYmplY3Qgb2YgdHJhbnNsYXRlZCBrZXlzXG4gICAqL1xuICBwdWJsaWMgc3RyZWFtKGtleTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPHN0cmluZyB8IGFueT4ge1xuICAgIGlmICghaXNEZWZpbmVkKGtleSkgfHwgIWtleS5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIFwia2V5XCIgcmVxdWlyZWRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uY2F0KFxuICAgICAgdGhpcy5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyksXG4gICAgICB0aGlzLm9uTGFuZ0NoYW5nZS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGV2ZW50OiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLmdldFBhcnNlZFJlc3VsdChldmVudC50cmFuc2xhdGlvbnMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdHJhbnNsYXRpb24gaW5zdGFudGx5IGZyb20gdGhlIGludGVybmFsIHN0YXRlIG9mIGxvYWRlZCB0cmFuc2xhdGlvbi5cbiAgICogQWxsIHJ1bGVzIHJlZ2FyZGluZyB0aGUgY3VycmVudCBsYW5ndWFnZSwgdGhlIHByZWZlcnJlZCBsYW5ndWFnZSBvZiBldmVuIGZhbGxiYWNrIGxhbmd1YWdlcyB3aWxsIGJlIHVzZWQgZXhjZXB0IGFueSBwcm9taXNlIGhhbmRsaW5nLlxuICAgKi9cbiAgcHVibGljIGluc3RhbnQoa2V5OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IHN0cmluZyB8IGFueSB7XG4gICAgaWYgKCFpc0RlZmluZWQoa2V5KSB8fCAha2V5Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgXCJrZXlcIiByZXF1aXJlZGApO1xuICAgIH1cblxuICAgIGxldCByZXMgPSB0aGlzLmdldFBhcnNlZFJlc3VsdCh0aGlzLnRyYW5zbGF0aW9uc1t0aGlzLmN1cnJlbnRMYW5nXSwga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgbGV0IG9iajogYW55ID0ge307XG4gICAgICAgIGtleS5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgb2JqW2tleVtpbmRleF1dID0ga2V5W2luZGV4XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0cmFuc2xhdGVkIHZhbHVlIG9mIGEga2V5LCBhZnRlciBjb21waWxpbmcgaXRcbiAgICovXG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyA9IHRoaXMuY3VycmVudExhbmcpOiB2b2lkIHtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXVtrZXldID0gdGhpcy5jb21waWxlci5jb21waWxlKHZhbHVlLCBsYW5nKTtcbiAgICB0aGlzLnVwZGF0ZUxhbmdzKCk7XG4gICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoe2xhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ119KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBjdXJyZW50IGxhbmdcbiAgICovXG4gIHByaXZhdGUgY2hhbmdlTGFuZyhsYW5nOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRMYW5nID0gbGFuZztcbiAgICB0aGlzLm9uTGFuZ0NoYW5nZS5lbWl0KHtsYW5nOiBsYW5nLCB0cmFuc2xhdGlvbnM6IHRoaXMudHJhbnNsYXRpb25zW2xhbmddfSk7XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBubyBkZWZhdWx0IGxhbmcsIHVzZSB0aGUgb25lIHRoYXQgd2UganVzdCBzZXRcbiAgICBpZiAoIXRoaXMuZGVmYXVsdExhbmcpIHtcbiAgICAgIHRoaXMuY2hhbmdlRGVmYXVsdExhbmcobGFuZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGRlZmF1bHQgbGFuZ1xuICAgKi9cbiAgcHJpdmF0ZSBjaGFuZ2VEZWZhdWx0TGFuZyhsYW5nOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmRlZmF1bHRMYW5nID0gbGFuZztcbiAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2UuZW1pdCh7bGFuZzogbGFuZywgdHJhbnNsYXRpb25zOiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0byByZWxvYWQgdGhlIGxhbmcgZmlsZSBmcm9tIHRoZSBmaWxlXG4gICAqL1xuICBwdWJsaWMgcmVsb2FkTGFuZyhsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMucmVzZXRMYW5nKGxhbmcpO1xuICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0aW9uKGxhbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgaW5uZXIgdHJhbnNsYXRpb25cbiAgICovXG4gIHB1YmxpYyByZXNldExhbmcobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYW5ndWFnZSBjb2RlIG5hbWUgZnJvbSB0aGUgYnJvd3NlciwgZS5nLiBcImRlXCJcbiAgICovXG4gIHB1YmxpYyBnZXRCcm93c2VyTGFuZygpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbGV0IGJyb3dzZXJMYW5nOiBhbnkgPSB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlcyA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIDogbnVsbDtcbiAgICBicm93c2VyTGFuZyA9IGJyb3dzZXJMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci5icm93c2VyTGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyTGFuZ3VhZ2U7XG5cbiAgICBpZiAoYnJvd3NlckxhbmcuaW5kZXhPZignLScpICE9PSAtMSkge1xuICAgICAgYnJvd3NlckxhbmcgPSBicm93c2VyTGFuZy5zcGxpdCgnLScpWzBdO1xuICAgIH1cblxuICAgIGlmIChicm93c2VyTGFuZy5pbmRleE9mKCdfJykgIT09IC0xKSB7XG4gICAgICBicm93c2VyTGFuZyA9IGJyb3dzZXJMYW5nLnNwbGl0KCdfJylbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJyb3dzZXJMYW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1bHR1cmUgbGFuZ3VhZ2UgY29kZSBuYW1lIGZyb20gdGhlIGJyb3dzZXIsIGUuZy4gXCJkZS1ERVwiXG4gICAqL1xuICBwdWJsaWMgZ2V0QnJvd3NlckN1bHR1cmVMYW5nKCk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBsZXQgYnJvd3NlckN1bHR1cmVMYW5nOiBhbnkgPSB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlcyA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIDogbnVsbDtcbiAgICBicm93c2VyQ3VsdHVyZUxhbmcgPSBicm93c2VyQ3VsdHVyZUxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZTtcblxuICAgIHJldHVybiBicm93c2VyQ3VsdHVyZUxhbmc7XG4gIH1cbn1cbiIsImltcG9ydCB7QWZ0ZXJWaWV3Q2hlY2tlZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0RlZmF1bHRMYW5nQ2hhbmdlRXZlbnQsIExhbmdDaGFuZ2VFdmVudCwgVHJhbnNsYXRlU2VydmljZSwgVHJhbnNsYXRpb25DaGFuZ2VFdmVudH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQge2VxdWFscywgaXNEZWZpbmVkfSBmcm9tICcuL3V0aWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdHJhbnNsYXRlXSxbbmd4LXRyYW5zbGF0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XG4gIGtleTogc3RyaW5nO1xuICBsYXN0UGFyYW1zOiBhbnk7XG4gIGN1cnJlbnRQYXJhbXM6IGFueTtcbiAgb25MYW5nQ2hhbmdlU3ViOiBTdWJzY3JpcHRpb247XG4gIG9uRGVmYXVsdExhbmdDaGFuZ2VTdWI6IFN1YnNjcmlwdGlvbjtcbiAgb25UcmFuc2xhdGlvbkNoYW5nZVN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIEBJbnB1dCgpIHNldCB0cmFuc2xhdGUoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgIHRoaXMuY2hlY2tOb2RlcygpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpIHNldCB0cmFuc2xhdGVQYXJhbXMocGFyYW1zOiBhbnkpIHtcbiAgICBpZiAoIWVxdWFscyh0aGlzLmN1cnJlbnRQYXJhbXMsIHBhcmFtcykpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhcmFtcyA9IHBhcmFtcztcbiAgICAgIHRoaXMuY2hlY2tOb2Rlcyh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIC8vIHN1YnNjcmliZSB0byBvblRyYW5zbGF0aW9uQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSB0cmFuc2xhdGlvbnMgb2YgdGhlIGN1cnJlbnQgbGFuZyBjaGFuZ2VcbiAgICBpZiAoIXRoaXMub25UcmFuc2xhdGlvbkNoYW5nZVN1Yikge1xuICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlU3ViID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogVHJhbnNsYXRpb25DaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGFuZyA9PT0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgICAgdGhpcy5jaGVja05vZGVzKHRydWUsIGV2ZW50LnRyYW5zbGF0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHN1YnNjcmliZSB0byBvbkxhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGxhbmd1YWdlIGNoYW5nZXNcbiAgICBpZiAoIXRoaXMub25MYW5nQ2hhbmdlU3ViKSB7XG4gICAgICB0aGlzLm9uTGFuZ0NoYW5nZVN1YiA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tOb2Rlcyh0cnVlLCBldmVudC50cmFuc2xhdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc3Vic2NyaWJlIHRvIG9uRGVmYXVsdExhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgY2hhbmdlc1xuICAgIGlmICghdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlU3ViKSB7XG4gICAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2VTdWIgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tOb2Rlcyh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLmNoZWNrTm9kZXMoKTtcbiAgfVxuXG4gIGNoZWNrTm9kZXMoZm9yY2VVcGRhdGUgPSBmYWxzZSwgdHJhbnNsYXRpb25zPzogYW55KSB7XG4gICAgbGV0IG5vZGVzOiBOb2RlTGlzdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgLy8gaWYgdGhlIGVsZW1lbnQgaXMgZW1wdHlcbiAgICBpZiAoIW5vZGVzLmxlbmd0aCkge1xuICAgICAgLy8gd2UgYWRkIHRoZSBrZXkgYXMgY29udGVudFxuICAgICAgdGhpcy5zZXRDb250ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLmtleSk7XG4gICAgICBub2RlcyA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxldCBub2RlOiBhbnkgPSBub2Rlc1tpXTtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7IC8vIG5vZGUgdHlwZSAzIGlzIGEgdGV4dCBub2RlXG4gICAgICAgIGxldCBrZXk6IHN0cmluZztcbiAgICAgICAgaWYgKHRoaXMua2V5KSB7XG4gICAgICAgICAga2V5ID0gdGhpcy5rZXk7XG4gICAgICAgICAgaWYgKGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICBub2RlLmxhc3RLZXkgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudChub2RlKTtcbiAgICAgICAgICBsZXQgdHJpbW1lZENvbnRlbnQgPSBjb250ZW50LnRyaW0oKTtcbiAgICAgICAgICBpZiAodHJpbW1lZENvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyB3ZSB3YW50IHRvIHVzZSB0aGUgY29udGVudCBhcyBhIGtleSwgbm90IHRoZSB0cmFuc2xhdGlvbiB2YWx1ZVxuICAgICAgICAgICAgaWYgKGNvbnRlbnQgIT09IG5vZGUuY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgIGtleSA9IHRyaW1tZWRDb250ZW50O1xuICAgICAgICAgICAgICAvLyB0aGUgY29udGVudCB3YXMgY2hhbmdlZCBmcm9tIHRoZSB1c2VyLCB3ZSdsbCB1c2UgaXQgYXMgYSByZWZlcmVuY2UgaWYgbmVlZGVkXG4gICAgICAgICAgICAgIG5vZGUub3JpZ2luYWxDb250ZW50ID0gdGhpcy5nZXRDb250ZW50KG5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLm9yaWdpbmFsQ29udGVudCAmJiBmb3JjZVVwZGF0ZSkgeyAvLyB0aGUgY29udGVudCBzZWVtcyBvaywgYnV0IHRoZSBsYW5nIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICAgIG5vZGUubGFzdEtleSA9IG51bGw7XG4gICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IGNvbnRlbnQgaXMgdGhlIHRyYW5zbGF0aW9uLCBub3QgdGhlIGtleSwgdXNlIHRoZSBsYXN0IHJlYWwgY29udGVudCBhcyBrZXlcbiAgICAgICAgICAgICAga2V5ID0gbm9kZS5vcmlnaW5hbENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGtleSwgbm9kZSwgdHJhbnNsYXRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWx1ZShrZXk6IHN0cmluZywgbm9kZTogYW55LCB0cmFuc2xhdGlvbnM6IGFueSkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChub2RlLmxhc3RLZXkgPT09IGtleSAmJiB0aGlzLmxhc3RQYXJhbXMgPT09IHRoaXMuY3VycmVudFBhcmFtcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGFzdFBhcmFtcyA9IHRoaXMuY3VycmVudFBhcmFtcztcblxuICAgICAgbGV0IG9uVHJhbnNsYXRpb24gPSAocmVzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHJlcyAhPT0ga2V5KSB7XG4gICAgICAgICAgbm9kZS5sYXN0S2V5ID0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIGlmICghbm9kZS5vcmlnaW5hbENvbnRlbnQpIHtcbiAgICAgICAgICBub2RlLm9yaWdpbmFsQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmN1cnJlbnRWYWx1ZSA9IGlzRGVmaW5lZChyZXMpID8gcmVzIDogKG5vZGUub3JpZ2luYWxDb250ZW50IHx8IGtleSk7XG4gICAgICAgIC8vIHdlIHJlcGxhY2UgaW4gdGhlIG9yaWdpbmFsIGNvbnRlbnQgdG8gcHJlc2VydmUgc3BhY2VzIHRoYXQgd2UgbWlnaHQgaGF2ZSB0cmltbWVkXG4gICAgICAgIHRoaXMuc2V0Q29udGVudChub2RlLCB0aGlzLmtleSA/IG5vZGUuY3VycmVudFZhbHVlIDogbm9kZS5vcmlnaW5hbENvbnRlbnQucmVwbGFjZShrZXksIG5vZGUuY3VycmVudFZhbHVlKSk7XG4gICAgICAgIHRoaXMuX3JlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChpc0RlZmluZWQodHJhbnNsYXRpb25zKSkge1xuICAgICAgICBsZXQgcmVzID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFBhcnNlZFJlc3VsdCh0cmFuc2xhdGlvbnMsIGtleSwgdGhpcy5jdXJyZW50UGFyYW1zKTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXMuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uVHJhbnNsYXRpb24ocmVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldChrZXksIHRoaXMuY3VycmVudFBhcmFtcykuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvbnRlbnQobm9kZTogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXNEZWZpbmVkKG5vZGUudGV4dENvbnRlbnQpID8gbm9kZS50ZXh0Q29udGVudCA6IG5vZGUuZGF0YTtcbiAgfVxuXG4gIHNldENvbnRlbnQobm9kZTogYW55LCBjb250ZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoaXNEZWZpbmVkKG5vZGUudGV4dENvbnRlbnQpKSB7XG4gICAgICBub2RlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5kYXRhID0gY29udGVudDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5vbkxhbmdDaGFuZ2VTdWIpIHtcbiAgICAgIHRoaXMub25MYW5nQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZVN1Yikge1xuICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZVN1Yikge1xuICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIE9uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlZmF1bHRMYW5nQ2hhbmdlRXZlbnQsIExhbmdDaGFuZ2VFdmVudCwgVHJhbnNsYXRlU2VydmljZSwgVHJhbnNsYXRpb25DaGFuZ2VFdmVudH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQge2VxdWFscywgaXNEZWZpbmVkfSBmcm9tICcuL3V0aWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5AUGlwZSh7XG4gIG5hbWU6ICd0cmFuc2xhdGUnLFxuICBwdXJlOiBmYWxzZSAvLyByZXF1aXJlZCB0byB1cGRhdGUgdGhlIHZhbHVlIHdoZW4gdGhlIHByb21pc2UgaXMgcmVzb2x2ZWRcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgbGFzdEtleTogc3RyaW5nO1xuICBsYXN0UGFyYW1zOiBhbnlbXTtcbiAgb25UcmFuc2xhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQ+O1xuICBvbkxhbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMYW5nQ2hhbmdlRXZlbnQ+O1xuICBvbkRlZmF1bHRMYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGVmYXVsdExhbmdDaGFuZ2VFdmVudD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgX3JlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKGtleTogc3RyaW5nLCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCwgdHJhbnNsYXRpb25zPzogYW55KTogdm9pZCB7XG4gICAgbGV0IG9uVHJhbnNsYXRpb24gPSAocmVzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSByZXMgIT09IHVuZGVmaW5lZCA/IHJlcyA6IGtleTtcbiAgICAgIHRoaXMubGFzdEtleSA9IGtleTtcbiAgICAgIHRoaXMuX3JlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9O1xuICAgIGlmICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgIGxldCByZXMgPSB0aGlzLnRyYW5zbGF0ZS5nZXRQYXJzZWRSZXN1bHQodHJhbnNsYXRpb25zLCBrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzLnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXMuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25UcmFuc2xhdGlvbihyZXMpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcykuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICB9XG5cbiAgdHJhbnNmb3JtKHF1ZXJ5OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcbiAgICBpZiAoIXF1ZXJ5IHx8IHF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cblxuICAgIC8vIGlmIHdlIGFzayBhbm90aGVyIHRpbWUgZm9yIHRoZSBzYW1lIGtleSwgcmV0dXJuIHRoZSBsYXN0IHZhbHVlXG4gICAgaWYgKGVxdWFscyhxdWVyeSwgdGhpcy5sYXN0S2V5KSAmJiBlcXVhbHMoYXJncywgdGhpcy5sYXN0UGFyYW1zKSkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGludGVycG9sYXRlUGFyYW1zOiBPYmplY3Q7XG4gICAgaWYgKGlzRGVmaW5lZChhcmdzWzBdKSAmJiBhcmdzLmxlbmd0aCkge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyAmJiBhcmdzWzBdLmxlbmd0aCkge1xuICAgICAgICAvLyB3ZSBhY2NlcHQgb2JqZWN0cyB3cml0dGVuIGluIHRoZSB0ZW1wbGF0ZSBzdWNoIGFzIHtuOjF9LCB7J24nOjF9LCB7bjondid9XG4gICAgICAgIC8vIHdoaWNoIGlzIHdoeSB3ZSBtaWdodCBuZWVkIHRvIGNoYW5nZSBpdCB0byByZWFsIEpTT04gb2JqZWN0cyBzdWNoIGFzIHtcIm5cIjoxfSBvciB7XCJuXCI6XCJ2XCJ9XG4gICAgICAgIGxldCB2YWxpZEFyZ3M6IHN0cmluZyA9IGFyZ3NbMF1cbiAgICAgICAgICAucmVwbGFjZSgvKFxcJyk/KFthLXpBLVowLTlfXSspKFxcJyk/KFxccyk/Oi9nLCAnXCIkMlwiOicpXG4gICAgICAgICAgLnJlcGxhY2UoLzooXFxzKT8oXFwnKSguKj8pKFxcJykvZywgJzpcIiQzXCInKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpbnRlcnBvbGF0ZVBhcmFtcyA9IEpTT04ucGFyc2UodmFsaWRBcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgV3JvbmcgcGFyYW1ldGVyIGluIFRyYW5zbGF0ZVBpcGUuIEV4cGVjdGVkIGEgdmFsaWQgT2JqZWN0LCByZWNlaXZlZDogJHthcmdzWzBdfWApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgICBpbnRlcnBvbGF0ZVBhcmFtcyA9IGFyZ3NbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RvcmUgdGhlIHF1ZXJ5LCBpbiBjYXNlIGl0IGNoYW5nZXNcbiAgICB0aGlzLmxhc3RLZXkgPSBxdWVyeTtcblxuICAgIC8vIHN0b3JlIHRoZSBwYXJhbXMsIGluIGNhc2UgdGhleSBjaGFuZ2VcbiAgICB0aGlzLmxhc3RQYXJhbXMgPSBhcmdzO1xuXG4gICAgLy8gc2V0IHRoZSB2YWx1ZVxuICAgIHRoaXMudXBkYXRlVmFsdWUocXVlcnksIGludGVycG9sYXRlUGFyYW1zKTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIGEgc3Vic2NyaXB0aW9uIHRvIG9uTGFuZ0NoYW5nZSwgY2xlYW4gaXRcbiAgICB0aGlzLl9kaXNwb3NlKCk7XG5cbiAgICAvLyBzdWJzY3JpYmUgdG8gb25UcmFuc2xhdGlvbkNoYW5nZSBldmVudCwgaW4gY2FzZSB0aGUgdHJhbnNsYXRpb25zIGNoYW5nZVxuICAgIGlmICghdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2UgPSB0aGlzLnRyYW5zbGF0ZS5vblRyYW5zbGF0aW9uQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubGFzdEtleSAmJiBldmVudC5sYW5nID09PSB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZykge1xuICAgICAgICAgIHRoaXMubGFzdEtleSA9IG51bGw7XG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShxdWVyeSwgaW50ZXJwb2xhdGVQYXJhbXMsIGV2ZW50LnRyYW5zbGF0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHN1YnNjcmliZSB0byBvbkxhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGxhbmd1YWdlIGNoYW5nZXNcbiAgICBpZiAoIXRoaXMub25MYW5nQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uTGFuZ0NoYW5nZSA9IHRoaXMudHJhbnNsYXRlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubGFzdEtleSkge1xuICAgICAgICAgIHRoaXMubGFzdEtleSA9IG51bGw7IC8vIHdlIHdhbnQgdG8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgcmV0dXJuIHRoZSBzYW1lIHZhbHVlIHVudGlsIGl0J3MgYmVlbiB1cGRhdGVkXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShxdWVyeSwgaW50ZXJwb2xhdGVQYXJhbXMsIGV2ZW50LnRyYW5zbGF0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHN1YnNjcmliZSB0byBvbkRlZmF1bHRMYW5nQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSBkZWZhdWx0IGxhbmd1YWdlIGNoYW5nZXNcbiAgICBpZiAoIXRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZSkge1xuICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlID0gdGhpcy50cmFuc2xhdGUub25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5sYXN0S2V5KSB7XG4gICAgICAgICAgdGhpcy5sYXN0S2V5ID0gbnVsbDsgLy8gd2Ugd2FudCB0byBtYWtlIHN1cmUgaXQgZG9lc24ndCByZXR1cm4gdGhlIHNhbWUgdmFsdWUgdW50aWwgaXQncyBiZWVuIHVwZGF0ZWRcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHF1ZXJ5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuIGFueSBleGlzdGluZyBzdWJzY3JpcHRpb24gdG8gY2hhbmdlIGV2ZW50c1xuICAgKi9cbiAgcHJpdmF0ZSBfZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub25MYW5nQ2hhbmdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5vbkxhbmdDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMub25MYW5nQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rpc3Bvc2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgUHJvdmlkZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1RyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlRmFrZUxvYWRlcn0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5sb2FkZXJcIjtcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQge01pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyfSBmcm9tIFwiLi9saWIvbWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVBhcnNlciwgVHJhbnNsYXRlRGVmYXVsdFBhcnNlcn0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5wYXJzZXJcIjtcbmltcG9ydCB7VHJhbnNsYXRlQ29tcGlsZXIsIFRyYW5zbGF0ZUZha2VDb21waWxlcn0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5jb21waWxlclwiO1xuaW1wb3J0IHtUcmFuc2xhdGVEaXJlY3RpdmV9IGZyb20gXCIuL2xpYi90cmFuc2xhdGUuZGlyZWN0aXZlXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gXCIuL2xpYi90cmFuc2xhdGUucGlwZVwiO1xuaW1wb3J0IHtUcmFuc2xhdGVTdG9yZX0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5zdG9yZVwiO1xuaW1wb3J0IHtVU0VfU1RPUkV9IGZyb20gXCIuL2xpYi90cmFuc2xhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtVU0VfREVGQVVMVF9MQU5HfSBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnNlcnZpY2VcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5sb2FkZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUuc2VydmljZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL21pc3NpbmctdHJhbnNsYXRpb24taGFuZGxlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5wYXJzZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUuY29tcGlsZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUuZGlyZWN0aXZlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnBpcGVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUuc3RvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGVNb2R1bGVDb25maWcge1xuICBsb2FkZXI/OiBQcm92aWRlcjtcbiAgY29tcGlsZXI/OiBQcm92aWRlcjtcbiAgcGFyc2VyPzogUHJvdmlkZXI7XG4gIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI/OiBQcm92aWRlcjtcbiAgLy8gaXNvbGF0ZSB0aGUgc2VydmljZSBpbnN0YW5jZSwgb25seSB3b3JrcyBmb3IgbGF6eSBsb2FkZWQgbW9kdWxlcyBvciBjb21wb25lbnRzIHdpdGggdGhlIFwicHJvdmlkZXJzXCIgcHJvcGVydHlcbiAgaXNvbGF0ZT86IGJvb2xlYW47XG4gIHVzZURlZmF1bHRMYW5nPzogYm9vbGVhbjtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBUcmFuc2xhdGVEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlTW9kdWxlIHtcbiAgLyoqXG4gICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHJvb3QgbW9kdWxlIHRvIHByb3ZpZGUgdGhlIFRyYW5zbGF0ZVNlcnZpY2VcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogVHJhbnNsYXRlTW9kdWxlQ29uZmlnID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRyYW5zbGF0ZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBjb25maWcubG9hZGVyIHx8IHtwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVGYWtlTG9hZGVyfSxcbiAgICAgICAgY29uZmlnLmNvbXBpbGVyIHx8IHtwcm92aWRlOiBUcmFuc2xhdGVDb21waWxlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZUZha2VDb21waWxlcn0sXG4gICAgICAgIGNvbmZpZy5wYXJzZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZVBhcnNlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZURlZmF1bHRQYXJzZXJ9LFxuICAgICAgICBjb25maWcubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB8fCB7cHJvdmlkZTogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgdXNlQ2xhc3M6IEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyfSxcbiAgICAgICAgVHJhbnNsYXRlU3RvcmUsXG4gICAgICAgIHtwcm92aWRlOiBVU0VfU1RPUkUsIHVzZVZhbHVlOiBjb25maWcuaXNvbGF0ZX0sXG4gICAgICAgIHtwcm92aWRlOiBVU0VfREVGQVVMVF9MQU5HLCB1c2VWYWx1ZTogY29uZmlnLnVzZURlZmF1bHRMYW5nfSxcbiAgICAgICAgVHJhbnNsYXRlU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgbWV0aG9kIGluIHlvdXIgb3RoZXIgKG5vbiByb290KSBtb2R1bGVzIHRvIGltcG9ydCB0aGUgZGlyZWN0aXZlL3BpcGVcbiAgICovXG4gIHN0YXRpYyBmb3JDaGlsZChjb25maWc6IFRyYW5zbGF0ZU1vZHVsZUNvbmZpZyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUcmFuc2xhdGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgY29uZmlnLmxvYWRlciB8fCB7cHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLCB1c2VDbGFzczogVHJhbnNsYXRlRmFrZUxvYWRlcn0sXG4gICAgICAgIGNvbmZpZy5jb21waWxlciB8fCB7cHJvdmlkZTogVHJhbnNsYXRlQ29tcGlsZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVGYWtlQ29tcGlsZXJ9LFxuICAgICAgICBjb25maWcucGFyc2VyIHx8IHtwcm92aWRlOiBUcmFuc2xhdGVQYXJzZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyfSxcbiAgICAgICAgY29uZmlnLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfHwge3Byb3ZpZGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIHVzZUNsYXNzOiBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcn0sXG4gICAgICAgIHtwcm92aWRlOiBVU0VfU1RPUkUsIHVzZVZhbHVlOiBjb25maWcuaXNvbGF0ZX0sXG4gICAgICAgIHtwcm92aWRlOiBVU0VfREVGQVVMVF9MQU5HLCB1c2VWYWx1ZTogY29uZmlnLnVzZURlZmF1bHRMYW5nfSxcbiAgICAgICAgVHJhbnNsYXRlU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBOzs7O0lBQUE7S0FFQztJQUFELHNCQUFDO0NBQUEsSUFBQTs7OztBQUtEO0lBQ3lDQSx1Q0FBZTtJQUR4RDs7S0FLQzs7Ozs7SUFIQyw0Q0FBYzs7OztJQUFkLFVBQWUsSUFBWTtRQUN6QixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNmOztnQkFKRixVQUFVOztJQUtYLDBCQUFDO0NBQUEsQ0FKd0MsZUFBZTs7Ozs7O0FDWHhEOzs7QUFvQkE7Ozs7SUFBQTtLQVdDO0lBQUQsZ0NBQUM7Q0FBQSxJQUFBOzs7O0FBS0Q7SUFBQTtLQUtDOzs7OztJQUhDLDhDQUFNOzs7O0lBQU4sVUFBTyxNQUF1QztRQUM1QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDbkI7O2dCQUpGLFVBQVU7O0lBS1gsb0NBQUM7Q0FMRDs7Ozs7Ozs7O0FDbENBOzs7O0lBQUE7S0FJQztJQUFELHdCQUFDO0NBQUEsSUFBQTs7OztBQUtEO0lBQzJDQSx5Q0FBaUI7SUFENUQ7O0tBU0M7Ozs7OztJQVBDLHVDQUFPOzs7OztJQUFQLFVBQVEsS0FBYSxFQUFFLElBQVk7UUFDakMsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7O0lBRUQsbURBQW1COzs7OztJQUFuQixVQUFvQixZQUFpQixFQUFFLElBQVk7UUFDakQsT0FBTyxZQUFZLENBQUM7S0FDckI7O2dCQVJGLFVBQVU7O0lBU1gsNEJBQUM7Q0FBQSxDQVIwQyxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRTVELFNBQWdC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

/***/ }),

/***/ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js ***!
  \************************************************************************************/
/*! exports provided: TranslateHttpLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateHttpLoader", function() { return TranslateHttpLoader; });
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TranslateHttpLoader = /** @class */ (function () {
    function TranslateHttpLoader(http, prefix, suffix) {
        if (prefix === void 0) { prefix = "/assets/i18n/"; }
        if (suffix === void 0) { suffix = ".json"; }
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
    }
    /**
     * Gets the translations from the server
     */
    /**
     * Gets the translations from the server
     * @param {?} lang
     * @return {?}
     */
    TranslateHttpLoader.prototype.getTranslation = /**
     * Gets the translations from the server
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        return this.http.get("" + this.prefix + lang + this.suffix);
    };
    return TranslateHttpLoader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyYW5zbGF0ZS1odHRwLWxvYWRlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXIvbGliL2h0dHAtbG9hZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge1RyYW5zbGF0ZUxvYWRlcn0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVIdHRwTG9hZGVyIGltcGxlbWVudHMgVHJhbnNsYXRlTG9hZGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcHJlZml4OiBzdHJpbmcgPSBcIi9hc3NldHMvaTE4bi9cIiwgcHVibGljIHN1ZmZpeDogc3RyaW5nID0gXCIuanNvblwiKSB7fVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB0cmFuc2xhdGlvbnMgZnJvbSB0aGUgc2VydmVyXG4gICAqL1xuICBwdWJsaWMgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxPYmplY3Q+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnByZWZpeH0ke2xhbmd9JHt0aGlzLnN1ZmZpeH1gKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQTtJQUNFLDZCQUFvQixJQUFnQixFQUFTLE1BQWdDLEVBQVMsTUFBd0I7UUFBakUsdUJBQUEsRUFBQSx3QkFBZ0M7UUFBUyx1QkFBQSxFQUFBLGdCQUF3QjtRQUExRixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBMEI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtLQUFJOzs7Ozs7Ozs7SUFLM0csNENBQWM7Ozs7O0lBQXJCLFVBQXNCLElBQVk7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFRLENBQUMsQ0FBQztLQUM3RDtJQUNILDBCQUFDO0NBQUE7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./node_modules/primeng/api.js":
/*!*************************************!*\
  !*** ./node_modules/primeng/api.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/common/api */ "./node_modules/primeng/components/common/api.js"));

/***/ }),

/***/ "./node_modules/primeng/card.js":
/*!**************************************!*\
  !*** ./node_modules/primeng/card.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/card/card */ "./node_modules/primeng/components/card/card.js"));

/***/ }),

/***/ "./node_modules/primeng/components/card/card.js":
/*!******************************************************!*\
  !*** ./node_modules/primeng/components/card/card.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var Card = /** @class */ (function () {
    function Card(el) {
        this.el = el;
    }
    Card.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Card.prototype, "header", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Card.prototype, "subheader", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Card.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Card.prototype, "styleClass", void 0);
    __decorate([
        core_1.ContentChild(shared_1.Header, { static: false }),
        __metadata("design:type", Object)
    ], Card.prototype, "headerFacet", void 0);
    __decorate([
        core_1.ContentChild(shared_1.Footer, { static: false }),
        __metadata("design:type", Object)
    ], Card.prototype, "footerFacet", void 0);
    Card = __decorate([
        core_1.Component({
            selector: 'p-card',
            template: "\n        <div [ngClass]=\"'ui-card ui-widget ui-widget-content ui-corner-all'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-card-header\" *ngIf=\"headerFacet\">\n               <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <div class=\"ui-card-body\">\n                <div class=\"ui-card-title\" *ngIf=\"header\">{{header}}</div>\n                <div class=\"ui-card-subtitle\" *ngIf=\"subheader\">{{subheader}}</div>\n                <div class=\"ui-card-content\">\n                    <ng-content></ng-content>\n                </div>\n                <div class=\"ui-card-footer\" *ngIf=\"footerFacet\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                </div>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], Card);
    return Card;
}());
exports.Card = Card;
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Card, shared_1.SharedModule],
            declarations: [Card]
        })
    ], CardModule);
    return CardModule;
}());
exports.CardModule = CardModule;
//# sourceMappingURL=card.js.map

/***/ }),

/***/ "./node_modules/primeng/components/common/api.js":
/*!*******************************************************!*\
  !*** ./node_modules/primeng/components/common/api.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
exports.DomHandler = domhandler_1.DomHandler;
var treedragdropservice_1 = __webpack_require__(/*! ./treedragdropservice */ "./node_modules/primeng/components/common/treedragdropservice.js");
exports.TreeDragDropService = treedragdropservice_1.TreeDragDropService;
var confirmationservice_1 = __webpack_require__(/*! ./confirmationservice */ "./node_modules/primeng/components/common/confirmationservice.js");
exports.ConfirmationService = confirmationservice_1.ConfirmationService;
var messageservice_1 = __webpack_require__(/*! ./messageservice */ "./node_modules/primeng/components/common/messageservice.js");
exports.MessageService = messageservice_1.MessageService;
var dialogservice_1 = __webpack_require__(/*! ../dynamicdialog/dialogservice */ "./node_modules/primeng/components/dynamicdialog/dialogservice.js");
exports.DialogService = dialogservice_1.DialogService;
var dynamicdialog_config_1 = __webpack_require__(/*! ../dynamicdialog/dynamicdialog-config */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-config.js");
exports.DynamicDialogConfig = dynamicdialog_config_1.DynamicDialogConfig;
var dynamicdialog_ref_1 = __webpack_require__(/*! ../dynamicdialog/dynamicdialog-ref */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-ref.js");
exports.DynamicDialogRef = dynamicdialog_ref_1.DynamicDialogRef;
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/primeng/components/common/confirmationservice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/primeng/components/common/confirmationservice.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var ConfirmationService = /** @class */ (function () {
    function ConfirmationService() {
        this.requireConfirmationSource = new rxjs_1.Subject();
        this.acceptConfirmationSource = new rxjs_1.Subject();
        this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
        this.accept = this.acceptConfirmationSource.asObservable();
    }
    ConfirmationService.prototype.confirm = function (confirmation) {
        this.requireConfirmationSource.next(confirmation);
        return this;
    };
    ConfirmationService.prototype.onAccept = function () {
        this.acceptConfirmationSource.next();
    };
    ConfirmationService = __decorate([
        core_1.Injectable()
    ], ConfirmationService);
    return ConfirmationService;
}());
exports.ConfirmationService = ConfirmationService;
//# sourceMappingURL=confirmationservice.js.map

/***/ }),

/***/ "./node_modules/primeng/components/common/messageservice.js":
/*!******************************************************************!*\
  !*** ./node_modules/primeng/components/common/messageservice.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messageSource = new rxjs_1.Subject();
        this.clearSource = new rxjs_1.Subject();
        this.messageObserver = this.messageSource.asObservable();
        this.clearObserver = this.clearSource.asObservable();
    }
    MessageService.prototype.add = function (message) {
        if (message) {
            this.messageSource.next(message);
        }
    };
    MessageService.prototype.addAll = function (messages) {
        if (messages && messages.length) {
            this.messageSource.next(messages);
        }
    };
    MessageService.prototype.clear = function (key) {
        this.clearSource.next(key || null);
    };
    MessageService = __decorate([
        core_1.Injectable()
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=messageservice.js.map

/***/ }),

/***/ "./node_modules/primeng/components/common/treedragdropservice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/primeng/components/common/treedragdropservice.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var TreeDragDropService = /** @class */ (function () {
    function TreeDragDropService() {
        this.dragStartSource = new rxjs_1.Subject();
        this.dragStopSource = new rxjs_1.Subject();
        this.dragStart$ = this.dragStartSource.asObservable();
        this.dragStop$ = this.dragStopSource.asObservable();
    }
    TreeDragDropService.prototype.startDrag = function (event) {
        this.dragStartSource.next(event);
    };
    TreeDragDropService.prototype.stopDrag = function (event) {
        this.dragStopSource.next(event);
    };
    TreeDragDropService = __decorate([
        core_1.Injectable()
    ], TreeDragDropService);
    return TreeDragDropService;
}());
exports.TreeDragDropService = TreeDragDropService;
//# sourceMappingURL=treedragdropservice.js.map

/***/ }),

/***/ "./node_modules/primeng/components/confirmdialog/confirmdialog.js":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/components/confirmdialog/confirmdialog.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var button_1 = __webpack_require__(/*! ../button/button */ "./node_modules/primeng/components/button/button.js");
var confirmationservice_1 = __webpack_require__(/*! ../common/confirmationservice */ "./node_modules/primeng/components/common/confirmationservice.js");
var ConfirmDialog = /** @class */ (function () {
    function ConfirmDialog(el, renderer, confirmationService, zone) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.zone = zone;
        this.acceptIcon = 'pi pi-check';
        this.acceptLabel = 'Yes';
        this.acceptVisible = true;
        this.rejectIcon = 'pi pi-times';
        this.rejectLabel = 'No';
        this.rejectVisible = true;
        this.closeOnEscape = true;
        this.blockScroll = true;
        this.closable = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
        this.subscription = this.confirmationService.requireConfirmation$.subscribe(function (confirmation) {
            if (confirmation.key === _this.key) {
                _this.confirmation = confirmation;
                _this.message = _this.confirmation.message || _this.message;
                _this.icon = _this.confirmation.icon || _this.icon;
                _this.header = _this.confirmation.header || _this.header;
                _this.rejectVisible = _this.confirmation.rejectVisible == null ? _this.rejectVisible : _this.confirmation.rejectVisible;
                _this.acceptVisible = _this.confirmation.acceptVisible == null ? _this.acceptVisible : _this.confirmation.acceptVisible;
                _this.acceptLabel = _this.confirmation.acceptLabel || _this.acceptLabel;
                _this.rejectLabel = _this.confirmation.rejectLabel || _this.rejectLabel;
                if (_this.confirmation.accept) {
                    _this.confirmation.acceptEvent = new core_1.EventEmitter();
                    _this.confirmation.acceptEvent.subscribe(_this.confirmation.accept);
                }
                if (_this.confirmation.reject) {
                    _this.confirmation.rejectEvent = new core_1.EventEmitter();
                    _this.confirmation.rejectEvent.subscribe(_this.confirmation.reject);
                }
                if (_this.confirmation.blockScroll === false) {
                    _this.blockScroll = _this.confirmation.blockScroll;
                }
                _this.visible = true;
            }
        });
    }
    Object.defineProperty(ConfirmDialog.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (val) {
            this._width = val;
            console.warn("width property is deprecated, use style to define the width of the Dialog.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfirmDialog.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (val) {
            this._height = val;
            console.warn("height property is deprecated, use style to define the height of the Dialog.");
        },
        enumerable: true,
        configurable: true
    });
    ConfirmDialog.prototype.onAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.setDimensions();
                this.contentContainer = domhandler_1.DomHandler.findSingle(this.container, '.ui-dialog-content');
                domhandler_1.DomHandler.findSingle(this.container, 'button').focus();
                this.appendContainer();
                this.moveOnTop();
                this.bindGlobalListeners();
                this.enableModality();
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    };
    ConfirmDialog.prototype.setDimensions = function () {
        if (this.width) {
            this.container.style.width = this.width + 'px';
        }
        if (this.height) {
            this.container.style.height = this.height + 'px';
        }
    };
    ConfirmDialog.prototype.appendContainer = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                domhandler_1.DomHandler.appendChild(this.container, this.appendTo);
        }
    };
    ConfirmDialog.prototype.restoreAppend = function () {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    };
    ConfirmDialog.prototype.enableModality = function () {
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(this.container.style.zIndex) - 1);
            domhandler_1.DomHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');
            document.body.appendChild(this.mask);
            domhandler_1.DomHandler.addClass(document.body, 'ui-overflow-hidden');
            if (this.blockScroll) {
                domhandler_1.DomHandler.addClass(document.body, 'ui-overflow-hidden');
            }
        }
    };
    ConfirmDialog.prototype.disableModality = function () {
        if (this.mask) {
            document.body.removeChild(this.mask);
            domhandler_1.DomHandler.removeClass(document.body, 'ui-overflow-hidden');
            if (this.blockScroll) {
                domhandler_1.DomHandler.removeClass(document.body, 'ui-overflow-hidden');
            }
            this.mask = null;
        }
    };
    ConfirmDialog.prototype.close = function (event) {
        if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
        }
        this.hide();
        event.preventDefault();
    };
    ConfirmDialog.prototype.hide = function () {
        this.visible = false;
    };
    ConfirmDialog.prototype.moveOnTop = function () {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++domhandler_1.DomHandler.zindex));
        }
    };
    ConfirmDialog.prototype.bindGlobalListeners = function () {
        var _this = this;
        if (this.closeOnEscape && this.closable && !this.documentEscapeListener) {
            this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
                if (event.which == 27) {
                    if (parseInt(_this.container.style.zIndex) === (domhandler_1.DomHandler.zindex + _this.baseZIndex) && _this.visible) {
                        _this.close(event);
                    }
                }
            });
        }
    };
    ConfirmDialog.prototype.unbindGlobalListeners = function () {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    };
    ConfirmDialog.prototype.onOverlayHide = function () {
        this.disableModality();
        this.unbindGlobalListeners();
        this.container = null;
    };
    ConfirmDialog.prototype.ngOnDestroy = function () {
        this.restoreAppend();
        this.onOverlayHide();
        this.subscription.unsubscribe();
    };
    ConfirmDialog.prototype.accept = function () {
        if (this.confirmation.acceptEvent) {
            this.confirmation.acceptEvent.emit();
        }
        this.hide();
        this.confirmation = null;
    };
    ConfirmDialog.prototype.reject = function () {
        if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
        }
        this.hide();
        this.confirmation = null;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "visible", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "header", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "message", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ConfirmDialog.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "acceptIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "acceptLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "acceptVisible", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "rejectIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "rejectLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "rejectVisible", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "acceptButtonStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "rejectButtonStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "closeOnEscape", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "blockScroll", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "rtl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "closable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ConfirmDialog.prototype, "appendTo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "key", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "autoZIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ConfirmDialog.prototype, "baseZIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "transitionOptions", void 0);
    __decorate([
        core_1.ContentChild(shared_1.Footer, { static: false }),
        __metadata("design:type", Object)
    ], ConfirmDialog.prototype, "footer", void 0);
    __decorate([
        core_1.ViewChild('content', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], ConfirmDialog.prototype, "contentViewChild", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ConfirmDialog.prototype, "width", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ConfirmDialog.prototype, "height", null);
    ConfirmDialog = __decorate([
        core_1.Component({
            selector: 'p-confirmDialog',
            template: "\n        <div [ngClass]=\"{'ui-dialog ui-confirmdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true,'ui-dialog-rtl':rtl}\" [ngStyle]=\"style\" [class]=\"styleClass\" (mousedown)=\"moveOnTop()\"\n            [@animation]=\"{value: 'visible', params: {transitionParams: transitionOptions}}\" (@animation.start)=\"onAnimationStart($event)\" *ngIf=\"visible\">\n            <div class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\">\n                <span class=\"ui-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                <a *ngIf=\"closable\" [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true}\" tabindex=\"0\" role=\"button\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\">\n                    <span class=\"pi pi-fw pi-times\"></span>\n                </a>\n            </div>\n            <div #content class=\"ui-dialog-content ui-widget-content\">\n                <i [ngClass]=\"'ui-confirmdialog-icon'\" [class]=\"icon\" *ngIf=\"icon\"></i>\n                <span class=\"ui-confirmdialog-message\" [innerHTML]=\"message\"></span>\n            </div>\n            <div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"footer\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n            <div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"!footer\">\n                <button type=\"button\" pButton [icon]=\"acceptIcon\" [label]=\"acceptLabel\" (click)=\"accept()\" [class]=\"acceptButtonStyleClass\" *ngIf=\"acceptVisible\"></button>\n                <button type=\"button\" pButton [icon]=\"rejectIcon\" [label]=\"rejectLabel\" (click)=\"reject()\" [class]=\"rejectButtonStyleClass\" *ngIf=\"rejectVisible\"></button>\n            </div>\n        </div>\n    ",
            animations: [
                animations_1.trigger('animation', [
                    animations_1.state('void', animations_1.style({
                        transform: 'translateX(-50%) translateY(-50%) scale(0.7)',
                        opacity: 0
                    })),
                    animations_1.state('visible', animations_1.style({
                        transform: 'translateX(-50%) translateY(-50%) scale(1)',
                        opacity: 1
                    })),
                    animations_1.transition('* => *', animations_1.animate('{{transitionParams}}'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2, confirmationservice_1.ConfirmationService, core_1.NgZone])
    ], ConfirmDialog);
    return ConfirmDialog;
}());
exports.ConfirmDialog = ConfirmDialog;
var ConfirmDialogModule = /** @class */ (function () {
    function ConfirmDialogModule() {
    }
    ConfirmDialogModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, button_1.ButtonModule],
            exports: [ConfirmDialog, button_1.ButtonModule, shared_1.SharedModule],
            declarations: [ConfirmDialog]
        })
    ], ConfirmDialogModule);
    return ConfirmDialogModule;
}());
exports.ConfirmDialogModule = ConfirmDialogModule;
//# sourceMappingURL=confirmdialog.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dropdown/dropdown.js":
/*!**************************************************************!*\
  !*** ./node_modules/primeng/components/dropdown/dropdown.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var scrolling_1 = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var objectutils_1 = __webpack_require__(/*! ../utils/objectutils */ "./node_modules/primeng/components/utils/objectutils.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var filterutils_1 = __webpack_require__(/*! ../utils/filterutils */ "./node_modules/primeng/components/utils/filterutils.js");
exports.DROPDOWN_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return Dropdown; }),
    multi: true
};
var DropdownItem = /** @class */ (function () {
    function DropdownItem() {
        this.onClick = new core_1.EventEmitter();
    }
    DropdownItem.prototype.onOptionClick = function (event) {
        this.onClick.emit({
            originalEvent: event,
            option: this.option
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropdownItem.prototype, "option", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownItem.prototype, "selected", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownItem.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownItem.prototype, "visible", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DropdownItem.prototype, "itemSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.TemplateRef)
    ], DropdownItem.prototype, "template", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DropdownItem.prototype, "onClick", void 0);
    DropdownItem = __decorate([
        core_1.Component({
            selector: 'p-dropdownItem',
            template: "\n        <li (click)=\"onOptionClick($event)\" role=\"option\"\n            [attr.aria-label]=\"option.label\"\n            [ngStyle]=\"{'height': itemSize + 'px'}\"\n            [ngClass]=\"{'ui-dropdown-item ui-corner-all':true,\n                                                'ui-state-highlight': selected,\n                                                'ui-state-disabled':(option.disabled),\n                                                'ui-dropdown-item-empty': !option.label||option.label.length === 0}\">\n            <span *ngIf=\"!template\">{{option.label||'empty'}}</span>\n            <ng-container *ngTemplateOutlet=\"template; context: {$implicit: option}\"></ng-container>\n        </li>\n    "
        })
    ], DropdownItem);
    return DropdownItem;
}());
exports.DropdownItem = DropdownItem;
var Dropdown = /** @class */ (function () {
    function Dropdown(el, renderer, cd, zone) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.scrollHeight = '200px';
        this.filterBy = 'label';
        this.resetFilterOnHide = false;
        this.dropdownIcon = 'pi pi-chevron-down';
        this.autoDisplayFirst = true;
        this.emptyFilterMessage = 'No results found';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.filterMatchMode = "contains";
        this.onChange = new core_1.EventEmitter();
        this.onFocus = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
        this.onClick = new core_1.EventEmitter();
        this.onShow = new core_1.EventEmitter();
        this.onHide = new core_1.EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.viewPortOffsetTop = 0;
    }
    Object.defineProperty(Dropdown.prototype, "autoWidth", {
        get: function () {
            return this._autoWidth;
        },
        set: function (_autoWidth) {
            this._autoWidth = _autoWidth;
            console.log("Setting autoWidth has no effect as automatic width calculation is removed for better perfomance.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dropdown.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (_disabled) {
            if (_disabled)
                this.focused = false;
            this._disabled = _disabled;
            this.cd.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Dropdown.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'item':
                    _this.itemTemplate = item.template;
                    break;
                case 'selectedItem':
                    _this.selectedItemTemplate = item.template;
                    break;
                case 'group':
                    _this.groupTemplate = item.template;
                    break;
                default:
                    _this.itemTemplate = item.template;
                    break;
            }
        });
    };
    Dropdown.prototype.ngOnInit = function () {
        this.optionsToDisplay = this.options;
        this.updateSelectedOption(null);
    };
    Object.defineProperty(Dropdown.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (val) {
            var opts = this.optionLabel ? objectutils_1.ObjectUtils.generateSelectItems(val, this.optionLabel) : val;
            this._options = opts;
            this.optionsToDisplay = this._options;
            this.updateSelectedOption(this.value);
            this.optionsChanged = true;
            if (this.filterValue && this.filterValue.length) {
                this.activateFilter();
            }
        },
        enumerable: true,
        configurable: true
    });
    Dropdown.prototype.ngAfterViewInit = function () {
        if (this.editable) {
            this.updateEditableLabel();
        }
    };
    Object.defineProperty(Dropdown.prototype, "label", {
        get: function () {
            return (this.selectedOption ? this.selectedOption.label : null);
        },
        enumerable: true,
        configurable: true
    });
    Dropdown.prototype.updateEditableLabel = function () {
        if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
            this.editableInputViewChild.nativeElement.value = (this.selectedOption ? this.selectedOption.label : this.value || '');
        }
    };
    Dropdown.prototype.onItemClick = function (event) {
        var _this = this;
        var option = event.option;
        this.itemClick = true;
        if (!option.disabled) {
            this.selectItem(event, option);
            this.focusViewChild.nativeElement.focus();
        }
        setTimeout(function () {
            _this.hide(event);
        }, 150);
    };
    Dropdown.prototype.selectItem = function (event, option) {
        var _this = this;
        if (this.selectedOption != option) {
            this.selectedOption = option;
            this.value = option.value;
            this.filled = true;
            this.onModelChange(this.value);
            this.updateEditableLabel();
            this.onChange.emit({
                originalEvent: event.originalEvent,
                value: this.value
            });
            if (this.virtualScroll) {
                setTimeout(function () {
                    _this.viewPortOffsetTop = _this.viewPort.measureScrollOffset();
                }, 1);
            }
        }
    };
    Dropdown.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.optionsChanged && this.overlayVisible) {
            this.optionsChanged = false;
            if (this.virtualScroll) {
                this.updateVirtualScrollSelectedIndex(true);
            }
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.alignOverlay();
                }, 1);
            });
        }
        if (this.selectedOptionUpdated && this.itemsWrapper) {
            if (this.virtualScroll && this.viewPort) {
                var range = this.viewPort.getRenderedRange();
                this.updateVirtualScrollSelectedIndex(false);
                if (range.start > this.virtualScrollSelectedIndex || range.end < this.virtualScrollSelectedIndex) {
                    this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
                }
            }
            var selectedItem = domhandler_1.DomHandler.findSingle(this.overlay, 'li.ui-state-highlight');
            if (selectedItem) {
                domhandler_1.DomHandler.scrollInView(this.itemsWrapper, domhandler_1.DomHandler.findSingle(this.overlay, 'li.ui-state-highlight'));
            }
            this.selectedOptionUpdated = false;
        }
    };
    Dropdown.prototype.writeValue = function (value) {
        if (this.filter) {
            this.resetFilter();
        }
        this.value = value;
        this.updateSelectedOption(value);
        this.updateEditableLabel();
        this.updateFilledState();
        this.cd.markForCheck();
    };
    Dropdown.prototype.resetFilter = function () {
        if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.filterValue = null;
            this.filterViewChild.nativeElement.value = '';
        }
        this.optionsToDisplay = this.options;
    };
    Dropdown.prototype.updateSelectedOption = function (val) {
        this.selectedOption = this.findOption(val, this.optionsToDisplay);
        if (this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
            this.selectedOption = this.optionsToDisplay[0];
        }
        this.selectedOptionUpdated = true;
    };
    Dropdown.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Dropdown.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Dropdown.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Dropdown.prototype.onMouseclick = function (event) {
        if (this.disabled || this.readonly) {
            return;
        }
        this.onClick.emit(event);
        this.selfClick = true;
        this.clearClick = domhandler_1.DomHandler.hasClass(event.target, 'ui-dropdown-clear-icon');
        if (!this.itemClick && !this.clearClick) {
            this.focusViewChild.nativeElement.focus();
            if (this.overlayVisible)
                this.hide(event);
            else
                this.show();
            this.cd.detectChanges();
        }
    };
    Dropdown.prototype.onEditableInputClick = function (event) {
        this.itemClick = true;
        this.bindDocumentClickListener();
    };
    Dropdown.prototype.onEditableInputFocus = function (event) {
        this.focused = true;
        this.hide(event);
        this.onFocus.emit(event);
    };
    Dropdown.prototype.onEditableInputChange = function (event) {
        this.value = event.target.value;
        this.updateSelectedOption(this.value);
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    Dropdown.prototype.show = function () {
        this.overlayVisible = true;
    };
    Dropdown.prototype.onOverlayAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                var itemsWrapperSelector = this.virtualScroll ? '.cdk-virtual-scroll-viewport' : '.ui-dropdown-items-wrapper';
                this.itemsWrapper = domhandler_1.DomHandler.findSingle(this.overlay, itemsWrapperSelector);
                this.appendOverlay();
                if (this.autoZIndex) {
                    this.overlay.style.zIndex = String(this.baseZIndex + (++domhandler_1.DomHandler.zindex));
                }
                this.alignOverlay();
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                if (this.options && this.options.length) {
                    if (!this.virtualScroll) {
                        var selectedListItem = domhandler_1.DomHandler.findSingle(this.itemsWrapper, '.ui-dropdown-item.ui-state-highlight');
                        if (selectedListItem) {
                            domhandler_1.DomHandler.scrollInView(this.itemsWrapper, selectedListItem);
                        }
                    }
                }
                if (this.filterViewChild && this.filterViewChild.nativeElement) {
                    this.filterViewChild.nativeElement.focus();
                }
                this.onShow.emit(event);
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    };
    Dropdown.prototype.scrollToSelectedVirtualScrollElement = function () {
        if (!this.virtualAutoScrolled) {
            if (this.viewPortOffsetTop) {
                this.viewPort.scrollToOffset(this.viewPortOffsetTop);
            }
            else if (this.virtualScrollSelectedIndex > -1) {
                this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
            }
        }
        this.virtualAutoScrolled = true;
    };
    Dropdown.prototype.updateVirtualScrollSelectedIndex = function (resetOffset) {
        if (this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length) {
            if (resetOffset) {
                this.viewPortOffsetTop = 0;
            }
            this.virtualScrollSelectedIndex = this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay);
        }
    };
    Dropdown.prototype.appendOverlay = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                domhandler_1.DomHandler.appendChild(this.overlay, this.appendTo);
            this.overlay.style.minWidth = domhandler_1.DomHandler.getWidth(this.containerViewChild.nativeElement) + 'px';
        }
    };
    Dropdown.prototype.restoreOverlayAppend = function () {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    };
    Dropdown.prototype.hide = function (event) {
        this.overlayVisible = false;
        if (this.filter && this.resetFilterOnHide) {
            this.resetFilter();
        }
        if (this.virtualScroll) {
            this.virtualAutoScrolled = false;
        }
        this.cd.markForCheck();
        this.onHide.emit(event);
    };
    Dropdown.prototype.alignOverlay = function () {
        if (this.overlay) {
            if (this.appendTo)
                domhandler_1.DomHandler.absolutePosition(this.overlay, this.containerViewChild.nativeElement);
            else
                domhandler_1.DomHandler.relativePosition(this.overlay, this.containerViewChild.nativeElement);
        }
    };
    Dropdown.prototype.onInputFocus = function (event) {
        this.focused = true;
        this.onFocus.emit(event);
    };
    Dropdown.prototype.onInputBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    };
    Dropdown.prototype.findPrevEnabledOption = function (index) {
        var prevEnabledOption;
        if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (var i = (index - 1); 0 <= i; i--) {
                var option = this.optionsToDisplay[i];
                if (option.disabled) {
                    continue;
                }
                else {
                    prevEnabledOption = option;
                    break;
                }
            }
            if (!prevEnabledOption) {
                for (var i = this.optionsToDisplay.length - 1; i >= index; i--) {
                    var option = this.optionsToDisplay[i];
                    if (option.disabled) {
                        continue;
                    }
                    else {
                        prevEnabledOption = option;
                        break;
                    }
                }
            }
        }
        return prevEnabledOption;
    };
    Dropdown.prototype.findNextEnabledOption = function (index) {
        var nextEnabledOption;
        if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (var i = (index + 1); index < (this.optionsToDisplay.length - 1); i++) {
                var option = this.optionsToDisplay[i];
                if (option.disabled) {
                    continue;
                }
                else {
                    nextEnabledOption = option;
                    break;
                }
            }
            if (!nextEnabledOption) {
                for (var i = 0; i < index; i++) {
                    var option = this.optionsToDisplay[i];
                    if (option.disabled) {
                        continue;
                    }
                    else {
                        nextEnabledOption = option;
                        break;
                    }
                }
            }
        }
        return nextEnabledOption;
    };
    Dropdown.prototype.onKeydown = function (event, search) {
        if (this.readonly || !this.optionsToDisplay || this.optionsToDisplay.length === null) {
            return;
        }
        switch (event.which) {
            //down
            case 40:
                if (!this.overlayVisible && event.altKey) {
                    this.show();
                }
                else {
                    if (this.group) {
                        var selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                        if (selectedItemIndex !== -1) {
                            var nextItemIndex = selectedItemIndex.itemIndex + 1;
                            if (nextItemIndex < (this.optionsToDisplay[selectedItemIndex.groupIndex].items.length)) {
                                this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex].items[nextItemIndex]);
                                this.selectedOptionUpdated = true;
                            }
                            else if (this.optionsToDisplay[selectedItemIndex.groupIndex + 1]) {
                                this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex + 1].items[0]);
                                this.selectedOptionUpdated = true;
                            }
                        }
                        else {
                            this.selectItem(event, this.optionsToDisplay[0].items[0]);
                        }
                    }
                    else {
                        var selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                        var nextEnabledOption = this.findNextEnabledOption(selectedItemIndex);
                        if (nextEnabledOption) {
                            this.selectItem(event, nextEnabledOption);
                            this.selectedOptionUpdated = true;
                        }
                    }
                }
                event.preventDefault();
                break;
            //up
            case 38:
                if (this.group) {
                    var selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                    if (selectedItemIndex !== -1) {
                        var prevItemIndex = selectedItemIndex.itemIndex - 1;
                        if (prevItemIndex >= 0) {
                            this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex].items[prevItemIndex]);
                            this.selectedOptionUpdated = true;
                        }
                        else if (prevItemIndex < 0) {
                            var prevGroup = this.optionsToDisplay[selectedItemIndex.groupIndex - 1];
                            if (prevGroup) {
                                this.selectItem(event, prevGroup.items[prevGroup.items.length - 1]);
                                this.selectedOptionUpdated = true;
                            }
                        }
                    }
                }
                else {
                    var selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                    var prevEnabledOption = this.findPrevEnabledOption(selectedItemIndex);
                    if (prevEnabledOption) {
                        this.selectItem(event, prevEnabledOption);
                        this.selectedOptionUpdated = true;
                    }
                }
                event.preventDefault();
                break;
            //space
            case 32:
            case 32:
                if (!this.overlayVisible) {
                    this.show();
                    event.preventDefault();
                }
                break;
            //enter
            case 13:
                if (!this.filter || (this.optionsToDisplay && this.optionsToDisplay.length > 0)) {
                    this.hide(event);
                }
                event.preventDefault();
                break;
            //escape and tab
            case 27:
            case 9:
                this.hide(event);
                break;
            //search item based on keyboard input
            default:
                if (search) {
                    this.search(event);
                }
                break;
        }
    };
    Dropdown.prototype.search = function (event) {
        var _this = this;
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        var char = String.fromCharCode(event.keyCode);
        this.previousSearchChar = this.currentSearchChar;
        this.currentSearchChar = char;
        if (this.previousSearchChar === this.currentSearchChar)
            this.searchValue = this.currentSearchChar;
        else
            this.searchValue = this.searchValue ? this.searchValue + char : char;
        var newOption;
        if (this.group) {
            var searchIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : { groupIndex: 0, itemIndex: 0 };
            newOption = this.searchOptionWithinGroup(searchIndex);
        }
        else {
            var searchIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
            newOption = this.searchOption(++searchIndex);
        }
        if (newOption) {
            this.selectItem(event, newOption);
            this.selectedOptionUpdated = true;
        }
        this.searchTimeout = setTimeout(function () {
            _this.searchValue = null;
        }, 250);
    };
    Dropdown.prototype.searchOption = function (index) {
        var option;
        if (this.searchValue) {
            option = this.searchOptionInRange(index, this.optionsToDisplay.length);
            if (!option) {
                option = this.searchOptionInRange(0, index);
            }
        }
        return option;
    };
    Dropdown.prototype.searchOptionInRange = function (start, end) {
        for (var i = start; i < end; i++) {
            var opt = this.optionsToDisplay[i];
            if (opt.label.toLowerCase().startsWith(this.searchValue.toLowerCase())) {
                return opt;
            }
        }
        return null;
    };
    Dropdown.prototype.searchOptionWithinGroup = function (index) {
        var option;
        if (this.searchValue) {
            for (var i = index.groupIndex; i < this.optionsToDisplay.length; i++) {
                for (var j = (index.groupIndex === i) ? (index.itemIndex + 1) : 0; j < this.optionsToDisplay[i].items.length; j++) {
                    var opt = this.optionsToDisplay[i].items[j];
                    if (opt.label.toLowerCase().startsWith(this.searchValue.toLowerCase())) {
                        return opt;
                    }
                }
            }
            if (!option) {
                for (var i = 0; i <= index.groupIndex; i++) {
                    for (var j = 0; j < ((index.groupIndex === i) ? index.itemIndex : this.optionsToDisplay[i].items.length); j++) {
                        var opt = this.optionsToDisplay[i].items[j];
                        if (opt.label.toLowerCase().startsWith(this.searchValue.toLowerCase())) {
                            return opt;
                        }
                    }
                }
            }
        }
        return null;
    };
    Dropdown.prototype.findOptionIndex = function (val, opts) {
        var index = -1;
        if (opts) {
            for (var i = 0; i < opts.length; i++) {
                if ((val == null && opts[i].value == null) || objectutils_1.ObjectUtils.equals(val, opts[i].value, this.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Dropdown.prototype.findOptionGroupIndex = function (val, opts) {
        var groupIndex, itemIndex;
        if (opts) {
            for (var i = 0; i < opts.length; i++) {
                groupIndex = i;
                itemIndex = this.findOptionIndex(val, opts[i].items);
                if (itemIndex !== -1) {
                    break;
                }
            }
        }
        if (itemIndex !== -1) {
            return { groupIndex: groupIndex, itemIndex: itemIndex };
        }
        else {
            return -1;
        }
    };
    Dropdown.prototype.findOption = function (val, opts, inGroup) {
        if (this.group && !inGroup) {
            var opt = void 0;
            if (opts && opts.length) {
                for (var _i = 0, opts_1 = opts; _i < opts_1.length; _i++) {
                    var optgroup = opts_1[_i];
                    opt = this.findOption(val, optgroup.items, true);
                    if (opt) {
                        break;
                    }
                }
            }
            return opt;
        }
        else {
            var index = this.findOptionIndex(val, opts);
            return (index != -1) ? opts[index] : null;
        }
    };
    Dropdown.prototype.onFilter = function (event) {
        var inputValue = event.target.value;
        if (inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.activateFilter();
        }
        else {
            this.filterValue = null;
            this.optionsToDisplay = this.options;
        }
        this.optionsChanged = true;
    };
    Dropdown.prototype.activateFilter = function () {
        var searchFields = this.filterBy.split(',');
        if (this.options && this.options.length) {
            if (this.group) {
                var filteredGroups = [];
                for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
                    var optgroup = _a[_i];
                    var filteredSubOptions = filterutils_1.FilterUtils.filter(optgroup.items, searchFields, this.filterValue, this.filterMatchMode);
                    if (filteredSubOptions && filteredSubOptions.length) {
                        filteredGroups.push({
                            label: optgroup.label,
                            value: optgroup.value,
                            items: filteredSubOptions
                        });
                    }
                }
                this.optionsToDisplay = filteredGroups;
            }
            else {
                this.optionsToDisplay = filterutils_1.FilterUtils.filter(this.options, searchFields, this.filterValue, this.filterMatchMode);
            }
            this.optionsChanged = true;
        }
    };
    Dropdown.prototype.applyFocus = function () {
        if (this.editable)
            domhandler_1.DomHandler.findSingle(this.el.nativeElement, '.ui-dropdown-label.ui-inputtext').focus();
        else
            domhandler_1.DomHandler.findSingle(this.el.nativeElement, 'input[readonly]').focus();
    };
    Dropdown.prototype.focus = function () {
        this.applyFocus();
    };
    Dropdown.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
                if (!_this.selfClick && !_this.itemClick) {
                    _this.hide(event);
                    _this.unbindDocumentClickListener();
                }
                _this.clearClickState();
                _this.cd.markForCheck();
            });
        }
    };
    Dropdown.prototype.clearClickState = function () {
        this.selfClick = false;
        this.itemClick = false;
    };
    Dropdown.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    Dropdown.prototype.bindDocumentResizeListener = function () {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    };
    Dropdown.prototype.unbindDocumentResizeListener = function () {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    };
    Dropdown.prototype.onWindowResize = function () {
        if (!domhandler_1.DomHandler.isAndroid()) {
            this.hide(event);
        }
    };
    Dropdown.prototype.updateFilledState = function () {
        this.filled = (this.selectedOption != null);
    };
    Dropdown.prototype.clear = function (event) {
        this.clearClick = true;
        this.value = null;
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
        this.updateSelectedOption(this.value);
        this.updateEditableLabel();
        this.updateFilledState();
    };
    Dropdown.prototype.onOverlayHide = function () {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.overlay = null;
        this.itemsWrapper = null;
    };
    Dropdown.prototype.ngOnDestroy = function () {
        this.restoreOverlayAppend();
        this.onOverlayHide();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "scrollHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dropdown.prototype, "filter", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "panelStyle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "panelStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dropdown.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dropdown.prototype, "required", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dropdown.prototype, "editable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "appendTo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Dropdown.prototype, "tabindex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "filterPlaceholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "inputId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "selectId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "dataKey", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "filterBy", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dropdown.prototype, "autofocus", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dropdown.prototype, "resetFilterOnHide", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "dropdownIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "optionLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dropdown.prototype, "autoDisplayFirst", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dropdown.prototype, "group", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dropdown.prototype, "showClear", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "emptyFilterMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dropdown.prototype, "virtualScroll", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Dropdown.prototype, "itemSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dropdown.prototype, "autoZIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Dropdown.prototype, "baseZIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "showTransitionOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "hideTransitionOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "ariaFilterLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "filterMatchMode", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Dropdown.prototype, "onChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Dropdown.prototype, "onFocus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Dropdown.prototype, "onBlur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Dropdown.prototype, "onClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Dropdown.prototype, "onShow", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Dropdown.prototype, "onHide", void 0);
    __decorate([
        core_1.ViewChild('container', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Dropdown.prototype, "containerViewChild", void 0);
    __decorate([
        core_1.ViewChild('filter', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Dropdown.prototype, "filterViewChild", void 0);
    __decorate([
        core_1.ViewChild('in', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Dropdown.prototype, "focusViewChild", void 0);
    __decorate([
        core_1.ViewChild(scrolling_1.CdkVirtualScrollViewport, { static: false }),
        __metadata("design:type", scrolling_1.CdkVirtualScrollViewport)
    ], Dropdown.prototype, "viewPort", void 0);
    __decorate([
        core_1.ViewChild('editableInput', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Dropdown.prototype, "editableInputViewChild", void 0);
    __decorate([
        core_1.ContentChildren(shared_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], Dropdown.prototype, "templates", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Dropdown.prototype, "autoWidth", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Dropdown.prototype, "disabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Dropdown.prototype, "options", null);
    Dropdown = __decorate([
        core_1.Component({
            selector: 'p-dropdown',
            template: "\n         <div #container [ngClass]=\"{'ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix':true,\n            'ui-state-disabled':disabled, 'ui-dropdown-open':overlayVisible, 'ui-state-focus':focused, 'ui-dropdown-clearable': showClear && !disabled}\"\n            (click)=\"onMouseclick($event)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #in [attr.id]=\"inputId\" type=\"text\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" readonly (focus)=\"onInputFocus($event)\" aria-haspopup=\"listbox\"\n                    (blur)=\"onInputBlur($event)\" (keydown)=\"onKeydown($event, true)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" [attr.autofocus]=\"autofocus\">\n            </div>\n            <div class=\"ui-helper-hidden-accessible ui-dropdown-hidden-select\">\n                <select [attr.required]=\"required\" [attr.name]=\"name\" tabindex=\"-1\" aria-hidden=\"true\">\n                    <option *ngIf=\"placeholder\" value=\"\">{{placeholder}}</option>\n                    <option *ngIf=\"selectedOption\" [value]=\"selectedOption.value\" [selected]=\"true\">{{selectedOption.label}}</option>\n                </select>\n            </div>\n            <label [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all':true,'ui-dropdown-label-empty':(label == null || label.length === 0)}\" *ngIf=\"!editable && (label != null)\">\n                <ng-container *ngIf=\"!selectedItemTemplate\">{{label||'empty'}}</ng-container>\n                <ng-container *ngTemplateOutlet=\"selectedItemTemplate; context: {$implicit: selectedOption}\"></ng-container>\n            </label>\n            <label [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all ui-placeholder':true,'ui-dropdown-label-empty': (placeholder == null || placeholder.length === 0)}\" *ngIf=\"!editable && (label == null)\">{{placeholder||'empty'}}</label>\n            <input #editableInput type=\"text\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" class=\"ui-dropdown-label ui-inputtext ui-corner-all\" *ngIf=\"editable\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\"\n                        (click)=\"onEditableInputClick($event)\" (input)=\"onEditableInputChange($event)\" (focus)=\"onEditableInputFocus($event)\" (blur)=\"onInputBlur($event)\">\n            <i class=\"ui-dropdown-clear-icon pi pi-times\" (click)=\"clear($event)\" *ngIf=\"value != null && showClear && !disabled\"></i>\n            <div class=\"ui-dropdown-trigger ui-state-default ui-corner-right\">\n                <span class=\"ui-dropdown-trigger-icon ui-clickable\" [ngClass]=\"dropdownIcon\"></span>\n            </div>\n            <div *ngIf=\"overlayVisible\" [ngClass]=\"'ui-dropdown-panel  ui-widget ui-widget-content ui-corner-all ui-shadow'\" [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\">\n                <div *ngIf=\"filter\" class=\"ui-dropdown-filter-container\" (click)=\"$event.stopPropagation()\">\n                    <input #filter type=\"text\" autocomplete=\"off\" [value]=\"filterValue||''\" class=\"ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all\" [attr.placeholder]=\"filterPlaceholder\"\n                    (keydown.enter)=\"$event.preventDefault()\" (keydown)=\"onKeydown($event, false)\" (input)=\"onFilter($event)\" [attr.aria-label]=\"ariaFilterLabel\">\n                    <span class=\"ui-dropdown-filter-icon pi pi-search\"></span>\n                </div>\n                <div class=\"ui-dropdown-items-wrapper\" [style.max-height]=\"virtualScroll ? 'auto' : (scrollHeight||'auto')\">\n                    <ul class=\"ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\" role=\"listbox\">\n                        <ng-container *ngIf=\"group\">\n                            <ng-template ngFor let-optgroup [ngForOf]=\"optionsToDisplay\">\n                                <li class=\"ui-dropdown-item-group\">\n                                    <span *ngIf=\"!groupTemplate\">{{optgroup.label||'empty'}}</span>\n                                    <ng-container *ngTemplateOutlet=\"groupTemplate; context: {$implicit: optgroup}\"></ng-container>\n                                </li>\n                                <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optgroup.items, selectedOption: selectedOption}\"></ng-container>\n                            </ng-template>\n                        </ng-container>\n                        <ng-container *ngIf=\"!group\">\n                            <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optionsToDisplay, selectedOption: selectedOption}\"></ng-container>\n                        </ng-container>\n                        <ng-template #itemslist let-options let-selectedOption=\"selectedOption\">\n\n                            <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                                <ng-template ngFor let-option let-i=\"index\" [ngForOf]=\"options\">\n                                    <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\" \n                                                    (onClick)=\"onItemClick($event)\"\n                                                    [template]=\"itemTemplate\"></p-dropdownItem>\n                                </ng-template>\n                            </ng-container>\n                            <ng-template #virtualScrollList>\n                                <cdk-virtual-scroll-viewport (scrolledIndexChange)=\"scrollToSelectedVirtualScrollElement()\" #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" *ngIf=\"virtualScroll && optionsToDisplay && optionsToDisplay.length\">\n                                    <ng-container *cdkVirtualFor=\"let option of options; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd\">         \n                                        <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\"\n                                                                   (onClick)=\"onItemClick($event)\"\n                                                                   [template]=\"itemTemplate\"></p-dropdownItem>\n                                    </ng-container>\n                                </cdk-virtual-scroll-viewport>\n                            </ng-template>\n                        </ng-template>\n                        <li *ngIf=\"filter && optionsToDisplay && optionsToDisplay.length === 0\" class=\"ui-dropdown-empty-message\">{{emptyFilterMessage}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
            animations: [
                animations_1.trigger('overlayAnimation', [
                    animations_1.state('void', animations_1.style({
                        transform: 'translateY(5%)',
                        opacity: 0
                    })),
                    animations_1.state('visible', animations_1.style({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    animations_1.transition('void => visible', animations_1.animate('{{showTransitionParams}}')),
                    animations_1.transition('visible => void', animations_1.animate('{{hideTransitionParams}}'))
                ])
            ],
            host: {
                '[class.ui-inputwrapper-filled]': 'filled',
                '[class.ui-inputwrapper-focus]': 'focused'
            },
            providers: [exports.DROPDOWN_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2, core_1.ChangeDetectorRef, core_1.NgZone])
    ], Dropdown);
    return Dropdown;
}());
exports.Dropdown = Dropdown;
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_1.SharedModule, scrolling_1.ScrollingModule],
            exports: [Dropdown, shared_1.SharedModule, scrolling_1.ScrollingModule],
            declarations: [Dropdown, DropdownItem]
        })
    ], DropdownModule);
    return DropdownModule;
}());
exports.DropdownModule = DropdownModule;
//# sourceMappingURL=dropdown.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dialogservice.js":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dialogservice.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var dynamicdialog_1 = __webpack_require__(/*! ./dynamicdialog */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog.js");
var dynamicdialog_injector_1 = __webpack_require__(/*! ./dynamicdialog-injector */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-injector.js");
var dynamicdialog_config_1 = __webpack_require__(/*! ./dynamicdialog-config */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-config.js");
var dynamicdialog_ref_1 = __webpack_require__(/*! ./dynamicdialog-ref */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-ref.js");
var DialogService = /** @class */ (function () {
    function DialogService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DialogService.prototype.open = function (componentType, config) {
        var dialogRef = this.appendDialogComponentToBody(config);
        this.dialogComponentRef.instance.childComponentType = componentType;
        return dialogRef;
    };
    DialogService.prototype.appendDialogComponentToBody = function (config) {
        var _this = this;
        var map = new WeakMap();
        map.set(dynamicdialog_config_1.DynamicDialogConfig, config);
        var dialogRef = new dynamicdialog_ref_1.DynamicDialogRef();
        map.set(dynamicdialog_ref_1.DynamicDialogRef, dialogRef);
        var sub = dialogRef.onClose.subscribe(function () {
            _this.removeDialogComponentFromBody();
            sub.unsubscribe();
        });
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(dynamicdialog_1.DynamicDialogComponent);
        var componentRef = componentFactory.create(new dynamicdialog_injector_1.DynamicDialogInjector(this.injector, map));
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        this.dialogComponentRef = componentRef;
        return dialogRef;
    };
    DialogService.prototype.removeDialogComponentFromBody = function () {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
    };
    DialogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, core_1.ApplicationRef, core_1.Injector])
    ], DialogService);
    return DialogService;
}());
exports.DialogService = DialogService;
//# sourceMappingURL=dialogservice.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-config.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dynamicdialog-config.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicDialogConfig = /** @class */ (function () {
    function DynamicDialogConfig() {
    }
    return DynamicDialogConfig;
}());
exports.DynamicDialogConfig = DynamicDialogConfig;
//# sourceMappingURL=dynamicdialog-config.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-injector.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dynamicdialog-injector.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicDialogInjector = /** @class */ (function () {
    function DynamicDialogInjector(_parentInjector, _additionalTokens) {
        this._parentInjector = _parentInjector;
        this._additionalTokens = _additionalTokens;
    }
    DynamicDialogInjector.prototype.get = function (token, notFoundValue, flags) {
        var value = this._additionalTokens.get(token);
        if (value)
            return value;
        return this._parentInjector.get(token, notFoundValue);
    };
    return DynamicDialogInjector;
}());
exports.DynamicDialogInjector = DynamicDialogInjector;
//# sourceMappingURL=dynamicdialog-injector.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-ref.js":
/*!****************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dynamicdialog-ref.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var DynamicDialogRef = /** @class */ (function () {
    function DynamicDialogRef() {
        this._onClose = new rxjs_1.Subject();
        this.onClose = this._onClose.asObservable();
    }
    DynamicDialogRef.prototype.close = function (result) {
        this._onClose.next(result);
    };
    return DynamicDialogRef;
}());
exports.DynamicDialogRef = DynamicDialogRef;
//# sourceMappingURL=dynamicdialog-ref.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dynamicdialog.js":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dynamicdialog.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var dynamicdialogcontent_1 = __webpack_require__(/*! ./dynamicdialogcontent */ "./node_modules/primeng/components/dynamicdialog/dynamicdialogcontent.js");
var dynamicdialog_config_1 = __webpack_require__(/*! ./dynamicdialog-config */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-config.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var dynamicdialog_ref_1 = __webpack_require__(/*! ./dynamicdialog-ref */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-ref.js");
var DynamicDialogComponent = /** @class */ (function () {
    function DynamicDialogComponent(componentFactoryResolver, cd, renderer, config, dialogRef, zone) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.renderer = renderer;
        this.config = config;
        this.dialogRef = dialogRef;
        this.zone = zone;
        this.visible = true;
    }
    DynamicDialogComponent.prototype.ngAfterViewInit = function () {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    };
    DynamicDialogComponent.prototype.onOverlayClicked = function (evt) {
        this.dialogRef.close();
    };
    DynamicDialogComponent.prototype.onDialogClicked = function (evt) {
        evt.stopPropagation();
    };
    DynamicDialogComponent.prototype.loadChildComponent = function (componentType) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        var viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    };
    DynamicDialogComponent.prototype.moveOnTop = function () {
        if (this.config.autoZIndex !== false) {
            var zIndex = this.config.baseZIndex || 0 + (++domhandler_1.DomHandler.zindex);
            this.container.style.zIndex = String(zIndex);
            this.maskViewChild.nativeElement.style.zIndex = String(zIndex - 1);
        }
    };
    DynamicDialogComponent.prototype.onAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.moveOnTop();
                this.bindGlobalListeners();
                domhandler_1.DomHandler.addClass(document.body, 'ui-overflow-hidden');
                break;
            case 'void':
                this.onContainerDestroy();
                break;
        }
    };
    DynamicDialogComponent.prototype.onAnimationEnd = function (event) {
        if (event.toState === 'void') {
            this.dialogRef.close();
        }
    };
    DynamicDialogComponent.prototype.onContainerDestroy = function () {
        domhandler_1.DomHandler.removeClass(document.body, 'ui-overflow-hidden');
        this.unbindGlobalListeners();
        this.container = null;
    };
    DynamicDialogComponent.prototype.close = function () {
        this.visible = false;
    };
    DynamicDialogComponent.prototype.onMaskClick = function () {
        if (this.config.dismissableMask) {
            this.close();
        }
    };
    DynamicDialogComponent.prototype.bindGlobalListeners = function () {
        if (this.config.closeOnEscape !== false && this.config.closable !== false) {
            this.bindDocumentEscapeListener();
        }
    };
    DynamicDialogComponent.prototype.unbindGlobalListeners = function () {
        this.unbindDocumentEscapeListener();
    };
    DynamicDialogComponent.prototype.bindDocumentEscapeListener = function () {
        var _this = this;
        this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
            if (event.which == 27) {
                if (parseInt(_this.container.style.zIndex) == domhandler_1.DomHandler.zindex) {
                    _this.close();
                }
            }
        });
    };
    DynamicDialogComponent.prototype.unbindDocumentEscapeListener = function () {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    };
    DynamicDialogComponent.prototype.ngOnDestroy = function () {
        this.onContainerDestroy();
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    __decorate([
        core_1.ViewChild(dynamicdialogcontent_1.DynamicDialogContent, { static: false }),
        __metadata("design:type", dynamicdialogcontent_1.DynamicDialogContent)
    ], DynamicDialogComponent.prototype, "insertionPoint", void 0);
    __decorate([
        core_1.ViewChild('mask', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], DynamicDialogComponent.prototype, "maskViewChild", void 0);
    DynamicDialogComponent = __decorate([
        core_1.Component({
            selector: 'p-dynamicDialog',
            template: "\n\t\t<div #mask class=\"ui-widget-overlay ui-dialog-mask ui-dialog-mask-scrollblocker\" *ngIf=\"visible\" (click)=\"onMaskClick()\"></div>\n\t\t<div [ngClass]=\"{'ui-dialog ui-dynamicdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true, 'ui-dialog-rtl': config.rtl}\" [ngStyle]=\"config.style\" [class]=\"config.styleClass\"\n\t\t\t[@animation]=\"{value: 'visible', params: {transitionParams: config.transitionOptions || '150ms cubic-bezier(0, 0, 0.2, 1)'}}\" \n\t\t\t(@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" role=\"dialog\" *ngIf=\"visible\"\n\t\t\t[style.width]=\"config.width\" [style.height]=\"config.height\">\n            <div class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\" *ngIf=\"config.showHeader === false ? false: true\">\n                <span class=\"ui-dialog-title\">{{config.header}}</span>\n                <a [ngClass]=\"'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all'\" tabindex=\"0\" role=\"button\" (click)=\"close()\" (keydown.enter)=\"close()\" *ngIf=\"config.closable === false ? false : true\">\n                    <span class=\"pi pi-times\"></span>\n                </a>\n            </div>\n            <div class=\"ui-dialog-content ui-widget-content\" [ngStyle]=\"config.contentStyle\">\n\t\t\t\t<ng-template pDynamicDialogContent></ng-template>\n\t\t\t</div>\n\t\t\t<div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"config.footer\">\n\t\t\t\t{{config.footer}}\n            </div>\n\t\t</div>\n\t",
            animations: [
                animations_1.trigger('animation', [
                    animations_1.state('void', animations_1.style({
                        transform: 'translateX(-50%) translateY(-50%) scale(0.7)',
                        opacity: 0
                    })),
                    animations_1.state('visible', animations_1.style({
                        transform: 'translateX(-50%) translateY(-50%) scale(1)',
                        opacity: 1
                    })),
                    animations_1.transition('* => *', animations_1.animate('{{transitionParams}}'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, core_1.ChangeDetectorRef, core_1.Renderer2,
            dynamicdialog_config_1.DynamicDialogConfig, dynamicdialog_ref_1.DynamicDialogRef, core_1.NgZone])
    ], DynamicDialogComponent);
    return DynamicDialogComponent;
}());
exports.DynamicDialogComponent = DynamicDialogComponent;
var DynamicDialogModule = /** @class */ (function () {
    function DynamicDialogModule() {
    }
    DynamicDialogModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [DynamicDialogComponent, dynamicdialogcontent_1.DynamicDialogContent],
            entryComponents: [DynamicDialogComponent]
        })
    ], DynamicDialogModule);
    return DynamicDialogModule;
}());
exports.DynamicDialogModule = DynamicDialogModule;
//# sourceMappingURL=dynamicdialog.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dynamicdialogcontent.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dynamicdialogcontent.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var DynamicDialogContent = /** @class */ (function () {
    function DynamicDialogContent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    DynamicDialogContent = __decorate([
        core_1.Directive({
            selector: '[pDynamicDialogContent]'
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef])
    ], DynamicDialogContent);
    return DynamicDialogContent;
}());
exports.DynamicDialogContent = DynamicDialogContent;
//# sourceMappingURL=dynamicdialogcontent.js.map

/***/ }),

/***/ "./node_modules/primeng/components/fileupload/fileupload.js":
/*!******************************************************************!*\
  !*** ./node_modules/primeng/components/fileupload/fileupload.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var button_1 = __webpack_require__(/*! ../button/button */ "./node_modules/primeng/components/button/button.js");
var messages_1 = __webpack_require__(/*! ../messages/messages */ "./node_modules/primeng/components/messages/messages.js");
var progressbar_1 = __webpack_require__(/*! ../progressbar/progressbar */ "./node_modules/primeng/components/progressbar/progressbar.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var FileUpload = /** @class */ (function () {
    function FileUpload(el, sanitizer, zone, http) {
        this.el = el;
        this.sanitizer = sanitizer;
        this.zone = zone;
        this.http = http;
        this.method = 'POST';
        this.invalidFileSizeMessageSummary = '{0}: Invalid file size, ';
        this.invalidFileSizeMessageDetail = 'maximum upload size is {0}.';
        this.invalidFileTypeMessageSummary = '{0}: Invalid file type, ';
        this.invalidFileTypeMessageDetail = 'allowed file types: {0}.';
        this.invalidFileLimitMessageDetail = 'limit is {0} at most.';
        this.invalidFileLimitMessageSummary = 'Maximum number of files exceeded, ';
        this.previewWidth = 50;
        this.chooseLabel = 'Choose';
        this.uploadLabel = 'Upload';
        this.cancelLabel = 'Cancel';
        this.showUploadButton = true;
        this.showCancelButton = true;
        this.mode = 'advanced';
        this.onBeforeUpload = new core_1.EventEmitter();
        this.onSend = new core_1.EventEmitter();
        this.onUpload = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.onClear = new core_1.EventEmitter();
        this.onRemove = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onProgress = new core_1.EventEmitter();
        this.uploadHandler = new core_1.EventEmitter();
        this._files = [];
        this.progress = 0;
        this.uploadedFileCount = 0;
    }
    Object.defineProperty(FileUpload.prototype, "files", {
        get: function () {
            return this._files;
        },
        set: function (files) {
            this._files = [];
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if (this.validate(file)) {
                    if (this.isImage(file)) {
                        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                    }
                    this._files.push(files[i]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    FileUpload.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'file':
                    _this.fileTemplate = item.template;
                    break;
                case 'content':
                    _this.contentTemplate = item.template;
                    break;
                case 'toolbar':
                    _this.toolbarTemplate = item.template;
                    break;
                default:
                    _this.fileTemplate = item.template;
                    break;
            }
        });
    };
    FileUpload.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.mode === 'advanced') {
            this.zone.runOutsideAngular(function () {
                if (_this.content)
                    _this.content.nativeElement.addEventListener('dragover', _this.onDragOver.bind(_this));
            });
        }
    };
    FileUpload.prototype.onFileSelect = function (event) {
        if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
            this.duplicateIEEvent = false;
            return;
        }
        this.msgs = [];
        if (!this.multiple) {
            this.files = [];
        }
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (!this.isFileSelected(file)) {
                if (this.validate(file)) {
                    if (this.isImage(file)) {
                        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                    }
                    this.files.push(files[i]);
                }
            }
        }
        this.onSelect.emit({ originalEvent: event, files: files });
        if (this.fileLimit && this.mode == "advanced") {
            this.checkFileLimit();
        }
        if (this.hasFiles() && this.auto && (!(this.mode === "advanced") || !this.isFileLimitExceeded())) {
            this.upload();
        }
        if (event.type !== 'drop' && this.isIE11()) {
            this.clearIEInput();
        }
        else {
            this.clearInputElement();
        }
    };
    FileUpload.prototype.isFileSelected = function (file) {
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var sFile = _a[_i];
            if ((sFile.name + sFile.type + sFile.size) === (file.name + file.type + file.size)) {
                return true;
            }
        }
        return false;
    };
    FileUpload.prototype.isIE11 = function () {
        return !!window['MSInputMethodContext'] && !!document['documentMode'];
    };
    FileUpload.prototype.validate = function (file) {
        if (this.accept && !this.isFileTypeValid(file)) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileTypeMessageSummary.replace('{0}', file.name),
                detail: this.invalidFileTypeMessageDetail.replace('{0}', this.accept)
            });
            return false;
        }
        if (this.maxFileSize && file.size > this.maxFileSize) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileSizeMessageSummary.replace('{0}', file.name),
                detail: this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxFileSize))
            });
            return false;
        }
        return true;
    };
    FileUpload.prototype.isFileTypeValid = function (file) {
        var acceptableTypes = this.accept.split(',').map(function (type) { return type.trim(); });
        for (var _i = 0, acceptableTypes_1 = acceptableTypes; _i < acceptableTypes_1.length; _i++) {
            var type = acceptableTypes_1[_i];
            var acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type)
                : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
            if (acceptable) {
                return true;
            }
        }
        return false;
    };
    FileUpload.prototype.getTypeClass = function (fileType) {
        return fileType.substring(0, fileType.indexOf('/'));
    };
    FileUpload.prototype.isWildcard = function (fileType) {
        return fileType.indexOf('*') !== -1;
    };
    FileUpload.prototype.getFileExtension = function (file) {
        return '.' + file.name.split('.').pop();
    };
    FileUpload.prototype.isImage = function (file) {
        return /^image\//.test(file.type);
    };
    FileUpload.prototype.onImageLoad = function (img) {
        window.URL.revokeObjectURL(img.src);
    };
    FileUpload.prototype.upload = function () {
        var _this = this;
        if (this.customUpload) {
            if (this.fileLimit) {
                this.uploadedFileCount += this.files.length;
            }
            this.uploadHandler.emit({
                files: this.files
            });
        }
        else {
            this.uploading = true;
            this.msgs = [];
            var formData_1 = new FormData();
            this.onBeforeUpload.emit({
                'formData': formData_1
            });
            for (var i = 0; i < this.files.length; i++) {
                formData_1.append(this.name, this.files[i], this.files[i].name);
            }
            this.http.post(this.url, formData_1, {
                headers: this.headers, reportProgress: true, observe: 'events', withCredentials: this.withCredentials
            }).subscribe(function (event) {
                switch (event.type) {
                    case http_1.HttpEventType.Sent:
                        _this.onSend.emit({
                            originalEvent: event,
                            'formData': formData_1
                        });
                        break;
                    case http_1.HttpEventType.Response:
                        _this.uploading = false;
                        _this.progress = 0;
                        if (event['status'] >= 200 && event['status'] < 300) {
                            if (_this.fileLimit) {
                                _this.uploadedFileCount += _this.files.length;
                            }
                            _this.onUpload.emit({ originalEvent: event, files: _this.files });
                        }
                        else {
                            _this.onError.emit({ files: _this.files });
                        }
                        _this.clear();
                        break;
                    case http_1.HttpEventType.UploadProgress: {
                        if (event['loaded']) {
                            _this.progress = Math.round((event['loaded'] * 100) / event['total']);
                        }
                        _this.onProgress.emit({ originalEvent: event, progress: _this.progress });
                        break;
                    }
                }
            }, function (error) {
                _this.uploading = false;
                _this.onError.emit({ files: _this.files, error: error });
            });
        }
    };
    FileUpload.prototype.clear = function () {
        this.files = [];
        this.onClear.emit();
        this.clearInputElement();
    };
    FileUpload.prototype.remove = function (event, index) {
        this.clearInputElement();
        this.onRemove.emit({ originalEvent: event, file: this.files[index] });
        this.files.splice(index, 1);
    };
    FileUpload.prototype.isFileLimitExceeded = function () {
        if (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focus) {
            this.focus = false;
        }
        return this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount;
    };
    FileUpload.prototype.isChooseDisabled = function () {
        return this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
    };
    FileUpload.prototype.checkFileLimit = function () {
        if (this.isFileLimitExceeded()) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileLimitMessageSummary.replace('{0}', this.fileLimit.toString()),
                detail: this.invalidFileLimitMessageDetail.replace('{0}', this.fileLimit.toString())
            });
        }
    };
    FileUpload.prototype.clearInputElement = function () {
        if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.advancedFileInput.nativeElement.value = '';
        }
        if (this.basicFileInput && this.basicFileInput.nativeElement) {
            this.basicFileInput.nativeElement.value = '';
        }
    };
    FileUpload.prototype.clearIEInput = function () {
        if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again
            this.advancedFileInput.nativeElement.value = '';
        }
    };
    FileUpload.prototype.hasFiles = function () {
        return this.files && this.files.length > 0;
    };
    FileUpload.prototype.onDragEnter = function (e) {
        if (!this.disabled) {
            e.stopPropagation();
            e.preventDefault();
        }
    };
    FileUpload.prototype.onDragOver = function (e) {
        if (!this.disabled) {
            domhandler_1.DomHandler.addClass(this.content.nativeElement, 'ui-fileupload-highlight');
            this.dragHighlight = true;
            e.stopPropagation();
            e.preventDefault();
        }
    };
    FileUpload.prototype.onDragLeave = function (event) {
        if (!this.disabled) {
            domhandler_1.DomHandler.removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
        }
    };
    FileUpload.prototype.onDrop = function (event) {
        if (!this.disabled) {
            domhandler_1.DomHandler.removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
            event.stopPropagation();
            event.preventDefault();
            var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            var allowDrop = this.multiple || (files && files.length === 1);
            if (allowDrop) {
                this.onFileSelect(event);
            }
        }
    };
    FileUpload.prototype.onFocus = function () {
        this.focus = true;
    };
    FileUpload.prototype.onBlur = function () {
        this.focus = false;
    };
    FileUpload.prototype.formatSize = function (bytes) {
        if (bytes == 0) {
            return '0 B';
        }
        var k = 1000, dm = 3, sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    FileUpload.prototype.onSimpleUploaderClick = function (event) {
        if (this.hasFiles()) {
            this.upload();
        }
    };
    FileUpload.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    FileUpload.prototype.ngOnDestroy = function () {
        if (this.content && this.content.nativeElement) {
            this.content.nativeElement.removeEventListener('dragover', this.onDragOver);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "url", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "method", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "multiple", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "accept", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "auto", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "withCredentials", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], FileUpload.prototype, "maxFileSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "invalidFileSizeMessageSummary", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "invalidFileSizeMessageDetail", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "invalidFileTypeMessageSummary", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "invalidFileTypeMessageDetail", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "invalidFileLimitMessageDetail", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "invalidFileLimitMessageSummary", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FileUpload.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], FileUpload.prototype, "previewWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "chooseLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "uploadLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "cancelLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "showUploadButton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "showCancelButton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "mode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", http_1.HttpHeaders)
    ], FileUpload.prototype, "headers", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "customUpload", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], FileUpload.prototype, "fileLimit", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onBeforeUpload", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onSend", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onUpload", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onError", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onClear", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onRemove", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onSelect", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onProgress", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "uploadHandler", void 0);
    __decorate([
        core_1.ContentChildren(shared_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], FileUpload.prototype, "templates", void 0);
    __decorate([
        core_1.ViewChild('advancedfileinput', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], FileUpload.prototype, "advancedFileInput", void 0);
    __decorate([
        core_1.ViewChild('basicfileinput', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], FileUpload.prototype, "basicFileInput", void 0);
    __decorate([
        core_1.ViewChild('content', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], FileUpload.prototype, "content", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Object])
    ], FileUpload.prototype, "files", null);
    FileUpload = __decorate([
        core_1.Component({
            selector: 'p-fileUpload',
            template: "\n        <div [ngClass]=\"'ui-fileupload ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"mode === 'advanced'\">\n            <div class=\"ui-fileupload-buttonbar ui-widget-header ui-corner-top\">\n                <span class=\"ui-fileupload-choose\" [label]=\"chooseLabel\" icon=\"pi pi-plus\" pButton [ngClass]=\"{'ui-state-focus': focus, 'ui-state-disabled':disabled || isChooseDisabled()}\"> \n                    <input #advancedfileinput type=\"file\" (change)=\"onFileSelect($event)\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled || isChooseDisabled()\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n                </span>\n\n                <p-button *ngIf=\"!auto&&showUploadButton\" type=\"button\" [label]=\"uploadLabel\" icon=\"pi pi-upload\" (onClick)=\"upload()\" [disabled]=\"!hasFiles() || isFileLimitExceeded()\"></p-button>\n                <p-button *ngIf=\"!auto&&showCancelButton\" type=\"button\" [label]=\"cancelLabel\" icon=\"pi pi-times\" (onClick)=\"clear()\" [disabled]=\"!hasFiles() ||\u00A0uploading\"></p-button>\n\n                <ng-container *ngTemplateOutlet=\"toolbarTemplate\"></ng-container>\n            </div>\n            <div #content [ngClass]=\"{'ui-fileupload-content ui-widget-content ui-corner-bottom':true}\"\n                 (dragenter)=\"onDragEnter($event)\" (dragleave)=\"onDragLeave($event)\" (drop)=\"onDrop($event)\">\n                <p-progressBar [value]=\"progress\" [showValue]=\"false\" *ngIf=\"hasFiles()\"></p-progressBar>\n\n                <p-messages [value]=\"msgs\" [enableService]=\"false\"></p-messages>\n\n                <div class=\"ui-fileupload-files\" *ngIf=\"hasFiles()\">\n                    <div *ngIf=\"!fileTemplate\">\n                        <div class=\"ui-fileupload-row\" *ngFor=\"let file of files; let i = index;\">\n                            <div><img [src]=\"file.objectURL\" *ngIf=\"isImage(file)\" [width]=\"previewWidth\" /></div>\n                            <div>{{file.name}}</div>\n                            <div>{{formatSize(file.size)}}</div>\n                            <div>\n                                <button type=\"button\" icon=\"pi pi-times\" pButton (click)=\"remove($event,i)\" [disabled]=\"uploading\"></button>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"fileTemplate\">\n                        <ng-template ngFor [ngForOf]=\"files\" [ngForTemplate]=\"fileTemplate\"></ng-template>\n                    </div>\n                </div>\n                <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            </div>\n        </div>\n        <span *ngIf=\"mode === 'basic'\" [ngClass]=\"{'ui-button ui-fileupload-choose ui-widget ui-state-default ui-corner-all ui-button-text-icon-left': true, \n                'ui-fileupload-choose-selected': hasFiles(),'ui-state-focus': focus, 'ui-state-disabled':disabled}\"\n              [ngStyle]=\"style\" [class]=\"styleClass\" (mouseup)=\"onSimpleUploaderClick($event)\">\n            <span class=\"ui-button-icon-left pi\" [ngClass]=\"{'pi-plus': !hasFiles()||auto, 'pi-upload': hasFiles()&&!auto}\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{auto ? chooseLabel : hasFiles() ? files[0].name : chooseLabel}}</span>\n            <input #basicfileinput type=\"file\" [accept]=\"accept\" [multiple]=\"multiple\" [disabled]=\"disabled\"\n                   (change)=\"onFileSelect($event)\" *ngIf=\"!hasFiles()\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n        </span>\n    "
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, platform_browser_1.DomSanitizer, core_1.NgZone, http_1.HttpClient])
    ], FileUpload);
    return FileUpload;
}());
exports.FileUpload = FileUpload;
var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_1.SharedModule, button_1.ButtonModule, progressbar_1.ProgressBarModule, messages_1.MessagesModule],
            exports: [FileUpload, shared_1.SharedModule, button_1.ButtonModule, progressbar_1.ProgressBarModule, messages_1.MessagesModule],
            declarations: [FileUpload]
        })
    ], FileUploadModule);
    return FileUploadModule;
}());
exports.FileUploadModule = FileUploadModule;
//# sourceMappingURL=fileupload.js.map

/***/ }),

/***/ "./node_modules/primeng/components/message/message.js":
/*!************************************************************!*\
  !*** ./node_modules/primeng/components/message/message.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var UIMessage = /** @class */ (function () {
    function UIMessage() {
    }
    Object.defineProperty(UIMessage.prototype, "icon", {
        get: function () {
            var icon = null;
            if (this.severity) {
                switch (this.severity) {
                    case 'success':
                        icon = 'pi pi-check';
                        break;
                    case 'info':
                        icon = 'pi pi-info-circle';
                        break;
                    case 'error':
                        icon = 'pi pi-times';
                        break;
                    case 'warn':
                        icon = 'pi pi-exclamation-triangle';
                        break;
                    default:
                        icon = 'pi pi-info-circle';
                        break;
                }
            }
            return icon;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], UIMessage.prototype, "severity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], UIMessage.prototype, "text", void 0);
    UIMessage = __decorate([
        core_1.Component({
            selector: 'p-message',
            template: "\n        <div aria-live=\"polite\" class=\"ui-message ui-widget ui-corner-all\" *ngIf=\"severity\"\n        [ngClass]=\"{'ui-message-info': (severity === 'info'),\n                'ui-message-warn': (severity === 'warn'),\n                'ui-message-error': (severity === 'error'),\n                'ui-message-success': (severity === 'success')}\">\n            <span class=\"ui-message-icon\" [ngClass]=\"icon\"></span>\n            <span class=\"ui-message-text\" [innerHTML]=\"text\"></span>\n        </div>\n    "
        })
    ], UIMessage);
    return UIMessage;
}());
exports.UIMessage = UIMessage;
var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [UIMessage],
            declarations: [UIMessage]
        })
    ], MessageModule);
    return MessageModule;
}());
exports.MessageModule = MessageModule;
//# sourceMappingURL=message.js.map

/***/ }),

/***/ "./node_modules/primeng/components/messages/messages.js":
/*!**************************************************************!*\
  !*** ./node_modules/primeng/components/messages/messages.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var messageservice_1 = __webpack_require__(/*! ../common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
var Messages = /** @class */ (function () {
    function Messages(messageService) {
        this.messageService = messageService;
        this.closable = true;
        this.enableService = true;
        this.showTransitionOptions = '300ms ease-out';
        this.hideTransitionOptions = '250ms ease-in';
        this.valueChange = new core_1.EventEmitter();
    }
    Messages.prototype.ngOnInit = function () {
        var _this = this;
        if (this.messageService && this.enableService) {
            this.messageSubscription = this.messageService.messageObserver.subscribe(function (messages) {
                if (messages) {
                    if (messages instanceof Array) {
                        var filteredMessages = messages.filter(function (m) { return _this.key === m.key; });
                        _this.value = _this.value ? _this.value.concat(filteredMessages) : filteredMessages.slice();
                    }
                    else if (_this.key === messages.key) {
                        _this.value = _this.value ? _this.value.concat([messages]) : [messages];
                    }
                }
            });
            this.clearSubscription = this.messageService.clearObserver.subscribe(function (key) {
                if (key) {
                    if (_this.key === key) {
                        _this.value = null;
                    }
                }
                else {
                    _this.value = null;
                }
            });
        }
    };
    Messages.prototype.hasMessages = function () {
        return this.value && this.value.length > 0;
    };
    Messages.prototype.getSeverityClass = function () {
        return this.value[0].severity;
    };
    Messages.prototype.clear = function (event) {
        this.value = [];
        this.valueChange.emit(this.value);
        event.preventDefault();
    };
    Object.defineProperty(Messages.prototype, "icon", {
        get: function () {
            var icon = null;
            if (this.hasMessages()) {
                var msg = this.value[0];
                switch (msg.severity) {
                    case 'success':
                        icon = 'pi-check';
                        break;
                    case 'info':
                        icon = 'pi-info-circle';
                        break;
                    case 'error':
                        icon = 'pi-times';
                        break;
                    case 'warn':
                        icon = 'pi-exclamation-triangle';
                        break;
                    default:
                        icon = 'pi-info-circle';
                        break;
                }
            }
            return icon;
        },
        enumerable: true,
        configurable: true
    });
    Messages.prototype.ngOnDestroy = function () {
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
        }
        if (this.clearSubscription) {
            this.clearSubscription.unsubscribe();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Messages.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Messages.prototype, "closable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Messages.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Messages.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Messages.prototype, "enableService", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Messages.prototype, "key", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Messages.prototype, "showTransitionOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Messages.prototype, "hideTransitionOptions", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Messages.prototype, "valueChange", void 0);
    Messages = __decorate([
        core_1.Component({
            selector: 'p-messages',
            template: "\n        <div *ngIf=\"hasMessages()\" class=\"ui-messages ui-widget ui-corner-all\"\n                    [ngClass]=\"{'ui-messages-info':(value[0].severity === 'info'),\n                    'ui-messages-warn':(value[0].severity === 'warn'),\n                    'ui-messages-error':(value[0].severity === 'error'),\n                    'ui-messages-success':(value[0].severity === 'success')}\"\n                    [ngStyle]=\"style\" [class]=\"styleClass\" [@messageAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\">\n            <a tabindex=\"0\" class=\"ui-messages-close\" (click)=\"clear($event)\" (keydown.enter)=\"clear($event)\" *ngIf=\"closable\">\n                <i class=\"pi pi-times\"></i>\n            </a>\n            <span class=\"ui-messages-icon pi\" [ngClass]=\"icon\"></span>\n            <ul>\n                <li *ngFor=\"let msg of value\">\n                    <span *ngIf=\"msg.summary\" class=\"ui-messages-summary\" [innerHTML]=\"msg.summary\"></span>\n                    <span *ngIf=\"msg.detail\" class=\"ui-messages-detail\" [innerHTML]=\"msg.detail\"></span>\n                </li>\n            </ul>\n        </div>\n    ",
            animations: [
                animations_1.trigger('messageAnimation', [
                    animations_1.state('visible', animations_1.style({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    animations_1.transition('void => *', [
                        animations_1.style({ transform: 'translateY(-25%)', opacity: 0 }),
                        animations_1.animate('{{showTransitionParams}}')
                    ]),
                    animations_1.transition('* => void', [
                        animations_1.animate(('{{hideTransitionParams}}'), animations_1.style({
                            opacity: 0,
                            transform: 'translateY(-25%)'
                        }))
                    ])
                ])
            ]
        }),
        __param(0, core_1.Optional()),
        __metadata("design:paramtypes", [messageservice_1.MessageService])
    ], Messages);
    return Messages;
}());
exports.Messages = Messages;
var MessagesModule = /** @class */ (function () {
    function MessagesModule() {
    }
    MessagesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Messages],
            declarations: [Messages]
        })
    ], MessagesModule);
    return MessagesModule;
}());
exports.MessagesModule = MessagesModule;
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/primeng/components/paginator/paginator.js":
/*!****************************************************************!*\
  !*** ./node_modules/primeng/components/paginator/paginator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var dropdown_1 = __webpack_require__(/*! ../dropdown/dropdown */ "./node_modules/primeng/components/dropdown/dropdown.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var Paginator = /** @class */ (function () {
    function Paginator(cd) {
        this.cd = cd;
        this.pageLinkSize = 5;
        this.onPageChange = new core_1.EventEmitter();
        this.alwaysShow = true;
        this.dropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this._totalRecords = 0;
        this._first = 0;
        this._rows = 0;
    }
    Paginator.prototype.ngOnInit = function () {
        this.updatePaginatorState();
    };
    Object.defineProperty(Paginator.prototype, "totalRecords", {
        get: function () {
            return this._totalRecords;
        },
        set: function (val) {
            this._totalRecords = val;
            this.updatePageLinks();
            this.updatePaginatorState();
            this.updateFirst();
            this.updateRowsPerPageOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "first", {
        get: function () {
            return this._first;
        },
        set: function (val) {
            this._first = val;
            this.updatePageLinks();
            this.updatePaginatorState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        set: function (val) {
            this._rows = val;
            this.updatePageLinks();
            this.updatePaginatorState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "rowsPerPageOptions", {
        get: function () {
            return this._rowsPerPageOptions;
        },
        set: function (val) {
            this._rowsPerPageOptions = val;
            this.updateRowsPerPageOptions();
        },
        enumerable: true,
        configurable: true
    });
    Paginator.prototype.updateRowsPerPageOptions = function () {
        if (this.rowsPerPageOptions) {
            this.rowsPerPageItems = [];
            for (var _i = 0, _a = this.rowsPerPageOptions; _i < _a.length; _i++) {
                var opt = _a[_i];
                if (typeof opt == 'object' && opt['showAll']) {
                    this.rowsPerPageItems.push({ label: opt['showAll'], value: this.totalRecords });
                }
                else {
                    this.rowsPerPageItems.push({ label: String(opt), value: opt });
                }
            }
        }
    };
    Paginator.prototype.isFirstPage = function () {
        return this.getPage() === 0;
    };
    Paginator.prototype.isLastPage = function () {
        return this.getPage() === this.getPageCount() - 1;
    };
    Paginator.prototype.getPageCount = function () {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    };
    Paginator.prototype.calculatePageLinkBoundaries = function () {
        var numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
        //calculate range, keep current in middle if necessary
        var start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
        //check when approaching to last page
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);
        return [start, end];
    };
    Paginator.prototype.updatePageLinks = function () {
        this.pageLinks = [];
        var boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
        for (var i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
    };
    Paginator.prototype.changePage = function (p) {
        var pc = this.getPageCount();
        if (p >= 0 && p < pc) {
            this.first = this.rows * p;
            var state = {
                page: p,
                first: this.first,
                rows: this.rows,
                pageCount: pc
            };
            this.updatePageLinks();
            this.onPageChange.emit(state);
            this.updatePaginatorState();
        }
    };
    Paginator.prototype.updateFirst = function () {
        var _this = this;
        var page = this.getPage();
        if (page > 0 && (this.first >= this.totalRecords)) {
            Promise.resolve(null).then(function () { return _this.changePage(page - 1); });
        }
    };
    Paginator.prototype.getPage = function () {
        return Math.floor(this.first / this.rows);
    };
    Paginator.prototype.changePageToFirst = function (event) {
        if (!this.isFirstPage()) {
            this.changePage(0);
        }
        event.preventDefault();
    };
    Paginator.prototype.changePageToPrev = function (event) {
        this.changePage(this.getPage() - 1);
        event.preventDefault();
    };
    Paginator.prototype.changePageToNext = function (event) {
        this.changePage(this.getPage() + 1);
        event.preventDefault();
    };
    Paginator.prototype.changePageToLast = function (event) {
        if (!this.isLastPage()) {
            this.changePage(this.getPageCount() - 1);
        }
        event.preventDefault();
    };
    Paginator.prototype.onPageLinkClick = function (event, page) {
        this.changePage(page);
        event.preventDefault();
    };
    Paginator.prototype.onRppChange = function (event) {
        this.changePage(this.getPage());
    };
    Paginator.prototype.updatePaginatorState = function () {
        this.paginatorState = {
            page: this.getPage(),
            pageCount: this.getPageCount(),
            rows: this.rows,
            first: this.first,
            totalRecords: this.totalRecords
        };
    };
    Object.defineProperty(Paginator.prototype, "currentPageReport", {
        get: function () {
            return this.currentPageReportTemplate
                .replace("{currentPage}", (this.getPage() + 1).toString())
                .replace("{totalPages}", this.getPageCount().toString());
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Paginator.prototype, "pageLinkSize", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Paginator.prototype, "onPageChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Paginator.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Paginator.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Paginator.prototype, "alwaysShow", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.TemplateRef)
    ], Paginator.prototype, "templateLeft", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.TemplateRef)
    ], Paginator.prototype, "templateRight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Paginator.prototype, "dropdownAppendTo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Paginator.prototype, "dropdownScrollHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Paginator.prototype, "currentPageReportTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Paginator.prototype, "showCurrentPageReport", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], Paginator.prototype, "totalRecords", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], Paginator.prototype, "first", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], Paginator.prototype, "rows", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Paginator.prototype, "rowsPerPageOptions", null);
    Paginator = __decorate([
        core_1.Component({
            selector: 'p-paginator',
            template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-paginator ui-widget ui-widget-header ui-unselectable-text ui-helper-clearfix'\"\n            *ngIf=\"alwaysShow ? true : (pageLinks && pageLinks.length > 1)\">\n            <div class=\"ui-paginator-left-content\" *ngIf=\"templateLeft\">\n                <ng-container *ngTemplateOutlet=\"templateLeft; context: {$implicit: paginatorState}\"></ng-container>\n            </div>\n            <span class=\"ui-paginator-current\" *ngIf=\"showCurrentPageReport\">{{currentPageReport}}</span>\n            <a [attr.tabindex]=\"isFirstPage() ? null : '0'\" class=\"ui-paginator-first ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToFirst($event)\" (keydown.enter)=\"changePageToFirst($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-step-backward\"></span>\n            </a>\n            <a tabindex=\"0\" [attr.tabindex]=\"isFirstPage() ? null : '0'\" class=\"ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToPrev($event)\" (keydown.enter)=\"changePageToPrev($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-caret-left\"></span>\n            </a>\n            <span class=\"ui-paginator-pages\">\n                <a tabindex=\"0\" *ngFor=\"let pageLink of pageLinks\" class=\"ui-paginator-page ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"onPageLinkClick($event, pageLink - 1)\" (keydown.enter)=\"onPageLinkClick($event, pageLink - 1)\" [ngClass]=\"{'ui-state-active': (pageLink-1 == getPage())}\">{{pageLink}}</a>\n            </span>\n            <a [attr.tabindex]=\"isLastPage() ? null : '0'\" class=\"ui-paginator-next ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToNext($event)\" (keydown.enter)=\"changePageToNext($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-caret-right\"></span>\n            </a>\n            <a [attr.tabindex]=\"isLastPage() ? null : '0'\" class=\"ui-paginator-last ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToLast($event)\" (keydown.enter)=\"changePageToLast($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-step-forward\"></span>\n            </a>\n            <p-dropdown [options]=\"rowsPerPageItems\" [(ngModel)]=\"rows\" *ngIf=\"rowsPerPageOptions\" \n                (onChange)=\"onRppChange($event)\" [appendTo]=\"dropdownAppendTo\" [scrollHeight]=\"dropdownScrollHeight\"></p-dropdown>\n            <div class=\"ui-paginator-right-content\" *ngIf=\"templateRight\">\n                <ng-container *ngTemplateOutlet=\"templateRight; context: {$implicit: paginatorState}\"></ng-container>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], Paginator);
    return Paginator;
}());
exports.Paginator = Paginator;
var PaginatorModule = /** @class */ (function () {
    function PaginatorModule() {
    }
    PaginatorModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, dropdown_1.DropdownModule, forms_1.FormsModule, shared_1.SharedModule],
            exports: [Paginator, dropdown_1.DropdownModule, forms_1.FormsModule, shared_1.SharedModule],
            declarations: [Paginator]
        })
    ], PaginatorModule);
    return PaginatorModule;
}());
exports.PaginatorModule = PaginatorModule;
//# sourceMappingURL=paginator.js.map

/***/ }),

/***/ "./node_modules/primeng/components/progressbar/progressbar.js":
/*!********************************************************************!*\
  !*** ./node_modules/primeng/components/progressbar/progressbar.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ProgressBar = /** @class */ (function () {
    function ProgressBar() {
        this.showValue = true;
        this.unit = '%';
        this.mode = 'determinate';
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProgressBar.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ProgressBar.prototype, "showValue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProgressBar.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressBar.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressBar.prototype, "unit", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressBar.prototype, "mode", void 0);
    ProgressBar = __decorate([
        core_1.Component({
            selector: 'p-progressBar',
            template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" role=\"progressbar\" aria-valuemin=\"0\" [attr.aria-valuenow]=\"value\" aria-valuemax=\"100\"\n            [ngClass]=\"{'ui-progressbar ui-widget ui-widget-content ui-corner-all': true, 'ui-progressbar-determinate': (mode === 'determinate'), 'ui-progressbar-indeterminate': (mode === 'indeterminate')}\">\n            <div class=\"ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all\" [style.width]=\"value + '%'\" style=\"display:block\"></div>\n            <div class=\"ui-progressbar-label\" [style.display]=\"value != null ? 'block' : 'none'\" *ngIf=\"showValue\">{{value}}{{unit}}</div>\n        </div>\n    "
        })
    ], ProgressBar);
    return ProgressBar;
}());
exports.ProgressBar = ProgressBar;
var ProgressBarModule = /** @class */ (function () {
    function ProgressBarModule() {
    }
    ProgressBarModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [ProgressBar],
            declarations: [ProgressBar]
        })
    ], ProgressBarModule);
    return ProgressBarModule;
}());
exports.ProgressBarModule = ProgressBarModule;
//# sourceMappingURL=progressbar.js.map

/***/ }),

/***/ "./node_modules/primeng/components/table/table.js":
/*!********************************************************!*\
  !*** ./node_modules/primeng/components/table/table.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var paginator_1 = __webpack_require__(/*! ../paginator/paginator */ "./node_modules/primeng/components/paginator/paginator.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var objectutils_1 = __webpack_require__(/*! ../utils/objectutils */ "./node_modules/primeng/components/utils/objectutils.js");
var core_2 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var filterutils_1 = __webpack_require__(/*! ../utils/filterutils */ "./node_modules/primeng/components/utils/filterutils.js");
var TableService = /** @class */ (function () {
    function TableService() {
        this.sortSource = new rxjs_1.Subject();
        this.selectionSource = new rxjs_1.Subject();
        this.contextMenuSource = new rxjs_1.Subject();
        this.valueSource = new rxjs_1.Subject();
        this.totalRecordsSource = new rxjs_1.Subject();
        this.columnsSource = new rxjs_1.Subject();
        this.sortSource$ = this.sortSource.asObservable();
        this.selectionSource$ = this.selectionSource.asObservable();
        this.contextMenuSource$ = this.contextMenuSource.asObservable();
        this.valueSource$ = this.valueSource.asObservable();
        this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
        this.columnsSource$ = this.columnsSource.asObservable();
    }
    TableService.prototype.onSort = function (sortMeta) {
        this.sortSource.next(sortMeta);
    };
    TableService.prototype.onSelectionChange = function () {
        this.selectionSource.next();
    };
    TableService.prototype.onContextMenu = function (data) {
        this.contextMenuSource.next(data);
    };
    TableService.prototype.onValueChange = function (value) {
        this.valueSource.next(value);
    };
    TableService.prototype.onTotalRecordsChange = function (value) {
        this.totalRecordsSource.next(value);
    };
    TableService.prototype.onColumnsChange = function (columns) {
        this.columnsSource.next(columns);
    };
    TableService = __decorate([
        core_2.Injectable()
    ], TableService);
    return TableService;
}());
exports.TableService = TableService;
var Table = /** @class */ (function () {
    function Table(el, zone, tableService, cd) {
        this.el = el;
        this.zone = zone;
        this.tableService = tableService;
        this.cd = cd;
        this.pageLinks = 5;
        this.alwaysShowPaginator = true;
        this.paginatorPosition = 'bottom';
        this.paginatorDropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.defaultSortOrder = 1;
        this.sortMode = 'single';
        this.resetPageOnSort = true;
        this.selectionChange = new core_1.EventEmitter();
        this.contextMenuSelectionChange = new core_1.EventEmitter();
        this.contextMenuSelectionMode = "separate";
        this.rowTrackBy = function (index, item) { return item; };
        this.lazy = false;
        this.lazyLoadOnInit = true;
        this.compareSelectionBy = 'deepEquals';
        this.csvSeparator = ',';
        this.exportFilename = 'download';
        this.filters = {};
        this.filterDelay = 300;
        this.expandedRowKeys = {};
        this.editingRowKeys = {};
        this.rowExpandMode = 'multiple';
        this.virtualScrollDelay = 150;
        this.virtualRowHeight = 28;
        this.columnResizeMode = 'fit';
        this.loadingIcon = 'pi pi-spinner';
        this.showLoader = true;
        this.stateStorage = 'session';
        this.editMode = 'cell';
        this.onRowSelect = new core_1.EventEmitter();
        this.onRowUnselect = new core_1.EventEmitter();
        this.onPage = new core_1.EventEmitter();
        this.onSort = new core_1.EventEmitter();
        this.onFilter = new core_1.EventEmitter();
        this.onLazyLoad = new core_1.EventEmitter();
        this.onRowExpand = new core_1.EventEmitter();
        this.onRowCollapse = new core_1.EventEmitter();
        this.onContextMenuSelect = new core_1.EventEmitter();
        this.onColResize = new core_1.EventEmitter();
        this.onColReorder = new core_1.EventEmitter();
        this.onRowReorder = new core_1.EventEmitter();
        this.onEditInit = new core_1.EventEmitter();
        this.onEditComplete = new core_1.EventEmitter();
        this.onEditCancel = new core_1.EventEmitter();
        this.onHeaderCheckboxToggle = new core_1.EventEmitter();
        this.sortFunction = new core_1.EventEmitter();
        this.firstChange = new core_1.EventEmitter();
        this.rowsChange = new core_1.EventEmitter();
        this.onStateSave = new core_1.EventEmitter();
        this.onStateRestore = new core_1.EventEmitter();
        this._value = [];
        this._totalRecords = 0;
        this._first = 0;
        this.selectionKeys = {};
        this._sortOrder = 1;
    }
    Table.prototype.ngOnInit = function () {
        if (this.lazy && this.lazyLoadOnInit) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
            if (this.restoringFilter) {
                this.restoringFilter = false;
            }
        }
        this.initialized = true;
    };
    Table.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'caption':
                    _this.captionTemplate = item.template;
                    break;
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'body':
                    _this.bodyTemplate = item.template;
                    break;
                case 'loadingbody':
                    _this.loadingBodyTemplate = item.template;
                    break;
                case 'footer':
                    _this.footerTemplate = item.template;
                    break;
                case 'summary':
                    _this.summaryTemplate = item.template;
                    break;
                case 'colgroup':
                    _this.colGroupTemplate = item.template;
                    break;
                case 'rowexpansion':
                    _this.expandedRowTemplate = item.template;
                    break;
                case 'frozenrows':
                    _this.frozenRowsTemplate = item.template;
                    break;
                case 'frozenheader':
                    _this.frozenHeaderTemplate = item.template;
                    break;
                case 'frozenbody':
                    _this.frozenBodyTemplate = item.template;
                    break;
                case 'frozenfooter':
                    _this.frozenFooterTemplate = item.template;
                    break;
                case 'frozencolgroup':
                    _this.frozenColGroupTemplate = item.template;
                    break;
                case 'emptymessage':
                    _this.emptyMessageTemplate = item.template;
                    break;
                case 'paginatorleft':
                    _this.paginatorLeftTemplate = item.template;
                    break;
                case 'paginatorright':
                    _this.paginatorRightTemplate = item.template;
                    break;
            }
        });
    };
    Table.prototype.ngAfterViewInit = function () {
        if (this.isStateful() && this.resizableColumns) {
            this.restoreColumnWidths();
        }
    };
    Object.defineProperty(Table.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            if (this.isStateful() && !this.stateRestored) {
                this.restoreState();
            }
            this._value = val;
            if (!this.lazy) {
                this.totalRecords = (this._value ? this._value.length : 0);
                if (this.sortMode == 'single' && this.sortField)
                    this.sortSingle();
                else if (this.sortMode == 'multiple' && this.multiSortMeta)
                    this.sortMultiple();
                else if (this.hasFilter()) //sort already filters
                    this._filter();
            }
            if (this.virtualScroll && this.virtualScrollCallback) {
                this.virtualScrollCallback();
            }
            this.tableService.onValueChange(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (cols) {
            this._columns = cols;
            this.tableService.onColumnsChange(cols);
            if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
                this.restoreColumnOrder();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "first", {
        get: function () {
            return this._first;
        },
        set: function (val) {
            this._first = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        set: function (val) {
            this._rows = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "totalRecords", {
        get: function () {
            return this._totalRecords;
        },
        set: function (val) {
            this._totalRecords = val;
            this.tableService.onTotalRecordsChange(this._totalRecords);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "sortField", {
        get: function () {
            return this._sortField;
        },
        set: function (val) {
            this._sortField = val;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (val) {
            this._sortOrder = val;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "multiSortMeta", {
        get: function () {
            return this._multiSortMeta;
        },
        set: function (val) {
            this._multiSortMeta = val;
            if (this.sortMode === 'multiple') {
                this.sortMultiple();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        set: function (val) {
            this._selection = val;
            if (!this.preventSelectionSetterPropagation) {
                this.updateSelectionKeys();
                this.tableService.onSelectionChange();
            }
            this.preventSelectionSetterPropagation = false;
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.updateSelectionKeys = function () {
        if (this.dataKey && this._selection) {
            this.selectionKeys = {};
            if (Array.isArray(this._selection)) {
                for (var _i = 0, _a = this._selection; _i < _a.length; _i++) {
                    var data = _a[_i];
                    this.selectionKeys[String(objectutils_1.ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
                }
            }
            else {
                this.selectionKeys[String(objectutils_1.ObjectUtils.resolveFieldData(this._selection, this.dataKey))] = 1;
            }
        }
    };
    Table.prototype.onPageChange = function (event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
        this.firstChange.emit(this.first);
        this.rowsChange.emit(this.rows);
        this.tableService.onValueChange(this.value);
        if (this.isStateful()) {
            this.saveState();
        }
        this.anchorRowIndex = null;
    };
    Table.prototype.sort = function (event) {
        var originalEvent = event.originalEvent;
        if (this.sortMode === 'single') {
            this._sortOrder = (this.sortField === event.field) ? this.sortOrder * -1 : this.defaultSortOrder;
            this._sortField = event.field;
            this.sortSingle();
        }
        if (this.sortMode === 'multiple') {
            var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            var sortMeta = this.getSortMeta(event.field);
            if (sortMeta) {
                if (!metaKey) {
                    this._multiSortMeta = [{ field: event.field, order: sortMeta.order * -1 }];
                }
                else {
                    sortMeta.order = sortMeta.order * -1;
                }
            }
            else {
                if (!metaKey || !this.multiSortMeta) {
                    this._multiSortMeta = [];
                }
                this.multiSortMeta.push({ field: event.field, order: this.defaultSortOrder });
            }
            this.sortMultiple();
        }
        if (this.isStateful()) {
            this.saveState();
        }
        this.anchorRowIndex = null;
    };
    Table.prototype.sortSingle = function () {
        var _this = this;
        if (this.sortField && this.sortOrder) {
            if (this.restoringSort) {
                this.restoringSort = false;
            }
            else if (this.resetPageOnSort) {
                this.first = 0;
                this.firstChange.emit(this.first);
            }
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                if (this.customSort) {
                    this.sortFunction.emit({
                        data: this.value,
                        mode: this.sortMode,
                        field: this.sortField,
                        order: this.sortOrder
                    });
                }
                else {
                    this.value.sort(function (data1, data2) {
                        var value1 = objectutils_1.ObjectUtils.resolveFieldData(data1, _this.sortField);
                        var value2 = objectutils_1.ObjectUtils.resolveFieldData(data2, _this.sortField);
                        var result = null;
                        if (value1 == null && value2 != null)
                            result = -1;
                        else if (value1 != null && value2 == null)
                            result = 1;
                        else if (value1 == null && value2 == null)
                            result = 0;
                        else if (typeof value1 === 'string' && typeof value2 === 'string')
                            result = value1.localeCompare(value2);
                        else
                            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                        return (_this.sortOrder * result);
                    });
                }
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            var sortMeta = {
                field: this.sortField,
                order: this.sortOrder
            };
            this.onSort.emit(sortMeta);
            this.tableService.onSort(sortMeta);
        }
    };
    Table.prototype.sortMultiple = function () {
        var _this = this;
        if (this.multiSortMeta) {
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                if (this.customSort) {
                    this.sortFunction.emit({
                        data: this.value,
                        mode: this.sortMode,
                        multiSortMeta: this.multiSortMeta
                    });
                }
                else {
                    this.value.sort(function (data1, data2) {
                        return _this.multisortField(data1, data2, _this.multiSortMeta, 0);
                    });
                }
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            this.onSort.emit({
                multisortmeta: this.multiSortMeta
            });
            this.tableService.onSort(this.multiSortMeta);
        }
    };
    Table.prototype.multisortField = function (data1, data2, multiSortMeta, index) {
        var value1 = objectutils_1.ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
        var value2 = objectutils_1.ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);
        var result = null;
        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 != value2)) {
                return (multiSortMeta[index].order * value1.localeCompare(value2));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }
        if (value1 == value2) {
            return (multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, multiSortMeta, index + 1)) : 0;
        }
        return (multiSortMeta[index].order * result);
    };
    Table.prototype.getSortMeta = function (field) {
        if (this.multiSortMeta && this.multiSortMeta.length) {
            for (var i = 0; i < this.multiSortMeta.length; i++) {
                if (this.multiSortMeta[i].field === field) {
                    return this.multiSortMeta[i];
                }
            }
        }
        return null;
    };
    Table.prototype.isSorted = function (field) {
        if (this.sortMode === 'single') {
            return (this.sortField && this.sortField === field);
        }
        else if (this.sortMode === 'multiple') {
            var sorted = false;
            if (this.multiSortMeta) {
                for (var i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field == field) {
                        sorted = true;
                        break;
                    }
                }
            }
            return sorted;
        }
    };
    Table.prototype.handleRowClick = function (event) {
        var target = event.originalEvent.target;
        var targetNode = target.nodeName;
        var parentNode = target.parentElement && target.parentElement.nodeName;
        if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' ||
            parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' ||
            (domhandler_1.DomHandler.hasClass(event.originalEvent.target, 'ui-clickable'))) {
            return;
        }
        if (this.selectionMode) {
            this.preventSelectionSetterPropagation = true;
            if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
                domhandler_1.DomHandler.clearSelection();
                if (this.rangeRowIndex != null) {
                    this.clearSelectionRange(event.originalEvent);
                }
                this.rangeRowIndex = event.rowIndex;
                this.selectRange(event.originalEvent, event.rowIndex);
            }
            else {
                var rowData = event.rowData;
                var selected = this.isSelected(rowData);
                var metaSelection = this.rowTouched ? false : this.metaKeySelection;
                var dataKeyValue = this.dataKey ? String(objectutils_1.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
                this.anchorRowIndex = event.rowIndex;
                this.rangeRowIndex = event.rowIndex;
                if (metaSelection) {
                    var metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this._selection = null;
                            this.selectionKeys = {};
                            this.selectionChange.emit(null);
                        }
                        else {
                            var selectionIndex_1 = this.findIndexInSelection(rowData);
                            this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_1; });
                            this.selectionChange.emit(this.selection);
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                        this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this._selection = rowData;
                            this.selectionChange.emit(rowData);
                            if (dataKeyValue) {
                                this.selectionKeys = {};
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                        else if (this.isMultipleSelectionMode()) {
                            if (metaKey) {
                                this._selection = this.selection || [];
                            }
                            else {
                                this._selection = [];
                                this.selectionKeys = {};
                            }
                            this._selection = this.selection.concat([rowData]);
                            this.selectionChange.emit(this.selection);
                            if (dataKeyValue) {
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                        this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                    }
                }
                else {
                    if (this.selectionMode === 'single') {
                        if (selected) {
                            this._selection = null;
                            this.selectionKeys = {};
                            this.selectionChange.emit(this.selection);
                            this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                        }
                        else {
                            this._selection = rowData;
                            this.selectionChange.emit(this.selection);
                            this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                            if (dataKeyValue) {
                                this.selectionKeys = {};
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                    }
                    else if (this.selectionMode === 'multiple') {
                        if (selected) {
                            var selectionIndex_2 = this.findIndexInSelection(rowData);
                            this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_2; });
                            this.selectionChange.emit(this.selection);
                            this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                        else {
                            this._selection = this.selection ? this.selection.concat([rowData]) : [rowData];
                            this.selectionChange.emit(this.selection);
                            this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                            if (dataKeyValue) {
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                    }
                }
            }
            this.tableService.onSelectionChange();
            if (this.isStateful()) {
                this.saveState();
            }
        }
        this.rowTouched = false;
    };
    Table.prototype.handleRowTouchEnd = function (event) {
        this.rowTouched = true;
    };
    Table.prototype.handleRowRightClick = function (event) {
        if (this.contextMenu) {
            var rowData = event.rowData;
            if (this.contextMenuSelectionMode === 'separate') {
                this.contextMenuSelection = rowData;
                this.contextMenuSelectionChange.emit(rowData);
                this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, data: rowData, index: event.rowIndex });
                this.contextMenu.show(event.originalEvent);
                this.tableService.onContextMenu(rowData);
            }
            else if (this.contextMenuSelectionMode === 'joint') {
                this.preventSelectionSetterPropagation = true;
                var selected = this.isSelected(rowData);
                var dataKeyValue = this.dataKey ? String(objectutils_1.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
                if (!selected) {
                    if (this.isSingleSelectionMode()) {
                        this.selection = rowData;
                        this.selectionChange.emit(rowData);
                    }
                    else if (this.isMultipleSelectionMode()) {
                        this.selection = [rowData];
                        this.selectionChange.emit(this.selection);
                    }
                    if (dataKeyValue) {
                        this.selectionKeys[dataKeyValue] = 1;
                    }
                }
                this.contextMenu.show(event.originalEvent);
                this.onContextMenuSelect.emit({ originalEvent: event, data: rowData, index: event.rowIndex });
            }
        }
    };
    Table.prototype.selectRange = function (event, rowIndex) {
        var rangeStart, rangeEnd;
        if (this.anchorRowIndex > rowIndex) {
            rangeStart = rowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else if (this.anchorRowIndex < rowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = rowIndex;
        }
        else {
            rangeStart = rowIndex;
            rangeEnd = rowIndex;
        }
        if (this.lazy && this.paginator) {
            rangeStart -= this.first;
            rangeEnd -= this.first;
        }
        for (var i = rangeStart; i <= rangeEnd; i++) {
            var rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];
            if (!this.isSelected(rangeRowData)) {
                this._selection = this.selection.concat([rangeRowData]);
                var dataKeyValue = this.dataKey ? String(objectutils_1.ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
                if (dataKeyValue) {
                    this.selectionKeys[dataKeyValue] = 1;
                }
                this.onRowSelect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
            }
        }
        this.selectionChange.emit(this.selection);
    };
    Table.prototype.clearSelectionRange = function (event) {
        var rangeStart, rangeEnd;
        if (this.rangeRowIndex > this.anchorRowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        else if (this.rangeRowIndex < this.anchorRowIndex) {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        var _loop_1 = function (i) {
            var rangeRowData = this_1.value[i];
            var selectionIndex = this_1.findIndexInSelection(rangeRowData);
            this_1._selection = this_1.selection.filter(function (val, i) { return i != selectionIndex; });
            var dataKeyValue = this_1.dataKey ? String(objectutils_1.ObjectUtils.resolveFieldData(rangeRowData, this_1.dataKey)) : null;
            if (dataKeyValue) {
                delete this_1.selectionKeys[dataKeyValue];
            }
            this_1.onRowUnselect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
        };
        var this_1 = this;
        for (var i = rangeStart; i <= rangeEnd; i++) {
            _loop_1(i);
        }
    };
    Table.prototype.isSelected = function (rowData) {
        if (rowData && this.selection) {
            if (this.dataKey) {
                return this.selectionKeys[objectutils_1.ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined;
            }
            else {
                if (this.selection instanceof Array)
                    return this.findIndexInSelection(rowData) > -1;
                else
                    return this.equals(rowData, this.selection);
            }
        }
        return false;
    };
    Table.prototype.findIndexInSelection = function (rowData) {
        var index = -1;
        if (this.selection && this.selection.length) {
            for (var i = 0; i < this.selection.length; i++) {
                if (this.equals(rowData, this.selection[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Table.prototype.toggleRowWithRadio = function (event, rowData) {
        this.preventSelectionSetterPropagation = true;
        if (this.selection != rowData) {
            this._selection = rowData;
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'radiobutton' });
            if (this.dataKey) {
                this.selectionKeys = {};
                this.selectionKeys[String(objectutils_1.ObjectUtils.resolveFieldData(rowData, this.dataKey))] = 1;
            }
        }
        else {
            this._selection = null;
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'radiobutton' });
        }
        this.tableService.onSelectionChange();
        if (this.isStateful()) {
            this.saveState();
        }
    };
    Table.prototype.toggleRowWithCheckbox = function (event, rowData) {
        this.selection = this.selection || [];
        var selected = this.isSelected(rowData);
        var dataKeyValue = this.dataKey ? String(objectutils_1.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        this.preventSelectionSetterPropagation = true;
        if (selected) {
            var selectionIndex_3 = this.findIndexInSelection(rowData);
            this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_3; });
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'checkbox' });
            if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
            }
        }
        else {
            this._selection = this.selection ? this.selection.concat([rowData]) : [rowData];
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'checkbox' });
            if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
            }
        }
        this.tableService.onSelectionChange();
        if (this.isStateful()) {
            this.saveState();
        }
    };
    Table.prototype.toggleRowsWithCheckbox = function (event, check) {
        this._selection = check ? this.filteredValue ? this.filteredValue.slice() : this.value.slice() : [];
        this.preventSelectionSetterPropagation = true;
        this.updateSelectionKeys();
        this.selectionChange.emit(this._selection);
        this.tableService.onSelectionChange();
        this.onHeaderCheckboxToggle.emit({ originalEvent: event, checked: check });
        if (this.isStateful()) {
            this.saveState();
        }
    };
    Table.prototype.equals = function (data1, data2) {
        return this.compareSelectionBy === 'equals' ? (data1 === data2) : objectutils_1.ObjectUtils.equals(data1, data2, this.dataKey);
    };
    Table.prototype.filter = function (value, field, matchMode) {
        var _this = this;
        if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
        }
        if (!this.isFilterBlank(value)) {
            this.filters[field] = { value: value, matchMode: matchMode };
        }
        else if (this.filters[field]) {
            delete this.filters[field];
        }
        this.filterTimeout = setTimeout(function () {
            _this._filter();
            _this.filterTimeout = null;
        }, this.filterDelay);
        this.anchorRowIndex = null;
    };
    Table.prototype.filterGlobal = function (value, matchMode) {
        this.filter(value, 'global', matchMode);
    };
    Table.prototype.isFilterBlank = function (filter) {
        if (filter !== null && filter !== undefined) {
            if ((typeof filter === 'string' && filter.trim().length == 0) || (filter instanceof Array && filter.length == 0))
                return true;
            else
                return false;
        }
        return true;
    };
    Table.prototype._filter = function () {
        if (!this.restoringFilter) {
            this.first = 0;
            this.firstChange.emit(this.first);
        }
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            if (!this.value) {
                return;
            }
            if (!this.hasFilter()) {
                this.filteredValue = null;
                if (this.paginator) {
                    this.totalRecords = this.value ? this.value.length : 0;
                }
            }
            else {
                var globalFilterFieldsArray = void 0;
                if (this.filters['global']) {
                    if (!this.columns && !this.globalFilterFields)
                        throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');
                    else
                        globalFilterFieldsArray = this.globalFilterFields || this.columns;
                }
                this.filteredValue = [];
                for (var i = 0; i < this.value.length; i++) {
                    var localMatch = true;
                    var globalMatch = false;
                    var localFiltered = false;
                    for (var prop in this.filters) {
                        if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                            localFiltered = true;
                            var filterMeta = this.filters[prop];
                            var filterField = prop;
                            var filterValue = filterMeta.value;
                            var filterMatchMode = filterMeta.matchMode || 'startsWith';
                            var dataFieldValue = objectutils_1.ObjectUtils.resolveFieldData(this.value[i], filterField);
                            var filterConstraint = filterutils_1.FilterUtils[filterMatchMode];
                            if (!filterConstraint(dataFieldValue, filterValue)) {
                                localMatch = false;
                            }
                            if (!localMatch) {
                                break;
                            }
                        }
                    }
                    if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                        for (var j = 0; j < globalFilterFieldsArray.length; j++) {
                            var globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                            globalMatch = filterutils_1.FilterUtils[this.filters['global'].matchMode](objectutils_1.ObjectUtils.resolveFieldData(this.value[i], globalFilterField), this.filters['global'].value);
                            if (globalMatch) {
                                break;
                            }
                        }
                    }
                    var matches = void 0;
                    if (this.filters['global']) {
                        matches = localFiltered ? (localFiltered && localMatch && globalMatch) : globalMatch;
                    }
                    else {
                        matches = localFiltered && localMatch;
                    }
                    if (matches) {
                        this.filteredValue.push(this.value[i]);
                    }
                }
                if (this.filteredValue.length === this.value.length) {
                    this.filteredValue = null;
                }
                if (this.paginator) {
                    this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
                }
            }
        }
        this.onFilter.emit({
            filters: this.filters,
            filteredValue: this.filteredValue || this.value
        });
        this.tableService.onValueChange(this.value);
        if (this.isStateful() && !this.restoringFilter) {
            this.saveState();
        }
        if (this.restoringFilter) {
            this.restoringFilter = false;
        }
        this.cd.detectChanges();
    };
    Table.prototype.hasFilter = function () {
        var empty = true;
        for (var prop in this.filters) {
            if (this.filters.hasOwnProperty(prop)) {
                empty = false;
                break;
            }
        }
        return !empty;
    };
    Table.prototype.createLazyLoadMetadata = function () {
        return {
            first: this.first,
            rows: this.virtualScroll ? this.rows * 2 : this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            filters: this.filters,
            globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
            multiSortMeta: this.multiSortMeta
        };
    };
    Table.prototype.reset = function () {
        this._sortField = null;
        this._sortOrder = this.defaultSortOrder;
        this._multiSortMeta = null;
        this.tableService.onSort(null);
        this.filteredValue = null;
        this.filters = {};
        this.first = 0;
        this.firstChange.emit(this.first);
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.totalRecords = (this._value ? this._value.length : 0);
        }
    };
    Table.prototype.exportCSV = function (options) {
        var _this = this;
        var data = this.filteredValue || this.value;
        var csv = '\ufeff';
        if (options && options.selectionOnly) {
            data = this.selection || [];
        }
        //headers
        for (var i = 0; i < this.columns.length; i++) {
            var column = this.columns[i];
            if (column.exportable !== false && column.field) {
                csv += '"' + (column.header || column.field) + '"';
                if (i < (this.columns.length - 1)) {
                    csv += this.csvSeparator;
                }
            }
        }
        //body
        data.forEach(function (record, i) {
            csv += '\n';
            for (var i_1 = 0; i_1 < _this.columns.length; i_1++) {
                var column = _this.columns[i_1];
                if (column.exportable !== false && column.field) {
                    var cellData = objectutils_1.ObjectUtils.resolveFieldData(record, column.field);
                    if (cellData != null) {
                        if (_this.exportFunction) {
                            cellData = _this.exportFunction({
                                data: cellData,
                                field: column.field
                            });
                        }
                        else
                            cellData = String(cellData).replace(/"/g, '""');
                    }
                    else
                        cellData = '';
                    csv += '"' + cellData + '"';
                    if (i_1 < (_this.columns.length - 1)) {
                        csv += _this.csvSeparator;
                    }
                }
            }
        });
        var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        });
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
        }
        else {
            var link = document.createElement("a");
            link.style.display = 'none';
            document.body.appendChild(link);
            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', this.exportFilename + '.csv');
                link.click();
            }
            else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
            document.body.removeChild(link);
        }
    };
    Table.prototype.updateEditingCell = function (cell, data, field) {
        this.editingCell = cell;
        this.editingCellData = data;
        this.editingCellField = field;
        this.bindDocumentEditListener();
    };
    Table.prototype.isEditingCellValid = function () {
        return (this.editingCell && domhandler_1.DomHandler.find(this.editingCell, '.ng-invalid.ng-dirty').length === 0);
    };
    Table.prototype.bindDocumentEditListener = function () {
        var _this = this;
        if (!this.documentEditListener) {
            this.documentEditListener = function (event) {
                if (_this.editingCell && !_this.editingCellClick && _this.isEditingCellValid()) {
                    domhandler_1.DomHandler.removeClass(_this.editingCell, 'ui-editing-cell');
                    _this.editingCell = null;
                    _this.onEditComplete.emit({ field: _this.editingCellField, data: _this.editingCellData, originalEvent: event });
                    _this.editingCellField = null;
                    _this.editingCellData = null;
                    _this.unbindDocumentEditListener();
                }
                _this.editingCellClick = false;
            };
            document.addEventListener('click', this.documentEditListener);
        }
    };
    Table.prototype.unbindDocumentEditListener = function () {
        if (this.documentEditListener) {
            document.removeEventListener('click', this.documentEditListener);
            this.documentEditListener = null;
        }
    };
    Table.prototype.initRowEdit = function (rowData) {
        var dataKeyValue = String(objectutils_1.ObjectUtils.resolveFieldData(rowData, this.dataKey));
        this.editingRowKeys[dataKeyValue] = true;
    };
    Table.prototype.saveRowEdit = function (rowData, rowElement) {
        if (domhandler_1.DomHandler.find(rowElement, '.ng-invalid.ng-dirty').length === 0) {
            var dataKeyValue = String(objectutils_1.ObjectUtils.resolveFieldData(rowData, this.dataKey));
            delete this.editingRowKeys[dataKeyValue];
        }
    };
    Table.prototype.cancelRowEdit = function (rowData) {
        var dataKeyValue = String(objectutils_1.ObjectUtils.resolveFieldData(rowData, this.dataKey));
        delete this.editingRowKeys[dataKeyValue];
    };
    Table.prototype.toggleRow = function (rowData, event) {
        if (!this.dataKey) {
            throw new Error('dataKey must be defined to use row expansion');
        }
        var dataKeyValue = String(objectutils_1.ObjectUtils.resolveFieldData(rowData, this.dataKey));
        if (this.expandedRowKeys[dataKeyValue] != null) {
            delete this.expandedRowKeys[dataKeyValue];
            this.onRowCollapse.emit({
                originalEvent: event,
                data: rowData
            });
        }
        else {
            if (this.rowExpandMode === 'single') {
                this.expandedRowKeys = {};
            }
            this.expandedRowKeys[dataKeyValue] = true;
            this.onRowExpand.emit({
                originalEvent: event,
                data: rowData
            });
        }
        if (event) {
            event.preventDefault();
        }
        if (this.isStateful()) {
            this.saveState();
        }
    };
    Table.prototype.isRowExpanded = function (rowData) {
        return this.expandedRowKeys[String(objectutils_1.ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
    };
    Table.prototype.isRowEditing = function (rowData) {
        return this.editingRowKeys[String(objectutils_1.ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
    };
    Table.prototype.isSingleSelectionMode = function () {
        return this.selectionMode === 'single';
    };
    Table.prototype.isMultipleSelectionMode = function () {
        return this.selectionMode === 'multiple';
    };
    Table.prototype.onColumnResizeBegin = function (event) {
        var containerLeft = domhandler_1.DomHandler.getOffset(this.containerViewChild.nativeElement).left;
        this.lastResizerHelperX = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft);
        event.preventDefault();
    };
    Table.prototype.onColumnResize = function (event) {
        var containerLeft = domhandler_1.DomHandler.getOffset(this.containerViewChild.nativeElement).left;
        domhandler_1.DomHandler.addClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
        this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
        this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
        this.resizeHelperViewChild.nativeElement.style.left = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft) + 'px';
        this.resizeHelperViewChild.nativeElement.style.display = 'block';
    };
    Table.prototype.onColumnResizeEnd = function (event, column) {
        var delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
        var columnWidth = column.offsetWidth;
        var minWidth = parseInt(column.style.minWidth || 15);
        if (columnWidth + delta < minWidth) {
            delta = minWidth - columnWidth;
        }
        var newColumnWidth = columnWidth + delta;
        if (newColumnWidth >= minWidth) {
            if (this.columnResizeMode === 'fit') {
                var nextColumn = column.nextElementSibling;
                while (!nextColumn.offsetParent) {
                    nextColumn = nextColumn.nextElementSibling;
                }
                if (nextColumn) {
                    var nextColumnWidth = nextColumn.offsetWidth - delta;
                    var nextColumnMinWidth = nextColumn.style.minWidth || 15;
                    if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                        if (this.scrollable) {
                            var scrollableView = this.findParentScrollableView(column);
                            var scrollableBodyTable = domhandler_1.DomHandler.findSingle(scrollableView, 'table.ui-table-scrollable-body-table');
                            var scrollableHeaderTable = domhandler_1.DomHandler.findSingle(scrollableView, 'table.ui-table-scrollable-header-table');
                            var scrollableFooterTable = domhandler_1.DomHandler.findSingle(scrollableView, 'table.ui-table-scrollable-footer-table');
                            var resizeColumnIndex = domhandler_1.DomHandler.index(column);
                            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                        }
                        else {
                            column.style.width = newColumnWidth + 'px';
                            if (nextColumn) {
                                nextColumn.style.width = nextColumnWidth + 'px';
                            }
                        }
                    }
                }
            }
            else if (this.columnResizeMode === 'expand') {
                if (newColumnWidth > minWidth) {
                    if (this.scrollable) {
                        this.setScrollableItemsWidthOnExpandResize(column, newColumnWidth, delta);
                    }
                    else {
                        this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                        column.style.width = newColumnWidth + 'px';
                        var containerWidth = this.tableViewChild.nativeElement.style.width;
                        this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                    }
                }
            }
            this.onColResize.emit({
                element: column,
                delta: delta
            });
            if (this.isStateful()) {
                this.saveState();
            }
        }
        this.resizeHelperViewChild.nativeElement.style.display = 'none';
        domhandler_1.DomHandler.removeClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
    };
    Table.prototype.setScrollableItemsWidthOnExpandResize = function (column, newColumnWidth, delta) {
        var scrollableView = column ? this.findParentScrollableView(column) : this.containerViewChild.nativeElement;
        var scrollableBody = domhandler_1.DomHandler.findSingle(scrollableView, '.ui-table-scrollable-body');
        var scrollableHeader = domhandler_1.DomHandler.findSingle(scrollableView, '.ui-table-scrollable-header');
        var scrollableFooter = domhandler_1.DomHandler.findSingle(scrollableView, '.ui-table-scrollable-footer');
        var scrollableBodyTable = domhandler_1.DomHandler.findSingle(scrollableBody, 'table.ui-table-scrollable-body-table');
        var scrollableHeaderTable = domhandler_1.DomHandler.findSingle(scrollableHeader, 'table.ui-table-scrollable-header-table');
        var scrollableFooterTable = domhandler_1.DomHandler.findSingle(scrollableFooter, 'table.ui-table-scrollable-footer-table');
        var scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
        var scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
        var isContainerInViewport = this.containerViewChild.nativeElement.offsetWidth >= scrollableBodyTableWidth;
        var setWidth = function (container, table, width, isContainerInViewport) {
            if (container && table) {
                container.style.width = isContainerInViewport ? width + domhandler_1.DomHandler.calculateScrollbarWidth(scrollableBody) + 'px' : 'auto';
                table.style.width = width + 'px';
            }
        };
        setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
        setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
        setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);
        if (column) {
            var resizeColumnIndex = domhandler_1.DomHandler.index(column);
            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
        }
    };
    Table.prototype.findParentScrollableView = function (column) {
        if (column) {
            var parent_1 = column.parentElement;
            while (parent_1 && !domhandler_1.DomHandler.hasClass(parent_1, 'ui-table-scrollable-view')) {
                parent_1 = parent_1.parentElement;
            }
            return parent_1;
        }
        else {
            return null;
        }
    };
    Table.prototype.resizeColGroup = function (table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
        if (table) {
            var colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
            if (colGroup) {
                var col = colGroup.children[resizeColumnIndex];
                var nextCol = col.nextElementSibling;
                col.style.width = newColumnWidth + 'px';
                if (nextCol && nextColumnWidth) {
                    nextCol.style.width = nextColumnWidth + 'px';
                }
            }
            else {
                throw "Scrollable tables require a colgroup to support resizable columns";
            }
        }
    };
    Table.prototype.onColumnDragStart = function (event, columnElement) {
        this.reorderIconWidth = domhandler_1.DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
        this.reorderIconHeight = domhandler_1.DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
        this.draggedColumn = columnElement;
        event.dataTransfer.setData('text', 'b'); // For firefox
    };
    Table.prototype.onColumnDragEnter = function (event, dropHeader) {
        if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            var containerOffset = domhandler_1.DomHandler.getOffset(this.containerViewChild.nativeElement);
            var dropHeaderOffset = domhandler_1.DomHandler.getOffset(dropHeader);
            if (this.draggedColumn != dropHeader) {
                var dragIndex = domhandler_1.DomHandler.indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
                var dropIndex = domhandler_1.DomHandler.indexWithinGroup(dropHeader, 'preorderablecolumn');
                var targetLeft = dropHeaderOffset.left - containerOffset.left;
                var targetTop = containerOffset.top - dropHeaderOffset.top;
                var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
                this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
                if (event.pageX > columnCenter) {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = 1;
                }
                else {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = -1;
                }
                if ((dropIndex - dragIndex === 1 && this.dropPosition === -1) || (dropIndex - dragIndex === -1 && this.dropPosition === 1)) {
                    this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
                    this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
                }
                else {
                    this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                    this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
                }
            }
            else {
                event.dataTransfer.dropEffect = 'none';
            }
        }
    };
    Table.prototype.onColumnDragLeave = function (event) {
        if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
        }
    };
    Table.prototype.onColumnDrop = function (event, dropColumn) {
        event.preventDefault();
        if (this.draggedColumn) {
            var dragIndex = domhandler_1.DomHandler.indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
            var dropIndex = domhandler_1.DomHandler.indexWithinGroup(dropColumn, 'preorderablecolumn');
            var allowDrop = (dragIndex != dropIndex);
            if (allowDrop && ((dropIndex - dragIndex == 1 && this.dropPosition === -1) || (dragIndex - dropIndex == 1 && this.dropPosition === 1))) {
                allowDrop = false;
            }
            if (allowDrop && ((dropIndex < dragIndex && this.dropPosition === 1))) {
                dropIndex = dropIndex + 1;
            }
            if (allowDrop && ((dropIndex > dragIndex && this.dropPosition === -1))) {
                dropIndex = dropIndex - 1;
            }
            if (allowDrop) {
                objectutils_1.ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
                this.onColReorder.emit({
                    dragIndex: dragIndex,
                    dropIndex: dropIndex,
                    columns: this.columns
                });
                if (this.isStateful()) {
                    this.saveState();
                }
            }
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
        }
    };
    Table.prototype.onRowDragStart = function (event, index) {
        this.rowDragging = true;
        this.draggedRowIndex = index;
        event.dataTransfer.setData('text', 'b'); // For firefox
    };
    Table.prototype.onRowDragOver = function (event, index, rowElement) {
        if (this.rowDragging && this.draggedRowIndex !== index) {
            var rowY = domhandler_1.DomHandler.getOffset(rowElement).top + domhandler_1.DomHandler.getWindowScrollTop();
            var pageY = event.pageY;
            var rowMidY = rowY + domhandler_1.DomHandler.getOuterHeight(rowElement) / 2;
            var prevRowElement = rowElement.previousElementSibling;
            if (pageY < rowMidY) {
                domhandler_1.DomHandler.removeClass(rowElement, 'ui-table-dragpoint-bottom');
                this.droppedRowIndex = index;
                if (prevRowElement)
                    domhandler_1.DomHandler.addClass(prevRowElement, 'ui-table-dragpoint-bottom');
                else
                    domhandler_1.DomHandler.addClass(rowElement, 'ui-table-dragpoint-top');
            }
            else {
                if (prevRowElement)
                    domhandler_1.DomHandler.removeClass(prevRowElement, 'ui-table-dragpoint-bottom');
                else
                    domhandler_1.DomHandler.addClass(rowElement, 'ui-table-dragpoint-top');
                this.droppedRowIndex = index + 1;
                domhandler_1.DomHandler.addClass(rowElement, 'ui-table-dragpoint-bottom');
            }
        }
    };
    Table.prototype.onRowDragLeave = function (event, rowElement) {
        var prevRowElement = rowElement.previousElementSibling;
        if (prevRowElement) {
            domhandler_1.DomHandler.removeClass(prevRowElement, 'ui-table-dragpoint-bottom');
        }
        domhandler_1.DomHandler.removeClass(rowElement, 'ui-table-dragpoint-bottom');
        domhandler_1.DomHandler.removeClass(rowElement, 'ui-table-dragpoint-top');
    };
    Table.prototype.onRowDragEnd = function (event) {
        this.rowDragging = false;
        this.draggedRowIndex = null;
        this.droppedRowIndex = null;
    };
    Table.prototype.onRowDrop = function (event, rowElement) {
        if (this.droppedRowIndex != null) {
            var dropIndex = (this.draggedRowIndex > this.droppedRowIndex) ? this.droppedRowIndex : (this.droppedRowIndex === 0) ? 0 : this.droppedRowIndex - 1;
            objectutils_1.ObjectUtils.reorderArray(this.value, this.draggedRowIndex, dropIndex);
            this.onRowReorder.emit({
                dragIndex: this.draggedRowIndex,
                dropIndex: dropIndex
            });
        }
        //cleanup
        this.onRowDragLeave(event, rowElement);
        this.onRowDragEnd(event);
    };
    Table.prototype.handleVirtualScroll = function (event) {
        var _this = this;
        this.first = (event.page - 1) * this.rows;
        this.firstChange.emit(this.first);
        this.virtualScrollCallback = event.callback;
        this.zone.run(function () {
            if (_this.virtualScrollTimer) {
                clearTimeout(_this.virtualScrollTimer);
            }
            _this.virtualScrollTimer = setTimeout(function () {
                _this.onLazyLoad.emit(_this.createLazyLoadMetadata());
            }, _this.virtualScrollDelay);
        });
    };
    Table.prototype.isEmpty = function () {
        var data = this.filteredValue || this.value;
        return data == null || data.length == 0;
    };
    Table.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Table.prototype.getStorage = function () {
        switch (this.stateStorage) {
            case 'local':
                return window.localStorage;
            case 'session':
                return window.sessionStorage;
            default:
                throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
        }
    };
    Table.prototype.isStateful = function () {
        return this.stateKey != null;
    };
    Table.prototype.saveState = function () {
        var storage = this.getStorage();
        var state = {};
        if (this.paginator) {
            state.first = this.first;
            state.rows = this.rows;
        }
        if (this.sortField) {
            state.sortField = this.sortField;
            state.sortOrder = this.sortOrder;
        }
        if (this.multiSortMeta) {
            state.multiSortMeta = this.multiSortMeta;
        }
        if (this.hasFilter()) {
            state.filters = this.filters;
        }
        if (this.resizableColumns) {
            this.saveColumnWidths(state);
        }
        if (this.reorderableColumns) {
            this.saveColumnOrder(state);
        }
        if (this.selection) {
            state.selection = this.selection;
        }
        if (Object.keys(this.expandedRowKeys).length) {
            state.expandedRowKeys = this.expandedRowKeys;
        }
        if (Object.keys(state).length) {
            storage.setItem(this.stateKey, JSON.stringify(state));
        }
        this.onStateSave.emit(state);
    };
    Table.prototype.clearState = function () {
        var storage = this.getStorage();
        if (this.stateKey) {
            storage.removeItem(this.stateKey);
        }
    };
    Table.prototype.restoreState = function () {
        var storage = this.getStorage();
        var stateString = storage.getItem(this.stateKey);
        if (stateString) {
            var state = JSON.parse(stateString);
            if (this.paginator) {
                this.first = state.first;
                this.rows = state.rows;
                this.firstChange.emit(this.first);
                this.rowsChange.emit(this.rows);
            }
            if (state.sortField) {
                this.restoringSort = true;
                this._sortField = state.sortField;
                this._sortOrder = state.sortOrder;
            }
            if (state.multiSortMeta) {
                this.restoringSort = true;
                this._multiSortMeta = state.multiSortMeta;
            }
            if (state.filters) {
                this.restoringFilter = true;
                this.filters = state.filters;
            }
            if (this.resizableColumns) {
                this.columnWidthsState = state.columnWidths;
                this.tableWidthState = state.tableWidth;
            }
            if (state.expandedRowKeys) {
                this.expandedRowKeys = state.expandedRowKeys;
            }
            if (state.selection) {
                this.selection = state.selection;
            }
            this.stateRestored = true;
            this.onStateRestore.emit(state);
        }
    };
    Table.prototype.saveColumnWidths = function (state) {
        var widths = [];
        var headers = domhandler_1.DomHandler.find(this.containerViewChild.nativeElement, '.ui-table-thead > tr:first-child > th');
        headers.map(function (header) { return widths.push(domhandler_1.DomHandler.getOuterWidth(header)); });
        state.columnWidths = widths.join(',');
        if (this.columnResizeMode === 'expand') {
            state.tableWidth = this.scrollable ? domhandler_1.DomHandler.findSingle(this.containerViewChild.nativeElement, '.ui-table-scrollable-header-table').style.width :
                domhandler_1.DomHandler.getOuterWidth(this.tableViewChild.nativeElement) + 'px';
        }
    };
    Table.prototype.restoreColumnWidths = function () {
        if (this.columnWidthsState) {
            var widths_1 = this.columnWidthsState.split(',');
            if (this.columnResizeMode === 'expand' && this.tableWidthState) {
                if (this.scrollable) {
                    this.setScrollableItemsWidthOnExpandResize(null, this.tableWidthState, 0);
                }
                else {
                    this.tableViewChild.nativeElement.style.width = this.tableWidthState;
                    this.containerViewChild.nativeElement.style.width = this.tableWidthState;
                }
            }
            if (this.scrollable) {
                var headerCols = domhandler_1.DomHandler.find(this.containerViewChild.nativeElement, '.ui-table-scrollable-header-table > colgroup > col');
                var bodyCols = domhandler_1.DomHandler.find(this.containerViewChild.nativeElement, '.ui-table-scrollable-body-table > colgroup > col');
                headerCols.map(function (col, index) { return col.style.width = widths_1[index] + 'px'; });
                bodyCols.map(function (col, index) { return col.style.width = widths_1[index] + 'px'; });
            }
            else {
                var headers = domhandler_1.DomHandler.find(this.tableViewChild.nativeElement, '.ui-table-thead > tr:first-child > th');
                headers.map(function (header, index) { return header.style.width = widths_1[index] + 'px'; });
            }
        }
    };
    Table.prototype.saveColumnOrder = function (state) {
        if (this.columns) {
            var columnOrder_1 = [];
            this.columns.map(function (column) {
                columnOrder_1.push(column.field || column.key);
            });
            state.columnOrder = columnOrder_1;
        }
    };
    Table.prototype.restoreColumnOrder = function () {
        var _this = this;
        var storage = this.getStorage();
        var stateString = storage.getItem(this.stateKey);
        if (stateString) {
            var state = JSON.parse(stateString);
            var columnOrder = state.columnOrder;
            if (columnOrder) {
                var reorderedColumns_1 = [];
                columnOrder.map(function (key) { return reorderedColumns_1.push(_this.findColumnByKey(key)); });
                this.columnOrderStateRestored = true;
                this.columns = reorderedColumns_1;
            }
        }
    };
    Table.prototype.findColumnByKey = function (key) {
        if (this.columns) {
            for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
                var col = _a[_i];
                if (col.key === key || col.field === key)
                    return col;
                else
                    continue;
            }
        }
        else {
            return null;
        }
    };
    Table.prototype.ngOnDestroy = function () {
        this.unbindDocumentEditListener();
        this.editingCell = null;
        this.initialized = null;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Table.prototype, "frozenColumns", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Table.prototype, "frozenValue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Table.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Table.prototype, "tableStyle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "tableStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "paginator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Table.prototype, "pageLinks", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Table.prototype, "rowsPerPageOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "alwaysShowPaginator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "paginatorPosition", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Table.prototype, "paginatorDropdownAppendTo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "paginatorDropdownScrollHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "currentPageReportTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "showCurrentPageReport", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Table.prototype, "defaultSortOrder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "sortMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "resetPageOnSort", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "selectionMode", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "selectionChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Table.prototype, "contextMenuSelection", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "contextMenuSelectionChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "contextMenuSelectionMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "dataKey", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "metaKeySelection", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], Table.prototype, "rowTrackBy", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "lazy", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "lazyLoadOnInit", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "compareSelectionBy", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "csvSeparator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "exportFilename", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Table.prototype, "filters", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Table.prototype, "globalFilterFields", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Table.prototype, "filterDelay", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Table.prototype, "expandedRowKeys", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Table.prototype, "editingRowKeys", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "rowExpandMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "scrollable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "scrollHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "virtualScroll", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Table.prototype, "virtualScrollDelay", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Table.prototype, "virtualRowHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "frozenWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "responsive", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Table.prototype, "contextMenu", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "resizableColumns", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "columnResizeMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "reorderableColumns", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "loading", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "loadingIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "showLoader", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "rowHover", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "customSort", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "autoLayout", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Table.prototype, "exportFunction", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "stateKey", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "stateStorage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Table.prototype, "editMode", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onRowSelect", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onRowUnselect", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onPage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onSort", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onFilter", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onLazyLoad", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onRowExpand", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onRowCollapse", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onContextMenuSelect", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onColResize", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onColReorder", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onRowReorder", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onEditInit", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onEditComplete", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onEditCancel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onHeaderCheckboxToggle", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "sortFunction", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "firstChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "rowsChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onStateSave", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Table.prototype, "onStateRestore", void 0);
    __decorate([
        core_1.ViewChild('container', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Table.prototype, "containerViewChild", void 0);
    __decorate([
        core_1.ViewChild('resizeHelper', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Table.prototype, "resizeHelperViewChild", void 0);
    __decorate([
        core_1.ViewChild('reorderIndicatorUp', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Table.prototype, "reorderIndicatorUpViewChild", void 0);
    __decorate([
        core_1.ViewChild('reorderIndicatorDown', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Table.prototype, "reorderIndicatorDownViewChild", void 0);
    __decorate([
        core_1.ViewChild('table', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Table.prototype, "tableViewChild", void 0);
    __decorate([
        core_1.ContentChildren(shared_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], Table.prototype, "templates", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Table.prototype, "value", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Table.prototype, "columns", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], Table.prototype, "first", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], Table.prototype, "rows", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], Table.prototype, "totalRecords", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Table.prototype, "sortField", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], Table.prototype, "sortOrder", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Table.prototype, "multiSortMeta", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Table.prototype, "selection", null);
    Table = __decorate([
        core_1.Component({
            selector: 'p-table',
            template: "\n        <div #container [ngStyle]=\"style\" [class]=\"styleClass\"\n            [ngClass]=\"{'ui-table ui-widget': true, 'ui-table-responsive': responsive, 'ui-table-resizable': resizableColumns,\n                'ui-table-resizable-fit': (resizableColumns && columnResizeMode === 'fit'),\n                'ui-table-hoverable-rows': (rowHover||selectionMode), 'ui-table-auto-layout': autoLayout}\">\n            <div class=\"ui-table-loading ui-widget-overlay\" *ngIf=\"loading && showLoader\"></div>\n            <div class=\"ui-table-loading-content\" *ngIf=\"loading && showLoader\">\n                <i [class]=\"'ui-table-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <div *ngIf=\"captionTemplate\" class=\"ui-table-caption ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"captionTemplate\"></ng-container>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-top\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n            \n            <div class=\"ui-table-wrapper\" *ngIf=\"!scrollable\">\n                <table #table [ngClass]=\"tableStyleClass\" [ngStyle]=\"tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"headerTemplate; context: {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tfoot *ngIf=\"footerTemplate\" class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                    <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"bodyTemplate\"></tbody>\n                </table>\n            </div>\n\n            <div class=\"ui-table-scrollable-wrapper\" *ngIf=\"scrollable\">\n               <div class=\"ui-table-scrollable-view ui-table-frozen-view\" *ngIf=\"frozenColumns||frozenBodyTemplate\" [pScrollableView]=\"frozenColumns\" [frozen]=\"true\" [ngStyle]=\"{width: frozenWidth}\" [scrollHeight]=\"scrollHeight\"></div>\n               <div class=\"ui-table-scrollable-view\" [pScrollableView]=\"columns\" [frozen]=\"false\" [scrollHeight]=\"scrollHeight\" [ngStyle]=\"{left: frozenWidth, width: 'calc(100% - '+frozenWidth+')'}\"></div>\n            </div>\n            \n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-bottom\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n            \n                <div *ngIf=\"summaryTemplate\" class=\"ui-table-summary ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"summaryTemplate\"></ng-container>\n            </div>\n\n            <div #resizeHelper class=\"ui-column-resizer-helper ui-state-highlight\" style=\"display:none\" *ngIf=\"resizableColumns\"></div>\n\n            <span #reorderIndicatorUp class=\"pi pi-arrow-down ui-table-reorder-indicator-up\" style=\"display:none\" *ngIf=\"reorderableColumns\"></span>\n            <span #reorderIndicatorDown class=\"pi pi-arrow-up ui-table-reorder-indicator-down\" style=\"display:none\" *ngIf=\"reorderableColumns\"></span>\n        </div>\n    ",
            providers: [TableService]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.NgZone, TableService, core_1.ChangeDetectorRef])
    ], Table);
    return Table;
}());
exports.Table = Table;
var TableBody = /** @class */ (function () {
    function TableBody(dt) {
        this.dt = dt;
    }
    __decorate([
        core_1.Input("pTableBody"),
        __metadata("design:type", Array)
    ], TableBody.prototype, "columns", void 0);
    __decorate([
        core_1.Input("pTableBodyTemplate"),
        __metadata("design:type", core_1.TemplateRef)
    ], TableBody.prototype, "template", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TableBody.prototype, "frozen", void 0);
    TableBody = __decorate([
        core_1.Component({
            selector: '[pTableBody]',
            template: "\n        <ng-container *ngIf=\"!dt.expandedRowTemplate\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.expandedRowTemplate\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: dt.isRowExpanded(rowData), editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n                <ng-container *ngIf=\"dt.isRowExpanded(rowData)\">\n                    <ng-container *ngTemplateOutlet=\"dt.expandedRowTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns}\"></ng-container>\n                </ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.isEmpty()\">\n            <ng-container *ngTemplateOutlet=\"dt.emptyMessageTemplate; context: {$implicit: columns, frozen: frozen}\"></ng-container>\n        </ng-container>\n    "
        }),
        __metadata("design:paramtypes", [Table])
    ], TableBody);
    return TableBody;
}());
exports.TableBody = TableBody;
var ScrollableView = /** @class */ (function () {
    function ScrollableView(dt, el, zone) {
        var _this = this;
        this.dt = dt;
        this.el = el;
        this.zone = zone;
        this.loadingArray = [];
        this.subscription = this.dt.tableService.valueSource$.subscribe(function () {
            _this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.alignScrollBar();
                    if (_this.scrollLoadingTableViewChild && _this.scrollLoadingTableViewChild.nativeElement) {
                        _this.scrollLoadingTableViewChild.nativeElement.style.display = 'none';
                    }
                }, 50);
            });
        });
        if (this.dt.virtualScroll) {
            this.totalRecordsSubscription = this.dt.tableService.totalRecordsSource$.subscribe(function () {
                _this.zone.runOutsideAngular(function () {
                    setTimeout(function () {
                        _this.setVirtualScrollerHeight();
                    }, 50);
                });
            });
        }
        this.loadingArray = Array(this.dt.rows).fill(1);
        this.initialized = false;
    }
    Object.defineProperty(ScrollableView.prototype, "scrollHeight", {
        get: function () {
            return this._scrollHeight;
        },
        set: function (val) {
            this._scrollHeight = val;
            this.setScrollHeight();
        },
        enumerable: true,
        configurable: true
    });
    ScrollableView.prototype.ngAfterViewChecked = function () {
        if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.alignScrollBar();
            this.setScrollHeight();
            this.initialized = true;
        }
    };
    ScrollableView.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.frozen) {
            if (this.dt.frozenColumns || this.dt.frozenBodyTemplate) {
                domhandler_1.DomHandler.addClass(this.el.nativeElement, 'ui-table-unfrozen-view');
            }
            var frozenView = this.el.nativeElement.previousElementSibling;
            if (frozenView) {
                this.frozenSiblingBody = domhandler_1.DomHandler.findSingle(frozenView, '.ui-table-scrollable-body');
            }
        }
        else {
            this.scrollBodyViewChild.nativeElement.style.paddingBottom = domhandler_1.DomHandler.calculateScrollbarWidth() + 'px';
            var scrollableView = this.el.nativeElement.nextElementSibling;
            if (scrollableView) {
                this.scrollableSiblingBody = domhandler_1.DomHandler.findSingle(scrollableView, '.ui-table-scrollable-body');
            }
        }
        this.bindEvents();
        this.setScrollHeight();
        this.alignScrollBar();
        if (this.frozen) {
            this.columnsSubscription = this.dt.tableService.columnsSource$.subscribe(function () {
                _this.zone.runOutsideAngular(function () {
                    setTimeout(function () {
                        _this.setScrollHeight();
                    }, 50);
                });
            });
        }
        if (this.dt.virtualScroll) {
            this.setVirtualScrollerHeight();
            if (this.scrollLoadingTableViewChild && this.scrollLoadingTableViewChild.nativeElement) {
                this.scrollLoadingTableViewChild.nativeElement.style.display = 'table';
            }
        }
    };
    ScrollableView.prototype.bindEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            var scrollBarWidth = domhandler_1.DomHandler.calculateScrollbarWidth();
            if (_this.scrollHeaderViewChild && _this.scrollHeaderViewChild.nativeElement) {
                _this.headerScrollListener = _this.onHeaderScroll.bind(_this);
                _this.scrollHeaderViewChild.nativeElement.addEventListener('scroll', _this.headerScrollListener);
            }
            if (_this.scrollFooterViewChild && _this.scrollFooterViewChild.nativeElement) {
                _this.footerScrollListener = _this.onFooterScroll.bind(_this);
                _this.scrollFooterViewChild.nativeElement.addEventListener('scroll', _this.footerScrollListener);
            }
            if (!_this.frozen) {
                _this.bodyScrollListener = _this.onBodyScroll.bind(_this);
                _this.scrollBodyViewChild.nativeElement.addEventListener('scroll', _this.bodyScrollListener);
            }
        });
    };
    ScrollableView.prototype.unbindEvents = function () {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.removeEventListener('scroll', this.footerScrollListener);
        }
        this.scrollBodyViewChild.nativeElement.removeEventListener('scroll', this.bodyScrollListener);
    };
    ScrollableView.prototype.onHeaderScroll = function (event) {
        var scrollLeft = this.scrollHeaderViewChild.nativeElement.scrollLeft;
        this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
        }
        this.preventBodyScrollPropagation = true;
    };
    ScrollableView.prototype.onFooterScroll = function (event) {
        var scrollLeft = this.scrollFooterViewChild.nativeElement.scrollLeft;
        this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
        }
        this.preventBodyScrollPropagation = true;
    };
    ScrollableView.prototype.onBodyScroll = function (event) {
        var _this = this;
        if (this.preventBodyScrollPropagation) {
            this.preventBodyScrollPropagation = false;
            return;
        }
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * this.scrollBodyViewChild.nativeElement.scrollLeft + 'px';
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * this.scrollBodyViewChild.nativeElement.scrollLeft + 'px';
        }
        if (this.frozenSiblingBody) {
            this.frozenSiblingBody.scrollTop = this.scrollBodyViewChild.nativeElement.scrollTop;
        }
        if (this.dt.virtualScroll) {
            var viewport = domhandler_1.DomHandler.getOuterHeight(this.scrollBodyViewChild.nativeElement);
            var tableHeight = domhandler_1.DomHandler.getOuterHeight(this.scrollTableViewChild.nativeElement);
            var pageHeight_1 = this.dt.virtualRowHeight * this.dt.rows;
            var virtualTableHeight = domhandler_1.DomHandler.getOuterHeight(this.virtualScrollerViewChild.nativeElement);
            var pageCount = (virtualTableHeight / pageHeight_1) || 1;
            var scrollBodyTop = this.scrollTableViewChild.nativeElement.style.top || '0';
            if ((this.scrollBodyViewChild.nativeElement.scrollTop + viewport > parseFloat(scrollBodyTop) + tableHeight) || (this.scrollBodyViewChild.nativeElement.scrollTop < parseFloat(scrollBodyTop))) {
                if (this.scrollLoadingTableViewChild && this.scrollLoadingTableViewChild.nativeElement) {
                    this.scrollLoadingTableViewChild.nativeElement.style.display = 'table';
                    this.scrollLoadingTableViewChild.nativeElement.style.top = this.scrollBodyViewChild.nativeElement.scrollTop + 'px';
                }
                var page_1 = Math.floor((this.scrollBodyViewChild.nativeElement.scrollTop * pageCount) / (this.scrollBodyViewChild.nativeElement.scrollHeight)) + 1;
                this.dt.handleVirtualScroll({
                    page: page_1,
                    callback: function () {
                        if (_this.scrollLoadingTableViewChild && _this.scrollLoadingTableViewChild.nativeElement) {
                            _this.scrollLoadingTableViewChild.nativeElement.style.display = 'none';
                        }
                        _this.scrollTableViewChild.nativeElement.style.top = ((page_1 - 1) * pageHeight_1) + 'px';
                        if (_this.frozenSiblingBody) {
                            _this.frozenSiblingBody.children[0].style.top = _this.scrollTableViewChild.nativeElement.style.top;
                        }
                        _this.dt.anchorRowIndex = null;
                    }
                });
            }
        }
    };
    ScrollableView.prototype.setScrollHeight = function () {
        if (this.scrollHeight && this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
            if (this.scrollHeight.indexOf('%') !== -1) {
                var relativeHeight = void 0;
                this.scrollBodyViewChild.nativeElement.style.visibility = 'hidden';
                this.scrollBodyViewChild.nativeElement.style.height = '100px'; //temporary height to calculate static height
                var containerHeight = domhandler_1.DomHandler.getOuterHeight(this.dt.el.nativeElement.children[0]);
                if (this.scrollHeight.includes("calc")) {
                    var percentHeight = parseInt(this.scrollHeight.slice(this.scrollHeight.indexOf("(") + 1, this.scrollHeight.indexOf("%")));
                    var diffValue = parseInt(this.scrollHeight.slice(this.scrollHeight.indexOf("-") + 1, this.scrollHeight.indexOf(")")));
                    relativeHeight = (domhandler_1.DomHandler.getOuterHeight(this.dt.el.nativeElement.parentElement) * percentHeight / 100) - diffValue;
                }
                else {
                    relativeHeight = domhandler_1.DomHandler.getOuterHeight(this.dt.el.nativeElement.parentElement) * parseInt(this.scrollHeight) / 100;
                }
                var staticHeight = containerHeight - 100; //total height of headers, footers, paginators
                var scrollBodyHeight = (relativeHeight - staticHeight);
                if (this.frozen) {
                    scrollBodyHeight -= domhandler_1.DomHandler.calculateScrollbarWidth();
                }
                this.scrollBodyViewChild.nativeElement.style.height = 'auto';
                this.scrollBodyViewChild.nativeElement.style.maxHeight = scrollBodyHeight + 'px';
                this.scrollBodyViewChild.nativeElement.style.visibility = 'visible';
            }
            else {
                if (this.frozen && this.scrollableSiblingBody && domhandler_1.DomHandler.getOuterWidth(this.scrollableSiblingBody) < domhandler_1.DomHandler.getOuterWidth(this.scrollableSiblingBody.children[0]))
                    this.scrollBodyViewChild.nativeElement.style.maxHeight = (parseInt(this.scrollHeight) - domhandler_1.DomHandler.calculateScrollbarWidth()) + 'px';
                else
                    this.scrollBodyViewChild.nativeElement.style.maxHeight = this.scrollHeight;
            }
        }
    };
    ScrollableView.prototype.setVirtualScrollerHeight = function () {
        if (this.virtualScrollerViewChild.nativeElement) {
            this.virtualScrollerViewChild.nativeElement.style.height = this.dt.totalRecords * this.dt.virtualRowHeight + 'px';
        }
    };
    ScrollableView.prototype.hasVerticalOverflow = function () {
        return domhandler_1.DomHandler.getOuterHeight(this.scrollTableViewChild.nativeElement) > domhandler_1.DomHandler.getOuterHeight(this.scrollBodyViewChild.nativeElement);
    };
    ScrollableView.prototype.alignScrollBar = function () {
        if (!this.frozen) {
            var scrollBarWidth = this.hasVerticalOverflow() ? domhandler_1.DomHandler.calculateScrollbarWidth() : 0;
            this.scrollHeaderBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
                this.scrollFooterBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            }
        }
        this.initialized = false;
    };
    ScrollableView.prototype.ngOnDestroy = function () {
        this.unbindEvents();
        this.frozenSiblingBody = null;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.totalRecordsSubscription) {
            this.totalRecordsSubscription.unsubscribe();
        }
        if (this.columnsSubscription) {
            this.columnsSubscription.unsubscribe();
        }
        this.initialized = false;
    };
    __decorate([
        core_1.Input("pScrollableView"),
        __metadata("design:type", Array)
    ], ScrollableView.prototype, "columns", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ScrollableView.prototype, "frozen", void 0);
    __decorate([
        core_1.ViewChild('scrollHeader', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], ScrollableView.prototype, "scrollHeaderViewChild", void 0);
    __decorate([
        core_1.ViewChild('scrollHeaderBox', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], ScrollableView.prototype, "scrollHeaderBoxViewChild", void 0);
    __decorate([
        core_1.ViewChild('scrollBody', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], ScrollableView.prototype, "scrollBodyViewChild", void 0);
    __decorate([
        core_1.ViewChild('scrollTable', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], ScrollableView.prototype, "scrollTableViewChild", void 0);
    __decorate([
        core_1.ViewChild('loadingTable', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], ScrollableView.prototype, "scrollLoadingTableViewChild", void 0);
    __decorate([
        core_1.ViewChild('scrollFooter', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], ScrollableView.prototype, "scrollFooterViewChild", void 0);
    __decorate([
        core_1.ViewChild('scrollFooterBox', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], ScrollableView.prototype, "scrollFooterBoxViewChild", void 0);
    __decorate([
        core_1.ViewChild('virtualScroller', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], ScrollableView.prototype, "virtualScrollerViewChild", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ScrollableView.prototype, "scrollHeight", null);
    ScrollableView = __decorate([
        core_1.Component({
            selector: '[pScrollableView]',
            template: "\n        <div #scrollHeader class=\"ui-table-scrollable-header ui-widget-header\">\n            <div #scrollHeaderBox class=\"ui-table-scrollable-header-box\">\n                <table class=\"ui-table-scrollable-header-table\" [ngClass]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenHeaderTemplate||dt.headerTemplate : dt.headerTemplate; context {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"ui-table-tbody\">\n                        <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"dt.frozenValue\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                            <ng-container *ngTemplateOutlet=\"dt.frozenRowsTemplate; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns}\"></ng-container>\n                        </ng-template>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div #scrollBody class=\"ui-table-scrollable-body\">\n            <table #scrollTable [ngClass]=\"{'ui-table-scrollable-body-table': true, 'ui-table-virtual-table': dt.virtualScroll}\" [class]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n            </table>\n            <table #loadingTable *ngIf=\"dt.virtualScroll && dt.loadingBodyTemplate != null\" [ngClass]=\"{'ui-table-scrollable-body-table ui-table-loading-virtual-table': true, 'ui-table-virtual-table': dt.virtualScroll}\">\n                <tbody class=\"ui-table-tbody\">\n                    <ng-template ngFor [ngForOf]=\"loadingArray\">\n                        <ng-container *ngTemplateOutlet=\"dt.loadingBodyTemplate; context: {columns: columns}\"></ng-container>\n                    </ng-template>\n                </tbody>\n            </table>\n            <div #virtualScroller class=\"ui-table-virtual-scroller\" *ngIf=\"dt.virtualScroll\"></div>\n        </div>\n        <div #scrollFooter *ngIf=\"dt.footerTemplate\" class=\"ui-table-scrollable-footer ui-widget-header\">\n            <div #scrollFooterBox class=\"ui-table-scrollable-footer-box\">\n                <table class=\"ui-table-scrollable-footer-table\" [ngClass]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tfoot class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenFooterTemplate||dt.footerTemplate : dt.footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [Table, core_1.ElementRef, core_1.NgZone])
    ], ScrollableView);
    return ScrollableView;
}());
exports.ScrollableView = ScrollableView;
var SortableColumn = /** @class */ (function () {
    function SortableColumn(dt) {
        var _this = this;
        this.dt = dt;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
                _this.updateSortState();
            });
        }
    }
    SortableColumn.prototype.ngOnInit = function () {
        if (this.isEnabled()) {
            this.updateSortState();
        }
    };
    SortableColumn.prototype.updateSortState = function () {
        this.sorted = this.dt.isSorted(this.field);
    };
    SortableColumn.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.updateSortState();
            this.dt.sort({
                originalEvent: event,
                field: this.field
            });
            domhandler_1.DomHandler.clearSelection();
        }
    };
    SortableColumn.prototype.onEnterKey = function (event) {
        this.onClick(event);
    };
    SortableColumn.prototype.isEnabled = function () {
        return this.pSortableColumnDisabled !== true;
    };
    SortableColumn.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        core_1.Input("pSortableColumn"),
        __metadata("design:type", String)
    ], SortableColumn.prototype, "field", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SortableColumn.prototype, "pSortableColumnDisabled", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], SortableColumn.prototype, "onClick", null);
    __decorate([
        core_1.HostListener('keydown.enter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], SortableColumn.prototype, "onEnterKey", null);
    SortableColumn = __decorate([
        core_1.Directive({
            selector: '[pSortableColumn]',
            host: {
                '[class.ui-sortable-column]': 'isEnabled()',
                '[class.ui-state-highlight]': 'sorted',
                '[attr.tabindex]': 'isEnabled() ? "0" : null'
            }
        }),
        __metadata("design:paramtypes", [Table])
    ], SortableColumn);
    return SortableColumn;
}());
exports.SortableColumn = SortableColumn;
var SortIcon = /** @class */ (function () {
    function SortIcon(dt) {
        var _this = this;
        this.dt = dt;
        this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
            _this.updateSortState();
        });
    }
    SortIcon.prototype.ngOnInit = function () {
        this.updateSortState();
    };
    SortIcon.prototype.onClick = function (event) {
        event.preventDefault();
    };
    SortIcon.prototype.updateSortState = function () {
        if (this.dt.sortMode === 'single') {
            this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
        }
        else if (this.dt.sortMode === 'multiple') {
            var sortMeta = this.dt.getSortMeta(this.field);
            this.sortOrder = sortMeta ? sortMeta.order : 0;
        }
    };
    SortIcon.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SortIcon.prototype, "field", void 0);
    SortIcon = __decorate([
        core_1.Component({
            selector: 'p-sortIcon',
            template: "\n        <i class=\"ui-sortable-column-icon pi pi-fw\" [ngClass]=\"{'pi-sort-up': sortOrder === 1, 'pi-sort-down': sortOrder === -1, 'pi-sort': sortOrder === 0}\"></i>\n    "
        }),
        __metadata("design:paramtypes", [Table])
    ], SortIcon);
    return SortIcon;
}());
exports.SortIcon = SortIcon;
var SelectableRow = /** @class */ (function () {
    function SelectableRow(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
                _this.selected = _this.dt.isSelected(_this.data);
            });
        }
    }
    SelectableRow.prototype.ngOnInit = function () {
        if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
        }
    };
    SelectableRow.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.dt.handleRowClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
        }
    };
    SelectableRow.prototype.onTouchEnd = function (event) {
        if (this.isEnabled()) {
            this.dt.handleRowTouchEnd(event);
        }
    };
    SelectableRow.prototype.onKeyDown = function (event) {
        if (this.isEnabled()) {
            var row = event.target;
            switch (event.which) {
                //down arrow
                case 40:
                    var nextRow = this.findNextSelectableRow(row);
                    if (nextRow) {
                        nextRow.focus();
                    }
                    event.preventDefault();
                    break;
                //up arrow
                case 38:
                    var prevRow = this.findPrevSelectableRow(row);
                    if (prevRow) {
                        prevRow.focus();
                    }
                    event.preventDefault();
                    break;
                //enter
                case 13:
                    this.dt.handleRowClick({
                        originalEvent: event,
                        rowData: this.data,
                        rowIndex: this.index
                    });
                    break;
                default:
                    //no op
                    break;
            }
        }
    };
    SelectableRow.prototype.findNextSelectableRow = function (row) {
        var nextRow = row.nextElementSibling;
        if (nextRow) {
            if (domhandler_1.DomHandler.hasClass(nextRow, 'ui-selectable-row'))
                return nextRow;
            else
                return this.findNextSelectableRow(nextRow);
        }
        else {
            return null;
        }
    };
    SelectableRow.prototype.findPrevSelectableRow = function (row) {
        var prevRow = row.previousElementSibling;
        if (prevRow) {
            if (domhandler_1.DomHandler.hasClass(prevRow, 'ui-selectable-row'))
                return prevRow;
            else
                return this.findPrevSelectableRow(prevRow);
        }
        else {
            return null;
        }
    };
    SelectableRow.prototype.isEnabled = function () {
        return this.pSelectableRowDisabled !== true;
    };
    SelectableRow.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        core_1.Input("pSelectableRow"),
        __metadata("design:type", Object)
    ], SelectableRow.prototype, "data", void 0);
    __decorate([
        core_1.Input("pSelectableRowIndex"),
        __metadata("design:type", Number)
    ], SelectableRow.prototype, "index", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SelectableRow.prototype, "pSelectableRowDisabled", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], SelectableRow.prototype, "onClick", null);
    __decorate([
        core_1.HostListener('touchend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], SelectableRow.prototype, "onTouchEnd", null);
    __decorate([
        core_1.HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SelectableRow.prototype, "onKeyDown", null);
    SelectableRow = __decorate([
        core_1.Directive({
            selector: '[pSelectableRow]',
            host: {
                '[class.ui-selectable-row]': 'isEnabled()',
                '[class.ui-state-highlight]': 'selected',
                '[attr.tabindex]': 'isEnabled() ? 0 : undefined',
            }
        }),
        __metadata("design:paramtypes", [Table, TableService])
    ], SelectableRow);
    return SelectableRow;
}());
exports.SelectableRow = SelectableRow;
var SelectableRowDblClick = /** @class */ (function () {
    function SelectableRowDblClick(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
                _this.selected = _this.dt.isSelected(_this.data);
            });
        }
    }
    SelectableRowDblClick.prototype.ngOnInit = function () {
        if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
        }
    };
    SelectableRowDblClick.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.dt.handleRowClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
        }
    };
    SelectableRowDblClick.prototype.isEnabled = function () {
        return this.pSelectableRowDisabled !== true;
    };
    SelectableRowDblClick.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        core_1.Input("pSelectableRowDblClick"),
        __metadata("design:type", Object)
    ], SelectableRowDblClick.prototype, "data", void 0);
    __decorate([
        core_1.Input("pSelectableRowIndex"),
        __metadata("design:type", Number)
    ], SelectableRowDblClick.prototype, "index", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SelectableRowDblClick.prototype, "pSelectableRowDisabled", void 0);
    __decorate([
        core_1.HostListener('dblclick', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], SelectableRowDblClick.prototype, "onClick", null);
    SelectableRowDblClick = __decorate([
        core_1.Directive({
            selector: '[pSelectableRowDblClick]',
            host: {
                '[class.ui-selectable-row]': 'isEnabled()',
                '[class.ui-state-highlight]': 'selected'
            }
        }),
        __metadata("design:paramtypes", [Table, TableService])
    ], SelectableRowDblClick);
    return SelectableRowDblClick;
}());
exports.SelectableRowDblClick = SelectableRowDblClick;
var ContextMenuRow = /** @class */ (function () {
    function ContextMenuRow(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.contextMenuSource$.subscribe(function (data) {
                _this.selected = _this.dt.equals(_this.data, data);
            });
        }
    }
    ContextMenuRow.prototype.onContextMenu = function (event) {
        if (this.isEnabled()) {
            this.dt.handleRowRightClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
            event.preventDefault();
        }
    };
    ContextMenuRow.prototype.isEnabled = function () {
        return this.pContextMenuRowDisabled !== true;
    };
    ContextMenuRow.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        core_1.Input("pContextMenuRow"),
        __metadata("design:type", Object)
    ], ContextMenuRow.prototype, "data", void 0);
    __decorate([
        core_1.Input("pContextMenuRowIndex"),
        __metadata("design:type", Number)
    ], ContextMenuRow.prototype, "index", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ContextMenuRow.prototype, "pContextMenuRowDisabled", void 0);
    __decorate([
        core_1.HostListener('contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ContextMenuRow.prototype, "onContextMenu", null);
    ContextMenuRow = __decorate([
        core_1.Directive({
            selector: '[pContextMenuRow]',
            host: {
                '[class.ui-contextmenu-selected]': 'selected'
            }
        }),
        __metadata("design:paramtypes", [Table, TableService])
    ], ContextMenuRow);
    return ContextMenuRow;
}());
exports.ContextMenuRow = ContextMenuRow;
var RowToggler = /** @class */ (function () {
    function RowToggler(dt) {
        this.dt = dt;
    }
    RowToggler.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.dt.toggleRow(this.data, event);
            event.preventDefault();
        }
    };
    RowToggler.prototype.isEnabled = function () {
        return this.pRowTogglerDisabled !== true;
    };
    __decorate([
        core_1.Input('pRowToggler'),
        __metadata("design:type", Object)
    ], RowToggler.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RowToggler.prototype, "pRowTogglerDisabled", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], RowToggler.prototype, "onClick", null);
    RowToggler = __decorate([
        core_1.Directive({
            selector: '[pRowToggler]'
        }),
        __metadata("design:paramtypes", [Table])
    ], RowToggler);
    return RowToggler;
}());
exports.RowToggler = RowToggler;
var ResizableColumn = /** @class */ (function () {
    function ResizableColumn(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ResizableColumn.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.isEnabled()) {
            domhandler_1.DomHandler.addClass(this.el.nativeElement, 'ui-resizable-column');
            this.resizer = document.createElement('span');
            this.resizer.className = 'ui-column-resizer ui-clickable';
            this.el.nativeElement.appendChild(this.resizer);
            this.zone.runOutsideAngular(function () {
                _this.resizerMouseDownListener = _this.onMouseDown.bind(_this);
                _this.resizer.addEventListener('mousedown', _this.resizerMouseDownListener);
            });
        }
    };
    ResizableColumn.prototype.bindDocumentEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentMouseMoveListener = _this.onDocumentMouseMove.bind(_this);
            document.addEventListener('mousemove', _this.documentMouseMoveListener);
            _this.documentMouseUpListener = _this.onDocumentMouseUp.bind(_this);
            document.addEventListener('mouseup', _this.documentMouseUpListener);
        });
    };
    ResizableColumn.prototype.unbindDocumentEvents = function () {
        if (this.documentMouseMoveListener) {
            document.removeEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseMoveListener = null;
        }
        if (this.documentMouseUpListener) {
            document.removeEventListener('mouseup', this.documentMouseUpListener);
            this.documentMouseUpListener = null;
        }
    };
    ResizableColumn.prototype.onMouseDown = function (event) {
        this.dt.onColumnResizeBegin(event);
        this.bindDocumentEvents();
    };
    ResizableColumn.prototype.onDocumentMouseMove = function (event) {
        this.dt.onColumnResize(event);
    };
    ResizableColumn.prototype.onDocumentMouseUp = function (event) {
        this.dt.onColumnResizeEnd(event, this.el.nativeElement);
        this.unbindDocumentEvents();
    };
    ResizableColumn.prototype.isEnabled = function () {
        return this.pResizableColumnDisabled !== true;
    };
    ResizableColumn.prototype.ngOnDestroy = function () {
        if (this.resizerMouseDownListener) {
            this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
        }
        this.unbindDocumentEvents();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ResizableColumn.prototype, "pResizableColumnDisabled", void 0);
    ResizableColumn = __decorate([
        core_1.Directive({
            selector: '[pResizableColumn]'
        }),
        __metadata("design:paramtypes", [Table, core_1.ElementRef, core_1.NgZone])
    ], ResizableColumn);
    return ResizableColumn;
}());
exports.ResizableColumn = ResizableColumn;
var ReorderableColumn = /** @class */ (function () {
    function ReorderableColumn(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ReorderableColumn.prototype.ngAfterViewInit = function () {
        if (this.isEnabled()) {
            this.bindEvents();
        }
    };
    ReorderableColumn.prototype.bindEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.mouseDownListener = _this.onMouseDown.bind(_this);
            _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
            _this.dragStartListener = _this.onDragStart.bind(_this);
            _this.el.nativeElement.addEventListener('dragstart', _this.dragStartListener);
            _this.dragOverListener = _this.onDragEnter.bind(_this);
            _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
            _this.dragEnterListener = _this.onDragEnter.bind(_this);
            _this.el.nativeElement.addEventListener('dragenter', _this.dragEnterListener);
            _this.dragLeaveListener = _this.onDragLeave.bind(_this);
            _this.el.nativeElement.addEventListener('dragleave', _this.dragLeaveListener);
        });
    };
    ReorderableColumn.prototype.unbindEvents = function () {
        if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
        }
        if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
        }
    };
    ReorderableColumn.prototype.onMouseDown = function (event) {
        if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || domhandler_1.DomHandler.hasClass(event.target, 'ui-column-resizer'))
            this.el.nativeElement.draggable = false;
        else
            this.el.nativeElement.draggable = true;
    };
    ReorderableColumn.prototype.onDragStart = function (event) {
        this.dt.onColumnDragStart(event, this.el.nativeElement);
    };
    ReorderableColumn.prototype.onDragOver = function (event) {
        event.preventDefault();
    };
    ReorderableColumn.prototype.onDragEnter = function (event) {
        this.dt.onColumnDragEnter(event, this.el.nativeElement);
    };
    ReorderableColumn.prototype.onDragLeave = function (event) {
        this.dt.onColumnDragLeave(event);
    };
    ReorderableColumn.prototype.onDrop = function (event) {
        if (this.isEnabled()) {
            this.dt.onColumnDrop(event, this.el.nativeElement);
        }
    };
    ReorderableColumn.prototype.isEnabled = function () {
        return this.pReorderableColumnDisabled !== true;
    };
    ReorderableColumn.prototype.ngOnDestroy = function () {
        this.unbindEvents();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ReorderableColumn.prototype, "pReorderableColumnDisabled", void 0);
    __decorate([
        core_1.HostListener('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ReorderableColumn.prototype, "onDrop", null);
    ReorderableColumn = __decorate([
        core_1.Directive({
            selector: '[pReorderableColumn]'
        }),
        __metadata("design:paramtypes", [Table, core_1.ElementRef, core_1.NgZone])
    ], ReorderableColumn);
    return ReorderableColumn;
}());
exports.ReorderableColumn = ReorderableColumn;
var EditableColumn = /** @class */ (function () {
    function EditableColumn(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    EditableColumn.prototype.ngAfterViewInit = function () {
        if (this.isEnabled()) {
            domhandler_1.DomHandler.addClass(this.el.nativeElement, 'ui-editable-column');
        }
    };
    EditableColumn.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.dt.editingCellClick = true;
            if (this.dt.editingCell) {
                if (this.dt.editingCell !== this.el.nativeElement) {
                    if (!this.dt.isEditingCellValid()) {
                        return;
                    }
                    domhandler_1.DomHandler.removeClass(this.dt.editingCell, 'ui-editing-cell');
                    this.openCell();
                }
            }
            else {
                this.openCell();
            }
        }
    };
    EditableColumn.prototype.openCell = function () {
        var _this = this;
        this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field);
        domhandler_1.DomHandler.addClass(this.el.nativeElement, 'ui-editing-cell');
        this.dt.onEditInit.emit({ field: this.field, data: this.data });
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                var focusCellSelector = _this.pFocusCellSelector || 'input, textarea, select';
                var focusableElement = domhandler_1.DomHandler.findSingle(_this.el.nativeElement, focusCellSelector);
                if (focusableElement) {
                    focusableElement.focus();
                }
            }, 50);
        });
    };
    EditableColumn.prototype.closeEditingCell = function () {
        domhandler_1.DomHandler.removeClass(this.dt.editingCell, 'ui-editing-cell');
        this.dt.editingCell = null;
        this.dt.editingCellData = null;
        this.dt.editingCellField = null;
        this.dt.unbindDocumentEditListener();
    };
    EditableColumn.prototype.onKeyDown = function (event) {
        if (this.isEnabled()) {
            //enter
            if (event.keyCode == 13) {
                if (this.dt.isEditingCellValid()) {
                    this.closeEditingCell();
                    this.dt.onEditComplete.emit({ field: this.field, data: this.data, originalEvent: event });
                }
                event.preventDefault();
            }
            //escape
            else if (event.keyCode == 27) {
                if (this.dt.isEditingCellValid()) {
                    this.closeEditingCell();
                    this.dt.onEditCancel.emit({ field: this.field, data: this.data, originalEvent: event });
                }
                event.preventDefault();
            }
            //tab
            else if (event.keyCode == 9) {
                this.dt.onEditComplete.emit({ field: this.field, data: this.data, originalEvent: event });
                if (event.shiftKey)
                    this.moveToPreviousCell(event);
                else
                    this.moveToNextCell(event);
            }
        }
    };
    EditableColumn.prototype.findCell = function (element) {
        if (element) {
            var cell = element;
            while (cell && !domhandler_1.DomHandler.hasClass(cell, 'ui-editing-cell')) {
                cell = cell.parentElement;
            }
            return cell;
        }
        else {
            return null;
        }
    };
    EditableColumn.prototype.moveToPreviousCell = function (event) {
        var currentCell = this.findCell(event.target);
        var row = currentCell.parentElement;
        var targetCell = this.findPreviousEditableColumn(currentCell);
        if (targetCell) {
            domhandler_1.DomHandler.invokeElementMethod(event.target, 'blur');
            domhandler_1.DomHandler.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    };
    EditableColumn.prototype.moveToNextCell = function (event) {
        var currentCell = this.findCell(event.target);
        var row = currentCell.parentElement;
        var targetCell = this.findNextEditableColumn(currentCell);
        if (targetCell) {
            domhandler_1.DomHandler.invokeElementMethod(event.target, 'blur');
            domhandler_1.DomHandler.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    };
    EditableColumn.prototype.findPreviousEditableColumn = function (cell) {
        var prevCell = cell.previousElementSibling;
        if (!prevCell) {
            var previousRow = cell.parentElement.previousElementSibling;
            if (previousRow) {
                prevCell = previousRow.lastElementChild;
            }
        }
        if (prevCell) {
            if (domhandler_1.DomHandler.hasClass(prevCell, 'ui-editable-column'))
                return prevCell;
            else
                return this.findPreviousEditableColumn(prevCell);
        }
        else {
            return null;
        }
    };
    EditableColumn.prototype.findNextEditableColumn = function (cell) {
        var nextCell = cell.nextElementSibling;
        if (!nextCell) {
            var nextRow = cell.parentElement.nextElementSibling;
            if (nextRow) {
                nextCell = nextRow.firstElementChild;
            }
        }
        if (nextCell) {
            if (domhandler_1.DomHandler.hasClass(nextCell, 'ui-editable-column'))
                return nextCell;
            else
                return this.findNextEditableColumn(nextCell);
        }
        else {
            return null;
        }
    };
    EditableColumn.prototype.isEnabled = function () {
        return this.pEditableColumnDisabled !== true;
    };
    __decorate([
        core_1.Input("pEditableColumn"),
        __metadata("design:type", Object)
    ], EditableColumn.prototype, "data", void 0);
    __decorate([
        core_1.Input("pEditableColumnField"),
        __metadata("design:type", Object)
    ], EditableColumn.prototype, "field", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], EditableColumn.prototype, "pEditableColumnDisabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], EditableColumn.prototype, "pFocusCellSelector", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], EditableColumn.prototype, "onClick", null);
    __decorate([
        core_1.HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], EditableColumn.prototype, "onKeyDown", null);
    EditableColumn = __decorate([
        core_1.Directive({
            selector: '[pEditableColumn]'
        }),
        __metadata("design:paramtypes", [Table, core_1.ElementRef, core_1.NgZone])
    ], EditableColumn);
    return EditableColumn;
}());
exports.EditableColumn = EditableColumn;
var EditableRow = /** @class */ (function () {
    function EditableRow(el) {
        this.el = el;
    }
    EditableRow.prototype.isEnabled = function () {
        return this.pEditableRowDisabled !== true;
    };
    __decorate([
        core_1.Input("pEditableRow"),
        __metadata("design:type", Object)
    ], EditableRow.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], EditableRow.prototype, "pEditableRowDisabled", void 0);
    EditableRow = __decorate([
        core_1.Directive({
            selector: '[pEditableRow]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], EditableRow);
    return EditableRow;
}());
exports.EditableRow = EditableRow;
var InitEditableRow = /** @class */ (function () {
    function InitEditableRow(dt, editableRow) {
        this.dt = dt;
        this.editableRow = editableRow;
    }
    InitEditableRow.prototype.onClick = function (event) {
        this.dt.initRowEdit(this.editableRow.data);
        event.preventDefault();
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], InitEditableRow.prototype, "onClick", null);
    InitEditableRow = __decorate([
        core_1.Directive({
            selector: '[pInitEditableRow]'
        }),
        __metadata("design:paramtypes", [Table, EditableRow])
    ], InitEditableRow);
    return InitEditableRow;
}());
exports.InitEditableRow = InitEditableRow;
var SaveEditableRow = /** @class */ (function () {
    function SaveEditableRow(dt, editableRow) {
        this.dt = dt;
        this.editableRow = editableRow;
    }
    SaveEditableRow.prototype.onClick = function (event) {
        this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
        event.preventDefault();
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], SaveEditableRow.prototype, "onClick", null);
    SaveEditableRow = __decorate([
        core_1.Directive({
            selector: '[pSaveEditableRow]'
        }),
        __metadata("design:paramtypes", [Table, EditableRow])
    ], SaveEditableRow);
    return SaveEditableRow;
}());
exports.SaveEditableRow = SaveEditableRow;
var CancelEditableRow = /** @class */ (function () {
    function CancelEditableRow(dt, editableRow) {
        this.dt = dt;
        this.editableRow = editableRow;
    }
    CancelEditableRow.prototype.onClick = function (event) {
        this.dt.cancelRowEdit(this.editableRow.data);
        event.preventDefault();
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], CancelEditableRow.prototype, "onClick", null);
    CancelEditableRow = __decorate([
        core_1.Directive({
            selector: '[pCancelEditableRow]'
        }),
        __metadata("design:paramtypes", [Table, EditableRow])
    ], CancelEditableRow);
    return CancelEditableRow;
}());
exports.CancelEditableRow = CancelEditableRow;
var CellEditor = /** @class */ (function () {
    function CellEditor(dt, editableColumn, editableRow) {
        this.dt = dt;
        this.editableColumn = editableColumn;
        this.editableRow = editableRow;
    }
    CellEditor.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'input':
                    _this.inputTemplate = item.template;
                    break;
                case 'output':
                    _this.outputTemplate = item.template;
                    break;
            }
        });
    };
    Object.defineProperty(CellEditor.prototype, "editing", {
        get: function () {
            return (this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement) ||
                (this.editableRow && this.dt.editMode === 'row' && this.dt.isRowEditing(this.editableRow.data));
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ContentChildren(shared_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], CellEditor.prototype, "templates", void 0);
    CellEditor = __decorate([
        core_1.Component({
            selector: 'p-cellEditor',
            template: "\n        <ng-container *ngIf=\"editing\">\n            <ng-container *ngTemplateOutlet=\"inputTemplate\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!editing\">\n            <ng-container *ngTemplateOutlet=\"outputTemplate\"></ng-container>\n        </ng-container>\n    "
        }),
        __param(1, core_1.Optional()), __param(2, core_1.Optional()),
        __metadata("design:paramtypes", [Table, EditableColumn, EditableRow])
    ], CellEditor);
    return CellEditor;
}());
exports.CellEditor = CellEditor;
var TableRadioButton = /** @class */ (function () {
    function TableRadioButton(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this.checked = _this.dt.isSelected(_this.value);
        });
    }
    TableRadioButton.prototype.ngOnInit = function () {
        this.checked = this.dt.isSelected(this.value);
    };
    TableRadioButton.prototype.onClick = function (event) {
        if (!this.disabled) {
            this.dt.toggleRowWithRadio({
                originalEvent: event,
                rowIndex: this.index
            }, this.value);
        }
        domhandler_1.DomHandler.clearSelection();
    };
    TableRadioButton.prototype.onFocus = function () {
        domhandler_1.DomHandler.addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableRadioButton.prototype.onBlur = function () {
        domhandler_1.DomHandler.removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableRadioButton.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TableRadioButton.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TableRadioButton.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TableRadioButton.prototype, "index", void 0);
    __decorate([
        core_1.ViewChild('box', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], TableRadioButton.prototype, "boxViewChild", void 0);
    TableRadioButton = __decorate([
        core_1.Component({
            selector: 'p-tableRadioButton',
            template: "\n        <div class=\"ui-radiobutton ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"radio\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"disabled\">\n            </div>\n            <div #box [ngClass]=\"{'ui-radiobutton-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\">\n                <span class=\"ui-radiobutton-icon ui-clickable\" [ngClass]=\"{'pi pi-circle-on':checked}\"></span>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [Table, TableService])
    ], TableRadioButton);
    return TableRadioButton;
}());
exports.TableRadioButton = TableRadioButton;
var TableCheckbox = /** @class */ (function () {
    function TableCheckbox(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this.checked = _this.dt.isSelected(_this.value);
        });
    }
    TableCheckbox.prototype.ngOnInit = function () {
        this.checked = this.dt.isSelected(this.value);
    };
    TableCheckbox.prototype.onClick = function (event) {
        if (!this.disabled) {
            this.dt.toggleRowWithCheckbox({
                originalEvent: event,
                rowIndex: this.index
            }, this.value);
        }
        domhandler_1.DomHandler.clearSelection();
    };
    TableCheckbox.prototype.onFocus = function () {
        domhandler_1.DomHandler.addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableCheckbox.prototype.onBlur = function () {
        domhandler_1.DomHandler.removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableCheckbox.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TableCheckbox.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TableCheckbox.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TableCheckbox.prototype, "index", void 0);
    __decorate([
        core_1.ViewChild('box', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], TableCheckbox.prototype, "boxViewChild", void 0);
    TableCheckbox = __decorate([
        core_1.Component({
            selector: 'p-tableCheckbox',
            template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"checkbox\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"disabled\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [Table, TableService])
    ], TableCheckbox);
    return TableCheckbox;
}());
exports.TableCheckbox = TableCheckbox;
var TableHeaderCheckbox = /** @class */ (function () {
    function TableHeaderCheckbox(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(function () {
            _this.checked = _this.updateCheckedState();
        });
        this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this.checked = _this.updateCheckedState();
        });
    }
    TableHeaderCheckbox.prototype.ngOnInit = function () {
        this.checked = this.updateCheckedState();
    };
    TableHeaderCheckbox.prototype.onClick = function (event) {
        if (!this.disabled) {
            if (this.dt.value && this.dt.value.length > 0) {
                this.dt.toggleRowsWithCheckbox(event, !this.checked);
            }
        }
        domhandler_1.DomHandler.clearSelection();
    };
    TableHeaderCheckbox.prototype.onFocus = function () {
        domhandler_1.DomHandler.addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableHeaderCheckbox.prototype.onBlur = function () {
        domhandler_1.DomHandler.removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableHeaderCheckbox.prototype.isDisabled = function () {
        return this.disabled || !this.dt.value || !this.dt.value.length;
    };
    TableHeaderCheckbox.prototype.ngOnDestroy = function () {
        if (this.selectionChangeSubscription) {
            this.selectionChangeSubscription.unsubscribe();
        }
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    };
    TableHeaderCheckbox.prototype.updateCheckedState = function () {
        if (this.dt.filteredValue) {
            var val = this.dt.filteredValue;
            return (val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.isAllFilteredValuesChecked());
        }
        else {
            var val = this.dt.value;
            return (val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.dt.selection.length === val.length);
        }
    };
    TableHeaderCheckbox.prototype.isAllFilteredValuesChecked = function () {
        if (!this.dt.filteredValue) {
            return false;
        }
        else {
            for (var _i = 0, _a = this.dt.filteredValue; _i < _a.length; _i++) {
                var rowData = _a[_i];
                if (!this.dt.isSelected(rowData)) {
                    return false;
                }
            }
            return true;
        }
    };
    __decorate([
        core_1.ViewChild('box', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], TableHeaderCheckbox.prototype, "boxViewChild", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TableHeaderCheckbox.prototype, "disabled", void 0);
    TableHeaderCheckbox = __decorate([
        core_1.Component({
            selector: 'p-tableHeaderCheckbox',
            template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"isDisabled()\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled': isDisabled()}\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [Table, TableService])
    ], TableHeaderCheckbox);
    return TableHeaderCheckbox;
}());
exports.TableHeaderCheckbox = TableHeaderCheckbox;
var ReorderableRowHandle = /** @class */ (function () {
    function ReorderableRowHandle(el) {
        this.el = el;
    }
    ReorderableRowHandle.prototype.ngAfterViewInit = function () {
        domhandler_1.DomHandler.addClass(this.el.nativeElement, 'ui-table-reorderablerow-handle');
    };
    __decorate([
        core_1.Input("pReorderableRowHandle"),
        __metadata("design:type", Number)
    ], ReorderableRowHandle.prototype, "index", void 0);
    ReorderableRowHandle = __decorate([
        core_1.Directive({
            selector: '[pReorderableRowHandle]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ReorderableRowHandle);
    return ReorderableRowHandle;
}());
exports.ReorderableRowHandle = ReorderableRowHandle;
var ReorderableRow = /** @class */ (function () {
    function ReorderableRow(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ReorderableRow.prototype.ngAfterViewInit = function () {
        if (this.isEnabled()) {
            this.el.nativeElement.droppable = true;
            this.bindEvents();
        }
    };
    ReorderableRow.prototype.bindEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.mouseDownListener = _this.onMouseDown.bind(_this);
            _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
            _this.dragStartListener = _this.onDragStart.bind(_this);
            _this.el.nativeElement.addEventListener('dragstart', _this.dragStartListener);
            _this.dragEndListener = _this.onDragEnd.bind(_this);
            _this.el.nativeElement.addEventListener('dragend', _this.dragEndListener);
            _this.dragOverListener = _this.onDragOver.bind(_this);
            _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
            _this.dragLeaveListener = _this.onDragLeave.bind(_this);
            _this.el.nativeElement.addEventListener('dragleave', _this.dragLeaveListener);
        });
    };
    ReorderableRow.prototype.unbindEvents = function () {
        if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
        }
        if (this.dragStartListener) {
            document.removeEventListener('dragstart', this.dragStartListener);
            this.dragStartListener = null;
        }
        if (this.dragEndListener) {
            document.removeEventListener('dragend', this.dragEndListener);
            this.dragEndListener = null;
        }
        if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
        }
        if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
        }
    };
    ReorderableRow.prototype.onMouseDown = function (event) {
        if (domhandler_1.DomHandler.hasClass(event.target, 'ui-table-reorderablerow-handle'))
            this.el.nativeElement.draggable = true;
        else
            this.el.nativeElement.draggable = false;
    };
    ReorderableRow.prototype.onDragStart = function (event) {
        this.dt.onRowDragStart(event, this.index);
    };
    ReorderableRow.prototype.onDragEnd = function (event) {
        this.dt.onRowDragEnd(event);
        this.el.nativeElement.draggable = false;
    };
    ReorderableRow.prototype.onDragOver = function (event) {
        this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
        event.preventDefault();
    };
    ReorderableRow.prototype.onDragLeave = function (event) {
        this.dt.onRowDragLeave(event, this.el.nativeElement);
    };
    ReorderableRow.prototype.isEnabled = function () {
        return this.pReorderableRowDisabled !== true;
    };
    ReorderableRow.prototype.onDrop = function (event) {
        if (this.isEnabled() && this.dt.rowDragging) {
            this.dt.onRowDrop(event, this.el.nativeElement);
        }
        event.preventDefault();
    };
    __decorate([
        core_1.Input("pReorderableRow"),
        __metadata("design:type", Number)
    ], ReorderableRow.prototype, "index", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ReorderableRow.prototype, "pReorderableRowDisabled", void 0);
    __decorate([
        core_1.HostListener('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ReorderableRow.prototype, "onDrop", null);
    ReorderableRow = __decorate([
        core_1.Directive({
            selector: '[pReorderableRow]'
        }),
        __metadata("design:paramtypes", [Table, core_1.ElementRef, core_1.NgZone])
    ], ReorderableRow);
    return ReorderableRow;
}());
exports.ReorderableRow = ReorderableRow;
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, paginator_1.PaginatorModule],
            exports: [Table, shared_1.SharedModule, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow],
            declarations: [Table, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, ScrollableView, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow]
        })
    ], TableModule);
    return TableModule;
}());
exports.TableModule = TableModule;
//# sourceMappingURL=table.js.map

/***/ }),

/***/ "./node_modules/primeng/confirmdialog.js":
/*!***********************************************!*\
  !*** ./node_modules/primeng/confirmdialog.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/confirmdialog/confirmdialog */ "./node_modules/primeng/components/confirmdialog/confirmdialog.js"));

/***/ }),

/***/ "./node_modules/primeng/dropdown.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/dropdown.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dropdown/dropdown */ "./node_modules/primeng/components/dropdown/dropdown.js"));

/***/ }),

/***/ "./node_modules/primeng/dynamicdialog.js":
/*!***********************************************!*\
  !*** ./node_modules/primeng/dynamicdialog.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dynamicdialog/dynamicdialog */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog.js"));

/***/ }),

/***/ "./node_modules/primeng/fileupload.js":
/*!********************************************!*\
  !*** ./node_modules/primeng/fileupload.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/fileupload/fileupload */ "./node_modules/primeng/components/fileupload/fileupload.js"));

/***/ }),

/***/ "./node_modules/primeng/message.js":
/*!*****************************************!*\
  !*** ./node_modules/primeng/message.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/message/message */ "./node_modules/primeng/components/message/message.js"));

/***/ }),

/***/ "./node_modules/primeng/messages.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/messages.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/messages/messages */ "./node_modules/primeng/components/messages/messages.js"));

/***/ }),

/***/ "./node_modules/primeng/progressbar.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/progressbar.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/progressbar/progressbar */ "./node_modules/primeng/components/progressbar/progressbar.js"));

/***/ }),

/***/ "./node_modules/primeng/table.js":
/*!***************************************!*\
  !*** ./node_modules/primeng/table.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/table/table */ "./node_modules/primeng/components/table/table.js"));

/***/ }),

/***/ "./src/app/Models/class-result.ts":
/*!****************************************!*\
  !*** ./src/app/Models/class-result.ts ***!
  \****************************************/
/*! exports provided: ClassResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassResult", function() { return ClassResult; });
var ClassResult = /** @class */ (function () {
    function ClassResult(classe, listProfMatiere) {
        this.classe = classe;
        this.listProfMatiere = listProfMatiere;
    }
    return ClassResult;
}());



/***/ }),

/***/ "./src/app/Models/classe.ts":
/*!**********************************!*\
  !*** ./src/app/Models/classe.ts ***!
  \**********************************/
/*! exports provided: Classe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Classe", function() { return Classe; });
var Classe = /** @class */ (function () {
    function Classe(id, classeName) {
        this.classeName = classeName;
        this.id = id;
    }
    return Classe;
}());



/***/ }),

/***/ "./src/app/Models/eleve.ts":
/*!*********************************!*\
  !*** ./src/app/Models/eleve.ts ***!
  \*********************************/
/*! exports provided: Eleve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eleve", function() { return Eleve; });
var Eleve = /** @class */ (function () {
    function Eleve(elv_id, lastName, firstName) {
        this.elv_id = elv_id;
        this.lastName = lastName;
        this.firstName = firstName;
    }
    return Eleve;
}());



/***/ }),

/***/ "./src/app/Models/professeur-result.ts":
/*!*********************************************!*\
  !*** ./src/app/Models/professeur-result.ts ***!
  \*********************************************/
/*! exports provided: ProfesseurResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesseurResult", function() { return ProfesseurResult; });
var ProfesseurResult = /** @class */ (function () {
    function ProfesseurResult(professeur, matieres) {
        this.matieres = [];
        this.professeur = professeur;
        this.matieres = matieres;
    }
    ProfesseurResult.prototype.getMat = function () {
        return this.matieres;
    };
    return ProfesseurResult;
}());



/***/ }),

/***/ "./src/app/Models/professeur.ts":
/*!**************************************!*\
  !*** ./src/app/Models/professeur.ts ***!
  \**************************************/
/*! exports provided: Professeur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Professeur", function() { return Professeur; });
var Professeur = /** @class */ (function () {
    function Professeur(id, nom, prenom) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
    }
    return Professeur;
}());



/***/ }),

/***/ "./src/app/pages/classes/classes.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/classes/classes.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ui-dialog\r\n{\r\nwidth: 300px;\r\n\r\n}\r\n\r\n.spinner {\r\n    border: 5px solid silver;\r\n    border-top: 5px solid #337AB7;\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    -webkit-animation: spin 700ms linear infinite;\r\n            animation: spin 700ms linear infinite;\r\n    top:50%;\r\n    left:50%;\r\n    position: absolute;\r\n    z-index: 1;\r\n  }\r\n\r\n@-webkit-keyframes spin {\r\n    0% { transform: rotate(0deg) }\r\n    100% { transform: rotate(-360deg) }\r\n  }\r\n\r\n@keyframes spin {\r\n    0% { transform: rotate(0deg) }\r\n    100% { transform: rotate(-360deg) }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xhc3Nlcy9jbGFzc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsWUFBWTs7QUFFWjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyxPQUFPO0lBQ1AsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0FBQ0E7SUFDRSxLQUFLLHdCQUF3QjtJQUM3QixPQUFPLDJCQUEyQjtFQUNwQzs7QUFIQTtJQUNFLEtBQUssd0JBQXdCO0lBQzdCLE9BQU8sMkJBQTJCO0VBQ3BDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xhc3Nlcy9jbGFzc2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8gLnVpLWRpYWxvZ1xyXG57XHJcbndpZHRoOiAzMDBweDtcclxuXHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMzM3QUI3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBhbmltYXRpb246IHNwaW4gNzAwbXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/classes/classes.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/classes/classes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card>\n    <div *ngIf=\"showIndicator\" class=\"spinner\"></div>\n    <p-messages [(value)]=\"msgs\"></p-messages>\n   <div class=\"row\">\n        <div class=\"col-8\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"showDialog()\">\n              {{'add_cls'|translate}}\n              </button></div>\n        <!-- <div class=\"col-4\"> <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span><input pInputText type=\"text\" placeholder=\"Searsh\" [(ngModel)]=\"query\"><i class=\"pi pi-search\"></i></div> -->\n        <div class=\"ui-inputgroup\" class=\"col-4\">\n           <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-search\"></i></span>\n           <input type=\"text\" pInputText placeholder=\"Searsh\"  [(ngModel)]=\"query\">         \n       </div>\n      </div>\n   \n  \n     <p-dialog header=\" {{'add_cls'|translate}}\" [(visible)]=\"display\" >\n    <label for=\"name\">\n    {{'cls_name'|translate}}\n    </label><br>\n    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"classeName\"><br>\n    <label for=\"name\">\n    {{'prof_name'|translate}}\n    </label><br>\n    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"lastName\"><br>\n    <label for=\"name\">\n    {{'prof_firstN'|translate}}\n    </label><br>\n    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"firstName\"> <br>\n    <p-listbox [options]=\"matieres\" [(ngModel)]=\"selectedMatieres\" multiple=\"multiple\" checkbox=\"checkbox\" filter=\"filter\" optionLabel=\"name\">\n    <p-header>\n       {{'mat'|translate}}\n    </p-header>\n    </p-listbox>\n    <p-footer>      \n       <button type=\"button\" (click)=\"saveClassRoom()\" class=\"btn btn-primary\" >\n       {{'ajout'|translate}}\n       </button>\n    </p-footer>\n    </p-dialog>\n  \n    <p-dialog header=\" {{'add_cls'|translate}}\" [(visible)]=\"displayStudent\" >\n     <label for=\"name\">\n        {{'last_name'|translate}}\n     </label><br>\n     <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"stdFirstName\"><br>\n     <label for=\"name\">\n        {{'first_name'|translate}}\n     </label><br>\n     <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"stdLastName\"><br>\n     <label for=\"name\">\n  \n     </label><br>\n   \n     <p-footer>      \n        <button type=\"button\" (click)=\"addStudentToClassroom()\" class=\"btn btn-primary\" >\n      {{'add_std'|translate}}\n        </button>\n     </p-footer>\n     </p-dialog>\n  <p-confirmDialog header=\"Confirmation\"  appendTo=\"body\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n   \n    <div *ngFor=\"let cls of classes | StartsWith:query;let i=index\"  class=\"row\">\n     <div  class=\"col-10\">\n           \n          <p-accordion (onClose)=\"onTabClose($event,i)\" (onOpen)=\"onTabOpen($event ,i)\"  >\n          <p-accordionTab  header=\"{{cls.classe.nom}}\">\n             <ul  *ngFor=\"let prof of cls.listProfMatiere\">\n              {{'prof_one'|translate}} : {{prof.professeur.nom}}  {{prof.professeur.prenom}} \n                <li *ngFor=\"let matiere of prof.matieres\">\n                   {{matiere.name}} \n                </li>\n             </ul>\n             <button  type=\"button\" (click)=\"getStudents(cls)\" pButton icon=\"pi pi-info-circle\" label=\"{{'show_std'|translate}}\" ></button>\n             <button type=\"button\" (click)=\"subscripeStudent(cls)\" pButton icon=\"pi pi-info-circle\" label=\"{{'inscr_elv'|translate}}\"></button>\n             \n          </p-accordionTab>\n          </p-accordion>\n       </div>\n       <div    class=\"col-1\" >\n          <button type=\"button\" (click)=\"confirm(cls)\" pButton icon=\"pi pi-times\" label=\"{{'delete'|translate}}\"></button>\n       </div>\n    </div>\n    <p-dialog header=\"Students\" [(visible)]=\"displayStd\">\n    <p-table [value]=\"students\" >\n    <ng-template pTemplate=\"header\">\n       <tr>\n        <th>{{'last_name'|translate}}</th>\n        <th>{{'first_name'|translate}}</th>\n       </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-std>\n       <tr>\n          <td>{{std.lastName}}</td>\n          <td>{{std.firstName}}</td>\n       </tr>\n    </ng-template>\n    <ng-template pTemplate=\"emptymessage\" >\n      <tr>\n          <td [attr.colspan]=\"2\">\n              Aucun eleve dans cette classe \n          </td>\n      </tr>\n  </ng-template>\n    </p-table>\n    </p-dialog>\n  </p-card>\n\n\n\n\n\n\n    <!-- <button type=\"button\" (click)=\"saveClassRoom()\" class=\"btn btn-primary\" >\n     save classroom \n     </button>\n    <button type=\"button\" (click)=\" createuser2()\" class=\"btn btn-primary\" >\n        creat user with token\n    </button>\n    \n    <button type=\"button\" (click)=\" createuser1()\" class=\"btn btn-primary\" >\n        creat user without token\n    </button>\n    \n     <p-messages [(value)]=\"msgs\"></p-messages>\n   <p-card>\n      <p-table [value]=\"classes\" >\n          <ng-template pTemplate=\"header\">\n              <tr>\n                  <th>Id</th>\n                  <th>Name</th>\n           \n              </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-cls>\n              <tr>\n                  <td>{{cls.id}}</td>\n                  <td>{{cls.classeName}}</td>\n         \n              </tr>\n          </ng-template>\n       \n        </p-table>\n</p-card> -->\n"

/***/ }),

/***/ "./src/app/pages/classes/classes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/classes/classes.component.ts ***!
  \****************************************************/
/*! exports provided: ClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassesComponent", function() { return ClassesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sevices_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sevices/api.service */ "./src/app/sevices/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Models_professeur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/professeur */ "./src/app/Models/professeur.ts");
/* harmony import */ var src_app_Models_professeur_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/professeur-result */ "./src/app/Models/professeur-result.ts");
/* harmony import */ var src_app_Models_classe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/classe */ "./src/app/Models/classe.ts");
/* harmony import */ var src_app_Models_class_result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Models/class-result */ "./src/app/Models/class-result.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_Models_eleve__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Models/eleve */ "./src/app/Models/eleve.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
//import {ModalDirective} from 'angular-bootstrap-md';
var ClassesComponent = /** @class */ (function () {
    function ClassesComponent(apiService, formBuilder, router, messageService, confirmationService, translate, cd) {
        var _this = this;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.translate = translate;
        this.cd = cd;
        // @ViewChild(ModalDirective) modal: ModalDirective;
        this.classes = [];
        this.index = 0;
        this.profs = [];
        this.display = false;
        this.displayStudent = false;
        this.matieres = [];
        this.selectedMatieres = [];
        this.showIndicator = true;
        this.msgs = [];
        this.students = [];
        this.displayStd = false;
        this.listProfResult = [];
        this.mat_proflist = [];
        this.professeurList = [];
        this.filteredValue = [];
        this.valueSource = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.query = '';
        this.router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationStart"]) {
                _this.showIndicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]) {
                setTimeout(function () {
                    _this.showIndicator = false;
                }, 500);
            }
        });
    }
    ClassesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getClasses1().subscribe(function (data) {
            _this.classes = data;
            console.log(' length :' + _this.classes.length);
        }, function (erreur) { });
        this.apiService.getSubjects().subscribe(function (data) {
            _this.matieres = data;
        }, function (erreur) { });
    };
    ClassesComponent.prototype.onTabClose = function (event, index) { };
    ClassesComponent.prototype.onTabOpen = function (event, index) {
        if (this.classes[index].listProfMatiere.length > 0) {
            this.professeurList = this.classes[index].listProfMatiere;
        }
    };
    ClassesComponent.prototype.showDialog = function () {
        this.display = true;
    };
    ClassesComponent.prototype.confirm = function (cls) {
        var _this = this;
        var message;
        this.translate.get('confirm_msg').subscribe(function (msg) {
            message = msg;
        });
        this.confirmationService.confirm({
            message: message,
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            accept: function () {
                _this.deleteClassroom(cls.classe.id);
                _this.msgs = [{ severity: 'info', summary: 'Confirmed : ', detail: 'Classeroom deleted' }];
            }
        });
    };
    ClassesComponent.prototype.deleteClassroom = function (id) {
        var _this = this;
        this.apiService.removeClassroom(id).subscribe(function (data) {
            _this.classes = data;
        }, function (error) {
        });
    };
    ClassesComponent.prototype.saveClassRoom = function () {
        var _this = this;
        this.apiService.saveClasse(this.createClassResults()).subscribe(function (data2) {
            _this.classes = data2;
            _this.display = false;
            _this.msgs = [];
            _this.msgs.push({ severity: 'success', summary: 'Success :', detail: 'classroom saved' });
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: 'Error :', detail: error.error.message });
            _this.display = false;
        });
    };
    ClassesComponent.prototype.createClassResults = function () {
        var prof;
        var profResult;
        var ProfesseurResults = [];
        var classe;
        var classResult;
        prof = new src_app_Models_professeur__WEBPACK_IMPORTED_MODULE_3__["Professeur"](null, this.lastName, this.firstName);
        profResult = new src_app_Models_professeur_result__WEBPACK_IMPORTED_MODULE_4__["ProfesseurResult"](prof, this.selectedMatieres);
        ProfesseurResults.push(profResult);
        classe = new src_app_Models_classe__WEBPACK_IMPORTED_MODULE_5__["Classe"](null, this.classeName);
        classResult = new src_app_Models_class_result__WEBPACK_IMPORTED_MODULE_6__["ClassResult"](classe, ProfesseurResults);
        return classResult;
    };
    ClassesComponent.prototype.getStudents = function (cls) {
        this.students = cls.classe.eleves;
        this.displayStd = true;
    };
    ClassesComponent.prototype.subscripeStudent = function (cls) {
        this.displayStudent = true;
        this.idClasseroom = cls.classe.id;
    };
    ClassesComponent.prototype.addStudentToClassroom = function () {
        var _this = this;
        var elv = new src_app_Models_eleve__WEBPACK_IMPORTED_MODULE_11__["Eleve"](null, this.stdFirstName, this.stdLastName);
        this.apiService.saveStudentToClassroom(this.idClasseroom, elv).subscribe(function (value) {
            _this.classes = value;
            _this.msgs = [];
            _this.msgs.push({ severity: 'success', summary: 'Success:', detail: 'Student saved' });
            _this.displayStudent = false;
        }, function (error) { });
    };
    ClassesComponent.prototype.grouProfBySubject = function (data) {
        var listProfesseurResult = [];
        var isPresent;
        for (var i = 0; i < data.length; i++) {
            isPresent = false;
            for (var j = 0; j < listProfesseurResult.length; j++) {
                if (listProfesseurResult[j].professeur.id == data[i].matProf_prof.id) {
                    isPresent = true;
                    var matlist = [];
                    matlist = listProfesseurResult[j].getMat();
                    matlist.push(data[i].matProf_mat);
                    var pr = new src_app_Models_professeur_result__WEBPACK_IMPORTED_MODULE_4__["ProfesseurResult"](listProfesseurResult[j].professeur, matlist);
                    listProfesseurResult.splice(j, 1, pr);
                }
            }
            if (isPresent == false) {
                var listMat = [];
                var professeurResult = void 0;
                listMat.push(data[i].matProf_mat);
                professeurResult = new src_app_Models_professeur_result__WEBPACK_IMPORTED_MODULE_4__["ProfesseurResult"](data[i].matProf_prof, listMat);
                listProfesseurResult.push(professeurResult);
            }
        }
        return listProfesseurResult;
    };
    ClassesComponent.prototype.isProfPresent = function (prof, profListResult) {
        for (var _i = 0, profListResult_1 = profListResult; _i < profListResult_1.length; _i++) {
            var profR = profListResult_1[_i];
            if (profR.professeur == prof) {
                return true;
            }
        }
        return false;
    };
    ClassesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-classes',
            template: __webpack_require__(/*! ./classes.component.html */ "./src/app/pages/classes/classes.component.html"),
            providers: [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./classes.component.css */ "./src/app/pages/classes/classes.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_sevices_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ClassesComponent);
    return ClassesComponent;
}());



/***/ }),

/***/ "./src/app/pages/navigation-bar/navigation-bar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/navigation-bar/navigation-bar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-items {\r\n    list-style: none;\r\n    margin: 0;\r\n    flex-direction: row;\r\n    box-sizing: border-box;\r\n    display: flex;\r\n  }\r\n  .crm-navigation-bar{\r\n    background: #333333;\r\n  }\r\n  .tool{\r\n  flex-direction: row;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  place-content: stretch flex-end;\r\n  align-items: stretch;\r\n  flex: 1 1 0%;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0VBQ2Y7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUVBO0VBQ0EsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24taXRlbXMge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmNybS1uYXZpZ2F0aW9uLWJhcntcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29se1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBsYWNlLWNvbnRlbnQ6IHN0cmV0Y2ggZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgZmxleDogMSAxIDAlO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/pages/navigation-bar/navigation-bar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/navigation-bar/navigation-bar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\" class=\"crm-navigation-bar\">\n\n  <mat-toolbar-row >\n\n    <button mat-icon-button (click)=\"toggleSidenav.emit()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>{{'scool'|translate}} </span>\n    <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" class=\"tool\">\n\n      <ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\n\n    \n           <li >\n\n\n              <div class=\"dropdown\">\n                  <button style=\"color: white;\" class=\"btn btn-xs dropdown-toggle\" type=\"button\"  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            \n                  <span  *ngIf=\"selectedLanguage==='fr'\">    <img src=\"assets/fr.jpg\" width=\"16\" height=\"16\"> {{'fr' | translate}} </span>   \n                  <span class=\"toolbar-title\" *ngIf=\"selectedLanguage==='en'\">    <img src=\"assets/en.jpg\" width=\"16\" height=\"16\"> {{'en'| translate}} </span>  \n                  </button>\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\n                    <button class=\"dropdown-item\" type=\"button\" (click)=\"selectFr()\"> <img src=\"assets/fr.jpg\" width=\"16\" height=\"16\"> {{'fr' | translate}}</button>\n                    <button class=\"dropdown-item\" type=\"button\"(click)=\"selectEn()\"><img src=\"assets/en.jpg\" width=\"16\" height=\"16\"> {{'en' | translate}}</button>\n                 </div>\n                </div>\n\n          \n<!-- <p-dropdown [options]=\"languages\" [(ngModel)]=\"selectedLanguage\" editable=\"true\" placeholder=\"{{'select_lang'|translate}}\"\n(onChange)=\"chooseLanguage()\"\n\n></p-dropdown> -->\n\n           </li>\n  \n  \n        <li >\n         <button mat-icon-button>\n            <mat-icon>help_outline</mat-icon>\n          </button>\n        </li>\n        <li >\n          <button mat-icon-button [matMenuTriggerFor]=\"auth\">\n            <mat-icon>person_outline</mat-icon>\n          </button>\n          <mat-menu #auth=\"matMenu\">\n            <button mat-menu-item (click)=\"logout()\">\n              <mat-icon>exit_to_app</mat-icon>\n              <span>Sign out</span>\n            </button>\n          </mat-menu>\n        </li>\n      </ul> \n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/pages/navigation-bar/navigation-bar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/navigation-bar/navigation-bar.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(router) {
        this.router = router;
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedLanguage = 'fr';
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
        //this.rate.emit(this.selectedLanguage);
        this.languages = [
            { label: 'fr', value: 'fr' },
            { label: 'en', value: 'en' }
        ];
    };
    NavigationBarComponent.prototype.logout = function () {
        console.log('log-out');
        window.sessionStorage.removeItem('token');
        this.router.navigate(['login']);
    };
    NavigationBarComponent.prototype.selectFr = function () {
        this.selectedLanguage = 'fr';
        this.rate.emit(this.selectedLanguage);
    };
    NavigationBarComponent.prototype.selectEn = function () {
        this.selectedLanguage = 'en';
        this.rate.emit(this.selectedLanguage);
    };
    NavigationBarComponent.prototype.chooseLanguage = function () {
        this.rate.emit(this.selectedLanguage);
        console.log('choose : ' + this.selectedLanguage);
        if (this.selectedLanguage == 'Français') {
            console.log('Français is selected');
        }
        if (this.selectedLanguage == 'Anglais') {
            console.log('Anglais is selected');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavigationBarComponent.prototype, "toggleSidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavigationBarComponent.prototype, "rate", void 0);
    NavigationBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'crm-navigation-bar',
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/pages/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.css */ "./src/app/pages/navigation-bar/navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _classes_classes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/classes.component */ "./src/app/pages/classes/classes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [
            {
                path: 'rooms',
                component: _classes_classes_component__WEBPACK_IMPORTED_MODULE_3__["ClassesComponent"]
            }
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.css":
/*!*******************************************!*\
  !*** ./src/app/pages/pages.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* html, body, material-app, mat-sidenav-container {\r\n  height: 100%;\r\n  width: 100%;\r\n  margin: 0;\r\n} */\r\n/* html, body {\r\n  height: 100vh;\r\n} */\r\n/* // https://material.angular.io/guide/theming-your-components */\r\n/*\r\n\r\n.sidenav-container {\r\n  height: 100%;\r\n}\r\n*/\r\n/* // https://github.com/angular/material2/blob/master/src/lib/core/style/_variables.scss */\r\n/* $sidenav-width: 320px; // 240px;\r\n\r\n.mat-sidenav {\r\n  width: $sidenav-width;\r\n}\r\n\r\n.toolbar-title {\r\n  margin: 0 16px 0 16px;\r\n}\r\n\r\n.mat-subheader {\r\n  font-size: 18px;\r\n  font-weight: 900;\r\n}\r\n\r\n.app-nav-list-icon {\r\n  margin: 0 12px 0 12px;\r\n}\r\n\r\n\r\n.mat-sidenav-container {\r\n  height: 100%;\r\n}\r\n */\r\n/* .mat-drawer{\r\n\r\n} */\r\n/* .mat-sidenav {\r\nposition: relative;\r\n} */\r\n/* .crm-navigation-bar {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 998;\r\n} */\r\n/*\r\n\r\n.mat-sidenav-content {\r\n  overflow: hidden;\r\n}\r\n\r\n*/\r\n/*\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n*/\r\n/* .mat-sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n\r\n.sidenav-container {\r\n  height: 100%;\r\n}\r\n.mat-toolbar-row,.mat-toolbar-single-row {\r\n  height: 50px;;\r\n }\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.toolbar-title {\r\n  margin: 0 16px 0 16px;\r\n}\r\n\r\n.mat-subheader {\r\n  font-size: 18px;\r\n  font-weight: 900;\r\n}\r\n\r\n.app-nav-list-icon {\r\n  margin: 0 12px 0 12px;\r\n}\r\n.sidenav {\r\n  width: 200px;\r\n  background: red;\r\n} */\r\n/*\r\n\r\n.mat-sidenav-content {\r\n  overflow: hidden;\r\n}\r\n\r\n*/\r\n/*\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n*/\r\n/* .sidenav-container {\r\n  height: 1000px;\r\n}\r\n\r\n .mat-sidenav-content {\r\n\r\n  height:1000px;\r\n\r\n}  */\r\n/* .example-container{\r\n\r\n  height:100%;\r\n} */\r\nmat-sidenav-container {\r\n  height: calc(100vh - 64px);\r\n}\r\n/* .spinner {\r\n  border: 5px solid silver;\r\n  border-top: 5px solid #337AB7;\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  animation: spin 700ms linear infinite;\r\n  top:50%;\r\n  left:50%;\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n@keyframes spinner {\r\n  0% { transform: rotate(0deg) }\r\n  100% { transform: rotate(-360deg) }\r\n}  */\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0dBSUc7QUFDSDs7R0FFRztBQUNILGlFQUFpRTtBQUlqRTs7Ozs7Q0FLQztBQUVELDJGQUEyRjtBQUUzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF1QkU7QUFDRjs7R0FFRztBQUVIOztHQUVHO0FBRUg7Ozs7OztHQU1HO0FBRUg7Ozs7OztDQU1DO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FnQkM7QUFpQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ0c7QUFHSDs7Ozs7O0NBTUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OztDQWdCQztBQUNEOzs7Ozs7OztJQVFJO0FBRUo7OztHQUdHO0FBRUY7RUFDQywwQkFBMEI7QUFDNUI7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0lBZUkiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKiBodG1sLCBib2R5LCBtYXRlcmlhbC1hcHAsIG1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufSAqL1xyXG4vKiBodG1sLCBib2R5IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59ICovXHJcbi8qIC8vIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS90aGVtaW5nLXlvdXItY29tcG9uZW50cyAqL1xyXG5cclxuXHJcblxyXG4vKlxyXG5cclxuLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuKi9cclxuXHJcbi8qIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9ibG9iL21hc3Rlci9zcmMvbGliL2NvcmUvc3R5bGUvX3ZhcmlhYmxlcy5zY3NzICovXHJcblxyXG4vKiAkc2lkZW5hdi13aWR0aDogMzIwcHg7IC8vIDI0MHB4O1xyXG5cclxuLm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogJHNpZGVuYXYtd2lkdGg7XHJcbn1cclxuXHJcbi50b29sYmFyLXRpdGxlIHtcclxuICBtYXJnaW46IDAgMTZweCAwIDE2cHg7XHJcbn1cclxuXHJcbi5tYXQtc3ViaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLmFwcC1uYXYtbGlzdC1pY29uIHtcclxuICBtYXJnaW46IDAgMTJweCAwIDEycHg7XHJcbn1cclxuXHJcblxyXG4ubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuICovXHJcbi8qIC5tYXQtZHJhd2Vye1xyXG5cclxufSAqL1xyXG5cclxuLyogLm1hdC1zaWRlbmF2IHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG59ICovXHJcblxyXG4vKiAuY3JtLW5hdmlnYXRpb24tYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTk4O1xyXG59ICovXHJcblxyXG4vKlxyXG5cclxuLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiovXHJcblxyXG4vKlxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbiovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiAubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ubWF0LXRvb2xiYXItcm93LC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICBoZWlnaHQ6IDUwcHg7O1xyXG4gfVxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDE2cHggMCAxNnB4O1xyXG59XHJcblxyXG4ubWF0LXN1YmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5hcHAtbmF2LWxpc3QtaWNvbiB7XHJcbiAgbWFyZ2luOiAwIDEycHggMCAxMnB4O1xyXG59XHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59ICovXHJcblxyXG5cclxuLypcclxuXHJcbi5tYXQtc2lkZW5hdi1jb250ZW50IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4qL1xyXG5cclxuLypcclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4qL1xyXG4vKiAuc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwMHB4O1xyXG59XHJcblxyXG4gLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG5cclxuICBoZWlnaHQ6MTAwMHB4O1xyXG5cclxufSAgKi9cclxuXHJcbi8qIC5leGFtcGxlLWNvbnRhaW5lcntcclxuXHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn0gKi9cclxuXHJcbiBtYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG59XHJcblxyXG4vKiAuc3Bpbm5lciB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMzM3QUI3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDcwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICB0b3A6NTAlO1xyXG4gIGxlZnQ6NTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbkBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIH1cclxufSAgKi9cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<crm-navigation-bar\r\n  (toggleSidenav)=\"sidenav.toggle()\"\r\n  (rate)=\"switchLanguage($event)\"\r\n   >\r\n\r\n</crm-navigation-bar>\r\n\r\n<mat-sidenav-container class=\"example-container\" >\r\n  <mat-sidenav #sidenav mode=\"over\" \r\n             >\r\n\r\n\r\n    <mat-nav-list>\r\n\r\n      <h2 matSubheader>{{'scool'|translate}} </h2>\r\n      \r\n      <a *ngFor=\"let item of myWorkRoutes\"\r\n        mat-list-item\r\n        (click)=\"sidenav.close()\"\r\n        [routerLink]=\"[item.route]\"\r\n        routerLinkActive=\"list-item-active\">\r\n        <mat-icon matListIcon> {{ item.icon }} </mat-icon>\r\n\r\n        {{item.title|translate}} \r\n\r\n      </a>\r\n\r\n      <mat-divider></mat-divider>\r\n      <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Ecole\r\n            </mat-panel-title>\r\n     \r\n          </mat-expansion-panel-header>\r\n          <a *ngFor=\"let item of myWorkRoutes\"\r\n          mat-list-item\r\n          (click)=\"sidenav.close()\"\r\n          [routerLink]=\"[item.route]\"\r\n          routerLinkActive=\"list-item-active\">\r\n          <mat-icon matListIcon> {{ item.icon }} </mat-icon>\r\n           {{item.title|translate}} \r\n           </a>\r\n        \r\n        </mat-expansion-panel>\r\n\r\n      <h2 matSubheader> Acounts </h2>\r\n\r\n      <a *ngFor=\"let item of customerRoutes\"\r\n      mat-list-item\r\n      (click)=\"sidenav.close()\"\r\n      [routerLink]=\"[item.route]\"\r\n      routerLinkActive=\"list-item-active\">\r\n      <mat-icon matListIcon class=\"app-nav-list-icon\"> {{ item.icon }} </mat-icon>\r\n      {{item.title}} \r\n    </a>\r\n </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n      <div *ngIf=\"showIndicator\" class=\"spinner\"></div>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagesComponent = /** @class */ (function () {
    function PagesComponent(translate, router) {
        this.translate = translate;
        this.router = router;
        this.myWorkRoutes = [
            {
                icon: 'assignment',
                route: 'rooms',
                title: 'cls'
            }
        ];
        this.showIndicator = true;
        this.events = [];
        this.customerRoutes = [
            {
                icon: 'contacts',
                route: 'sales/accounts',
                title: 'Accounts',
            }, {
                icon: 'people',
                route: 'sales/contacts',
                title: 'Contacts',
            },
            {
                icon: 'account_box',
                route: 'sales/opportunities',
                title: 'Opportunities',
            }
        ];
        /*     this.router.events.subscribe((routerEvent:Event) =>
            {
           if(routerEvent instanceof NavigationStart){
           this.showIndicator=true;
          }
           if(routerEvent instanceof NavigationEnd){
            setTimeout(() => {
              this.showIndicator=false;
               }, 250);
           }
            }); */
        translate.setDefaultLang('fr');
    }
    ;
    PagesComponent.prototype.ngOnInit = function () {
        /*     this.myWorkRoutes= [
              {
                icon: 'assignment',
                route: 'classes',
                title: 'cls'
              }
            ]; */
    };
    PagesComponent.prototype.switchLanguage = function (event) {
        this.translate.use(event);
        console.log('switchLanguage  :  ' + event);
    };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.css */ "./src/app/pages/pages.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "./src/app/pages/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _classes_classes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/classes.component */ "./src/app/pages/classes/classes.component.ts");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/listbox */ "./node_modules/primeng/listbox.js");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_listbox__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _pipes_extract__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pipes/extract */ "./src/app/pipes/extract.ts");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/dynamicdialog.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _pipes_StartsWith__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../pipes/StartsWith */ "./src/app/pipes/StartsWith.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavigationBarComponent"],
                _classes_classes_component__WEBPACK_IMPORTED_MODULE_6__["ClassesComponent"], _pipes_extract__WEBPACK_IMPORTED_MODULE_20__["Extract"], _pipes_StartsWith__WEBPACK_IMPORTED_MODULE_25__["StartsWithPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
                primeng_listbox__WEBPACK_IMPORTED_MODULE_15__["ListboxModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_16__["FileUploadModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_18__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_19__["MessageModule"],
                primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_21__["DynamicDialogModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_22__["ConfirmDialogModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_24__["CardModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                    }
                })
            ],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_23__["ConfirmationService"]]
        })
    ], PagesModule);
    return PagesModule;
}());

function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](httpClient, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/pipes/StartsWith.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/StartsWith.ts ***!
  \*************************************/
/*! exports provided: StartsWithPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartsWithPipe", function() { return StartsWithPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StartsWithPipe = /** @class */ (function () {
    function StartsWithPipe() {
    }
    StartsWithPipe.prototype.transform = function (value, term) {
        var nom = "3°A";
        console.log('term : ' + term);
        console.log('startsWith : ' + nom.toLowerCase().startsWith(term.toLowerCase()));
        console.log('value : ' + JSON.stringify(value.filter(function (x) { return x.classe.nom.toLowerCase().startsWith(term.toLowerCase()); })));
        return value.filter(function (x) { return x.classe.nom.toLowerCase().startsWith(term.toLowerCase()); });
    };
    StartsWithPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'StartsWith' })
    ], StartsWithPipe);
    return StartsWithPipe;
}());



/***/ }),

/***/ "./src/app/pipes/extract.ts":
/*!**********************************!*\
  !*** ./src/app/pipes/extract.ts ***!
  \**********************************/
/*! exports provided: Extract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Extract", function() { return Extract; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Extract = /** @class */ (function () {
    function Extract() {
    }
    Extract.prototype.transform = function (base) {
        return base.slice(0, 3);
    };
    Extract = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'extract'
        })
    ], Extract);
    return Extract;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map