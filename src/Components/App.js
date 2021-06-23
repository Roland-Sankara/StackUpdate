import React from 'react';
import Header from './HeaderComponent/Header';
import Banner from './BannerComponent/Banner';


function App(){
    return(
        <div>
            <Header/>
            <div className="app-container">
                <Banner/>
                <h1 className="intro">
                    __Edu-StackUpdate__
                    <br/>
                    Loading...
                </h1>

            </div>
        </div>
    )
}

export default App;