
import { mapState } from 'vuex'


export default {
    computed: {
        ...mapState({
            items: state => state.entertainment.items,
            searchQuery: state => state.entertainment.searchQuery,
            loaded: state => state.entertainment.loaded
        })
    },
    methods: {
        getIsMobile() {
            return window.matchMedia("(max-width: 768px)").matches;
        },
        filteredItems() {

            // Filter by search terms
            if (this.searchQuery && this.loaded) {
                return this.items.filter(item => {
                    return this.searchQuery
                        .toLowerCase()
                        .split(" ")
                        .every(v => item.Title.toLowerCase().includes(v));
                });
            } else {
                return this.items;
            }
        },
        formatDate(date) {

            let d = date;
            let year = d.slice(0, 4),
                month = d.slice(4, 6),
                day = d.slice(6, 8);

            return `${year}-${month}-${day}`;
        }
    },


}

