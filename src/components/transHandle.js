const TransHandle = (props) => {
    return (
        <span>{props.lang === 0 ? props.en : props.jp}</span>
    )
}

export default TransHandle;