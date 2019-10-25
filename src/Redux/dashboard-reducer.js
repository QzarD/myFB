

const ADD_CARD='dashboard/add_card';
const DELETE_CARD='dashboard/add_card';
const ADD_COLUMN='dashboard/add_column';
const DELETE_COLUMN='dashboard/add_column';

let initialState={
    cards:[
        {id:1, column:1, text:"Hi, its first card"},
        {id:2, column:1, text:"Its 2 card"},
        {id:3, column:1, text:"Its 3"},
    ]
};

export const dashboardReducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_CARD:
            return {...state, cards:[...state.cards,{id:4, column:1, text:action.textNewCard}]};
        default:
            return state
    }
};

export const addCard=(textNewCard)=>({type:ADD_CARD, textNewCard});