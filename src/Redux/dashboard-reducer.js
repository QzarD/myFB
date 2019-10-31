const ADD_CARD = 'dashboard/add_card';
//const DELETE_CARD='dashboard/add_card';
const ADD_COLUMN = 'dashboard/add_column';
const DELETE_COLUMN = 'dashboard/delete_column';
const DRAG_HAPPENED = 'dashboard/DRAG_HAPPENED';

let columnId = 1;
let cardId = 3;

let initialState = {
    items: [
        {
            title: "На неделю",
            cards: [
                "Hi, its first card",
                "Its 2 card",
                "Its 3",
            ]
        },
        {
            title: "На день",
            cards: [
                "Аывыв",
                "ЫЫыыыыыы",
            ]
        },
    ]
};

export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                items: state.items.map((item, index) => {
                    if (action.payload.columnIndex === index) {
                        return {...item, cards: [...item.cards, action.payload.textNewCard]}

                    }
                    return item;
                })
            };
        case ADD_COLUMN:
            return {
                ...state,
                items: [...state.items, {title: action.payload, cards: []}]
            };
        case DELETE_COLUMN:
            return {
                ...state,
                items: [...state.items.filter((_, index) => action.payload !== index)]
            };
        case DRAG_HAPPENED:
            return {
                ...state,
                items: state.items.map((item, index) => {
                    if (action.payload.columnIndex === index) {
                        const [removed] = item.cards.splice(action.payload.droppableIdStart, 1);
                        item.cards.splice(action.payload.droppableIdEnd, 0, removed)
                    }
                    return item;
                })
            };
        default:
            return state
    }
};

export const addCard = (columnIndex, textNewCard) =>
    ({type: ADD_CARD, payload: {columnIndex, textNewCard}});
export const addColumn = (name) => ({type: ADD_COLUMN, payload: name});
export const deleteColumn = (index) => ({type: DELETE_COLUMN, payload: index});
export const sort = (droppableIdStart,
                     droppableIdEnd,
                     droppableIndexStart,
                     droppableIndexEnd,
                     draggableId,
                     columnIndex) =>
    ({
        type: DRAG_HAPPENED, payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            columnIndex
        }
    });