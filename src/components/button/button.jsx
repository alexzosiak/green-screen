
const Button = ({selector, text, active}) => {
    return <button className={selector} onClick={active}>{text}</button>;
};

export default Button;