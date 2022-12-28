import React from 'react'

const Header = () => {
  return (
    <div>
         <header class="header" id="header">
            <nav class="nav container">
                <a href="#" class="nav-logo">Delivery</a>

                <div class="nav-menu" id="nav-menu">
                    <ul class="nav-list">
                        <li class="nav-item">
                            <a href="#home" class="nav-link active-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#about" class="nav-link">About us</a>
                        </li>
                        <li class="nav-item">
                            <a href="#services" class="nav-link">Services</a>
                        </li>
                        <li class="nav-item">
                            <a href="#download" class="nav-link">Download</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="nav-link">Contact us</a>
                        </li>

                       
                    </ul>
                </div>

                <div class="nav-toggle" id="nav-toggle">
                    <i class='bx bx-grid-alt'></i>
                </div>

                <a href="#" class="button button-header">Order Now!</a>
            </nav>
        </header>
    </div>
  )
}

export default Header