### ESERCIZIO
Implementare una todolist base. Ogni todo è rappresentato come una stringa all'interno dell'array.
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
BONUS 1
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
BONUS 2
Trasformare ogni todo in un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no. Se done è true, mostrare il testo del todo sbarrato.
Di conseguenza modificare la funzionalità di input in modo da aggiungere un nuovo oggetto alla lista invece della semplice stringa.
BONUS 3
Cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)