import React from 'react'
import './style/index.scss'
import Articles from './components/Article'
import Sidebar from './components/Sidebar'

function App() {
    return (
        <div className="appComponent">
            <Sidebar/>
            <div className="divider"></div>
            <Articles/>
        </div>
    )
}

export default App