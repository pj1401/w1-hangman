/**
 * Starting point of the javascript for the project.
 *
 * @author Jennifer von Trotta-Treyden <jv222th>
 * @author Patricia Johansson <pj222uc>
 */

const words = [
  'Hund',
  'Bil',
  'Stol',
  'Katt',
  'Bok',
  'Fönster',
  'Frukt',
  'Blomma',
  'Skola',
  'Dator',
  'Bord',
  'Kaffe',
  'Vinter',
  'Skrivbord',
  'Hus',
  'Telefon',
  'Film',
  'Musik',
  'Lampa',
  'Träd',
  'Tåg',
  'Klocka',
  'Stad',
  'Väska',
  'Fisk',
  'Äpple',
  'Vatten',
  'Cykel',
  'Papper',
  'Lärare'
]

const test = document.querySelector('#test')

const testWord = 'äpple'

const guess = document.querySelector('#guessForm')

const letters = []

guess.addEventListener('submit', (event) => onGuessSubmit(event))

const formattedWord = toUnderscore(testWord, [])

test.textContent = formattedWord

/**
 * Converts a string to underscores.
 *
 * @param {string} word - The word to convert.
 * @param {Array} guessedLetters - Guessed letters.
 * @returns {string} The word with underscores.
 */
function toUnderscore (word, guessedLetters) {
  const length = word.length
  let underScoredWord = ''

  // const underScored = word.replace(word, '_')

  for (let i = 1; i <= length; i++) {
    for (const letter of guessedLetters) {
      if (word[i] === letter) {
        underScoredWord += letter.toUpperCase()
      } else {
        underScoredWord += '_ '
      }
    }
  }

  return underScoredWord
}

/**
 * 
 * @param {*} event 
 */
function onGuessSubmit (event) {
  event.preventDefault()

  const guessedInput = document.querySelector('#guessInput').value

  const test2 = document.querySelector('#test2')

  letters.push(guessedInput)

  const updatedWord = toUnderscore(testWord, letters)

  test.textContent = updatedWord
}
