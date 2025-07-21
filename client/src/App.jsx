import './App.css'
import { Routes , Route } from 'react-router-dom'
import MemberTable from './components/MemberTable'
import NewMember from './components/NewMember'
import EditMember from './components/EditMember'
import MemberDetails from './components/MemberDetails'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MemberTable/>}/>
      <Route path='/members/new' element={<NewMember/>}/>
      <Route path='/members/:id' element={<MemberDetails/>}/>
      <Route path='/members/edit/:id' element={<EditMember/>}/>
    </Routes>
    </>
  )
}

export default App
