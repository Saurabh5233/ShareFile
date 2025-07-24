import { useState } from 'react'
import FileUpload from './components/FileUpload'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import PasswordPrompt from './components/PasswordPrompt'
import DownloadPage from './pages/DownloadPage'
function App() {

  return (
    <>
      <Navbar/>
        <main>
        <FileUpload/>
        {/* <PasswordPrompt/> */}
        {/* <Loader/> */}
        {/* <DownloadPage/> */}
        </main>
      <Footer/>
    </>
  )
}

export default App
