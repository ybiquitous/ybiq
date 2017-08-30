export default async function assertThrows(test) {
  try {
    return await test()
  } catch (error) {
    return error
  }
}
