import React from "react";

export default function Footer() {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top row">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg class="bi" width="30" height="24">
              <use href="#bootstrap"></use>
            </svg>
          </a>
          <div>
            <ul>
              <li>
                <span class="text-muted">📞: 01-8000-912-3423</span>
              </li>
              <li>
                <span class="text-muted">📩 atencion@despachos.com.co</span>
              </li>
              <li>
                <span class="text-muted">Despachos Certificados® 2021</span>
              </li>
              <li>
                <span class="text-muted">Colombia</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="div-img">
          <a href="https://www.supertransporte.gov.co/" target={"_blank"}>
            <img
              src="https://i.ibb.co/jThNWVY/vigilado-supertransporte.jpg"
              alt="Grupo-11376-2x"
              border="0"
            />
          </a>
        </div>
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="button" href="twitter.com">
              <svg class="bi" width="24" height="24">
                <use href="#twitter"></use>
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <svg class="bi" width="24" height="24">
                <use href="#instagram"></use>
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <svg class="bi" width="24" height="24">
                <use href="#facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
