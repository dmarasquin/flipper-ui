import React from 'react'
import ReactDOM from 'react-dom'
import AutoComplete from './components/Autocomplete'

const App = (
    <AutoComplete
        isCreatableSelect
        // onCreateOption={ value => alert(value) }
    />
)

ReactDOM.render(App, document.getElementById('root'))
