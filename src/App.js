import './App.css';
import Card from "./components/Card/Card";

function App() {
    const cards = [
        {
            id: 1,
            description: 'Сказочное заморское яство',
            title: 'Нямушка',
            taste: 'с фуа-гра',
            portions: 10,
            gift: 'мышь',
            weight: 0.5,
            disabled: false,
            checked: false
        },
        {
            id: 2,
            description: 'Сказочное заморское яство',
            title: 'Нямушка',
            taste: 'с рыбой',
            portions: 40,
            gift: '2 мыши',
            weight: 2,
            disabled: false,
            checked: true
        },
        {
            id: 3,
            description: 'Сказочное заморское яство',
            title: 'Нямушка',
            taste: 'с курой',
            portions: 100,
            gift: '5 мышей',
            weight: 5,
            disabled: true,
            checked: false
        },
    ]
    return (
        <div className="App">
            {cards.map(card => <Card key={card.id} card={card}/>)}
        </div>
    );
}

export default App;
