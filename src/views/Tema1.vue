<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Marco Global de Biodiversidad
    .row.mb-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-auto.pe-0.d-none.d-md-block
            figure
              img(src='@/assets/curso/tema1/img1.svg', alt='alt', style="width: 70px;").m-auto
          .col
            p El Marco Mundial de Biodiversidad de Kunming-Montreal es un acuerdo internacional adoptado en 2022 durante la 15ª Conferencia de las Partes del Convenio sobre la Diversidad Biológica. Este marco establece objetivos y metas globales para la conservación y el uso sostenible de la biodiversidad con miras a revertir la pérdida de diversidad biológica y restaurar ecosistemas para 2050.
            p.mb-0 Los elementos clave del marco:
      .col-lg-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img2.svg', alt='alt', style="width: 300px;").m-auto
    .row.bg-c2.mb-5
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
                          p #[b Objetivo principal]
                          p.mb-0 Detener e invertir la pérdida de biodiversidad para 2030, promoviendo la conservación, restauración y uso sostenible de los recursos naturales, con el fin de garantizar un planeta sano y los beneficios que la biodiversidad proporciona a las personas.
                        .col-lg-5
                          figure
                            img(src='@/assets/curso/tema1/img3.svg', alt='alt', style="width: 500px;").m-auto
                      .row.justify-content-center
                        .col-lg-5.mb-4.mb-lg-0
                          p #[b Visión para 2050]
                          p.mb-0 Lograr que la biodiversidad sea valorada, conservada y restaurada, manteniendo los servicios ecosistémicos esenciales para la vida y contribuyendo a un mundo donde las personas vivan en armonía con la naturaleza.
                        .col-lg-5
                          figure
                            img(src='@/assets/curso/tema1/img4.svg', alt='alt', style="width: 500px;").m-auto
                      .row.justify-content-center
                        .col-lg-5.mb-4.mb-lg-0
                          p #[b Misión para 2030]
                          p.mb-0 Implementar acciones urgentes para frenar la pérdida de biodiversidad, garantizando el uso sostenible de los recursos y una participación justa en los beneficios derivados de los recursos genéticos.
                        .col-lg-5
                          figure
                            img(src='@/assets/curso/tema1/img5.svg', alt='alt', style="width: 500px;").m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c3
        .px-2
          .row.align-items-end
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/tema1/img7.svg",style="width: 60px", alt="").m-auto
            .col
              h2.mb-0 Objetivos a largo plazo (para 2050)
    p.mb-5(data-aos="fade-right") Es importante recordar los 4 objetivos a largo plazo del Marco Mundial de Biodiversidad de Kunming-Montreal para 2050:
    TabsA.color-acento-botones(data-aos="fade-left")
      .tarjeta.color-acento-botones.p-4(titulo="Objetivo A")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p #[b Objetivo A]
            p.mb-0 Generar estrategias para la conectividad y resiliencia de los ecosistemas. Este objetivo apunta a detener la extinción de especies amenazadas por la actividad humana y mantener la diversidad genética de especies silvestres y domesticadas.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img2.png', alt='alt', style="width: 330px;").m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Objetivo B")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p #[b Objetivo B]
            p.mb-0 Gestionar de manera sostenible las contribuciones de la naturaleza a las personas. Se mantienen y mejoran los servicios ecosistémicos.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img3.png', alt='alt', style="width: 330px;").m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Objetivo C")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p #[b Objetivo C]
            p.mb-0 Compartir de manera justa y equitativa los recursos genéticos de la biodiversidad y los conocimientos tradicionales asociados. Particularmente los beneficios monetarios y la utilización de los recursos se destinan a los pueblos indígenas y comunidades locales, y se protegen adecuadamente sus saberes.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='alt', style="width: 330px;").m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Objetivo D")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p #[b Objetivo D]
            p.mb-0 Establecer los medios de implementación adecuados para desarrollar plenamente el Marco Global de Biodiversidad, garantizando la accesibilidad del cumplimiento de metas a los países en desarrollo.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img5.png', alt='alt', style="width: 330px;").m-auto
    .row.bg-c4
      .col-12
        .p-5
          .row.mb-4(data-aos="fade-right")
            .col-auto.bg-c3
              .px-2
                .row.align-items-end
                  .col-auto.pe-0
                    figure
                      img(src="@/assets/curso/tema1/img7.svg",style="width: 60px", alt="").m-auto
                  .col
                    h2.mb-0 Metas para 2030
          .row.align-items-center.mb-5
            .col-lg-9.mb-4.mb-0(data-aos="fade-right")
              p Se incluyen 23 metas concretas, como restaurar ecosistemas degradados, conservar al menos el 30% de las zonas terrestres y marinas, reducir la contaminación, eliminar especies invasoras, y movilizar recursos financieros para apoyar las acciones globales.
              p.mb-4 Reducir las amenazas a la biodiversidad a través de:
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-botones1.p-3
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema1/img7.png' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .px-3.py-2.bg-c5
                        p.mb-0 #[b Meta 1]
                  p.text-center.mb-0 Planificar y gestionar todas las zonas para reducir la pérdida de biodiversidad.
                .tarjeta.color-acento-botones1.p-3
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema1/img8.png' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .px-3.py-2.bg-c5
                        p.mb-0 #[b Meta 2]
                  p.text-center.mb-0 Restaurar el 30 % de todos los ecosistemas degradados.
                .tarjeta.color-acento-botones1.p-3
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema1/img9.png' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .px-3.py-2.bg-c5
                        p.mb-0 #[b Meta 3]
                  p.text-center.mb-0 Conservar el 30 % de las tierras, aguas continentales y marinas.
                .tarjeta.color-acento-botones1.p-3
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema1/img10.png' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .px-3.py-2.bg-c5
                        p.mb-0 #[b Meta 4]
                  p.text-center.mb-0 Detener la extinción de especies, proteger la diversidad genética y gestionar los conflictos entre los seres humanos y las especies silvestres.
                .tarjeta.color-acento-botones1.p-3
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema1/img11.png' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .px-3.py-2.bg-c5
                        p.mb-0 #[b Meta 5]
                  p.text-center.mb-0 Garantizar que la recolección y el comercio de especies silvestres sean sostenibles, seguros y lícitos.
                .tarjeta.color-acento-botones1.p-3
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema1/img12.png' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .px-3.py-2.bg-c5
                        p.mb-0 #[b Meta 6]
                  p.text-center.mb-0 Reducir la introducción de especies exóticas invasoras en un 50 % y minimizar sus impactos.
                .tarjeta.color-acento-botones1.p-3
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema1/img13.png' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .px-3.py-2.bg-c5
                        p.mb-0 #[b Meta 7]
                  p.text-center.mb-0 Reducir la contaminación a niveles que no sean perjudiciales para la biodiversidad.
                .tarjeta.color-acento-botones1.p-3
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema1/img14.png' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .px-3.py-2.bg-c5
                        p.mb-0 #[b Meta 8]
                  p.text-center.mb-0 Minimizar el impacto del cambio climático en la biodiversidad y aumentar su resiliencia.
            .col-lg-3(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img15.png', alt='alt', style="width: 300px;").m-auto
          p.mb-0(data-aos="fade-right") Satisfacer las necesidades de las personas mediante la utilización sostenible y la participación en los beneficios:
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img16.png', alt='alt', style="width: 300px;").m-auto
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="Meta 9")
            .row
              .col-12
                figure.mb-3
                  img(src='@/assets/curso/tema1/img8.svg', alt='alt', style="width: 120px;")
                p #[b Meta 9]
                p.mb-0 Gestionar de manera sostenible las contribuciones de la naturaleza a las personas.
          .tarjeta.color-acento-botones.p-4(titulo="Meta 10")
            .row
              .col-12
                figure.mb-3
                  img(src='@/assets/curso/tema1/img9.svg', alt='alt', style="width: 120px;")
                p #[b Meta 10]
                p.mb-0 Mejorar la biodiversidad y la sostenibilidad en la agricultura, la acuicultura, la pesca y la silvicultura.
          .tarjeta.color-acento-botones.p-4(titulo="Meta 11")
            .row
              .col-12
                figure.mb-3
                  img(src='@/assets/curso/tema1/img10.svg', alt='alt', style="width: 120px;")
                p #[b Meta 11]
                p.mb-0 Restaurar, mantener y mejorar las contribuciones de la naturaleza a las personas.
          .tarjeta.color-acento-botones.p-4(titulo="Meta 12")
            .row
              .col-12
                figure.mb-3
                  img(src='@/assets/curso/tema1/img11.svg', alt='alt', style="width: 120px;")
                p #[b Meta 12]
                p.mb-0 Aumentar los espacios verdes y mejorar la planificación urbana para el bienestar humano y la biodiversidad.
          .tarjeta.color-acento-botones.p-4(titulo="Meta 13")
            .row
              .col-12
                figure.mb-3
                  img(src='@/assets/curso/tema1/img12.svg', alt='alt', style="width: 120px;")
                p #[b Meta 13]
                p.mb-0 Aumentar la participación en los beneficios de los recursos genéticos, la información de secuencias digitales y los conocimientos tradicionales.
    p.mb-5(data-aos="fade-right") Herramientas y soluciones para la implementación y la integración:
    SlyderF.mb-5(columnas="col-md-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.color-acento-botones2
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img17.png' alt='AvatarTop')
        .row.justify-content-center
          .col-auto
            .px-3.py-2.bg-c5
              p.mb-0 #[b Meta 14]
        .row
          .col-12
            .p-3
              p.text-center.mb-0 Integrar la biodiversidad en la toma de decisiones a todos los niveles.
      .tarjeta.color-acento-botones2
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img18.png' alt='AvatarTop')
        .row.justify-content-center
          .col-auto
            .px-3.py-2.bg-c5
              p.mb-0 #[b Meta 15]
        .row
          .col-12
            .p-3
              p.text-center.mb-0 Las empresas evalúan, divulgan y reducen los riesgos e impactos negativos relacionados con la biodiversidad.
      .tarjeta.color-acento-botones2
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img19.png' alt='AvatarTop')
        .row.justify-content-center
          .col-auto
            .px-3.py-2.bg-c5
              p.mb-0 #[b Meta 16]
        .row
          .col-12
            .p-3
              p.text-center.mb-0 Opciones de consumo sostenibles para reducir el desperdicio y el consumo excesivo.
      .tarjeta.color-acento-botones2
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img20.png' alt='AvatarTop')
        .row.justify-content-center
          .col-auto
            .px-3.py-2.bg-c5
              p.mb-0 #[b Meta 17]
        .row
          .col-12
            .p-3
              p.text-center.mb-0 Reforzar la seguridad de la biotecnología y distribuir los beneficios de la biotecnología.
      .tarjeta.color-acento-botones2
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img21.png' alt='AvatarTop')
        .row.justify-content-center
          .col-auto
            .px-3.py-2.bg-c5
              p.mb-0 #[b Meta 18]
        .row
          .col-12
            .p-3
              p.text-center.mb-0 Reducir los incentivos perjudiciales en al menos 500.000 millones de dólares (USD) anuales y aumentar los incentivos positivos para la biodiversidad.
      .tarjeta.color-acento-botones2
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img22.png' alt='AvatarTop')
        .row.justify-content-center
          .col-auto
            .px-3.py-2.bg-c5
              p.mb-0 #[b Meta 19]
        .row
          .col-12
            .p-3
              p.text-center.mb-0 Movilizar 200.000 millones de dólares (USD) anuales para la biodiversidad de todas las fuentes, incluidos 30.000 millones de financiación internacional.
      .tarjeta.color-acento-botones2
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img23.png' alt='AvatarTop')
        .row.justify-content-center
          .col-auto
            .px-3.py-2.bg-c5
              p.mb-0 #[b Meta 20]
        .row
          .col-12
            .p-3
              p.text-center.mb-0 Fortalecer la creación de capacidad, la transferencia de tecnología y la cooperación científica y técnica para la biodiversidad.
      .tarjeta.color-acento-botones2
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img24.png' alt='AvatarTop')
        .row.justify-content-center
          .col-auto
            .px-3.py-2.bg-c5
              p.mb-0 #[b Meta 21]
        .row
          .col-12
            .p-3
              p.text-center.mb-0 Garantizar la disponibilidad y accesibilidad de los conocimientos para orientar las acciones en materia de biodiversidad.
      .tarjeta.color-acento-botones2
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img25.png' alt='AvatarTop')
        .row.justify-content-center
          .col-auto
            .px-3.py-2.bg-c5
              p.mb-0 #[b Meta 22]
        .row
          .col-12
            .p-3
              p.text-center.mb-0 Garantizar la participación de todos en la toma de decisiones y el acceso a la justicia y a la información relacionada con la biodiversidad.
      .tarjeta.color-acento-botones2
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img26.png' alt='AvatarTop')
        .row.justify-content-center
          .col-auto
            .px-3.py-2.bg-c5
              p.mb-0 #[b Meta 23]
        .row
          .col-12
            .p-3
              p.text-center.mb-0 Garantizar la igualdad de género y un enfoque con perspectiva de género en las acciones en materia de biodiversidad.
      .tarjeta.color-acento-botones2
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img27.png' alt='AvatarTop')
        .row.justify-content-center
          .col-auto
            .px-3.py-2.bg-c5
              p.mb-0 #[b Meta 24]
        .row
          .col-12
            .p-3
              p.text-center.mb-0 Las empresas evalúan, divulgan y reducen los riesgos e impactos negativos relacionados con la biodiversidad.
    p.mb-5(data-aos="fade-right") El marco también promueve la participación de todos los actores de la sociedad, incluidos pueblos indígenas, comunidades locales, mujeres, jóvenes y sectores privados, en la toma de decisiones y acciones relacionadas con la biodiversidad.
    .row.justify-content-center.mb-5
      .col-7.col-lg-4.pe-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img13.svg', alt='alt', style="width: 410px;").m-auto
      .col-7.col-lg-6.bg-c6(data-aos="fade-left")
        .p-4.h-100
          .row.align-items-center.h-100
            .col-12
              p.mb-0 La COP16 será la primera COP después de la adopción del Marco Global de Biodiversidad Kunming-Montreal, marcando un nuevo inicio en la lucha por la conservación.
    .row.mb-5
      .col-12
        .p-4.bg-c7(data-aos="fade-down")
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img14.svg', alt='alt', style="width: 260px;").m-auto
            .col-lg-9
              p #[b.txt-c1 Pódcast]
              p.text-white Se invita a escuchar La aventura de la flor del Inírida en la COP16, en este pódcast explora los esfuerzos globales por detener la pérdida de biodiversidad. En este episodio, la Flor del Inírida y Don Campos presentan los objetivos de la COP16, destacando el papel crucial de las comunidades locales e indígenas en la conservación del planeta.
              .row
                .col-auto
                  TarjetaAudio.color-primario(
                    texto="La aventura de la flor del Inírida en la COP16"
                    :audio="require('@/assets/curso/tema1/audio1.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c3
        .px-2
          .row.align-items-end
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/tema1/img7.svg",style="width: 60px", alt="").m-auto
            .col
              h2.mb-0 Responsabilidad y transparencia
    p.mb-5(data-aos="fade-right") El Marco Mundial de Biodiversidad de Kunming-Montreal promueve la responsabilidad y transparencia mediante la planificación, seguimiento, presentación de informes y revisión, utilizando un sistema sincronizado y cíclico.
    .row.mb-5
      .col-12.bg-c8(data-aos="fade-up")
        .row
          .col-lg-5.px-lg-0.mt-4.mt-lg-0
            figure
              img(src='@/assets/curso/tema1/img28.png', alt='alt', style="width: 530px;").m-auto
          .col-lg-7
            .p-4
              figure.mb-3.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img15.svg', alt='alt', style="width: 40px;")
              p.mb-0 Cada país debe actualizar sus estrategias nacionales de biodiversidad en consonancia con los objetivos del marco y presentar informes periódicos. Los avances se evaluarán colectivamente a nivel global, permitiendo revisiones entre pares y promoviendo la cooperación entre países, especialmente con apoyo técnico y financiero para los países en desarrollo. Se busca que estos mecanismos no sean intrusivos ni punitivos, respetando la soberanía nacional.
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c3
        .px-2
          .row.align-items-end
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/tema1/img7.svg",style="width: 60px", alt="").m-auto
            .col
              h2.mb-0 Comunicación, educación, sensibilización y adopción
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Para la #[b implementación efectiva] del Marco, es esencial aumentar la conciencia y comprensión sobre la biodiversidad en todos los niveles de la sociedad. Se debe promover la educación formal e informal, integrando contenidos sobre la conservación y el uso sostenible de la biodiversidad en los programas educativos.
        .row
          .col-12
            .p-3.bg-c9
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img16.svg', alt='alt', style="width: 90px;").m-auto
                .col
                  p.mb-0 La comunicación debe adaptarse a los distintos públicos, facilitando el acceso a la información y fomentando la participación de actores diversos como pueblos indígenas, medios de comunicación y sociedad civil. Además, se busca sensibilizar sobre los beneficios de la biodiversidad y el papel crucial de la ciencia y la innovación en la protección del medio ambiente.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img29.png', alt='alt', style="width: 550px;").m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c3
        .px-2
          .row.align-items-end
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/tema1/img7.svg",style="width: 60px", alt="").m-auto
            .col
              h2.mb-0 El Acuerdo de Escazú
    .row.align-items-center.mb-5
      .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 El Acuerdo de Escazú es uno de los tratados más importantes para la protección del medio ambiente y los derechos humanos en América Latina y el Caribe. Este acuerdo regional, adoptado en 2018, busca garantizar el acceso a la información, la participación pública y la justicia en temas ambientales. Se trata de un compromiso histórico que promueve la construcción de una relación más justa y sostenible entre las personas y la naturaleza.
      .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img17.svg', alt='alt', style="width: 240px;").m-auto
    .row.bg-c10
      .col-12
        .px-5
          .row.justify-content-center
            .col-lg-10
              .p-4.bg-c11
                figure.mb-3(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img31.png', alt='alt', style="width: 90px;").m-auto
                .row.justify-content-center.mb-4(data-aos="fade-right")
                  .col-auto.bg-c14
                    .py-2.px-3
                      p.mb-0 #[b.text-white El Acuerdo de Escazú]
                .row.justify-content-center.mb-4(data-aos="fade-left")
                  .col-md-9.col-lg-9.bg-c12
                    .p-4
                      p.mb-0 El Acuerdo de Escazú es el primer tratado ambiental de América Latina y el Caribe, enfocado en los derechos humanos relacionados con el medio ambiente.
                .row.justify-content-center
                  .col-md-8.col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
                    .p-4.bg-c13
                      figure.mb-3
                        img(src='@/assets/curso/tema1/img19.svg', alt='alt', style="width: 100px;")
                      p #[b Democracia ambiental]
                      ul.lista-ul.mb-0
                        li.d-flex
                          i.fas.fa-feather-alt(style="color: #128477")
                          |
                          p.mb-0 Fortalecer la transparencia y participación pública en temas ambientales.
                        li.d-flex
                          i.fas.fa-feather-alt(style="color: #128477")
                          |
                          p.mb-0 Es el primer tratado ambiental de América Latina y el Caribe que se centra en los derechos humanos y el medio ambiente.
                        li.d-flex
                          i.fas.fa-feather-alt(style="color: #128477")
                          |
                          p.mb-0 Reconoce el derecho de todos a vivir en un ambiente sano, protegiendo tanto a las generaciones presentes como futuras.
                  .col-md-8.col-lg-6(data-aos="fade-left")
                    .p-4.bg-c13.h-100
                      figure.mb-3
                        img(src='@/assets/curso/tema1/img20.svg', alt='alt', style="width: 100px;")
                      p #[b Protección de defensores ambientales]
                      ul.lista-ul.mb-0
                        li.d-flex
                          i.fas.fa-feather-alt(style="color: #128477")
                          |
                          p.mb-0 #[b Lo que lo hace único:] es el único tratado en el mundo que incluye la protección específica de los defensores de derechos ambientales.
                        li.d-flex
                          i.fas.fa-feather-alt(style="color: #128477")
                          |
                          p.mb-0 #[b Protecciones:] obliga a los estados a garantizar la seguridad de quienes luchan por el medio ambiente, asegurando sus derechos a la vida, integridad y libertad de expresión.
            .col-lg-10
              .px-4.pb-4.pb-lg-5.bg-c15
                .row.justify-content-center
                  .col-md-8.col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
                    .p-4.bg-c13.h-100
                      figure.mb-3
                        img(src='@/assets/curso/tema1/img21.svg', alt='alt', style="width: 100px;")
                      p #[b Enfoque en grupos vulnerables]
                      ul.lista-ul.mb-0
                        li.d-flex
                          i.fas.fa-feather-alt(style="color: #128477")
                          |
                          p.mb-0 #[b Prioridad:] garantizar la participación plena y equitativa de grupos vulnerables, como los pueblos indígenas y las comunidades locales.
                        li.d-flex
                          i.fas.fa-feather-alt(style="color: #128477")
                          |
                          p.mb-0 #[b Protección:] asegura que estos grupos puedan ejercer sus derechos de acceso a la información y la justicia ambiental.
                  .col-md-8.col-lg-6(data-aos="fade-left")
                    .p-4.bg-c13.h-100
                      figure.mb-3
                        img(src='@/assets/curso/tema1/img22.svg', alt='alt', style="width: 100px;")
                      p #[b Un compromiso para el futuro]
                      ul.lista-ul.mb-0
                        li.d-flex
                          i.fas.fa-feather-alt(style="color: #128477")
                          |
                          p.mb-0 #[b Visión a largo plazo:] un pacto no solo entre estados, sino entre gobiernos y ciudadanos.
                        li.d-flex
                          i.fas.fa-feather-alt(style="color: #128477")
                          |
                          p.mb-0 #[b Objetivo:] enfrentar desafíos como el cambio climático, la pérdida de biodiversidad y la degradación de los ecosistemas.
      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
