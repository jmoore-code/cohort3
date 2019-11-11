const functions = {

    url: 'https://uinames.com/api/?amount=10',

    getFirstName: (data) => {
        const firstName = data.name
        return firstName;
    },

    getAllFirstNames: (data) => {
        let firstName = [];
        return firstName = data.map(el => el.name);
    },

    showDelayProblem() {
        console.log('One');
        setTimeout(() => {          // Simulates a fetch
            console.log("Two");
        }, 1 * 1000);
        console.log('Three');       // We have a problem Huston
    },

    async showDelaySolution() {
        try {
            console.log('One');
            const value = await                 // Simulate fetch
                new Promise(
                    (resolve, reject) =>
                        setTimeout(() => resolve("Two"),
                            1 * 2000));
            // Now that we have the value we can use it.
            console.log(value);
            console.log('Three');
        } catch (error) {
            console.log(error);
        }
    },

    async getUsers() {
        try {
            const response = await fetch(functions.url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw (error);
        }
    },

    async workWithData() {
        const data = await functions.getUsers();
        console.log(functions.getFirstName(data));
        console.log(functions.getAllFirstNames(data));
    },

    me: {
        "name": "Jason", 
        "surname": "Moore", 
        "gender": "male", 
        "region": "Canada" 
    },

    sMe: JSON.stringify(me), 
}






export default functions;