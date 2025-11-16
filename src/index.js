import './styles.css'
import _ from 'lodash'
import logoSrc from './images/logo.png'

const root = document.getElementById('app')

const container = document.createElement('div')
container.className = 'app-container'

const title = document.createElement('h1')
title.className = 'app-title'
title.textContent = 'Webpack конфіг — домашнє завдання'

const description = document.createElement('p')
description.textContent =
  'Цей проект демонструє хешування файлів, роботу з локальними шрифтами, зображеннями, CSS та оптимізацію зовнішніх бібліотек.'

const listTitle = document.createElement('p')
listTitle.textContent = 'Функціональність збірки:'

const list = document.createElement('ul')
const items = [
  'Хешування імен файлів (JS та CSS)',
  'Підтримка локальних шрифтів (font-face)',
  'Робота з зображеннями (asset modules)',
  'Інтеграція CSS стилів',
  'Оптимізація зовнішніх бібліотек (vendors chunk з node_modules)'
]

// используем lodash, чтобы точно попал в vendors
_.forEach(items, (text) => {
  const li = document.createElement('li')
  li.textContent = text
  list.appendChild(li)
})

const logo = document.createElement('img')
logo.className = 'logo'
logo.src = logoSrc
logo.alt = 'Demo logo'

// сборка
container.appendChild(title)
container.appendChild(description)
container.appendChild(listTitle)
container.appendChild(list)
container.appendChild(logo)

root.appendChild(container)
