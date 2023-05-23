import './App.css'

//State provider
import { ProvideController } from './Controller'

import AllGroups from './components/AllGroups'
import CreateGroup from './components/CreateGroup'

function App() {
  return (
    <ProvideController>
      <div className="App">
        <AllGroups />
        <CreateGroup />
      </div>
    </ProvideController>
  )
}

export default App
