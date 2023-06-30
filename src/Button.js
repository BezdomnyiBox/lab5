function Button({text}) {
  const press = () => {
    alert("Вы успешно проголосовали!\nСкоро с вами свяжутся!")
  }

  return (
      <input className="button" type="button" value={text}  onClick={press} />
  )
}

export default Button;