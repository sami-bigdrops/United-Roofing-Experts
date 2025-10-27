import React from 'react'
import Navbar from '../../ure/navbar'
import Footer from '../../ure/footer'

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
