import { Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss'
import './assets/scss/mobile.scss'
import './assets/scss/enhancements.scss'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata = {
    title: 'Segen Digital Indonesia',
    description: 'Company profile PT Segen Digital Indonesia',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    )
}
