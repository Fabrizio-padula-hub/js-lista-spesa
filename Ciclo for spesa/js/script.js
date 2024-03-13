// Data una lista della spesa:
// const list = [
//     'Latte',
//     'Cacao',
//     'Insalata',
//     'Carote',
//     'Pomodori',
//     'Piatti pronti'
// ];
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.

// lista spesa
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

// prendere l'elemento dal DOM e appendere la lista
const listUl = document.querySelector('#shopping-list');   

// scorrere le lista della spesa
for (let i = 0; i < list.length; i++){
    const shoppingList = list[i];
    console.log(shoppingList);

    
    // stampare gli elementi singoli nel DOM
    listUl.innerHTML += `<li>${shoppingList}</li>`;
    console.log(listUl);

}
