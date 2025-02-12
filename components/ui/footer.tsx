import FooterLeft from '@/components/footer/footerLeft'
import FooterRight from '@/components/footer/footerRight'

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-gray-400 pt-12">
      <div className="mx-auto w-3/4 flex justify-between pt-12 relative">
        <FooterLeft />
        <div className="lg:block hidden">
          <FooterRight />
        </div>
      </div>
    </div>
  )
}

export default Footer
