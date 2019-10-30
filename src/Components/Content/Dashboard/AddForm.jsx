import React, {useState, Fragment, useRef, useEffect} from "react";
import {addCard, addColumn} from "../../../Redux/dashboard-reducer";
import Button from "./Button";
import Card from "./Card";
import styles from "./Dashboard.module.css"


const AddForm = ({columnIndex, children, addCard, addColumn, isEmptyColumn}) => {
    const [showForm, setShowForm] = useState(false);
    const [value, setValue] = useState("");
    const textareaRef=useRef(null);

    useEffect(()=>{
        if (textareaRef.current){
            textareaRef.current.focus()
        }
    }, [showForm]);

    const onAdd = () => {
        if (isEmptyColumn) {
            addColumn(value);
        } else {
            addCard(columnIndex, value);
        }
        setValue("");
        setShowForm(false);
    };

    const offShowForm=()=>{
        setValue("");
        setShowForm(false)
    }

    return (
        <Fragment>
            {showForm ? (
                <div className="add-form">
                    <div className="add-form__input">
                        <textarea onChange={e => setValue(e.target.value)}
                                  value={value}
                                  placeholder={isEmptyColumn
                                      ? "Введите название колонки"
                                      : "Введите название карточки"
                                  }
                                  ref={textareaRef}
                                  rows={"3"}
                        />
                        <div className={styles.btnAddCardNow_Row}>
                            <Button onClick={onAdd}>
                                {isEmptyColumn ? "Добавить колонку" : "Добавить карточку"}
                            </Button>
                            <span onClick={offShowForm}
                            className="add-form__bottom-clear">X</span>
                        </div>
                    </div>
                </div>
            ):(
                <div className="add-form__bottom">
                    <div onClick={setShowForm.bind(this, true)}
                    className="add-form__bottom-add-btn">
                        +
                        <span>
                            {isEmptyColumn
                            ? "Добавить колонку"
                            : "Добавить карточку"}
                        </span>
                    </div>
                </div>
            )}
        </Fragment>
    )
};
export default AddForm;