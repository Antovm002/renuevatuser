<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <br>
              <h2 class="font-weight-light display-2">
                <b><u>Sobre nosotros:</u></b></h2>
              <br>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <p class="text-justify">
                    <img width="20" height="20" src="https://img.icons8.com/material-two-tone/20/about.png" alt="about"/>
                    Desde <strong>el momento en que cruzas nuestras puertas</strong>, sentirás la <strong>calidez y la acogida de un equipo comprometido</strong> con tu bienestar. Aquí, cada individuo es <strong>tratado con el respeto y la dignidad que merece</strong>, reconociendo su unicidad y sus potencialidades. Nuestro <strong>enfoque personalizado y empático</strong> garantiza que cada tratamiento se adapte a tus necesidades específicas.
                  </p>
                </v-col>
                <h3><strong>Un Nuevo Comienzo</strong></h3>
                <v-col cols="12" class="d-flex align-center">
                  <p class="text-justify">
                    El cambio en <strong>Renueva Tu Ser</strong> es profundo y duradero. <strong>No solo trabajamos en los síntomas</strong>, sino que nos enfocamos en la <strong>raíz de los problemas</strong>, promoviendo una transformación integral que abarca <strong>el cuerpo, la mente y el espíritu</strong>. Al completar nuestros programas, <strong>no solo te sentirás mejor</strong>, sino que te convertirás en una versión <strong>renovada de ti mismo</strong>, listo para enfrentar el mundo con una perspectiva fresca y positiva.
                  </p>
                </v-col>
                <h3><strong>Testimonios de Esperanza</strong></h3>
                <v-col cols="12" class="d-flex align-center">
                  <p class="text-justify">
                    <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/chat.png" alt="chat"/>
                    "<i>Entré al centro sintiéndome perdido y desesperado, pero gracias a la dedicación y el apoyo incondicional del equipo, salí sintiéndome renovado, lleno de esperanza y con una nueva visión para mi vida.</i>" - <small>Martin A. P.</small>
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <p class="text-justify">
                    <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/chat.png" alt="chat"/>

                  "<i>No solo me ayudó a superar mi adicción, sino que me dio las herramientas para vivir una vida plena y significativa. Nunca podré agradecerles lo suficiente.</i>" - <small>Nadia R.</small> 
                  </p>
                  <br>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/WhatsApp Image 2024-07-09 at 20.38.23.jpeg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <div class="fixed-whatsapp-button">
      <v-btn
      class="whatsapp-button"
                  color="success"
                  fab
                  dark
                  @click="redirectToWhatsApp"
      >
      <v-icon>mdi-whatsapp</v-icon>
      </v-btn>
    </div>

  </section>
</template>

<script>
export default {
  methods: {
    redirectToWhatsApp() {
      const phoneNumber = "+5491159609798"; // Reemplaza con tu número de teléfono
      const message = "Buenas, solicito más información sobre sus servicios en 'Renueva Tu Ser'."; // Mensaje predefinido
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    },
  }
};
</script>

<style scoped>
.fixed-whatsapp-button {
  position:fixed;
  bottom: 10%;
  right: 90%;
  transform: translate(50%, 50%);
  z-index: 1000;
  text-align: center;
  width: 100%;
}
.v-btn.success {
  background-color: #25d366 !important;
  color: white !important;
  font-size: 1.2rem !important;
  font-weight: bold !important;
}
#about {
  background-color: #f4f7f5;
}

</style>
