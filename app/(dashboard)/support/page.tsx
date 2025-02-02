"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const faqs = [
  {
    question: "How do I generate an OTP?",
    answer:
      "To generate an OTP, select your desired operator from the dashboard, enter the phone number, and click 'Generate OTP'. The OTP will be sent to the provided number.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, UPI, and net banking for adding balance to your account.",
  },
  {
    question: "How long does an OTP remain valid?",
    answer:
      "OTPs typically remain valid for 10-15 minutes after generation. You can see the exact time remaining in the 'LEFT' column of your OTP history.",
  },
  {
    question: "Can I cancel an OTP request?",
    answer:
      "Yes, you can cancel any pending OTP request by clicking the 'Cancel' button in the OTP history table. This will stop the OTP delivery and refund your balance.",
  },
  {
    question: "What should I do if the OTP is not received?",
    answer:
      "If you don't receive an OTP within a few minutes, you can try canceling the request and generating a new one. If the issue persists, please contact our support team.",
  },
]

export default function SupportPage() {
  return (
    <div className="mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Support</h1>
        <div className="h-1 w-32 bg-gradient-to-r from-rose-600 to-red-600 mt-2" />
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Find quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Need help? Send us a message and we will get back to you</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Describe your issue..." rows={4} />
                </div>
              </div>
              <Button className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

