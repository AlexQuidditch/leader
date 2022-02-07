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
      logo: '/src/images/mosggi-logo.png',
      link: 'www.mos.ru/ggi/',
      description: 'Государственная инспекция по контролю за использованием объектов недвижимости города Москвы',
    },
    {
      logo: '/src/images/mos-dgi.png',
      link: 'www.mos.ru/dgi/',
      description: 'Департамент городского имущества города Москвы',
    },
    {
      logo: '/src/images/mosgorbti-logo.png',
      link: 'www.mosgorbti.ru/',
      description: 'Московское Городское Бюро Технической Инвентаризации',
    },
    {
      logo: '/src/images/mosdkn.png',
      link: 'www.mos.ru/dkn/',
      description: 'Департамент культурного наследия города Москвы',
    },
    {
      logo: '/src/images/mosdgi.png',
      link: 'www.mos.ru/dgi/',
      description: 'Комитет государственного строительного надзора города Москвы',
    },
    {
      logo: '/src/images/mosmka.png',
      link: 'www.mosgorbti.ru/',
      description: 'Комитет по архитектуре и градостроительству города Москвы',
    },
    {
      logo: '/src/images/rosreestr-logo.png',
      link: 'rosreestr.gov.ru/site/',
      description: 'РосРеестр',
    },
  ]
}
