const list = [
  {
    title: '고객센터',
    sub: ['문의하기'],
  },
  {
    title: 'FAQ',
    sub: ['이용안내', '안전정책', '예상금액', '강사찾기'],
  },
  {
    title: '공지사항',
    sub: ['보람가입', '보람센터', '보람가이드', '채용안내'],
  },
  {
    title: 'BORAM3조',
    sub: ['이다솔', '임현정', '강나리', '조아라', '차동현', '신지환'],
  },
]

export const FooterRight = () => {
  return (
    <div className="absolute top-0 right-0">
      {list.map((item, index) => (
        <div key={item.title || index}>
          <h3>{item.title}</h3>
          <ul>
            {item.sub.map((subItem, subIndex) => (
              <li key={`${item.title}-${subIndex}`}>{subItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
