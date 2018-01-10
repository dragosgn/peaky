export const peaky = (content, words) => (
  content.replace(
    new RegExp(words.join('|'), 'ig'),
    '****'
  )
)
