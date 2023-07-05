<script>
import { provide } from "vue";
import store from "@/store";
import Home from "@/views/Home.vue";
export default {
  components: {
    Home,
  },
  setup() {
    provide("mapStore", store);
  },
};
</script>