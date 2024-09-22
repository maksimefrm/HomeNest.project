import { useEffect, useState } from "react";
import { useGetPropertiesQuery } from "../../Store/api/cardApi";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const Favorites = () => {
  const { data, error, isLoading } = useGetPropertiesQuery(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Загружаем избранные из Local Storage при первом рендере
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Обновляем Local Storage при изменении списка избранных
  useEffect(() => {
    if (favorites.length > 0) {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]); // Этот эффект сработает каждый раз, когда изменится список favorites

//   все удаляется нахер
  useEffect(() => {
    if (favorites.length < 1) {
        localStorage.removeItem('favorites');
    }
  }, [favorites]);


  if (isLoading) return <div className="loader"></div>;
  if (error) return <div>Error loading properties</div>;

  // Фильтруем карточки недвижимости, чтобы показать только избранные
  const favoriteProperties = data?.hits.filter((property: any) =>
    favorites.includes(property.externalID)
  );

  return (
<div>
      {favoriteProperties?.length === 0 ? (
        <p>Нет избранных карточек</p>
      ) : (
        <div>
          {favoriteProperties?.map((property: any) => (
            <div key={property.externalID} className="card">
              <div className="imgIcon">
                <img src={property?.coverPhoto?.url} alt="Image" />
                <button
                  className={`fav ${
                    favorites.includes(property.externalID) ? "active" : ""
                  }`}
                  onClick={() =>
                    setFavorites(
                      favorites.filter((fav) => fav !== property.externalID)
                    )
                  } // Удаление из избранного
                >
                  {favorites.includes(property.externalID) ? (
                    <FaHeart size={30} />
                  ) : (
                    <FaRegHeart size={30} />
                  )}
                </button>
              </div>
              <div className="card-content">
                <div className="new-listing">Score: {property?.score}/100</div>
                <div className="price">$ {property?.price}</div>
                <div className="details">
                  {property?.rooms} bed &bull; {property?.baths} bath
                </div>
                <div className="address">
                  {property?.title}
                  <br />
                  {property?.location?.[0]?.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
