try {
    console.log('Inside try');
    myVar;
    console.log('after myVar');
} catch (error) {
    console.log('Error in catch');
    console.dir(error.name)
}

console.log('After try catch');