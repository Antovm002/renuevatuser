<template>
  <section class="pb-8" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h2 class="font-weight-light display-1"><u><b>Contactanos</b></u></h2>
              <h3 class="font-weight-light mt-3">
                Puedes enviarnos un <strong>correo electronico rellenando el formulario</strong> que ves a la derecha <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/15/right--v1.png" alt="right--v1"/>

              </h3>
              <h3 class="font-weight-light mt-3">
                o bien <strong>contactanos a traves de nuestros medios de comunicación:</strong>
              </h3>
              <h3 class="font-weight-light mt-3">
                <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/phone-message.png" alt="phone-message"/> <strong>Número:</strong> +54 9 11 5960-9798
              </h3>
              <h3 class="font-weight-light">
                <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/new-post.png" alt="new-post"/> <strong>Email:</strong> Matiasleonrios@gmail.com
              </h3>
            </v-col>
            <v-col cols="12" sm="7">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Nombre"
                    name = "name"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    name = "email"
                    required
                ></v-text-field>

                <v-textarea
                    v-model="message"
                    :rules="textAreaRules"
                    label="Mensaje"
                    name = "message"
                    required
                />

                <v-btn
                    :disabled="!valid"
                    color="primary"
                    :dark="valid"
                    rounded
                    block
                    class="mt-3"
                    @click="sendEmail"
                >
                  Enviar
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg"/>
    </div>
    
  </section>
</template>

<style scoped>
#contact {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

</style>

<script>
import emailjs from 'emailjs-com'  // Importar emailjs

// import {db} from '@/main'

export default {
  data: () => ({
    /* icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"], */
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "El campo 'Nombre' es obligatorio",
      (v) => (v && v.length >= 6) || "El Nombre debe tener mas de 6 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "El campo 'Email' es obligatorio",
      (v) => /.+@.+\..+/.test(v) || "El E-mail debe ser valido",
    ],
    message: "",
    textAreaRules: [
      (v) => !!v || "El campo 'Texto' es obligatorio",
      (v) => (v && v.length >= 10) || "Mínimo de 10 caracteres",
    ],
    lazy: false,
    snackbar: {
      enabled: false,
      text: '',
      color: ''
    }
  }),
  methods: {
    sendEmail() {
      emailjs.send("service_w5vtk7d", "template_0pn5h1a", {
        from_name: this.name,
        from_email: this.email,
        to_email: 'renuevatuserok@gmail.com',
        message: this.message
      }, "B3_fPQO_fwF79_WO-")
      .then(response => {
        alert('Mensaje enviado correctamente');
        this.resetForm();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
      });
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.$refs.form.resetValidation();
    }
  }
};
</script>
