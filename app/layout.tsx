import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';  // Import Urbanist font
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

// Load the Urbanist font
const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wendy Edem Ahadome - Frontend Developer',
  description: 'Frontend Developer specializing in building exceptional digital experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={urbanist.className}>  {/* Apply Urbanist font */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
