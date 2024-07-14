<template>
  <section id="download" style="min-height: 1200px;">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row align="center" justify="center">
            
            <v-col cols="10" sm="8" class="white--text text-left">
              
            <h1 class="text-center pt-6 font-weight-light display-2"> <b><u>Terapias y Tratamientos</u></b></h1>
            
              <br>
              <template>
                <v-container>
                <v-row>
                <v-col cols="6" md="4">
                  <v-card class="mx-auto" max-width="344">
                    <v-img src="@/assets/img/terapiasocial.jpg" height="200px"></v-img>
                    <v-card-text>
                      <div class="text-h5 font-weight-bold">Estrategia para el Cambio</div>
                      <p class="text-h4 font-weight-black mb-2">Terapia Social</p>
                      <div class="text-medium-emphasis">
                        La estrategia socio-pedagógica para el cambio es una metodología que coordina acciones con el objetivo de promover, prevenir y asistir en la evolución personal y social de los individuos.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="teal-accent-4" text variant="text" @click="reveal1 = true">Leer Más</v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <v-card v-if="reveal1" class="position-absolute w-100" style="bottom: 0;">
                        <v-card-text class="pb-0">
                          <p class="text-h4">Resumen</p>
                          <p class="text-medium-emphasis">
                            A través de esta estrategia, se logran cambios cognitivos específicos y se brinda una adecuada capacitación social, facilitando una evolución saludable en las relaciones interpersonales.

En el ámbito de la socioterapia, se enfoca en el desarrollo del área consciente del individuo. Esto implica capacitar al paciente para superar situaciones socio-problemáticas, promoviendo una convivencia saludable y el desarrollo de recursos personales para una vida familiar y social con bienestar. El proceso incluye la revisión y reconstrucción de la historia personal del paciente, destacando aspectos positivos y modificando los negativos para facilitar el desarrollo de nuevas aptitudes y habilidades sociales.
                          </p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                          <v-btn color="teal-accent-4" text variant="text" @click="reveal1 = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-expand-transition>
                  </v-card>
                </v-col>

                <v-col cols="6" md="4">
                  <v-card class="mx-auto" max-width="344">
                    <v-img src="@/assets/img/terapiafamiliar.jpg" height="200px"></v-img>
                    <v-card-text>
                      <div class="text-h5 font-weight-bold">Fortale la Unidad Familiar</div>
                      <p class="text-h4 font-weight-black mb-2">Terapia Familiar</p>
                      <div class="text-medium-emphasis">
                        La terapia familiar aborda los problemas generados en el contexto de las relaciones familiares o con personas significativas en la vida de las personas.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="teal-accent-4" text variant="text" @click="reveal2 = true">Leer Más</v-btn>
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
                          <v-btn color="teal-accent-4" text variant="text" @click="reveal2 = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-expand-transition>
                  </v-card>
                </v-col>

                <v-col cols="6" md="4">
                  <v-card class="mx-auto" max-width="344">
                    <v-img src="@/assets/img/terapiapsiquiatrica.jpg" height="200px"></v-img>
                    <v-card-text>
                      <div class="text-h5 font-weight-bold">Salud Mental</div>
                      <p class="text-h4 font-weight-black mb-2">Terapia Psiquiatrica</p>
                      <div class="text-medium-emphasis">
                        La terapia psiquiátrica ayuda a diagnosticar, tratar y prevenir trastornos mentales, mejorando el bienestar emocional y la funcionalidad diaria del paciente.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="teal-accent-4" text variant="text" @click="reveal3 = true">Leer Más</v-btn>
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
                          <v-btn color="teal-accent-4" text variant="text" @click="reveal3 = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-expand-transition>
                  </v-card>
                </v-col>

                <v-col cols="6" md="4">
                  <v-card class="mx-auto" max-width="344">
                    <v-img src="@/assets/img/terapiapsicologica.jpg" height="200px"></v-img>
                    <v-card-text>
                      <div class="text-h5 font-weight-bold">Psicoterapia</div>
                      <p class="text-h4 font-weight-black mb-2">Terapia Psicologica</p>
                      <div class="text-medium-emphasis">
                        La terapia psicológica evalúa y comprende las creencias del paciente y cómo estas se conectan con emociones y eventos personales.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="teal-accent-4" text variant="text" @click="reveal4 = true">Leer Más</v-btn>
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
                          <v-btn color="teal-accent-4" text variant="text" @click="reveal4 = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-expand-transition>
                  </v-card>
                </v-col>

                <v-col cols="6" md="4">
                  <v-card class="mx-auto" max-width="344">
                    <v-img src="@/assets/img/terapiapsico.jpg" height="200px"></v-img>
                    <v-card-text>
                      <div class="text-h5 font-weight-bold">Terapia Individual</div>
                      <p class="text-h4 font-weight-black mb-2">Psicoterapeuta</p>
                      <div class="text-medium-emphasis">
                        La psicoterapia individual se presenta como una herramienta esencial y eficaz en el tratamiento de una variedad de problemas emocionales y psicológicos que pueden afectar significativamente la calidad de vida de una persona.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="teal-accent-4" text variant="text" @click="reveal5 = true">Leer Más</v-btn>
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
                          <v-btn color="teal-accent-4" text variant="text" @click="reveal5 = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-expand-transition>
                  </v-card>
                </v-col>
                
                <v-col cols="6" md="4">
                  <v-card class="mx-auto" max-width="344">
                    <v-img src="@/assets/img/tiposdetratamientos.jpeg" height="200px"></v-img>
                    <v-card-text>
                      <div class="text-h5 font-weight-bold">Tipos de</div>
                      <p class="text-h4 font-weight-black mb-2">Tratamientos</p>
                      <div class="text-medium-emphasis">
                        Tratamiento hospitalario de dia, mediodia, noche y ambulatorio, aqui abajo te descrbiremos cada uno de estos tratamientos.  
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="teal-accent-4" text variant="text" @click="reveal6 = true">Leer Más</v-btn>
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
                          <v-btn color="teal-accent-4" text variant="text" @click="reveal6 = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-expand-transition>
                  </v-card>
                </v-col>
                  <br>
                <br>
                <hr>
              </br>
                </v-row>
                </v-container>
                </template>

              
                <h2>.</h2>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>



<style scoped>
#download {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
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
  }
};</script>