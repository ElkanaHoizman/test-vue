import state from './entertainment/state'
import actions from './entertainment/actions'
import getters from './entertainment/getters'
import mutations from './entertainment/mutations'

export default {
    namespaced: true,
    mutations,
    getters,
    state,
    actions
};
