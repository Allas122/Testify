"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParsePlugin = void 0;
async function jsonParsePlugin(instance, opts, done) {
    instance.addContentTypeParser("*", { parseAs: "string" }, function (request, body, Done) {
        try {
            var json = JSON.parse(body);
            console.log(body);
            Done(null, json);
        }
        catch (e) {
            Done(e, undefined);
        }
    });
    return done();
}
exports.jsonParsePlugin = jsonParsePlugin;
