import styles from './Button.module.css';
import cn from 'classnames';
import {ButtonProps} from "./Button.props";

const Button = ({appearance, children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
        className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost'
        })}
        {...props}>
            {children}
        </button>
    );
};

export default Button;