    export const goToHomePage = (navigate) => {
        navigate("/")
    }
    export const goToPokedexPage = (navigate) => {
        navigate("/Pokedex")
    }
    export const goToDetailPage = (navigate, pokemon) => {
        navigate(`/Detail/${pokemon}`)
    }
