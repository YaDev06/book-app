const SearchBook = async (search) => {
    const res  = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCgtKOFiVIe71ZDYdRn8fazkZctfnWRIA4`)
    return res.json()
}

const getById = async (id) => {
    const res  = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
    return res.json()
}

export { SearchBook, getById };

// AIzaSyCgtKOFiVIe71ZDYdRn8fazkZctfnWRIA4