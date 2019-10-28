import React,{useState} from "react";
import Card from "./Card";
import styles from "./Dashboard.module.css"
import {Field, reduxForm} from "redux-form";


const FormAddCard = (props) => {
    return <div className={styles.sectionAddCard}>
        <form onSubmit={props.handleSubmit}>
            <Field type="textarea" name="textNewCard" placeholder="Введите текст карточки" component="textarea"/>
            <div className={styles.btnAddCardNow_Row}>
                <button className={styles.btnAddCardNow}>Добавить карточку</button>
                <div className={styles.btnCancelAddCard} onClick={props.offEditPanel}>X</div>
            </div>
        </form>
    </div>
};
const AddCardReduxSubmit = reduxForm({form:'AddCard'})(FormAddCard);


const Dashboard=(props)=>{
    const [editPanel, setEditPanel]=useState(false);
    const onEditPanel=()=>{
        setEditPanel(true)
    };
    const offEditPanel=()=>{
        setEditPanel(false)
    };

    const onSubmit=(value)=>{
        props.addCard(value.textNewCard);
        setEditPanel(false)
    };

    const cardsElements = props.cards.map(c=><Card id={c.id} title={c.title} text={c.text} key={c.id}/>);

    return(
        <div className={styles.dashboardHome}>
            <div className={styles.column}>
                {props.cards.title[1] &&
                    <div className={styles.nameColumn}>
                        {props.cards.title[1]}
                    </div>
                }
                <div>
                    {cardsElements}
                </div>
                {editPanel
                ? <AddCardReduxSubmit onSubmit={onSubmit} offEditPanel={offEditPanel}/>
                : <div className={styles.btnAddCard} onClick={onEditPanel}>
                        + Добавить карточку
                    </div>
                }

            </div>
        </div>
    )
}
export default Dashboard;