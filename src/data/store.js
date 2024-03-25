import { reactive } from "vue"

export const store = reactive({
    counter: 0,
    apiUrl: 'https://rickandmortyapi.com/api/character',
    cardsList: []
})