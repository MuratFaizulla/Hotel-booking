import "../styles/Footer.scss"
import { LocalPhone, Email } from "@mui/icons-material"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/logo.png" alt="logo" /></a>
      </div>

      <div className="footer_center">
        <h3>Пайдалы сілтемелер</h3>
        <ul>
          <li>Біз туралы</li>
          <li>Ережелер мен шарттар</li>
          <li>Қайтару және қайтару саясаты</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Байланыс</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+7 777 777 77 77</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>@support.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  )
}

export default Footer