const DATA_URI = 'https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json'

const mapWithChecked = dataArray => dataArray.map(obj => ({ ...obj, checked: true }))

const fetchData = () => fetch(DATA_URI)
  .then(res => res.json()).then(mapWithChecked)

export default fetchData
