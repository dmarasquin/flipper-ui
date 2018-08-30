import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import AutoComplete from './components/Autocomplete'

const renderAddOption = text => {
    return (
        <Fragment>
            Criar&nbsp;<b>{ text }</b>
        </Fragment>
    )
}

const App = (
    <AutoComplete
        isCreatableSelect
        options={ [
            { label: 'Afghanistan', value: 'Afghanistan' },
            { label: 'Aland Islands', value: 'Aland Islands' },
            { label: 'Albania', value: 'Albania' },
            { label: 'Algeria', value: 'Algeria' },
            { label: 'American Samoa', value: 'American Samoa' },
            { label: 'Andorra', value: 'Andorra' },
            { label: 'Angola', value: 'Angola' },
            { label: 'Anguilla', value: 'Anguilla' },
            { label: 'Antarctica', value: 'Antarctica' },
            { label: 'Antigua and Barbuda', value: 'Antigua and Barbuda' },
            { label: 'Argentina', value: 'Argentina' },
            { label: 'Armenia', value: 'Armenia' },
            { label: 'Aruba', value: 'Aruba' }
        ] }
        placeholder='Selecione'
        formatCreateLabel={ renderAddOption }
        onCreateOption={ value => alert(value) }
    />
)

ReactDOM.render(App, document.getElementById('root'))
