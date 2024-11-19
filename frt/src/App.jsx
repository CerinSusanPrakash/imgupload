import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGallery from '../components/ImageGallery'
import ImageUploader from '../components/ImageUploader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageGallery/>
      <ImageUploader/>
    </>
  )
}

export default App
