import { useEffect, useState } from 'react';
import fetchData from './fetch-data'

function App() {
  const [dataJson, setDataJson] = useState(null)
  const [hasFetchError, setHasFetchError] = useState(false)

  useEffect(() => {
    fetchData().then(data => {
    setDataJson(data)
  }).catch(() => {
      setHasFetchError(true)
    })
  }, [])

  if (hasFetchError) {
    return <div><h1>Oh no an error</h1></div>
  }

  if (!dataJson) {
    return <div><h1>Loading...</h1></div>
  }

  return <div><h1>Data fetched successfully</h1></div>
}

export default App;
