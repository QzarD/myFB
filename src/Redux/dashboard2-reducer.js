const ADD_COLUMN = 'dashboard2/ADD_COLUMN';
const DELETE_COLUMN = 'dashboard2/DELETE_COLUMN';
const ADD_CARD = 'dashboard2/ADD_CARD';
const DELETE_CARD = 'dashboard2/DELETE_CARD';
const DRAG_CARD = 'dashboard2/DRAG_CARD';

let columnId = 1;
let cardId = 4;

let initialState = [
    {
        title: "In weak",
        id: 0,
        cards: [
            {id: 0, text: "Need do it now!"},
            {id: 1, text: "Hehe I know it"},
        ]
    },
    {
        title: "In day",
        id: 1,
        cards: [
            {id: 2, text: "Good morning"},
            {id: 3, text: "Go coffee"},
            {id: 4, text: "Go to work"},
        ]
    },
];

export const dashboard2Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLUMN:
            columnId += 1;
            return [...state,
                {title: action.title, id: columnId, cards: []}];
        case DELETE_COLUMN:
            return [...state.filter((_, index) => action.index !== index)];
        case ADD_CARD:
            cardId += 1;
            return state.map(column => {
                if (column.id === action.columnIndex) {
                    return {
                        ...column,
                        cards: [...column.cards, {id: cardId, text: action.text}]
                    }
                }
                return column
            });
        case DELETE_CARD:
            return state.map((column, index) => {
                if (index === action.columnId) {
                    return {
                        ...column,
                        cards: [...column.cards.filter((_, index) => action.index !== index)]
                    }
                }
                return column
            });
        case DRAG_CARD:
            const newState = [...state];
            //dragging column
            if (action.typeDrag === "list"){
                const list=newState.splice(action.droppableIdStart, 1);
                newState.splice(action.droppableIdIndexEnd, 0, ...list);
                return newState
            }
            // in the same list
            if (action.droppableIdStart === action.droppableIdEnd){
                const list = state[action.droppableIdStart];
                const card = list.cards.splice(action.droppableIdIndexStart, 1);
                list.cards.splice(action.droppableIdIndexEnd, 0, ...card);
            }
            //other list
            if (action.droppableIdStart !== action.droppableIdEnd){
                const listStart = state[action.droppableIdStart];
                const card=listStart.cards.splice(action.droppableIdIndexStart, 1);
                const listEnd = state[action.droppableIdEnd];
                listEnd.cards.splice(action.droppableIdIndexEnd, 0, ...card)
            }

                return newState
            ;
        default:
            return state
    }
};

export const addColumn = (title) => ({type: ADD_COLUMN, title});
export const addCard = (columnIndex, text) => ({type: ADD_CARD, columnIndex, text});
export const sort = (droppableIdStart,
                     droppableIdEnd,
                     droppableIdIndexStart,
                     droppableIdIndexEnd,
                     draggableId,
                     typeDrag) => ({
    type: DRAG_CARD,
    droppableIdStart,
    droppableIdEnd,
    droppableIdIndexStart,
    droppableIdIndexEnd,
    draggableId,
    typeDrag
});
export const deleteColumn=(index)=>({type:DELETE_COLUMN, index});
export const deleteCard=(columnId, index)=>({type:DELETE_CARD, columnId, index});
