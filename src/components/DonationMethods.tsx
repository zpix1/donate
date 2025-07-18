import { useState } from "react";
import QRCode from "react-qr-code";

interface DonationMethod {
  name: string;
  address: string;
  icon: string;
  description?: string;
  isLink?: boolean;
  link?: string;
}

// Define the gtag function type to avoid TypeScript errors
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: string | number | boolean | undefined;
      }
    ) => void;
  }
}

const DonationMethods = () => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const [showCryptoMethods, setShowCryptoMethods] = useState(false);

  const cryptoMethods: DonationMethod[] = [
    {
      name: "Bitcoin (BTC) - Native SegWit",
      address: "bc1q4ea0ayfk9l2dzf8p0lwu8cuxsdank7lz83p7jr",
      icon: "₿",
      description: "Native SegWit (bech32) address",
    },
    {
      name: "Bitcoin (BTC) - Taproot",
      address: "bc1pdpfvqr6tyez4srm3442ljpv3rrdensx236f6dz7d908nt3v95nkswjjyy2",
      icon: "₿",
      description: "Taproot address",
    },
    {
      name: "Ethereum (ETH)",
      address: "0xE045cd6Fd407C33A2a54f82bB77Cd2D9D0517aeB",
      icon: "Ξ",
      description: "ERC-20 compatible address (USDC, USDT, etc.)",
    },
    {
      name: "Solana (SOL)",
      address: "Akgs7vMS3CU5t4jR8XAc5soNVxPkh679Yp8hXtyZz3nb",
      icon: "S",
      description: "Solana address",
    },
  ];

  // Track event with Google Analytics
  const trackEvent = (methodName: string, action: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: "Donation",
        event_label: methodName,
      });
    }
  };

  const handleDonationAlertsClick = () => {
    trackEvent("DonationAlerts", "click_donation_link");
  };

  const copyToClipboard = (address: string, methodName: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    trackEvent(methodName, "copy_address");
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <div className="mt-8 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Support My Work</h2>
      <p className="mb-6 text-gray-600">
        Your donations help me continue developing and maintaining open source
        software. Choose your preferred method below:
      </p>

      {/* DonationAlerts Card */}
      <div className="mb-6">
        <div className="border rounded-lg p-5 bg-white shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold">DonationAlerts</h3>
              <p className="text-sm text-gray-600 mt-1">Card donations</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="DA_Alert_Color.png"
                alt="DonationAlerts"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </div>
          <a
            href="https://www.donationalerts.com/r/zpix1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDonationAlertsClick}
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full text-center"
          >
            Donate via DonationAlerts
          </a>
        </div>
      </div>

      {/* Crypto Methods Section */}
      <div className="mb-4">
        <button
          onClick={() => setShowCryptoMethods(!showCryptoMethods)}
          className="text-blue-500 hover:text-blue-600 font-medium flex items-center cursor-pointer"
        >
          {showCryptoMethods ? "Hide" : "Show"} Cryptocurrency Donation Methods
        </button>
      </div>

      {showCryptoMethods && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cryptoMethods.map((method) => (
              <div
                key={method.name}
                className="border rounded-lg p-5 bg-white shadow-md flex flex-col h-full"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full mr-3">
                    <span className="text-xl">{method.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{method.name}</h3>
                </div>

                {method.description && (
                  <p className="text-sm text-gray-600 mb-3">
                    {method.description}
                  </p>
                )}

                <div className="flex justify-center mb-4 mt-1 flex-grow">
                  <div className="p-2 bg-white border rounded-lg">
                    <QRCode
                      value={method.address}
                      size={120}
                      level="H"
                      className="mx-auto"
                    />
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-2 rounded-lg">
                  <code className="flex-1 overflow-x-auto text-xs break-all">
                    {method.address}
                  </code>
                  <button
                    onClick={() => copyToClipboard(method.address, method.name)}
                    className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 flex-shrink-0"
                    title="Copy to clipboard"
                  >
                    {copiedAddress === method.address ? "✓" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-600">
            Please double-check the address before sending any cryptocurrency.
            Thank you for your support!
          </p>
        </>
      )}
    </div>
  );
};

export default DonationMethods;
