<template>
  <section id="pricing" class="pb-8">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <br>
          <v-card style="width: 100%">
            <h2 class="text-center pt-6 font-weight-light display-2"><strong>Conoce Nuestras Instalaciones</strong></h2>
            <v-divider class="my-6"></v-divider>
            <v-row class="text-center">
              
              <template>
                <v-carousel
                  height="520"
                  cycle
                  hide-delimiter-background>

                  <v-carousel-item>
                  <v-img src="@/assets/img/instalaciones5.jpeg" height="520px"></v-img>
                  </v-carousel-item>

                  <v-carousel-item>
                  <v-img src="@/assets/img/instalaciones1.jpeg" height="520px"></v-img>
                  </v-carousel-item>

                  <v-carousel-item>
                  <v-img src="@/assets/img/instalaciones2.jpeg" height="520px"></v-img>
                  </v-carousel-item>

                  <v-carousel-item>
                  <v-img src="@/assets/img/instalaciones3.jpeg" height="520px"></v-img>
                  </v-carousel-item>

                  <v-carousel-item>
                  <v-img src="@/assets/img/instalaciones4.jpeg" height="520px"></v-img>
                  </v-carousel-item>

                  
                </v-carousel>
              </template>

            </v-row>
          </v-card>
          <br>
          <br>
          <br>
          <hr>
          <v-card style="width: 100%">
            <h2 class="text-center pt-6 font-weight-light display-2"><strong>Eventos y Actividades Recreativas</strong></h2>
            <v-divider class="my-6"></v-divider>
            <v-row class="text-center">
              
              <template>
                <v-carousel
                  height="520"
                  cycle
                  hide-delimiter-background>

                  <v-carousel-item>
                  <v-img src="@/assets/img/recreativas1.jpeg" height="520px"></v-img>
                  </v-carousel-item>
                  
                  <v-carousel-item>
                  <v-img src="@/assets/img/recreativas2.jpeg" height="520px"></v-img>
                  </v-carousel-item>

                  <v-carousel-item>
                  <v-img src="@/assets/img/recreativas3.jpeg" height="520px"></v-img>
                  </v-carousel-item>

                  <v-carousel-item>
                  <v-img src="@/assets/img/recreativas4.jpeg" height="520px"></v-img>
                  </v-carousel-item>

                  <v-carousel-item>
                  <v-img src="@/assets/img/recreativas5.jpeg" height="520px"></v-img>
                  </v-carousel-item>

                  
                </v-carousel>
              </template>

            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </section>
</template>

<style lang="scss">
$main_color: #283e79;

ul {
  font-size: 13px;
  line-height: 1.5em;
  margin: 5px 0 15px;
  padding: 0;

  li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }

  li {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 10px;
      height: 10px;
      background-color: $main_color;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-eeborder-radius: 50%;
    }
  }
}
</style>

<style scoped>
.header {
  background-color: #283e79;
  color: white;
}

.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #e0effc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}

#pricing {
  z-index: 0;
}

.content {
  z-index: 1;
}

svg {
  overflow: hidden;
}

section {
  position: relative;
}
</style>

<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },

    computed: {
    size() {
      const size = {md: "large", xl: "x-large"}[
          this.$vuetify.breakpoint.name
          ];
      return size ? {[size]: true} : {};
    }
  },
};
</script>