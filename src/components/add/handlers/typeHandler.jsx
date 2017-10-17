export const typeHandler = (type) => {
      if (type === '') {
        return ''
      } else if (type === 'income' || type === 'consumption') {
        return 'correct'
      }
}
