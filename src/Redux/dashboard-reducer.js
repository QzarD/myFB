

const ADD_CARD='dashboard/add_card';
const DELETE_CARD='dashboard/add_card';
const ADD_COLUMN='dashboard/add_column';
const DELETE_COLUMN='dashboard/add_column';

let initialState=[
    {title:"На неделю",
    cards:[
        "Hi, its first card",
        "Its 2 card",
        "Its 3",
    ]},
    {title:"На день",
    cards:[
        "Аывыв",
        "ЫЫыыыыыы",
    ]},
];

export const dashboardReducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_CARD:
            return state.map((item, index) =>{
                if (action.payload.columnIndex === index){
                    return {...item, cards:[...item.cards, action.payload.text]}
                }
                return item;
            });
        case ADD_COLUMN:
            return [...state, {title: action.payload, cards: []}];
        case DELETE_COLUMN:
            return state.filter((_, index) => action.payload !== index);
        default:
            return state
    }
};

export const addCard=(columnIndex, textNewCard)=>
    ({type:ADD_CARD, payload: {columnIndex, textNewCard}});
export const addColumn=(name)=>({type:ADD_COLUMN, payload: name});
export const deleteColumn=(index)=>({type:DELETE_COLUMN, payload: index});