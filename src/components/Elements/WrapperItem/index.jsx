const WrapperItem = (props) => {
  const {active, children, onClick} = props
    return (
      <li className={active}>
        <a href={props.href} onClick={onClick}>
            <i>
              {children}
            </i>
            {props.value}
        </a>
      </li>
    )
}

export default WrapperItem