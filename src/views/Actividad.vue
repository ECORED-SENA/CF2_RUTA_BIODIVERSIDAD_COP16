<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar el Marco Global de Biodiversidad Kunming-Montreal y la COP16, enfatizando la importancia de la educación ambiental, la conservación de la biodiversidad y los compromisos internacionales.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es el Marco Global de Biodiversidad Kunming-Montreal?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un acuerdo para la restauración de ecosistemas marinos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un acuerdo internacional para la conservación de la biodiversidad hasta 2050.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un plan de desarrollo urbano para ciudades sostenibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un tratado sobre energías renovables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿En qué año se adoptó el Marco Global de Biodiversidad Kunming-Montreal?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '2022.', esCorrecta: true },
            { id: 'b', texto: '2020.', esCorrecta: false },
            { id: 'c', texto: '2019.', esCorrecta: false },
            { id: 'd', texto: '2023.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es uno de los objetivos principales del Marco Global de Biodiversidad para el año 2030?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la deforestación en áreas protegidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteger el 50% de las áreas terrestres y marinas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Restaurar el 30% de los ecosistemas degradados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar la extracción de recursos naturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Dónde se celebrará la COP16 en 2024?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Brasil.', esCorrecta: false },
            { id: 'b', texto: 'Colombia.', esCorrecta: true },
            { id: 'c', texto: 'Canadá.', esCorrecta: false },
            { id: 'd', texto: 'China.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué herramienta es fundamental para el éxito de los compromisos asumidos en la COP16?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'La minería sostenible.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La reducción de emisiones de carbono.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'La educación ambiental.', esCorrecta: true },
            { id: 'd', texto: 'La industrialización.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'El Marco Global de Biodiversidad Kunming-Montreal se centra en la conservación de la biodiversidad hasta 2050.',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'La educación ambiental no juega un papel relevante en la participación comunitaria para la conservación de la biodiversidad.',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'La COP16 será la primera conferencia de biodiversidad después de la adopción del Marco Kunming-Montreal.',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La participación de los jóvenes es clave para el éxito de los acuerdos de la COP16.',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Uno de los objetivos de la COP16 es restaurar el 50% de los ecosistemas terrestres degradados para 2030.',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
