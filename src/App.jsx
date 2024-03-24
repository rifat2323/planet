import { useState,lazy,Suspense } from 'react'
import Navbar from './component/Navbar'
import './App.css'
/* import Earth from './pages/earth' */
const Earth = lazy(()=>import('./pages/Earth') )
const Mercury = lazy(()=>import('./pages/Mercury') )
const Veneus = lazy(()=>import('./pages/Veneus') )
const Marse = lazy(()=>import('./pages/Marse') )
const Jupiter = lazy(()=>import('./pages/Jupiter') )
const Saturn = lazy(()=>import('./pages/Saturn') )
const Uranus = lazy(()=>import('./pages/Uranus') )
const Neptune = lazy(()=>import('./pages/Neptune') )


import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  HomeNav  from './component/HomeNav'
import  StarNav  from './component/StarNav'
const Sun = lazy(()=> import("./starPage/Sun"))
const Sirius = lazy(()=> import("./starPage/Sirius"))
const AlphaCentauri = lazy(()=> import("./starPage/AlphaCentauri"))
const Betelgeuse = lazy(()=> import("./starPage/Betelgeuse"))
const Vega = lazy(()=> import("./starPage/Vega"))
 import {Discuss} from 'react-loader-spinner'


function App() {
  const [planet, setPlanet] = useState(false)
  const [star, setStar] = useState(false)
  const [isHomeClik, setIsHomeClick] = useState(false)
 const StarName =[Sun,Sirius,AlphaCentauri,Betelgeuse,Vega] 
  console.log(isHomeClik)
  return (
    <>
      <BrowserRouter>
      <HomeNav setIsHomeClick={setIsHomeClick}/>
      {
        planet && !star ? <Navbar/> : star && !planet ? <StarNav isHomeClik={isHomeClik} setIsHomeClick={setIsHomeClick} />
      : null    }
      
      <Routes>
     
        <Route path='/' element={<Home setStar={setStar} star={star} planet={planet} setPlanet={setPlanet}/>}/>
        {
          StarName.map((Stars,index)=>{
            return(
            <Route path={`/${index+1}` } key={index} element={ <Suspense fallback={<Discuss width='120' height='130' backgroundColor="#F4442E"/>}><Stars setStar={setStar}/></Suspense> }/>
            )
          })
        }
         <Route path='/ear' element={ <Suspense fallback={<Discuss width='120' height='130' backgroundColor="#F4442E"/>}> <Earth setPlanet={setPlanet}/></Suspense> } />
         <Route path='/mer' element={ <Suspense fallback={<Discuss width='120' height='130' backgroundColor="#F4442E"/>}><Mercury setPlanet={setPlanet}/></Suspense> } />
         <Route path='/ven' element={ <Suspense fallback={<Discuss width='120' height='130' backgroundColor="#F4442E"/>}><Veneus setPlanet={setPlanet}/></Suspense> } />
         <Route path='/mar' element={  <Suspense fallback={<Discuss width='120' height='130' backgroundColor="#F4442E"/>}><Marse setPlanet={setPlanet}/></Suspense>} />
         <Route path='/jup' element={ <Suspense fallback={<Discuss width='120' height='130' backgroundColor="#F4442E"/>}><Jupiter setPlanet={setPlanet}/></Suspense>} />
         <Route path='/sat' element={ <Suspense fallback={<Discuss width='120' height='130' backgroundColor="#F4442E"/>}><Saturn setPlanet={setPlanet}/></Suspense>} />
         <Route path='/ura' element={<Suspense fallback={<Discuss width='120' height='130' backgroundColor="#F4442E"/>}><Uranus setPlanet={setPlanet}/></Suspense>} />
         <Route path='/nep' element={<Suspense fallback={<Discuss width='120' height='130' backgroundColor="#F4442E"/>}><Neptune setPlanet={setPlanet}/></Suspense>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
