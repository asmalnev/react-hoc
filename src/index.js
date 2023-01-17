import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const starWarsChars = [
  {name: 'Дарт Вейдер', side: 'dark'},
  {name: 'Люк Скайуокер', side: 'light'},
  {name: 'Палпатин', side: 'dark'},
  {name: 'Оби-Ван Кеноби', side: 'light'}
]

// отвечает только за отрисовку
const App = ({list}) => (
  <ul>
    {list.map((char, index) => {
      return (
        <li key={char.name + index}>
          <strong>{char.name}</strong> -&nbsp;
          {char.side}
        </li>
      )
    })}
  </ul>
)

// логика приложения
const withFilteredProps = Component => ({list, side}) => {
  const filteredList = list.filter(char => char.side === side)
  return <Component list={filteredList}/>
}

// компонент высшего порядка
const FilteredList = withFilteredProps(App)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <FilteredList list={starWarsChars} side={'light'}/>
  </React.StrictMode>
)