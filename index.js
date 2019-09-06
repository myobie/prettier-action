import {spawn} from 'child_process'

(async () => {
  try {
    console.log('prettier')
  } catch (error) {
    process.exitCode = 1
    console.error(error)
  }
})()
