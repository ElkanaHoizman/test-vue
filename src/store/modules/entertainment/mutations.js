export default {
    setItems(store, data) {

        store.items = data;
        store.loaded = true
    },
    setarrApi(store, data){
        store.arrApi = data;
    },
    setSearchQuery(store, data) {
        store.searchQuery = data;
    },
    setIsSortedDesc(store) {
        const elementImg = document.querySelectorAll(".img");
        elementImg.forEach(ele => ele.classList.remove('hide'));

        store.sortedDesc = !store.sortedDesc;
    },

    setIslistView(store) {
        store.listView =  !store.listView;
    },
}