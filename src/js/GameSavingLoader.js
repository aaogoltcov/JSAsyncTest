'use strict';

import read from './reader'
import json from './parser'

export default class GameSavingLoader {
    static async load(data) {
        return await json(await read(data))
    };
};
