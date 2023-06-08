import React from 'react'

export default function Footer() {
  return (

        // <footer>
        //     <div class="container">
        //             <div class="">
        //                 {/* <ul class="float-left"> */}
        //                     <li><i class="fas fa-envelope"></i><a href="/contact" title="Contact Us">Contact Us</a></li>
        //                     <li><i class="fas fa-lock"></i><a href="/privacypolicy" title="Privacy Policy">Privacy Policy</a></li>
        //                     <li><i class="fas fa-file-alt"></i><a href="/termsofuse" title="Terms of Use">Terms of Use</a></li>
        //                 {/* </ul> */}

        //             </div>

        //     </div>
        // </footer>

<footer class="footer mt-2 py-2 bg-dark text-white">
  <div class="">
    <div class="overlay"></div>
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
      <span class="text-muted font-weight-bold h4">2023. All rights Reserved</span>
      <div class="social-icons mt-3">
        <a href="https://api.whatsapp.com/send?phone=123456789" target="_blank" class="text-white me-3">
          <i class="bi bi-whatsapp"></i>
        </a>
        <a href="https://twitter.com/example" target="_blank" class="text-white me-3">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="https://www.instagram.com/example/" target="_blank" class="text-white">
          <i class="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</footer>



  )
}


