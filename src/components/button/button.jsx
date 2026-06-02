import './button.scss';

const Button = ({selector, text, active}) => {
    return <button className={`button ${selector || ''}`} onClick={active}>{text}</button>;
};

export default Button;
