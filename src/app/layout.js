import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Abdurashid's Next App",
  description: 'Generated with enthusiasm for web development with nextjs',
}

export default function RootLayout({  children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider >
          <div className="container">
              <Navbar/>
                 {children}
                 <ToastContainer
                  position="bottom-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              <Footer/>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
