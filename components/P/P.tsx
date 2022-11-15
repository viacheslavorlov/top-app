import React from 'react';
import {PProps} from "./P.props";
import cn from "classnames";
import styles from './P.module.css';

const P = ({fontSize = 'm', className, children, ...props}: PProps): JSX.Element => {
    return (
        <p className={cn(fontSize, className, {
            [styles.s]: fontSize == 's',
            [styles.m]: fontSize == 'm',
            [styles.l]: fontSize == 'l'
        })}
           {...props}>
            {children}
        </p>
    );
};

export default P;
