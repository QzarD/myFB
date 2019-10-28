import React, {useState, Fragment} from "react";
import {addCard, addColumn} from "../../../Redux/dashboard-reducer";


const AddForm = ({columnIndex, addCard, addColumn, isEmptyColumn}) => {
    const [showForm, setShowForm] = useState(false);
    const [value, setValue] = useState("");

    const onAdd = () => {
        if (isEmptyColumn) {
            addColumn(value);
        } else {
            addCard(columnIndex, value);
        }
        setValue("");
        setShowFrom(false);
    };

    return (
        <Fragment>
            {showForm ? (
                <div className="add-form">
                    <div className="add-form__input">
                        <Card>
                        <textarea onChange={e => setValue(e.target.value)}
                                  value={value}
                                  placeholder={isEmptyColumn
                                      ? "Введите название колонки"
                                      : "Введите название карточки"
                                  }
                                  ref={textareaRef}
                                  rows={"3"}
                                  />
                        </Card>
                        <div className="add-form__bottom">
                            <Button onClick={onAdd}>
                                {isEmptyColumn ? "Добавить колонку" : "Добавить карточку"}
                            </Button>
                            <span onClick={setShowForm.bind(this, false)}
                            className="add-form__bottom-clear">X</span>
                        </div>
                    </div>
                </div>
            ):(

            )}
        </Fragment>
    )
};
export default AddForm;