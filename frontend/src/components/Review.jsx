import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ReviewForm = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [price, setPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [usuario, setUsuario] = useState('');


  const getUser = async () => {
    try {
      const localStorageUser = localStorage.getItem('username');
      if (localStorageUser) {
        setUsuario(localStorageUser);
        console.log(usuario);
      }
    } catch (error) {
      setUsuario('Usuario Anonimo');
    }
  }

  useEffect(() => {
    getUser();
  })
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setError('');

    // Validación de entrada
    if (!productName || !price || !description || !comment || rating < 1 || rating > 5) {
      setError('Por favor, completa todos los campos correctamente.');
      return;
    }

    try {
      // Crea el producto en la base de datos
      const productResponse = await fetch("http://localhost/api/product/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: productName,
          price: price,
          description: description
        }),
      });

      if (!productResponse.ok) {
        throw new Error('Error al crear el producto');
      }

      const createdProduct = await productResponse.json();

      // Crea la review asociada al producto
      const reviewResponse = await fetch("http://localhost/api/review/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          comment: comment,
          rating: rating,
          product_id: createdProduct.id,
          author: usuario
        }),
      });

      if (!reviewResponse.ok) {
        throw new Error('Error al crear la reseña');
      }

      const createdReview = await reviewResponse.json();
      console.log(createdReview)
      navigate('/Opinion'); 

    } catch (error) {
      console.error("Error al guardar la hamburguesa y la review:", error);
      setError('Error al guardar la reseña. Inténtalo nuevamente.');
    }
  };

  return (
    <form onSubmit={handleSubmitReview} className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Dejar una opinión</h3>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nombre de la Hamburguesa
        </label>
        <input
          type="text"
          placeholder="Nombre de la hamburguesa"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Precio de la hamburguesa
        </label>
        <input
          type="number"
          placeholder="$0"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Descripción de la hamburguesa
        </label>
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows={4}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tu Opinión
        </label>
        <textarea
          placeholder="Comentario"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows={4}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Calificación
        </label>
        <input
          type="number"
          placeholder="Calificación (1-5)"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          min="1"
          max="5"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
      >
        Enviar Opinión
      </button>
    </form>
  );
};
