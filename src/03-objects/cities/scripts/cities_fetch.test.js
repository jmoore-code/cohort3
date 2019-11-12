import fetchFunctions from "./cities_fetch.js"

global.fetch = require('node-fetch');

/*
    These are destructive tests. The URL will have its data
    blown away.

    These tests were created to give a fairly comprehensive example
    on how to interact with an API. It does the full CRUD. Comments
    are appreciated.
*/

const url = 'http://localhost:5000/';

test('test that the fetch works?', async () => {

    const clients = [
        { key: 1, city: "Calgary", lat: 51.05, long: -114.05, pop:1500000 },
        { key: 2, city: "Edmonton", lat: 53.55, long: -113.49, pop:800000},
        { key: 3, city: "Red Deer", lat: 52.28, long: -113.81, pop:200000},
        { key: 4, city: "Rio de Janeiro", lat: -22.91, long: -43.17, pop: 6000000}
    ]

    // Check that the server is running and clear any data
    let data = await postData(url + 'clear');

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await postData(url + 'add', clients[0]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].city).toBe("Calgary");
    

    // add a second with the same key which should be an error
    data = await postData(url + 'add', clients[0]);
    expect(data.status).toEqual(400);

    // add a second which should be ok
    data = await postData(url + 'add', clients[1]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);
    expect(data[1].city).toBe("Edmonton");

    data = await postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].city).toBe("Calgary");

    data = await postData(url + 'update', { key: 1, city: "Cowtown", lat: 51.05, long: -114.05, pop:1500000 },);
    expect(data.status).toEqual(200);

    data = await postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].city).toBe("Cowtown");

    data = await postData(url + 'delete', {key:1});
    expect(data.status).toEqual(200);

    data = await postData(url + 'read', {key:1});
    expect(data.status).toEqual(400);
});


async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    // console.log(json, typeof(json));
    return json;
}