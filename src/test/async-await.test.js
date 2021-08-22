import { basename } from 'path'

/**
 * @group async
 * @group easy
 */

const modName = basename(__filename, '.test.js')

describe('async await', () => {
  let doAsync
  beforeAll(async () => {
    ;({ doAsync } = await import(`../main/${modName}`))
    expect(typeof doAsync).toBe('function')
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.clearAllTimers()
  })
  afterAll(() => {
    jest.useRealTimers()
  })
  test('should resolve after 1s with given value', async () => {
    // When
    const promise = doAsync('hello')
    jest.advanceTimersByTime(1000)
    const result = await promise
    jest.runOnlyPendingTimers()
    // Then
    expect(result).toBe('hello')
  })
  test('should reject after 1s with given error', async () => {
    // When
    const error = new Error('oops')
    const promise = doAsync(undefined, error)
    jest.advanceTimersByTime(1000)
    // Then
    await expect(promise).toBeRejectedWith(error)
    jest.runOnlyPendingTimers()
  })
  test('should throw an error synchronously and log it', (done) => {
    // When
    const error = new Error('oops')
    const log = jest.fn()
    const promise = doAsync(undefined, error, true, log)
    // Then
    expect(log).toHaveBeenNthCalledWith(1, error.message)
    expect(promise).toBeRejectedWith(error).then(done)
  })
  test('should reject after 1s and log the given error', async () => {
    // When
    const error = new Error('oops')
    const log = jest.fn()
    const promise = doAsync(undefined, error, false, log)
    jest.advanceTimersByTime(1000)
    // Then
    await expect(promise).toBeRejectedWith(error)
    jest.runOnlyPendingTimers()
    expect(log).toHaveBeenNthCalledWith(1, error.message)
  })
})