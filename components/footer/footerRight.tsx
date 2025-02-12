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
]

const FooterRight = () => {
  return (
    <div className="absolute top-0 right-0 flex items-start">
      {list.map((item, index) => (
        <div
          key={item.title || index}
          className="px-6 flex justify-center flex-col items-center "
        >
          <div className="font-semibold mb-3">{item.title}</div>
          <ul>
            {item.sub.map((subItem, subIndex) => (
              <li
                className="flex justify-center"
                key={`${item.title}-${subIndex}`}
              >
                {subItem}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default FooterRight
