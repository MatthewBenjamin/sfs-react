const DATA_URI = 'https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json'

const fetchData = () => fetch(DATA_URI)
  .then(res => res.json())

export default fetchData
