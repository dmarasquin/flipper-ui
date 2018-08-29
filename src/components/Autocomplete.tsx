import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/lib/Creatable'

interface IProps {
    isClearable: boolean
    isCreatableSelect: boolean
    isMulti: boolean
    value: any
    onChange?: (value) => void
    onCreateOption?: (value) => void
}

const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' }
].map(suggestion => ({
    label: suggestion.label,
    value: suggestion.label
}))

const Option = props => {
    return (
        <MenuItem
            buttonRef={ props.innerRef }
            selected={ props.isFocused }
            component='div'
            style={ {
                fontWeight: props.isSelected ? 500 : 400,
            } }
            { ...props.innerProps }>
            { props.children }
        </MenuItem>
    )
}

const NoOptionsMessage = props => {
    return (
        <Typography
            color='textSecondary'
            { ...props.innerProps }>
            { props.children }
        </Typography>
    )
}

const inputComponent = ({ inputRef, ...props }) =>
    <div ref={ inputRef } { ...props } />

const Control = props => {
    return (
      <TextField
        fullWidth
        InputProps={ {
          inputComponent,
          inputProps: {
            children: props.children,
            inputRef: props.innerRef,
            ...props.innerProps,
          },
        } }
        { ...props.selectProps.textFieldProps }
      />
    )
}

const Menu = props =>
    <Paper square {...props.innerProps}>
        {props.children}
    </Paper>

const COMPONENTS = {
    Control,
    Menu,
    NoOptionsMessage,
    Option,
}

class Autocomplete extends React.Component<IProps> {
    public static defaultProps = {
        isClearable: true,
        isCreatableSelect: false,
        isMulti: false,
        value: null
    }

    public render() {
        return this.props.isCreatableSelect
            ? this.renderCreatableSelect()
            : this.renderSelect()
    }

    private renderSelect() {
        return (
            <Select
                value={ this.props.value }
                options={ suggestions }
                components={ COMPONENTS }
                placeholder='Selecione uma opção'
                onChange={ this.props.onChange }
            />
        )
    }

    private renderCreatableSelect() {
        return (
            <CreatableSelect
                isClearable={ this.props.isClearable }
                value={ this.props.value }
                options={ suggestions }
                components={ COMPONENTS }
                placeholder='Selecione'
                onChange={ this.props.onChange }
                onCreateOption={ this.props.onCreateOption }
            />
        )
    }
}

export default Autocomplete
