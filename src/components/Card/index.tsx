interface Props {
    children: any
    className: string
}
const Card = (props: Props) => {
    return (
        <div className={"shadow-2xl rounded-xl bg-white p-5 w-52 "+props.className}>
            {props.children}
        </div>
    );
}
Card.defaultProps = {
    children: '',
    className: ''
}
export default Card;