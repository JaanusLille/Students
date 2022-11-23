import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href = "http://localhost:3000/students" className = "navbar-brand"
                            style = {{marginLeft:"10px"}}>
                            Tudengite haldamise rakendus
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
