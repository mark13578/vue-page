import { computed } from "vue";
import { useStore } from "vuex";

export function useStateHandle() {
  const store = useStore();

  const loginState = computed(() => store.getters.loginState);

  const menuState = computed(() => store.getters.menuState);

  const stateHandle = (type, bool) => {
    store.dispatch(type, bool);
  };

  return { loginState, menuState, stateHandle };
}
