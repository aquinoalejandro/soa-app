import React, { useState, useEffect } from 'react';
import { ReviewCard } from '../components/Card';
import { ReviewForm } from '../components/Review';
import { MessageSquare, Search } from 'lucide-react';

const burgerMenu = {
  101: "Hamburguesa Clásica",
  102: "Hamburguesa BBQ Bacon",
  103: "Hamburguesa Veggie",
  104: "Hamburguesa Mexicana",
  105: "Hamburguesa Blue Cheese",
};

function Opinion() {
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('product');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llama al servicio de productos y reseñas
    const fetchProductsAndReviews = async () => {
      try {
        // Obtener todos los productos
        const productResponse = await fetch('http://localhost/api/products');
        const productsData = await productResponse.json();

        // Obtener todas las reseñas
        const reviewsResponse = await fetch('http://localhost/api/reviews');
        const reviewsData = await reviewsResponse.json();

        // Relaciona las reseñas con sus productos
        const combinedReviews = reviewsData.map(review => {
          const product = productsData.find(prod => prod.id === review.product_id);
          return {
            ...review,
            productName: product ? product.name : 'Producto desconocido',
            productPrice: product ? product.price : 'N/A',
            productDescription: product ? product.description : 'N/A'
          };
        });

        // Guarda las reseñas y los productos en el estado
        setReviews(combinedReviews);
        setProducts(productsData);
      } catch (error) {
        console.error("Error al obtener productos o reseñas:", error);
      }
    };

    fetchProductsAndReviews();
  }, []);

  const filteredReviews = reviews.filter(review => {
    const searchLower = searchTerm.toLowerCase();
    if (filterBy === 'product') {
      return review.productName.toLowerCase().includes(searchLower);
    } else {
      return review.clientName?.toLowerCase().includes(searchLower);
    }
  });

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
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Opiniones de Hamburguesas
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre lo que las personas opinan sobre las deliciosas (o no) hamburguesas y comparte tu propia experiencia.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Buscar opiniones..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="product">Filtrar por Hamburguesa</option>
                  <option value="client">Filtrar por Cliente</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {filteredReviews.length > 0 ? (
                filteredReviews.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))
              ) : (
                <div className="text-center py-8">
                  <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No se encontraron opiniones</p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:sticky lg:top-8 h-fit">
            <ReviewForm burgerMenu={burgerMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opinion;
