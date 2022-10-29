

const getHolidays = async (countryCode, year = '2020') => {
  const response = await fetch(`https://holidays.abstractapi.com/v1/?api_key=ed9325c21fc842ad8e7507db513325b0&country=${countryCode}&year=${year}`)

  const holidays = await response.json();

  console.log(holidays);
};

const formObj = document.getElementById('holidaysForm');

formObj.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {};

  Array.from(e.target.elements).forEach((element) => {
    if (element.nodeName === 'INPUT') {
      data[element.name] = element.value;
    }
  });

  getHolidays(data.country);

})

