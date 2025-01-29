import { Button } from '../ui/button'
import { FaPlay } from 'react-icons/fa6'
import { FaApple } from 'react-icons/fa'

const FooterLeft = () => {
  return (
    <div className="absolute left-0 top-0 text-gray-500 font-medium">
      <div className="text-xl font-semibold text-mainBlue">3333-3333</div>
      <div className="pt-6 font-semibold">평일 10:00 - 18:00</div>
      <div className="font-semibold">
        &#40;점심시간 13:00 - 14:00 제외 주말/공휴일 제외&#41;
      </div>
      <div className="flex justify-between w-[350px] mb-12 mt-1">
        <Button bgColor="blue" size="default" rounded>
          <FaApple className="mr-4" />
          APP STORE
        </Button>
        <Button bgColor="blue" size="default" rounded>
          <FaPlay className="mr-4" />
          PLAY STORE
        </Button>
      </div>
      <div className="text-sm">
        <div className="flex justify-between w-[350px] pb-2">
          <div>이용약관</div>
          <div>개인정보처리방침</div>
          <div>사업자 정보확인</div>
        </div>
        <div className="pb-2">
          <div>&#40;주&#41; Boram3은 SEMI 프로젝트입니다</div>
          <div>쌍용 교육센터 보람3조 화이팅</div>
        </div>
        <div>
          상호명: &#40;주&#41;BORAM3조&middot;주소: 서울특별시 강남구 보람타워
          3층
        </div>
        <div>
          사업자등록번호 : 333-33-3333 &middot; 통신판매업신고증:제
          3333-서울강남-3333호 &middot; 직업정보제공사업 신고번호: 서울청 제
          3333-33호
        </div>
        <div className="">
          고객센터: 3333-3333 &middot; 이메일 BORAM@naver.com
        </div>
        <div className="">
          Copyright &copy; Brave Mobile Inc. All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default FooterLeft
