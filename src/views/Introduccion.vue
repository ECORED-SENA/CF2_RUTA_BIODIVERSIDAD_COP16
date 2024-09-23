<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-5
      .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 La biodiversidad es esencial para la vida en la tierra, ya que garantiza el equilibrio de los ecosistemas y la supervivencia de las especies. Sin embargo, en las últimas décadas, la pérdida de biodiversidad se ha acelerado debido a factores como la deforestación, el cambio climático y la contaminación. En este contexto, la adopción del Marco Global de Biodiversidad Kunming-Montreal busca frenar y revertir esta tendencia.
      .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img1.svg', alt='alt', style="width: 200px;").m-auto
    .row.mb-5
      .col-lg-6.pe-lg-0.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/intro/img1.png', alt='alt', style="width: 620px;").m-auto
      .col-lg-6.bg-c1(data-aos="fade-left")
        .p-4
          p.mb-0 Este acuerdo internacional establece objetivos ambiciosos, como la restauración del 30 % de los ecosistemas degradados y la protección del 30 % de las áreas terrestres y marinas para el año 2030. Con la COP16, que se llevará a cabo en Colombia en 2024, se espera que los países se comprometan a cumplir estas metas, fomentando una acción global coordinada para la conservación de la naturaleza.
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-auto.pe-0.d-none.d-md-block
            figure
              img(src='@/assets/curso/intro/img3.svg', alt='alt', style="width: 70px;").m-auto
          .col
            p.mb-0 La educación ambiental se presenta como una herramienta clave en la implementación de este marco. A través de la concienciación, la innovación y la participación comunitaria, se busca empoderar a las personas para que tomen decisiones informadas que contribuyan a la protección de los ecosistemas. Solo con el esfuerzo colectivo y el compromiso a largo plazo se podrá asegurar un futuro sostenible para las próximas generaciones. 
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img2.png', alt='alt', style="width: 500px;").m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
