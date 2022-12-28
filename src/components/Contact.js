import React from 'react'

const Contact = () => {
    return (
        <div class="contact section container" id="contact">
            <div class="contact-container grid">
                <div class="contact-content">
                    <h2 class="section-title-center">Contact Us From Here</h2>
                    <p class="contact-description">You can contact us from here, you can write to us,
                        call us or visit our service center, we will gladly assist you.</p>
                </div>

                <ul class="contact-content grid">
                    <li class="contact-address">Call: <span class="contact-information">+880 1987668988</span></li>
                    <li class="contact-address">Email:  <span class="contact-information">delivery@gmail.com</span></li>
                    <li class="contact-address">Location: <span class="contact-information">Dhaka, Bangladesh</span></li>
                </ul>

                <div class="contact-content">
                    <a href="#" class="button">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Contact