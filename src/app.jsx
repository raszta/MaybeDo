import React from 'react';
import ReactDOM from 'react-dom';
// import CarouselSlider from "react-carousel-slider";
// import Calendar from 'rc-calendar';
import Bored from './components/bored.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
require('./main.scss');

class App extends React.Component{    
    render(){        
        return <div> 
            <Header/>           
            <Bored/>            
            <Footer/>
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});