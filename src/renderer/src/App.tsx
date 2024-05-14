import Role from './components/Role'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Role></Role>
    </>
  )
}

export default App
