import { useEffect } from 'react'

function Role(): JSX.Element {
  useEffect(() => {
    loadlive2d('live2d', '/model1/22/model.default.json')
  }, [])

  return <canvas className="live2d" id="live2d" width="280" height="250"></canvas>
}

export default Role
