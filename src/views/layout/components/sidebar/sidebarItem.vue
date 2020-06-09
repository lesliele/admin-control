<template>
  <div class="menu-wrapper">
    <div v-for="item in routes" :key="item.name">
      <template v-if="!item.hidden && item.children">
        <router-link 
          v-if="item.children.length === 1 && !item.children[0].children && !item.alwaysShow" 
          :to="item.path + '/' + item.children[0].path">
          <el-menu-item :index="item.path + '/' + item.children[0].path" :class="{'submenu-title-noDropdown': !isNest}">
            <span v-if="item.children[0].meta && item.children[0].meta.title">{{item.children[0].meta.title}}</span>
          </el-menu-item>  
        </router-link>

        <el-submenu v-else :index="item.name || item.path" :key="item.name">
          <template slot="title">
            <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
          </template>

          <div v-for="child in item.children" :key="child.name">
            <template v-if="!child.hidden">
              <template v-if="child.children && child.children.length>0">
                <sidebar-item 
                  :is-nest="true" 
                  class="nest-menu" 
                  :routes="child.children"></sidebar-item>
              </template>
              <router-link v-else
                :to="item.path + '/' + child.path"
                :key="child.name">
                <el-menu-item :index="item.path + '/' + child.path">
                  <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
                </el-menu-item>
              </router-link>
            </template>
          </div>
        </el-submenu>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
