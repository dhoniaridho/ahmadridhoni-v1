import classNames from "classnames"

export default function Badge(props) {
    const {type, children} = props
    const className = classNames(props.className,{
        'text-red-500': type === 'danger',
        'text-blue-500': type === 'primary'
    })
    return(
        <span className={className}>{children}</span>
    )
}
Badge.defaultProps = {
    type: 'danger'
}