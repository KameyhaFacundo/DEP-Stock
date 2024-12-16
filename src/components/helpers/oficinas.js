const API_BASE_URL="http://localhost/archivos/depStock";

//Para traer las oficinas o centros
export const fetchCentros = async () =>
{
    try{
        const response = await fetch(`${API_BASE_URL}/ObtenerOficinas.php`);
        const data = await response.json();
        return data.centros || [];
    }catch(error)
    {
        console.error("Error fetching centos: ",error);
        throw error
    }
}