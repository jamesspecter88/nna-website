import HeroSection from '@/app/components/HeroSection';
import FeaturesList from '@/app/components/FeaturesList';
import DemoVideo from '@/app/components/DemoVideo';
import PricingSection from '@/app/components/PricingSection';
import CTAButton from '@/app/components/CTAButton'; // Import CTAButton

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <div className="my-16" />
        <FeaturesList />
        <div className="my-16" />
        <DemoVideo />
        <div className="my-16" />
        <PricingSection />
      </div>
      {/* Example of using CTAButton directly on the page if needed */}
      {/* <div className="py-10 text-center">
        <CTAButton text="Get Started Now" primary={true} href="#" />
      </div> */}
    </main>
  );
}
