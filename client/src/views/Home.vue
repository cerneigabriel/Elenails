<template>
  <div class="Home">
    <WindowSlide
      id="slide_1"
      class="Hero"
      theme="dark"
      direction="down"
      bgColor="white"
      nextSlide="#slide_2"
    >
      <v-container class="py-0" fill-height>
        <v-row
          no-gutters
          align="center"
          justify="center"
          class="align-center fill-height"
        >
          <v-col cols="6" xl="6" md="6" class="d-flex align-end fill-height">
            <img
              class="Hero__image"
              src="/images/hero_image.png"
              alt="hero_image"
            />
          </v-col>
          <v-col cols="6" xl="6" md="6">
            <v-row align="center" justify="center">
              <v-col cols="8">
                <TextBox
                  subtitle="It's just a subtitle for this section"
                  title="Lorem ipsum dolor"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s. Tting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.Industry"
                  align="left"
                  color="light"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </WindowSlide>
    <WindowSlide
      id="slide_2"
      class="Hero"
      theme="dark"
      direction="down"
      bgColor="gray_lighter"
      nextSlide="#slide_3"
    >
      <v-container class="py-0" fill-height>
        <v-row
          no-gutters
          align="center"
          justify="center"
          class="align-center fill-height"
        >
          <v-col cols="6" xl="6" md="6">
            <v-row align="center" justify="center">
              <v-col cols="8">
                <TextBox
                  subtitle="About me"
                  title="I'm Jessey"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Tting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Tting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                  align="right"
                  color="light"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" xl="6" md="6">
            <v-row align="center" justify="center">
              <v-col cols="8">
                <ImageBox
                  image="/images/about_img.jpg"
                  title="Cernei Elena"
                  description=""
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </WindowSlide>
    <WindowSlide
      id="slide_3"
      class="Hero"
      theme="light"
      direction="up"
      bgColor="dark"
      nextSlide="#slide_1"
    >
      <v-container class="py-0" fill-height>
        <v-row
          no-gutters
          align="center"
          justify="center"
          class="align-center fill-height"
        >
          <v-col cols="6" xl="6" md="6" class="d-flex align-end fill-height">
          </v-col>
          <v-col cols="6" xl="6" md="6">
            <v-row align="center" justify="center">
              <v-col cols="8">
                <TextBox
                  subtitle="It's just a subtitle for this section"
                  title="Lorem ipsum dolor"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s. Tting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.Industry"
                  align="right"
                  color="light"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </WindowSlide>
  </div>
</template>

<script>
import WindowSlide from "@/components/WindowSlide";
import TextBox from "@/components/TextBox";
import ImageBox from "@/components/ImageBox";

export default {
  name: "Home",
  components: {
    WindowSlide,
    TextBox,
    ImageBox
  }
};
</script>

<style lang="scss" scoped>
.Home {
}

.Hero {
  &__image {
    width: 100%;
    color: #fff;
  }
}
</style>
