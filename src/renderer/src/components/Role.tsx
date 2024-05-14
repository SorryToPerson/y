import { useEffect } from 'react'

function Role(): JSX.Element {
  useEffect(() => {
    loadlive2d('live2d', '/Resources/Hiyori/Hiyori.model3.json')
  }, [])

  return <canvas id="live2d" width="280" height="250"></canvas>
}

export default Role
