import './button.css'
import { AriaButtonOptions, useButton } from 'react-aria'
import React, { useRef } from 'react'
import arrowPrimary from '../../assets/arrow-right-primary.svg'
import arrowSecondary from '../../assets/arrow-right-secondary.svg'

/**
 * Primary UI component for user interaction
 */
type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'tertiary'
    size?: 'small' | 'medium' | 'large'
    text: string
} & AriaButtonOptions<'button'>

export const Button = ({
    size = 'medium',
    variant = 'primary',
    text,
    ...props
}: ButtonProps) => {
    const ref = useRef(null)
    const { buttonProps } = useButton(props, ref)
    const mode = {
        primary: 'rh-button--primary',
        secondary: 'rh-button--secondary',
        tertiary: 'rh-button--tertiary',
    }
    return (
        <button
            type='button'
            className={['rh-button', `rh-button--${size}`, mode[variant]].join(
                ' ',
            )}
            ref={ref}
            {...buttonProps}
        >
            {text}
            <img src={variant === 'primary' ? arrowSecondary : arrowPrimary} />
        </button>
    )
}
