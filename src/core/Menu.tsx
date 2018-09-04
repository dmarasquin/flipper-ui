import { Menu as MuiMenu } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    open: boolean
    anchorEl?: HTMLElement
    children?: React.ReactNode
    menuProps?: object
    onClose?: () => void
}

const Menu = ({ children, menuProps, padding, margin, style = {}, ...otherProps }: IProps) =>
    <MuiMenu
        MenuListProps={ menuProps }
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiMenu>

export default Menu