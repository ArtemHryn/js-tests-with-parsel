import '../../css/common.scss';

fetch(
  'https://lpj-weather-service.herokuapp.com/weather?lat=50.45&lon=30.523333'
)
  .then(r => r.json())
  .then(console.log);

