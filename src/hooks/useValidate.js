import { useEffect, useState } from 'react'

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState('')
  const [minLengthError, setMinLengthError] = useState('')
  const [maxLengthError, setMaxLengthError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [inputValid, setInputValid] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setEmpty('') : setEmpty('Поле не может быть пустым')
          break
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(`минимальная длина ${validations[validation]} символов`)
            : setMinLengthError('')
          break
        case 'maxLength':
          value.length > validations[validation]
            ? setMinLengthError(`максимальная длина ${validations[validation]} символов`)
            : setMaxLengthError('')
          break
        case 'isEmail':
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          re.test(String(value).toLowerCase()) ? setEmailError('') : setEmailError('Не коректный имейл')
          break
      }
    }
  }, [value])

  const error = isEmpty || minLengthError || maxLengthError || emailError

  useEffect(() => {
    if (error) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [error])

  return { error, inputValid }
}
