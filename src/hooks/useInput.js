import { useState } from 'react'
import { useValidation } from './useValidate'

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  console.log(value)

  const valid = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = (e) => {
    setDirty(true)
  }

  return { value, onChange, onBlur, isDirty, setValue, ...valid }
}
