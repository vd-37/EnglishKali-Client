import React from 'react'

const Footer = () => {
  return (
    <div>
        <div class="padding">
    <div class="left-footer">
      <img src="images/logo.svg" alt="" /> <br />
      <ul>
        <li><a class="underline" href="">About</a>  </li>
        <li><a class="underline" href="">Careers</a></li>
        <li><a class="underline" href="">Events</a></li>
        <li><a class="underline" href="">Products</a> </li>
        <li><a class="underline" href="">Support</a> </li>
      </ul>
    </div>
    <div class="right-footer">
      <img src="images/icon-facebook.svg" class="social-media" alt="" />
      <img src="images/icon-instagram.svg" class="social-media" alt="" />
      <img src="images/icon-pinterest.svg" class="social-media" alt="" />
      <img src="images/icon-twitter.svg" class="social-media" alt="" /> <br />
      <p>© 2021 Loopstudios. All rights reserved.</p>
    </div>
  </div>
    </div>
  )
}

export default Footer