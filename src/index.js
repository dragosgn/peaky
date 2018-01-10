export default (contetn, words) => (
  content.replace(
    new RegExp(words.join('|'), 'i'),
    '***'
  )
)
