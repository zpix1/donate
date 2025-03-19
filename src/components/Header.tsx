const Header = () => {
  return (
    <header className="pt-4 w-full flex justify-center items-center relative">
      <div
        className="w-full max-w-5xl h-48 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: "url('public/header.png')" }}
        title="Background image created using https://github.com/zpix1/polyomino"
      >
        <div className="w-full h-full flex items-center justify-center bg-opacity-40">
          <div className="bg-black bg-opacity-70 p-4 rounded">
            <h1 className="text-4xl font-bold text-white text-center">
              Ivan Baksheev's Support Page
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
