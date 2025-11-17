import { Metadata } from 'next';
import { Mail, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Old Monk Price',
  description: 'Get in touch with us for inquiries about Old Monk rum prices and information.',
  keywords: 'contact Old Monk, Old Monk inquiry, Old Monk support',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 dark:via-background dark:to-zinc-900/50">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-6 sm:py-8 lg:py-12">
        <div className="space-y-6 sm:space-y-8 bg-gradient-to-b from-zinc-900/50 to-zinc-950/30 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-amber-500/20">
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full mb-3 sm:mb-4">
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-amber-500/80 text-base sm:text-lg">
              Have questions about Old Monk prices? We're here to help!
            </p>
          </div>

          <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
            <div className="bg-zinc-900/50 p-4 sm:p-6 lg:p-8 rounded-xl border border-amber-500/10">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold text-amber-500/90 mb-2">
                    Email Us
                  </h2>
                  <p className="text-sm sm:text-base text-amber-500/70 mb-4">
                    Send us an email and we'll get back to you as soon as possible.
                  </p>
                  <a
                    href="mailto:shyamihtc@gmail.com"
                    rel="nofollow"
                    className="inline-flex items-center space-x-2 text-amber-500 hover:text-amber-400 transition-colors duration-200 font-medium text-base sm:text-lg break-all min-h-[44px]"
                  >
                    <Mail className="h-5 w-5 flex-shrink-0" />
                    <span>shyamihtc@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/30 p-4 sm:p-6 rounded-xl border border-amber-500/5">
              <p className="text-amber-500/60 text-xs sm:text-sm">
                <strong className="text-amber-500/80">Note:</strong> We aim to respond to all inquiries within 24-48 hours. 
                For urgent matters, please include "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

