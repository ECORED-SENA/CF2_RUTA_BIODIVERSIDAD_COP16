export default {
  global: {
    componenteFormativo:
      'Marco global de biodiversidad y participación comunitaria',
    descripcionCurso:
      'El Marco Global de Biodiversidad Kunming-Montreal establece objetivos para conservar la biodiversidad hasta 2050. Incluye metas para restaurar ecosistemas, proteger especies y garantizar el uso sostenible de los recursos. La COP16 en Colombia será clave para la implementación global. La educación, innovación y participación comunitaria son fundamentales para el éxito de este marco ambiental.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco Global de Biodiversidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La voz de la biodiversidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La educación como herramienta para la conservación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/COP_Unidad2_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Marco Global de Biodiversidad',
      referencia:
        'Convenio sobre la Diversidad Biológica [CBD]. (2022). <i>Decisión adoptada por la Conferencia de las Partes en el Convenio sobre la Diversidad Biológica: Marco Mundial de Biodiversidad de Kunming-Montreal</i> (CBD/COP/DEC/15/4). Naciones Unidas.',
      tipo: 'Documento',
      link: 'https://www.cbd.int/doc/decisions/cop-15/cop-15-dec-04-es.pdf',
    },
    {
      tema: 'Marco Global de Biodiversidad',
      referencia:
        'Biodiversidad COP16. (2024). FOROS. <i>Conexión Biodiversidad: camino a la COP16</i>.',
      tipo: 'Foros',
      link: 'https://biodiversidadcop16.foronacionalambiental.org.co/',
    },
    {
      tema: 'Acuerdo de Escazú',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible - Colombia. (2024). <i>¡Acuerdo de Escazú y relación con la COP16!</i>. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=p1Rl17HSMTE&ab_channel=LaSillaVac%C3%ADa',
    },
    {
      tema: 'Acuerdo de Escazú',
      referencia: 'Escazú  Ahora. (2020). <i>ABC del acuerdo de Escazú</i>.',
      tipo: 'Documento',
      link:
        'https://escazuahora.com.co/wp-content/uploads/2020/05/ABC_del_Acuerdo_de_Escazu-1.pdf',
    },
    {
      tema: 'Acuerdo de Escazú',
      referencia:
        'Derecho, Ambiente y Recursos Naturales (DAR). (2019). Acuerdo de Escazú.  <i>Regional sobre el Acceso a la Información, la Participación Pública y el Acceso a la Justicia en Asuntos Ambientales en América Latina y el Caribe</i>. Primera edición. Lima, Perú: Industria Gráfica Libra SAC.',
      tipo: 'Documento',
      link:
        'https://www.dar.org.pe/archivos/publicacion/203_Acuerdo_Escazu.pdf',
    },
    {
      tema: 'La voz de la biodiversidad',
      referencia:
        'WWF Colombia. (2022). <i>¿Qué está causando la pérdida de biodiversidad? | Un mensaje en la voz de #LagranjadelBorrego| COP15</i>. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=-IDnbulx8y0&ab_channel=WWFColombia',
    },
    {
      tema: 'La educación como herramienta para la conservación',
      referencia:
        'COP16. (2024). <i>Guía para Educadores de colegios sobre la COP16 y la protección de la biodiversidad</i>.',
      tipo: 'Cartilla',
      link:
        'https://www.cop16colombia.com/es/wp-content/uploads/2024/07/GUIA_PARA_EDUCADORES_DE_COLEGIO.pdf',
    },
    {
      tema: 'La educación como herramienta para la conservación',
      referencia: 'COP16. (2024). <i>Desafío de la Biodiversidad Local</i>.',
      tipo: 'Cartilla',
      link:
        'https://www.cop16colombia.com/es/wp-content/uploads/2024/07/DESAFIO-DE-LA-BIODIVERSIDAD-LOCAL.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Biodiversidad',
      significado:
        'diversidad de especies de plantas, animales y microorganismos en un ecosistema, incluyendo la variabilidad genética y de ecosistemas.',
    },
    {
      termino: 'Cambio climático',
      significado:
        'alteración del clima del planeta debido a actividades humanas, como la emisión de gases de efecto invernadero.',
    },
    {
      termino: 'Conservación',
      significado:
        'práctica de proteger y mantener los ecosistemas y la biodiversidad para asegurar su preservación a largo plazo.',
    },
    {
      termino: 'COP16',
      significado:
        '16ª conferencia de las partes del convenio sobre la diversidad biológica, reunión internacional para acordar acciones en favor de la biodiversidad.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'modelo de desarrollo que busca satisfacer las necesidades actuales sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas.',
    },
    {
      termino: 'Ecosistema',
      significado:
        'conjunto de organismos vivos que interactúan entre sí y con su entorno físico, formando una unidad funcional.',
    },
    {
      termino: 'Educación ambiental',
      significado:
        'proceso para concienciar y enseñar a las personas sobre problemas ambientales, promoviendo acciones para proteger el medio ambiente.',
    },
    {
      termino: 'Marco Global de Biodiversidad Kunming-Montreal',
      significado:
        'acuerdo internacional adoptado en 2022 con el objetivo de proteger y restaurar la biodiversidad global para 2050.',
    },
    {
      termino: 'Metas globales de biodiversidad',
      significado:
        'objetivos internacionales para restaurar y conservar al menos el 30 % de los ecosistemas terrestres y marinos para 2030.',
    },
    {
      termino: 'Participación comunitaria',
      significado:
        'involucramiento activo de las comunidades en la toma de decisiones y acciones para la protección y conservación del medio ambiente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Convenio sobre la Diversidad Biológica [CBD]. (2022). <i>Decisión adoptada por la Conferencia de las Partes en el Convenio sobre la Diversidad Biológica: Marco Mundial de Biodiversidad de Kunming-Montreal</i> (CBD/COP/DEC/15/4). Naciones Unidas. ',
      link: 'https://www.cbd.int/doc/decisions/cop-15/cop-15-dec-04-es.pdf',
    },
    {
      referencia:
        'COP16. (2024). <i>¿Cuáles son las 23 Metas Kumming-Montreal</i>. ',
      link:
        'https://www.cop16colombia.com/es/wp-content/uploads/2024/08/Cua%CC%81les-son-las-23-Metas-Kumming.pdf',
    },
    {
      referencia: 'COP16. (2024). <i>La Voz de la Biodiversidad</i>. ',
      link:
        'https://www.cop16colombia.com/es/wp-content/uploads/2024/07/La-Voz-de-la-Biodiversidad.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Germán Acosta Ramos',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jose Eduardo Solano Rivero',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gustavo Adolfo Contreras Barranco',
          cargo: 'Guionista validador',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
