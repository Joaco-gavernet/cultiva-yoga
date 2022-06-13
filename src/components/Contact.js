import React from 'react';

const Contact = () => {
  return (
    <section class="contact" id="section5">
      <a href="#section5">
        <h2 class="contact__title wow animate__animated animate__fadeInUp" data-wow-delay="1s">Contacto</h2>
      </a>

      <form class="form" method="POST" enctype="multipart/form-data" action="https://formspree.io/f/xvoloygk">
        <h3 class="contact__subtitle">Consultame!</h3>
        <input type="text" name="name" class="input" placeholder="Nombre" />
        <input type="text" name="email" class="input" placeholder="Email" />
        <textarea name="description" class="input" cols="auto" rows="5" placeholder="Descripción"></textarea>
        <button type="submit" class="button">
          Enviar
        </button>
      </form>

      <div class="contact__info">
        <em class="fas fa-3x fa-at"></em>
        <p>coachvfdde@gmail.com</p>
        <div class="info__logos">
          <a href="https://www.instagram.com/coaching.vyf/">
            <em class="fab fa-3x fa-instagram"></em>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=541150142760&text=Hola!%20Me%20interesa%20saber%20mas%20al%20respecto%20%20&app_absent=0">
            <em class="fab fa-3x fa-whatsapp"></em>
          </a>
          <a href="https://www.facebook.com/coaching.vocacional.98">
            <em class="fab fa-3x fa-facebook-f"></em>
          </a>
          <a href="https://www.linkedin.com/in/daniela-d%C3%ADaz-erbetta-645908182/">
            <em class="fab fa-3x fa-linkedin-in"></em>
          </a>
          <a href="">
            <em class="fab fa-3x fa-google-drive"></em>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;