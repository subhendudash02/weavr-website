<template>
  <nav class="navbar  p-5" role="navigation" aria-label="main navigation">
    <div class="container ">
      <div class="navbar-brand">
        <a class="navbar-item" @click="transitTo('/')">
          <div class="title brand has-text-white is-flex is-align-items-center">
            <div class="image p-2">
              <img
                class="mx-2"
                src="../../../assets/logo/new-logo.svg"
                alt=""
              />
            </div>
            Weavr
          </div>
        </a>
        <a
          role="button"
          ref="menuButton"
          :class="[
            navigation.isOpen ? 'is-active' : '',
            'navbar-burger',
            'has-border-bottom',
          ]"
          @click="menuToggle()"
          aria-label="menu"
          aria-expanded="false"
          data-target="frabric-navbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div :class="[navigation.isOpen ? 'is-active' : '', 'navbar-menu']">
        <div class="navbar-start">
          <a
            :class="[
              isItemCurrent(item) ? 'active-link' : '',
              'navbar-item navlink',
              '',
              'p-3 mt-2 is-primary',
            ]"
            v-for="item in navigation.items"
            :key="item.name"
            v-on:click="transitTo(item.route)"
          >
            {{ item.name }}
            <span v-if="item.icon">
              <unicon
                width="15"
                height="15"
                :name="item.icon"
                fill="gray"
              ></unicon>
            </span>
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <SignerAddress />
          </div>
        </div>
      </div>
    </div>
    
  </nav>
</template>

<script>
import SignerAddress from '../../views/address/SignerAddress.vue'
import { useRoute } from "vue-router"
import { mapGetters, mapActions } from "vuex"
import { CONTRACTS } from '../../../services/constants'
export default {
  name: "HeaderHavigationBar",
  components: {
    SignerAddress,
  },
  data() {
    return {
      navigation: {
        isOpen: false,
        items: [
          { name: "Governance", route: `/dao/${CONTRACTS.WEAVR}`},
          {
            name: "Marketplace",
            route: "/marketplace" ,
            childs: [
              {
                name: "Needles" ,
                route: { path: "marketplace", params: { market: "needle"}}
              },
              {
                name: "Threads",
                route: { path: "/marketplace/threads"}
              }
            ]
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["currentNavigationItem"]),
  },
  methods: {
    ...mapActions(["goBack"]),
    isItemCurrent(item) {
      return useRoute().fullPath.includes(item.route);
    },
    transitTo(path) {
      this.$router.push(path)
      this.navigation.isOpen ? this.menuToggle() : null;
    },
    menuToggle() {
      this.navigation.isOpen = !this.navigation.isOpen;
    },
    print(child) {
      console.log(child)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/weavr-custom.scss";

.navbar {
  background-color: transparent !important;
}

.title {
  font-weight: 400;
}

.is-selected {
  color: $mediumBlue;
}

.navlink {
  margin: 0 10px;
  font-weight: 600;
  border-radius: $tiny-radius;
  transition: all 150ms;

  &:hover {
    color: white !important;
    background: $mediumBlue !important;
  }
}

.active-link {
  color: $mediumBlue;
}

.dropdown-content {
  padding: 4px;
}
</style>
