import styles from './Button.module.css';
import cn from 'classnames';
import {ButtonProps} from "./Button.props";

const Button = ({appearance, children}: ButtonProps): JSX.Element => {
    return (
        <button
        className={cn(styles.button, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost'
        })}>
            {children}
        </button>
    );
};

export default Button;