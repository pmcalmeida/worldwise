import { useSearchParams } from "react-router-dom";

function useUrlPosition() {
    const [searchParams] = useSearchParams();
    const lat = searchParams.
}