import { useParams } from "react-router-dom";

export default function ProductInfo(){

    const params = useParams();
    return (
        <h1>ProductInfo {params.productId}</h1>
    );
} 