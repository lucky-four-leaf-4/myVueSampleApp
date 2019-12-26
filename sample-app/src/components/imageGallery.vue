<template>
  <section class="imagegallery">
    <picture class="mainPicture">
      <img :src="urlpath" />
      <p>{{images.id}}</p>
    </picture>
    <section class="thumbnails">
      <picture class="subPictures" v-for="image in images" :key="image.id">
        <img :src="image.url" @click="changeImage($event)"/>
        <p>ID : {{image.id}}</p>
        <dl>
          <dt>title:</dt>
          <dd>{{image.alt}}</dd>
        </dl>
      </picture>
    </section>
  </section>
</template>

<script>
export default {
  name: "imagegallery",
  data: function() {
    return {
      images: [
        {
          id: 1,
          url:
            "https://cdn.pixabay.com/photo/2019/11/12/15/47/aesthetic-4621334_1280.jpg",
          alt: "美的-晩秋-雨-自然"
        },
        {
          id: 2,
          url:
            "https://cdn.pixabay.com/photo/2018/11/12/18/44/thanksgiving-3811492_1280.jpg",
          alt: "感謝-カボチャ-秋-自然"
        },
        {
          id: 3,
          url:
            "https://cdn.pixabay.com/photo/2019/10/07/11/26/wintry-4532412_1280.jpg",
          alt: "冬の-夜明け-秘密-光-木"
        },
        {
          id: 4,
          url:
            "https://cdn.pixabay.com/photo/2019/10/27/18/48/new-york-4582500_1280.jpg",
          alt: "ニューヨーク-スカイライン"
        },
        {
          id: 5,
          url:
            "https://cdn.pixabay.com/photo/2019/11/20/13/09/river-4640055_1280.jpg",
          alt: "川-歴史的な中心部-スイス"
        }
      ]
    };
  },
  methods:{
    changeImage(event){
      const currentSrc = event.target.currentSrc;
      this.$store.dispatch("actionchangeImage",currentSrc)
      }
  },
  computed:{
    urlpath(){
      return this.$store.state.imgSrcUrl
    }
    }
};
</script>

<style scoped>
.mainPicture {
  max-width: 400px;
  width: 100%;
  display: block;
  margin: auto;
}
.mainPicture img {
  display: block;
  width: 100%;
}
.thumbnails {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.subPictures {
  display: block;
  max-width: 150px;
  width: 100%;
}
.subPictures img {
  display: block;
  width: 100%;
}
.thumbnails dl {
  display: flex;
  flex-direction: row;
}
.thumbnails dl dd {
  margin: 0;
}
</style>