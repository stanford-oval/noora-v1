// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
// response
export class IntentResponse {
    constructor(json) {
        this.privIntentResponse = JSON.parse(json);
    }
    static fromJSON(json) {
        return new IntentResponse(json);
    }
    get query() {
        return this.privIntentResponse.query;
    }
    get topScoringIntent() {
        return this.privIntentResponse.topScoringIntent;
    }
    get entities() {
        return this.privIntentResponse.entities;
    }
}

//# sourceMappingURL=IntentResponse.js.map
