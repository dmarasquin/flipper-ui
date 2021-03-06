import {
    Avatar as MuiAvatar,
    withStyles
} from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    sizes?: string
    src?: string
    imgProps?: object
    primary?: boolean
    classes: {
        primary: string
    }
    children: React.ReactNode
}

const styles = theme => ({
    primary: {
        backgroundColor: theme.palette.primary.main
    }
})

const Avatar: React.SFC<IProps> = ({ children, primary, classes, ...otherProps }) =>
    <MuiAvatar
        { ...otherProps }
        className={ primary ? classes.primary : '' }>
        { children }
    </MuiAvatar>

export default withStyles(styles)(Avatar)
