import GameSavingLoader from '../GameSavingLoader';
import {test} from "@jest/globals";

test('should be callback', async () => {
    const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
    const object = await GameSavingLoader.load(data);
    expect(object).toEqual(`{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}`);
});

test('should handle errors', async () => {
    expect.assertions(1);
    try {
        await GameSavingLoader.load();
    } catch (error) {
        expect(error).toEqual("Укажите в аргументах функции строку...");
    }
});
