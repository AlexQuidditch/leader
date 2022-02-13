interface Partner {
  logo: string
  link: string
  description: string
}

interface PartnersModule {
  list: Partner[]
}

export const partners: PartnersModule = {
  list: [
    {
      logo: '/images/mosggi-logo.png',
      link: 'www.mos.ru/ggi/',
      description: 'Государственная инспекция по контролю за использованием объектов недвижимости города Москвы',
    },
    {
      logo: '/images/mos-dgi.png',
      link: 'www.mos.ru/dgi/',
      description: 'Департамент городского имущества города Москвы',
    },
    {
      logo: '/images/mosgorbti-logo.png',
      link: 'www.mosgorbti.ru/',
      description: 'Московское Городское Бюро Технической Инвентаризации',
    },
    {
      logo: '/images/mosdkn.png',
      link: 'www.mos.ru/dkn/',
      description: 'Департамент культурного наследия города Москвы',
    },
    {
      logo: '/images/mosdgi.png',
      link: 'www.mos.ru/dgi/',
      description: 'Комитет государственного строительного надзора города Москвы',
    },
    {
      logo: '/images/mosmka.png',
      link: 'www.mosgorbti.ru/',
      description: 'Комитет по архитектуре и градостроительству города Москвы',
    },
    {
      logo: '/images/rosreestr-logo.png',
      link: 'rosreestr.gov.ru/site/',
      description: 'РосРеестр',
    },
  ]
}
