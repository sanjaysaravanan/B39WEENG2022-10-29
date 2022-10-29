// async and await

// async
// can only be used in front of a function

// async function checkForOdd() {
//   console.log('Line 1'); // sync
//   console.log('aysnc operation'); // async
//   console.log('Line 3'); // sync
//   // return { msg: 'Hi Hello' };
// }

// return type
// const checkVal = checkForOdd();

// console.log(checkVal);


// checkVal.then(res => console.log(res));


// usually we do not return anything out async function

// using async inform JS that this function can execute an asynchronous operation


// const checkForEven = async () => {
//   console.log('Line 1');

//   const response = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Line 2')
//       resolve({ msg: 'Promise Resolved' })
//     }, 5000)
//   });

//   console.log(response);

//   // console.log('Line 3', response);
// }

// checkForEven();


const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();
  console.log(countries);
}
fetchCountries();