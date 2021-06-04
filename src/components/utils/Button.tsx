interface buttonProps {

    children: React.ReactNode;
    onClick?(): void;
    type: "submit" | "button";
    disabled: boolean;
    className: string;
 
}

const Button = (props: buttonProps) => {
    return (

        <button type={props.type} className={props.className}onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
    )
}

Button.defaultProps = {

    type: "button",
    disabled: false,
    className: "btn btn-primary"
}

export default Button
