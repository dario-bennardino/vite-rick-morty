import { reactive } from "vue"

export const store = reactive({
    // counter: 0,
    mainTitle: 'Rick Morty',
    apiUrl: 'https://rickandmortyapi.com/api/character',
    nameUrl: 'https://rickandmortyapi.com/api/character?name',
    cardList: [],
    namesList: []
})