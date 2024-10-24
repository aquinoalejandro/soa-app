import React, { useState } from 'react';
import { ReviewCard } from '../components/Card';
import { ReviewForm } from '../components/Review';
import { MessageSquare, Search } from 'lucide-react';

const initialReviews = [
  {
    id: 1,
    clientId: 1,
    productId: 101,
    comment: "¡La mejor hamburguesa que he probado! La carne estaba perfectamente cocida y los ingredientes super frescos. El pan brioche era increíble.",
    rating: 5,
    clientName: "Ana García",
    productName: "Hamburguesa Clásica",
    date: "2024-03-15"
  },
  {
    id: 2,
    clientId: 2,
    productId: 102,
    comment: "La hamburguesa BBQ estaba buena, aunque la salsa podría ser un poco más espesa. El bacon estaba crujiente y delicioso.",
    rating: 4,
    clientName: "Carlos Rodríguez",
    productName: "Hamburguesa BBQ Bacon",
    date: "2024-03-14"
  },
  {
    id: 3,
    clientId: 3,
    productId: 103,
    comment: "Una opción vegetariana increíble. La hamburguesa de garbanzos tiene un sabor excepcional y la textura es perfecta.",
    rating: 4.5,
    clientName: "María López",
    productName: "Hamburguesa Veggie",
    date: "2024-03-13"
  }
];

const burgerMenu = {
  101: "Hamburguesa Clásica",
  102: "Hamburguesa BBQ Bacon",
  103: "Hamburguesa Veggie",
  104: "Hamburguesa Mexicana",
  105: "Hamburguesa Blue Cheese",
};

function App() {
  const [reviews, setReviews] = useState(initialReviews);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('product');

  const handleSubmitReview = (newReview) => {
    const review = {
      id: reviews.length + 1,
      clientId: Math.floor(Math.random() * 1000) + 1,
      productId: newReview.productId,
      comment: newReview.comment,
      rating: newReview.rating,
      clientName: "Usuario Anónimo",
      productName: burgerMenu[newReview.productId] || `Hamburguesa #${newReview.productId}`,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([review, ...reviews]);
  };

  const filteredReviews = reviews.filter(review => {
    const searchLower = searchTerm.toLowerCase();
    if (filterBy === 'product') {
      return review.productName.toLowerCase().includes(searchLower);
    } else {
      return review.clientName.toLowerCase().includes(searchLower);
    }
  });

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Opiniones de Hamburguesas
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre lo que nuestros clientes opinan sobre nuestras deliciosas hamburguesas y comparte tu propia experiencia.
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
            <ReviewForm onSubmit={handleSubmitReview} burgerMenu={burgerMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;