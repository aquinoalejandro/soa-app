import React, { useState } from 'react';
import { Menu, Star, MessageSquare, ArrowRight } from 'lucide-react';
import Login from '../pages/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-orange-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="ml-2 text-xl font-bold text-gray-900">BurgerCritic</span>
            </div>
            <div className="hidden sm:flex space-x-8">
              <a href="/" className="text-gray-900 hover:text-orange-600 px-3 py-2 font-medium">Inicio</a>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
              >
                Iniciar Sesion
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showLogin ? (
        <Login />
      ) : (
        <>
          <div className="relative bg-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Descubre las Mejores Hamburguesas de la Ciudad
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Lee opiniones auténticas, comparte tus experiencias y encuentra la próxima hamburguesa favorita de tu lista.
                  </p>
                  <button 
                    onClick={() => setShowLogin(true)}
                    className="bg-orange-600 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors flex items-center"
                  >
                    Ver Opiniones
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3"
                    alt="Hamburguesa Gourmet"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-bold text-gray-900">4.9</span>
                      <span className="text-gray-600">Calificación promedio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  ¿Por qué BurgerCritic?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  La plataforma más confiable para descubrir y compartir experiencias sobre las mejores hamburguesas de la ciudad.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Reseñas Verificadas</h3>
                  <p className="text-gray-600">
                    Todas las reseñas son de clientes reales que han probado hamburguesas de todos los lugares.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Comunidad Activa</h3>
                  <p className="text-gray-600">
                    Une a una comunidad apasionada por encontrar las mejores hamburguesas.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Menu className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Variedad de Opciones</h3>
                  <p className="text-gray-600">
                    Desde clásicas hasta gourmet, encuentra la hamburguesa perfecta para ti.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-4">BurgerCritic</h4>
                  <p className="text-gray-400">
                    Tu guía definitiva para encontrar las mejores hamburguesas.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-4">Enlaces</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Inicio</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Menú</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Opiniones</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-4">Legal</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Términos</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Privacidad</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-4">Síguenos</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                <p className="text-gray-400">
                  © 2024 BurgerCritic. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;