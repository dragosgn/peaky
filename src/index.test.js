import {peaky} from '.'

test("replaces blacklisted words", () => (
  expect(peaky(
    'The question is to be or not to be', ['be']
  )).toBe("The question is to *** or not to ***")
))
