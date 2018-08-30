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
            {
                label: 'Parafusos',
                options: [
                    { label: 'Algeria', value: 'Algeria' },
                    { label: 'American Samoa', value: 'American Samoa' },
                    { label: 'Andorra', value: 'Andorra' },
                    { label: 'Angola', value: 'Angola' },
                ]
            },
            {
                label: 'Funcionários',
                options: [
                    { label: 'Algeria', value: 'Algeria' },
                    { label: 'American Samoa', value: 'American Samoa' },
                    { label: 'Andorra', value: 'Andorra' },
                    {
                        label: 'Angola',
                        options: [
                            { label: 'Andorra', value: 'Andorra' },
                            { label: 'Angola', value: 'Angola' },
                            { label: 'Anguilla', value: 'Anguilla' },
                            { label: 'Antarctica', value: 'Antarctica' },
                        ]
                    }
                ]
            }
        ] }
        placeholder='Selecione'
        formatCreateLabel={ renderAddOption }
        onCreateOption={ value => alert(value) }
    />
)

ReactDOM.render(App, document.getElementById('root'))
