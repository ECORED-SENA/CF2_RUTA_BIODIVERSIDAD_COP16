<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 La voz de la biodiversidad
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p En la encrucijada del siglo XXI, la humanidad enfrenta el desafío de proteger la biodiversidad de nuestro planeta. Esta publicación está dedicada a los jóvenes que lideran el cambio hacia un futuro sostenible.
        .row.justify-content-center
          .col-lg-auto.pe-lg-0
            figure
              img(src='@/assets/curso/tema2/img1.svg', alt='alt', style="width: 200px;").m-auto
          .col-9.col-lg.bg-c16
            .p-3
              p.mb-0 #[b ¿Qué es la biodiversidad?]
              p.mb-0 La biodiversidad es la variedad de todas las formas de vida en la Tierra, incluyendo plantas, animales y microorganismos. Cada especie tiene un papel único en su ecosistema.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='alt', style="width: 500px;").m-auto
    .row.justify-content-center.mb-5
      .col-7.col-lg-4.pe-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img13.svg', alt='alt', style="width: 410px;").m-auto
      .col-7.col-lg-6.bg-c6(data-aos="fade-left")
        .p-4.h-100
          .row.align-items-center.h-100
            .col-12
              p.mb-0 Más del 70 % de las especies del mundo se encuentran en tan solo 12 países, incluyendo Colombia, que es el segundo país más biodiverso del mundo.
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c3
        .px-2
          .row.align-items-end
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/tema1/img7.svg",style="width: 60px", alt="").m-auto
            .col
              h2.mb-0 La COP de biodiversidad
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p La COP (Conferencia de las Partes) es una reunión global donde más de 190 países acuerdan acciones para proteger la biodiversidad. La COP16 se celebrará en Colombia entre el 21 de octubre y el 1 de noviembre de 2024.
        .row
          .col-auto.pe-0.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema2/img5.svg",style="width: 70px", alt="").m-auto
          .col
            p A lo largo de los años, han sido escenarios de importantes avances y compromisos internacionales. Esta línea de tiempo destaca hitos clave en la historia de las COP, desde sus inicios hasta el presente, marcando su evolución y su impacto en la protección de la biodiversidad.
            p.mb-0 La línea de tiempo de las COP es:
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img12.png', alt='alt', style="width: 500px;").m-auto
    .row.bg-c27
      .col-12
        .px-5
          .row.justify-content-center
            .col-lg-10(data-aos="fade-up")
              LineaTiempoE.color-acento-contenido
                .row(titulo="1994" subtitulo="COP1")
                  .col-md-auto.mb-4.mb-lg-0
                    figure
                      img(src="@/assets/curso/tema2/img13.png",style="width: 170px", alt="").m-auto
                  .col-md.mb-4.mb-lg-0
                    p.mb-0 Celebrada en las Bahamas, marcó el inicio de las reuniones sobre biodiversidad.
                  .col-md-auto
                    figure
                      img(src="@/assets/curso/tema2/img6.svg",style="width: 70px", alt="").m-auto
                .row(titulo="2010" subtitulo="COP10")
                  .col-md-auto.mb-4.mb-lg-0
                    figure
                      img(src="@/assets/curso/tema2/img14.png",style="width: 170px", alt="").m-auto
                  .col-md.mb-4.mb-lg-0
                    p.mb-0 Japón fue sede de la adopción del #[b Protocolo de Nagoya], un acuerdo clave sobre acceso a recursos genéticos y distribución justa de sus beneficios.
                  .col-md-auto
                    figure
                      img(src="@/assets/curso/tema2/img7.svg",style="width: 70px", alt="").m-auto
                .row(titulo="2022" subtitulo="COP15")
                  .col-md-auto.mb-4.mb-lg-0
                    figure
                      img(src="@/assets/curso/tema2/img15.png",style="width: 170px", alt="").m-auto
                  .col-md.mb-4.mb-lg-0
                    p.mb-0 Realizada entre China y Canadá, se acordó el #[b Marco Global de Biodiversidad Kunming-Montreal], que define objetivos para la conservación de la biodiversidad hasta 2030.
                  .col-md-auto
                    figure
                      img(src="@/assets/curso/tema2/img8.svg",style="width: 70px", alt="").m-auto
                .row(titulo="2024" subtitulo="COP16")
                  .col-md-auto.mb-4.mb-lg-0
                    figure
                      img(src="@/assets/curso/tema2/img16.png",style="width: 170px", alt="").m-auto
                  .col-md.mb-4.mb-lg-0
                    p.mb-0 En Colombia, será la primera COP tras la adopción del nuevo marco global, marcando un hito en la implementación de medidas acordadas para proteger la biodiversidad.
                  .col-md-auto
                    figure
                      img(src="@/assets/curso/tema2/img9.svg",style="width: 70px", alt="").m-auto
    .row.bg-c17
      .col-12
        .p-5
          .row.justify-content-center.mb-5
            .col-7.col-lg-4.pe-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img13.svg', alt='alt', style="width: 410px;").m-auto
            .col-7.col-lg-6.bg-c6(data-aos="fade-left")
              .p-4.h-100
                .row.align-items-center.h-100
                  .col-12
                    p.mb-0 Las decisiones tomadas en la COP afectan políticas globales que protegen áreas naturales críticas y especies en peligro de extinción.
          p.mb-5(data-aos="fade-right") La #[b biodiversidad] es vital porque los ecosistemas nos proporcionan muchos beneficios, llamados #[b servicios ecosistémicos], que son fundamentales para la vida humana y el planeta. Estos son:
          .row.justify-content-center.mb-5
            .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
              .crd_hover_txt1
                .crd_hover_txt1--img
                  figure
                    img(src="@/assets/curso/tema2/img3.png", alt="alt")
                .crd_hover_txt1--body
                  h4.text-center.mb-5 Purificación del aire y agua
                  p.text-center.mb-0 Los ecosistemas limpian el aire y el agua que usamos.
            .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
              .crd_hover_txt1
                .crd_hover_txt1--img
                  figure
                    img(src="@/assets/curso/tema2/img4.png", alt="alt")
                .crd_hover_txt1--body
                  h4.text-center.mb-5 Control de plagas y enfermedades
                  p.text-center.mb-0 Ayudan a mantener bajo control plagas y enfermedades que nos afectan.
            .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
              .crd_hover_txt1
                .crd_hover_txt1--img
                  figure
                    img(src="@/assets/curso/tema2/img5.png", alt="alt")
                .crd_hover_txt1--body
                  h4.text-center.mb-5 Polinización de cultivos
                  p.text-center.mb-0 Animales como las abejas polinizan plantas, lo que es clave para la producción de alimentos.
            .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
              .crd_hover_txt1
                .crd_hover_txt1--img
                  figure
                    img(src="@/assets/curso/tema2/img6.png", alt="alt")
                .crd_hover_txt1--body
                  h4.text-center.mb-5 Provisión de alimentos y medicinas
                  p.text-center.mb-0 Los ecosistemas nos dan comida, plantas medicinales y materiales.
          p.mb-5(data-aos="fade-right") Los tipos de servicios ecosistémicos son:
          .row.align-items-center
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              .row
                .col-12.bg-c16
                  .px-2.py-1
                    .row.align-items-center
                      .col-auto.pe-0
                        figure
                          img(src='@/assets/curso/tema2/img2.svg', alt='alt', style="width: 90px;").m-auto
                      .col
                        p.mb-0 #[b Provisión]
                        p.mb-0 Suministro de alimentos, agua, y materiales como la madera.
                .col-12.bg-c18
                  .px-2.py-1
                    .row.align-items-center
                      .col-auto.pe-0
                        figure
                          img(src='@/assets/curso/tema2/img3.svg', alt='alt', style="width: 90px;").m-auto
                      .col
                        p.mb-0 #[b Regulación]
                        p.mb-0 Controlan el clima, las enfermedades y el ciclo del agua.
                .col-12.bg-c16
                  .px-2.py-1
                    .row.align-items-center
                      .col-auto.pe-0
                        figure
                          img(src='@/assets/curso/tema2/img4.svg', alt='alt', style="width: 90px;").m-auto
                      .col
                        p.mb-0 #[b Culturales]
                        p.mb-0 Nos ofrecen recreación, turismo y aportan valores espirituales y culturales.
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img7.png', alt='alt', style="width: 500px;").m-auto
    p.mb-5(data-aos="fade-right") Estos servicios son esenciales para nuestra supervivencia y bienestar, por lo que proteger la biodiversidad es clave para un futuro sostenible.
    .row.justify-content-center.mb-5
      .col-7.col-lg-4.pe-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img13.svg', alt='alt', style="width: 410px;").m-auto
      .col-7.col-lg-6.bg-c6(data-aos="fade-left")
        .p-4.h-100
          .row.align-items-center.h-100
            .col-12
              p.mb-0 Los polinizadores como las abejas son responsables de uno de cada tres bocados de comida que consumimos.
    p.mb-5(data-aos="fade-right") La protección de la biodiversidad enfrenta numerosos desafíos que amenazan los ecosistemas y la vida en el planeta. Abordar estos problemas requiere acciones inmediatas y coordinadas para asegurar un equilibrio entre el desarrollo humano y la conservación de la naturaleza.
    .row.bg-c2
      .col-12
        .p-4
          .row
            .col-12
              .p-4.p-lg-5
                .tarjeta.tarjeta--azul1(data-aos="fade-up")
                  .p-4
                    SlyderA(tipo="b")
                      .row.justify-content-center
                        .col-lg-5.mb-4.mb-lg-0
                          p #[b Cambio climático]
                          p.mb-0 Las alteraciones en el clima afectan hábitats y especies, provocando extinciones y migraciones forzadas. Se requieren medidas urgentes para reducir emisiones.
                        .col-lg-5
                          figure
                            img(src='@/assets/curso/tema2/img8.png', alt='alt', style="width: 500px;").m-auto
                      .row.justify-content-center
                        .col-lg-5.mb-4.mb-lg-0
                          p #[b Deforestación]
                          p.mb-0 La pérdida de bosques reduce la biodiversidad, elimina hábitats y altera ecosistemas. Combatirla implica prácticas sostenibles y reforestación.
                        .col-lg-5
                          figure
                            img(src='@/assets/curso/tema2/img9.png', alt='alt', style="width: 500px;").m-auto
                      .row.justify-content-center
                        .col-lg-5.mb-4.mb-lg-0
                          p #[b Contaminación]
                          p.mb-0 El uso de productos químicos y residuos industriales contamina suelos, agua y aire, dañando ecosistemas. Se necesitan regulaciones más estrictas y compromiso.
                        .col-lg-5
                          figure
                            img(src='@/assets/curso/tema2/img11.png', alt='alt', style="width: 500px;").m-auto
                      .row.justify-content-center
                        .col-lg-5.mb-4.mb-lg-0
                          p #[b Especies invasoras]
                          p.mb-0 Algunas especies que no pertenecen a un ecosistema pueden desplazar a las nativas, alterando el equilibrio natural. Controlar las especies invasoras requiere monitoreo y estrategias de manejo efectivas.
                        .col-lg-5
                          figure
                            img(src='@/assets/curso/tema2/img10.png', alt='alt', style="width: 500px;").m-auto
    .row.bg-c19
      .col-12
        .px-5.pt-5
          .row.mb-4(data-aos="fade-right")
            .col-auto.bg-c3
              .px-2
                .row.align-items-end
                  .col-auto.pe-0
                    figure
                      img(src="@/assets/curso/tema1/img7.svg",style="width: 60px", alt="").m-auto
                  .col
                    h2.mb-0 Residuos 
          p.mb-5(data-aos="fade-right") El mal manejo de residuos tóxicos y peligrosos pone en riesgo la salud humana y los ecosistemas, causando daños irreversibles en especies y hábitats. Se necesita un manejo responsable de estos residuos para minimizar su impacto. Siendo así, a través del siguiente video, podrá conocer  una clara explicación de los residuos peligrosos RESPEL:
          figure.mb-5(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/dg9kRNXM17E?si=IrO81G4PvxTSOrbx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          .row.justify-content-center.mb-5
            .col-7.col-lg-4.pe-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img13.svg', alt='alt', style="width: 410px;").m-auto
            .col-7.col-lg-6.bg-c6(data-aos="fade-left")
              .p-4.h-100
                .row.align-items-center.h-100
                  .col-12
                    p.mb-0 Los ecosistemas bien conservados pueden absorber hasta el 54 % de las emisiones de gases de efecto invernadero provocadas por los humanos.
          p.mb-5(data-aos="fade-right") Las principales amenazas a la biodiversidad:
          .row
            .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
              .row
                .col-lg-4.mb-4
                  .p-3.bg-c20.shadow
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema2/img10.svg', alt='alt', style="width: 80px;").m-auto
                      .col
                        p.mb-0 Cambio en el uso del suelo.
                .col-lg-4.mb-4
                  .p-3.bg-c20.shadow
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema2/img11.svg', alt='alt', style="width: 80px;").m-auto
                      .col
                        p.mb-0 Explotación directa de organismos.
                .col-lg-4.mb-4.mb-lg-0
                  .p-3.bg-c20.shadow
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema2/img12.svg', alt='alt', style="width: 80px;").m-auto
                      .col
                        p.mb-0 Cambio climático.
                .col-lg-4.mb-4.mb-lg-0
                  .p-3.bg-c20.shadow
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema2/img13.svg', alt='alt', style="width: 80px;").m-auto
                      .col
                        p.mb-0 Contaminación.
                .col-lg-4
                  .p-3.bg-c20.shadow
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema2/img14.svg', alt='alt', style="width: 80px;").m-auto
                      .col
                        p.mb-0 Especies invasoras.
            .col-lg-3(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img15.svg', alt='alt', style="width: 340px;").m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
