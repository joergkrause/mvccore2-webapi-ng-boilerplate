"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Store the API's base URL in case we need to change it from default origin.
 * */
class ConfigService {
    static get apiURI() {
        return ConfigService._apiURI;
    }
    static set apiURI(value) {
        ConfigService._apiURI = value;
    }
}
exports.ConfigService = ConfigService;
ConfigService._apiURI = window.location.origin;
//# sourceMappingURL=config.service.js.map