import { useParams } from "react-router-dom";
import { useGetPropertyByIdQuery } from "../../Store/api/cardWithDetailsApi";
import { FaRegHeart } from "react-icons/fa";

export const CardWithDetails = () => {
  const { id } = useParams();

  console.log("ID from URL params:", id);
  const { data, error, isLoading } = useGetPropertyByIdQuery(id!);

  if (isLoading) return <div className="loader"></div>;
  if (error) return <div>Error loading properties</div>;

  if (id === undefined) {
    return <div>Error: Property ID is missing</div>;
  }

  console.log("Data from API:", data); // Проверяем структуру данных

  return (
    <div className="card">
      <div className="imgIcon">
        <img src={data?.coverPhoto?.url} alt="Property" />
        <button className="fav">
          <FaRegHeart size={30} />
        </button>
      </div>
      <div className="card-content">
        <div className="new-listing">Score: {data?.score}/100</div>
        <div className="price">$ {data?.price}</div>
        <div className="class">product: {data?.product}</div>
        <div className="class">type: {data?.type}</div>
        <div className="description">$ {data?.description}</div>
        <div className="details">
          {data?.rooms} bed &bull; {data?.baths} bath
        </div>
        <div className="address">
          {data?.title}
          <br />
          {data?.location?.[0]?.name}
        </div>
        <div className="contacts">
          <span className="number">owner's name: {data?.contactName}</span>
          <span>Contacts:</span>
          <div>
            <span className="number">mobile: {data?.phoneNumber.mobile}</span>
            <span className="number">phone: {data?.phoneNumber.phone}</span>
            <span className="number">
              whatsapp: +{data?.phoneNumber.whatsapp}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
