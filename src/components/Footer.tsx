const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} - Ivan Baksheev</p>
        <p className="text-sm mt-2">Thank you for your support!</p>
      </div>
    </footer>
  );
};

export default Footer; 