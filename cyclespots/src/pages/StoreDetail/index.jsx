import { useParams } from "react-router-dom";
import StoreDetailView from "../../components/StoreDetailView/StoreDetailView.jsx";

function StoreDetail() {
  const { slug } = useParams();

  return <StoreDetailView slug={slug} />;
}

export default StoreDetail;
