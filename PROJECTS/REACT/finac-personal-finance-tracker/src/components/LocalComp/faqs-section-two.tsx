'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
const faqItems = [
  {
    id: "item-1",
    question: "What does Finac do?",
    answer:
      "Finac helps you track your stock holdings, monitor market movements, and receive real-time alerts. It is strictly a tracking and analytics tool, not a brokerage platform.",
  },
  {
    id: "item-2",
    question: "Can I buy or sell stocks using Finac?",
    answer:
      "No. Finac is not a broker and does not support buying or selling stocks. You can only track your investments, analyse trends, and set custom alerts.",
  },
  {
    id: "item-3",
    question: "Where does Finac get its stock data?",
    answer:
      "Finac uses reliable third-party market data providers to fetch price updates, charts, and market movements. Data availability may vary depending on the chosen exchanges.",
  },
  {
    id: "item-4",
    question: "How do stock alerts work?",
    answer:
      "You can set price alerts, percentage-change alerts, or custom triggers. Finac notifies you instantly when your conditions are met, helping you stay updated without constantly checking markets.",
  },
  {
    id: "item-5",
    question: "Is my portfolio data secure?",
    answer:
      "Yes. All portfolio data is encrypted and stored securely. Finac does not share or sell any personal or financial information to third parties.",
  },
  {
    id: "item-6",
    question: "Do I need to link my brokerage account?",
    answer:
      "No. Finac does not require or support brokerage linking. You manually add the stocks you want to track, ensuring complete control over your data.",
  },
  {
    id: "item-7",
    question: "Can I track multiple portfolios?",
    answer:
      "Yes. You can create and manage multiple portfolios—such as long-term, trading, or watchlists—and view performance separately.",
  },
  {
    id: "item-8",
    question: "How often does the app update stock prices?",
    answer:
      "Prices are updated in real-time or near real-time depending on your data source and region. Some exchanges may have slight delays.",
  },
  {
    id: "item-9",
    question: "Do you charge any subscription fees?",
    answer:
      "Basic features are free. Premium features such as advanced alerts, historical data, or analytics may require a subscription.",
  },
  {
    id: "item-10",
    question: "Does Finac offer investment advice?",
    answer:
      "No. Finac does not provide financial or investment advice. It only offers tracking, analytics, and alerting tools to help you stay informed.",
  },
];


    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-foreground text-4xl font-semibold">FAQs</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Your questions answered</p>
                        <p className="text-muted-foreground mt-6 hidden md:block">
                            Can't find what you're looking for? Contact our{' '}
                            <Link
                                href="#"
                                className="text-primary font-medium hover:underline">
                                customer support team
                            </Link>
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <Accordion
                            type="single"
                            collapsible>
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}>
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <p className="text-muted-foreground mt-6 md:hidden">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
