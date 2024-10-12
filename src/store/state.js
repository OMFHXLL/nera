import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  'active_screen': 'people',
  'is_nav_active': true
})

export { setGlobalState, useGlobalState }