export function encrypt(value: string) {
  return value.split('').map(v => {
    const letter = v.charCodeAt(0)
    let newLetter = (letter + 13)

    if (letter >= 97 && letter <= 122) {
      newLetter = newLetter > 122 ? newLetter%122+96 : newLetter
    }
    else if (letter >= 65 && letter <= 90) {
      newLetter = newLetter > 90 ? newLetter%90+64 : newLetter
    }
    else {
      return v
    }

    return String.fromCharCode(newLetter);
  }).join('')
}
