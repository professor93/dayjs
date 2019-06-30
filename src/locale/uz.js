import dayjs from 'dayjs'

const locale = {
  name: 'uz',
  weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
  months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avgust_sentabr_oktabr_noyabr_dekabr'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
  monthsShort: 'yan_fev_mar_apr_may_iyun_iyl_avg_sen_okt_noy_dek'.split('_'),
  weekdaysMin: 'Ya_Du_Se_Ch_Pa_Ju_Sh'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'D MMMM YYYY, dddd HH:mm'
  },
  relativeTime: {
    future: 'Yaqin %s ichida',
    past: 'Bir necha %s oldin',
    s: 'fursat',
    m: 'bir daqiqa',
    mm: '%d daqiqa',
    h: 'bir soat',
    hh: '%d soat',
    d: 'bir kun',
    dd: '%d soat',
    M: 'bir oy',
    MM: '%d oy',
    y: 'bir yil',
    yy: '%d yil'
  }
}

dayjs.locale(locale, null, true)

export default locale

