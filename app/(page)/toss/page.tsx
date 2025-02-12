'use client'

import {
  loadTossPayments,
  ANONYMOUS,
  TossPaymentsWidgets,
} from '@tosspayments/tosspayments-sdk'
import { FaCheck } from 'react-icons/fa'

import { useEffect, useState } from 'react'
import { formatPrice } from '@/lib/utils'

const clientKey = process.env.NEXT_PUBLIC_TOSS_KEY as string

//이건 나중에 변경해야함 GW
const customerKey = '4ddsgRxvc8m8IXCPSWx'

const CheckoutPage = () => {
  const [amount, setAmount] = useState({
    currency: 'KRW',
    value: 50_000,
  })
  const [ready, setReady] = useState(false)
  const [widgets, setWidgets] = useState<TossPaymentsWidgets>()

  useEffect(() => {
    async function fetchPaymentWidgets() {
      const tossPayments = await loadTossPayments(clientKey)
      // 회원 결제
      const widgets = tossPayments.widgets({
        customerKey,
      })
      // 비회원 결제
      // const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });

      setWidgets(widgets)
    }

    fetchPaymentWidgets()
  }, [clientKey, customerKey])

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (widgets == null) {
        return
      }
      // ------ 주문의 결제 금액 설정 ------
      await widgets.setAmount(amount)

      await Promise.all([
        // ------  결제 UI 렌더링 ------
        widgets.renderPaymentMethods({
          selector: '#payment-method',
          variantKey: 'DEFAULT',
        }),
        // ------  이용약관 UI 렌더링 ------
        widgets.renderAgreement({
          selector: '#agreement',
          variantKey: 'AGREEMENT',
        }),
      ])

      setReady(true)
    }

    renderPaymentWidgets()
  }, [widgets])

  useEffect(() => {
    if (widgets == null) {
      return
    }

    widgets.setAmount(amount)
  }, [widgets, amount])

  return (
    <div className="w-2/3 mx-auto mb-12">
      <div className="wrapper">
        <div className="box_section">
          {/* 결제 UI */}
          <div id="payment-method" />
          {/* 이용약관 UI */}
          <div id="agreement" />
          {/* 쿠폰 체크박스 */}
          <div>
            <div>
              <label
                htmlFor="coupon-box"
                className="relative flex items-center ml-7"
              >
                <input
                  id="coupon-box"
                  type="checkbox"
                  aria-checked="true"
                  disabled={!ready}
                  className="appearance-none aspect-square w-6 border-mainBlue rounded-md checked:bg-mainBlue cursor-pointer relative border-2"
                  onChange={(event) => {
                    // ------  주문서의 결제 금액이 변경되었을 경우 결제 금액 업데이트 ------
                    setAmount(
                      event.target.checked
                        ? { currency: 'KRW', value: amount.value - 5_000 } // 5,000원 할인 적용
                        : { currency: 'KRW', value: amount.value + 5_000 } // 원래 금액으로 복구
                    )
                  }}
                />
                <FaCheck className="absolute text-white left-[0.4rem] top-[0.3rem] text-sm" />
                <span className="ml-3">5,000원 쿠폰 적용</span>
              </label>
            </div>
          </div>

          {/* 결제하기 버튼 */}
          <button
            className="py-2 bg-mainBlue text-white rounded-lg mx-auto w-1/2 flex justify-center"
            disabled={!ready}
            onClick={async () => {
              try {
                // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
                // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
                // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
                await widgets?.requestPayment({
                  orderId: '9wij2y2XD6rtMgz7WJblh',
                  orderName: '토스 티셔츠 외 2건',
                  successUrl: window.location.origin + '/success',
                  failUrl: window.location.origin + '/fail',
                  customerEmail: 'customer123@gmail.com',
                  customerName: '김토스',
                  customerMobilePhone: '01012341234',
                })
              } catch (error) {
                // 에러 처리하기
                console.error(error)
              }
            }}
          >
            <span className="mr-5">{formatPrice(amount.value)}원</span> 결제하기
          </button>
        </div>
      </div>
    </div>
  )
}
export default CheckoutPage
