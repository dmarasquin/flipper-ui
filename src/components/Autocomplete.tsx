import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/lib/Creatable'
import Paper from './Paper'
import TextField from './TextField'

interface IProps {
    isClearable: boolean
    isCreatableSelect: boolean
    isMulti: boolean
    value: any
    formatCreateLabel: any
    placeholder: string
    options: Array<{ label: string, value: string }>
    onChange?: (value) => void
    onCreateOption?: (value) => void
}

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
    <div ref={ inputRef } style={ { display: 'flex' } } { ...props } />

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
        isClearable: false,
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
        const { value, ...otherProps } = this.props
        return (
            <Select
                { ...otherProps }
                components={ COMPONENTS }
            />
        )
    }

    private renderCreatableSelect() {
        const { value, ...otherProps } = this.props
        return (
            <CreatableSelect
                { ...otherProps }
                components={ COMPONENTS }
            />
        )
    }
}

export default Autocomplete
