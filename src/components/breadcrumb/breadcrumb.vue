<template>
  <div>
    <el-breadcrumb class="app-breadcrumb overflow-ellipsis" separator="/" >
      <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
        <router-link v-if="item.path" :to="item.path">{{item.name}}</router-link>
        <span v-else class="no-redirect">{{item.name}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name:'comBredcrumb',
  data(){
    return{

    }
  },
  computed: {
    ...mapGetters([
      'breadcrumb'
    ])
  }
}
</script>
