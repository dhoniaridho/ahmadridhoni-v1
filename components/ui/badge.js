import classNames from "classnames"

export default function Badge(props) {
    const {type, children} = props
    const className = classNames(props.className, 'px-2 py-1 rounded-full text-sm',{
        'bg-red-500 text-white': type === 'danger',
        'bg-pink-500 text-white': type === 'primary'
    })
    return(
        <span className={className}>{children}</span>
    )
}
Badge.defaultProps = {
    type: 'danger'
}