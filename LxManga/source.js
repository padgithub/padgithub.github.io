(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeColor = void 0;
var BadgeColor;
(function (BadgeColor) {
    BadgeColor["BLUE"] = "default";
    BadgeColor["GREEN"] = "success";
    BadgeColor["GREY"] = "info";
    BadgeColor["YELLOW"] = "warning";
    BadgeColor["RED"] = "danger";
})(BadgeColor = exports.BadgeColor || (exports.BadgeColor = {}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],5:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
/**
* @deprecated Use {@link PaperbackExtensionBase}
*/
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = exports.SourceIntents = void 0;
var SourceIntents;
(function (SourceIntents) {
    SourceIntents[SourceIntents["MANGA_CHAPTERS"] = 1] = "MANGA_CHAPTERS";
    SourceIntents[SourceIntents["MANGA_TRACKING"] = 2] = "MANGA_TRACKING";
    SourceIntents[SourceIntents["HOMEPAGE_SECTIONS"] = 4] = "HOMEPAGE_SECTIONS";
    SourceIntents[SourceIntents["COLLECTION_MANAGEMENT"] = 8] = "COLLECTION_MANAGEMENT";
    SourceIntents[SourceIntents["CLOUDFLARE_BYPASS_REQUIRED"] = 16] = "CLOUDFLARE_BYPASS_REQUIRED";
    SourceIntents[SourceIntents["SETTINGS_UI"] = 32] = "SETTINGS_UI";
})(SourceIntents = exports.SourceIntents || (exports.SourceIntents = {}));
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],7:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./ByteArray"), exports);
__exportStar(require("./Badge"), exports);
__exportStar(require("./interfaces"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./HomeSectionType"), exports);
__exportStar(require("./PaperbackExtensionBase"), exports);

},{"./Badge":1,"./ByteArray":2,"./HomeSectionType":3,"./PaperbackExtensionBase":4,"./Source":5,"./SourceInfo":6,"./interfaces":15}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],15:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./ChapterProviding"), exports);
__exportStar(require("./CloudflareBypassRequestProviding"), exports);
__exportStar(require("./HomePageSectionsProviding"), exports);
__exportStar(require("./MangaProgressProviding"), exports);
__exportStar(require("./MangaProviding"), exports);
__exportStar(require("./RequestManagerProviding"), exports);
__exportStar(require("./SearchResultsProviding"), exports);

},{"./ChapterProviding":8,"./CloudflareBypassRequestProviding":9,"./HomePageSectionsProviding":10,"./MangaProgressProviding":11,"./MangaProviding":12,"./RequestManagerProviding":13,"./SearchResultsProviding":14}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],60:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./DynamicUI/Exports/DUIBinding"), exports);
__exportStar(require("./DynamicUI/Exports/DUIForm"), exports);
__exportStar(require("./DynamicUI/Exports/DUIFormRow"), exports);
__exportStar(require("./DynamicUI/Exports/DUISection"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIHeader"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILink"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIMultilineLabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUINavigationButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIOAuthButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISecureInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISelect"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIStepper"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISwitch"), exports);
__exportStar(require("./Exports/ChapterDetails"), exports);
__exportStar(require("./Exports/Chapter"), exports);
__exportStar(require("./Exports/Cookie"), exports);
__exportStar(require("./Exports/HomeSection"), exports);
__exportStar(require("./Exports/IconText"), exports);
__exportStar(require("./Exports/MangaInfo"), exports);
__exportStar(require("./Exports/MangaProgress"), exports);
__exportStar(require("./Exports/PartialSourceManga"), exports);
__exportStar(require("./Exports/MangaUpdates"), exports);
__exportStar(require("./Exports/PBCanvas"), exports);
__exportStar(require("./Exports/PBImage"), exports);
__exportStar(require("./Exports/PagedResults"), exports);
__exportStar(require("./Exports/RawData"), exports);
__exportStar(require("./Exports/Request"), exports);
__exportStar(require("./Exports/SourceInterceptor"), exports);
__exportStar(require("./Exports/RequestManager"), exports);
__exportStar(require("./Exports/Response"), exports);
__exportStar(require("./Exports/SearchField"), exports);
__exportStar(require("./Exports/SearchRequest"), exports);
__exportStar(require("./Exports/SourceCookieStore"), exports);
__exportStar(require("./Exports/SourceManga"), exports);
__exportStar(require("./Exports/SecureStateManager"), exports);
__exportStar(require("./Exports/SourceStateManager"), exports);
__exportStar(require("./Exports/Tag"), exports);
__exportStar(require("./Exports/TagSection"), exports);
__exportStar(require("./Exports/TrackedMangaChapterReadAction"), exports);
__exportStar(require("./Exports/TrackerActionQueue"), exports);

},{"./DynamicUI/Exports/DUIBinding":17,"./DynamicUI/Exports/DUIForm":18,"./DynamicUI/Exports/DUIFormRow":19,"./DynamicUI/Exports/DUISection":20,"./DynamicUI/Rows/Exports/DUIButton":21,"./DynamicUI/Rows/Exports/DUIHeader":22,"./DynamicUI/Rows/Exports/DUIInputField":23,"./DynamicUI/Rows/Exports/DUILabel":24,"./DynamicUI/Rows/Exports/DUILink":25,"./DynamicUI/Rows/Exports/DUIMultilineLabel":26,"./DynamicUI/Rows/Exports/DUINavigationButton":27,"./DynamicUI/Rows/Exports/DUIOAuthButton":28,"./DynamicUI/Rows/Exports/DUISecureInputField":29,"./DynamicUI/Rows/Exports/DUISelect":30,"./DynamicUI/Rows/Exports/DUIStepper":31,"./DynamicUI/Rows/Exports/DUISwitch":32,"./Exports/Chapter":33,"./Exports/ChapterDetails":34,"./Exports/Cookie":35,"./Exports/HomeSection":36,"./Exports/IconText":37,"./Exports/MangaInfo":38,"./Exports/MangaProgress":39,"./Exports/MangaUpdates":40,"./Exports/PBCanvas":41,"./Exports/PBImage":42,"./Exports/PagedResults":43,"./Exports/PartialSourceManga":44,"./Exports/RawData":45,"./Exports/Request":46,"./Exports/RequestManager":47,"./Exports/Response":48,"./Exports/SearchField":49,"./Exports/SearchRequest":50,"./Exports/SecureStateManager":51,"./Exports/SourceCookieStore":52,"./Exports/SourceInterceptor":53,"./Exports/SourceManga":54,"./Exports/SourceStateManager":55,"./Exports/Tag":56,"./Exports/TagSection":57,"./Exports/TrackedMangaChapterReadAction":58,"./Exports/TrackerActionQueue":59}],61:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./generated/_exports"), exports);
__exportStar(require("./base/index"), exports);
__exportStar(require("./compat/DyamicUI"), exports);

},{"./base/index":7,"./compat/DyamicUI":16,"./generated/_exports":60}],62:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LxManga = exports.LxMangaInfo = void 0;
const types_1 = require("@paperback/types");
const Main_1 = require("../Main");
const HOST = 'LxManga';
const tags_json_1 = __importDefault(require("./tags.json"));
exports.LxMangaInfo = {
    description: '',
    icon: 'icon.ico',
    websiteBaseURL: '',
    version: (0, Main_1.getExportVersion)('0.0.2'),
    name: ' LxManga',
    language: 'vi',
    author: 'Hoang3409',
    contentRating: types_1.ContentRating.ADULT,
    sourceTags: [
        {
            text: '18+',
            type: types_1.BadgeColor.RED
        }
    ],
    intents: types_1.SourceIntents.HOMEPAGE_SECTIONS | types_1.SourceIntents.MANGA_CHAPTERS
};
class LxManga extends Main_1.Main {
    constructor() {
        super(...arguments);
        this.Host = HOST;
        this.Tags = tags_json_1.default;
        this.UseId = false;
        this.SearchWithGenres = true;
        this.SearchWithNotGenres = true;
        this.SearchWithTitleAndGenre = true;
        this.HostDomain = 'https://lxmanga.net/';
    }
}
exports.LxManga = LxManga;

},{"../Main":64,"./tags.json":63,"@paperback/types":61}],63:[function(require,module,exports){
module.exports=[
    {
        "Id": "1",
        "Name": "Mature",
        "Description": ""
    },
    {
        "Id": "2",
        "Name": "Manhwa",
        "Description": ""
    },
    {
        "Id": "3",
        "Name": "Group",
        "Description": ""
    },
    {
        "Id": "4",
        "Name": "Housewife",
        "Description": ""
    },
    {
        "Id": "5",
        "Name": "NTR",
        "Description": ""
    },
    {
        "Id": "6",
        "Name": "Adult",
        "Description": ""
    },
    {
        "Id": "7",
        "Name": "Series",
        "Description": ""
    },
    {
        "Id": "8",
        "Name": "Complete",
        "Description": ""
    },
    {
        "Id": "9",
        "Name": "Ngực Lớn",
        "Description": ""
    },
    {
        "Id": "10",
        "Name": "Lãng Mạn",
        "Description": ""
    },
    {
        "Id": "11",
        "Name": "Truyện Màu",
        "Description": ""
    },
    {
        "Id": "12",
        "Name": "Mind Break",
        "Description": ""
    },
    {
        "Id": "13",
        "Name": "Mắt Kính",
        "Description": ""
    },
    {
        "Id": "14",
        "Name": "Ngực Nhỏ",
        "Description": ""
    },
    {
        "Id": "15",
        "Name": "Fantasy",
        "Description": ""
    },
    {
        "Id": "16",
        "Name": "Ecchi",
        "Description": ""
    },
    {
        "Id": "17",
        "Name": "Bạo Dâm",
        "Description": ""
    },
    {
        "Id": "18",
        "Name": "Harem",
        "Description": ""
    },
    {
        "Id": "19",
        "Name": "Hài Hước",
        "Description": ""
    },
    {
        "Id": "20",
        "Name": "Cosplay",
        "Description": ""
    },
    {
        "Id": "21",
        "Name": "Hầu Gái",
        "Description": ""
    },
    {
        "Id": "22",
        "Name": "Loli",
        "Description": ""
    },
    {
        "Id": "23",
        "Name": "Shota",
        "Description": ""
    },
    {
        "Id": "24",
        "Name": "Gangbang",
        "Description": ""
    },
    {
        "Id": "25",
        "Name": "Doujinshi",
        "Description": ""
    },
    {
        "Id": "26",
        "Name": "Guro",
        "Description": ""
    },
    {
        "Id": "27",
        "Name": "Virgin",
        "Description": ""
    },
    {
        "Id": "28",
        "Name": "OneShot",
        "Description": ""
    },
    {
        "Id": "29",
        "Name": "Chơi Hai Lỗ",
        "Description": ""
    },
    {
        "Id": "30",
        "Name": "Hậu Môn",
        "Description": ""
    },
    {
        "Id": "31",
        "Name": "Nữ Sinh",
        "Description": ""
    },
    {
        "Id": "32",
        "Name": "Mang Thai",
        "Description": ""
    },
    {
        "Id": "33",
        "Name": "Giáo Viên",
        "Description": ""
    },
    {
        "Id": "34",
        "Name": "Loạn Luân",
        "Description": ""
    },
    {
        "Id": "35",
        "Name": "Truyện Không Che",
        "Description": ""
    },
    {
        "Id": "36",
        "Name": "Futanari",
        "Description": ""
    },
    {
        "Id": "37",
        "Name": "Yuri",
        "Description": ""
    },
    {
        "Id": "38",
        "Name": "Nô Lệ",
        "Description": ""
    },
    {
        "Id": "39",
        "Name": "Đồ Bơi",
        "Description": ""
    },
    {
        "Id": "40",
        "Name": "Thể Thao",
        "Description": ""
    },
    {
        "Id": "41",
        "Name": "Truyện Ngắn",
        "Description": ""
    },
    {
        "Id": "42",
        "Name": "Lão Gìa Dâm",
        "Description": ""
    },
    {
        "Id": "43",
        "Name": "Hãm Hiếp",
        "Description": ""
    },
    {
        "Id": "44",
        "Name": "Monster Girl",
        "Description": ""
    },
    {
        "Id": "45",
        "Name": "Y Tá",
        "Description": ""
    },
    {
        "Id": "46",
        "Name": "Supernatural",
        "Description": ""
    },
    {
        "Id": "47",
        "Name": "3D",
        "Description": ""
    },
    {
        "Id": "48",
        "Name": "Truyện Comic",
        "Description": ""
    },
    {
        "Id": "49",
        "Name": "Animal girl",
        "Description": ""
    },
    {
        "Id": "50",
        "Name": "Thú Vật",
        "Description": ""
    },
    {
        "Id": "51",
        "Name": "Kinh Dị",
        "Description": ""
    },
    {
        "Id": "52",
        "Name": "Quái Vật",
        "Description": ""
    },
    {
        "Id": "53",
        "Name": "Xúc Tua",
        "Description": ""
    },
    {
        "Id": "54",
        "Name": "Gender Bender",
        "Description": ""
    },
    {
        "Id": "55",
        "Name": "Yaoi",
        "Description": ""
    },
    {
        "Id": "56",
        "Name": "CG",
        "Description": ""
    },
    {
        "Id": "57",
        "Name": "Trap",
        "Description": ""
    },
    {
        "Id": "58",
        "Name": "Furry",
        "Description": ""
    },
    {
        "Id": "59",
        "Name": "Mind Control",
        "Description": ""
    },
    {
        "Id": "60",
        "Name": "Elf",
        "Description": ""
    },
    {
        "Id": "61",
        "Name": "Côn Trùng",
        "Description": ""
    },
    {
        "Id": "62",
        "Name": "Kogal",
        "Description": ""
    },
    {
        "Id": "63",
        "Name": "Artist",
        "Description": ""
    },
    {
        "Id": "64",
        "Name": "Scat",
        "Description": ""
    },
    {
        "Id": "65",
        "Name": "Milf",
        "Description": ""
    },
    {
        "Id": "66",
        "Name": "LXHENTAI",
        "Description": ""
    }
]

},{}],64:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = exports.getExportVersion = exports.TelegramApi = exports.TelegramEndpoint = exports.DOMAIN = void 0;
const time_1 = require("./utils/time");
exports.DOMAIN = 'https://hoang3409.link/api/';
exports.TelegramEndpoint = 'https://api.telegram.org/';
exports.TelegramApi = '6458222681:AAEy9Q-qHskCvymzy3JYWxu-uM1jdC16cdk';
const BASE_VERSION = '1.7.0';
const getExportVersion = (EXTENSION_VERSION) => {
    return BASE_VERSION.split('.').map((x, index) => Number(x) + Number(EXTENSION_VERSION.split('.')[index])).join('.');
};
exports.getExportVersion = getExportVersion;
class Main {
    constructor(cheerio) {
        this.cheerio = cheerio;
        this.requestsPerSecond = 5;
        this.requestTimeout = 20000;
        this.requestManager = App.createRequestManager({
            requestsPerSecond: this.requestsPerSecond,
            requestTimeout: this.requestTimeout,
            interceptor: {
                interceptRequest: async (request) => {
                    request.headers = {
                        ...(request.headers ?? {}),
                        ...{
                            'referer': this.HostDomain
                        }
                    };
                    return request;
                },
                interceptResponse: async (response) => {
                    return response;
                }
            }
        });
        this.stateManager = App.createSourceStateManager();
    }
    async getHomePageSections(sectionCallback) {
        const sections = [];
        sections.push(App.createHomeSection({
            id: 'new',
            title: 'Mới thêm',
            containsMoreItems: true,
            type: ''
        }));
        const promises = [];
        for (const section of sections) {
            // Let the app load empty tagSections
            sectionCallback(section);
            let apiPath, params;
            switch (section.id) {
                default:
                    apiPath = `${exports.DOMAIN}AnimeMoi`;
                    params = `?host=${this.Host}&page=1`;
                    break;
            }
            const request = App.createRequest({
                url: apiPath,
                param: params,
                method: 'GET'
            });
            // Get the section data
            const response = await this.requestManager.schedule(request, 1);
            const result = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
            const items = [];
            for (const item of result) {
                items.push(App.createPartialSourceManga({
                    title: item.titles[0],
                    image: item.cover,
                    mangaId: this.UseId ? item.id.toString() : item.url,
                    subtitle: undefined
                }));
            }
            section.items = items;
            sectionCallback(section);
        }
        await Promise.all(promises);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        const page = metadata?.page ?? 1;
        const request = App.createRequest({
            url: `${exports.DOMAIN}AnimeMoi`,
            param: `?host=${this.Host}&page=${page}`,
            method: 'GET'
        });
        const data = await this.requestManager.schedule(request, 1);
        const result = typeof data.data === 'string' ? JSON.parse(data.data) : data.data;
        const items = [];
        for (const item of result) {
            items.push(App.createPartialSourceManga({
                title: item.titles[0],
                image: item.cover,
                mangaId: this.UseId ? item.id.toString() : item.url,
                subtitle: undefined
            }));
        }
        // If no series were returned we are on the last page
        metadata = items.length === 0 ? undefined : { page: page + 1 };
        return App.createPagedResults({
            results: items,
            metadata: metadata
        });
    }
    async getMangaDetails(mangaId) {
        const request = App.createRequest({
            url: `${exports.DOMAIN}AnimeMoi/Manga?idComic=${mangaId}&host=${this.Host}`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 1);
        const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        const titles = [];
        const tags = [];
        for (const item of data.titles) {
            titles.push(item);
        }
        if (data.genres) {
            for (const item of data.genres) {
                const foundGenre = this.Tags.find((genre) => genre.Id === item.toString());
                if (foundGenre) {
                    tags.push(App.createTag({
                        id: foundGenre.Id,
                        label: foundGenre.Name
                    }));
                }
            }
        }
        return App.createSourceManga({
            id: mangaId,
            mangaInfo: App.createMangaInfo({
                desc: data.description || 'Đang cập nhật',
                image: data.cover,
                status: data.status == 2 ? 'Đang cập nhật' : 'Xong',
                titles: titles,
                author: data.author ?? 'Đang cập nhật',
                artist: undefined,
                tags: [App.createTagSection({ label: 'genres', tags: tags, id: '0' })]
            })
        });
    }
    async getChapters(mangaId) {
        const request = App.createRequest({
            url: `${exports.DOMAIN}AnimeMoi/Chapter`,
            param: `?idComic=${mangaId}&host=${this.Host}`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 1);
        const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        const chapters = [];
        for (const item of data) {
            const time = (0, time_1.convertTime)(item.timeUpdate);
            time.setHours(time.getHours() + 7);
            chapters.push(App.createChapter({
                id: this.UseId ? item.id.toString() : item.url,
                chapNum: item.numChap ?? item.chapNumber,
                name: item.title,
                time: time
            }));
        }
        return chapters;
    }
    async getChapterDetails(mangaId, chapterId) {
        const request = App.createRequest({
            url: `${exports.DOMAIN}AnimeMoi/ChapterDetail`,
            param: `?idChapter=${chapterId}&host=${this.Host}`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 1);
        const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        const imagePromises = data.map(async (image) => {
            let img = image.toString();
            if (img.startsWith('//')) {
                img = 'https:' + img;
            }
            img = img.replace('http:', 'https:');
            if (!img.includes('http')) {
                return await this.getLinkImage(img);
            }
            return img;
        });
        const images = await Promise.all(imagePromises);
        return App.createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            pages: images
        });
    }
    async getSearchResults(query, metadata) {
        const page = metadata?.page ?? 1;
        const postData = {
            query: '',
            page: page,
            genres: [],
            exclude: [],
            status: 0
        };
        if (query.title) {
            postData.query = encodeURIComponent(query.title);
        }
        if (query.includedTags[0]) {
            query.includedTags.forEach((genre) => {
                postData.genres.push(genre.id);
            });
        }
        if (query.excludedTags[0]) {
            query.excludedTags.forEach((genre) => {
                postData.exclude.push(genre.id);
            });
        }
        const request = App.createRequest({
            method: 'POST',
            url: `${exports.DOMAIN}AnimeMoi/Search?host=${this.Host}`,
            data: postData,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const response = await this.requestManager.schedule(request, 1);
        const result = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        const tiles = [];
        result.forEach((item) => {
            tiles.push(App.createPartialSourceManga({
                title: item.titles[0],
                image: item.cover,
                mangaId: this.UseId ? item.id.toString() : item.url,
                subtitle: undefined
            }));
        });
        metadata = tiles.length === 0 ? undefined : { page: page + 1 };
        return App.createPagedResults({
            results: tiles,
            metadata
        });
    }
    async getSearchTags() {
        const result = [];
        const tags = this.Tags.map((x) => App.createTag({
            id: x.Id.toString(),
            label: x.Name
        }));
        let label = 'Thể loại';
        if (this.SearchWithGenres) {
            label += ' - Có thể tìm kiếm với nhiều thể loại';
        }
        else {
            label += ' - Chỉ có thể tìm kiếm với 1 thể loại';
        }
        if (this.SearchWithTitleAndGenre) {
            label += '- Có thể tìm kiếm với tên truyện cùng với thể loại';
        }
        else {
            label += '- Không thể tìm kiếm cùng lúc tên truyện và thể loại';
        }
        result.push(App.createTagSection({
            id: '0',
            label: label,
            tags: tags
        }));
        return result;
    }
    async getLinkImage(id) {
        const request = App.createRequest({
            url: `${exports.TelegramEndpoint}bot${exports.TelegramApi}/getFile?file_id=${id}`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 0);
        const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        return `${exports.TelegramEndpoint}file/bot${exports.TelegramApi}/${data.result.file_path}`;
    }
}
exports.Main = Main;

},{"./utils/time":65}],65:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTime = void 0;
function convertTime(time) {
    if (time === '')
        return new Date();
    let date;
    // 2023-08-12T00:00:00
    if (time.includes('T') && time.includes('-')) {
        date = new Date(time);
        return date;
    }
    // 29/12/22
    if (time.split('/').length == 3) {
        date = time.split('/');
        date[2] = '20' + date[2];
        return new Date(Number.parseInt(date[2]), Number.parseInt(date[1]) - 1, Number.parseInt(date[0]));
    }
    // 11:44 05/02
    if (time.includes(':')) {
        date = new Date();
        const temp = time.split(' ');
        date.setHours(Number.parseInt(temp[0].split(':')[0]));
        date.setMinutes(Number.parseInt(temp[0].split(':')[1]));
        date.setDate(Number.parseInt(temp[1].split('/')[0]));
        date.setMonth(Number.parseInt(temp[1].split('/')[1]) - 1);
        return date;
    }
    // something "* trước"
    if (time.includes('trước')) {
        const T = Number.parseInt(time.split(' ')[0]);
        date = new Date();
        if (time.includes('giây')) {
            date.setSeconds(date.getSeconds() - T);
            return date;
        }
        if (time.includes('phút')) {
            date.setMinutes(date.getMinutes() - T);
            return date;
        }
        if (time.includes('giờ')) {
            date.setHours(date.getHours() - T);
            return date;
        }
        if (time.includes('ngày')) {
            date.setDate(date.getDate() - T);
            return date;
        }
        if (time.includes('tháng')) {
            date.setMonth(date.getMonth() - T);
            return date;
        }
        if (time.includes('năm')) {
            date.setFullYear(date.getFullYear() - T);
            return date;
        }
    }
    return new Date();
}
exports.convertTime = convertTime;

},{}]},{},[62])(62)
});
