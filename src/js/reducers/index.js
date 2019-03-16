

import { ADD_ARTICLE, ADD_USER } from "../constants/action-types"

//imuntable STATE here
const initialState = {
    articles : [],
    user : [],
}

//reducer yang akan memproduksi state untuk aplikasimu..
function rootReducer(state=initialState, action){
    if(action.type === ADD_ARTICLE){
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
    }else if(action.type === ADD_USER){
        return Object.assign({}, state, {
            user: state.user.concat(action.payload)
        })
    }
    
    //contoh dengan switch case
    
    // switch(action.type){
    //     case ADD_ARTICLE:
    //         return Object.assign({}, state, {
    //             articles: state.articles.concat(action.payload)
    //         })
    //     case ADD_USER:
    //         return Object.assign({}, state, {
    //             user: state.user.concat(action.payload)
    //         })
    // }

    return state
}

//bisa dilihat diatas, karena kita tahu bahwa state pada redux
// merupakan IMUTABLE maka harus menggunakan Object.assign agar tetep imun


export default rootReducer

