'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { HERO_SECTION } from '@/lib/constant'
import { Form } from '@/components/ui/form'
import { FormField, FormItem, FormControl } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'

interface FormPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function FormPopup({ isOpen, onClose }: FormPopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [trustedFormCertUrl, setTrustedFormCertUrl] = useState('')
  const [subid1, setSubid1] = useState('')
  const [subid2, setSubid2] = useState('')
  const [subid3, setSubid3] = useState('')
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false)

  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      zip: '',
    },
    mode: 'onChange',
  })

  // Phone Number Formatting
  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '')
    const limitedPhoneNumber = phoneNumber.slice(0, 10)

    if (limitedPhoneNumber.length === 0) {
      return ''
    }

    if (limitedPhoneNumber.length >= 6) {
      return `(${limitedPhoneNumber.slice(0, 3)}) ${limitedPhoneNumber.slice(
        3,
        6
      )} - ${limitedPhoneNumber.slice(6)}`
    } else if (limitedPhoneNumber.length >= 3) {
      return `(${limitedPhoneNumber.slice(0, 3)}) ${limitedPhoneNumber.slice(
        3
      )}`
    } else {
      return limitedPhoneNumber
    }
  }

  // Zip Code Formatting
  const formatZipCode = (value: string) => {
    return value.replace(/\D/g, '').slice(0, 5)
  }

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)

    try {
      const submissionData = {
        ...data,
        subid1,
        subid2,
        subid3,
        trustedformCertUrl: trustedFormCertUrl,
      }

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        )
      }

      const result = await response.json()

      if (result.accessToken && result.expiresAt) {
        localStorage.setItem('thankyou_token', result.accessToken)
        localStorage.setItem('thankyou_expires', result.expiresAt.toString())
      }

      localStorage.setItem(
        'form_data',
        JSON.stringify({
          email: data.email,
        })
      )

      form.reset()
      onClose()

      if (result.redirectUrl) {
        window.location.href = result.redirectUrl
      } else {
        window.location.href = '/thankyou'
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred'

      alert(`Submission failed: ${errorMessage}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = form.getValues()

    const hasErrors =
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.zip

    if (hasErrors) {
      form.trigger()
    } else {
      form.handleSubmit(onSubmit)()
    }
  }

  const openPartnerModal = () => {
    setIsPartnerModalOpen(true)
  }

  const closePartnerModal = () => {
    setIsPartnerModalOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 backdrop-blur-xs bg-black/20"
        onClick={onClose}
      />
      
      {/* Form Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md md:max-w-md lg:max-w-lg  max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl  font-bold text-gray-500 hover:text-gray-700 cursor-pointer z-10"
        >
          &times;
        </button>

        {/* Form Content */}
        <div className="p-6 md:p-6 lg:p-8">
          <div className="title-group flex flex-col items-center justify-center md:items-start gap-2 mb-4">
            <div className="hero-title text-left md:text-left text-primary">
              <h3 className="text-lg md:text-xl lg:text-[1.4rem] xl:text-[1.5rem] font-semibold">
                {HERO_SECTION.form.title}
              </h3>
            </div>
            <div className="title-description text-left text-color">
              <p className="text-sm md:text-base  font-normal">
                {HERO_SECTION.form.description}
              </p>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1  gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  rules={{ required: 'First name is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          {...field}
                          type="text"
                          className={`w-full text-sm px-3 py-3 rounded-sm placeholder:text-gray-400 transition-colors duration-200 ${
                            form.formState.errors.firstName
                              ? 'border-red-600'
                              : 'border-gray-300'
                          }`}
                          style={{
                            border: form.formState.errors.firstName
                              ? '2px solid #dc2626'
                              : '1px solid rgba(153, 153, 153, 1)',
                            outline: 'none',
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = 'var(--primary-color)'
                            e.target.style.boxShadow =
                              '0 0 0 2px rgba(0, 40, 104, 0.1)'
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor =
                              form.formState.errors.firstName
                                ? '#dc2626'
                                : 'rgba(153, 153, 153, 1)'
                            e.target.style.boxShadow = 'none'
                          }}
                          placeholder="First Name"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  rules={{ required: 'Last name is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          {...field}
                          type="text"
                          className={`w-full text-sm px-3 py-3 rounded-sm placeholder:text-gray-400 transition-colors duration-200 ${
                            form.formState.errors.lastName
                              ? 'border-red-600'
                              : 'border-gray-300'
                          }`}
                          style={{
                            border: form.formState.errors.lastName
                              ? '2px solid #dc2626'
                              : '1px solid rgba(153, 153, 153, 1)',
                            outline: 'none',
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = 'var(--primary-color)'
                            e.target.style.boxShadow =
                              '0 0 0 2px rgba(0, 40, 104, 0.1)'
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor =
                              form.formState.errors.lastName
                                ? '#dc2626'
                                : 'rgba(153, 153, 153, 1)'
                            e.target.style.boxShadow = 'none'
                          }}
                          placeholder="Last Name"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="zip"
                rules={{ required: 'Zip code is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        maxLength={5}
                        onChange={(e) => {
                          const formatted = formatZipCode(e.target.value)
                          e.target.value = formatted
                          field.onChange(e)
                        }}
                        className={`w-full text-sm px-3 py-3 rounded-sm placeholder:text-gray-400 transition-colors duration-200 ${
                          form.formState.errors.zip
                            ? 'border-red-600'
                            : 'border-gray-300'
                        }`}
                        style={{
                          border: form.formState.errors.zip
                            ? '2px solid #dc2626'
                            : '1px solid rgba(153, 153, 153, 1)',
                          outline: 'none',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--primary-color)'
                          e.target.style.boxShadow =
                            '0 0 0 2px rgba(0, 40, 104, 0.1)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor =
                            form.formState.errors.zip
                              ? '#dc2626'
                              : 'rgba(153, 153, 153, 1)'
                          e.target.style.boxShadow = 'none'
                        }}
                        placeholder="Zip Code"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                rules={{ required: 'Phone number is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        type="tel"
                        maxLength={16}
                        onChange={(e) => {
                          const formatted = formatPhoneNumber(e.target.value)
                          e.target.value = formatted
                          field.onChange(e)
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Backspace') {
                            const input = e.target as HTMLInputElement
                            const currentValue = input.value
                            const cursorPosition = input.selectionStart || 0
                            
                            if (currentValue[cursorPosition - 1] === ' ' || 
                                currentValue[cursorPosition - 1] === '-' || 
                                currentValue[cursorPosition - 1] === ')' ||
                                currentValue[cursorPosition - 1] === '(') {
                              e.preventDefault()
                              const charToCheck = currentValue[cursorPosition - 1]
                              let newValue
                              let newCursorPosition
                              
                              if (charToCheck === ')' || charToCheck === '(') {
                                newValue = currentValue.slice(0, cursorPosition - 1) + currentValue.slice(cursorPosition)
                                newCursorPosition = Math.max(0, cursorPosition - 1)
                              } else if (charToCheck === ' ') {
                                const prevChar = currentValue[cursorPosition - 2]
                                if (prevChar === '-' || prevChar === ')') {
                                  newValue = currentValue.slice(0, cursorPosition - 2) + currentValue.slice(cursorPosition)
                                  newCursorPosition = Math.max(0, cursorPosition - 2)
                                } else {
                                  newValue = currentValue.slice(0, cursorPosition - 1) + currentValue.slice(cursorPosition)
                                  newCursorPosition = Math.max(0, cursorPosition - 1)
                                }
                              } else {
                                newValue = currentValue.slice(0, cursorPosition - 1) + currentValue.slice(cursorPosition)
                                newCursorPosition = Math.max(0, cursorPosition - 1)
                              }
                              
                              input.value = newValue
                              setTimeout(() => {
                                input.setSelectionRange(newCursorPosition, newCursorPosition)
                              }, 0)
                              field.onChange({ target: { value: newValue } })
                            }
                          }
                        }}
                        className={`w-full text-sm px-3 py-3 rounded-sm placeholder:text-gray-400 transition-colors duration-200 ${
                          form.formState.errors.phone
                            ? 'border-red-600'
                            : 'border-gray-300'
                        }`}
                        style={{
                          border: form.formState.errors.phone
                            ? '2px solid #dc2626'
                            : '1px solid rgba(153, 153, 153, 1)',
                          outline: 'none',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--primary-color)'
                          e.target.style.boxShadow =
                            '0 0 0 2px rgba(0, 40, 104, 0.1)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor =
                            form.formState.errors.phone
                              ? '#dc2626'
                              : 'rgba(153, 153, 153, 1)'
                          e.target.style.boxShadow = 'none'
                        }}
                        placeholder="Phone"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        type="email"
                        className={`w-full text-sm px-3 py-3 rounded-sm placeholder:text-gray-400 transition-colors duration-200 ${
                          form.formState.errors.email
                            ? 'border-red-600'
                            : 'border-gray-300'
                        }`}
                        style={{
                          border: form.formState.errors.email
                            ? '2px solid #dc2626'
                            : '1px solid rgba(153, 153, 153, 1)',
                          outline: 'none',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--primary-color)'
                          e.target.style.boxShadow =
                            '0 0 0 2px rgba(0, 40, 104, 0.1)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor =
                            form.formState.errors.email
                              ? '#dc2626'
                              : 'rgba(153, 153, 153, 1)'
                          e.target.style.boxShadow = 'none'
                        }}
                        placeholder="Email"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div
                className="text-xs md:text-[0.8rem] text-justify text-gray-600 mt-4 mb-4"
                style={{ lineHeight: '1.6' }}
              >
                <p>
                  By submitting this form, I agree to the United Roofing Experts{' '}
                  <a
                    href="/terms-of-use"
                    className="text-primary cursor-pointer hover:text-secondary transition-colors"
                  >
                    Terms of Use
                  </a>{' '}
                  and{' '}
                  <a
                    href="/privacy-policy"
                    className="text-primary cursor-pointer hover:text-secondary transition-colors"
                  >
                    Privacy Policy
                  </a>
                  . I authorize United Roofing Experts and its{' '}
                  <button
                    type="button"
                    className="text-primary cursor-pointer hover:text-secondary transition-colors bg-transparent border-none p-0"
                    onClick={openPartnerModal}
                  >
                    partners
                  </button>{' '}
                  to send me marketing text messages or phone calls at the number provided, including those made with an autodialer. Standard message and data rates may apply. Message frequency varies. Opt-out anytime by replying STOP or using the unsubscribe link.
                </p>
              </div>

              <Button
                type="submit"
                className="submit-btn w-full text-sm md:text-base font-normal bg-primary text-white px-5 py-4 md:py-5 lg:py-6 relative overflow-hidden transition-all duration-300 ease-in-out z-10 hover:bg-secondary before:content-[''] before:absolute before:-top-1/2 before:-left-1/2 before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:rotate-45 before:animate-shimmer before:z-[-1] before:animate-[shimmer_2s_infinite]"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? 'Submitting...' : HERO_SECTION.form.submitText}
                </span>
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Partners Modal */}
      {isPartnerModalOpen && (
        <div 
          id="partners-modal" 
          className="modal fixed inset-0 w-full h-full z-[10000] bg-black/50 flex items-center justify-center"
        >
          <div className="modal-content bg-white rounded-lg w-[90%] max-w-[500px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[850px] max-h-[90vh] lg:max-h-[95vh] overflow-y-auto transform translate-y-0 transition-transform duration-300 ease-in-out">
            <div
              className="modal-header flex justify-between items-center p-[15px] border-2 border-placeholder"
              style={{ border: "1px solid var(--placeholder-color)" }}
            >
              <h3 className="m-0 text-[1.2rem] md:text-[1.3rem] xl:text-[1.4rem] font-semibold text-heading">Our Partners</h3>
              <button 
                className="close-modal bg-none border-none text-[1.5rem] lg:text-[1.6rem] xl:text-[1.9rem] text-color cursor-pointer p-0 w-auto hover:text-primary hover:bg-none"
                onClick={closePartnerModal}
              >
                &times;
              </button>
            </div>
            <div className="modal-body p-[15px] xl:p-[20px]">
              <div className="partners-grid grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[28px]">
                {HERO_SECTION.partners.map((partner, index) => (
                  <div key={index} className="partner-item flex flex-col items-center gap-[10px] p-[10px] rounded" style={{ border: "1px solid var(--placeholder-color)" }}>
                    <p className="m-0 text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-color text-center">{partner}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
