/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/latest-updates/route";
exports.ids = ["app/api/latest-updates/route"];
exports.modules = {

/***/ "(rsc)/./app/api/latest-updates/route.js":
/*!*****************************************!*\
  !*** ./app/api/latest-updates/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.js\");\n// app/api/latest-updates/route.ts\n\n\n\nasync function GET() {\n    const clerkUserDetails = await (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_2__.auth)();\n    if (!clerkUserDetails.userId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.db.user.findUnique({\n        where: {\n            clerkUserId: clerkUserDetails.userId\n        }\n    });\n    if (!user) {\n        user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.db.user.create({\n            data: {\n                clerkUserId: clerkUserDetails.userId,\n                email: \"user@example.com\"\n            }\n        });\n        console.log(\"User created:\", user);\n    } else {\n        console.log(\"User already exists:\", user);\n    }\n    const now = new Date();\n    const upcomingMeetings = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.db.booking.findMany({\n        where: {\n            userId: user.id,\n            startTime: {\n                gte: now\n            }\n        },\n        include: {\n            event: {\n                select: {\n                    title: true\n                }\n            }\n        },\n        orderBy: {\n            startTime: \"asc\"\n        },\n        take: 3\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(upcomingMeetings);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xhdGVzdC11cGRhdGVzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxrQ0FBa0M7QUFDUztBQUNDO0FBQ1Y7QUFFM0IsZUFBZUc7SUFDcEIsTUFBTUMsbUJBQW1CLE1BQU1ILDBEQUFJQTtJQUVuQyxJQUFJLENBQUNHLGlCQUFpQkMsTUFBTSxFQUFFO1FBQzVCLE9BQU9MLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3BFO0lBRUEsTUFBTUMsT0FBTyxNQUFNUCwyQ0FBRUEsQ0FBQ08sSUFBSSxDQUFDQyxVQUFVLENBQUM7UUFDcENDLE9BQU87WUFBRUMsYUFBYVIsaUJBQWlCQyxNQUFNO1FBQUM7SUFDaEQ7SUFFQSxJQUFJLENBQUNJLE1BQU07UUFDVEEsT0FBTyxNQUFNUCwyQ0FBRUEsQ0FBQ08sSUFBSSxDQUFDSSxNQUFNLENBQUM7WUFDMUJDLE1BQU07Z0JBQ0pGLGFBQWFSLGlCQUFpQkMsTUFBTTtnQkFDcENVLE9BQU87WUFDVDtRQUNGO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJSO0lBQy9CLE9BQU87UUFDTE8sUUFBUUMsR0FBRyxDQUFDLHdCQUF3QlI7SUFDdEM7SUFFQSxNQUFNUyxNQUFNLElBQUlDO0lBRWhCLE1BQU1DLG1CQUFtQixNQUFNbEIsMkNBQUVBLENBQUNtQixPQUFPLENBQUNDLFFBQVEsQ0FBQztRQUNqRFgsT0FBTztZQUNMTixRQUFRSSxLQUFLYyxFQUFFO1lBQ2ZDLFdBQVc7Z0JBQUVDLEtBQUtQO1lBQUk7UUFDeEI7UUFDQVEsU0FBUztZQUNQQyxPQUFPO2dCQUNMQyxRQUFRO29CQUNOQyxPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtRQUNBQyxTQUFTO1lBQ1BOLFdBQVc7UUFDYjtRQUNBTyxNQUFNO0lBQ1I7SUFFQSxPQUFPL0IscURBQVlBLENBQUNNLElBQUksQ0FBQ2M7QUFDM0IiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGVsbFxcRGVza3RvcFxcbWVldHdheVxcQXJjaGl2ZVxcYXBwXFxhcGlcXGxhdGVzdC11cGRhdGVzXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYXBpL2xhdGVzdC11cGRhdGVzL3JvdXRlLnRzXHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBjb25zdCBjbGVya1VzZXJEZXRhaWxzID0gYXdhaXQgYXV0aCgpO1xyXG5cclxuICBpZiAoIWNsZXJrVXNlckRldGFpbHMudXNlcklkKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBjbGVya1VzZXJJZDogY2xlcmtVc2VyRGV0YWlscy51c2VySWQgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICB1c2VyID0gYXdhaXQgZGIudXNlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IGNsZXJrVXNlckRldGFpbHMudXNlcklkLCAvLyBTdG9yZSBDbGVyaydzIHVzZXJJZFxyXG4gICAgICAgIGVtYWlsOiBcInVzZXJAZXhhbXBsZS5jb21cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJVc2VyIGNyZWF0ZWQ6XCIsIHVzZXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlVzZXIgYWxyZWFkeSBleGlzdHM6XCIsIHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgY29uc3QgdXBjb21pbmdNZWV0aW5ncyA9IGF3YWl0IGRiLmJvb2tpbmcuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICBzdGFydFRpbWU6IHsgZ3RlOiBub3cgfSxcclxuICAgIH0sXHJcbiAgICBpbmNsdWRlOiB7XHJcbiAgICAgIGV2ZW50OiB7XHJcbiAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICB0aXRsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG9yZGVyQnk6IHtcclxuICAgICAgc3RhcnRUaW1lOiBcImFzY1wiLFxyXG4gICAgfSxcclxuICAgIHRha2U6IDMsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1cGNvbWluZ01lZXRpbmdzKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiYXV0aCIsImRiIiwiR0VUIiwiY2xlcmtVc2VyRGV0YWlscyIsInVzZXJJZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjbGVya1VzZXJJZCIsImNyZWF0ZSIsImRhdGEiLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJub3ciLCJEYXRlIiwidXBjb21pbmdNZWV0aW5ncyIsImJvb2tpbmciLCJmaW5kTWFueSIsImlkIiwic3RhcnRUaW1lIiwiZ3RlIiwiaW5jbHVkZSIsImV2ZW50Iiwic2VsZWN0IiwidGl0bGUiLCJvcmRlckJ5IiwidGFrZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/latest-updates/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) {\n    globalThis.prisma = db;\n} // globalThis.prisma: This global variable ensures that the Prisma client instance is reused across hot reloads during development. Without this, each time your application reloads, a new instance of the Prisma client would be created, potentially leading to connection issues.\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxNQUFNQyxLQUFLQyxXQUFXQyxNQUFNLElBQUksSUFBSUgsd0RBQVlBLEdBQUc7QUFFMUQsSUFBSUksSUFBcUMsRUFBRTtJQUN6Q0YsV0FBV0MsTUFBTSxHQUFHRjtBQUN0QixFQUVBLHFSQUFxUiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxEZWxsXFxEZXNrdG9wXFxtZWV0d2F5XFxBcmNoaXZlXFxsaWJcXHByaXNtYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IGRiID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGdsb2JhbFRoaXMucHJpc21hID0gZGI7XG59XG5cbi8vIGdsb2JhbFRoaXMucHJpc21hOiBUaGlzIGdsb2JhbCB2YXJpYWJsZSBlbnN1cmVzIHRoYXQgdGhlIFByaXNtYSBjbGllbnQgaW5zdGFuY2UgaXMgcmV1c2VkIGFjcm9zcyBob3QgcmVsb2FkcyBkdXJpbmcgZGV2ZWxvcG1lbnQuIFdpdGhvdXQgdGhpcywgZWFjaCB0aW1lIHlvdXIgYXBwbGljYXRpb24gcmVsb2FkcywgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFByaXNtYSBjbGllbnQgd291bGQgYmUgY3JlYXRlZCwgcG90ZW50aWFsbHkgbGVhZGluZyB0byBjb25uZWN0aW9uIGlzc3Vlcy5cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJkYiIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flatest-updates%2Froute&page=%2Fapi%2Flatest-updates%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flatest-updates%2Froute.js&appDir=C%3A%5CUsers%5CDell%5CDesktop%5Cmeetway%5CArchive%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDell%5CDesktop%5Cmeetway%5CArchive&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flatest-updates%2Froute&page=%2Fapi%2Flatest-updates%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flatest-updates%2Froute.js&appDir=C%3A%5CUsers%5CDell%5CDesktop%5Cmeetway%5CArchive%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDell%5CDesktop%5Cmeetway%5CArchive&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Dell_Desktop_meetway_Archive_app_api_latest_updates_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/latest-updates/route.js */ \"(rsc)/./app/api/latest-updates/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/latest-updates/route\",\n        pathname: \"/api/latest-updates\",\n        filename: \"route\",\n        bundlePath: \"app/api/latest-updates/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\meetway\\\\Archive\\\\app\\\\api\\\\latest-updates\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Dell_Desktop_meetway_Archive_app_api_latest_updates_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsYXRlc3QtdXBkYXRlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbGF0ZXN0LXVwZGF0ZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsYXRlc3QtdXBkYXRlcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNEZWxsJTVDRGVza3RvcCU1Q21lZXR3YXklNUNBcmNoaXZlJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNEZWxsJTVDRGVza3RvcCU1Q21lZXR3YXklNUNBcmNoaXZlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM4QjtBQUMzRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRGVsbFxcXFxEZXNrdG9wXFxcXG1lZXR3YXlcXFxcQXJjaGl2ZVxcXFxhcHBcXFxcYXBpXFxcXGxhdGVzdC11cGRhdGVzXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sYXRlc3QtdXBkYXRlcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xhdGVzdC11cGRhdGVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9sYXRlc3QtdXBkYXRlcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXERlbGxcXFxcRGVza3RvcFxcXFxtZWV0d2F5XFxcXEFyY2hpdmVcXFxcYXBwXFxcXGFwaVxcXFxsYXRlc3QtdXBkYXRlc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flatest-updates%2Froute&page=%2Fapi%2Flatest-updates%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flatest-updates%2Froute.js&appDir=C%3A%5CUsers%5CDell%5CDesktop%5Cmeetway%5CArchive%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDell%5CDesktop%5Cmeetway%5CArchive&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@clerk","vendor-chunks/next","vendor-chunks/tslib","vendor-chunks/cookie","vendor-chunks/map-obj","vendor-chunks/no-case","vendor-chunks/lower-case","vendor-chunks/snakecase-keys","vendor-chunks/snake-case","vendor-chunks/dot-case"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flatest-updates%2Froute&page=%2Fapi%2Flatest-updates%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flatest-updates%2Froute.js&appDir=C%3A%5CUsers%5CDell%5CDesktop%5Cmeetway%5CArchive%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDell%5CDesktop%5Cmeetway%5CArchive&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();