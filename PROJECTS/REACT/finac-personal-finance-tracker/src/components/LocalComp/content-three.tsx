import Image from 'next/image'

export default function ContentSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="mx-auto max-w-2xl">
                        <div>
                            <h2 className="text-foreground mt-4 text-4xl font-semibold">Get Alert From Your Personal AI Assistance</h2>
                            <p className="text-muted-foreground mb-12 mt-4 text-xl">Our AI assistant helps you track better and faster. Generate insights, improve your workflow, and stay informed.</p>
                        </div>

                        <div className="relative mt-12 overflow-hidden rounded-3xl bg-black/10 md:mt-16">
                            <img
                                src="https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg"
                                alt=""
                                className="absolute inset-0 size-full object-cover"
                            />

                            <div className="bg-background rounded-(--radius) relative m-4 overflow-hidden border border-transparent shadow-xl shadow-black/15 ring-1 ring-black/10 sm:m-8 md:m-12">
                                <Image
                                    src="/assets/demo.png"
                                    alt="app screen"
                                    width="2880"
                                    height="1842"
                                    className="object-top-left size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
