import moment from 'moment';    

export const dateHandler = (date) => {
      let dateForComparison = moment(date).format('YYYYMMDD');
      let now = moment().format('YYYYMMDD');
      let lowestAvailableDate = moment().subtract(30, 'years').format('YYYYMMDD');
      if (date === '') {
          return '';
      } else if (dateForComparison > now) {
          return 'Enter data about transactions that you have already made';
      } else if (dateForComparison < lowestAvailableDate) {
          return 'Owww, this is too old event for this app';
      } else {
          return 'correct';
      }
}
