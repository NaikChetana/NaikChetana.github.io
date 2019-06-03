(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- <form> -->\r\n    <br />\r\n    <div class=\"form-group\">\r\n      <textarea appMarkDown [plainText]=\"textInput\" class=\"form-control\" id=\"textInput\" rows=\"3\" placeholder=\"Type something!\"\r\n      (input)=\"onTextChange($event)\" (output)=\"handleOutput($event)\"></textarea>\r\n    </div>\r\n    <br />\r\n    <div class=\"form-group\">\r\n      <!-- <textarea class=\"form-control\" id=\"textOutput\" rows=\"3\" placeholder=\"Type something!\" value={{textOutput}} readonly>  \r\n      </textarea> -->\r\n      <div class=\"card\">\r\n        <div class=\"card-body\" [innerHTML]=\"textOutput\">\r\n\r\n        </div>\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li class=\"list-group-item\" >Preview</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  <!-- </form> -->\r\n  \r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.textInput = '';
        this.textOutput = '';
    }
    AppComponent.prototype.onTextChange = function (event) {
        this.textInput = event.target.value;
    };
    AppComponent.prototype.handleOutput = function (event) {
        this.textOutput = event;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _directives_mark_down_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/mark-down.directive */ "./src/app/directives/mark-down.directive.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _directives_mark_down_directive__WEBPACK_IMPORTED_MODULE_5__["MarkDownDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/mark-down.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/mark-down.directive.ts ***!
  \***************************************************/
/*! exports provided: MarkDownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkDownDirective", function() { return MarkDownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MarkDownDirective = /** @class */ (function () {
    function MarkDownDirective(el, renderer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log(this.el.nativeElement);
        // <div>
        var div = document.createElement("DIV");
        div.className = "card";
        // <ul>
        var ul = document.createElement("UL");
        ul.classList.add("list-group", "list-group-flush");
        // <div>
        //    <ul>
        div.appendChild(ul);
        // <li>
        var li = document.createElement("LI");
        li.className = "list-group-item";
        // <div>
        //    <ul>
        //       <li>
        ul.appendChild(li);
        // Bold button
        var bold = document.createElement("BUTTON");
        bold.setAttribute('id', 'bold');
        bold.classList.add("btn", "btn-light");
        li.appendChild(bold);
        bold.addEventListener('click', function () { _this.insertMarkup('bold'); });
        // B Icon
        var bold_icon = document.createElement("I");
        bold_icon.classList.add("fas", "fa-bold");
        bold.appendChild(bold_icon);
        // Italics button
        var italics = document.createElement("BUTTON");
        italics.setAttribute('id', 'italics');
        italics.classList.add("btn", "btn-light");
        li.appendChild(italics);
        italics.addEventListener('click', function () { _this.insertMarkup('italics'); });
        // I Icon
        var italics_icon = document.createElement("I");
        italics_icon.classList.add("fas", "fa-italic");
        italics.appendChild(italics_icon);
        // URL button
        var url = document.createElement("BUTTON");
        url.setAttribute('id', 'url');
        url.classList.add("btn", "btn-light");
        li.appendChild(url);
        url.addEventListener('click', function () { _this.insertMarkup('url'); });
        // url Icon
        var url_icon = document.createElement("I");
        url_icon.classList.add("fas", "fa-link");
        url.appendChild(url_icon);
        this.renderer.insertBefore(this.el.nativeElement.parentNode, div, this.el.nativeElement.nextSibling);
    }
    MarkDownDirective.prototype.ngOnChanges = function (change) {
        if (change.plainText) {
            this.el.nativeElement.value = this.plainText;
            this.markup(this.plainText);
        }
    };
    MarkDownDirective.prototype.markup = function (newtext) {
        var text = newtext;
        var boldMatch = new RegExp("\\*\\*([a-zA-Z0-9_\\-\\. ]+)\\*\\*");
        var italicsMatch = new RegExp("\\/\\/([a-zA-Z0-9_\\-\\. ]+)\\/\\/");
        var urlMatch = new RegExp("\\[\\[([a-zA-Z0-9_\\-\\.\\/\\: ]+)\\|([a-zA-Z0-9_\\-\\. \\!]+)\\]\\]");
        var result;
        while ((result = boldMatch.exec(text)) && result !== null) {
            text = text.replace(boldMatch, result[1].bold());
        }
        while ((result = italicsMatch.exec(text)) && result !== null) {
            text = text.replace(italicsMatch, result[1].italics());
        }
        while ((result = urlMatch.exec(text)) && result !== null) {
            text = text.replace(urlMatch, result[2].link(result[1]));
            console.log(result);
        }
        this.output.emit(text);
    };
    MarkDownDirective.prototype.insertMarkup = function (type) {
        // cursor start location
        var start = this.el.nativeElement.selectionStart;
        // cursor end location
        var end = this.el.nativeElement.selectionEnd;
        // entire text content
        var text = this.el.nativeElement.value;
        var before = text.substring(0, start);
        var after = text.substring(end, text.length);
        var newText = '';
        switch (type) {
            case 'bold':
                newText = "**text**";
                break;
            case 'italics':
                newText = "//text//";
                break;
            case 'url':
                newText = "[[url|name]]";
                break;
        }
        this.el.nativeElement.value = before + newText + after;
        this.el.nativeElement.selectionStart = start + 2;
        this.el.nativeElement.selectionEnd = start + newText.length - 2;
        this.el.nativeElement.focus();
        this.markup(this.el.nativeElement.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MarkDownDirective.prototype, "plainText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MarkDownDirective.prototype, "output", void 0);
    MarkDownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appMarkDown]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], MarkDownDirective);
    return MarkDownDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\Angular-markup-editor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map