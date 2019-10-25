import React,{useState} from "react";
import Card from "./Card";
import styles from "./Dashboard.module.css"


const Dashboard=(props)=>{
    const [editPanel, setEditPanel]=useState(false);
    const [textNewCard, setTextNewCard]=useState('');
    const onEditPanel=()=>{
        setEditPanel(true)
    };
    const offEditPanel=()=>{
        setEditPanel(false)
    };

    const addCardWithText=()=>{
        console.log(textNewCard);
        setEditPanel(false)
    }

    const cardsElements = props.cards.map(c=><Card id={c.id} text={c.text} key={c.id}/>);

    return(
        <div className={styles.dashboardHome}>
            <div className={styles.column}>
                <div className={styles.nameColumn}>
                    "Задачи на неделю"
                </div>
                <div>
                    {cardsElements}
                </div>
                {editPanel
                ? <div className={styles.sectionAddCard}>
                        <div>
                            <textarea onChange={setTextNewCard} name="newTextCard" placeholder="Введите текст карточки"/>
                        </div>
                        <div className={styles.btnAddCardNow_Row}>
                            <div className={styles.btnAddCardNow} onClick={addCardWithText}>Добавить карточку</div>
                            <div className={styles.btnCancelAddCard} onClick={offEditPanel}>X</div>
                        </div>
                    </div>
                : <div className={styles.btnAddCard} onClick={onEditPanel}>
                        + Добавить карточку
                    </div>
                }

            </div>
        </div>
    )
}
export default Dashboard;