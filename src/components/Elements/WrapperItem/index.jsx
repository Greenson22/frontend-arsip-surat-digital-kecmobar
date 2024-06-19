const WrapperItem = (props) => {
  const {active, children} = props
    return (
      <li className={active}>
        <a href={props.href}>
            <i>
              {children}
            </i>
            {props.value}
        </a>
      </li>
    )
}

export default WrapperItem