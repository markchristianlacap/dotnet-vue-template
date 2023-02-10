import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isToday from 'dayjs/plugin/isToday'
dayjs.extend(isToday)
dayjs.extend(customParseFormat)
export default dayjs
