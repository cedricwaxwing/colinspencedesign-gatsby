export const portfolio = [
  {
    slug: 'typingcom',
    desc:
      'Over 39 million people use <a clas="link link--dk" href="https://typing.com" target="blank">Typing.com</a> to learn and teach typing around the world. Although Typing.com has been around for over a decade, the redesign creates a more engaging, and intuitive experience for both students and teachers.',
    link: { url: 'https://www.typing.com', name: 'See Typing.com' },
    tags: ['UX Design', 'Front-End Development', 'Illustration'],
    title: 'Typing.com',
  },
  {
    slug: 'yang2020',
    desc:
      "Andrew Yang is an American 2020 Democratic presidential candidate running with the flagship proposal known as the Freedom Dividend in the form of $1,000 monthly for every American over the age of 18. Yang believes that a Universal Basic Income is a necessary response to the rapid development of automation, which is increasingly leading to workforce challenges, and that job displacement by automation is what led to Donald Trump's election in 2016. More than 160 policy proposals are listed on his campaign website.",
    link: { url: 'https://www.yang2020.com', name: 'See More' },
    tags: ['Graphic Design', 'Web Development'],
    title: 'Yang 2020',
  },
  {
    slug: 'nightvision',
    desc:
      'I am co-founder of the Edmonton music promo group, Night Vision, and for the first few years, I was sole designer of the associated brand. The Night Vision brand has become an icon and key piece of the Edmonton music scene.',
    link: { url: 'www.nightvisionmuisc.ca', name: 'See More' },
    tags: ['Brand Design', 'Illustration'],
    title: 'Night Vision',
  },
  {
    slug: 'granify',
    desc:
      'Granify is a SaaS solution that fits smack dab at the intersection of artificial intelligence and e-commerce. It enables online retailers to maximize their sales by using cutting edge big data and machine learning technologies. The software predicts specific user barriers, and offers solutions to those problems before the user leaves the site. <p class="well well--t">I was hired on to build the design team at Granify when it was just a small startup. I worked as the sole designer, while laying the ground work for future hires. I eventually hired and led a team of 4, contributing to a  <a target="blank" href="http://business.financialpost.com/entrepreneur/fp-startups/startup-funding-roundup-granify-raises-9-million-payfirma-gets-13-million?__lsa=765e-110e"> Series A funding of $9M</a> from Valar Ventures in 2015. This was the largest tech investment in Alberta that year, and my team of designers and I had a large role, producing the public facing product. We worked with some of the largest brands in the world like <a target="blank" href="https://www.hsn.com">HSN</a>, <a target="blank" href="https://www.hollister.com">Hollister</a>, <a target="blank" href="https://www.toysrus.com">Toys R\' Us</a>, <a target="blank" href="https://www.hallmark.com">Hallmark</a> and many others across the globe. In the first 3 months of 2017 alone, our work had led to over $21M in new sales for our clients!</p>',
    link: { url: 'https://www.granify.com', name: 'See Granify.com' },
    tags: ['UI Design', 'Web Design', 'Illustration'],
    title: 'Granify',
  },
  {
    slug: 'visiomedia',
    desc:
      "Visio Media is Edmonton's first advertising company to focus on digital advertising through in-elevator adverts. Visio Media was featured in the August 2013 issue of <em>Alberta Venture</em> in the Next Up column. The company continues to innovate as they rise to the forefront of in-elevator advertising in Edmonton, Vancouver, Toronto, and New York.",
    tags: ['Brand Design'],
    title: 'Visio Media',
  },
  {
    slug: 'owlustrations',
    desc:
      '<em>Owlustrations</em> is an illustration series which I created for an art show in 2011. These owlustrations were some of my favourite pieces to work on, and showcased a hand-rendered detail that received a great response. </br></br>Printed on 45lb coated Matte paper 7” x 7”.',
    tags: ['Illustration'],
    title: 'Owlustrations',
  },
]

export const thumbnails = portfolio.map(project => project.slug)

// const slugs = portfolio.map((project) => (project.slug));
// export const thumbnails = slugs.reduce((o, key) => ({ ...o, [key]: `../../images/portfolio/${key}/${key}-thumbnail.png`}), {})
