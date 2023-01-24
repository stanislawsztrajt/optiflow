export const formatDate = (date: Date) => {
  return date.toString().substr(0, 10).split('-').reverse().join('.')
}