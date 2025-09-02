export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Welcome to your first Next.js application
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚀 Ready to Build Something Amazing?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This is a simple Hello World page built with Next.js and Tailwind CSS. 
              You can start editing the code to create your own unique application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-2">Fast</h3>
              <p className="text-sm opacity-90">Built with Next.js for optimal performance</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-2">Modern</h3>
              <p className="text-sm opacity-90">Using the latest React features</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-2">Styled</h3>
              <p className="text-sm opacity-90">Beautiful UI with Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}