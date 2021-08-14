import classNames from "classnames"

export default function Alert(props) {
    const {children, type}  = props
    const className = classNames('text-sm mt-1', {
        'text-red-500': type === 'danger',
        'text-blue-500': type === 'primary'
    })
    return(
        <div className={className} role="alert">
            {children}
        </div>
    )
}

Alert.defaultProps = {
    type: 'danger'
}