import { useEffect, useState } from 'react';
import fetchData from './fetch-data'
import Header from './components/header'

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

  return (
    <div>
      <Header hasFetchError={hasFetchError} hasFetched={!!dataJson} />
    </div>
  )
}

export default App;
