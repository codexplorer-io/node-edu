const onePromise = new Promise(resolve => setTimeout(() => resolve(1), 500));

const addTwoAsync = async () => {
    const result = await onePromise;
    return result + 2;
};

const printResultAsync = async () => {
    const result = await addTwoAsync();
    console.log(`Result: ${result}`);
};

printResultAsync().then(
    () => console.log('Async code finished.')
);

console.log('Program finished successfully.');
