export const ListTopMenu = () => {
  return [
    {
      id: 1,
      title: "Services" , //|| t('menuTop.m1')
      href: '/services',
    },
    {
      id: 2,
      title: "Case studies" ,//|| t('menuTop.m2')
      href: '/case-studies',
      children: [
        {
          id: '1-1',
          title: 'FinTech',
          href: '/case-studies?category=fin-tech',
        },
        {
          id: '1-2',
          title: 'BlockChain',
          href: '/case-studies?category=block-chain',
        },
        {
          id: '1-3',
          title: 'Education Tech',
          href: '/case-studies?category=education-tech',
        },
        {
          id: '1-4',
          title: 'Insurance',
          href: '/case-studies?category=insurance',
        },
        {
          id: '1-5',
          title: 'Real Estate',
          href: '/case-studies?category=real-estate',
        },
        {
          id: '1-6',
          title: 'Logistic',
          href: '/case-studies?category=logistic',
        },
      ],
    },
    {
      id: 3,
      title: "About us" ,//|| t('menuTop.m3')
      href: '/about-us',
      children: [
        {
          id: '3-1',
          title: 'How we work',
          href: '/about-us?category=how-work',
        },
        {
          id: '3-2',
          title: 'Our partnerships',
          href: '/about-us?category=our-partnerships',
        },
        { id: '3-3', title: 'Locations', href: '/about-us?category=locations' },
        { id: '3-4', title: 'Careers', href: '/about-us?category=careers' },
        {
          id: '3-5',
          title: 'Why deffina',
          href: '/about-us?category=why-deffina',
        },
      ],
    },
    {
      id: 4,
      title: "Blog" ,//|| t('menuTop.m4')
      href: '/blog',
    },
  ];
};

export const relationListTopMenu = {
  'fin-tech': 'FinTech',
  'block-chain': 'BlockChain',
  'education-tech': 'Education Tech',
  insurance: 'Insurance',
  'real-estate': 'Real Estate',
  logistic: 'Logistic',
  'how-work': 'How we work',
  locations: 'Locations',
  careers: 'Careers',
  'why-deffina': 'Why deffina',
};
