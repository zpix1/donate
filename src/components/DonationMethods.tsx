import { useState } from "react";

interface DonationMethod {
  name: string;
  address: string;
  icon: string;
  description?: string;
}

const DonationMethods = () => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const donationMethods: DonationMethod[] = [
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

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <div className="mt-8 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Support My Work</h2>
      <p className="mb-4 text-gray-600">
        Your donations help me continue developing and maintaining open source
        software. Choose your preferred method below:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {donationMethods.map((method) => (
          <div
            key={method.name}
            className="border rounded-lg p-4 bg-white shadow-md"
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">{method.icon}</span>
              <h3 className="text-xl font-semibold">{method.name}</h3>
            </div>
            {method.description && (
              <p className="text-sm text-gray-600 mb-2">{method.description}</p>
            )}
            <div className="flex items-center mt-2">
              <code className="bg-gray-100 p-2 rounded flex-1 overflow-x-auto text-xs">
                {method.address}
              </code>
              <button
                onClick={() => copyToClipboard(method.address)}
                className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                title="Copy to clipboard"
              >
                {copiedAddress === method.address ? "✓" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-gray-600">
        Please double-check the address before sending any cryptocurrency. Thank
        you for your support!
      </p>
    </div>
  );
};

export default DonationMethods;
