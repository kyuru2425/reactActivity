import Home from './home'
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUs from './aboutus'
import Activity from './activity'
import Header from '../components/header'
import Footer from '../components/footer'
import Portfolio from './portfolio'
import Hooks from './hooks'
import Contactus from './contactus'
import Codingjournal from './codingjournal'


const Index = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/aboutus' element={<AboutUs/>}/>
                <Route exact path='/activity' element={<Activity/>}/>
                <Route exact path='/portfolio' element={<Portfolio/>}/>
                <Route exact path='/hook' element={<Hooks/>}/>
                <Route exact path='/contactus' element={<Contactus/>}/>
                <Route exact path='/codingjournal' element={<Codingjournal/>}/>


            </Routes>
            <Footer/>
        </Router>
    )
}

export default Index
