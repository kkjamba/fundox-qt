import React, {useEffect, useState} from 'react';
import Cat from '../../assets/img/cat.png'

import s from './Card.module.css'

const Card = ({card}) => {
    const {id, description, title, taste, portions, gift, happyCat, weight, disabled, checkedText,} = card
    const [handleChecked, setHandleChecked] = useState(false)
    const [classes, setClasses] = useState([s.card])

    const isChecked = () => {
        setHandleChecked(!handleChecked)
    }

    useEffect(() => {
        if (handleChecked) {
            setClasses([...classes, s.checked])
        } else {
            setClasses(classes.filter(c => c !== s.checked))
        }
    }, [handleChecked])

    return (
        <div>
            <input
                className={s.checkbox}
                type="checkbox"
                id={s[`switcher-${id}`]}
            />
            <label htmlFor={s[`switcher-${id}`]}
                   className={`${classes.join(' ')} ${s.card} ${disabled ? s.disabled : ''}`}
                   onClick={disabled ? null : isChecked}
            >
                <div className={s.cardText}>
                    <span className={s.description}>{description}</span>
                    <span className={s.angryCat}>Котэ не одобряет?</span>
                    <h1 className={s.title}>{title}</h1>
                    <h2 className={s.subtitle}>{taste}</h2>
                    <p className={s.gift}>{portions} порций </p>
                    <p className={s.gift}>{gift} в подарок</p>
                    {happyCat ? <p className={s.gift}>{happyCat}</p> : null}
                </div>
                <img className={s.catImg} src={Cat} alt="img"/>
                <div className={s.weight}>
                    <h1 className={s.weightNum}>{weight}</h1>
                    <h3 className={s.weightUnit}>кг</h3>
                </div>
            </label>
            {disabled
                ? <p className={`${s.buyText} ${s.disabled}`}>Печалька, {taste} закончился.</p>
                : handleChecked
                    ? <p className={s.buyText}>{checkedText}</p>
                    : <p className={s.buyText}>Чего сидишь? Порадуй котэ,
                        <button
                            className={`${s.buyButton} ${handleChecked ? s.checked : null}`}
                            onClick={isChecked}
                        > купи.</button>
                    </p>
            }
        </div>
    );
};

export default Card;