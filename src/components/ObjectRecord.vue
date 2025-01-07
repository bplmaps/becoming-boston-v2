<script setup>
import OpenSeadragon from '@components/OpenSeadragon.vue';
</script>

<template>
  <div class="container my-12 pb-8">
    <div>
      <h2 class="font-sans text-4xl font-extrabold mb-4">{{ objectInfo.title }}</h2>
      <div class="font-sans text-xl" v-html="parsedTombstone" />
      <div class="py-2">
        <a :href="objectInfo.collection_link" target="_blank"
          class="font-extrabold border-2 border-midnight rounded py-1 px-3 inline-block hover:bg-blue-100">Collection
          Record</a>
      </div>

      <div v-if="objectInfo.image_source.type === 'iiif'" class="h-[75vh] w-full bg-black p-2 my-6">
        <div class="relative h-full w-full overflow-hidden">
          <OpenSeadragon
                    :id="uuidv4()"
                    :options="{
                      tileSources: [objectInfo.image_source.src],
                      prefixUrl: '/digital-exhibitions/becoming-boston/openseadragon/',
                      preserveViewport: true,
                      visibilityRatio: 1,
                      defaultZoomLevel: 0,
                      sequenceMode: true,
                      gestureSettingsMouse: {scrollToZoom: false}
                    }"
                  />
        </div>
      </div>

      <div v-else-if="objectInfo.image_source.type === 'static'" class="h-[75vh] w-full bg-black p-2 my-6">
        <div class="relative h-full w-full overflow-hidden">
          <OpenSeadragon
                    :id="uuidv4()"
                    :options="{
                      tileSources: {type: 'image', url: objectInfo.image_source.src},
                      prefixUrl: '/openseadragon/',
                      preserveViewport: true,
                      visibilityRatio: 1,
                      defaultZoomLevel: 0,
                      sequenceMode: true,
                      gestureSettingsMouse: {scrollToZoom: false}
                    }"
                  />
        </div>
      </div>

      <div v-else-if="objectInfo.image_source.type === 'ia_bookviewer'" class="h-[75vh] w-full bg-black p-2 my-6">
        <div class="relative h-full w-full overflow-hidden">
          <iframe :src="objectInfo.image_source.src" class="w-full h-full" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
        </div>
      </div>

      <div class="font-serif leading-relaxed" v-html="parsedDescription" />
    </div>

  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { marked } from 'marked'

export default {
  name: 'ObjectRecord',
  props: {
    objectInfo: {
      type: Object
    }
  },
  computed: {
    parsedTombstone() {
      return this.objectInfo.tombstone ? this.objectInfo.tombstone.replaceAll(" || ", "<br>") : ''
    },
    parsedDescription () {
      return this.objectInfo.description ? marked(this.objectInfo.description) : ''
    }
  }
}
</script>
