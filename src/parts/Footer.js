import React from 'react'

const Footer = () => {
  return (
        <footer class="footer section">
            <div class="footer-container container grid">
                <div class="footer-content">
                    <a href="#" class="footer-logo">Delivery</a>
                    <p class="footer-description">Order Products Faster Easier</p>
                </div>

                <div class="footer-content">
                    <h3 class="footer-title">Our Services</h3>
                    <ul class="footer-links">
                        <li><a href="#" class="footer-link">Pricing </a></li>
                        <li><a href="#" class="footer-link">Discounts</a></li>
                        <li><a href="#" class="footer-link">Report a bug</a></li>
                        <li><a href="#" class="footer-link">Terms of Service</a></li>
                    </ul>
                </div>

                <div class="footer-content">
                    <h3 class="footer-title">Our Company</h3>
                    <ul class="footer-links">
                        <li><a href="#" class="footer-link">Blog</a></li>
                        <li><a href="#" class="footer-link">Our mision</a></li>
                        <li><a href="#" class="footer-link">Get in touch</a></li>
                    </ul>
                </div>

                <div class="footer-content">
                    <h3 class="footer-title">Community</h3>
                    <ul class="footer-links">
                        <li><a href="#" class="footer-link">Support</a></li>
                        <li><a href="#" class="footer-link">Questions</a></li>
                        <li><a href="#" class="footer-link">Customer help</a></li>
                    </ul>
                </div>

                <div class="footer-social">
                    <a href="#" class="footer-social-link"><i class='bx bxl-facebook-circle '></i></a>
                    <a href="#" class="footer-social-link"><i class='bx bxl-twitter'></i></a>
                    <a href="#" class="footer-social-link"><i class='bx bxl-instagram-alt'></i></a>
                </div>
            </div>

            <p class="footer-copy">&#169;2022 Deliveryoo. All right reserved</p>
        </footer>
  )
}

export default Footer