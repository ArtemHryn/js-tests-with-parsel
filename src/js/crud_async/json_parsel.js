const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{ бекенд вернул вот такое чудо }';

console.log(1);

try {
    console.log(JSON.parse(validJSON));
    console.log(23);

} catch (error) {
    // console.dir(error)
    console.log(error.name, error.message);
}

console.log(2);
