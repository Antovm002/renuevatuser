<template>
  <section id="download"> <!-- Ajuste de min-height para mayor espacio -->
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row align="center" justify="center">
            
            <v-col cols="10" sm="8" class="white--text text-left">
              
            <h1 class="text-center pt-6 font-weight-extra-bold display-2 white--text"> <b>"Terapias y Tratamientos"</b></h1>
            
              <br>
              <template>
                <v-container>
                <v-row>
                  <v-col cols="12" md="4" class="mb-4">
                    <v-card class="mx-auto" max-width="344" min-height="530px" elevation="5">
                      <v-img src="@/assets/img/terapiasocial.jpg" height="200px"></v-img>
                      <v-card-text>
                        <div class="text-h5 font-weight-bold secondary--text">Estrategia para el Cambio</div>
                        <p class="text-h4 font-weight-bold mb-2 teal--text">Terapia Social</p>
                        <div class="text-body-2">
                          La estrategia socio-pedagógica para el cambio es una metodología que coordina acciones con el objetivo de promover, prevenir y asistir en la evolución personal y social de los individuos.
                        </div>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn color="teal darken-2" class="white--text" @click="reveal1 = true">
                          Leer Más
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <v-card v-if="reveal1" class="position-absolute w-100" style="bottom: 0;">
                          <v-card-text class="pb-0">
                            <p class="text-h4">Resumen</p>
                            <p class="text-body-2">
                              A través de esta estrategia, se logran cambios cognitivos específicos y se brinda una adecuada capacitación social, facilitando una evolución saludable en las relaciones interpersonales.
                              En el ámbito de la socioterapia, se enfoca en el desarrollo del área consciente del individuo. Esto implica capacitar al paciente para superar situaciones socio-problemáticas, promoviendo una convivencia saludable y el desarrollo de recursos personales para una vida familiar y social con bienestar. El proceso incluye la revisión y reconstrucción de la historia personal del paciente, destacando aspectos positivos y modificando los negativos para facilitar el desarrollo de nuevas aptitudes y habilidades sociales.
                            </p>
                          </v-card-text>
                          <v-card-actions class="pt-0">
                            <v-btn color="teal darken-2" class="white--text" @click="reveal1 = false">
                              Cerrar
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-expand-transition>
                    </v-card>
                </v-col>

                <v-col cols="12" md="4" class="mb-4">
                  <v-card class="mx-auto" max-width="344" min-height="530px">
                    <v-img src="@/assets/img/terapiafamiliar.jpg" min-height="200px"></v-img>
                    <v-card-text>
                      <div class="text-h5 font-weight-bold secondary--text">Fortale la Unidad Familiar</div>
                      <p class="text-h4 font-weight-bold mb-2 teal--text">Terapia Familiar</p>
                      <div class="text-medium-emphasis">
                        La terapia familiar aborda los problemas generados en el contexto de las relaciones familiares o con personas significativas en la vida de las personas.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="teal darken-2" class="white--text" @click="reveal2 = true">Leer Más</v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <v-card v-if="reveal2" class="position-absolute w-100" style="bottom: 0;">
                        <v-card-text class="pb-0">
                          <p class="text-h4">Resumen</p>
                          <p class="text-medium-emphasis">
                            La terapia familiar es un enfoque psicoterapéutico centrado en mejorar el funcionamiento y la comprensión mutua dentro de la familia. Sus objetivos incluyen aumentar el apoyo emocional, desarrollar habilidades de afrontamiento y resolver problemas. Es especialmente útil para gestionar transiciones familiares y eventos estresantes. También se aplica en casos de problemas de consumo, donde la familia puede participar en terapia, incluso si el individuo afectado no busca tratamiento.
                          </p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                          <v-btn color="teal darken-2" class="white--text" @click="reveal2 = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-expand-transition>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" class="mb-4">
                  <v-card class="mx-auto" max-width="344" min-height="530px">
                    <v-img src="@/assets/img/terapiapsiquiatrica.jpg" min-height="200px"></v-img>
                    <v-card-text>
                      <div class="text-h5 font-weight-bold secondary--text">Salud Mental</div>
                      <p class="text-h4 font-weight-bold mb-2 teal--text">Terapia Psiquiatrica</p>
                      <div class="text-medium-emphasis">
                        La terapia psiquiátrica ayuda a diagnosticar, tratar y prevenir trastornos mentales, mejorando el bienestar emocional y la funcionalidad diaria del paciente.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="teal darken-2" class="white--text" @click="reveal3 = true">Leer Más</v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <v-card v-if="reveal3" class="position-absolute w-100" style="bottom: 0;">
                        <v-card-text class="pb-0">
                          <p class="text-h4">Resumen</p>
                          <p class="text-medium-emphasis">
                            El psiquiatra es un especialista en salud mental capacitado para proporcionar terapia y tratamiento, así como para guiar hacia hábitos saludables. Su enfoque se centra en la prevención, diagnóstico y tratamiento de trastornos mentales.
                            Para muchos trastornos mentales, los estudios sugieren que la combinación de fármacos y psicoterapia es más eficaz que utilizar estos métodos de tratamiento por separado.
                          </p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                          <v-btn color="teal darken-2" class="white--text" @click="reveal3 = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-expand-transition>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" class="mb-4">
                  <v-card class="mx-auto" max-width="344" min-height="530px">
                    <v-img src="@/assets/img/terapiapsicologica.jpg" min-height="200px"></v-img>
                    <v-card-text>
                      <div class="text-h5 font-weight-bold secondary--text">Psicoterapia</div>
                      <p class="text-h4 font-weight-bold mb-2 teal--text">Terapia Psicologica</p>
                      <div class="text-medium-emphasis">
                        La terapia psicológica evalúa y comprende las creencias del paciente y cómo estas se conectan con emociones y eventos personales.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="teal darken-2" class="white--text" @click="reveal4 = true">Leer Más</v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <v-card v-if="reveal4" class="position-absolute w-100" style="bottom: 0;">
                        <v-card-text class="pb-0">
                          <p class="text-h4">Resumen</p>
                          <p class="text-medium-emphasis">
                            Se orienta al paciente a identificar y cambiar patrones de pensamiento que causan conflictos emocionales, mejorando así su calidad de vida. La psicoterapia se enfoca en el diagnóstico, tratamiento, resolución y prevención de problemas de salud mental, emocionales o de conducta.
                          </p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                          <v-btn color="teal darken-2" class="white--text" @click="reveal4 = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-expand-transition>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" class="mb-4">
                  <v-card class="mx-auto" max-width="344" min-height="530px">
                    <v-img src="@/assets/img/terapiapsico.jpg" min-height="200px"></v-img>
                    <v-card-text>
                      <div class="text-h5 font-weight-bold secondary--text">Terapia Individual</div>
                      <p class="text-h4 font-weight-bold mb-2 teal--text">Psicoterapeuta</p>
                      <div class="text-medium-emphasis">
                        La psicoterapia individual se presenta como una herramienta esencial y eficaz en el tratamiento de una variedad de problemas emocionales y psicológicos que pueden afectar significativamente la calidad de vida de una persona.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="teal darken-2" class="white--text" @click="reveal5 = true">Leer Más</v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <v-card v-if="reveal5" class="position-absolute w-100" style="bottom: 0;">
                        <v-card-text class="pb-0">
                          <p class="text-h4">Resumen</p>
                          <p class="text-medium-emphasis">
                            La psicoterapia individual, con sesiones periódicas recomendadas según las necesidades del paciente, aborda problemas como ansiedad, depresión, trauma, estrés y angustia. Se enfoca en transformar respuestas emocionales negativas y en mejorar la calidad de vida mediante exploración emocional segura y desarrollo de habilidades de afrontamiento, previniendo así futuros problemas emocionales y promoviendo una vida equilibrada y satisfactoria.  
                          </p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                          <v-btn color="teal darken-2" class="white--text" @click="reveal5 = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-expand-transition>
                  </v-card>
                </v-col>
                
                <v-col cols="12" md="4" class="mb-4">
                  <v-card class="mx-auto" max-width="344" min-height="530px">
                    <v-img src="@/assets/img/tiposdetratamientos.jpeg" min-height="200px"></v-img>
                    <v-card-text>
                      <div class="text-h5 font-weight-bold secondary--text">Tipos de</div>
                      <p class="text-h4 font-weight-bold mb-2 teal--text">Tratamientos</p>
                      <div class="text-medium-emphasis">
                        Tratamiento hospitalario de dia, mediodia, noche y ambulatorio, aqui abajo te descrbiremos cada uno de estos tratamientos.  
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="teal darken-2" class="white--text" @click="reveal6 = true">Leer Más</v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <v-card v-if="reveal6" class="position-absolute w-100" style="bottom: 0;">
                        <v-card-text class="pb-0">
                          <p class="text-h4">Resumen</p>
                          <p class="text-medium-emphasis">
                            Tratamiento hospital de día: Asistencia diaria de 10 a 19 horas, Indicado para pacientes con estructuras familiares y potenciales de salud adecuados. Objetivo de restablecer la organización personal del paciente, con soporte telefónico permanente las 24 horas.
                            <br>
                              Tratamiento hospital medio día: Asistencia diaria de 15 a 19 horas, Enfoque en terapias grupales de identificación. Recomendado para pacientes con responsabilidades laborales o estudiantiles que impiden otras modalidades, tras evaluación de admisión.
                              <br>
                              Tratamiento hospital de noche: Ingreso diario a partir de las 19 horas, pernoctando en la institución, Brinda contención crucial en horarios críticos. Adecuado para pacientes con obligaciones laborales o ambientes familiares no propicios para la recuperación.
                              <br>
                              Tratamiento ambulatorio: Uno a tres encuentros semanales de terapia grupal de identificación, Indicado para pacientes en reinserción laboral o estudiantil, o tras completar un proceso de internación, Admisión posible para pacientes nuevos después de una evaluación inicial.
                              <br>
                              Cada modalidad se adapta a diferentes necesidades y circunstancias del paciente, ofreciendo apoyo continuo y estructurado para su recuperación y bienestar.  
                        </p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                          <v-btn color="teal darken-2" class="white--text" @click="reveal6 = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-expand-transition>
                  </v-card>
                </v-col>
                
              </v-row>
              </v-container>
              <br>
              
              <template>
                  <v-row align="center" justify="center" dense>
                    <!-- Primera columna con V-Card -->
                    <v-col cols="12" md="6">
                      <v-card class="mx-auto" color="#FFFCFF" dark>
                        <v-card-title class="black--text">
                          <h3 class="text-h6"><strong>UNIDAD RESIDENCIAL</strong></h3>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="black--text">
                          Nuestro centro cuenta con todas las comodidades y servicios. Si eliges esta modalidad, te hospedas en el centro durante un tiempo para recibir tratamiento las 24 horas del día. Es ideal si necesitas un ambiente seguro y estructurado para tu recuperación, especialmente si requieres desintoxicación o apoyo intensivo.
                        </v-card-text>
                      </v-card>
                    </v-col>
                    
                    <!-- Segunda columna con V-Card -->
                    <v-col cols="12" md="6">
                      <v-card class="mx-auto" color="#247BA0">
                        <v-card-title class="white--text">
                          <h3 class="text-h6"><strong>UNIDAD AMBULATORIA</strong></h3>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="white--text">
                          Este enfoque es ideal para quienes quieren mantener sus responsabilidades diarias mientras reciben apoyo. Proporciona terapias individuales y grupales para aprender habilidades de afrontamiento y promover una vida equilibrada sin interrupciones mayores en tus actividades diarias.
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </template>
                <br>

              <div class="fixed-whatsapp-button">
                <v-btn
                  color="success"
                  dark
                  large
                  @click="redirectToWhatsApp"
                >
                  Solicitar Información
                </v-btn>
              </div>
              </template>

              <br>

              
              

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
  
</template>

<style scoped>
.fixed-whatsapp-button {
  position:relative;
  transform: translate(30%, 50%);
}
.v-btn.success {
  background-color: #25d366 !important;
  color: white !important;
  font-size: 1.2rem !important;
  font-weight: bold !important;
}

#download {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#download .container,
#download .row {
  height: 100%;
}

.v-card {
  position: relative;
}

.v-card .v-card-text {
  padding-bottom: 0;
}

.v-card .v-card-actions {
  padding-top: 0;
}

.v-card .position-absolute {
  position: absolute !important;
  bottom: 0;
}
</style>

<script>

export default {
  data() {
    return {
      reveal: false,
      reveal1: false,
      reveal2: false,
      reveal3: false,
      reveal4: false,
      reveal5: false,
      reveal6: false
    };
  },

  methods: {
    redirectToWhatsApp() {
      const phoneNumber = "+5491159609798"; // Reemplaza con tu número de teléfono
      const message = "Buenas, solicito más información sobre sus servicios en 'Renueva Tu Ser'."; // Mensaje predefinido
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    },
}
}
</script>