// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
/**
 * @class Contracts
 * @private
 */
export class Contracts {
    static throwIfNullOrUndefined(param, name) {
        if (param === undefined || param === null) {
            throw new Error("throwIfNullOrUndefined:" + name);
        }
    }
    static throwIfNull(param, name) {
        if (param === null) {
            throw new Error("throwIfNull:" + name);
        }
    }
    static throwIfNullOrWhitespace(param, name) {
        Contracts.throwIfNullOrUndefined(param, name);
        if (("" + param).trim().length < 1) {
            throw new Error("throwIfNullOrWhitespace:" + name);
        }
    }
    static throwIfDisposed(isDisposed) {
        if (isDisposed) {
            throw new Error("the object is already disposed");
        }
    }
    static throwIfArrayEmptyOrWhitespace(array, name) {
        Contracts.throwIfNullOrUndefined(array, name);
        if (array.length === 0) {
            throw new Error("throwIfArrayEmptyOrWhitespace:" + name);
        }
        for (const item of array) {
            Contracts.throwIfNullOrWhitespace(item, name);
        }
    }
    static throwIfFileDoesNotExist(param, name) {
        Contracts.throwIfNullOrWhitespace(param, name);
        // TODO check for file existence.
    }
    static throwIfNotUndefined(param, name) {
        if (param !== undefined) {
            throw new Error("throwIfNotUndefined:" + name);
        }
    }
}

//# sourceMappingURL=Contracts.js.map
