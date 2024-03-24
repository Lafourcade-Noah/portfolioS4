import {ref} from 'vue';

export function toggleGal() {
    activeGal.value = !activeGal.value;
}

export const activeGal = ref(false)
